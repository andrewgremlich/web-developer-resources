export function fetchBookmarks() {
  return fetch(`/api/v1/bookmarks`).then((res) => res.json());
}
