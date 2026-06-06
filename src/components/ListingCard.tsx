import type { Listing } from "../data/listings";

const visualClass: Record<Listing["visual"], string> = {
  retail: "img-retail",
  farm: "img-farm",
  land: "img-land",
  luxury: "img-luxury",
};

export function ListingCard({ listing }: { listing: Listing }) {
  const isSold = listing.status === "Sold";
  return (
    <article className="group overflow-hidden rounded-2xl border border-border bg-card shadow-sm transition-all hover:-translate-y-1 hover:shadow-xl">
      <div className={`relative aspect-[4/3] w-full ${visualClass[listing.visual]}`}>
        <div className="absolute left-4 top-4 flex gap-2">
          <span
            className={
              "rounded-full px-3 py-1 text-[0.65rem] font-semibold uppercase tracking-wider " +
              (isSold
                ? "bg-[color:var(--graphite)] text-white"
                : "bg-primary text-primary-foreground")
            }
          >
            {listing.status}
          </span>
          <span className="rounded-full bg-white/90 px-3 py-1 text-[0.65rem] font-medium uppercase tracking-wider text-foreground">
            MLS® {listing.mls}
          </span>
        </div>
        <div className="absolute bottom-4 right-4 rounded-md bg-black/55 px-3 py-1.5 text-sm font-medium text-white backdrop-blur">
          {listing.price}
        </div>
      </div>

      <div className="p-6">
        <p className="text-xs uppercase tracking-[0.18em] text-primary">{listing.type}</p>
        <h3 className="mt-2 font-serif text-xl leading-snug text-foreground">
          {listing.address}
        </h3>
        <p className="mt-1 text-sm text-muted-foreground">
          {listing.area} · {listing.city}
        </p>

        <ul className="mt-4 flex flex-wrap gap-x-5 gap-y-1 text-xs text-foreground/75">
          {listing.beds ? <li>{listing.beds} bed</li> : null}
          {listing.baths ? <li>{listing.baths} bath</li> : null}
          {listing.floorArea ? <li>{listing.floorArea}</li> : null}
          {listing.buildingType ? <li>{listing.buildingType}</li> : null}
        </ul>

        <p className="mt-4 line-clamp-4 text-sm leading-relaxed text-foreground/80">
          {listing.description}
        </p>

        <p className="mt-5 text-xs text-muted-foreground">Listed by UniLife Realty Inc.</p>
      </div>
    </article>
  );
}
