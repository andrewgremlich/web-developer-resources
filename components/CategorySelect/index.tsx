"use client";

import { useQuery } from "@tanstack/react-query";
import { Span } from "summit-kit";
import { v4 } from "uuid";
import { fetchBookmarks } from "@/lib/categories";

type Category = {
  id?: number;
  name?: string;
  resources?: any[];
  category_id?: number;
  category_name?: string;
};

export const CategorySelect = () => {
  const { data, error, isLoading } = useQuery<Category[]>({
    queryKey: ["bookmarks"],
    queryFn: fetchBookmarks,
  });

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error loading bookmarks</div>;
  if (!data) return <div>No categories found</div>;

  return (
    <section className="col-span-1 border-r-cyan-800 dark:border-r-cyan-50 border-r-2 overflow-y-scroll h-full">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          const button = (e.nativeEvent as SubmitEvent)
            .submitter as HTMLButtonElement;
          const categoryId = button.value;
          const categoryName = button.getAttribute("data-name");
          // Set categoryId as query param in the URL
          const url = new URL(window.location.href);
          url.searchParams.set("categoryId", categoryId);
          window.history.replaceState({}, "", url.toString());
        }}
      >
        {data.map((category) => (
          <button
            key={v4()}
            type="submit"
            name="categoryId"
            value={category.category_id ?? category.id}
            data-name={category.category_name ?? category.name}
            className="block w-full text-left p-2"
          >
            <Span>{category.category_name ?? category.name}</Span>
          </button>
        ))}
      </form>
    </section>
  );
};
