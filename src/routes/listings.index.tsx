import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader } from "../components/SiteHeader";
import { SiteFooter } from "../components/SiteFooter";
import { ListingCard } from "../components/ListingCard";
import { listings } from "../data/listings";
import { DISCLAIMER } from "../lib/contact";

export const Route = createFileRoute("/listings/")({
  head: () => ({
    meta: [
      { title: "Listings — Tony Lin REALTOR® | UniLife Realty Inc." },
      {
        name: "description",
        content:
          "Active and recently represented listings by Tony Lin — commercial retail, agricultural land, and Vancouver West residential property.",
      },
      { property: "og:title", content: "Featured Listings — Tony Lin REALTOR®" },
      { property: "og:description", content: "Commercial, land, and residential listings across Greater Vancouver." },
      { property: "og:url", content: "/listings" },
    ],
    links: [{ rel: "canonical", href: "/listings" }],
  }),
  component: ListingsPage,
});

function ListingsPage() {
  const active = listings.filter((l) => l.status === "Active");
  const sold = listings.filter((l) => l.status === "Sold");
  return (
    <div className="min-h-dvh">
      <SiteHeader />
      <main>
        <section className="luxury-wave-bg luxury-wave-rise px-6 pt-16 pb-10">
          <div className="mx-auto max-w-7xl">
          <p className="section-label"><span className="gold-divider mr-3" />Listings</p>
          <h1 className="mt-5 font-serif text-5xl leading-tight text-foreground md:text-6xl">
            Featured properties.
          </h1>
          <p className="mt-5 max-w-2xl text-foreground/75">
            A selection of current and recently represented listings across
            Greater Vancouver and the Fraser Valley.
          </p>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-6 pb-16 pt-8">
          <h2 className="font-serif text-2xl text-foreground">Active</h2>
          <div className="mt-6 grid gap-8 md:grid-cols-2">
            {active.map((l) => <ListingCard key={l.id} listing={l} />)}
          </div>
        </section>

        {sold.length > 0 && (
          <section className="mx-auto max-w-7xl px-6 pb-20">
            <h2 className="font-serif text-2xl text-foreground">Sold</h2>
            <div className="mt-6 grid gap-8 md:grid-cols-2">
              {sold.map((l) => <ListingCard key={l.id} listing={l} />)}
            </div>
          </section>
        )}

        <section className="mx-auto max-w-7xl px-6 pb-20">
          <p className="text-xs leading-relaxed text-muted-foreground">{DISCLAIMER}</p>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
