type ResourceItem = {
	title: string;
	description: string;
	url: string;
	category: string;
	date: string;
};

(async () => {
	const contentView = document.querySelector("#content #output");

	if (!contentView) {
		console.warn("No content view element found");
		return;
	}

	const fetchCategoryDataFromSite = async (
		category: string,
	): Promise<ResourceItem[]> => {
		const response = await fetch("/index.json");
		if (!response.ok) {
			throw new Error(`HTTP error! status: ${response.status}`);
		}
		const data = await response.json();
		return data.filter((item: ResourceItem) => item.category === category);
	};

	const outputCategoryData = (items: ResourceItem[]) => {
		if (items.length === 0) {
			contentView.innerHTML = "<p>No items found for this category.</p>";
			return;
		}

		contentView.innerHTML = items
			.map(
				(item: { title: string; description: string; url: string }) => `
			<div class="item">
				<h2><a href="${item.url}">${item.title}</a></h2>
				<p>${item.description}</p>
			</div>
		`,
			)
			.join("");
	};

	// Set initial state for the current page
	const initialUrl = new URL(window.location.href);
	const initialParams = new URLSearchParams(initialUrl.search);
	const initialCategory = initialParams.get("category");
	
	if (!history.state) {
		history.replaceState(
			{ category: initialCategory }, 
			"", 
			window.location.href
		);
	}

	document.querySelectorAll(".nav-item").forEach((navItem) => {
		navItem.addEventListener("click", async (event) => {
			event.preventDefault();
			const categoryId = navItem.getAttribute("data-categoryid");

			if (categoryId) {
				const newUrl = `${window.location.pathname}?category=${categoryId}`;
				history.pushState({ category: categoryId }, "", newUrl);

				const items = await fetchCategoryDataFromSite(categoryId);
				outputCategoryData(items);
			}
		});
	});

	window.addEventListener("popstate", async (event: PopStateEvent) => {
		const state = event.state;
		console.log("Popstate event:", state);

		if (state?.category) {
			// Navigate to a specific category
			const items = await fetchCategoryDataFromSite(state.category);
			outputCategoryData(items);
		} else {
			// Navigate back to the main page (no category)
			// You might want to show all items or a default view here
			contentView.innerHTML = "<p>Welcome! Select a category to view resources.</p>";
		}
	});

	const url = new URL(window.location.href);
	const params = new URLSearchParams(url.search);
	const categoryParam = params.get("category");

	if (!categoryParam) {
		console.log("No category parameter found in URL");
		return;
	}

	const items = await fetchCategoryDataFromSite(categoryParam);
	outputCategoryData(items);
})();
