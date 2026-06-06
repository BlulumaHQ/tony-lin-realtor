
# Tony Lin REALTOR® — Premium Website Build Plan

A polished, editorial, conversion-focused single-page site (with proper sub-routes) for Tony Lin at UniLife Realty Inc., using the supplied assets and the exact contact + listing data you provided.

## Assets (uploaded → CDN via lovable-assets)
- `unilife-realty-royal-pacific-header.png` → UniLife + Royal Pacific lockup (header right, footer)
- `agent-placeholder-office-logo.jpg` → UniLife mark (secondary use)
- `tony-lin-realtor.webp` → Tony's portrait (hero + About)

All three uploaded to the CDN as `.asset.json` pointers — production-safe, survives clone/deploy. No temp builder paths.

## Tech & Production Safety
- TanStack Start (existing stack), Tailwind v4 tokens defined in `src/styles.css`.
- All routes as real files under `src/routes/` for direct URL access (SPA fallback handled by framework).
- No fake backend: contact form is a clean frontend form with a `mailto:` fallback action so it works on Cloudflare Pages with zero config; structured so Formspree/Resend can be wired later.
- No invented data, awards, testimonials, or sales numbers.

## Design System (in `src/styles.css`)
Tokens (oklch equivalents of the spec hex):
- `--background` ivory `#F7F3EC`, `--foreground` charcoal `#181818`
- `--primary` champagne gold `#B89B5E`, `--secondary` graphite `#2A2A2A`
- `--muted` stone `#D8D1C6`
- Fonts: Playfair Display (headings) + Inter (body), loaded via `<link>` in `__root.tsx`
- Thin gold dividers, large radius cards, soft shadows, subtle fade-up motion (CSS only — no heavy libs)

## Routes
- `/` — Home (all major sections in editorial flow)
- `/listings` — Full listings grid (4 provided listings)
- `/about` — Tony bio + UniLife brokerage
- `/services` — 5 service blocks
- `/contact` — Contact form + office info + map embed (static iframe to Google Maps)

Each route has its own `head()` with unique title, description, og:title, og:description. `og:image` only on leaf routes using Tony's portrait. Canonical on leaves only.

## Page Sections (Home)
1. Sticky header — Tony Lin wordmark (left) + UniLife/Royal Pacific lockup (right), nav: Home / Listings / About / Services / Contact, CTA "604-700-3946"
2. Hero — portrait on right, large serif headline "Greater Vancouver Real Estate Advisor", dual CTA (Book Consultation / View Listings), trust line (REALTOR® · UniLife Realty Inc. · English & Mandarin)
3. Trust bar — Brokerage, Languages, Service areas, Property types
4. About Tony — supplied copy verbatim, portrait, credentials card
5. Featured Listings — 4 listing cards (Capstan Way retail, 8171 176 St ag, 8171 176 St land, 2995 W 36th sold) with status badges (Active/Sold), MLS#, price, type, address, sq ft, beds/baths where given, short description. CSS-gradient image blocks per property type (retail facade, farmland, land, luxury home) — no broken external MLS image links.
6. Commercial Real Estate focus block
7. Residential Real Estate focus block
8. Buyer Services / Seller Services (2-col)
9. Market Areas (Richmond, Vancouver West, Surrey, Fleetwood Tynehead, Greater Vancouver, Fraser Valley)
10. Why Work With Tony (bilingual, brokerage support, multi-asset class, practical guidance)
11. Contact / Consultation CTA + form
12. Footer — full contact, office address, languages, MLS disclaimer, © 2026 Tony Lin · Web Design by [Bluluma](https://bluluma.com)

## Listings Data (used verbatim from your spec)
Implemented as a typed array in `src/data/listings.ts` so it's easy to edit later. Status badge: Active = gold, Sold = graphite.

## Compliance
- MLS disclaimer block above footer and in footer
- Sold listing clearly marked Sold
- No claims of "#1", "top producer", "award-winning"
- No invented years of experience

## Accessibility & Perf
- Semantic h1/h2/h3, alt text on portrait & logos, accessible form labels, visible focus rings, ≥44px tap targets
- `h-dvh` for hero, prefers-reduced-motion respected
- No animation libs, no video bg, CSS-only motion
- Images: portrait via CDN; listing visuals via CSS gradients (lightweight, deterministic)

## SEO
- Title: "Tony Lin REALTOR® | UniLife Realty Inc. | Greater Vancouver Real Estate"
- Meta description as specified
- JSON-LD `RealEstateAgent` on `/` with name, telephone, email, areaServed, knowsLanguage, worksFor (UniLife Realty Inc. + address)
- Relative canonical + og:url (no project URL baked in)

## Out of scope (not in this build)
- Real backend form submission (left wireable)
- Live MLS feed integration
- CMS / admin

Ready to build on approval.
