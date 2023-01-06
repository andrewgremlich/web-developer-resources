const fs = require("fs");
const marked = require("marked");

fs.readFile("README.md", "utf8", (err, data) => {
  if (err) {
    throw err;
  }

  const fileToWrite = `<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <title>Web Developer Resources</title>
    <meta name="author" content="Andrew Gremlich">
    <meta name="description" content="A collection of resources for a web developer">
    <link rel="stylesheet" type="text/css" href="https://dohliam.github.io/dropin-minimal-css/min/a11yana.min.css">
  </head>
  <body>
    ${marked.parse(data)}
  </body>
</html>`;

  fs.writeFile("index.html", fileToWrite, (err) => {
    if (err) {
      throw err;
    }
    console.log("The file has been saved!");
  });
});