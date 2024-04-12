import fs from "node:fs";

// remove new line characters from readme
const readme = fs.readFileSync("./README.md", "utf8");
// .replace(/\n/g, "");

// split read me based off h2 headers
const splitReadme = readme.split("##");

// drop first element of array
splitReadme.shift();

// a regex to select anything inbetween parenthesis
const regex = /\(([^)]+)\)/g;

// a regex to verify a URL
const urlPattern = /^(https?|ftp):\/\/[^\s/$.?#].[^\s]*$/;

const data = splitReadme.map((section) => {
	const [title, ...urls] = section.split(/\n/g);

	return {
		title: title.trim(),
		urls: urls
			.map((url) => {
				const match = url.match(regex);
				if (match) {
					return match[0].slice(1, -1).trim();
				}
			})
			.filter((val) => {
				if (val && urlPattern.test(val)) {
					return val;
				}
			}),
	};
});

const dataJSFile = `
export const data = {
	title: "Web Developer Resources",
	description: "A collection of resources for a web developer",
	other: ${JSON.stringify(data, null, 2)},
};
`;

// write data to file
fs.writeFileSync("./data.js", dataJSFile);
