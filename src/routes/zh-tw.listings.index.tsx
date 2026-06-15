import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader } from "../components/SiteHeader";
import { SiteFooter } from "../components/SiteFooter";
import { ListingCard } from "../components/ListingCard";
import { listings } from "../data/listings";
import { ZH_DISCLAIMER } from "../lib/zh-tw";

export const Route = createFileRoute("/zh-tw/listings/")({
  head: () => ({ meta: [{ title: "大溫哥華精選房源｜Tony Lin REALTOR®" }, { name: "description", content: "查看 Tony Lin 在 Greater Vancouver 與 Fraser Valley 的住宅、Commercial Real Estate、農地與土地房源。" }, { property: "og:title", content: "Tony Lin 大溫哥華精選房源" }, { property: "og:url", content: "/zh-tw/listings" }], links: [{ rel: "canonical", href: "/zh-tw/listings" }, { rel: "alternate", hrefLang: "en-CA", href: "/listings" }, { rel: "alternate", hrefLang: "zh-Hant", href: "/zh-tw/listings" }] }),
  component: ListingsZh,
});

function ListingsZh() { const active = listings.filter((item) => item.status === "Active"); const sold = listings.filter((item) => item.status === "Sold"); return <div className="min-h-dvh"><SiteHeader locale="zh-TW" /><main><section className="luxury-wave-bg luxury-wave-rise px-6 pb-10 pt-16"><div className="mx-auto max-w-7xl"><p className="section-label"><span className="gold-divider mr-3" />房源資訊</p><h1 className="mt-5 font-serif text-5xl leading-tight md:text-6xl">精選物件。</h1><p className="mt-5 max-w-2xl text-foreground/75">整理 Greater Vancouver 與 Fraser Valley 目前出售及近期成交的住宅、商用不動產與土地案件。</p></div></section><ListingGroup title="出售中" items={active} /><ListingGroup title="已售出" items={sold} /><section className="mx-auto max-w-7xl px-6 pb-20"><p className="text-xs leading-relaxed text-muted-foreground">{ZH_DISCLAIMER}</p></section></main><SiteFooter locale="zh-TW" /></div>; }
function ListingGroup({ title, items }: { title: string; items: typeof listings }) { if (!items.length) return null; return <section className="mx-auto max-w-7xl px-6 pb-16 pt-8"><h2 className="font-serif text-2xl">{title}</h2><div className="mt-6 grid gap-8 md:grid-cols-2">{items.map((item) => <ListingCard key={item.id} listing={item} locale="zh-TW" />)}</div></section>; }