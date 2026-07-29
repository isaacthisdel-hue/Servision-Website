# Servision Website — Architecture Brief

_Written by Claude on 2026-07-28 as a read-only orientation pass. Nothing else in this repo was changed to produce this file._

## 1. Stack & framework

This is **not** a plain Vite/React SPA — it's a **TanStack Start** app (React 19 + TanStack Router, file-based routing, SSR) scaffolded by **Lovable**, using Lovable's own build config wrapper.

- Build tool: Vite 8, via `@lovable.dev/vite-tanstack-config` (`vite.config.ts` just calls `defineConfig()` from that package — Lovable's wrapper injects the TanStack Start plugin, React plugin, Tailwind v4 plugin, path aliases, dev-only component tagging, and a Cloudflare-targeted Nitro server build). Don't add these plugins manually — the comment in `vite.config.ts` warns it'll break with duplicate plugins.
- Routing: `@tanstack/react-router` + `@tanstack/react-start`, file-based (see §2).
- Styling: Tailwind CSS v4 (CSS-first config, no `tailwind.config.js` — theme tokens live in `src/styles.css` as CSS custom properties using OKLCH colors).
- UI kit: shadcn/ui-style components in `src/components/ui/` (Radix primitives + `class-variance-authority` + `tailwind-merge`), plus `lucide-react` icons.
- Package manager: **bun** (`bun.lock`, `bunfig.toml`). Use `bun install`, not npm/yarn, or you'll get a mismatched lockfile.
- Backend: **Supabase** (`@supabase/supabase-js`), used for auth wiring (`src/integrations/supabase/`) and one Postgres table (`leads`, defined in `supabase/migrations/`). Project ref: `lxkqnqvbrqfijxqwogwb`.
- Forms: the contact form posts directly to **Formspree** (`https://formspree.io/f/xnjkbeaz`), not to Supabase — the `leads` table exists in Supabase but the current contact flow doesn't write to it (see §6, fragile #3).
- Language: TypeScript throughout, ESLint + Prettier configured.

Template identity: `.lovable/project.json` records `"template": "tanstack_start_ts_2026-06-17"` — this is Lovable's TanStack Start template, generated mid-2026.

## 2. Page / route map

File-based routing (TanStack Router) — every `.tsx` directly under `src/routes/` is a route. Do not add `src/pages/` or Next/Remix-style conventions (see `src/routes/README.md`, which Lovable itself left as a guardrail).

| Route file | URL | Purpose |
| --- | --- | --- |
| `src/routes/__root.tsx` | (shell) | App shell: `<html>`, global `<head>` meta/OG tags, Google Fonts, 404 and error boundary components. Every page renders inside this. |
| `src/routes/index.tsx` | `/` | The entire marketing homepage — hero, how-it-works, showcase, "why it works", before/after, rollout timeline, pricing, final CTA. One big file, many small components (see §4). |
| `src/routes/contact.tsx` | `/contact` (also `/contact?plan=starter\|growth\|franchise`) | Lead capture form. Reads `?plan=` to pre-select a pricing tier, validates with Zod, submits to Formspree. |
| `src/routes/ar/$slug.tsx` | `/ar/:slug*` | Not a real page — a redirector. Parses the path, builds a GitHub Pages URL (`https://isaacthisdel-hue.github.io/ar-<restaurant-slug>/...`), and 302s there. This is how QR codes point guests to per-restaurant AR content hosted in separate GitHub repos outside this project. |
| `src/routes/legal.privacy.tsx` | `/legal/privacy` | Privacy Policy |
| `src/routes/legal.terms.tsx` | `/legal/terms` | Terms of Service |
| `src/routes/legal.refund.tsx` | `/legal/refund` | Refund & Cancellation policy |
| `src/routes/legal.subscription.tsx` | `/legal/subscription` | Subscription Agreement |
| `src/routeTree.gen.ts` | — | **Auto-generated** by the TanStack router plugin from the files above. Never hand-edit; it regenerates on build/dev. |

All four legal pages are thin wrappers around the shared `LegalPage` component (§4) — each just supplies a title, an "updated" date, and body content via `Section`/`List` helpers.

## 3. Where the content actually lives

This is the part you care about for day-to-day edits.

- **`src/lib/site-content.ts`** — the single source of truth for copy, pricing, and dish data:
  - `brand` — site name, domain, logo reference, contact email, CTA URLs.
  - `dishes[]` — the three showcase dishes (name, description, image, AR link, generated QR code).
  - `rolloutSteps[]` — the "Day 1 / Day 2–3 / ..." onboarding timeline shown on the homepage.
  - `pricingTiers[]` — **Starter / Growth / Franchise**, each with `price`, `priceUnit`, `term`, `setupNote`, `bundleSize`, `features[]`, CTA label/URL. **This is the file to edit to change a price, a feature bullet, or plan wording.**
- **`src/lib/media.ts`** — the single source of truth for every image and external link:
  - Imports all images from `src/assets/` through Vite (so they get bundled + hashed URLs — comments in the file explicitly warn not to reference `/assets/foo.png` as a raw string, since that breaks on export/other hosts).
  - `arLinks` — the URLs each dish's QR code encodes (some point at `ar.servision.ca/...`, some at `servision.ca/ar/...` which routes through the redirector in §2).
- **Homepage sections** (`src/routes/index.tsx`) pull from both files and lay out the actual JSX/copy that isn't data-driven (headlines, subheads, nav labels, etc. are written directly inline in the component functions — see §4 for the list of sections).
- **Legal page bodies** are hardcoded prose inside each `legal.*.tsx` route file, using `<Section>`/`<List>` from `LegalPage.tsx`.
- **Contact form fields/copy** live in `src/routes/contact.tsx` (the Formspree endpoint constant is also here).
- **Global `<head>` / SEO defaults** (page title, meta description, OG tags, fonts) are in `src/routes/__root.tsx`; each route can override its own via its `head()` export.

Quick answer to "what file do I touch to change a headline or a price": headline copy → the relevant section function in `src/routes/index.tsx`; price/plan wording → `src/lib/site-content.ts`; images/logo/links → `src/lib/media.ts`.

## 4. Components

- **`src/components/ui/`** — the shadcn/ui-style primitive library (accordion, dialog, dropdown, card, table, tabs, tooltip, sidebar, etc., ~35 files). These are generic, Radix-backed, and not specific to Servision copy — treat them as infrastructure, not content.
- **`src/components/SiteFooter.tsx`** — shared footer (logo, legal links, copyright, contact email) used on the homepage, contact page, and all legal pages.
- **`src/components/LegalPage.tsx`** — shared layout + `Section`/`List` helpers for the four legal routes.
- **Homepage-only components** are *not* extracted into `src/components/` — they're private functions declared directly inside `src/routes/index.tsx`: `Button`, `SectionLabel`, `Wordmark`, `Nav`, `HeroMedia`, `Hero`, `HowItWorks`, `Showcase`, `DeliveryMethods`, `Why`, `BeforeAfter`, `Rollout`, `Pricing`, `FinalCTA`, and the top-level `HomePage`. If you want to reuse one of these elsewhere, you'd need to lift it out into `src/components/` first.

## 5. Deployment & the Lovable sync question

**This is the important part.**

What the repo tells us directly:
- `AGENTS.md` has a Lovable-injected banner (between `<!-- LOVABLE:BEGIN -->` / `LOVABLE:END` markers) stating this project **is connected to Lovable**, and that **commits pushed to the connected branch (`main`) sync back into the Lovable editor and show up there.**
- The same banner warns: **do not rewrite published git history** — no force-push, no rebase/amend/squash of commits already pushed — because that rewrites history on Lovable's side and risks the user losing project history in the Lovable UI.
- There's a `.lovable/` folder with `project.json` (template identity) and `plan.md` (a Lovable-authored change plan for a past edit — the pricing/social-proof rewrite — which has already been applied to the current code).
- There is **no** `vercel.json`, `netlify.toml`, or `.github/workflows/` in the repo. So this is not deploying via a separate Vercel/Netlify integration or a custom CI pipeline that I can find — deployment is being driven by Lovable's own pipeline.
- The Vite config comment notes Lovable's build wrapper does a "build-only" Nitro build targeting **Cloudflare** by default, which is consistent with Lovable hosting TanStack Start apps on Cloudflare's platform under the hood.
- I could not independently confirm where `servision.ca` currently points (DNS/HTTP lookups are blocked in this sandbox), so **please verify the live hosting target in Lovable's project settings** (Lovable → Settings → Domains) rather than taking my inference as fact.

**Direct answer to the flag:** based on the repo's own instructions, editing this repo directly with git (adding commits, pushing to `main`) is designed to be compatible with Lovable — pushes sync back into the Lovable editor rather than fighting it. The danger case is specifically **history rewriting** (force-push, rebase, amend/squash of already-pushed commits) and, more generally, any edit made **inside the Lovable web editor at the same time** you're editing locally without pulling first — that's a classic two-writers-one-branch conflict, same as any collaborator working the same branch. Practical rule: always `git pull` before starting a local session, make normal forward-only commits, push normally, and avoid touching `src/routeTree.gen.ts` or anything Lovable auto-generates by hand.

## 6. Fragile areas — read before editing

1. **`src/routeTree.gen.ts`** is auto-generated by the TanStack router plugin from the files in `src/routes/`. Never hand-edit it — it's regenerated on every `dev`/`build`, and a manual edit will just be overwritten (or cause a mismatch if you edit it and skip a build).
2. **`vite.config.ts`** intentionally omits plugins that `@lovable.dev/vite-tanstack-config` already injects (TanStack Start, React, Tailwind, path aliases, error logging, sandbox detection). Adding any of those manually causes duplicate-plugin breakage — this is called out in the file's own comment.
3. **Contact form vs. Supabase `leads` table are disconnected.** The `leads` table and its RLS policy (`supabase/migrations/...sql`) exist and accept anonymous inserts, but `src/routes/contact.tsx` currently posts to Formspree only — nothing in the app writes to `leads`. If a future change assumes form submissions land in Supabase, they currently don't. Worth deciding whether to wire the form to Supabase, drop the table, or keep Formspree and treat `leads` as unused/legacy.
4. **Images must be imported through Vite, not referenced by raw path.** `src/lib/media.ts` explicitly warns against `"/assets/foo.png"`-style string paths — they break once exported to a static host. Always add new images as ES imports in that file.
5. **History rewrites break Lovable's view of the project** (see §5) — no force-push/rebase/squash of pushed commits.
6. **The `ar/$slug.tsx` redirector hardcodes a GitHub username** (`isaacthisdel-hue`) and a naming convention (`ar-<restaurant-slug>` repo, hosted via GitHub Pages). If that GitHub account or naming convention ever changes, every QR code currently printed and handed to restaurants stops resolving — this is easy to break without realizing it, since it isn't wired to anything else in this repo.
7. **`.env`** holds live Supabase project ID/URL/publishable key (not secret values, but still config Lovable manages) — don't commit changes to it casually; Lovable likely regenerates/syncs it.
8. **Tailwind v4 config is CSS-first** (`src/styles.css`, `@theme inline` block) — there's no `tailwind.config.js` to edit. Color/theme changes belong in the CSS custom properties there (OKLCH values), not a JS config file.

## Files touched

Only this file was added. Nothing else in the repository was modified.
