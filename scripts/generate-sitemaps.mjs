import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import SPECIALIZED_WHEELS from "../src/data/specialized-wheels.js";
import { CATEGORIES } from "../src/data/categories.js";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, "..");
const PUBLIC = path.join(ROOT, "public");
const BASE_URL = "https://spinthewheelsonline.com";
const TODAY = "2026-11-24";


const INDEXABLE_LANGS = [
  "en", "es", "de", "fr", "it", "pt", "pl", "vi", "zh",
  "ja", "ko", "nl", "sv", "da", "no", "tr", "ru", "ar", "hi", "id"
];

const BLOG_SLUGS = fs
  .readdirSync(path.join(ROOT, "src", "pages", "blogs"))
  .filter((f) => f.endsWith(".astro"))
  .map((f) => f.replace(/\.astro$/, ""))
  .sort();

function toHreflangCode(code) {
  if (code === "zh") return "zh-Hans";
  if (code === "tl") return "fil";
  return code;
}

function escapeXml(str) {
  return String(str).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
}

function wrapUrlSet(entries) {
  const hasAlternates = entries.some((e) => Array.isArray(e.alternates) && e.alternates.length > 0);
  const nsAttr = hasAlternates
    ? 'xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml"'
    : 'xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"';

  const urls = entries.map(({ loc, lastmod, alternates }) => {
    const altLines = Array.isArray(alternates) && alternates.length
      ? "\n" + alternates.map((a) => `    <xhtml:link rel="alternate" hreflang="${escapeXml(a.hreflang)}" href="${escapeXml(a.href)}" />`).join("\n")
      : "";
    return `  <url>\n    <loc>${escapeXml(loc)}</loc>\n    <lastmod>${lastmod}</lastmod>${altLines}\n  </url>`;
  });
  return `<?xml version="1.0" encoding="UTF-8"?>\n<urlset ${nsAttr}>\n${urls.join("\n")}\n</urlset>\n`;
}

function writeSitemap(filename, content) {
  fs.writeFileSync(path.join(PUBLIC, filename), content, "utf8");
}

function generate() {
  const allSlugs = Object.keys(SPECIALIZED_WHEELS);
  const generatedWheelSitemaps = [];
  let totalUrls = 0;

  const hubAlternates = [
    { hreflang: "x-default", href: `${BASE_URL}/` },
    ...INDEXABLE_LANGS.map((code) => ({
      hreflang: toHreflangCode(code),
      href: code === "en" ? `${BASE_URL}/` : `${BASE_URL}/${code}`
    }))
  ];

  // 1. sitemap-core.xml
  const coreEntries = [
    { loc: `${BASE_URL}/`, lastmod: TODAY, alternates: hubAlternates },
    ...INDEXABLE_LANGS.filter((c) => c !== "en").map((code) => ({
      loc: `${BASE_URL}/${code}`,
      lastmod: TODAY,
      alternates: hubAlternates
    })),
    { loc: `${BASE_URL}/tools`, lastmod: TODAY },
    ...CATEGORIES.map((c) => ({ loc: `${BASE_URL}/category/${c.slug}`, lastmod: TODAY })),
    { loc: `${BASE_URL}/blogs`, lastmod: TODAY },
    { loc: `${BASE_URL}/about`, lastmod: TODAY },
    { loc: `${BASE_URL}/contact`, lastmod: TODAY },
    { loc: `${BASE_URL}/privacy-policy`, lastmod: TODAY },
    { loc: `${BASE_URL}/terms-and-conditions`, lastmod: TODAY },
    { loc: `${BASE_URL}/changelog`, lastmod: TODAY }
  ];
  writeSitemap("sitemap-core.xml", wrapUrlSet(coreEntries));
  totalUrls += coreEntries.length;

  // Precompute hreflang alternates per wheel
  const wheelAlternatesBySlug = new Map();
  for (const slug of allSlugs) {
    const wheel = SPECIALIZED_WHEELS[slug];
    const alts = [
      { hreflang: "x-default", href: `${BASE_URL}/${slug}` },
      { hreflang: "en", href: `${BASE_URL}/${slug}` }
    ];
    for (const code of INDEXABLE_LANGS) {
      if (code === "en") continue;
      const loc = wheel?.translations?.[code];
      if (loc && loc.name && loc.heroSubtitle && loc.items) {
        alts.push({ hreflang: toHreflangCode(code), href: `${BASE_URL}/${code}/${slug}` });
      }
    }
    wheelAlternatesBySlug.set(slug, alts);
  }

  // 2. sitemap-wheels-en.xml
  const enWheelEntries = allSlugs.map((slug) => ({
    loc: `${BASE_URL}/${slug}`,
    lastmod: TODAY,
    alternates: wheelAlternatesBySlug.get(slug)
  }));
  writeSitemap("sitemap-wheels-en.xml", wrapUrlSet(enWheelEntries));
  generatedWheelSitemaps.push("sitemap-wheels-en.xml");
  totalUrls += enWheelEntries.length;

  // 3. Localized wheel sitemaps
  for (const code of INDEXABLE_LANGS) {
    if (code === "en") continue;
    const translatedSlugs = allSlugs.filter((slug) => {
      const loc = SPECIALIZED_WHEELS[slug]?.translations?.[code];
      return Boolean(loc && loc.name && loc.heroSubtitle && loc.items);
    });
    if (translatedSlugs.length > 0) {
      const filename = `sitemap-wheels-${code}.xml`;
      const entries = translatedSlugs.map((slug) => ({
        loc: `${BASE_URL}/${code}/${slug}`,
        lastmod: TODAY,
        alternates: wheelAlternatesBySlug.get(slug)
      }));
      writeSitemap(filename, wrapUrlSet(entries));
      generatedWheelSitemaps.push(filename);
      totalUrls += entries.length;
    }
  }

  // 4. sitemap-blogs.xml
  const blogEntries = BLOG_SLUGS.map((slug) => ({
    loc: `${BASE_URL}/blogs/${slug}`,
    lastmod: TODAY
  }));
  writeSitemap("sitemap-blogs.xml", wrapUrlSet(blogEntries));
  totalUrls += blogEntries.length;

  // 5. sitemap-index.xml & sitemap.xml (served identically on Cloudflare Pages!)
  const sitemapFiles = ["sitemap-core.xml", "sitemap-blogs.xml", ...generatedWheelSitemaps];
  const indexBody = sitemapFiles
    .map((f) => `  <sitemap>\n    <loc>${BASE_URL}/${f}</loc>\n    <lastmod>${TODAY}</lastmod>\n  </sitemap>`)
    .join("\n");
  const indexXml = `<?xml version="1.0" encoding="UTF-8"?>\n<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${indexBody}\n</sitemapindex>\n`;
  writeSitemap("sitemap-index.xml", indexXml);
  writeSitemap("sitemap.xml", indexXml);

  console.log(`[sitemaps] Generated ${sitemapFiles.length} sitemaps (${totalUrls} unique indexable URLs) into public/`);
}

generate();
