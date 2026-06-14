import { Link } from "@tanstack/react-router";
import type { Listing } from "../data/listings";

const formatPrice = (price: number) =>
  new Intl.NumberFormat("en-CA", { style: "currency", currency: "CAD", maximumFractionDigits: 0 }).format(price);

export function ListingCard({ listing }: { listing: Listing }) {
  const isSold = listing.status === "Sold";
  return (
    <Link
      to="/listings/$id"
      params={{ id: listing.id }}
      className="group block overflow-hidden rounded-2xl border border-border bg-card shadow-sm transition-all hover:-translate-y-1 hover:shadow-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
    >
      <article>
      <div className="relative aspect-[4/3] w-full overflow-hidden bg-muted">
        <img src={listing.coverImage} alt={listing.address} className="h-full w-full object-cover transition duration-500 group-hover:scale-[1.03]" loading="lazy" />
        <div className="absolute left-4 top-4 flex gap-2">
          <span
            className={
              "rounded-full px-3 py-1 text-[0.65rem] font-semibold uppercase tracking-wider " +
              (isSold
                ? "bg-secondary text-secondary-foreground"
                : "bg-primary text-primary-foreground")
            }
          >
            {listing.status}
          </span>
          <span className="rounded-full bg-white/90 px-3 py-1 text-[0.65rem] font-medium uppercase tracking-wider text-foreground">
            MLS® {listing.mlsNumber}
          </span>
        </div>
        <div className="absolute bottom-4 right-4 rounded-md bg-black/55 px-3 py-1.5 text-sm font-medium text-white backdrop-blur">
          {formatPrice(listing.price)}
        </div>
      </div>

      <div className="p-6">
        <p className="text-xs uppercase tracking-[0.18em] text-primary">{listing.category}</p>
        <h3 className="mt-2 font-serif text-xl leading-snug text-foreground">
          {listing.address}
        </h3>
        <p className="mt-1 text-sm text-muted-foreground">
          {listing.neighbourhood} · {listing.city}
        </p>

        <ul className="mt-4 flex flex-wrap gap-x-5 gap-y-1 text-xs text-foreground/75">
          {listing.beds !== undefined ? <li>{listing.beds} bed</li> : null}
          {listing.baths !== undefined ? <li>{listing.baths} bath</li> : null}
          {listing.sqft ? <li>{listing.sqft.toLocaleString()} sq. ft.</li> : null}
          {listing.acres ? <li>{listing.acres} acres</li> : null}
        </ul>

        <p className="mt-4 line-clamp-4 text-sm leading-relaxed text-foreground/80">
          {listing.description}
        </p>

        <p className="mt-5 text-xs text-muted-foreground">Listed by UniLife Realty Inc.</p>
      </div>
      </article>
    </Link>
  );
}
