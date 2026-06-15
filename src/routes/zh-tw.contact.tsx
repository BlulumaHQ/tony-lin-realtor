import { createFileRoute } from "@tanstack/react-router";
import { Building2, Languages, Mail, Phone } from "lucide-react";
import { SiteHeader } from "../components/SiteHeader";
import { SiteFooter } from "../components/SiteFooter";
import { LeadForm } from "../components/LeadForm";
import { CONTACT } from "../lib/contact";

export const Route = createFileRoute("/zh-tw/contact")({
  head: () => ({ meta: [{ title: "聯絡 Tony Lin｜預約大溫哥華房地產諮詢" }, { name: "description", content: "聯絡 Tony Lin REALTOR®，諮詢 Greater Vancouver 住宅、商用不動產與土地買賣。電話 604-700-3946，可使用國語。" }, { property: "og:title", content: "聯絡 Tony Lin REALTOR®" }, { property: "og:url", content: "/zh-tw/contact" }], links: [{ rel: "canonical", href: "/zh-tw/contact" }, { rel: "alternate", hrefLang: "en-CA", href: "/contact" }, { rel: "alternate", hrefLang: "zh-Hant", href: "/zh-tw/contact" }] }),
  component: ContactZh,
});

function ContactZh() { return <div className="min-h-dvh"><SiteHeader locale="zh-TW" /><main><section className="luxury-wave-bg luxury-wave-soft px-6 py-20"><div className="mx-auto grid max-w-7xl items-stretch gap-14 md:grid-cols-12"><div className="flex h-full flex-col md:col-span-5"><p className="section-label"><span className="gold-divider mr-3" />聯絡 Tony</p><h1 className="mt-5 font-serif text-5xl leading-tight md:text-6xl">預約諮詢。</h1><p className="mt-5 text-foreground/75">簡單告訴 Tony 您目前的需求，通常會在一個工作天內回覆。若時間較急，也歡迎直接來電。</p><div className="mt-10 flex flex-1 flex-col justify-between gap-4"><Block icon={Phone} label="直撥電話" value={CONTACT.phone} /><Block icon={Mail} label="Email" value={CONTACT.email} /><Block icon={Languages} label="服務語言" value="English · 國語" /><Block icon={Building2} label="辦公室" value={`${CONTACT.brokerage} · ${CONTACT.officeAddress}`} /></div></div><div className="h-full md:col-span-7"><LeadForm source="contact" locale="zh-TW" /></div></div></section></main><SiteFooter locale="zh-TW" /></div>; }
function Block({ icon: Icon, label, value }: { icon: typeof Phone; label: string; value: string }) { return <div className="flex gap-4 rounded-xl border border-border bg-card p-5"><Icon className="size-5 shrink-0 text-primary" /><div><p className="text-[0.62rem] uppercase tracking-[0.22em] text-primary">{label}</p><p className="mt-2 font-serif text-lg">{value}</p></div></div>; }