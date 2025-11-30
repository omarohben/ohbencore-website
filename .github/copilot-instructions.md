# AI Coding Agent Instructions for OHBENCORE Website

## Project Overview
Next.js 16 App Router (React 19) + TypeScript + Tailwind CSS v4 marketing site for IT infrastructure consulting. **Server-first architecture**: all pages are React Server Components by default; use `'use client'` only when state/effects are required (`Header` for mobile menu, `SearchBar` for form state, `CalendlyInlineEmbed` for script injection). React Compiler enabled in `next.config.ts` for automatic optimization.

## Core Architecture & Data Flow

### Centralized Configuration (Single Source of Truth)
- **`config/site.ts`**: Site identity, navigation structure, base URL. Used by `Header`, `Footer`, SEO helpers, sitemap. **Always update here first** for global changes to site name, nav items, or domain.
- **`config/seo.ts`**: Exports `defaultMetadata` and `createPageMetadata(options)` for unified SEO. Every page must import and use `createPageMetadata({ title, description, path })` to ensure consistent Open Graph, Twitter cards, and canonical URLs.
- **`app/layout.tsx`**: Root layout sets Inter/DM Sans fonts, global structure, injects Organization JSON-LD schema. Add new structured data types here (e.g., `WebSite`, `BreadcrumbList`).
- **`config/calendly.ts`**: Reads `CALENDLY_URL` from env; returns `null` if unset. Header CTA and `/book` page degrade gracefully when unavailable.

### Search System (Static Index + Future AI Hook)
- **`config/search-index.ts`**: Static array of `SearchIndexItem[]` covering all pages (services, industries, blog posts). Keep entries lightweight: title, url, type, snippet (≤160 chars), tags (5–10 lowercase phrases).
- **`app/api/search/route.ts`**: Server-side GET endpoint. Keyword scoring: title +3, snippet +2, tags +1, exact tag match +2 bonus. Returns `SearchResult[]` sorted by score. **AI integration point**: `callAiSearchProvider(query, results)` is a placeholder—future LLM/vector re-ranking can fill `aiExplanation` field without breaking contract. Target latency <1.5s; provide graceful fallback on error.
- **`components/SearchBar.tsx`**: Client component with controlled input; navigates to `/search?q=...` on submit.
- **`app/search/page.tsx`**: Fetches `/api/search?q=...`, displays `SearchResultsList`.

### Blog (File-Based, TinaCMS Scaffold Ready)
- **`content/blog/*.md`**: Markdown files with frontmatter (title, slug, date, description, tags). Lightweight parser in `lib/blog.ts` (TODO: replace with gray-matter or TinaCMS query once CMS active).
- **`lib/blog.ts`**: `getAllPosts()` reads directory, parses frontmatter, sorts by date descending. `getPostBySlug(slug)` fetches single post. Minimal HTML rendering (paragraphs, headings, lists) for now.
- **`app/blog/page.tsx`**: Lists all posts. **`app/blog/[slug]/page.tsx`**: Dynamic route renders individual post HTML and metadata.
- **TinaCMS scaffold**: `tina/config.ts` (safe for builds without tinacms installed), `tina/TinaProvider.tsx`, `/admin` route. Enable by setting `TINA_CLIENT_ID`, `TINA_TOKEN`, and `NEXT_PUBLIC_TINA_ENABLED=true`. Run `npx tina dev` for local editing; `npx tina build` in CI for production. Blog loader has TODO comments marking future replacement with Tina queries.

## Conventions & Patterns

### File Structure & Routing
- **File paths mirror URL paths**: `app/services/<slug>/page.tsx` → `/services/<slug>`. No `pages/` directory—App Router only.
- **Path alias**: `@/*` maps to project root (configured in `tsconfig.json`). Import from `@/config/seo`, `@/components/Header`, etc.

### Service & Industry Pages Template
Consistent structure across all service pages (see `app/services/virtualization-hypervisors/page.tsx` as reference):
1. **Intro section**: `h1` title, 2-paragraph overview (problem + solution).
2. **What We Do**: Bulleted list (flex layout with `•` glyph) describing specific deliverables.
3. **Technologies We Use**: Grid of cards (`border border-gray-200 rounded-lg p-6`) listing tools/platforms.
4. **How We Work**: Numbered steps (flex layout with circular badges) outlining engagement process.
5. **What You Get**: Outcome-focused list (checkmark SVG or bullet).
6. **FAQ**: Expandable or static Q&A addressing common objections.
7. **CTA section**: `bg-blue-50 border border-blue-200 rounded-lg p-8 md:p-12 text-center` with primary (blue) and secondary (neutral) buttons. Link to `/book` (if Calendly configured) or `/contact`.

**Do not deviate** from this template—consistency benefits SEO, internal linking, and user experience.

### Component Patterns
- **Client components only when necessary**: `'use client'` for `Header` (mobile menu state + scroll tracking), `SearchBar` (controlled input), `CalendlyInlineEmbed` (script injection with `useEffect`), `FadeIn` (Framer Motion animations). All other components (Container, Card, Button, Footer) are static/server.
- **UI component sizing**: `Container` component accepts `size` prop (sm, md, lg, xl) mapping to Tailwind max-widths. Default is `lg` (max-w-7xl). Use `size="md"` (max-w-5xl) for content pages.
- **Cards**: Modern dark theme with variants:
  - Default: `bg-card border border-card rounded-2xl p-6`
  - Highlight: `bg-gradient-to-br from-slate-900 to-slate-950 border border-blue-900/30`
  - Hover effects: `hover:-translate-y-1 hover:shadow-xl hover:shadow-blue-900/20 hover:border-blue-600/50`
- **Buttons**: 
  - Primary: `bg-blue-600 hover:bg-blue-700 hover:scale-[1.02] shadow-lg shadow-blue-900/30`
  - Secondary: `bg-green-600 hover:bg-green-700`
  - Outline: `border-gray-700 hover:border-blue-600`
  - Ghost: `text-gray-300 hover:text-blue-400`
- **Animations**:
  - Use `<FadeIn>` wrapper from `@/components/ui/FadeIn` for scroll-triggered animations
  - Accepts `delay`, `direction` ('up', 'down', 'left', 'right'), and `className` props
  - Example: `<FadeIn delay={0.1} direction="up"><Card>...</Card></FadeIn>`

### Dark Theme & Design System
**Color Palette** (defined in `app/globals.css`):
- Primary: `#1D4ED8` (blue-600) - buttons, links, key accents
- Accent: `#16A34A` (green-600) - badges, success states
- Background body: `#020617` (slate-950)
- Background surface: `#0B1120`
- Background card: `#0f172a` (slate-900)
- Text primary: `#E5E7EB` (gray-200)
- Text muted: `#9CA3AF` (gray-400)
- Borders: `#1F2937` (gray-800), `#1e293b` (slate-800 for cards)

**CSS Custom Properties**:
- Use semantic variables: `--color-primary`, `--color-bg-card`, `--color-text-muted`, etc.
- Available utility classes: `.text-muted`, `.bg-card`, `.bg-surface`, `.border-card`, `.gradient-hero`
- Prefer Tailwind utilities (`bg-slate-900`, `text-gray-400`), fallback to custom classes for complex patterns

**Spacing & Layout**:
- Section spacing: `py-20 md:py-28` (vertical)
- Container max-widths: sm=3xl, md=5xl, lg=7xl, xl=1280px
- Section backgrounds: Alternate between transparent and `bg-surface/40` for visual rhythm
- Card padding: `p-6` standard, `p-8 md:p-12` for featured/CTA cards

### SEO & Metadata Requirements
- **Every page must export metadata** using `createPageMetadata({ title, description, path })`. Do not skip this—it generates Open Graph, Twitter cards, and canonical URLs.
- **Titles**: Clear, descriptive, keyword-rich. Avoid marketing fluff. Example: "Virtualization & Hypervisors (VMware, Hyper-V, Proxmox)" not "Unlock the Power of Virtualization".
- **Descriptions**: Single sentence, actionable, ≤160 chars. Should match `snippet` in `config/search-index.ts` where feasible.
- **Headings**: Strict hierarchy. One `h1` per page; sections start at `h2`; subsections at `h3`. No skipping levels.
- **Internal linking**: Always link at least one related service/page using `<Link>` with descriptive anchor text (e.g., "See our Backup & DR service" not "click here").

### Styling Guidelines (Tailwind v4 Only)
- **No custom CSS** unless absolutely necessary. Place any global styles in `app/globals.css`.
- **Dark theme utilities**: Use `bg-slate-900`, `text-gray-400`, `border-gray-800` for consistency. Semantic classes (`.text-muted`, `.bg-card`) available for common patterns.
- **Spacing conventions**:
  - Page container: `max-w-7xl mx-auto px-4 sm:px-6 lg:px-8`
  - Section spacing: `py-20 md:py-28` between major sections
  - Card spacing: `p-6` inside cards, `gap-6` between grid items
  - Featured/CTA cards: `p-8 md:p-12`
- **Responsive breakpoints**: Use Tailwind defaults (`sm:`, `md:`, `lg:`, `xl:`). Test mobile layouts for nav, CTAs, and grids.
- **Color palette**: Blue primary (`blue-600`), green accent (`green-600`), slate/gray neutrals. Avoid introducing new brand colors without updating design system.
- **Gradients**: Use `.gradient-hero` for hero sections, `bg-gradient-to-br` for cards/highlights
- **Shadows**: Colored shadows for depth: `shadow-lg shadow-blue-900/30`, increase on hover: `hover:shadow-xl hover:shadow-blue-900/50`
- **Transitions**: Standard duration `duration-200` or `duration-300` with `ease-out` or cubic-bezier curves

## Development Workflows

### Running the Site
```bash
npm install          # Install dependencies (Next.js 16, React 19, Tailwind v4)
npm run dev          # Start dev server at http://localhost:3000
npm run build        # Production build
npm run postbuild    # Auto-runs after build; generates sitemap via next-sitemap
npm start            # Serve production build
```

### Adding a New Page
1. Create `app/<section>/<slug>/page.tsx`.
2. Import `createPageMetadata`; export `metadata` with accurate `title`, `description`, `path`.
3. Follow service page template if applicable (Intro → What We Do → Technologies → How We Work → What You Get → FAQ → CTA).
4. Add entry to `config/search-index.ts` (keep snippet ≤160 chars; 5–10 tags).
5. Validate heading hierarchy (`h1` → `h2` → `h3`), ensure at least one internal link to related page.

### Updating Search Index
When adding new pages or blog posts, update `config/search-index.ts`:
- `title`: Page title (matches metadata title).
- `url`: Absolute path (e.g., `/services/new-service`).
- `type`: `'service'`, `'industry'`, `'blog'`, `'solution'`, or `'other'`.
- `snippet`: ≤160 chars; mirrors meta description.
- `tags`: 5–10 lowercase phrases (avoid duplicates; focus on search intent).

**TODO**: Replace static blog entries with TinaCMS dynamic query once CMS is active.

### Environment Variables
Create `.env.local` (see `.env.example` in README):
```bash
# Calendly (optional; graceful degradation if missing)
CALENDLY_URL=https://calendly.com/your-workspace/intro-call

# TinaCMS (optional; site works without)
TINA_CLIENT_ID=your_tina_client_id
TINA_TOKEN=your_tina_token           # Never commit; set securely
TINA_BRANCH=main
NEXT_PUBLIC_TINA_ENABLED=false        # Set to true to force editing UI

# Sitemap/SEO (production only)
SITE_URL=https://www.ohbencore.com   # Update in next-sitemap.config.js and config/site.ts
```

## Integration Points & Extensibility

### Calendly Booking
- **Config**: `config/calendly.ts` exposes `calendlyUrl` (reads `CALENDLY_URL` env).
- **Page**: `/book` renders `CalendlyInlineEmbed` if URL exists; else shows contact form fallback.
- **Header CTA**: "Book a Call" button links to `/book` when Calendly configured, otherwise `/contact`.

### TinaCMS (Not Yet Active)
- **Setup**: Install with `npm install tinacms @tinacms/cli`, then `npx tina init` (first time only).
- **Local dev**: `npx tina dev` starts Tina local server.
- **Production**: Run `npx tina build` in CI to generate schema/types before Next.js build.
- **Enabling**: Set `TINA_CLIENT_ID`, `TINA_TOKEN`, and `NEXT_PUBLIC_TINA_ENABLED=true`. Visit `/admin` to check configuration status.
- **Migration path**: Replace `lib/blog.ts` utilities with TinaCMS queries; convert markdown to MDX with components.

### Future AI Search Integration
- **Hook**: Modify `callAiSearchProvider(query, results)` in `app/api/search/route.ts` to call LLM/vector search API.
- **Contract**: Function receives query string and scored `SearchResult[]`, returns same array with optional `aiExplanation` field populated. Do not mutate base `SearchIndexItem` structure.
- **Performance**: Target <1.5s latency; provide graceful fallback (return original results) on error. Consider streaming or partial results if latency exceeds budget.

### Structured Data Expansion
- **Current**: Organization schema in `app/layout.tsx`.
- **Future**: Add `BreadcrumbList` for deep pages (services, industries), `Service` schema per service page, `WebSite` schema with sitelinks search box. Keep additions in `layout.tsx` or individual page files as appropriate.

## Quality Checklist (Before Committing)
- [ ] Page exports `metadata` using `createPageMetadata` helper.
- [ ] Heading hierarchy validated (one `h1`, sections use `h2`, subsections use `h3`).
- [ ] Entry added to `config/search-index.ts` for new pages.
- [ ] No unnecessary client components (use `'use client'` only for state/effects).
- [ ] At least one internal link to related page (use `<Link>` with descriptive text).
- [ ] Snippet and description aligned (≤160 chars, concise, actionable).
- [ ] No hardcoded full URLs (use `path` param with `createPageMetadata` for canonicals).
- [ ] Tailwind utilities only (no inline styles or custom CSS unless justified in `globals.css`).

## Known Patterns & Decisions

### Why React Server Components by Default?
- Static content focus (marketing site, blog). No need for client-side JS unless interactive (forms, menus, scripts).
- SEO benefits: full HTML rendered server-side, no hydration mismatch.
- Performance: smaller JS bundles, faster initial page loads.

### Why Static Search Index?
- Site is small (<100 pages); static index is fast and reliable.
- Future-proofed with AI placeholder for LLM/vector integration when needed.
- Avoids build-time indexing complexity until content volume justifies it.

### Why Tailwind v4?
- Project uses latest Tailwind with PostCSS plugin (`@tailwindcss/postcss`).
- Faster builds, native CSS cascade layers, smaller config surface.
- Stick to utility classes; avoid `@apply` and custom CSS.

### Why File-Based Blog Now, TinaCMS Later?
- Rapid prototyping: markdown + frontmatter is simple, no CMS dependencies yet.
- TinaCMS scaffold ready: config, provider, admin route in place; can activate anytime by setting env vars and installing packages.
- Migration path clear: replace `lib/blog.ts` with Tina queries, convert MD to MDX, add rich media components.

---

**Feedback**: If any patterns are unclear, missing context (e.g., test setup, CI pipeline, AI integration specifics), or you notice undocumented conventions, flag them for iteration.
