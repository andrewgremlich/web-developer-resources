document.addEventListener("DOMContentLoaded", () => {
  const urlHash = window.location.hash;

  if (urlHash) {
    const hashedElement = document.querySelector(urlHash);
    const checkbox = hashedElement.querySelector("input[type='checkbox']");

    checkbox.checked = true;
  }
});
