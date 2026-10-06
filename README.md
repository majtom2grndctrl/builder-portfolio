# builder-portfolio

Dan Hiester's portfolio of things built. Astro + Tailwind, content in Sanity, analytics in PostHog, hosted on Netlify.

The repo is a small pnpm workspace: the site lives at the root, and the Sanity Studio lives in `studio/` and deploys separately to Sanity's hosting, so the site's dependencies stay React-free.

## Commands

| Command              | What it does                                           |
| :------------------- | :----------------------------------------------------- |
| `pnpm dev`           | Dev server at `localhost:4321`                         |
| `pnpm studio`        | Studio dev server at `localhost:3333`                  |
| `pnpm studio:deploy` | Deploy the Studio to `builder-portfolio.sanity.studio` |
| `pnpm build`         | Static build to `dist/` (fetches content from Sanity)  |
| `pnpm check`         | Type-check `.astro` and `.ts` files                    |
| `pnpm format`        | Format everything with Prettier                        |
| `pnpm verify`        | Format check + type check + build (what CI runs)       |

## Services

| Service | Where                                    | Notes                                                             |
| :------ | :--------------------------------------- | :---------------------------------------------------------------- |
| Sanity  | Project `ylv78mng`, dataset `production` | Studio and schema in `studio/`; site queries in `src/sanity/`.    |
| PostHog | US cloud, project `649765`               | Loads only in production builds (`src/components/PostHog.astro`). |
| Netlify | Config in `netlify.toml`                 | Public env values are set there; nothing secret is required yet.  |

All values in `.env.example` and `netlify.toml` are public client-side keys. Never commit a Sanity API token.

## Content flow

The site is static: content is fetched from Sanity at build time. To publish content changes automatically, add a Netlify build hook and point a Sanity webhook at it (see Setup below).

## Setup checklist

- [ ] `git push -u origin main`
- [ ] Netlify → Add new project → Import from GitHub → `builder-portfolio` (build settings come from `netlify.toml`)
- [ ] `pnpm studio:deploy` (log in with your Sanity account when prompted), then add the printed `appId` to `studio/sanity.cli.ts`
- [ ] Netlify → Project configuration → Build hooks → create "Sanity publish"; Sanity → API → Webhooks → paste the hook URL, trigger on create/update/delete, filter `_type == "project"`
- [ ] Optional: custom domain in Netlify, then set `SITE_URL` there
