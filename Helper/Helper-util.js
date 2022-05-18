export async function getAllItems() {
  const response = await fetch(
    "https://cms.dev.youverify.co/blogs?_start=0&_limit=90&_sort=createdAt:DESC"
  );
  const data = await response.json();

  const items = [];

  for (const key in data) {
    items.push({
      id: key,
      ...data[key],
    });
  }

  return items;
}
