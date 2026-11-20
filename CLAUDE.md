# Tony Lin REALTOR® — project notes

- Stack: TanStack Start (Lovable first build). All changes go in this repo, never Lovable.
- Hosting: Cloudflare Worker `tony-lin-realtor` (Workers Builds from GitHub main; build `bun run build`, deploy `npx wrangler deploy`).
  workers.dev: https://tony-lin-realtor.sony-40b.workers.dev
- Domain: tony-lin.ca zone added to Sony's Cloudflare (Free). Nameservers armando/carla.ns.cloudflare.com
  must be set at the registrar; then add tony-lin.ca + www as Worker custom domains. Email = Google Workspace (MX/SPF/DKIM imported).
- Listings: central Supabase `uzdjwpkgldzhnoxjeyrw`, views `tony_listings` / `tony_listing_photos` / `tony_area_listings`
  (realtor slug `tony-lin`), loaded in `src/lib/listings.functions.ts`. `src/data/listings.ts` = hand-written copy/zh-TW
  overrides matched by MLS®, plus manual sold entries; also the fallback if central is down.
- Contact/valuation/alerts forms → central edge function `lead-submit` (code in eric-kim-realty-concept-a repo),
  stored in `realtor_cms.leads`. No secrets in this site. Notify address = `realtors.lead_notify_email`
  (sony@bluluma.com during testing → switch to tony@tony-lin.ca at launch). Sender = send.bluluma.com until
  tony-lin.ca is verified in Resend (`realtors.lead_from_email`).
- The old Lovable Cloud project (rkeeilbhnwldgybvhaxb, `leads` table) is no longer used.
