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

const allCategorySections = document.querySelectorAll(".category-section");

for (const categorySection of allCategorySections) {
  categorySection.addEventListener("change", (event) => {
    const checkbox = event.target;

    if (checkbox.checked) {
      window.location.hash = `#${checkbox.parentElement.id}`;
    } else {
      window.location.hash = "";
    }
  });
}
