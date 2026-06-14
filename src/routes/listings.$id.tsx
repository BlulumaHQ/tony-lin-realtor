import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ListingGallery } from "../components/ListingGallery";
import { SiteFooter } from "../components/SiteFooter";
import { SiteHeader } from "../components/SiteHeader";
import { Button } from "../components/ui/button";
import { getListingById } from "../data/listings";
import { CONTACT, DISCLAIMER } from "../lib/contact";

const formatPrice = (price: number) => new Intl.NumberFormat("en-CA", { style: "currency", currency: "CAD", maximumFractionDigits: 0 }).format(price);

export const Route = createFileRoute("/listings/$id")({
  loader: ({ params }) => {
    const listing = getListingById(params.id);
    if (!listing) throw notFound();
    return listing;
  },
  head: ({ loaderData }) => ({
    meta: loaderData ? [
      { title: `${loaderData.address} — Tony Lin REALTOR®` },
      { name: "description", content: `${loaderData.category} in ${loaderData.neighbourhood}. ${formatPrice(loaderData.price)}. MLS® ${loaderData.mlsNumber}.` },
      { property: "og:title", content: loaderData.address },
      { property: "og:description", content: loaderData.description.slice(0, 155) },
      { property: "og:image", content: loaderData.coverImage },
    ] : [],
  }),
  component: ListingDetailPage,
  notFoundComponent: () => <div className="mx-auto max-w-3xl px-6 py-24 text-center"><h1 className="font-serif text-4xl">Listing not found.</h1><Button asChild className="mt-6"><Link to="/listings">Back to listings</Link></Button></div>,
  errorComponent: () => <div className="mx-auto max-w-3xl px-6 py-24 text-center"><h1 className="font-serif text-4xl">This listing could not be loaded.</h1></div>,
});

function ListingDetailPage() {
  const listing = Route.useLoaderData();
  const stats: Array<[string, string] | null> = [
    listing.beds !== undefined ? ["Beds", String(listing.beds)] : null,
    listing.baths !== undefined ? ["Baths", String(listing.baths)] : null,
    listing.sqft ? ["Interior", `${listing.sqft.toLocaleString()} sq. ft.`] : null,
    listing.acres ? ["Land", `${listing.acres} acres`] : null,
    listing.yearBuilt ? ["Year built", String(listing.yearBuilt)] : null,
  ];
  const visibleStats = stats.filter((item): item is [string, string] => item !== null);
  const details: Array<[string, string | undefined]> = [
    ["MLS®", listing.mlsNumber], ["Property type", listing.propertyType], ["Zoning", listing.zoning],
    ["Taxes", listing.taxes], ["Strata fee", listing.strataFee], ["CAP rate", listing.capRate], ["Lot size", listing.lotSize],
  ];
  const visibleDetails = details.filter((item): item is [string, string] => Boolean(item[1]));

  return <div className="min-h-dvh"><SiteHeader /><main>
    <section className="mx-auto max-w-7xl px-6 py-12 md:py-16"><ListingGallery photos={listing.photos} address={listing.address} />
      <div className="mt-12 grid gap-12 md:grid-cols-12">
        <div className="md:col-span-8">
          <div className="flex flex-wrap items-center gap-3"><span className="rounded-full bg-primary px-3 py-1 text-xs font-semibold uppercase tracking-wider text-primary-foreground">{listing.status}{listing.soldDate ? ` · ${listing.soldDate}` : ""}</span><span className="text-xs uppercase tracking-[0.18em] text-primary">{listing.category}</span></div>
          <h1 className="mt-5 font-serif text-4xl leading-tight md:text-6xl">{listing.address}</h1>
          <p className="mt-3 text-foreground/65">{listing.neighbourhood} · {listing.city} {listing.postalCode}</p>
          <p className="mt-5 font-serif text-3xl">{formatPrice(listing.price)}</p>
          {visibleStats.length ? <dl className="mt-10 grid grid-cols-2 gap-4 border-y border-border py-6 sm:grid-cols-5">{visibleStats.map(([label, value]) => <div key={label}><dt className="text-[0.62rem] uppercase tracking-[0.18em] text-muted-foreground">{label}</dt><dd className="mt-1 font-medium">{value}</dd></div>)}</dl> : null}
          <h2 className="mt-12 font-serif text-3xl">Property highlights</h2><ul className="mt-5 space-y-3">{listing.highlights.map((item: string) => <li key={item} className="flex gap-3 text-foreground/75"><span className="mt-2 h-px w-5 shrink-0 bg-primary" />{item}</li>)}</ul>
          <h2 className="mt-12 font-serif text-3xl">About this property</h2><p className="mt-5 leading-8 text-foreground/75">{listing.description}</p>
        </div>
        <aside className="md:col-span-4"><div className="rounded-2xl border border-border bg-card p-7"><h2 className="font-serif text-2xl">Property details</h2><dl className="mt-6 divide-y divide-border">{visibleDetails.map(([label, value]) => <div key={label} className="flex justify-between gap-5 py-3 text-sm"><dt className="text-muted-foreground">{label}</dt><dd className="text-right font-medium">{value}</dd></div>)}</dl><p className="mt-6 text-sm">Listed by {listing.listedBy}</p><p className="mt-3 text-xs leading-relaxed text-muted-foreground">{DISCLAIMER}</p></div></aside>
      </div>
      <div className="luxury-wave-bg mt-16 rounded-3xl border border-border p-8 md:p-12"><h2 className="font-serif text-3xl">Interested in this property?</h2><p className="mt-3 text-foreground/75">Get clear answers and arrange a private consultation.</p><div className="mt-7 flex flex-wrap gap-3"><Button asChild size="lg"><Link to="/contact">Book a Consultation</Link></Button><Button asChild size="lg" variant="outline"><a href={CONTACT.phoneHref}>Call {CONTACT.phone}</a></Button><Button asChild size="lg" variant="outline"><Link to="/" hash="valuation">Request a Valuation</Link></Button></div></div>
    </section>
  </main><SiteFooter /></div>;
}