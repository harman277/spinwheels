/**
 * Cloudflare Pages Edge Middleware (V8 Isolate — Zero Cold Starts)
 *
 * Handles:
 *  1. www.spinthewheelsonline.com -> apex https://spinthewheelsonline.com (301)
 *  2. Trailing slash stripping (/yes-no-wheel/ -> /yes-no-wheel) (301)
 *  3. Uppercase path normalization (/Yes-No-Wheel -> /yes-no-wheel) (301)
 *  4. Localized alias redirects (/:lang/:alias -> /:lang/:target) (301)
 *  5. Dynamic query governance (?embed=1, ?w=..., ?q=...):
 *     - Injects X-Robots-Tag: noindex, follow
 *     - On ?embed=1, strips chrome & AdSense scripts at the Edge via HTMLRewriter
 *  6. Graceful fallback for untranslated /:lang/:slug -> serves canonical /:slug with noindex
 */

const ALIAS_REDIRECTS = {
  "wheelofnames": "wheel-of-names",
  "wheel-of-names-online": "wheel-of-names",
  "random-name-picker": "wheel-of-names",
  "name-wheel": "wheel-of-names",
  "pickerwheel": "picker-wheel",
  "random-picker-wheel": "picker-wheel",
  "spinner-wheel": "picker-wheel",
  "random-wheel": "picker-wheel",
  "decision-roulette": "decision-wheel",
  "giveaway-wheel": "raffle-wheel",
  "prize-spinner": "prize-wheel",
  "what-to-eat-wheel": "dinner-wheel",
  "food-wheel": "dinner-wheel",
  "movie-picker-wheel": "what-to-watch-wheel",
  "word-picker-wheel": "random-word-generator",
  "twister-wheel": "twister-spinner",
  "dice-wheel": "dice-roller-wheel",
  "who-does-the-chores": "chore-wheel",
  "hogwarts-house-wheel": "harry-potter-sorting-hat-wheel",
  "classroom-student-picker": "classroom-name-picker",
  "giveaway-winner-picker": "raffle-wheel",
  "pokemon-picker-wheel": "random-pokemon-generator",
  "random-number-picker": "number-picker-wheel",
  "bingo-wheel": "bingo-number-generator-1-75",
  "bingo-caller": "bingo-number-generator-1-75",
  "draft-order-wheel": "fantasy-draft-order-wheel",
  "white-elephant-wheel": "gift-exchange-wheel",
  "fast-food-spinner": "fast-food-wheel",
  "restaurant-wheel": "restaurant-picker-wheel",
  "coffee-wheel": "drink-picker-wheel",
  "would-you-rather-spinner": "would-you-rather-wheel",
  "never-have-i-ever-spinner": "never-have-i-ever-wheel",
  "charades-wheel": "charades-word-wheel",
  "nba-teams-wheel": "nba-team-wheel",
  "random-nba-team-generator": "nba-team-wheel",
  "mlb-teams-wheel": "mlb-team-wheel",
  "random-mlb-team-generator": "mlb-team-wheel",
  "premier-league-wheel": "premier-league-team-wheel",
  "icebreaker-wheel": "icebreaker-question-wheel",
  "standup-wheel": "presentation-order-wheel",
  "d20-wheel": "random-number-1-20",
  "nba-teams-spin-the-wheel": "nba-team-wheel",
  "dandy's-world-wheel-spinner": "dandy-world-wheel-spinner",
  "country-wheel": "country-picker-wheel",
  "wheel-of-countries": "country-picker-wheel",
  "random-country-wheel": "country-picker-wheel",
  "random-country-generator": "country-picker-wheel",
  "planet-wheel": "planet-picker-wheel",
  "pick-a-planet": "planet-picker-wheel",
  "month-wheel": "month-picker-wheel",
  "animal-wheel": "animal-picker-wheel",
  "flag-wheel": "random-flag-generator",
  "zodiac-wheel": "zodiac-picker-wheel",
  "emoji-name-picker": "emoji-picker-wheel",
  "wheel-of-country": "country-picker-wheel",
  "every-country-wheel": "country-picker-wheel",
  "all-countries-wheel": "country-picker-wheel",
  "country-wheel-spinner": "country-picker-wheel",
  "country-spinner": "country-picker-wheel",
  "number-wheel-spinner": "number-picker-wheel",
  "number-spinner": "number-picker-wheel",
  "number-spinner-wheel": "number-picker-wheel",
  "random-number-wheel": "number-picker-wheel",
  "color-wheel-spinner": "color-picker-wheel",
  "colour-wheel-spinner": "color-picker-wheel",
  "color-spin-wheel": "color-picker-wheel",
  "letter-spinner": "letter-picker-wheel",
  "letter-wheel-spinner": "letter-picker-wheel",
  "alphabet-wheel": "letter-picker-wheel",
  "yes-or-no-wheel": "yes-no-wheel",
  "yes-or-no-spinner": "yes-no-wheel",
  "yes-no-spinner": "yes-no-wheel",
  "truth-or-dare-spinner": "truth-or-dare-wheel",
  "dare-wheel": "truth-or-dare-wheel",
  "animal-wheel-spinner": "animal-picker-wheel",
  "random-animal-wheel": "animal-picker-wheel",
  "wheel-of-animals": "animal-picker-wheel",
  "nba-players-wheel": "nba-player-spin-the-wheel",
  "random-nba-player-wheel": "nba-player-spin-the-wheel",
  "nfl-team-wheel": "random-nfl-team-generator",
  "wheel-of-nfl-teams": "random-nfl-team-generator",
  "dandys-world-wheel-spinner": "dandy-world-wheel-spinner",
  "dandys-world-toon-wheel": "dandy-world-wheel-spinner",
  "dandys-world-trinket-wheel": "dandy-world-wheel-spinner",
  "language-wheel": "language-picker-wheel",
  "wheel-of-languages": "language-picker-wheel",
  "random-language-picker": "language-picker-wheel",
  "month-picker": "month-picker-wheel",
  "wheel-of-months": "month-picker-wheel",
  "months-of-the-year-wheel": "month-picker-wheel",
  "days-of-the-week-wheel": "day-picker-wheel",
  "day-wheel": "day-picker-wheel",
  "us-states-wheel": "us-state-picker-wheel",
  "50-states-wheel": "us-state-picker-wheel",
  "brazil-states-wheel": "brazil-state-picker-wheel"
};

const ALL_LANGS = new Set([
  "en","es","de","fr","it","pt","pl","vi","zh","ja","ko","nl","sv","da","no",
  "tr","ru","ar","hi","id","th","cs","fi","el","ro","hu","uk","he","ms","tl","bn","sk","bg","hr","et"
]);

export async function onRequest(context) {
  const { request, next } = context;
  const url = new URL(request.url);
  const host = url.hostname.toLowerCase();

  // 1. Canonical apex host redirect (www -> non-www)
  if (host === "www.spinthewheelsonline.com") {
    return Response.redirect(`https://spinthewheelsonline.com${url.pathname}${url.search}`, 301);
  }

  // 2. Strip trailing slashes (except root "/")
  if (url.pathname !== "/" && url.pathname.endsWith("/")) {
    return Response.redirect(`${url.origin}${url.pathname.slice(0, -1)}${url.search}`, 301);
  }

  // 3. Normalize uppercase paths to lowercase (preserve BingSiteAuth.xml & static files)
  const isAsset = /\.(png|webp|ico|jpg|jpeg|gif|svg|css|js|xml|txt|json|html|woff2|woff|ttf)$/i.test(url.pathname);
  if (request.method === "GET" && !isAsset && url.pathname !== "/BingSiteAuth.xml" && url.pathname !== url.pathname.toLowerCase()) {
    return Response.redirect(`${url.origin}${url.pathname.toLowerCase()}${url.search}`, 301);
  }

  // 4. Localized alias redirect (/:lang/:alias -> /:lang/:target and /:lang/tools -> /:lang)
  const parts = url.pathname.split("/").filter(Boolean);
  if (parts.length === 2 && ALL_LANGS.has(parts[0])) {
    const [lang, seg] = parts;
    if (seg === "tools") {
      const dest = lang === "en" ? "/tools" : `/${lang}`;
      return Response.redirect(`${url.origin}${dest}${url.search}`, 301);
    }
    const target = ALIAS_REDIRECTS[decodeURIComponent(seg)];
    if (target) {
      const dest = lang === "en" ? `/${target}` : `/${lang}/${target}`;
      return Response.redirect(`${url.origin}${dest}${url.search}`, 301);
    }
  }

  // Proceed to static asset or API function
  let response = await next();

  // 5. Graceful fallback for untranslated /:lang/:slug -> serve canonical /:slug cleanly with noindex
  if (response.status === 404 && parts.length === 2 && ALL_LANGS.has(parts[0]) && parts[0] !== "en" && !isAsset) {
    const enReq = new Request(`${url.origin}/${parts[1]}${url.search}`, request);
    const enRes = await context.env.ASSETS.fetch(enReq);
    if (enRes.ok) {
      const headers = new Headers(enRes.headers);
      headers.set("X-Robots-Tag", "noindex, follow");
      const rewritten = new HTMLRewriter()
        .on('meta[name="robots"], meta[name="googlebot"]', {
          element(el) { el.setAttribute("content", "noindex, follow"); }
        })
        .transform(new Response(enRes.body, { status: 200, headers }));
      return rewritten;
    }
  }

  // 6. Dynamic query governance (?embed=1, ?w=..., ?q=...)
  const isEmbed = url.searchParams.get("embed") === "1";
  const hasDynamicParam = isEmbed || url.searchParams.has("w") || url.searchParams.has("q");
  const contentType = response.headers.get("content-type") || "";

  if (hasDynamicParam && contentType.includes("text/html")) {
    const headers = new Headers(response.headers);
    headers.set("X-Robots-Tag", "noindex, follow");

    let rewriter = new HTMLRewriter()
      .on('meta[name="robots"], meta[name="googlebot"]', {
        element(el) { el.setAttribute("content", "noindex, follow"); }
      });

    if (isEmbed) {
      rewriter = rewriter
        .on("html", { element(el) { el.setAttribute("class", "embed-mode"); } })
        .on("body", { element(el) { el.setAttribute("class", "embed-mode"); } })
        .on('script[src*="googlesyndication.com"], .embed-hide, .stwol-ad-slot', {
          element(el) { el.remove(); }
        });
    }

    return rewriter.transform(new Response(response.body, { status: response.status, headers }));
  }

  return response;
}
