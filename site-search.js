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
const main = document.querySelector("main");
const searchDoc = FlexSearch.Document({
  document: {
    id: "url",
    index: ["title", "description", "url"],
  },
});

for (const section of window.sectionsData) {
  searchDoc.add(section);
}

searchInput.addEventListener("input", debounce((event) => {
  const searchResult = searchDoc.search(event.target.value);
  const uniqueResult = new Set(searchResult.map(({ result }) => result[0]));

  searchResults.innerHTML = "";

  for (const url of uniqueResult) {
    const section = window.sectionsData.find((section) => section.url === url);
    const link = document.createElement("a");
    link.href = section.url;
    link.textContent = section.title;
    searchResults.appendChild(link);
  }
}, 300));
