import { Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import heroImage from "../assets/construction-hero.jpg";
import lhlLogo from "../assets/lhl-logo-desktop-white.svg.asset.json";
import { SiteHeader } from "./SiteHeader";
import { SiteFooter } from "./SiteFooter";

export const LHL_URL = "https://lhl.homes/";

const copy = {
  en: {
    label: "Construction & Development",
    h1: "Construction & Development",
    intro:
      "If you own land or an older property and are exploring redevelopment, you can learn about development options through LHL Homes (Legacy Harmony Living Group), a separate brand focused on multi-generational multiplex living in Vancouver.",
    alt: "Modern multiplex residence with timber and stone facade in a leafy Vancouver neighbourhood",
    logoAlt: "LHL Homes — Legacy Harmony Living Group logo",
    brandNote: "A separate brand focused on multi-generational multiplex living in Vancouver.",
    sectionsLabel: "Development Approaches",
    sectionsTitle: "Three ways LHL Homes describes working with property owners.",
    sections: [
      ["01", "Property Redevelopment", "Exploring how an existing property or site could be redeveloped into new housing, such as modern multiplex homes."],
      ["02", "Co-Development", "LHL Homes describes partnering with landowners to develop properties that benefit both parties, built around a shared vision of long-term value."],
      ["03", "Commissioned Redevelopment", "For owners who want a redevelopment carried out for their own property. Scope and terms are discussed directly with LHL Homes."],
    ],
    cta: "Explore LHL Homes",
    external: "This link opens lhl.homes, a separate external website, in a new tab. Services, projects, and terms are provided by LHL Homes.",
    contactTitle: "Have questions about your property first?",
    contactBody: "You can start with a conversation about your property, the local market, and your goals.",
    contactCta: "Contact Tony",
    contact: "/contact",
  },
  zh: {
    label: "建築與地產開發",
    h1: "建築與地產開發",
    intro:
      "如果您手上有土地或舊房，正在考慮重建或開發，可以透過 LHL Homes（Legacy Harmony Living Group）進一步了解開發方案。LHL Homes 是獨立品牌，專注於 Vancouver 的多代同堂 multiplex 住宅。",
    alt: "位於 Vancouver 綠意社區、木材與石材外牆的現代 multiplex 住宅",
    logoAlt: "LHL Homes — Legacy Harmony Living Group 品牌標誌",
    brandNote: "獨立品牌，專注於 Vancouver 的多代同堂 multiplex 住宅。",
    sectionsLabel: "開發方式",
    sectionsTitle: "LHL Homes 與屋主、地主合作的三種方式。",
    sections: [
      ["01", "物業重建", "評估現有房屋或土地是否適合重建，例如改建成新的現代 multiplex 住宅。"],
      ["02", "合作開發", "LHL Homes 與地主合作開發，讓雙方都能受益，並以長期價值為共同目標。"],
      ["03", "委託重建", "適合想替自己的物業進行重建的屋主，實際範圍與條件請直接與 LHL Homes 洽談。"],
    ],
    cta: "探索 LHL Homes",
    external: "此連結會在新分頁開啟 lhl.homes，這是另一個獨立的外部網站，相關服務、案件與條件皆由 LHL Homes 提供。",
    contactTitle: "想先聊聊您的物業嗎？",
    contactBody: "可以先從您的物業狀況、當地市場和您的目標開始談起。",
    contactCta: "聯絡 Tony",
    contact: "/zh-tw/contact",
  },
} as const;

export function ConstructionPage({ locale = "en" }: { locale?: "en" | "zh-TW" }) {
  const zh = locale === "zh-TW";
  const t = zh ? copy.zh : copy.en;
  return (
    <div className="min-h-dvh">
      <SiteHeader locale={locale} />
      <main>
        <section className="luxury-wave-bg luxury-wave-sweep px-6 pb-16 pt-20">
          <div className="mx-auto grid max-w-7xl items-center gap-12 md:grid-cols-12">
            <div className="md:col-span-6">
              <p className="section-label"><span className="gold-divider mr-3" />{t.label}</p>
              <h1 className="mt-5 font-serif text-5xl leading-tight text-foreground md:text-6xl">{t.h1}</h1>
              <p className="mt-6 max-w-xl text-lg leading-relaxed text-foreground/75">{t.intro}</p>
              <div className="mt-8 flex flex-wrap gap-3">
                <a href={LHL_URL} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground hover:opacity-90">
                  {t.cta}
                  <ArrowUpRight className="size-4" aria-hidden />
                </a>
              </div>
              <p className="mt-4 max-w-xl text-xs leading-relaxed text-foreground/60">{t.external}</p>
            </div>
            <div className="md:col-span-6">
              <div className="overflow-hidden rounded-3xl border border-border bg-card shadow-xl">
                <img src={heroImage} alt={t.alt} className="aspect-[4/3] w-full object-cover" width={1600} height={1000} />
              </div>
            </div>
          </div>
        </section>

        <section aria-label="LHL Homes" className="bg-charcoal px-6 py-10 text-ivory md:py-12">
          <div className="mx-auto flex max-w-7xl flex-col items-start gap-7 md:flex-row md:items-center md:gap-12">
            <img src={lhlLogo.url} alt={t.logoAlt} width={139} height={60} className="h-auto w-36 max-w-full shrink-0 md:w-44" />
            <div className="max-w-xl border-t border-ivory/20 pt-6 md:border-t-0 md:border-l md:py-2 md:pl-12">
              <p className="text-sm font-medium">Legacy Harmony Living Group</p>
              <p className="mt-2 text-sm leading-relaxed text-ivory/80">{t.brandNote}</p>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-6 py-20">
          <p className="section-label"><span className="gold-divider mr-3" />{t.sectionsLabel}</p>
          <h2 className="mt-4 max-w-3xl font-serif text-3xl text-foreground md:text-4xl">{t.sectionsTitle}</h2>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {t.sections.map(([n, title, body]) => (
              <article key={n} className="rounded-2xl border border-border bg-card p-8">
                <span className="font-serif text-3xl text-primary">{n}</span>
                <h3 className="mt-4 font-serif text-2xl text-foreground">{title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-foreground/75">{body}</p>
              </article>
            ))}
          </div>

          <div className="mt-14 rounded-3xl bg-[color:var(--charcoal)] p-10 text-[color:var(--ivory)] md:p-14">
            <h2 className="max-w-2xl font-serif text-3xl md:text-4xl">{t.contactTitle}</h2>
            <p className="mt-4 max-w-2xl text-sm text-white/70">{t.contactBody}</p>
            <div className="mt-7 flex flex-wrap gap-3">
              <a href={LHL_URL} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground hover:opacity-90">
                {t.cta}
                <ArrowUpRight className="size-4" aria-hidden />
              </a>
              <Link to={t.contact} className="rounded-full border border-white/30 px-6 py-3 text-sm font-medium text-white hover:border-primary hover:text-primary">
                {t.contactCta}
              </Link>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter locale={locale} />
    </div>
  );
}
