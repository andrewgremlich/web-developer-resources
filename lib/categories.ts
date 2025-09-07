export function fetchBookmarks() {
  return fetch(`http://localhost:3000/api/v1/bookmarks`).then((res) =>
    res.json(),
  );
}
