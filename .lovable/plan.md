## 1. Replace the "Trusted by independent restaurants" section

Currently uses fake logos + made-up testimonials. Replace the entire `SocialProof` section in `src/routes/index.tsx` with an honest "How a Servision rollout works" timeline — no fabricated clients or quotes.

New section ("Your rollout, week one"):
- Section label: "What to expect"
- Heading: "From first call to live QR codes in under a week."
- Four steps in a horizontal track:
  1. **Day 1** — Quick call, we confirm your dish list.
  2. **Day 2–3** — We come on-site and scan every dish (≈15 min each).
  3. **Day 4–6** — We build, optimize and host the 3D/AR models.
  4. **Day 7** — Your QR codes arrive, ready to place on tables and menus.
- Small reassurance line underneath: "No app for guests. No integration for your POS. No work for your staff."

Also remove `testimonials` and `logos` from `src/lib/site-content.ts` and their imports in `index.tsx`.

## 2. Pricing changes (`src/lib/site-content.ts` + Pricing component)

Contract terms (applies to Starter and Growth):
- Add a new field on the tier: `term: "Billed monthly · 12-month commitment"` shown directly under the price.
- Update the section subheading to make the model explicit: "Monthly billing on a 12-month plan — so your AR menu stays consistent through every season."
- Remove "Cancel anytime" from every tier.

Starter — feature list (unchanged order otherwise):
- Up to 10 dishes per location
- Photorealistic 3D + AR models
- Unique QR code for every dish
- Hosted & maintained for you
- (remove "Cancel anytime")

Growth — feature list, with "Everything in Starter" moved to the top, and the menu-swap line rewritten so it reflects what you actually offer (one menu refresh per year, any number of dishes):
- Everything in Starter
- Up to 24 dishes per location
- Photorealistic 3D + AR models
- Unique QR code for every dish
- One full menu refresh per year (swap or update any number of dishes)
- Priority dish updates

Franchise — remove the two things you don't offer:
- Remove "Centralized menu management"
- Remove "Dedicated account manager"
- Keep: Unlimited dishes per location, Multi-location rollout & support, Custom branding & integrations
- Add: "Annual contract, terms tailored to your group"

## Files touched
- `src/lib/site-content.ts` — remove `testimonials` & `logos`; update `PricingTier` type to include `term`; rewrite the three tiers per above.
- `src/routes/index.tsx` — replace `SocialProof` component with the new rollout-timeline section; drop `testimonials`/`logos` imports; render `tier.term` under the price; update the pricing intro copy.

No other sections, no backend, no schema changes.
