import fs from "fs";
import path from "path";
import matter from "gray-matter";
import type { Law, LawMeta, LawFrontmatter } from "./types";

const LAWS_DIR = path.join(process.cwd(), "laws");

function walkDir(dir: string): string[] {
  if (!fs.existsSync(dir)) return [];
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  const files: string[] = [];
  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      files.push(...walkDir(fullPath));
    } else if (entry.name.endsWith(".md") && !entry.name.startsWith("_")) {
      files.push(fullPath);
    }
  }
  return files;
}

export function getAllLawsMeta(): LawMeta[] {
  const files = walkDir(LAWS_DIR);
  return files
    .map((filePath) => {
      const raw = fs.readFileSync(filePath, "utf-8");
      const { data } = matter(raw);
      const relativePath = path
        .relative(LAWS_DIR, filePath)
        .replace(/\\/g, "/");
      const slug = relativePath.replace(/\.md$/, "").split("/");
      return { ...(data as LawFrontmatter), slug } as LawMeta;
    })
    .filter((law) => law.id);
}

export function getLawBySlug(slug: string[]): Law | null {
  const filePath = path.join(LAWS_DIR, ...slug) + ".md";
  if (!fs.existsSync(filePath)) return null;
  const raw = fs.readFileSync(filePath, "utf-8");
  const { data, content } = matter(raw);
  return { ...(data as LawFrontmatter), slug, content, filePath } as Law;
}

export function getAllSlugs(): string[][] {
  const files = walkDir(LAWS_DIR);
  return files.map((filePath) => {
    const relativePath = path
      .relative(LAWS_DIR, filePath)
      .replace(/\\/g, "/");
    return relativePath.replace(/\.md$/, "").split("/");
  });
}
