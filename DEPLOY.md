# Deploying to GitHub Pages

This project is configured to be GitHub Pages friendly.

## What's set up

- **`vite.config.ts`** reads `VITE_BASE` so assets resolve under a subpath like `/<repo>/`.
- **`HashRouter`** is used in `src/App.tsx` so deep links work without server-side rewrites.
- **`public/404.html`** redirects unknown paths back to the app root (safety net).
- **`.github/workflows/deploy.yml`** builds and deploys on every push to `main`.

## One-time setup

1. Push the repo to GitHub.
2. In the repo: **Settings → Pages → Build and deployment → Source: GitHub Actions**.
3. Push to `main` (or run the workflow manually). The site will be published at:
   `https://<your-username>.github.io/<repo-name>/`

## User/organization site or custom domain

If your repo is named `<username>.github.io`, or you use a custom domain, edit
`.github/workflows/deploy.yml` and set:

```yaml
env:
  VITE_BASE: /
```

For a custom domain, also add a `public/CNAME` file containing your domain.

## Local production preview

```bash
npm run build
npm run preview
```
