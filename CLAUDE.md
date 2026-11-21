# Tony Lin REALTOR® — project notes

- Stack: TanStack Start (Lovable first build). All changes go in this repo, never Lovable.
- Hosting: Cloudflare Worker `tony-lin-realtor` (Workers Builds from GitHub main; build `bun run build`, deploy `npx wrangler deploy`).
  workers.dev: https://tony-lin-realtor.sony-40b.workers.dev
- Domain: tony-lin.ca (registrar Squarespace, Tony's account) → Cloudflare zone in Sony's account (Free),
  NS armando/carla.ns.cloudflare.com, DNSSEC off. tony-lin.ca + www are Worker custom domains. Email = Google Workspace (MX/SPF/DKIM imported).
- Listings: central Supabase `uzdjwpkgldzhnoxjeyrw`, views `tony_listings` / `tony_listing_photos` / `tony_area_listings`
  (realtor slug `tony-lin`), loaded in `src/lib/listings.functions.ts`. `src/data/listings.ts` = hand-written copy/zh-TW
  overrides matched by MLS®, plus manual sold entries; also the fallback if central is down.
- Contact/valuation/alerts forms → central edge function `lead-submit` (code in eric-kim-realty-concept-a repo),
  stored in `realtor_cms.leads`. No secrets in this site. Notify address = `realtors.lead_notify_email` (tony@tony-lin.ca).
  Sender: Tony's own Resend team (Sony invited as member); key in Supabase secret `RESEND_KEY_TONY`
  (`realtors.resend_key_secret`), from `tony@tony-lin.ca`. Until that secret exists it falls back to send.bluluma.com.
- Site is live on tony-lin.ca + www (Cloudflare zone active, Nov 20 2026).
- The old Lovable Cloud project (rkeeilbhnwldgybvhaxb, `leads` table) is no longer used.
