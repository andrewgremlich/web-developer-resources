(async () => {
  function debounce(func, wait) {
    let timeout;

    return function (...args) {
      clearTimeout(timeout);

      timeout = setTimeout(() => {
        func.apply(this, args);
      }, wait);
    };
  }

  const searchInput = document.querySelector("#search");
  const searchResults = document.querySelector("#search-results");
  const searchDoc = FlexSearch.Document({
    document: {
      id: "url",
      index: ["title", "description", "url"],
    },
  });

  for (const sectionUrl of Object.keys(window.sectionsData)) {
    searchDoc.add({
      url: sectionUrl,
      title: window.sectionsData[sectionUrl].title,
      description: window.sectionsData[sectionUrl].description,
    });
  }

  searchInput.addEventListener(
    "input",
    debounce((event) => {
      const searchResult = searchDoc.search(event.target.value);
      const uniqueResult = new Set(searchResult.map(({ result }) => result[0]));

      searchResults.innerHTML = "";

      for (const url of uniqueResult) {
        const paragraph = document.createElement("p");
        const link = document.createElement("a");
        link.href = window.sectionsData[url].url;
        link.textContent = window.sectionsData[url].title;

        paragraph.appendChild(link);
        searchResults.appendChild(paragraph);
      }
    }, 300)
  );
})();
