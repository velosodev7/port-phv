import { writeFileSync } from "fs";

const BASE_URL = "https://www.tabnews.com.br/api/v1";

async function fetchTopNews() {
  const res = await fetch(
    `${BASE_URL}/contents?page=1&per_page=30&strategy=relevant`,
  );

  if (!res.ok) throw new Error(`TabNews API error: ${res.status}`);

  const all = await res.json();

  const posts = all
    .filter((item) => item.parent_id === null)
    .slice(0, 10)
    .map((item) => ({
      id: item.id,
      title: item.title,
      slug: item.slug,
      owner_username: item.owner_username,
      source_url: item.source_url || null,
      tabcoins: item.tabcoins,
      children_deep_count: item.children_deep_count,
      published_at: item.published_at,
      url: `https://www.tabnews.com.br/${item.owner_username}/${item.slug}`,
    }));

  writeFileSync(
    "src/data/tabnews.json",
    JSON.stringify(
      {
        updated_at: new Date().toISOString(),
        posts,
      },
      null,
      2,
    ),
  );

  console.log(`✓ ${posts.length} posts salvos em src/data/tabnews.json`);
}

fetchTopNews().catch((err) => {
  console.error(err);
  process.exit(1);
});
