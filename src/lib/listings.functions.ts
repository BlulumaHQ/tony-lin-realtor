import { createServerFn } from "@tanstack/react-start";
import { listings as staticListings, type Listing } from "../data/listings";

// Central Bluluma Realtor CMS (Supabase, schema realtor_cms, public views tony_*).
// Publishable key — safe to ship; RLS only exposes public listing data.
const CENTRAL_URL = "https://uzdjwpkgldzhnoxjeyrw.supabase.co";
const CENTRAL_KEY = "sb_publishable_ifsg2zxajGqu19GsJ2X4RQ_KHBHGIvi";

type Row = {
  id: string;
  slug: string;
  title: string | null;
  address: string | null;
  city: string | null;
  price: number | null;
  status: string;
  category: string | null;
  transaction_type: string | null;
  property_type: string | null;
  beds: number | null;
  baths: number | null;
  sqft: number | null;
  lot_size: string | null;
  mls_number: string | null;
  description: string | null;
  features: string[] | null;
  primary_image_url: string | null;
  sort_order: number | null;
};
type PhotoRow = { listing_id: string; image_url: string; sort_order: number | null };

async function rest<T>(path: string): Promise<T> {
  const res = await fetch(`${CENTRAL_URL}/rest/v1/${path}`, {
    headers: { apikey: CENTRAL_KEY, Authorization: `Bearer ${CENTRAL_KEY}` },
  });
  if (!res.ok) throw new Error(`central ${path} ${res.status} ${(await res.text()).slice(0, 200)}`);
  return res.json() as Promise<T>;
}

const titleCase = (s: string) =>
  s.toLowerCase().replace(/\b([a-z])/g, (m) => m.toUpperCase()).replace(/\b(\d+)(St|Nd|Rd|Th)\b/g, (_, n, t) => n + t.toLowerCase());

function categoryLabel(r: Row) {
  if (r.category === "commercial") return r.property_type ? `Commercial — ${r.property_type}` : "Commercial";
  if (r.property_type === "Vacant Land") return "Land";
  return r.property_type || "Residential";
}

function fromRow(r: Row, photos: string[]): Listing {
  const cover = r.primary_image_url || photos[0] || "";
  return {
    id: r.slug,
    mlsNumber: r.mls_number || "",
    status: r.status === "sold" ? "Sold" : "Active",
    category: categoryLabel(r),
    price: Number(r.price || 0),
    address: titleCase(r.address || r.title || ""),
    neighbourhood: r.city || "",
    city: r.city ? `${r.city}, BC` : "BC",
    postalCode: "",
    beds: r.beds ?? undefined,
    baths: r.baths ?? undefined,
    sqft: r.sqft ?? undefined,
    lotSize: r.lot_size ?? undefined,
    propertyType: r.property_type || "",
    highlights: (r.features || []).slice(0, 5),
    description: r.description || "",
    listedBy: "UniLife Realty Inc.",
    coverImage: cover,
    photos: photos.length ? photos : cover ? [cover] : [],
  };
}

/**
 * Central DB decides which listings exist, their status and price.
 * Hand-written entries in src/data/listings.ts (matched by MLS®) keep their
 * richer copy, slug and zh-TW translations; the dual listing is merged there.
 * Manual sold entries that only live in the static file are kept.
 * On any central error the static file is served unchanged.
 */
export async function loadListings(): Promise<Listing[]> {
  try {
    const [rows, photoRows] = await Promise.all([
      rest<Row[]>("tony_listings?select=*&order=sort_order.asc.nullslast,created_at.desc"),
      rest<PhotoRow[]>("tony_listing_photos?select=listing_id,image_url,sort_order&order=sort_order.asc"),
    ]);
    const photosBy = new Map<string, string[]>();
    for (const p of photoRows) {
      const list = photosBy.get(p.listing_id) || [];
      list.push(p.image_url);
      photosBy.set(p.listing_id, list);
    }

    const out: Listing[] = [];
    const used = new Set<string>();
    for (const r of rows) {
      const photos = photosBy.get(r.id) || [];
      const match = staticListings.find((s) => r.mls_number && s.mlsNumber.includes(r.mls_number));
      if (match) {
        if (used.has(match.id)) continue; // second MLS of a merged dual listing
        used.add(match.id);
        out.push({
          ...match,
          status: r.status === "sold" ? "Sold" : "Active",
          price: r.price ? Number(r.price) : match.price,
          photos: photos.length > match.photos.length ? photos : match.photos,
          coverImage: match.coverImage || r.primary_image_url || photos[0] || "",
        });
      } else {
        out.push(fromRow(r, photos));
      }
    }
    for (const s of staticListings) {
      if (s.status === "Sold" && !used.has(s.id)) out.push(s);
    }
    return out.length ? out : staticListings;
  } catch (error) {
    console.error("Central listings unavailable, using static data", String(error), (error as Error)?.stack);
    return staticListings;
  }
}

export const getListings = createServerFn({ method: "GET" }).handler(() => loadListings());

export const getListing = createServerFn({ method: "GET" })
  .inputValidator((id: string) => id)
  .handler(async ({ data: id }) => {
    const all = await loadListings();
    return all.find((l) => l.id === id) ?? null;
  });
