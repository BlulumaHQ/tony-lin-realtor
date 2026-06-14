import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader } from "../components/SiteHeader";
import { SiteFooter } from "../components/SiteFooter";
import { LeadForm } from "../components/LeadForm";
import { SocialLinks, SOCIAL } from "../components/SocialLinks";
import { CONTACT } from "../lib/contact";
import { Building2, Languages, Mail, Phone } from "lucide-react";
import instagramQr from "../assets/instagram-qr.jpeg.asset.json";
import xiaohongshuQr from "../assets/xiaohongshu-qr.jpeg.asset.json";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact Tony Lin — UniLife Realty Inc. | Greater Vancouver" },
      {
        name: "description",
        content:
          "Reach Tony Lin, REALTOR® at UniLife Realty Inc. Call 604-700-3946 or email tony@tony-lin.ca. English and 國語 service.",
      },
      { property: "og:title", content: "Contact Tony Lin, REALTOR®" },
      { property: "og:description", content: "Book a no-pressure real estate consultation." },
      { property: "og:url", content: "/contact" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: ContactPage,
});

function ContactPage() {
  return (
    <div className="min-h-dvh">
      <SiteHeader />
      <main>
        <section className="mx-auto max-w-7xl px-6 py-20">
          <div className="grid gap-14 md:grid-cols-12">
            <div className="md:col-span-5">
              <p className="section-label">
                <span className="gold-divider mr-3" />
                Contact
              </p>
              <h1 className="mt-5 font-serif text-5xl leading-tight text-foreground md:text-6xl">
                Book a consultation.
              </h1>
              <p className="mt-5 text-foreground/75">
                Share a few details and receive clear next steps — usually within one business day.
                For time-sensitive enquiries, call directly.
              </p>

              <div className="mt-10 space-y-4">
                <ContactBlock icon={Phone} label="Direct" value={CONTACT.phone} href={CONTACT.phoneHref} />
                <ContactBlock
                  icon={Mail}
                  label="Email"
                  value={CONTACT.email}
                  href={`mailto:${CONTACT.email}`}
                />
                <ContactBlock icon={Languages} label="Languages" value={CONTACT.languages} />
                <div className="flex gap-4 rounded-xl border border-border bg-card p-5">
                  <Building2 className="mt-0.5 size-5 shrink-0 text-primary" aria-hidden />
                  <div>
                  <p className="text-[0.62rem] uppercase tracking-[0.22em] text-primary">Office</p>
                  <p className="mt-2 font-serif text-base text-foreground">{CONTACT.brokerage}</p>
                  <p className="text-sm text-foreground/75">{CONTACT.officeAddress}</p>
                  <p className="text-sm text-foreground/75">{CONTACT.officeCity}</p>
                  <a
                    href={CONTACT.officePhoneHref}
                    className="mt-2 inline-block text-sm text-primary hover:underline"
                  >
                    {CONTACT.officePhone}
                  </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="md:col-span-7">
              <LeadForm source="contact" />
            </div>
          </div>
          <div className="mt-16"><FollowCard /></div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}

function FollowCard() {
  const codes = [
    {
      label: "Instagram",
      href: SOCIAL.instagram,
      image: instagramQr.url,
      alt: "QR code for Tony Lin on Instagram",
    },
    {
      label: "小紅書 RED",
      href: SOCIAL.xiaohongshu,
      image: xiaohongshuQr.url,
      alt: "QR code for Tony Lin on Xiaohongshu",
    },
  ];
  return (
    <div className="rounded-xl border border-border bg-card p-5">
      <p className="text-[0.62rem] uppercase tracking-[0.22em] text-primary">Follow Tony / 關注 Tony</p>
      <div className="mt-4">
        <SocialLinks />
      </div>
      <div className="mt-5 grid grid-cols-2 gap-4">
        {codes.map((code) => (
          <a
            key={code.label}
            href={code.href}
            target="_blank"
            rel="noreferrer"
            className="group block"
          >
            <img
              src={code.image}
              alt={code.alt}
              className="aspect-square w-full rounded-lg border border-border object-cover"
            />
            <span className="mt-2 block text-xs font-medium text-foreground/75 group-hover:text-primary">
              {code.label} ↗
            </span>
          </a>
        ))}
      </div>
    </div>
  );
}

function ContactBlock({ icon: Icon, label, value, href }: { icon: typeof Phone; label: string; value: string; href?: string }) {
  const inner = (
    <><Icon className="mt-0.5 size-5 shrink-0 text-primary" aria-hidden /><div>
      <p className="text-[0.62rem] uppercase tracking-[0.22em] text-primary">{label}</p>
      <p className="mt-2 font-serif text-lg text-foreground">{value}</p>
    </div></>
  );
  return href ? (
    <a
      href={href}
      className="flex gap-4 rounded-xl border border-border bg-card p-5 transition hover:border-primary"
    >
      {inner}
    </a>
  ) : (
    <div className="flex gap-4 rounded-xl border border-border bg-card p-5">{inner}</div>
  );
}
