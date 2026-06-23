# Mandatory Validation and Repair Loop

## Core Loop

For every coherent change:

1. Format
2. Lint
3. Typecheck
4. Run affected unit tests
5. Run data validation
6. Build affected pages
7. Inspect rendered output
8. Run accessibility checks
9. Run relevant end-to-end tests
10. Fix failures
11. Repeat until clean

## Required Scripts

The final `package.json` must provide equivalents of:

```bash
npm run format
npm run format:check
npm run lint
npm run typecheck
npm run test
npm run test:watch
npm run test:e2e
npm run validate:data
npm run check:links
npm run build
npm run preview
npm run audit:a11y
```

## Milestone Gate

A milestone cannot be marked complete when:

- A required command fails.
- A critical page is visually broken.
- Keyboard navigation fails.
- Data validation fails.
- New links are broken.
- A route does not build.
- Mobile layout overflows.
- An unsourced fact was added.
- An incomplete dataset is labelled complete.

## Visual Inspection

Inspect at minimum:

- 360×800
- 768×1024
- 1280×800
- 1440×900

Check:

- Navigation
- Search
- Filters
- Long names
- Long citations
- Missing images
- Empty states
- Dark theme
- Light theme
- Reduced motion
- Keyboard focus
- Print layout

## Data Tests

Test:

- Duplicate IDs and slugs
- Broken references
- Invalid years
- Missing source IDs
- Invalid URLs
- Award-year constraints
- Joint-recipient consistency
- Completeness labels
- Image licences
- Geographical coordinate ranges

## Final Clean-Room Validation

Before completion:

```bash
rm -rf node_modules dist .astro
npm ci
npm run format:check
npm run lint
npm run typecheck
npm run validate:data
npm run test
npm run test:e2e
npm run audit:a11y
npm run check:links
npm run build
```

Use platform-appropriate equivalents on Windows.

## Repair Rule

Never:

- Disable failing tests without cause.
- Remove features to bypass failures unless the requirement itself is invalid.
- Add broad ignore rules.
- Suppress type errors globally.
- Pretend a skipped check passed.
