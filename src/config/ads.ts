/**
 * Central Google AdSense & High-RPM Layout Configuration
 *
 * APPROVAL PHASE (current):
 *   ENABLE_MANUAL_SLOTS = false -> serves clean Auto Ads only, zero empty ad containers,
 *   maximum Core Web Vitals (0.00 CLS) and policy safety during AdSense review.
 *
 * POST-APPROVAL RPM PHASE (scaling toward 5L+/month):
 *   1. Create 3 responsive display / in-article units in Google AdSense.
 *   2. Paste their numeric slot IDs below.
 *   3. Flip ENABLE_MANUAL_SLOTS = true and redeploy to Cloudflare Pages.
 *      Every manual slot automatically reserves fixed min-height (zero CLS), keeps
 *      >= 32px clearance away from interactive Spin controls (preventing invalid clicks),
 *      and is strictly suppressed on ?embed=1, /404, /privacy-policy, /terms-and-conditions, and /contact.
 */
export const ADS_CONFIG = {
  publisherId: "ca-pub-7266388854353340",
  ga4Id: "G-V5Y3W9XM9J",
  enableAutoAds: true,
  enableManualSlots: false,
  slots: {
    belowTool: {
      id: "", // e.g. "1234567890" — Horizontal display banner cleanly below tool & result banner
      minHeightDesktop: 90,
      minHeightMobile: 100,
      format: "horizontal"
    },
    inContent: {
      id: "", // e.g. "2345678901" — In-article responsive unit between editorial sections
      minHeightDesktop: 250,
      minHeightMobile: 250,
      format: "fluid"
    },
    preFaq: {
      id: "", // e.g. "3456789012" — High-viewability responsive unit above FAQs / Related Wheels
      minHeightDesktop: 250,
      minHeightMobile: 250,
      format: "auto"
    }
  }
} as const;

export type AdSlotKey = keyof typeof ADS_CONFIG.slots;
