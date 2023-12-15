import fs from "fs";
import { load } from "cheerio";

import { data } from "./data.js";

const getUrlData = async (url) => {
	try {
		const page = await fetch(url);
		const data = await page.text();
		const $ = load(data);

		let title;

		if (page.status !== 200) {
			title = url;
		} else {
			title = $("title").text();
		}

		return {
			url,
			title: title,
			description: $("meta[name='description']").attr("content"),
		};
	} catch {
		return {
			url,
			title: url,
			description: false,
		};
	}
};

const makeSection = async (sectionToGet) => {
	const sectionData = await Promise.all(
		sectionToGet.urls.map((url) => getUrlData(url)),
	);

	let title;

	if (sectionToGet.title.length > 200) {
		title = `${sectionToGet.title.substring(0, 200)}...`;
	}

	return `
    <h2 id="${sectionToGet.title.toLowerCase().split(" ").join("-")}">${
			sectionToGet.title
		}</h2>
    ${sectionData
			.sort((a, b) => a.title.localeCompare(b.title))
			.map(
				(section) =>
					`<p><a href="${section.url}">${section.title.substring(
						0,
						100,
					)}</a></p>`,
			)
			.join("\n")}
  `;
};

const main = (async () => {
	const pageHtml = await Promise.all(
		data.other
			.sort((a, b) => a.title.localeCompare(b.title))
			.map((sectionToGet) => makeSection(sectionToGet)),
	);

	const fileToWrite = `<!DOCTYPE html>
<html lang="en-us">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <title>${data.title}</title>
    <meta name="author" content="Andrew Gremlich">
    <meta name="description" content="${data.description}">
    <link rel="stylesheet" type="text/css" href="./style.css">
  </head>
  <body>
    <main>
    <h1>${data.title}</h1>
    <p>${data.description}</p>

    ${pageHtml.join("")}
    </main>

    <footer>
      <p>Last Updated: ${new Date().toLocaleDateString(undefined, {
				year: "numeric",
				month: "short",
				day: "numeric",
			})}</p>
    </footer>
  </body>
</html>`;

	fs.writeFile("index.html", fileToWrite, (err) => {
		if (err) {
			throw err;
		}
		console.log("The file has been saved!");
	});
})();
