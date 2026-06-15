import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteHeader } from "../components/SiteHeader";
import { SiteFooter } from "../components/SiteFooter";

const services = [
  ["01", "Commercial Real Estate", "協助投資人、企業主與持有人評估店面、複合用途與收益型不動產。"],
  ["02", "住宅買方服務", "從需求整理、區域比較、看屋到出價策略，陪您有步驟地找到適合的房子。"],
  ["03", "住宅賣方服務", "依市場資料規劃定價、物件準備、行銷曝光與談判策略。"],
  ["04", "土地與農業地產", "協助評估 Fraser Valley 的土地、農地、acreage 與長期持有機會。"],
  ["05", "國語房地產服務", "用熟悉的語言說明流程、文件與交易重點，減少資訊落差。"],
];

export const Route = createFileRoute("/zh-tw/services")({
  head: () => ({ meta: [{ title: "房地產服務｜Tony Lin 大溫哥華 REALTOR®" }, { name: "description", content: "Greater Vancouver 住宅買賣、Commercial Real Estate、土地與國語房地產服務，由 Tony Lin 提供清楚務實的協助。" }, { property: "og:title", content: "Tony Lin 房地產服務" }, { property: "og:url", content: "/zh-tw/services" }], links: [{ rel: "canonical", href: "/zh-tw/services" }, { rel: "alternate", hrefLang: "en-CA", href: "/services" }, { rel: "alternate", hrefLang: "zh-Hant", href: "/zh-tw/services" }] }),
  component: ServicesZh,
});

function ServicesZh() { return <div className="min-h-dvh"><SiteHeader locale="zh-TW" /><main><section className="luxury-wave-bg luxury-wave-sweep px-6 pb-12 pt-20"><div className="mx-auto max-w-7xl"><p className="section-label"><span className="gold-divider mr-3" />服務項目</p><h1 className="mt-5 max-w-3xl font-serif text-5xl leading-tight md:text-6xl">依不同物件與目標，提供有方向的房地產服務。</h1><p className="mt-6 max-w-2xl text-lg text-foreground/75">從 Vancouver West 自住房、Richmond 商用不動產，到 Fraser Valley 土地，Tony 會依市場資料與您的實際需求規劃下一步。</p></div></section><section className="mx-auto max-w-7xl px-6 pb-24"><div className="grid gap-6 md:grid-cols-2">{services.map(([number, title, body]) => <article key={number} className="rounded-2xl border border-border bg-card p-8"><div className="flex items-start gap-5"><span className="font-serif text-3xl text-primary">{number}</span><div><h2 className="font-serif text-2xl">{title}</h2><p className="mt-3 text-sm leading-relaxed text-foreground/75">{body}</p></div></div></article>)}</div><div className="mt-14 rounded-3xl bg-[color:var(--charcoal)] p-10 text-[color:var(--ivory)] md:p-14"><h2 className="max-w-2xl font-serif text-3xl md:text-4xl">還不確定從哪裡開始？先聊聊，通常就能把方向整理清楚。</h2><div className="mt-7 flex gap-3"><Link to="/zh-tw/contact" className="rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground">預約諮詢</Link><Link to="/zh-tw/listings" className="rounded-full border border-white/30 px-6 py-3 text-sm">瀏覽房源</Link></div></div></section></main><SiteFooter locale="zh-TW" /></div>; }