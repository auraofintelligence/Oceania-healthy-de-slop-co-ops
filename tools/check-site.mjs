import fs from "node:fs";
import path from "node:path";

const root = process.cwd();
const errors = [];

function walk(directory) {
  return fs.readdirSync(directory, { withFileTypes: true }).flatMap(function (entry) {
    if (entry.name === ".git" || entry.name === "node_modules") return [];
    const fullPath = path.join(directory, entry.name);
    return entry.isDirectory() ? walk(fullPath) : [fullPath];
  });
}

const files = walk(root);
const htmlFiles = files.filter(function (file) { return file.endsWith(".html"); });

if (htmlFiles.length === 0) {
  errors.push("No HTML pages were found.");
}

htmlFiles.forEach(function (file) {
  const html = fs.readFileSync(file, "utf8");
  const relative = path.relative(root, file);
  const titleCount = (html.match(/<title>[^<]+<\/title>/gi) || []).length;
  const h1Count = (html.match(/<h1(?:\s[^>]*)?>/gi) || []).length;

  if (titleCount !== 1) errors.push(relative + ": expected one page title.");
  if (h1Count !== 1) errors.push(relative + ": expected one main heading.");
  if (!/<html\s+lang="en-AU">/i.test(html)) errors.push(relative + ": missing Australian English language tag.");
  if (/[\u2013\u2014]/.test(html)) errors.push(relative + ": contains an en dash or em dash.");

  const visibleText = html
    .replace(/<script[\s\S]*?<\/script>/gi, " ")
    .replace(/<style[\s\S]*?<\/style>/gi, " ")
    .replace(/<[^>]+>/g, " ")
    .replace(/&[^;]+;/g, " ")
    .replace(/\s+/g, " ");

  const discouraged = [
    /\bcan\b/i,
    /\bcannot\b/i,
    /smallest next step/i,
    /honest next move/i,
    /\bmandate\b/i,
    /\btruthfully\b/i
  ];

  discouraged.forEach(function (pattern) {
    if (pattern.test(visibleText)) errors.push(relative + ": contains discouraged wording matching " + pattern + ".");
  });

  const references = [...html.matchAll(/(?:href|src)="([^"]+)"/gi)].map(function (match) { return match[1]; });
  references.forEach(function (reference) {
    if (/^(?:https?:|mailto:|tel:|data:|#)/i.test(reference)) return;
    const cleanReference = decodeURIComponent(reference.split("#")[0].split("?")[0]);
    let target = path.resolve(path.dirname(file), cleanReference);
    if (cleanReference.endsWith("/")) target = path.join(target, "index.html");
    if (!fs.existsSync(target)) errors.push(relative + ": missing local file " + reference + ".");
  });
});

const requiredAssets = [
  "assets/css/styles.css",
  "assets/js/site.js",
  "assets/images/hero-home.webp"
];

requiredAssets.forEach(function (relative) {
  if (!fs.existsSync(path.join(root, relative))) errors.push("Missing required asset: " + relative + ".");
});

if (errors.length > 0) {
  console.error(errors.join("\n"));
  process.exit(1);
}

console.log("Site check passed for " + htmlFiles.length + " page.");
