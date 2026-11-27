import fs from "node:fs";
import path from "node:path";
import crypto from "node:crypto";

export const SITE_URL = "https://spinthewheelsonline.com";
export const SITE_NAME = "Spin The Wheels Online";
export const REVIEWED_ISO = "2026-11-24";
export const REVIEWED_TEXT = "November 24, 2026";
export const SUPPORT_EMAIL = "spinthewheelsonline@gmail.com";

// 20 languages with genuinely translated UI & editorial copy.
export const INDEXABLE_LANG_LIST = [
  "en", "es", "de", "fr", "it", "pt", "pl", "vi", "zh",
  "ja", "ko", "nl", "sv", "da", "no", "tr", "ru", "ar", "hi", "id"
] as const;

export const INDEXABLE_LANGS = new Set<string>(INDEXABLE_LANG_LIST);

export const FEATURED_HOME_SLUGS = [
  "wheel-of-names", "yes-no-wheel", "picker-wheel", "decision-wheel",
  "country-picker-wheel", "planet-picker-wheel", "month-picker-wheel", "animal-picker-wheel",
  "number-picker-wheel", "randomizer-number-1-100", "letter-picker-wheel", "color-picker-wheel",
  "truth-or-dare-wheel", "emoji-picker-wheel", "raffle-wheel", "prize-wheel",
  "classroom-name-picker", "team-picker-wheel", "food-picker-wheel", "random-flag-generator",
  "language-picker-wheel", "random-nfl-team-generator", "nba-team-wheel", "brazil-state-picker-wheel",
  "dandy-world-wheel-spinner", "nba-player-spin-the-wheel", "zodiac-picker-wheel", "us-state-picker-wheel",
  "music-genre-wheel", "day-picker-wheel"
];

export const FEATURED_HOME_BLOGS = [
  { slug: "spin-the-wheel-tool", title: "How Spin the Wheel Works: Fair Odds, Uses & Free Setup", tag: "Complete Guide" },
  { slug: "how-to-use-spin-wheel-classroom-examples", title: "20+ Classroom Spin Wheel Activities & Examples (Free)", tag: "Education" },
  { slug: "how-to-run-online-giveaway", title: "How to Pick a Random Giveaway Winner Fairly", tag: "Giveaways" },
  { slug: "is-spin-wheel-truly-random", title: "Is a Digital Spin Wheel Truly Random? Science Proof", tag: "Cryptography" },
  { slug: "what-to-eat-tonight-spin-wheel-dinner-decision", title: "What's for Dinner Tonight? End Debates With a Wheel", tag: "Lifestyle" },
  { slug: "best-wheel-of-names-alternatives-free-spinner-tools", title: "10 Best Wheel of Names Alternatives & Free Spinners", tag: "Comparison" },
  { slug: "sports-gaming-spin-wheel-challenges-nfl-nba-pokemon-fortnite", title: "Sports & Gaming Spin Wheel Challenges (NFL, NBA, Pokémon & Fortnite)", tag: "Gaming & Sports" },
  { slug: "spin-wheel-icebreakers-onboarding", title: "25+ Team Icebreaker & Onboarding Spin Wheel Prompts", tag: "Teams & Work" },
  { slug: "date-night-roulette-spin-wheel-ideas-couples", title: "Date Night Roulette: 30+ Fun Spin Wheel Ideas for Couples", tag: "Date Night" }
];

export function toHreflangCode(code: string): string {
  if (code === "zh") return "zh-Hans";
  if (code === "tl") return "fil";
  return code;
}

function computeAssetBundle() {
  const pubDir = path.resolve(process.cwd(), "public");
  const hash = crypto.createHash("sha256");
  const candidates = ["styles.css", "styles.min.css", "script.js", "script.min.js", "blog.css", "blog.min.css"];
  for (const name of candidates) {
    const p = path.join(pubDir, name);
    if (fs.existsSync(p)) {
      const st = fs.statSync(p);
      hash.update(`${name}:${st.size}:${Math.floor(st.mtimeMs)};`);
    }
  }
  const version = hash.digest("hex").slice(0, 10);
  const cssPath = fs.existsSync(path.join(pubDir, "styles.min.css")) ? "/styles.min.css" : "/styles.css";
  const jsPath = fs.existsSync(path.join(pubDir, "script.min.js")) ? "/script.min.js" : "/script.js";
  const blogCssPath = fs.existsSync(path.join(pubDir, "blog.min.css")) ? "/blog.min.css" : "/blog.css";
  return {
    assetV: version,
    cssHref: `${cssPath}?v=${version}`,
    jsHref: `${jsPath}?v=${version}`,
    blogCssHref: `${blogCssPath}?v=${version}`
  };
}

export const ASSETS = computeAssetBundle();
