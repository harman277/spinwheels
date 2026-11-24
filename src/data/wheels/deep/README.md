# Deep content modules

Each `part-*.js` file in this folder exports an object keyed by wheel slug. Its fields are merged
into the matching wheel in `data/specialized-wheels.js`:

- `deepSections` — tool-specific long-form sections (heading, paragraphs, bullets, table)
- `extraFaqs` — extra long-tail FAQ entries, appended to the page FAQ list and FAQPage schema
- `altNames` — other names people search for, shown once as "Also known as"
- `title` / `description` (optional) — better SERP title and meta description

`new-wheels.js` in the parent folder holds complete definitions for wheels added later.
