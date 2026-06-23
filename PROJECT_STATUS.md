# Project Status

## Current Milestone

Milestone 17 — Final Audit, with content audit reopened

## State

Local first release builds and validates with pnpm after the winner-list and flagship-profile audit. Public deployment verification remains blocked until a separate GitHub repository is selected and authorised. Full historical AMS prize coverage also remains blocked because the AMS historical prize browser was inaccessible from the validation environment during the audit.

## Last Completed Action

Expanded the dataset from representative samples to 326 audited winner records, added explicit winner coverage metadata to every award, replaced generic laureate biographies with 46 substantive profile records, rendered education and publication sections, and validated affected award/profile pages at four viewport sizes.

## Next Action

Resolve the external blockers: obtain reliable access to the AMS historical prize-browser lists for the Bôcher, Cole, and Steele awards, and authorise a separate GitHub repository for public GitHub Pages deployment.

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

## Open Milestones

- Milestone 17 — Final Audit remains open until public deployment and AMS historical-list verification are resolved.

## Validation Matrix

| Check                   | Status  | Last Run   | Notes                                                                                |
| ----------------------- | ------- | ---------- | ------------------------------------------------------------------------------------ |
| Format                  | Pass    | 2026-06-24 | Clean-room run: `pnpm format:check`                                                  |
| Lint                    | Pass    | 2026-06-24 | Clean-room run: `pnpm lint`                                                          |
| Typecheck               | Pass    | 2026-06-24 | Clean-room run: `pnpm typecheck`                                                     |
| Unit tests              | Pass    | 2026-06-24 | Clean-room run: `pnpm test`, 4 Vitest checks                                         |
| E2E tests               | Pass    | 2026-06-24 | Clean-room run: `pnpm test:e2e`, 36 Playwright checks                                |
| Accessibility tests     | Pass    | 2026-06-24 | Clean-room run: `pnpm audit:a11y`, 14 axe checks                                     |
| Data validation         | Pass    | 2026-06-24 | 23 awards, 326 audited winner records, 46 detailed laureate profiles, and 37 sources |
| Link validation         | Pass    | 2026-06-24 | 37 external source URLs and 98 internal routes checked syntactically                 |
| Production build        | Pass    | 2026-06-24 | Astro static build generated 99 pages                                                |
| GitHub Pages deployment | Blocked | 2026-06-24 | Workflow exists; public deployment requires an authorised repository                 |

## Architecture Decisions

Record date, decision, alternatives, and rationale.

- 2026-06-24 — Created a fresh separate project folder at `/Users/vanindra/mathematics laureates/math-awards-platform` to avoid changing the existing GitHub project in `/Users/vanindra/Downloads/codex`.
- 2026-06-24 — Selected Astro static output with TypeScript strict mode, Tailwind CSS, Zod validation, Fuse.js local search, Leaflet/OpenStreetMap, Vitest, Playwright, and axe-core. This supports static GitHub Pages deployment without paid APIs or runtime secrets.
- 2026-06-24 — Store canonical content in typed TypeScript data modules with Zod schemas and custom relationship validation. This keeps content separate from presentation while allowing build-time checks for references, duplicate IDs, years, and completeness labels.
- 2026-06-24 — Omit portraits until licence metadata is verified. Profile pages display an accessible missing-image state instead of using unverified images.
- 2026-06-24 — Use explicit `in-progress` and `requires-verification` labels for partial award datasets. No partial winner list is labelled complete, and every award stores earliest/latest covered years, missing-year notes, no-award years where known, source IDs, and last-verified dates.
- 2026-06-24 — Standardised on pnpm. Native package install permissions for `esbuild` and `sharp` are recorded in `pnpm-workspace.yaml`, and `pnpm install --frozen-lockfile` passes from a clean `node_modules` removal.

## Data Coverage

Record each award, winner-list status, number of verified laureates, and last verification date.

- Required awards represented: 23 of 23.
- Winner datasets: 326 audited records across all 23 awards. Fields, Abel, Chern, Breakthrough, Abacus, Ramanujan, Ostrowski, Fermat, Norbert Wiener, Nemmers, Rousseeuw, and International Prize in Statistics records are marked complete where official static sources were checked. Sylvester and Shaw are substantially complete with cross-check notes. Wolf, Clay, Balzan, and AMS historical prize lists retain explicit non-complete labels where source access or category boundaries require further verification.
- Flagship profiles: 46 source-linked detailed profiles with education, institutions, fields, awards, principal contributions, multi-level explanations, and publications/references.
- Research fields: 15 priority fields.
- Source register: 37 official or authoritative source entries.
- Last verification date used in structured records: 2026-06-24.
- Visual audit: inspected `/awards/fields-medal`, `/awards/clay-research-award`, `/awards/international-prize-statistics`, `/laureates/maryam-mirzakhani`, `/laureates/grace-wahba`, and `/laureates/andrew-wiles` at 360x800, 768x1024, 1280x800, and 1440x900 after the content audit. No horizontal overflow was detected, and coverage, education, and publication sections rendered.

## Known Issues

- AMS Bôcher, Cole, and Steele historical prize lists are intentionally partial and marked `requires-verification` because the AMS historical prize browser could not be accessed from the validation environment.
- Clay, Wolf, Shaw, Sylvester, and Balzan records include explicit source and completeness notes where the best available source was dynamic, cross-checked, or category-dependent.
- Portraits remain omitted until licence metadata is verified.
- Link validation currently checks URL shape and internal route inventory; it does not crawl every external source during CI.

## External Blockers

- Public GitHub Pages verification requires authorisation for a separate repository. The existing GitHub project in `/Users/vanindra/Downloads/codex` was intentionally left untouched.
- Full AMS historical prize-list verification requires access to the AMS prize-browser pages or another official AMS export that is not blocked by bot protection.

## Deployment

- Repository: Not configured
- Workflow: Configured locally (`.github/workflows/ci.yml` and `.github/workflows/deploy-pages.yml`)
- Public URL: Not available
- Verified: No
