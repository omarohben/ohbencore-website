import fs from 'fs';
import path from 'path';

export interface BlogFrontmatter {
  title: string;
  slug: string;
  date: string; // ISO date
  description: string;
  tags: string[];
}

export interface BlogPost extends BlogFrontmatter {
  body: string;
}

const BLOG_DIR = path.join(process.cwd(), 'content', 'blog');

function parseFrontmatter(raw: string): { frontmatter: BlogFrontmatter; body: string } {
  // Very lightweight frontmatter parser (YAML subset). Replace with gray-matter or Tina later.
  // TODO: Replace with TinaCMS content API or gray-matter once Tina is configured.
  if (!raw.startsWith('---')) {
    throw new Error('Missing frontmatter');
  }
  const endIndex = raw.indexOf('\n---', 3);
  if (endIndex === -1) {
    throw new Error('Invalid frontmatter block');
  }
  const fmBlock = raw.substring(3, endIndex).trim();
  const body = raw.substring(endIndex + 4).trim();

  const lines = fmBlock.split(/\r?\n/);
  const data: any = {};
  for (const line of lines) {
    const match = line.match(/^([a-zA-Z0-9_]+):\s*(.*)$/);
    if (!match) continue;
    const key = match[1];
    let value = match[2].trim();
    if (value.startsWith('"') && value.endsWith('"')) {
      value = value.slice(1, -1);
    }
    if (key === 'tags') {
      // Expect format: ["tag1","tag2"] or ["tag1", "tag2"]
      const arrMatch = value.match(/\[(.*)\]/);
      if (arrMatch) {
        const inner = arrMatch[1];
        const tags = inner
          .split(',')
          .map((t) => t.trim().replace(/^"|"$/g, ''))
          .filter(Boolean);
        data[key] = tags;
        continue;
      }
      data[key] = [];
      continue;
    }
    data[key] = value;
  }

  const required = ['title', 'slug', 'date', 'description'];
  for (const r of required) {
    if (!data[r]) throw new Error(`Missing frontmatter field: ${r}`);
  }

  const frontmatter: BlogFrontmatter = {
    title: data.title,
    slug: data.slug,
    date: data.date,
    description: data.description,
    tags: data.tags || [],
  };
  return { frontmatter, body };
}

export function getAllPosts(): BlogPost[] {
  if (!fs.existsSync(BLOG_DIR)) return [];
  const files = fs.readdirSync(BLOG_DIR).filter((f) => f.endsWith('.md'));
  const posts: BlogPost[] = [];
  for (const file of files) {
    const fullPath = path.join(BLOG_DIR, file);
    const raw = fs.readFileSync(fullPath, 'utf-8');
    try {
      const { frontmatter, body } = parseFrontmatter(raw);
      posts.push({ ...frontmatter, body });
    } catch (e) {
      console.warn('Failed parsing blog post', file, e);
    }
  }
  // Sort newest first
  return posts.sort((a, b) => b.date.localeCompare(a.date));
}

export function getPostBySlug(slug: string): BlogPost | null {
  const files = fs.readdirSync(BLOG_DIR).filter((f) => f.endsWith('.md'));
  for (const file of files) {
    const raw = fs.readFileSync(path.join(BLOG_DIR, file), 'utf-8');
    try {
      const { frontmatter, body } = parseFrontmatter(raw);
      if (frontmatter.slug === slug) {
        return { ...frontmatter, body };
      }
    } catch (e) {
      continue;
    }
  }
  return null;
}

// Simple Markdown to HTML (very minimal). Replace with MDX/Tina renderer later.
// TODO: Integrate proper MDX/Tina rendering pipeline.
export function renderMarkdown(body: string): string {
  // Convert blank-line separated paragraphs
  const paragraphs = body.split(/\n\n+/).map((p) => p.trim()).filter(Boolean);
  return paragraphs.map((p) => `<p>${p.replace(/\n/g, '<br/>')}</p>`).join('\n');
}
