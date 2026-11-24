/* =========================================================
   SPECIALIZED WHEELS REGISTRY (69 CANONICAL WHEELS)
   Modularized across 5 topical domain modules + Tier-1 & GSC/Bing recovery translations.
   Zero-cannibalization canonical architecture & AdSense-grade depth.
   ========================================================= */

import decisionsNames from "./wheels/decisions-names.js";
import numbersEducation from "./wheels/numbers-education.js";
import foodLifestyle from "./wheels/food-lifestyle.js";
import gamesPopculture from "./wheels/games-popculture.js";
import newWheels from "./wheels/new-wheels.js";
import WHEEL_TRANSLATIONS from "./wheels/translations.js";
import WHEEL_TRANSLATIONS_EXTRA from "./wheels/translations-tier1-extra.js";
import WHEEL_TRANSLATIONS_RECOVERY from "./wheels/translations-gsc-bing-recovery.js";
import WHEEL_TRANSLATIONS_ENRICHED from "./wheels/translations-enriched.js";
import WHEEL_TRANSLATIONS_BING_DEEP from "./wheels/translations-bing-deep.js";
import WHEEL_TRANSLATIONS_ALL159_EU from "./wheels/translations-all159-eu.js";
import WHEEL_TRANSLATIONS_ALL159_GLOBAL from "./wheels/translations-all159-global.js";

const SPECIALIZED_WHEELS = Object.assign(
  {},
  decisionsNames,
  numbersEducation,
  foodLifestyle,
  gamesPopculture,
  newWheels
);

/* ---------------------------------------------------------
   DEEP CONTENT MODULES (data/wheels/deep/part-*.js)
   Tool-specific long-form sections, long-tail FAQs, alt names,
   link overrides, and improved SERP title/description (English only).
--------------------------------------------------------- */
import deepPart1 from "./wheels/deep/part-1.js";
import deepPart2 from "./wheels/deep/part-2.js";
import deepPart3 from "./wheels/deep/part-3.js";
import deepPart4 from "./wheels/deep/part-4.js";
import deepPartZBing from "./wheels/deep/part-z-bing-2026.js";
import deepPartZ2 from "./wheels/deep/part-z2-human-en-a.js";
import deepPartZ3 from "./wheels/deep/part-z3-human-en-b.js";
import deepPartZ4 from "./wheels/deep/part-z4-bing-hero-all69.js";

const DEEP_MODULES = [
  deepPart1,
  deepPart2,
  deepPart3,
  deepPart4,
  deepPartZBing,
  deepPartZ2,
  deepPartZ3,
  deepPartZ4
];

DEEP_MODULES.forEach((mod) => {
  for (const [slug, deep] of Object.entries(mod)) {
    const wheel = SPECIALIZED_WHEELS[slug];
    if (!wheel || !deep) continue;
    if (deep.title) wheel.title = deep.title;
    if (deep.description) wheel.description = deep.description;
    if (deep.keywords) wheel.keywords = deep.keywords;
    if (deep.heroTitle) wheel.heroTitle = deep.heroTitle;
    if (deep.heroHighlight) wheel.heroHighlight = deep.heroHighlight;
    if (deep.heroSubtitle) wheel.heroSubtitle = deep.heroSubtitle;
    if (deep.quickAnswer) wheel.quickAnswer = deep.quickAnswer;
    if (deep.howTo) wheel.howTo = deep.howTo;
    if (deep.useCases) wheel.useCases = deep.useCases;
    if (deep.editorialHeading) wheel.editorialHeading = deep.editorialHeading;
    if (deep.editorialSubtitle) wheel.editorialSubtitle = deep.editorialSubtitle;
    if (deep.editorialGuide) wheel.editorialGuide = deep.editorialGuide;
    if (Array.isArray(deep.editorialSections)) wheel.editorialSections = deep.editorialSections;
    if (deep.proTipsHeading) wheel.proTipsHeading = deep.proTipsHeading;
    if (Array.isArray(deep.proTips)) wheel.proTips = deep.proTips;
    if (deep.fairnessHeading) wheel.fairnessHeading = deep.fairnessHeading;
    if (deep.fairnessMath) wheel.fairnessMath = deep.fairnessMath;
    if (deep.presets && typeof deep.presets === "object") {
      wheel.presets = Object.assign({}, deep.presets, wheel.presets || {}, deep.presets);
    }
    if (Array.isArray(deep.altNames)) wheel.altNames = deep.altNames;
    if (Array.isArray(deep.deepSections)) wheel.deepSections = deep.deepSections;
    if (Array.isArray(deep.appendDeepSections) && deep.appendDeepSections.length) {
      wheel.deepSections = (Array.isArray(wheel.deepSections) ? wheel.deepSections.slice() : []).concat(deep.appendDeepSections);
    }
    if (Array.isArray(deep.faqs) && deep.faqs.length) wheel.faqs = deep.faqs;
    if (Array.isArray(deep.extraFaqs)) wheel.extraFaqs = deep.extraFaqs;
    if (Array.isArray(deep.relatedSlugs) && deep.relatedSlugs.length) wheel.relatedSlugs = deep.relatedSlugs;
    if (Array.isArray(deep.relatedBlogs) && deep.relatedBlogs.length) wheel.relatedBlogs = deep.relatedBlogs;
  }
});

for (const [slug, langMap] of Object.entries(WHEEL_TRANSLATIONS)) {
  if (SPECIALIZED_WHEELS[slug]) {
    SPECIALIZED_WHEELS[slug].translations = Object.assign(
      {},
      SPECIALIZED_WHEELS[slug].translations || {},
      langMap
    );
  }
}

for (const [slug, langMap] of Object.entries(WHEEL_TRANSLATIONS_EXTRA)) {
  if (SPECIALIZED_WHEELS[slug]) {
    SPECIALIZED_WHEELS[slug].translations = Object.assign(
      {},
      SPECIALIZED_WHEELS[slug].translations || {},
      langMap
    );
  }
}

for (const [slug, langMap] of Object.entries(WHEEL_TRANSLATIONS_RECOVERY)) {
  if (SPECIALIZED_WHEELS[slug]) {
    SPECIALIZED_WHEELS[slug].translations = Object.assign(
      {},
      SPECIALIZED_WHEELS[slug].translations || {},
      langMap
    );
  }
}

for (const enrichMap of [WHEEL_TRANSLATIONS_ENRICHED, WHEEL_TRANSLATIONS_BING_DEEP, WHEEL_TRANSLATIONS_ALL159_EU, WHEEL_TRANSLATIONS_ALL159_GLOBAL]) {
  for (const [slug, langMap] of Object.entries(enrichMap)) {
    const wheel = SPECIALIZED_WHEELS[slug];
    if (!wheel || !wheel.translations) continue;
    for (const [langCode, enrich] of Object.entries(langMap)) {
      const cur = wheel.translations[langCode];
      if (!cur) continue;
      if (enrich.title) cur.title = enrich.title;
      if (enrich.description) cur.description = enrich.description;
      if (enrich.heroTitle) cur.heroTitle = enrich.heroTitle;
      if (enrich.heroHighlight) cur.heroHighlight = enrich.heroHighlight;
      if (enrich.heroSubtitle) cur.heroSubtitle = enrich.heroSubtitle;
      if (enrich.quickAnswer) cur.quickAnswer = enrich.quickAnswer;
      if (Array.isArray(enrich.faqs) && enrich.faqs.length) {
        if (!cur.faqs || !cur.faqs.length) {
          cur.faqs = enrich.faqs;
        } else if (enrich.mergeFaqs) {
          const seen = new Set(cur.faqs.map((f) => f.q));
          enrich.faqs.forEach((f) => {
            if (f && f.q && !seen.has(f.q)) {
              seen.add(f.q);
              cur.faqs.push(f);
            }
          });
        }
      }
      if (enrich.guide && (!cur.guide || enrich.replaceGuide)) {
        cur.guide = enrich.guide;
      }
    }
  }
}

export default SPECIALIZED_WHEELS;
