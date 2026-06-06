import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteHeader } from "../components/SiteHeader";
import { SiteFooter } from "../components/SiteFooter";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services — Tony Lin REALTOR® | UniLife Realty Inc." },
      {
        name: "description",
        content:
          "Commercial, residential, land, and Mandarin real estate services in Greater Vancouver and the Fraser Valley.",
      },
      { property: "og:title", content: "Services — Tony Lin REALTOR®" },
      { property: "og:description", content: "Buying, selling, commercial, land, and bilingual real estate guidance." },
      { property: "og:url", content: "/services" },
    ],
    links: [{ rel: "canonical", href: "/services" }],
  }),
  component: ServicesPage,
});

const services = [
  {
    label: "01",
    title: "Commercial Real Estate",
    body: "For investors, business owners, and property holders looking at retail, mixed-use, or income-producing property opportunities.",
  },
  {
    label: "02",
    title: "Residential Buying",
    body: "For buyers who want structured guidance, property search support, offer strategy, and neighbourhood insight.",
  },
  {
    label: "03",
    title: "Residential Selling",
    body: "For homeowners who need pricing advice, preparation guidance, marketing direction, and negotiation support.",
  },
  {
    label: "04",
    title: "Land & Agricultural Property",
    body: "For clients exploring land, acreage, agricultural property, or long-term holding opportunities in the Fraser Valley.",
  },
  {
    label: "05",
    title: "Mandarin Real Estate Service",
    body: "For Mandarin-speaking clients who prefer clearer communication through the buying or selling process.",
  },
];

function ServicesPage() {
  return (
    <div className="min-h-dvh">
      <SiteHeader />
      <main>
        <section className="mx-auto max-w-7xl px-6 pt-20 pb-12">
          <p className="section-label"><span className="gold-divider mr-3" />Services</p>
          <h1 className="mt-5 max-w-3xl font-serif text-5xl leading-tight text-foreground md:text-6xl">
            Real estate guidance across asset classes.
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-foreground/75">
            From single-family homes in Vancouver West to retail investments in
            Richmond and acreage in the Fraser Valley — Tony provides clear,
            evidence-based representation.
          </p>
        </section>

        <section className="mx-auto max-w-7xl px-6 pb-24">
          <div className="grid gap-6 md:grid-cols-2">
            {services.map((s) => (
              <article key={s.label} className="group rounded-2xl border border-border bg-card p-8 transition hover:border-primary hover:shadow-lg">
                <div className="flex items-start gap-5">
                  <span className="font-serif text-3xl text-primary">{s.label}</span>
                  <div>
                    <h2 className="font-serif text-2xl text-foreground">{s.title}</h2>
                    <p className="mt-3 text-sm leading-relaxed text-foreground/75">{s.body}</p>
                  </div>
                </div>
              </article>
            ))}
          </div>

          <div className="mt-14 rounded-3xl border border-border bg-[color:var(--charcoal)] p-10 text-[color:var(--ivory)] md:p-14">
            <h3 className="max-w-2xl font-serif text-3xl md:text-4xl">
              Not sure where to start? A short conversation usually clarifies the path.
            </h3>
            <div className="mt-7 flex flex-wrap gap-3">
              <Link to="/contact" className="rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground hover:opacity-90">
                Book a Consultation
              </Link>
              <Link to="/listings" className="rounded-full border border-white/30 px-6 py-3 text-sm font-medium text-white hover:border-primary hover:text-primary">
                Browse Listings
              </Link>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
