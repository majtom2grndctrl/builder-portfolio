# builder-portfolio

Dan Hiester's portfolio of things built. Astro + Tailwind, content in Sanity, analytics in PostHog, hosted on Netlify.

## Commands

| Command       | What it does                                          |
| :------------ | :---------------------------------------------------- |
| `pnpm dev`    | Dev server at `localhost:4321`, Studio at `/studio`   |
| `pnpm build`  | Static build to `dist/` (fetches content from Sanity) |
| `pnpm check`  | Type-check `.astro` and `.ts` files                   |
| `pnpm format` | Format everything with Prettier                       |
| `pnpm verify` | Format check + type check + build (what CI runs)      |

## Services

| Service | Where                                    | Notes                                                             |
| :------ | :--------------------------------------- | :---------------------------------------------------------------- |
| Sanity  | Project `ylv78mng`, dataset `production` | Studio is embedded at `/studio`. Schema lives in `src/sanity/`.   |
| PostHog | US cloud, project `649765`               | Loads only in production builds (`src/components/PostHog.astro`). |
| Netlify | Config in `netlify.toml`                 | Public env values are set there; nothing secret is required yet.  |

All values in `.env.example` and `netlify.toml` are public client-side keys. Never commit a Sanity API token.

## Content flow

The site is static: content is fetched from Sanity at build time. To publish content changes automatically, add a Netlify build hook and point a Sanity webhook at it (see Setup below).

## Setup checklist

- [ ] `git push -u origin main`
- [ ] Netlify → Add new project → Import from GitHub → `builder-portfolio` (build settings come from `netlify.toml`)
- [ ] Sanity → API → CORS origins → add the Netlify URL, **Allow credentials** on (needed for `/studio` in production)
- [ ] Netlify → Project configuration → Build hooks → create "Sanity publish"; Sanity → API → Webhooks → paste the hook URL, trigger on create/update/delete, filter `_type == "project"`
- [ ] Optional: custom domain in Netlify, then set `SITE_URL` there and add the domain to Sanity CORS
