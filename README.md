# editable-site-template

A one-page personal / small-business website that the owner can edit themselves, no code. Next.js 14 (App Router), deploys on Vercel.

## How editing works

- Content lives in `data/content.json`. The public pages render from it.
- The owner logs in at `/admin`, then edits the live site (click text, swap photos, reorder, add blocks). Quick edits for email/links live at `/admin/quick`.
- Saving an edit commits `data/content.json` back to this repo via the GitHub API, which triggers a Vercel redeploy.
- To undo a change, use Vercel > Deployments > ... > Instant Rollback.

## Required environment variables (set per deploy in Vercel)

| Variable | Purpose |
| --- | --- |
| `ADMIN_PASSWORD` | The password the owner types at `/admin`. Unique per site. |
| `SESSION_SECRET` | Random string used to sign the admin session cookie. |
| `GITHUB_TOKEN` | Token that can read/write this repo's `data/content.json`. |
| `GITHUB_OWNER` | GitHub owner of this site's repo. |
| `GITHUB_REPO` | This site's repo name. |
| `GITHUB_BRANCH` | Branch to commit to (usually `main`). |

Without `ADMIN_PASSWORD` no one can log in. Without `GITHUB_TOKEN` + owner/repo, saves cannot persist.

## Using it as a template

1. Create a new repo from this one.
2. Overwrite `data/content.json` with the new owner's details (same shape).
3. Replace the placeholder images in `public/assets` and `public/media`.
4. Deploy to Vercel with the six environment variables above set for this site's repo.

Push to `main` to deploy.
