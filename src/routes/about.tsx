import { createFileRoute, Link } from "@tanstack/react-router";
import tonyPortrait from "../assets/tony-lin.webp.asset.json";
import unilifeLogo from "../assets/unilife-royal-pacific.png.asset.json";
import { SiteHeader } from "../components/SiteHeader";
import { SiteFooter } from "../components/SiteFooter";
import { CONTACT } from "../lib/contact";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Tony Lin — REALTOR® at UniLife Realty Inc." },
      {
        name: "description",
        content:
          "Tony Lin is a REALTOR® with UniLife Realty Inc. serving Greater Vancouver and the Fraser Valley — commercial, residential, and land representation.",
      },
      { property: "og:title", content: "About Tony Lin — REALTOR®" },
      { property: "og:description", content: "Practical real estate guidance across asset classes, in English and Mandarin." },
      { property: "og:url", content: "/about" },
      { property: "og:image", content: tonyPortrait.url },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <div className="min-h-dvh">
      <SiteHeader />
      <main>
        <section className="mx-auto max-w-7xl px-6 py-20">
          <div className="grid gap-14 md:grid-cols-12">
            <div className="md:col-span-5">
              <div className="overflow-hidden rounded-3xl border border-border bg-card shadow-xl">
                <img
                  src={tonyPortrait.url}
                  alt="Tony Lin, REALTOR® at UniLife Realty Inc."
                  className="aspect-[3/4] w-full object-cover"
                />
              </div>
              <img
                src={unilifeLogo.url}
                alt="UniLife Realty Inc. — Royal Pacific Realty Group"
                className="mt-6 h-12 w-auto"
              />
            </div>
            <div className="md:col-span-7">
              <p className="section-label"><span className="gold-divider mr-3" />About</p>
              <h1 className="mt-5 font-serif text-5xl leading-tight text-foreground md:text-6xl">
                Tony Lin, REALTOR<sup>®</sup>
              </h1>
              <p className="mt-6 text-lg leading-relaxed text-foreground/80">
                Tony Lin is a REALTOR® with UniLife Realty Inc., serving clients
                across Greater Vancouver and the Fraser Valley. His public listing
                portfolio includes commercial retail, agricultural land, residential
                land, and Vancouver West residential property experience.
              </p>
              <p className="mt-5 text-lg leading-relaxed text-foreground/80">
                Tony works with English and Mandarin-speaking clients and provides
                practical real estate guidance for buyers, sellers, investors, and
                property owners who need clear advice before making major property
                decisions.
              </p>

              <div className="mt-10 grid gap-4 sm:grid-cols-2">
                <InfoTile label="Brokerage" value={CONTACT.brokerage} />
                <InfoTile label="Office" value={`${CONTACT.officeAddress}, ${CONTACT.officeCity}`} />
                <InfoTile label="Direct" value={CONTACT.phone} href={CONTACT.phoneHref} />
                <InfoTile label="Email" value={CONTACT.email} href={`mailto:${CONTACT.email}`} />
                <InfoTile label="Languages" value="English · Mandarin" />
                <InfoTile label="Office Phone" value={CONTACT.officePhone} href={CONTACT.officePhoneHref} />
              </div>

              <div className="mt-10 flex flex-wrap gap-3">
                <Link to="/contact" className="rounded-full bg-foreground px-6 py-3 text-sm font-medium text-background hover:bg-primary hover:text-primary-foreground">
                  Book a Consultation
                </Link>
                <Link to="/listings" className="rounded-full border border-foreground/30 px-6 py-3 text-sm font-medium hover:border-primary hover:text-primary">
                  View Listings
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}

function InfoTile({ label, value, href }: { label: string; value: string; href?: string }) {
  const Content = (
    <>
      <p className="text-[0.62rem] uppercase tracking-[0.22em] text-primary">{label}</p>
      <p className="mt-2 font-serif text-base text-foreground">{value}</p>
    </>
  );
  return href ? (
    <a href={href} className="block rounded-xl border border-border bg-card p-5 transition hover:border-primary">
      {Content}
    </a>
  ) : (
    <div className="rounded-xl border border-border bg-card p-5">{Content}</div>
  );
}
