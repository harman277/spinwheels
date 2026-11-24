import fs from "node:fs";
import path from "node:path";
import zlib from "node:zlib";
import { fileURLToPath } from "node:url";
import CleanCSS from "clean-css";
import { minify as terserMinify } from "terser";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const PUBLIC = path.resolve(__dirname, "..", "public");

function formatStats(name, rawLen, minLen, gzMinLen) {
  const pct = rawLen ? (((rawLen - minLen) / rawLen) * 100).toFixed(1) : "0.0";
  console.log(
    `[build-assets] ${name}: ${(rawLen / 1024).toFixed(1)} KB -> ${(minLen / 1024).toFixed(1)} KB (-${pct}%) | gz: ${(gzMinLen / 1024).toFixed(1)} KB`
  );
}

async function run() {
  const cleaner = new CleanCSS({ level: 2 });

  for (const file of ["styles.css", "blog.css"]) {
    const srcPath = path.join(PUBLIC, file);
    if (!fs.existsSync(srcPath)) continue;
    const raw = fs.readFileSync(srcPath, "utf8");
    const out = cleaner.minify(raw);
    if (out.errors && out.errors.length) {
      throw new Error(`CleanCSS errors in ${file}: ${out.errors.join("; ")}`);
    }
    const minName = file.replace(/\.css$/, ".min.css");
    fs.writeFileSync(path.join(PUBLIC, minName), out.styles, "utf8");
    formatStats(`${file} -> ${minName}`, Buffer.byteLength(raw), Buffer.byteLength(out.styles), zlib.gzipSync(out.styles).length);
  }

  const jsPath = path.join(PUBLIC, "script.js");
  if (fs.existsSync(jsPath)) {
    const rawJs = fs.readFileSync(jsPath, "utf8");
    const minRes = await terserMinify(rawJs, {
      compress: true,
      mangle: true,
      format: { comments: false }
    });
    if (!minRes || !minRes.code) throw new Error("Terser failed on script.js");
    fs.writeFileSync(path.join(PUBLIC, "script.min.js"), minRes.code, "utf8");
    formatStats("script.js -> script.min.js", Buffer.byteLength(rawJs), Buffer.byteLength(minRes.code), zlib.gzipSync(minRes.code).length);
  }
}

run().catch((err) => {
  console.error(err);
  process.exit(1);
});
