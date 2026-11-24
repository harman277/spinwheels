# Spin The Wheels Online — Astro 5 + Cloudflare Pages Deployment Guide

## Why This Stack Wins for SEO & AdSense RPM
- **0 KB Framework JS:** Pure Astro 5 static HTML with your lean HTML5 Canvas engine (`script.min.js`) — nothing competes with `adsbygoogle.js` on mobile CPUs.
- **20–50ms Global Edge TTFB:** Pre-rendered static HTML served from 300+ Cloudflare Edge locations (US, Brazil, UK, Europe, Asia, India) with zero Node.js cold starts.
- **Unlimited Free Static Bandwidth:** Scales smoothly to millions of monthly pageviews on Cloudflare Pages without Vercel serverless compute bills.
- **100% URL & 301 Redirect Preservation:** All 288 canonical URLs, `/en/*` → `/*`, `www.` → apex, trailing-slash, uppercase, and 46 alias redirects are preserved at the Edge (`public/_redirects` + `functions/_middleware.js`).

## Local Commands
```bash
npm run build      # Minifies CSS/JS, generates 17 XML sitemaps (288 URLs), builds dist/
npm run verify     # Audits all 288 built HTML pages, schema, zero leakage & AdSense safety
npm run preview    # Preview built static site locally
```

## Deploy to Cloudflare Pages (Zero Downtime Cutover)
1. Push `spinthewheelsonline-astro` to a GitHub repository.
2. Open **Cloudflare Dashboard → Workers & Pages → Create → Pages → Connect to Git**.
3. Configure Build Settings:
   - **Framework preset:** `Astro`
   - **Build command:** `npm run build`
   - **Build output directory:** `dist`
   - **Node version env var:** `NODE_VERSION = 22` (or `24`)
4. *(Optional)* Add `CONTACT_WEBHOOK_URL` in **Settings → Environment Variables** to forward `/api/contact` form submissions to Discord, Slack, Make, or Zapier.
5. Add custom domains `spinthewheelsonline.com` (primary) and `www.spinthewheelsonline.com` (automatically 301-redirected to apex by `functions/_middleware.js`).
6. Right after DNS switches over, trigger instant Bing re-indexing:
   ```bash
   node scripts/submit-indexnow.mjs --live
   ```

## Post-Approval AdSense RPM Activation (Zero CLS)
During **AdSense approval review**, `src/config/ads.ts` keeps `enableManualSlots: false` (clean Auto Ads only, zero empty ad containers, ads strictly excluded on `404`, `contact`, `privacy-policy`, `terms-and-conditions`, and `?embed=1`).

Once approved, to maximize RPM:
1. Create 3 responsive display / in-article ad units in Google AdSense (`belowTool`, `inContent`, `preFaq`).
2. Paste their numeric `data-ad-slot` IDs into `src/config/ads.ts` and set `enableManualSlots: true`.
3. Redeploy — every slot reserves fixed `min-height` (0.00 CLS) and stays ≥ 32px clear of the Spin button to prevent invalid clicks.
