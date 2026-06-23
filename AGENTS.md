# AGENTS.md

## Mission

Build, verify, document, and prepare deployment for a premium, data-driven, globally useful digital archive of major mathematics and statistics awards, their winners, biographies, research contributions, publications, institutions, and historical influence.

The platform must inspire and inform:

- School students
- Olympiad aspirants
- Undergraduate and postgraduate students
- PhD scholars
- Researchers
- Mathematics educators
- Historians of mathematics
- Statistics and theoretical computer-science communities
- General mathematics enthusiasts

Read all repository-control files before implementation.

## Source-of-Truth Order

When instructions conflict, use this order:

1. `SPECIFICATION.md`
2. `AGENTS.md`
3. `AUTONOMY_RULES.md`
4. `RESEARCH_POLICY.md`
5. `DATA_MODEL.md`
6. `DESIGN_SYSTEM.md`
7. `IMPLEMENTATION_PLAN.md`
8. `VALIDATION_LOOP.md`
9. `QUALITY_CHECKLIST.md`
10. `PROJECT_STATUS.md`

Document conflicts and the chosen resolution in `PROJECT_STATUS.md`.

## Autonomous Execution

Work independently from audit through implementation, research, testing, repair, documentation, and deployment preparation.

Do not ask for approval on routine choices involving:

- Component structure
- File organisation
- Naming
- Styling
- Dependency selection within the approved stack
- Test design
- Content ordering
- Responsive behaviour
- Error-state design
- Data-validation implementation

When a reasonable decision is needed:

1. Inspect requirements and current repository state.
2. Choose the simplest robust option.
3. Record the decision.
4. Continue.

## Mandatory Loop

Repeat until complete:

1. Read current status and next milestone.
2. Inspect relevant files.
3. Implement the smallest coherent milestone slice.
4. Add or update tests.
5. Run relevant checks.
6. Fix all failures.
7. Re-run checks.
8. Render and inspect affected pages.
9. Review for accessibility, performance, data integrity, and regressions.
10. Update status.
11. Commit.
12. Continue.

## Stop Conditions

Stop only for:

### Verified Completion

Every milestone and quality gate passes.

### Genuine External Blocker

Examples:

- GitHub authentication is unavailable.
- Account permissions prevent deployment.
- A required protected resource is inaccessible.
- A destructive external operation requires explicit consent.

### Unsafe Operation

Examples:

- Exposing credentials
- Deleting unrelated data
- Modifying unrelated repositories
- Violating source licences or terms

A minor ambiguity is not a blocker.

## Technical Baseline

Prefer:

- Astro
- TypeScript strict mode
- Tailwind CSS
- MDX, JSON, or YAML structured content
- Zod validation
- Pagefind or Fuse.js
- KaTeX
- Leaflet and OpenStreetMap
- D3.js or Observable Plot only for justified visualisations
- Vitest
- Playwright
- axe-core
- GitHub Actions
- GitHub Pages

The essential site must remain usable without runtime APIs.

## Engineering Rules

- Keep content separate from presentation.
- Use reusable templates.
- Validate all structured data.
- Avoid `any`.
- Remove unused code and dependencies.
- Use semantic HTML.
- Use stable IDs and slugs.
- Support missing-data states.
- Add accessible fallbacks for charts and maps.
- No paid APIs.
- No secrets in source.
- No false completion claims.
- No fabricated content.
- No disabled tests merely to obtain a green build.
- No broad lint suppressions.
- No hidden broken links.
- No unverified data presented as authoritative.

## Git Rules

- Commit only verified milestone work.
- Use clear commit messages.
- Never force-push.
- Never rewrite published history.
- Never commit secrets, local credentials, `.env` files, or generated artefacts unless required.
- Review the diff before committing.

## Completion Standard

Generated code is not completion.

Completion requires working, tested, accessible, sourced, maintainable functionality with transparent dataset coverage and verified deployment configuration.
