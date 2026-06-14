import { createFileRoute, Link } from "@tanstack/react-router";
import tonyPortrait from "../assets/tony-lin.webp.asset.json";
import { SiteHeader } from "../components/SiteHeader";
import { SiteFooter } from "../components/SiteFooter";
import { ListingCard } from "../components/ListingCard";
import { LeadForm } from "../components/LeadForm";
import { Button } from "../components/ui/button";
import { listings } from "../data/listings";
import { CONTACT, DISCLAIMER } from "../lib/contact";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Tony Lin REALTOR® | UniLife Realty Inc. | Greater Vancouver" },
      {
        name: "description",
        content:
          "Greater Vancouver real estate advisor — commercial, residential, and land representation with UniLife Realty Inc. English & 國語 service.",
      },
      { property: "og:title", content: "Tony Lin — Greater Vancouver Real Estate Advisor" },
      {
        property: "og:description",
        content:
          "Commercial, residential, and land representation across Greater Vancouver and the Fraser Valley. UniLife Realty Inc.",
      },
      { property: "og:url", content: "/" },
      { property: "og:image", content: tonyPortrait.url },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "RealEstateAgent",
          name: "Tony Lin",
          jobTitle: "REALTOR®",
          telephone: CONTACT.phone,
          email: CONTACT.email,
          image: tonyPortrait.url,
          knowsLanguage: ["English", "Mandarin"],
          areaServed: ["Greater Vancouver", "Fraser Valley", "Richmond", "Vancouver", "Surrey"],
          worksFor: {
            "@type": "RealEstateAgent",
            name: CONTACT.brokerage,
            telephone: CONTACT.officePhone,
            address: {
              "@type": "PostalAddress",
              streetAddress: CONTACT.officeAddress,
              addressLocality: "Vancouver",
              addressRegion: "BC",
              postalCode: "V6P 6G5",
              addressCountry: "CA",
            },
          },
        }),
      },
    ],
  }),
  component: HomePage,
});

function HomePage() {
  return (
    <div className="min-h-dvh">
      <SiteHeader />
      <main>
        <Hero />
        <TrustBar />
        <About />
        <FeaturedListings />
        <ValuationSection />
        <FocusBlocks />
        <BuyerSeller />
        <MarketAreas />
        <RecentResults />
        <WhyTony />
        <ContactCTA />
      </main>
      <SiteFooter />
    </div>
  );
}

function Hero() {
  return (
    <section className="img-hero relative overflow-hidden">
      <div className="mx-auto grid max-w-7xl gap-12 px-6 py-20 md:grid-cols-12 md:py-28 lg:py-32">
        <div className="fade-up md:col-span-7">
          <p className="section-label">
            <span className="gold-divider mr-3" />
            Greater Vancouver · UniLife Realty Inc.
          </p>
          <h1 className="mt-6 font-serif text-5xl leading-[1.05] text-foreground md:text-6xl lg:text-7xl">
            Buy, sell, or invest in Greater Vancouver — with clear, bilingual guidance.
          </h1>
          <p className="mt-7 max-w-xl text-lg leading-relaxed text-foreground/75">
            Get practical, relationship-first representation for commercial, residential, and land
            decisions across Greater Vancouver and the Fraser Valley.
          </p>
          <div className="mt-9 flex flex-wrap gap-3">
            <Button asChild size="lg" className="rounded-full">
              <Link to="/contact">Book a Consultation</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="rounded-full">
              <Link to="/listings">View Listings</Link>
            </Button>
          </div>
          <dl className="mt-12 grid max-w-lg grid-cols-2 gap-x-8 gap-y-3 text-sm sm:grid-cols-4">
            <div>
              <dt className="text-[0.65rem] uppercase tracking-[0.18em] text-muted-foreground">
                Role
              </dt>
              <dd className="mt-1 font-medium">REALTOR®</dd>
            </div>
            <div>
              <dt className="text-[0.65rem] uppercase tracking-[0.18em] text-muted-foreground">
                Brokerage
              </dt>
              <dd className="mt-1 font-medium">UniLife Realty</dd>
            </div>
            <div>
              <dt className="text-[0.65rem] uppercase tracking-[0.18em] text-muted-foreground">
                Languages
              </dt>
              <dd className="mt-1 font-medium">English · 國語</dd>
            </div>
            <div>
              <dt className="text-[0.65rem] uppercase tracking-[0.18em] text-muted-foreground">
                Direct
              </dt>
              <dd className="mt-1 font-medium">
                <a href={CONTACT.phoneHref} className="hover:text-primary">
                  {CONTACT.phone}
                </a>
              </dd>
            </div>
          </dl>
          <div className="mt-7 flex items-center gap-3 border-t border-border/70 pt-5">
            <span className="text-[0.62rem] uppercase tracking-[0.18em] text-muted-foreground">Brokerage</span>
            <span className="text-sm font-medium text-foreground">UniLife Realty Inc. · Royal Pacific Realty Group</span>
          </div>
        </div>

        <div className="fade-up md:col-span-5">
          <div className="relative mx-auto max-w-sm">
            <div
              className="absolute -inset-3 rounded-[1.75rem] bg-gradient-to-br from-primary/30 to-transparent blur-2xl"
              aria-hidden
            />
            <div className="relative overflow-hidden rounded-3xl border border-border bg-card shadow-2xl">
              <img
                src={tonyPortrait.url}
                alt="Tony Lin, REALTOR® at UniLife Realty Inc."
                className="aspect-[3/4] w-full object-cover"
              />
              <div className="border-t border-border bg-card p-5">
                <p className="font-serif text-xl text-foreground">Tony Lin</p>
                <p className="text-xs uppercase tracking-[0.22em] text-primary">REALTOR®</p>
                <p className="mt-2 text-sm text-foreground/70">UniLife Realty Inc.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function TrustBar() {
  const items = [
    { k: "Brokerage", v: "UniLife Realty Inc." },
    { k: "Languages", v: "English & 國語" },
    { k: "Coverage", v: "Greater Vancouver · Fraser Valley" },
    { k: "Asset Classes", v: "Commercial · Residential · Land" },
  ];
  return (
    <section className="border-y border-border/70 bg-card">
      <div className="mx-auto grid max-w-7xl gap-6 px-6 py-8 sm:grid-cols-2 md:grid-cols-4">
        {items.map((it) => (
          <div key={it.k}>
            <p className="text-[0.62rem] uppercase tracking-[0.22em] text-primary">{it.k}</p>
            <p className="mt-1.5 text-sm font-medium text-foreground/85">{it.v}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

function About() {
  return (
    <section id="about" className="mx-auto max-w-7xl px-6 py-24">
      <div className="grid gap-14 md:grid-cols-12">
        <div className="md:col-span-5">
          <p className="section-label">
            <span className="gold-divider mr-3" />
            About Tony
          </p>
          <h2 className="mt-5 font-serif text-4xl leading-tight text-foreground md:text-5xl">
            Practical guidance for the decisions that matter.
          </h2>
        </div>
        <div className="md:col-span-7">
          <p className="text-lg leading-relaxed text-foreground/80">
            Tony Lin is a REALTOR® with UniLife Realty Inc., serving clients across Greater
            Vancouver and the Fraser Valley. His public listing portfolio includes commercial
            retail, agricultural land, residential land, and Vancouver West residential property
            experience.
          </p>
          <p className="mt-5 text-lg leading-relaxed text-foreground/80">
            Tony works with English and 國語-speaking clients and provides practical real estate
            guidance for buyers, sellers, investors, and property owners who need clear advice
            before making major property decisions.
          </p>
          <div className="mt-8 grid gap-4 sm:grid-cols-3">
            <Stat label="Brokerage" value="UniLife Realty Inc." />
            <Stat label="Languages" value="English · 國語" />
            <Stat label="Direct" value={CONTACT.phone} />
          </div>
        </div>
      </div>
    </section>
  );
}

function Stat({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-xl border border-border bg-card p-5">
      <p className="text-[0.62rem] uppercase tracking-[0.22em] text-primary">{label}</p>
      <p className="mt-2 font-serif text-lg text-foreground">{value}</p>
    </div>
  );
}

function FeaturedListings() {
  return (
    <section id="listings" className="bg-card/60 py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <div>
            <p className="section-label">
              <span className="gold-divider mr-3" />
              Featured Listings
            </p>
            <h2 className="mt-5 font-serif text-4xl leading-tight text-foreground md:text-5xl">
              Current opportunities for your next move.
            </h2>
          </div>
          <Link to="/listings" className="text-sm font-medium text-primary hover:underline">
            View all listings →
          </Link>
        </div>

        <div className="mt-12 grid gap-8 md:grid-cols-2">
          {listings
            .filter((listing) => listing.status === "Active")
            .map((l) => (
              <ListingCard key={l.id} listing={l} />
            ))}
        </div>

        <p className="mt-10 max-w-3xl text-xs leading-relaxed text-muted-foreground">
          {DISCLAIMER}
        </p>
      </div>
    </section>
  );
}

function ValuationSection() {
  return (
    <section id="valuation" className="mx-auto max-w-7xl px-6 py-24">
      <div className="grid items-start gap-12 rounded-3xl border border-border bg-card p-8 shadow-sm md:grid-cols-12 md:p-14">
        <div className="md:col-span-5">
          <p className="section-label">
            <span className="gold-divider mr-3" />
            Free Property Valuation
          </p>
          <h2 className="mt-5 font-serif text-4xl leading-tight text-foreground md:text-5xl">
            What&apos;s your property worth in today&apos;s market?
          </h2>
          <p className="mt-5 text-foreground/75">
            Get a no-obligation valuation and current market insight for your home, commercial unit,
            or land — usually within one business day.
          </p>
        </div>
        <div className="md:col-span-7">
          <LeadForm source="valuation" />
        </div>
      </div>
    </section>
  );
}

function FocusBlocks() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-24">
      <div className="grid gap-8 md:grid-cols-2">
        <FocusCard
          eyebrow="Commercial Real Estate"
          title="Retail, mixed-use & income property."
          body="For investors, business owners, and property holders looking at retail, mixed-use, or income-producing property opportunities across Metro Vancouver."
          visual="img-retail"
        />
        <FocusCard
          eyebrow="Residential Real Estate"
          title="Family homes & investment houses."
          body="From Vancouver West to the Fraser Valley — guidance on neighbourhood selection, pricing strategy, and negotiation backed by market evidence."
          visual="img-luxury"
        />
      </div>
    </section>
  );
}

function FocusCard({
  eyebrow,
  title,
  body,
  visual,
}: {
  eyebrow: string;
  title: string;
  body: string;
  visual: string;
}) {
  return (
    <article className="overflow-hidden rounded-2xl border border-border bg-card">
      <div className={`aspect-[16/9] ${visual}`} />
      <div className="p-8">
        <p className="text-xs uppercase tracking-[0.18em] text-primary">{eyebrow}</p>
        <h3 className="mt-3 font-serif text-2xl text-foreground">{title}</h3>
        <p className="mt-3 text-sm leading-relaxed text-foreground/75">{body}</p>
      </div>
    </article>
  );
}

function BuyerSeller() {
  const services = [
    {
      label: "For Buyers",
      title: "Structured search, clear advice.",
      points: [
        "Search strategy & neighbourhood insight",
        "Property tours and shortlist analysis",
        "Offer structuring & negotiation",
        "Coordination through to completion",
      ],
    },
    {
      label: "For Sellers",
      title: "Pricing, preparation, positioning.",
      points: [
        "Comparative pricing analysis",
        "Preparation & staging direction",
        "Marketing strategy & exposure plan",
        "Negotiation & contract management",
      ],
    },
  ];
  return (
    <section className="bg-[color:var(--graphite)] py-24 text-[color:var(--ivory)]">
      <div className="mx-auto max-w-7xl px-6">
        <p className="section-label">
          <span className="gold-divider mr-3" />
          Services
        </p>
        <h2 className="mt-5 max-w-3xl font-serif text-4xl leading-tight md:text-5xl">
          A focused process for buyers, sellers, and investors.
        </h2>
        <div className="mt-14 grid gap-8 md:grid-cols-2">
          {services.map((s) => (
            <div
              key={s.label}
              className="rounded-2xl border border-white/10 bg-white/[0.03] p-8 backdrop-blur"
            >
              <p className="text-xs uppercase tracking-[0.22em] text-primary">{s.label}</p>
              <h3 className="mt-3 font-serif text-2xl">{s.title}</h3>
              <ul className="mt-6 space-y-3 text-sm text-white/80">
                {s.points.map((p) => (
                  <li key={p} className="flex gap-3">
                    <span className="mt-2 inline-block h-px w-4 flex-none bg-primary" />
                    <span>{p}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function MarketAreas() {
  const areas = [
    "Richmond",
    "Vancouver West",
    "Surrey",
    "Fleetwood Tynehead",
    "Greater Vancouver",
    "Fraser Valley",
  ];
  return (
    <section className="mx-auto max-w-7xl px-6 py-24">
      <div className="grid items-start gap-12 md:grid-cols-12">
        <div className="md:col-span-5">
          <p className="section-label">
            <span className="gold-divider mr-3" />
            Market Areas
          </p>
          <h2 className="mt-5 font-serif text-4xl leading-tight text-foreground md:text-5xl">
            Your markets, clearly understood.
          </h2>
          <p className="mt-5 text-foreground/75">
            Navigate the Lower Mainland with relevant public listing experience in Richmond,
            Vancouver West, and Surrey.
          </p>
        </div>
        <ul className="md:col-span-7 grid grid-cols-2 gap-3 sm:grid-cols-3">
          {areas.map((a) => (
            <li
              key={a}
              className="rounded-xl border border-border bg-card px-5 py-4 text-sm font-medium text-foreground/85"
            >
              {a}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

function RecentResults() {
  const sold = listings.find((listing) => listing.isFeaturedResult);
  if (!sold) return null;

  const placeholders = [
    {
      name: "Client name",
      area: "Neighbourhood",
      quote: "Add a verified client testimonial here.",
    },
    {
      name: "Client name",
      area: "Neighbourhood",
      quote: "Add a verified client testimonial here.",
    },
    {
      name: "Client name",
      area: "Neighbourhood",
      quote: "Add a verified client testimonial here.",
    },
  ];

  return (
    <section className="bg-card/60 py-24">
      <div className="mx-auto max-w-7xl px-6">
        <p className="section-label">
          <span className="gold-divider mr-3" />
          Recent Results
        </p>
        <h2 className="mt-5 max-w-3xl font-serif text-4xl leading-tight text-foreground md:text-5xl">
          Closed representation, grounded in careful execution.
        </h2>
        <div className="mt-12 grid items-center gap-8 rounded-3xl border border-border bg-background p-6 md:grid-cols-2 md:p-10">
          <Link to="/listings/$id" params={{ id: sold.id }} className="block overflow-hidden rounded-2xl">
            <img src={sold.coverImage} alt={sold.address} className="aspect-[16/10] w-full object-cover transition duration-500 hover:scale-[1.02]" loading="lazy" />
          </Link>
          <div>
            <span className="rounded-full bg-secondary px-3 py-1 text-[0.65rem] font-semibold uppercase tracking-wider text-secondary-foreground">
              Sold
            </span>
            <p className="mt-5 text-xs uppercase tracking-[0.18em] text-primary">
              Closed representation · MLS® {sold.mlsNumber}
            </p>
            <h3 className="mt-3 font-serif text-3xl text-foreground">{sold.address}</h3>
            <p className="mt-2 text-sm text-muted-foreground">
              {sold.neighbourhood} · {sold.city}
            </p>
            <p className="mt-5 font-serif text-2xl text-foreground">
              {new Intl.NumberFormat("en-CA", { style: "currency", currency: "CAD", maximumFractionDigits: 0 }).format(sold.price)}
            </p>
            <p className="mt-4 text-sm leading-relaxed text-foreground/75">{sold.description}</p>
          </div>
        </div>

        <div className="mt-16 flex items-end justify-between gap-6">
          <div>
            <p className="section-label">Client Testimonials</p>
            <h3 className="mt-3 font-serif text-3xl text-foreground">
              Real feedback belongs here.
            </h3>
          </div>
          <p className="rounded-full border border-primary px-3 py-1 text-[0.62rem] font-semibold uppercase tracking-wider text-primary">
            Placeholders
          </p>
        </div>
        <div className="mt-7 grid gap-6 md:grid-cols-3">
          {placeholders.map((item, index) => (
            <article
              key={index}
              className="rounded-2xl border border-dashed border-border bg-background p-7"
            >
              <p className="text-[0.62rem] font-semibold uppercase tracking-[0.2em] text-primary">
                Placeholder — replace before publishing
              </p>
              <p className="mt-5 font-serif text-xl text-foreground">“{item.quote}”</p>
              <p className="mt-6 text-sm font-medium text-foreground">{item.name}</p>
              <p className="text-xs text-muted-foreground">{item.area}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function WhyTony() {
  const items = [
    {
      t: "Bilingual service",
      b: "Clear communication for English and 國語-speaking clients throughout the process.",
    },
    {
      t: "Multi-asset experience",
      b: "Public listing experience across commercial retail, agricultural land, residential land, and Vancouver West homes.",
    },
    {
      t: "Brokerage support",
      b: "Backed by UniLife Realty Inc., part of the Royal Pacific Realty Group — established infrastructure and conveyancing.",
    },
    {
      t: "Practical guidance",
      b: "Direct, evidence-based advice — no pressure, no overpromising.",
    },
  ];
  return (
    <section className="py-24">
      <div className="mx-auto max-w-7xl px-6">
        <p className="section-label">
          <span className="gold-divider mr-3" />
          Why Work With Tony
        </p>
        <h2 className="mt-5 max-w-3xl font-serif text-4xl leading-tight text-foreground md:text-5xl">
          A trusted advisor across asset classes.
        </h2>
        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {items.map((i) => (
            <div key={i.t} className="rounded-2xl border border-border bg-background p-7">
              <h3 className="font-serif text-xl text-foreground">{i.t}</h3>
              <p className="mt-3 text-sm leading-relaxed text-foreground/75">{i.b}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ContactCTA() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-24">
      <div className="overflow-hidden rounded-3xl border border-border bg-[color:var(--charcoal)] px-8 py-14 text-[color:var(--ivory)] md:px-14 md:py-20">
        <div className="grid items-center gap-10 md:grid-cols-12">
          <div className="md:col-span-7">
            <p className="section-label">
              <span className="gold-divider mr-3" />
              Let's talk
            </p>
            <h2 className="mt-5 font-serif text-4xl leading-tight md:text-5xl">
              Considering a property decision in Greater Vancouver?
            </h2>
            <p className="mt-5 max-w-xl text-white/75">
              Get a no-pressure review of your situation and practical next steps — in English or
              國語.
            </p>
          </div>
          <div className="md:col-span-5">
            <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-7">
              <a
                href={CONTACT.phoneHref}
                className="block rounded-full bg-primary px-6 py-4 text-center text-sm font-semibold text-primary-foreground transition hover:opacity-90"
              >
                Call {CONTACT.phone}
              </a>
              <a
                href={`mailto:${CONTACT.email}`}
                className="mt-3 block rounded-full border border-white/20 px-6 py-4 text-center text-sm font-medium text-white transition hover:border-primary hover:text-primary"
              >
                Email {CONTACT.email}
              </a>
              <Link
                to="/contact"
                className="mt-3 block rounded-full border border-white/10 px-6 py-4 text-center text-sm font-medium text-white/85 transition hover:border-primary hover:text-primary"
              >
                Book a Consultation →
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
