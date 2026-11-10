import { createFileRoute } from "@tanstack/react-router";
import { ConstructionPage } from "../components/ConstructionPage";

const title = "Construction & Development — Tony Lin REALTOR®";
const description =
  "Exploring redevelopment or co-development of your Vancouver property? Learn about development options through LHL Homes, a separate multiplex-focused brand.";

export const Route = createFileRoute("/construction")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/construction" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [
      { rel: "canonical", href: "/construction" },
      { rel: "alternate", hrefLang: "en-CA", href: "/construction" },
      { rel: "alternate", hrefLang: "zh-Hant", href: "/zh-tw/construction" },
    ],
  }),
  component: () => <ConstructionPage />,
});
