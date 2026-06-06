import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { SiteHeader } from "../components/SiteHeader";
import { SiteFooter } from "../components/SiteFooter";
import { CONTACT } from "../lib/contact";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact Tony Lin — UniLife Realty Inc. | Greater Vancouver" },
      {
        name: "description",
        content:
          "Reach Tony Lin, REALTOR® at UniLife Realty Inc. Call 604-700-3946 or email tony@tony-lin.ca. English and Mandarin service.",
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
              <p className="section-label"><span className="gold-divider mr-3" />Contact</p>
              <h1 className="mt-5 font-serif text-5xl leading-tight text-foreground md:text-6xl">
                Book a consultation.
              </h1>
              <p className="mt-5 text-foreground/75">
                Share a few details and Tony will be in touch — usually within
                one business day. For time-sensitive enquiries, please call directly.
              </p>

              <div className="mt-10 space-y-5">
                <ContactBlock label="Direct" value={CONTACT.phone} href={CONTACT.phoneHref} />
                <ContactBlock label="Email" value={CONTACT.email} href={`mailto:${CONTACT.email}`} />
                <ContactBlock label="Languages" value={CONTACT.languages} />
                <div className="rounded-xl border border-border bg-card p-5">
                  <p className="text-[0.62rem] uppercase tracking-[0.22em] text-primary">Office</p>
                  <p className="mt-2 font-serif text-base text-foreground">{CONTACT.brokerage}</p>
                  <p className="text-sm text-foreground/75">{CONTACT.officeAddress}</p>
                  <p className="text-sm text-foreground/75">{CONTACT.officeCity}</p>
                  <a href={CONTACT.officePhoneHref} className="mt-2 inline-block text-sm text-primary hover:underline">
                    {CONTACT.officePhone}
                  </a>
                </div>
              </div>
            </div>

            <div className="md:col-span-7">
              <ContactForm />
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}

function ContactBlock({ label, value, href }: { label: string; value: string; href?: string }) {
  const inner = (
    <>
      <p className="text-[0.62rem] uppercase tracking-[0.22em] text-primary">{label}</p>
      <p className="mt-2 font-serif text-lg text-foreground">{value}</p>
    </>
  );
  return href ? (
    <a href={href} className="block rounded-xl border border-border bg-card p-5 transition hover:border-primary">
      {inner}
    </a>
  ) : (
    <div className="rounded-xl border border-border bg-card p-5">{inner}</div>
  );
}

function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const name = String(fd.get("name") || "");
    const email = String(fd.get("email") || "");
    const phone = String(fd.get("phone") || "");
    const interest = String(fd.get("interest") || "");
    const message = String(fd.get("message") || "");

    const subject = `Consultation request — ${name}`;
    const body =
      `Name: ${name}\nEmail: ${email}\nPhone: ${phone}\nInterest: ${interest}\n\n${message}`;
    window.location.href = `mailto:${CONTACT.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    setSubmitted(true);
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-3xl border border-border bg-card p-7 shadow-sm md:p-10"
    >
      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="Full Name" name="name" required />
        <Field label="Email" name="email" type="email" required />
        <Field label="Phone" name="phone" type="tel" />
        <div>
          <label htmlFor="interest" className="text-xs font-medium uppercase tracking-[0.18em] text-foreground/70">
            I am interested in
          </label>
          <select
            id="interest"
            name="interest"
            className="mt-2 w-full rounded-lg border border-input bg-background px-4 py-3 text-sm text-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/30"
            defaultValue="General Consultation"
          >
            <option>Buying</option>
            <option>Selling</option>
            <option>Commercial Property</option>
            <option>Land / Agricultural Property</option>
            <option>General Consultation</option>
          </select>
        </div>
      </div>
      <div className="mt-5">
        <label htmlFor="message" className="text-xs font-medium uppercase tracking-[0.18em] text-foreground/70">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          className="mt-2 w-full rounded-lg border border-input bg-background px-4 py-3 text-sm text-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/30"
          placeholder="Tell Tony a bit about your situation, timeline, and preferred areas."
        />
      </div>

      <button
        type="submit"
        className="mt-7 w-full rounded-full bg-foreground px-6 py-4 text-sm font-semibold text-background transition hover:bg-primary hover:text-primary-foreground"
      >
        Send Enquiry
      </button>

      {submitted && (
        <p className="mt-4 text-center text-sm text-foreground/70">
          Your email client should open. If it didn't, please email{" "}
          <a href={`mailto:${CONTACT.email}`} className="text-primary underline">
            {CONTACT.email}
          </a>{" "}
          directly.
        </p>
      )}

      <p className="mt-6 text-center text-xs text-muted-foreground">
        Prefer to talk? Call{" "}
        <a href={CONTACT.phoneHref} className="text-primary hover:underline">
          {CONTACT.phone}
        </a>
      </p>
    </form>
  );
}

function Field({ label, name, type = "text", required }: { label: string; name: string; type?: string; required?: boolean }) {
  return (
    <div>
      <label htmlFor={name} className="text-xs font-medium uppercase tracking-[0.18em] text-foreground/70">
        {label}{required ? " *" : ""}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        className="mt-2 w-full rounded-lg border border-input bg-background px-4 py-3 text-sm text-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/30"
      />
    </div>
  );
}
