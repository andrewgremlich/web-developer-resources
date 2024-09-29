import fs from "node:fs";
import { load } from "cheerio";

import { type Resource, type ResourceDisplay, data } from "./data";
import { CreateResource, GetResourceByUrl, prisma } from "./prisma/db";

const getUrlData = async (urlToPull: string): Promise<ResourceDisplay> => {
	const resource = await GetResourceByUrl(urlToPull);

	if (resource) {
		return {
			url: resource.url,
			description: resource.description ?? undefined,
			title: resource.name,
		};
	}

	try {
		const page = await fetch(urlToPull);
		const data = await page.text();
		const $ = load(data);

		let title: string;

		if (page.status !== 200) {
			title = urlToPull;
		} else {
			title = $("title").text();
		}

		CreateResource({
			name: title,
			url: urlToPull,
			description: $("meta[name='description']").attr("content"),
		});

		return {
			url: urlToPull,
			title: title,
			description: $("meta[name='description']").attr("content"),
		};
	} catch {
		return {
			url: urlToPull,
			title: urlToPull,
			description: undefined,
		};
	}
};

const makeSection = async (sectionToGet: Resource) => {
	const sectionData = await Promise.all(
		sectionToGet.urls.map((url) => getUrlData(url)),
	);
	const sortedSectionData = sectionData.sort((a, b) =>
		a.title.localeCompare(b.title),
	);
	const sectionId = sectionToGet.title.toLowerCase().split(" ").join("-");

	return {
		sectionInfo: {
			id: sectionId,
			title: sectionToGet.title,
			sectionData: sortedSectionData.map((section) => ({
				...section,
				sectionId,
			})),
		},
		__html: `
		<section id="${sectionId}" class="category-section">
			<h2><a href="#${sectionId}">${sectionToGet.title}</a></h2>
		<section>
    ${sortedSectionData
			.map(
				(section) =>
					`<p class="resource-title"><a href="${section.url}">${
						section.title.length > 100
							? `${section.title.substring(0, 75)}...`
							: section.title
					}</a></p><p class="description">${section.description ?? ""}</p>`,
			)
			.join("\n")}
			</section>
			</section>
  `,
	};
};

const main = (async () => {
	const sectonsData = await Promise.all(
		data.other
			.sort((a, b) => a.title.localeCompare(b.title))
			.map((sectionToGet) => makeSection(sectionToGet)),
	);

	await prisma.$disconnect();

	// TODO: make a search bar that filters the contents.
	// TODO: since I have page data, perhaps feed it to an OpenAI bot to help find a resource?

	const fileToWrite = `<!DOCTYPE html>
  <html lang="en-us">
    <head>
      <meta charset="utf-8">
      <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
      <title>${data.title}</title>
      <meta name="author" content="Andrew Gremlich">
      <meta name="description" content="${data.description}">
      <link rel="stylesheet" type="text/css" href="./style.css">
			<script>window.sectionsData=${JSON.stringify(
				sectonsData.flatMap(({ sectionInfo }) => sectionInfo.sectionData),
			)}</script>
    </head>
    <body>
			<h1>${data.title}</h1>
			<p>${data.description}</p>

			<input type="text" id="search" placeholder="Search for a resource...">
			<div id="search-results"></div>
		
			<main>
      ${sectonsData.map(({ __html }) => __html).join("")}
      </main>

      <footer>
        <p>Last Updated: ${new Date().toLocaleDateString(undefined, {
					year: "numeric",
					month: "short",
					day: "numeric",
				})}</p>
				<p>Created without React. <a href="https://github.com/andrewgremlich/web-developer-resources" target="_blank">Check it out!</a></p>
      </footer>

			<script src="./hash-listener.js"></script>
			<script src="./flex-search.js"></script>
			<script src="./site-search.js"></script>
    </body>
  </html>`;

	fs.writeFile("index.html", fileToWrite, (err) => {
		if (err) {
			throw err;
		}
		console.log("The file has been saved!");
	});
})();
