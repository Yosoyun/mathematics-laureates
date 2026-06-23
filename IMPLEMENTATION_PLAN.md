# Implementation Plan

## Milestone 0 — Audit and Architecture

- Read all control files.
- Inspect repository.
- Select final architecture.
- Define scripts, folders, data pipeline, and testing strategy.
- Record risks and decisions.

Completion:
- Architecture documented.
- Package scripts planned.
- No major requirement omitted.

## Milestone 1 — Foundation

- Initialise Astro and strict TypeScript.
- Configure Tailwind.
- Configure formatting, linting, testing, Playwright, accessibility checks.
- Establish design tokens.
- Create global layout, navigation, footer, themes, 404, and error handling.

Validation:
- Format
- Lint
- Typecheck
- Unit tests
- Build

## Milestone 2 — Data Architecture

- Implement schemas from `DATA_MODEL.md`.
- Add Zod validation.
- Add duplicate and relationship checks.
- Add completeness statuses.
- Add representative fixtures.
- Fail builds on invalid data.

## Milestone 3 — Core Routes and Templates

Build all required routes and reusable templates:

- Homepage
- Directories
- Award pages
- Laureate pages
- Field pages
- Methodology
- Sources
- About
- Contribute
- Corrections
- Privacy

Add breadcrumbs, table of contents, reading progress, source panels, print styles, and related content.

## Milestone 4 — Award Dataset

Add every award listed in `CONTENT_COVERAGE.md`.

For each award, verify:

- Official identity
- Organisation
- Establishment year
- Frequency
- Eligibility
- Prize details where current and verifiable
- Historical summary
- Official URL
- Sources
- Completeness status
- Last verified date

## Milestone 5 — Winner Lists

Add winner lists for each award.

Rules:

- Prefer complete official lists.
- Clearly label partial lists.
- Preserve joint-recipient relationships.
- Validate all award and laureate references.
- Store official citation links where available.

## Milestone 6 — Flagship Laureate Profiles

Create at least 40 detailed, sourced profiles, distributed across major fields and eras.

Each profile must include multi-level explanations where applicable.

## Milestone 7 — Search

Implement local search, autocomplete, typo tolerance, keyboard control, highlights, and no-results support.

## Milestone 8 — Filtering and Sorting

Implement combinable, accessible filters with URL persistence where practical.

## Milestone 9 — Timeline

Implement interactive and textual timeline modes.

## Milestone 10 — Research-Field Explorer

Implement field hierarchy or network plus accessible list fallback.

## Milestone 11 — World Map

Implement lazy-loaded map and non-map fallback.

## Milestone 12 — Comparison Tool

Implement award and laureate comparisons with shareable URLs.

## Milestone 13 — Inspiration Section

Implement sourced educational journeys, advice, pathways, obstacles, and learning guidance.

## Milestone 14 — SEO, Accessibility, and Performance

Complete metadata, schemas, sitemap, robots, image optimisation, reduced motion, accessible visualisations, and performance tuning.

## Milestone 15 — Contributor and Correction Workflows

Add:

- Contribution guide
- Data templates
- Citation rules
- Correction submission instructions
- GitHub issue templates
- Pull-request template
- Code of conduct
- Licence documentation

## Milestone 16 — CI and GitHub Pages

Implement:

- CI validation
- Static build
- GitHub Pages workflow
- Base-path support
- Deployment documentation
- Public URL verification when authorised

## Milestone 17 — Final Audit

Perform independent audits for:

- Product completeness
- Data correctness
- Mathematical correctness
- Accessibility
- Performance
- Responsive layout
- Search and filters
- Security
- Licensing
- SEO
- Links
- Deployment
- Documentation

Fix all critical and high-severity issues.

## Completion Rule

A milestone is incomplete until its tests and acceptance criteria pass.
