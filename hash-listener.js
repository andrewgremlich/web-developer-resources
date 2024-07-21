const allCheckboxes = document.querySelectorAll("input[type='checkbox']");

document.addEventListener("DOMContentLoaded", () => {
  const urlHash = window.location.hash;

  for (const checkbox of allCheckboxes) {
    checkbox.checked = false;
  }

  if (urlHash) {
    const hashedElement = document.querySelector(urlHash);
    const checkbox = hashedElement.querySelector("input[type='checkbox']");

    checkbox.checked = true;
  }
});
