# Workflow Requirements

Codex must create:

1. `ci.yml`
2. `deploy-pages.yml`

## CI

Run on pull requests and default-branch pushes:

- npm ci
- format check
- lint
- typecheck
- data validation
- unit tests
- build

## Deployment

Run on default-branch pushes after successful validation:

- Configure Pages
- Build static output
- Upload artifact
- Deploy Pages

Use least-privilege permissions and official GitHub actions.
