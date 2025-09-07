"use client";

import { useQuery } from "@tanstack/react-query";
import { useSearchParams } from "next/navigation";
import { H1 } from "summit-kit";
import { v4 } from "uuid";

import { fetchBookmarks } from "@/lib/categories";

const LoadingWrapper = ({ children }) => {
  return (
    <main>
      <H1>Web Developer Resources</H1>
      {children}
    </main>
  );
};

export const CategoryContents = () => {
  const searchParams = useSearchParams();
  const categoryId = Number(searchParams.get("categoryId"));
  const {
    data: category,
    error,
    isLoading,
  } = useQuery({
    queryKey: ["bookmarks"],
    queryFn: fetchBookmarks,
    select: (data: any[]) =>
      data.find((cat: any) => cat.category_id === categoryId),
  });

  if (!categoryId)
    return (
      <LoadingWrapper>
        <div>Select a category to view resources.</div>
      </LoadingWrapper>
    );
  if (isLoading)
    return (
      <LoadingWrapper>
        <div>Loading...</div>
      </LoadingWrapper>
    );
  if (error)
    return (
      <LoadingWrapper>
        <div>Error loading category contents</div>
      </LoadingWrapper>
    );
  if (!category)
    return (
      <LoadingWrapper>
        <div>No resources found for this category.</div>
      </LoadingWrapper>
    );

  const truncate = (str: string, max: number) =>
    str && str.length > max ? `${str.slice(0, max)}...` : str;

  return (
    <main className="col-span-2 h-full overflow-y-scroll">
      <H1>{category.category_name}</H1>
      <ul>
        {category.resources?.map((resource: any) => (
          <a
            key={v4()}
            href={resource.url}
            className="hover:underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            <li>
              <strong className="word-wrap">
                {truncate(resource.title, 50)}
              </strong>
              <div>{truncate(resource.description, 240)}</div>
            </li>
          </a>
        ))}
      </ul>
    </main>
  );
};
