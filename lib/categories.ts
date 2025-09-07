export function fetchBookmarks() {
  return fetch(`/api/v1/bookmarks`, { cache: "force-cache" }).then((res) =>
    res.json()
  );
}
