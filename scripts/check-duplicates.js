#!/usr/bin/env node
// scripts/check-duplicates.js
// Checks for duplicate IDs across all law files.
// Run: node scripts/check-duplicates.js

const fs = require("fs");
const path = require("path");
const matter = require("gray-matter");

const LAWS_DIR = path.join(__dirname, "..", "laws");

function walkDir(dir) {
  if (!fs.existsSync(dir)) return [];
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  const files = [];
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

const files = walkDir(LAWS_DIR);
const ids = {};
let hasError = false;

console.log(`\nChecking ${files.length} file(s) for duplicate IDs...\n`);

for (const filePath of files) {
  const relativePath = path.relative(LAWS_DIR, filePath);
  const raw = fs.readFileSync(filePath, "utf-8");
  const { data } = matter(raw);

  if (data.id) {
    if (ids[data.id]) {
      console.error(
        `❌ Duplicate ID "${data.id}" found:\n   ${relativePath}\n   ${ids[data.id]}`
      );
      hasError = true;
    } else {
      ids[data.id] = relativePath;
    }
  }
}

if (hasError) {
  console.error("\n❌ Duplicate IDs found. Please fix before merging.\n");
  process.exit(1);
} else {
  console.log(`✅ No duplicate IDs found across ${files.length} file(s).\n`);
}
