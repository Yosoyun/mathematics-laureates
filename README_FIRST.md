# Global Mathematics Awards Platform — Autonomous Codex Package

This repository-control package is designed to let Codex build the complete mathematics awards and laureates website with minimal user interaction.

## What to do

1. Create an empty project folder or GitHub repository.
2. Copy every file and folder from this package into the repository root.
3. Open the repository in Codex.
4. Give Codex the prompt contained in `START_CODEX.md`.
5. Allow Codex to read, write, install dependencies, run tests, use Git, and access public official websites.
6. Codex must continue through the milestone loop until completion or a genuine external blocker.

## Important

The project is large. “Complete” means:

- The website architecture and all required features are implemented.
- Every listed award is represented.
- Winner datasets are included with explicit completeness status.
- Detailed, sourced flagship laureate profiles are included.
- The data model and contribution pipeline support expansion to every historical winner.
- No incomplete dataset is falsely labelled complete.
- All validation, accessibility, testing, build, and deployment checks pass.

The agent is instructed not to stop after planning, scaffolding, a landing page, or a small prototype.

## Files

- `AGENTS.md` — highest-level agent operating rules.
- `SPECIFICATION.md` — product and content requirements.
- `IMPLEMENTATION_PLAN.md` — milestone sequence.
- `PROJECT_STATUS.md` — persistent progress ledger.
- `RESEARCH_POLICY.md` — factual verification and sourcing rules.
- `DATA_MODEL.md` — canonical content schemas.
- `DESIGN_SYSTEM.md` — visual and interaction requirements.
- `QUALITY_CHECKLIST.md` — definition of done.
- `VALIDATION_LOOP.md` — mandatory test-and-repair cycle.
- `DEPLOYMENT.md` — GitHub Pages instructions.
- `SECURITY_AND_LEGAL.md` — safety, licensing, privacy, and copyright rules.
- `CONTENT_COVERAGE.md` — initial awards and profile coverage.
- `AUTONOMY_RULES.md` — decision-making and blocker policy.
- `START_CODEX.md` — the one prompt to paste into Codex.
- `RESUME_CODEX.md` — prompt to resume after interruption.
- `FINAL_AUDIT_PROMPT.md` — final independent review prompt.
- `CONTRIBUTING_TEMPLATE.md` — future contributor guidance.
- `.github/workflows/README.md` — expectations for CI and deployment workflows.

## Recommended permissions

Permit Codex to:

- Read and edit this repository.
- Install npm dependencies.
- run build, test, lint, and browser-test commands.
- Start local development servers.
- Use Git inside this repository.
- Research public official and academic sources.
- Push to the selected GitHub repository only after validation.

Do not give it unrestricted access to unrelated local files or secrets.
