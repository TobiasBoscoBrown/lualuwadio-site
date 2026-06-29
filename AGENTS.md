# AGENTS.md

This repository is the **editable-site-template**: a one-page site a non-technical owner can edit with no code, and that an AI assistant can safely extend.

## Safe-edit rules
- Everyday content lives in `data/content.json`. Editing it is always safe.
- The public pages in `app/` render from that JSON via `lib/content.js`. Keep the JSON shape intact.
- `/admin` (login) and `/admin/quick` are owner tools; do not expose secrets in them.
- Auth is in `lib/auth.js` (password from `ADMIN_PASSWORD`). Saving writes `data/content.json` through `lib/github.js`.
- Never commit real secrets. All secrets are Vercel environment variables (see README).

## Deploy
Push to `main`; Vercel redeploys. Roll back via Vercel Instant Rollback.
