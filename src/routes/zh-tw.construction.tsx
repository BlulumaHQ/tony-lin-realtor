import { createFileRoute } from "@tanstack/react-router";
import { ConstructionPage } from "../components/ConstructionPage";

const title = "建築與地產開發｜Tony Lin 大溫哥華 REALTOR®";
const description =
  "考慮重建或合作開發您在 Vancouver 的物業嗎？透過獨立品牌 LHL Homes 了解 multiplex 住宅開發方案。";

export const Route = createFileRoute("/zh-tw/construction")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/zh-tw/construction" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [
      { rel: "canonical", href: "/zh-tw/construction" },
      { rel: "alternate", hrefLang: "en-CA", href: "/construction" },
      { rel: "alternate", hrefLang: "zh-Hant", href: "/zh-tw/construction" },
    ],
  }),
  component: () => <ConstructionPage locale="zh-TW" />,
});
