import { createClient } from "@libsql/client";
import { NextResponse } from "next/server";

export async function GET(_request: Request) {
  // Replace with your Turso DB URL and auth token
  const dbUrl = process.env.TURSO_DB_URL;
  const authToken = process.env.TURSO_AUTH_TOKEN;

  if (!dbUrl || !authToken) {
    return NextResponse.json(
      { error: "Missing Turso DB credentials" },
      { status: 500 },
    );
  }

  const client = createClient({ url: dbUrl, authToken });

  try {
    const result = await client.execute(`
        SELECT resources.id, resources.title, resources.url, resources.description, resources.category_id, categories.name AS category_name
        FROM categories
        LEFT JOIN resources ON categories.id = resources.category_id
        ORDER BY categories.name ASC
      `);

    const categoryMap = new Map();

    for (const row of result.rows) {
      const { id, title, url, description, category_name, category_id } = row;
      if (!categoryMap.has(category_id)) {
        categoryMap.set(category_id, {
          category_id,
          category_name,
          resources: [],
        });
      }
      if (id) {
        categoryMap
          .get(category_id)
          .resources.push({ id, title, url, description });
      }
    }

    const transform = Array.from(categoryMap.values());
    return NextResponse.json(transform);
  } catch (error) {
    console.error("Error fetching category contents:", error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
