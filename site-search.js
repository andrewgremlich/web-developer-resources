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

  const fullData = await fetch("full-data.json");
  const sectionsData = await fullData.json();
  const searchInput = document.querySelector("#search");
  const searchResults = document.querySelector("#search-results");
  const searchDoc = FlexSearch.Document({
    document: {
      id: "url",
      index: ["title", "description", "url"],
    },
  });

  for (const sectionUrl of Object.keys(sectionsData)) {
    searchDoc.add({
      url: sectionUrl,
      title: sectionsData[sectionUrl].title,
      description: sectionsData[sectionUrl].description,
    });
  }

  console.log(sectionsData);

  searchInput.addEventListener(
    "input",
    debounce((event) => {
      console.log(event.target.value);
      const searchResult = searchDoc.search(event.target.value);
      const uniqueResult = new Set(searchResult.map(({ result }) => result[0]));

      searchResults.innerHTML = "";

      for (const url of uniqueResult) {
        const section = Object.keys(sectionsData).find(
          (sectionUrl) => sectionUrl === url
        );
        const link = document.createElement("a");
        link.href = section.url;
        link.textContent = section.title;
        searchResults.appendChild(link);
      }
    }, 300)
  );
})();
