# The Laureate Equation

A premium, open, data-driven archive of major mathematics and statistics awards, their laureates, and the ideas that shaped modern mathematics.

## Technology

- Astro static output
- TypeScript strict mode
- Tailwind CSS
- Zod data validation
- Fuse.js local search
- Leaflet and OpenStreetMap
- Vitest and Playwright

## Local Development

```bash
pnpm install
pnpm dev
```

## Validation

```bash
pnpm format:check
pnpm lint
pnpm typecheck
pnpm validate:data
pnpm test
pnpm test:e2e
pnpm audit:a11y
pnpm check:links
pnpm build
```

## Data Status

All 23 required awards are represented. Winner lists and profiles include explicit completeness labels; several datasets are intentionally marked `in-progress` or `requires-verification` until expanded from official sources.

## Deployment

The site is configured for static GitHub Pages deployment. Set `SITE_URL` and optionally `BASE_PATH` in CI or the deployment environment.
