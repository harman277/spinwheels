import fs from "node:fs";
import path from "node:path";
import https from "node:https";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const PUBLIC = path.resolve(__dirname, "..", "public");
const HOST = "spinthewheelsonline.com";
const KEY = "f161f13249154be099efeae10d6bd39c";
const KEY_LOCATION = `https://${HOST}/${KEY}.txt`;

function extractLocs(xml) {
  const locs = [];
  const re = /<loc>\s*([^<\s]+)\s*<\/loc>/gi;
  let m;
  while ((m = re.exec(xml)) !== null) locs.push(m[1]);
  return locs;
}

function postBatch(payload) {
  return new Promise((resolve, reject) => {
    const body = JSON.stringify(payload);
    const req = https.request(
      {
        hostname: "api.indexnow.org",
        path: "/indexnow",
        method: "POST",
        headers: {
          "Content-Type": "application/json; charset=utf-8",
          "Content-Length": Buffer.byteLength(body)
        }
      },
      (res) => {
        let data = "";
        res.on("data", (c) => (data += c));
        res.on("end", () => resolve({ statusCode: res.statusCode, body: data }));
      }
    );
    req.on("error", reject);
    req.write(body);
    req.end();
  });
}

async function main() {
  const isLive = process.argv.includes("--live");
  const indexXml = fs.readFileSync(path.join(PUBLIC, "sitemap-index.xml"), "utf8");
  const sitemapLocs = extractLocs(indexXml);
  const urls = new Set();
  for (const loc of sitemapLocs) {
    const fname = path.basename(new URL(loc).pathname);
    extractLocs(fs.readFileSync(path.join(PUBLIC, fname), "utf8")).forEach((u) => urls.add(u));
  }
  const urlList = Array.from(urls);
  console.log(`[indexnow] Total unique indexable URLs: ${urlList.length}`);
  if (!isLive) {
    console.log("[indexnow] Dry run complete. After deploying to Cloudflare Pages, run: node scripts/submit-indexnow.mjs --live");
    return;
  }
  const res = await postBatch({ host: HOST, key: KEY, keyLocation: KEY_LOCATION, urlList });
  console.log(`[indexnow] Submitted ${urlList.length} URLs -> HTTP ${res.statusCode} ${res.body}`);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
