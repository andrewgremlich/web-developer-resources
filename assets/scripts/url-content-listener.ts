(async () => {
	const contentView = document.querySelector("#content #output");

	if (!contentView) {
		console.warn("No content view element found");
		return;
	}

	const url = new URL(window.location.href);
	const params = new URLSearchParams(url.search);
	const categoryParam = params.get("category");

	if (!categoryParam) {
		console.log("No category parameter found in URL");
		return;
	}

	const data = await fetch("/index.json");
	const items = await data.json();
	const filteredItems = items.filter(
		(item: { category: string }) => item.category === categoryParam,
	);

	if (filteredItems.length === 0) {
		contentView.innerHTML = "<p>No items found for this category.</p>";
		return;
	}

	contentView.innerHTML = filteredItems
		.map(
			(item: { title: string; description: string; url: string }) => `
			<div class="item">
				<h2><a href="${item.url}">${item.title}</a></h2>
				<p>${item.description}</p>
			</div>
		`,
		)
		.join("");
})();
