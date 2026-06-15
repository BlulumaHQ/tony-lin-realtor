import { createFileRoute, Link } from "@tanstack/react-router";
import tonyPortrait from "../assets/tony-lin.webp.asset.json";
import commercialFeature from "../assets/commercial-feature.jpg";
import residentialFeature from "../assets/residential-feature.jpg";
import { SiteHeader } from "../components/SiteHeader";
import { SiteFooter } from "../components/SiteFooter";
import { ListingCard } from "../components/ListingCard";
import { LeadForm } from "../components/LeadForm";
import { Button } from "../components/ui/button";
import { listings } from "../data/listings";
import { CONTACT } from "../lib/contact";

export const Route = createFileRoute("/zh-tw/")({
  head: () => ({
    meta: [
      { title: "Tony Lin 大溫哥華房地產經紀｜住宅、商用不動產與土地" },
      { name: "description", content: "Tony Lin 提供 Greater Vancouver 與 Fraser Valley 的住宅、商用不動產及土地買賣服務，使用臺灣日常中文與 English 清楚溝通。" },
      { property: "og:title", content: "Tony Lin｜大溫哥華房地產買賣服務" },
      { property: "og:description", content: "住宅、商用不動產與土地的實用市場建議，服務 Greater Vancouver 與 Fraser Valley。" },
      { property: "og:url", content: "/zh-tw" },
      { property: "og:image", content: tonyPortrait.url },
    ],
    links: [
      { rel: "canonical", href: "/zh-tw" },
      { rel: "alternate", hrefLang: "en-CA", href: "/" },
      { rel: "alternate", hrefLang: "zh-Hant", href: "/zh-tw" },
    ],
  }),
  component: ChineseHome,
});

function ChineseHome() {
  return <div className="min-h-dvh"><SiteHeader locale="zh-TW" /><main>
    <section className="img-hero"><div className="mx-auto grid max-w-7xl gap-12 px-6 py-20 md:grid-cols-12 md:py-28">
      <div className="md:col-span-7"><p className="section-label"><span className="gold-divider mr-3" />Greater Vancouver · UniLife Realty Inc.</p>
        <h1 className="mt-6 font-serif text-5xl leading-[1.08] md:text-6xl lg:text-7xl">在大溫哥華買房、賣房或投資，資訊清楚，溝通更安心。</h1>
        <p className="mt-7 max-w-xl text-lg leading-relaxed text-foreground/75">從住宅、商用不動產到土地規劃，Tony 以實際市場資訊協助您掌握選擇、評估風險，做出適合自己的決定。</p>
        <div className="mt-9 flex flex-wrap gap-3"><Button asChild size="lg" className="rounded-full"><Link to="/zh-tw/contact">預約諮詢</Link></Button><Button asChild size="lg" variant="outline" className="rounded-full"><Link to="/zh-tw/listings">查看房源</Link></Button></div>
        <dl className="mt-12 grid max-w-lg grid-cols-2 gap-6 sm:grid-cols-4"><Meta label="專業身分" value="REALTOR®" /><Meta label="經紀公司" value="UniLife Realty" /><Meta label="語言" value="English · 國語" /><Meta label="直撥電話" value={CONTACT.phone} /></dl>
      </div>
      <div className="md:col-span-5"><div className="mx-auto max-w-sm overflow-hidden rounded-3xl border border-border bg-card shadow-2xl"><img src={tonyPortrait.url} alt="Tony Lin，UniLife Realty Inc. REALTOR®" className="aspect-[3/4] w-full object-cover" /><div className="p-5"><p className="font-serif text-xl">Tony Lin</p><p className="text-xs uppercase tracking-[0.22em] text-primary">REALTOR® · UniLife Realty Inc.</p></div></div></div>
    </div></section>
    <section className="mx-auto max-w-7xl px-6 py-24"><div className="grid gap-14 md:grid-cols-12"><div className="md:col-span-5"><p className="section-label"><span className="gold-divider mr-3" />關於 Tony</p><h2 className="mt-5 font-serif text-4xl leading-tight md:text-5xl">重要的不動產決定，值得清楚而務實的建議。</h2></div><div className="md:col-span-7"><p className="text-lg leading-relaxed text-foreground/80">Tony Lin 是 UniLife Realty Inc. 的 REALTOR®，服務 Greater Vancouver 與 Fraser Valley。無論您準備自住、換屋、出售資產或評估投資，Tony 都會把複雜資訊整理成容易理解的重點。</p><p className="mt-5 text-lg leading-relaxed text-foreground/80">熟悉住宅、零售商用不動產、農業用地與土地案件，可使用 English 或國語溝通，讓流程、合約與下一步都更明確。</p></div></div></section>
    <section className="bg-card/60 py-24"><div className="mx-auto max-w-7xl px-6"><p className="section-label"><span className="gold-divider mr-3" />精選房源</p><div className="flex items-end justify-between gap-5"><h2 className="mt-5 font-serif text-4xl md:text-5xl">目前值得留意的物件。</h2><Link to="/zh-tw/listings" className="text-sm text-primary hover:underline">查看全部房源 →</Link></div><div className="mt-12 grid gap-8 md:grid-cols-2">{listings.filter((item) => item.status === "Active").map((item) => <ListingCard key={item.id} listing={item} locale="zh-TW" />)}</div></div></section>
    <section id="valuation" className="mx-auto max-w-7xl px-6 py-24"><div className="grid items-start gap-12 rounded-3xl border border-border bg-card p-8 shadow-sm md:grid-cols-12 md:p-14"><div className="md:col-span-5"><p className="section-label"><span className="gold-divider mr-3" />免費物件估價</p><h2 className="mt-5 font-serif text-4xl leading-tight md:text-5xl">想知道您的物件目前值多少？</h2><p className="mt-5 text-foreground/75">提供基本資料後，Tony 會依近期市場狀況評估住宅、商用單位或土地價值，通常會在一個工作天內回覆。</p></div><div className="md:col-span-7"><LeadForm source="valuation" locale="zh-TW" /></div></div></section>
    <section className="luxury-wave-bg luxury-wave-sweep px-6 py-24"><div className="mx-auto grid max-w-7xl gap-8 md:grid-cols-2"><Focus image={commercialFeature} label="Commercial Real Estate" title="商用不動產與收益型物件" body="協助投資人、企業主與持有人評估店面、複合用途及收益型不動產。" /><Focus image={residentialFeature} label="Residential Real Estate" title="自住房與住宅投資" body="從 Vancouver West 到 Fraser Valley，依生活需求、預算與市場資料規劃買賣策略。" /></div></section>
  </main><SiteFooter locale="zh-TW" /></div>;
}

function Meta({ label, value }: { label: string; value: string }) { return <div><dt className="text-[0.65rem] uppercase tracking-[0.18em] text-muted-foreground">{label}</dt><dd className="mt-1 font-medium">{value}</dd></div>; }
function Focus({ image, label, title, body }: { image: string; label: string; title: string; body: string }) { return <article className="overflow-hidden rounded-2xl border border-border bg-card"><img src={image} alt="" className="aspect-video w-full object-cover" /><div className="p-8 text-center"><p className="text-xs uppercase tracking-[0.18em] text-primary">{label}</p><h2 className="mt-3 font-serif text-2xl">{title}</h2><p className="mt-3 text-foreground/75">{body}</p></div></article>; }