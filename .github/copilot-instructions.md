# AI Coding Agent Instructions for OHBENCORE Website

## Project Overview
Next.js 16 App Router + TypeScript + Tailwind CSS v4 project for a marketing/consulting site. All pages are server components by default; client components only where interaction is required (e.g. `Header` for mobile state, `SearchBar`). SEO and content consistency are core: centralized config, metadata helper, sitemap postbuild, structured JSON-LD.

## Core Architecture
- `config/site.ts`: Single source of truth for site identity + navigation (used in `Header`, `Footer`, metadata and future sitemap/social). Update here first for global changes.
- `config/seo.ts`: `defaultMetadata` and `createPageMetadata(options)` unify per-page SEO. Every non-dynamic page should export `metadata` via this helper with `title`, `description`, `path`.
- `app/layout.tsx`: Root layout sets font, global structure, injects Organization JSON-LD. Keep schema additions here (e.g. future `WebSite`, `BreadcrumbList`).
- `config/search-index.ts`: Static search corpus (array of `SearchIndexItem`). Must stay lightweight; represents title/snippet/tags only. Add new pages here when content becomes real (keep tags concise, lowercase phrases).
- `app/api/search/route.ts`: Pure server endpoint performing keyword scoring; AI placeholder `callAiSearchProvider()` ready for later LLM/vector integration without breaking current contract.
- Service pages pattern: Intro → What We Do → Technologies → How We Work → What You Get → FAQ → CTA. Avoid deviating—consistency benefits SEO + internal linking.

## Conventions & Patterns
- File paths mirror URL paths: `app/services/<slug>/page.tsx` → `/services/<slug>`.
- Always import `createPageMetadata` and export `metadata` in new page files for SEO parity.
- Use semantic heading hierarchy: one `h1` per page; sections start at `h2`; inner titles at `h3`.
- Tailwind spacing pattern: page container `max-w-5xl mx-auto px-4 py-12 md:py-16`; section spacing usually `mb-16`.
- Lists: service bullet lists use flex with leading bullet glyph `•` or checkmark SVG for outcome/value lists.
- No inline business logic in components that can stay static—prefer static arrays mapped in JSX for clarity and future data extraction.
- Internal links: use `<Link />` with descriptive anchor text; prefer referencing related services (e.g. Backup in Security FAQ).
- Avoid overuse of client components—only add `'use client'` when state or effects are required.

## Search Implementation Details
- Scoring weights: title +3, snippet +2, tags +1, exact tag match +2 bonus. Preserve logic when extending.
- `SearchResult` extends `SearchIndexItem` with `score` and optional `aiExplanation`. Future AI should fill `aiExplanation` only—do not mutate base index structure.
- When adding AI integration: call `callAiSearchProvider(query, results)` after scoring; ensure latency acceptable (<1.5s target). Provide graceful fallback on error.

## Adding New Pages
1. Create directory under `app/<section>/<slug>/page.tsx`.
2. Import `createPageMetadata`; export `metadata` with accurate `path`.
3. Follow established layout + section order if a service/industry type.
4. Add entry to `config/search-index.ts` (keep snippet ≤160 chars; 5–10 tags).
5. Validate headings and link at least one related internal page.

## Styling & UI
- Tailwind v4 utilities only—avoid custom CSS unless absolutely necessary (then place in `globals.css`).
- Use consistent rounded containers: `border border-gray-200 rounded-lg p-6` (cards) and `bg-gray-50` for highlight boxes.
- CTA sections: `bg-blue-50 border border-blue-200 rounded-lg p-8 md:p-12 text-center` with two buttons (primary blue, secondary neutral).

## SEO & Metadata
- Titles: clear service value; avoid marketing fluff; include key nouns (e.g. "Virtualization & Hypervisors").
- Descriptions: one sentence, actionable, ≤160 chars, match search index snippet where feasible.
- Do not hardcode full URLs—use `path` param with `createPageMetadata` to assemble canonical.

## Build & Runtime
- Dev: `npm run dev` (Next.js dev server at `localhost:3000`).
- Build: `npm run build` then `postbuild` auto-generates sitemap via `next-sitemap.config.js`.
- Start: `npm start` serves production build.
- Add dependencies carefully—minimal footprint preferred (static content focus).

## Extensibility Notes
- Future AI: add vector/LLM re-rank without altering existing consumer of `/api/search` JSON shape.
- Structured data: consider adding `BreadcrumbList` for deep pages and `Service` schema per service page (extend in `layout.tsx`).
- Internationalization currently absent—design content additions with English-only assumption.

## Quality & Review Checklist (Before Committing)
- Page exports `metadata` using helper.
- Headings follow hierarchy, single `h1`.
- Search index updated for new pages.
- No unnecessary client components or state.
- Internal links present (cross-reference at least one related page).
- Snippet & description aligned and concise.

---
Feedback welcome: note unclear patterns or desired additions (tests, CI, AI integration specifics) for iteration.
