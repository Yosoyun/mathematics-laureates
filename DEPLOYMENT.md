# GitHub Pages Deployment

## Requirements

- Static output
- Correct repository base path
- No runtime secrets
- No paid service dependency
- GitHub Actions deployment
- Verified public URL when authorised

## Repository Setup

Codex should:

1. Initialise Git if needed.
2. Create a clear `.gitignore`.
3. Commit verified milestones.
4. Connect to a GitHub repository only when authorised.
5. Push the default branch.
6. Configure GitHub Pages to deploy from GitHub Actions.

## Astro Configuration

Support:

- `site`
- `base`
- Repository subpath
- Correct asset URLs
- Static output

Derive repository name safely from environment or documented configuration.

## CI Workflow

CI should run:

- Install
- Format check
- Lint
- Typecheck
- Data validation
- Unit tests
- Build

## Deployment Workflow

Deployment should:

- Trigger on default-branch push
- Build static site
- Upload Pages artifact
- Deploy to GitHub Pages
- Use least-privilege permissions

## Verification

After deployment:

- Open homepage.
- Open nested award route.
- Open nested laureate route.
- Test CSS and assets.
- Test search.
- Test filters.
- Test mobile layout.
- Check 404 behaviour.
- Confirm canonical URL.
- Record deployment commit and URL.

## Do Not Claim Success Unless Verified

If authentication is unavailable:

- Complete all local work.
- Create workflows.
- Run a production build.
- Document exact remaining steps.
- Mark deployment as blocked, not complete.

## Custom Domain

Provide optional instructions only. Do not require a custom domain for completion.
