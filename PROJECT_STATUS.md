# Project Status

## Current Milestone

Milestone 17 — Final Audit

## State

Local first release built and validated. Public deployment verification remains blocked until a separate GitHub repository is selected and authorised.

## Last Completed Action

Built a fresh standalone Astro platform in `/Users/vanindra/mathematics laureates/math-awards-platform` without modifying the existing `/Users/vanindra/Downloads/codex` GitHub project.

## Next Action

Create or authorise a separate GitHub repository for this project, push the validated code, enable GitHub Pages from Actions, and verify the public URL.

## Completed Milestones

- Milestone 0 — Audit and Architecture
- Milestone 1 — Foundation
- Milestone 2 — Data Architecture
- Milestone 3 — Core Routes and Templates
- Milestone 4 — Award Dataset
- Milestone 5 — Winner Lists
- Milestone 6 — Flagship Laureate Profiles
- Milestone 7 — Search
- Milestone 8 — Filtering and Sorting
- Milestone 9 — Timeline
- Milestone 10 — Research-Field Explorer
- Milestone 11 — World Map
- Milestone 12 — Comparison Tool
- Milestone 13 — Inspiration Section
- Milestone 14 — SEO, Accessibility, and Performance
- Milestone 15 — Contributor and Correction Workflows
- Milestone 16 — CI and GitHub Pages
- Milestone 17 — Final Audit

## Validation Matrix

| Check                   | Status  | Last Run   | Notes                                                                |
| ----------------------- | ------- | ---------- | -------------------------------------------------------------------- |
| Format                  | Pass    | 2026-06-24 | `pnpm format:check`                                                  |
| Lint                    | Pass    | 2026-06-24 | `pnpm lint`                                                          |
| Typecheck               | Pass    | 2026-06-24 | `pnpm typecheck`                                                     |
| Unit tests              | Pass    | 2026-06-24 | `pnpm test`                                                          |
| E2E tests               | Pass    | 2026-06-24 | `pnpm test:e2e`, 36 Playwright checks                                |
| Accessibility tests     | Pass    | 2026-06-24 | `pnpm audit:a11y`, axe scans on desktop and mobile                   |
| Data validation         | Pass    | 2026-06-24 | 23 awards, 27 winner records, 46 laureate profiles, and 25 sources   |
| Link validation         | Pass    | 2026-06-24 | 25 external source URLs and 98 internal routes checked syntactically |
| Production build        | Pass    | 2026-06-24 | Astro static build generated 99 pages                                |
| GitHub Pages deployment | Blocked | 2026-06-24 | Workflow exists; public deployment requires an authorised repository |

## Architecture Decisions

Record date, decision, alternatives, and rationale.

- 2026-06-24 — Created a fresh separate project folder at `/Users/vanindra/mathematics laureates/math-awards-platform` to avoid changing the existing GitHub project in `/Users/vanindra/Downloads/codex`.
- 2026-06-24 — Selected Astro static output with TypeScript strict mode, Tailwind CSS, Zod validation, Fuse.js local search, Leaflet/OpenStreetMap, Vitest, Playwright, and axe-core. This supports static GitHub Pages deployment without paid APIs or runtime secrets.
- 2026-06-24 — Store canonical content in typed TypeScript data modules with Zod schemas and custom relationship validation. This keeps content separate from presentation while allowing build-time checks for references, duplicate IDs, years, and completeness labels.
- 2026-06-24 — Omit portraits until licence metadata is verified. Profile pages display an accessible missing-image state instead of using unverified images.
- 2026-06-24 — Use explicit `in-progress` and `requires-verification` labels for partial award datasets and profile details. No partial winner list is labelled complete.

## Data Coverage

Record each award, winner-list status, number of verified laureates, and last verification date.

- Required awards represented: 23 of 23.
- Winner datasets: 27 initial records across all 23 awards. Complete historical import remains future expansion for awards marked `in-progress` or `requires-verification`.
- Flagship profiles: 46 source-linked profiles with multi-level explanation fields.
- Research fields: 15 priority fields.
- Source register: 25 official or authoritative source entries.
- Last verification date used in structured records: 2026-06-24.

## Known Issues

- Several historical winner lists are intentionally partial and marked `in-progress` or `requires-verification`.
- Many profiles are source-linked but concise; education, adviser, publication, quotation, and portrait metadata should be expanded only from official or scholarly sources.
- Link validation currently checks URL shape and internal route inventory; it does not crawl every external source during CI.

## External Blockers

- Public GitHub Pages verification requires authorisation for a separate repository. The existing GitHub project in `/Users/vanindra/Downloads/codex` was intentionally left untouched.

## Deployment

- Repository: Not configured
- Workflow: Configured locally (`.github/workflows/ci.yml` and `.github/workflows/deploy-pages.yml`)
- Public URL: Not available
- Verified: No
