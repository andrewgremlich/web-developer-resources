// Turso -> Hugo content import boilerplate
// Fetch rows from a Turso (libSQL) database and create markdown files under content/

import { createClient } from 'npm:@libsql/client';
import * as fs from 'node:fs';
import * as path from 'node:path';
import slugify from 'npm:slugify';
import 'npm:dotenv/config';

interface ResourceRecord {
	id?: number | string;
	title: string;
	description?: string | null;
	body?: string | null; // long form content (markdown or html) stored in db
	category_name?: string | null; // comma separated
	created_at?: string | null;
	updated_at?: string | null;
	url?: string | null; // original reference link
}

function ensureDir(p: string) {
	if (!fs.existsSync(p)) fs.mkdirSync(p, { recursive: true });
}

function toFrontMatter(rec: ResourceRecord): string {
	const date = rec.created_at || rec.updated_at || new Date().toISOString();
	const fm: Record<string, unknown> = {
		title: rec.title.trim().substring(0, 100),
		date,
		lastmod: rec.updated_at || date,
		categories: [rec.category_name],
		description: rec.description?.replace(/[\n\t]/g, ' ') || undefined,
		original_url: rec.url || undefined,
		draft: false
	};

	// Simple YAML serializer for our limited structure
	const yamlLines: string[] = ['---'];
	for (const [k, v] of Object.entries(fm)) {
		if (v === undefined || v === null) continue;
		
			yamlLines.push(`${k}: ${JSON.stringify(v)}`); 
	}
	yamlLines.push('---');
	return yamlLines.join('\n');
}

function recordToMarkdown(rec: ResourceRecord): string {
	const frontMatter = toFrontMatter(rec);
	return `${frontMatter}\n`.trim() + '\n';
}

async function fetchRecords(): Promise<ResourceRecord[]> {
	const url = process.env.TURSO_DB_URL;
	const authToken = process.env.TURSO_AUTH_TOKEN;

	if (!url) throw new Error('TURSO_DB_URL missing');
	if (!authToken) throw new Error('TURSO_AUTH_TOKEN missing');

	const client = createClient({ url, authToken });
	const res = await client.execute(`
		SELECT resources.*, categories.name AS category_name
		FROM resources
		JOIN categories ON resources.category_id = categories.id
	`);
	return res.rows as unknown as ResourceRecord[];
}

function recordSlug(rec: ResourceRecord): string {
	const base = slugify(rec.title, { lower: true, strict: true }) ;

	return base.substring(0, 50); // limit length
}

const OUTPUT_DIR = 'content/resources';

function writeRecords(records: ResourceRecord[]) {
	ensureDir(OUTPUT_DIR);

	for (let i = 0; i < records.length; i++) {
		const rec = records[i];
		try {
			const slug = recordSlug(rec);
			const filepath = path.join(OUTPUT_DIR, `${slug}.md`);
			const md = recordToMarkdown(rec);
			fs.writeFileSync(filepath, md, 'utf8');
		} catch (err) {
			console.error('Failed to write record', err);
		}
	}
}

async function main() {
	console.log('Fetching records from Turso...');
	const records = await fetchRecords();
	console.log(`Fetched ${records.length} records. Writing Hugo content...`);
	console.log('example record:', records[0]);
	await writeRecords(records);
	console.log('Done.');
}

await main();
