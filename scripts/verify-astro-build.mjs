import fs from "node:fs";
import path from "node:path";
import assert from "node:assert/strict";
import { fileURLToPath } from "node:url";
import SPECIALIZED_WHEELS from "../src/data/specialized-wheels.js";
import { CATEGORIES } from "../src/data/categories.js";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, "..");
const DIST = path.join(ROOT, "dist");


const INDEXABLE_LANGS = [
  "en", "es", "de", "fr", "it", "pt", "pl", "vi", "zh",
  "ja", "ko", "nl", "sv", "da", "no", "tr", "ru", "ar", "hi", "id"
];
const FALLBACK_NOINDEX_LANGS = [
  "th", "cs", "fi", "el", "ro", "hu", "uk", "he",
  "ms", "tl", "bn", "sk", "bg", "hr", "et"
];
const FORBIDDEN_EN_LEAKS = [
  "Popular Free Spin Wheels",
  "Save, Share & Embed",
  "Reject Non-Essential",
  "Search All 35 Languages",
  "Choose Your Language",
  "Editorial Review:",
  "Frequently Asked Questions"
];

function urlToDistFile(urlStr) {
  const pathname = new URL(urlStr).pathname;
  if (pathname === "/") return path.join(DIST, "index.html");
  return path.join(DIST, pathname.replace(/^\//, "") + ".html");
}

function stripHtml(html) {
  return String(html || "")
    .replace(/<script[\s\S]*?<\/script>/gi, " ")
    .replace(/<style[\s\S]*?<\/style>/gi, " ")
    .replace(/<[^>]+>/g, " ")
    .replace(/&[a-z#0-9]+;/gi, " ")
    .replace(/\s+/g, " ")
    .trim();
}

function wordCount(html) {
  const s = stripHtml(html);
  return s ? s.split(/\s+/).filter(Boolean).length : 0;
}

function extractTag(html, re) {
  const m = html.match(re);
  return m
    ? m[1]
        .replace(/&amp;|&#38;/g, "&")
        .replace(/&#39;|&apos;/g, "'")
        .replace(/&quot;|&#34;/g, '"')
        .trim()
    : "";
}

function extractLocs(xml) {
  const out = [];
  const re = /<loc>\s*([^<\s]+)\s*<\/loc>/gi;
  let m;
  while ((m = re.exec(xml)) !== null) out.push(m[1]);
  return out;
}

function checkJsonLd(html, label) {
  const matches = [...html.matchAll(/<script\s+type="application\/ld\+json">([\s\S]*?)<\/script>/gi)];
  assert.ok(matches.length >= 1, `${label}: missing JSON-LD script`);
  for (const m of matches) {
    const parsed = JSON.parse(m[1]);
    assert.ok(parsed["@context"] && parsed["@graph"], `${label}: invalid JSON-LD @graph`);
  }
}

let passed = 0;
function test(name, fn) {
  try {
    fn();
    console.log(`  ✅ PASS: ${name}`);
    passed++;
  } catch (err) {
    console.error(`  ❌ FAIL: ${name}\n     ${err.message}`);
    process.exitCode = 1;
  }
}

console.log("==========================================================");
console.log("🚀 ASTRO 5 + CLOUDFLARE PAGES FULL STATIC VERIFICATION");
console.log("==========================================================");

test("1. Required Cloudflare Pages, SEO, AdSense & PWA artifacts exist in dist/", () => {
  const reqFiles = [
    "_redirects", "_headers", "robots.txt", "ads.txt", "manifest.json", "sw.js",
    "BingSiteAuth.xml", "llms.txt", "f161f13249154be099efeae10d6bd39c.txt",
    "sitemap.xml", "sitemap-index.xml", "sitemap-core.xml", "sitemap-blogs.xml",
    "sitemap-wheels-en.xml", "styles.min.css", "blog.min.css", "script.min.js", "404.html"
  ];
  for (const f of reqFiles) {
    assert.ok(fs.existsSync(path.join(DIST, f)), `Missing dist/${f}`);
  }
  const adsTxt = fs.readFileSync(path.join(DIST, "ads.txt"), "utf8");
  assert.ok(adsTxt.includes("pub-7266388854353340"), "ads.txt missing publisher ID");
});

let allSitemapUrls = [];
test("2. All 17 sitemaps resolve to 288 unique indexable built HTML files in dist/", () => {
  const idxXml = fs.readFileSync(path.join(DIST, "sitemap-index.xml"), "utf8");
  const subMaps = extractLocs(idxXml);
  assert.equal(subMaps.length, 17, `Expected 17 sub-sitemaps, got ${subMaps.length}`);

  const seen = new Set();
  for (const sm of subMaps) {
    const fname = path.basename(new URL(sm).pathname);
    const xml = fs.readFileSync(path.join(DIST, fname), "utf8");
    for (const u of extractLocs(xml)) {
      assert.ok(!seen.has(u), `Duplicate URL across sitemaps: ${u}`);
      seen.add(u);
      const htmlPath = urlToDistFile(u);
      assert.ok(fs.existsSync(htmlPath), `Missing built HTML for sitemap URL ${u} -> ${htmlPath}`);
      const html = fs.readFileSync(htmlPath, "utf8");
      assert.ok(html.includes('name="robots" content="index, follow'), `Non-indexable sitemap URL: ${u}`);
      assert.ok(html.includes(`rel="canonical" href="${u}"`), `Canonical mismatch on ${u}`);
      assert.ok(!html.includes("<%"), `Leftover EJS tag in ${u}`);
      assert.ok(!html.includes("&amp;amp;") && !html.includes("&#38;amp;"), `Double-escaped HTML entity in ${u}`);
      assert.ok(!html.includes("/_astro/"), `Unexpected framework hydration bundle on ${u}`);
    }
  }
  allSitemapUrls = Array.from(seen);
  assert.equal(allSitemapUrls.length, 288, `Expected 288 unique indexable URLs, got ${allSitemapUrls.length}`);
  console.log(`     🗺️ Verified ${subMaps.length} sitemaps -> ${allSitemapUrls.length} built HTML files (0 KB framework JS!)`);
});

test("3. All 69 canonical English wheels pass word count, title/desc length, schema & SEO gates", () => {
  let minWords = Infinity;
  for (const slug of Object.keys(SPECIALIZED_WHEELS)) {
    const html = fs.readFileSync(path.join(DIST, `${slug}.html`), "utf8");
    const title = extractTag(html, /<title>([\s\S]*?)<\/title>/i);
    const desc = extractTag(html, /<meta\s+name="description"\s+content="([^"]*)"/i);
    const words = wordCount(html);
    if (words < minWords) minWords = words;
    assert.ok(title.length >= 25 && title.length <= 60, `${slug}: title length ${title.length} (${title})`);
    assert.ok(desc.length >= 115 && desc.length <= 165, `${slug}: desc length ${desc.length}`);
    assert.ok(words >= 1800, `${slug}: rendered words ${words} < 1800`);
    assert.ok(html.includes("ca-pub-7266388854353340"), `${slug}: missing AdSense tag`);
    assert.ok(html.includes("G-V5Y3W9XM9J"), `${slug}: missing GA4 tag`);
    assert.ok(!html.includes("alt-names-bar"), `${slug}: visible keyword-stuffing bar found`);
    assert.ok(!html.includes("Fair Play Certified"), `${slug}: unverified badge found`);
    checkJsonLd(html, slug);
  }
  const countryHtml = fs.readFileSync(path.join(DIST, "country-picker-wheel.html"), "utf8");
  assert.ok(countryHtml.includes("All 195 Countries"), "country-picker-wheel missing 'All 195 Countries'");
  const brazilHtml = fs.readFileSync(path.join(DIST, "brazil-state-picker-wheel.html"), "utf8");
  assert.ok(brazilHtml.includes("São Paulo (SP)") && brazilHtml.includes("Distrito Federal (DF)"), "brazil-state-picker-wheel missing states");
  console.log(`     📊 Audited 69 canonical EN wheels (min visible words: ${minWords}, all titles <= 60 chars)`);
});

test("4. All 159 localized wheel pages have native guides, valid schema & zero English chrome leakage", () => {
  let count = 0;
  for (const [slug, w] of Object.entries(SPECIALIZED_WHEELS)) {
    const tr = w.translations || {};
    for (const [lc, loc] of Object.entries(tr)) {
      if (lc === "en" || !INDEXABLE_LANGS.includes(lc)) continue;
      if (!loc || !loc.name || !loc.heroSubtitle || !loc.items) continue;
      const html = fs.readFileSync(path.join(DIST, lc, `${slug}.html`), "utf8");
      assert.ok(html.includes('class="card localized-guide"'), `/${lc}/${slug}: missing native localized-guide!`);
      assert.ok(!html.includes("editorial-article"), `/${lc}/${slug}: leaked English editorial-article!`);
      for (const bad of FORBIDDEN_EN_LEAKS) {
        assert.ok(!html.includes(bad), `/${lc}/${slug}: leaked forbidden English string "${bad}"`);
      }
      checkJsonLd(html, `/${lc}/${slug}`);
      count++;
    }
  }
  assert.equal(count, 159, `Expected 159 localized wheel pages, audited ${count}`);
  console.log(`     🌍 Audited ${count}/159 localized wheels: 100% native guides & 0 English leakage`);
});

test("5. All 20 indexable language hubs & 15 fallback noindex hubs emit correct robots & RTL", () => {
  for (const lc of INDEXABLE_LANGS) {
    const f = lc === "en" ? path.join(DIST, "index.html") : path.join(DIST, `${lc}.html`);
    const html = fs.readFileSync(f, "utf8");
    assert.ok(html.includes('name="robots" content="index, follow'), `/${lc}: should be indexable`);
    if (lc === "ar") assert.ok(html.includes('dir="rtl"'), "/ar missing RTL");
  }
  for (const lc of FALLBACK_NOINDEX_LANGS) {
    const html = fs.readFileSync(path.join(DIST, `${lc}.html`), "utf8");
    assert.ok(html.includes('name="robots" content="noindex, follow"'), `/${lc}: fallback hub must be noindex`);
    if (lc === "he") assert.ok(html.includes('dir="rtl"'), "/he missing RTL");
  }
});

test("6. All 8 category hubs pass depth, schema, and zero-jargon checks", () => {
  for (const c of CATEGORIES) {
    const html = fs.readFileSync(path.join(DIST, "category", `${c.slug}.html`), "utf8");
    assert.ok(wordCount(html) >= 600, `/category/${c.slug}: word count < 600`);
    assert.ok(!html.includes("Fair Play Certified"), `/category/${c.slug}: unverified badge`);
    assert.ok(!html.includes("topical cluster"), `/category/${c.slug}: SEO jargon`);
    checkJsonLd(html, `/category/${c.slug}`);
  }
});

test("7. All 25 blogs pass depth (>= 1,800w), title/desc length, AdSense & schema checks", () => {
  const blogDir = path.join(DIST, "blogs");
  const files = fs.readdirSync(blogDir).filter((f) => f.endsWith(".html")).sort();
  assert.equal(files.length, 25, `Expected 25 blogs, got ${files.length}`);
  let minB = Infinity;
  for (const f of files) {
    const html = fs.readFileSync(path.join(blogDir, f), "utf8");
    const title = extractTag(html, /<title>([\s\S]*?)<\/title>/i);
    const desc = extractTag(html, /<meta\s+name="description"\s+content="([^"]*)"/i);
    const words = wordCount(html);
    if (words < minB) minB = words;
    assert.ok(title.length <= 60, `/blogs/${f}: title ${title.length} > 60 (${title})`);
    assert.ok(desc.length >= 115 && desc.length <= 165, `/blogs/${f}: desc ${desc.length}`);
    assert.ok(words >= 1800, `/blogs/${f}: words ${words} < 1800`);
    assert.ok(html.includes("ca-pub-7266388854353340"), `/blogs/${f}: missing AdSense`);
    assert.ok(html.includes("G-V5Y3W9XM9J"), `/blogs/${f}: missing GA4`);
    assert.ok(html.includes("stwol-author-box"), `/blogs/${f}: missing author box`);
    checkJsonLd(html, `/blogs/${f}`);
  }
  console.log(`     📝 Audited 25/25 blogs (min words: ${minB}, all titles <= 60 chars)`);
});

test("8. AdSense Policy Safety: 404, Privacy Policy, Terms & Contact strictly omit AdSense script", () => {
  for (const f of ["404.html", "privacy-policy.html", "terms-and-conditions.html", "contact.html"]) {
    const html = fs.readFileSync(path.join(DIST, f), "utf8");
    assert.ok(!html.includes("pagead2.googlesyndication.com"), `${f} should NOT load AdSense script`);
  }
});

console.log("==========================================================");
console.log(`🏁 ASTRO 5 VERIFICATION SUMMARY: ${passed} / 8 GATES PASSED`);
if (process.exitCode) {
  console.error("❌ SOME CHECKS FAILED");
} else {
  console.log("🎉 ALL 288 PAGES + CLOUDFLARE EDGE ARTIFACTS VERIFIED!");
}
console.log("==========================================================");
