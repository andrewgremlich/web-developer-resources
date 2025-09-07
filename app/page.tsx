import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from "@tanstack/react-query";
import { CategoryContents } from "@/components/CategoryContents";
import { CategorySelect } from "@/components/CategorySelect";
// import { ClientSearch } from "@/components/ClientSearch";
import { fetchBookmarks } from "@/lib/categories";

export default async function Home() {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery({
    queryKey: ["bookmarks"],
    queryFn: fetchBookmarks,
  });

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <main className="h-full">
        {/* <ClientSearch /> */}
        <div className="grid grid-cols-3 gap-6 h-full">
          <CategorySelect />
          <CategoryContents />
        </div>
      </main>
    </HydrationBoundary>
  );
}
