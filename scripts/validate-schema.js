#!/usr/bin/env node
// scripts/validate-schema.js
// Validates all law files in the laws/ directory against required schema fields.
// Run: node scripts/validate-schema.js

const fs = require("fs");
const path = require("path");
const matter = require("gray-matter");

const LAWS_DIR = path.join(__dirname, "..", "laws");
const REQUIRED_FIELDS = [
  "id",
  "title",
  "act",
  "section",
  "jurisdiction",
  "category",
  "tags",
  "last_amended",
];

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

let hasError = false;
const files = walkDir(LAWS_DIR);

if (files.length === 0) {
  console.log("⚠️  No law files found in laws/ directory.");
  process.exit(0);
}

console.log(`\nValidating ${files.length} law file(s)...\n`);

for (const filePath of files) {
  const relativePath = path.relative(LAWS_DIR, filePath);
  let data;

  try {
    const raw = fs.readFileSync(filePath, "utf-8");
    const parsed = matter(raw);
    data = parsed.data;
  } catch (err) {
    console.error(`❌ [${relativePath}] Failed to parse file: ${err.message}`);
    hasError = true;
    continue;
  }

  let fileHasError = false;

  for (const field of REQUIRED_FIELDS) {
    if (data[field] === undefined || data[field] === null || data[field] === "") {
      console.error(`❌ [${relativePath}] Missing required field: "${field}"`);
      fileHasError = true;
      hasError = true;
    }
  }

  if (data.category !== undefined && !Array.isArray(data.category)) {
    console.error(`❌ [${relativePath}] "category" must be an array`);
    fileHasError = true;
    hasError = true;
  }

  if (data.tags !== undefined && !Array.isArray(data.tags)) {
    console.error(`❌ [${relativePath}] "tags" must be an array`);
    fileHasError = true;
    hasError = true;
  }

  if (data.status && !["active", "repealed", "amended"].includes(data.status)) {
    console.error(
      `❌ [${relativePath}] "status" must be one of: active, repealed, amended`
    );
    fileHasError = true;
    hasError = true;
  }

  if (data.last_amended && typeof data.last_amended !== "number") {
    console.error(`❌ [${relativePath}] "last_amended" must be a number (year)`);
    fileHasError = true;
    hasError = true;
  }

  if (!fileHasError) {
    console.log(`✅ [${relativePath}]`);
  }
}

console.log("");
if (hasError) {
  console.error("❌ Validation failed. Please fix the errors above before merging.\n");
  process.exit(1);
} else {
  console.log(`✅ All ${files.length} file(s) passed validation!\n`);
}
