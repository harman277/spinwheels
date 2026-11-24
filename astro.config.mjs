import { defineConfig } from "astro/config";

export default defineConfig({
  site: "https://spinthewheelsonline.com",
  output: "static",
  trailingSlash: "never",
  compressHTML: true,
  build: {
    format: "file",
    inlineStylesheets: "auto"
  },
  vite: {
    build: {
      cssMinify: true
    }
  }
});
