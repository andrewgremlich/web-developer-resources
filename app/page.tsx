import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from "@tanstack/react-query";
import { Suspense } from "react";
import { CategoryContents } from "@/components/CategoryContents";
import { CategorySelect } from "@/components/CategorySelect";
import { fetchBookmarks } from "@/lib/categories";

export default async function Home() {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery({
    queryKey: ["bookmarks"],
    queryFn: fetchBookmarks,
  });

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <Suspense fallback={<div>Loading page...</div>}>
        <main className="h-full">
          <div className="grid grid-cols-3 gap-6 h-full">
            <CategorySelect />
            <CategoryContents />
          </div>
        </main>
      </Suspense>
    </HydrationBoundary>
  );
}
