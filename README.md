## OHBENCORE Website (Next.js App Router)

Production-oriented IT infrastructure consulting site built with Next.js 16 (App Router), TypeScript, and Tailwind CSS. Includes SEO metadata utilities, static search index, Calendly booking, and a file-based blog ready for TinaCMS integration.

## Stack Overview
- Next.js App Router (server-first design)
- TypeScript
- Tailwind CSS v4
- Static search index (`config/search-index.ts`)
- SEO helpers (`config/seo.ts`) + JSON-LD organization schema
- File-based blog (`content/blog/*.md`) with lightweight loader (`lib/blog.ts`)
- Calendly scheduling page (`/book`) with inline widget
- TinaCMS scaffold (`tina/config.ts`, `tina/TinaProvider.tsx`, `/admin` route)

## Development

```bash
npm install
npm run dev
```

Visit `http://localhost:3000`.

## Environment Variables
Create `.env.local` (see `.env.example`).

```bash
# Calendly
CALENDLY_URL=https://calendly.com/your-workspace/intro-call

# TinaCMS (placeholders – do not commit real secrets)
TINA_CLIENT_ID=your_tina_client_id
TINA_TOKEN=your_tina_token   # TODO: set securely, never commit
TINA_BRANCH=main

# Optional flag to force-enable editing UI (overrides missing token for local dev)
NEXT_PUBLIC_TINA_ENABLED=false
```

Site functions if these are missing (booking and CMS gracefully degrade).

## Calendly Integration
- Config: `config/calendly.ts` exposes `calendlyUrl`.
- Page: `/book` renders widget via `CalendlyInlineEmbed` if URL exists; else shows contact fallback.
- Header CTA: Links to `/book` when configured, otherwise `/contact`.

## Blog (File-Based Now)
- Markdown posts in `content/blog/` with frontmatter.
- Loader utilities in `lib/blog.ts` parse frontmatter and render minimal HTML.
- Pages: `/blog` lists posts; `/blog/[slug]` renders detail.
- TODO comments mark future TinaCMS/MDX replacement points.

## TinaCMS Scaffold (Not Fully Active Yet)
- Config: `tina/config.ts` dynamic-safe, no secrets hard-coded.
- Provider: `tina/TinaProvider.tsx` enables future editing toggle.
- Admin Route: `/admin` displays configuration status.
- Enable editing by providing `TINA_CLIENT_ID`, `TINA_TOKEN`, and optionally `NEXT_PUBLIC_TINA_ENABLED=true`.

### Tina Local Dev Commands
```bash
npm install tinacms @tinacms/cli
npx tina init        # only once if schema not bootstrapped
npx tina dev         # starts local Tina server
npx tina build       # generates schema/types for production
```

## Search Index
Static index in `config/search-index.ts` includes primary site pages and current blog posts. TODO: replace with dynamic query (Tina) once CMS active.

## Deployment Notes
- Ensure environment variables set in hosting platform.
- Run `next build` + `next start`.
- If using TinaCMS in production, include `npx tina build` in CI before Next.js build.

## Roadmap / TODO
- Replace markdown loader with TinaCMS queries and MDX pipeline.
- Add editing provider wrapper when enabled.
- Dynamic search indexing for blog posts via CMS.

## License
Internal project; no open-source license header added.
