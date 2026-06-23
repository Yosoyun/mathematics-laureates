# Autonomous Decision Rules

## Default Behaviour

Proceed without asking the user whenever the decision is reversible, local to the repository, and consistent with the specification.

## Resolve Independently

Resolve these autonomously:

- Framework details within the approved stack
- Folder structure
- Component APIs
- Visual hierarchy
- Responsive breakpoints
- Loading, empty, and error states
- Data-file organisation
- Test coverage
- Search indexing implementation
- Static deployment configuration
- Open-source package choice
- Minor wording and navigation labels

## Ask Only When Truly Blocked

Ask only when:

- GitHub login or repository ownership must be selected.
- A custom domain must be purchased or configured.
- A private asset or credential is essential.
- Two requirements are irreconcilably contradictory.
- An action would delete or alter external user data.
- Legal permission is required for a specific non-public asset.

## Assumption Policy

When information is absent:

1. Prefer the safest interpretation.
2. Prefer free and open-source choices.
3. Prefer accessible, static, maintainable implementation.
4. Document the assumption.
5. Continue.

## Failure Policy

When a command fails:

1. Read the full error.
2. Identify root cause.
3. Apply a targeted fix.
4. Re-run the failed command.
5. Run adjacent checks for regressions.
6. Record material fixes in status.

Do not skip or silence failures.

## Context-Recovery Policy

Before a long task or after interruption:

- Read `PROJECT_STATUS.md`.
- Inspect Git history and status.
- Check current package scripts.
- Run a lightweight health check.
- Continue from the first incomplete milestone.

## Research Autonomy

Use official public sources. Add source metadata to records. When authoritative information cannot be verified, mark the field or record incomplete rather than guessing.

## User-Interaction Minimisation

The intended user interaction is:

- Initial repository upload
- Optional GitHub authorisation
- Optional final custom-domain choice

Everything else should be handled autonomously.
