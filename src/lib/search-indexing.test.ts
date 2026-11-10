import { describe, expect, test } from "bun:test";
import { applySearchIndexingPolicy, isPlatformHostname } from "./search-indexing";

describe("domain-aware indexing", () => {
  for (const suffix of ["lovable.app", "workers.dev", "pages.dev", "netlify.app"]) {
    test(`${suffix} HTML is accessible but noindex on every path`, async () => {
      for (const path of ["/", "/construction", "/zh-tw/construction", "/listings/example", "/missing"]) {
        const response = applySearchIndexingPolicy(
          new Request(`https://nested.preview.${suffix}${path}`),
          new Response("<html>Public page</html>", { status: 200, headers: { "content-type": "text/html; charset=utf-8" } }),
        );
        expect(response.status).toBe(200);
        expect(response.headers.get("x-robots-tag")).toBe("noindex");
        expect(await response.text()).toBe("<html>Public page</html>");
      }
    });
  }
  test("custom hosts retain their exact existing policy despite forwarded hosts", () => {
    const original = new Response("<html>Custom</html>", { headers: { "content-type": "text/html", "x-robots-tag": "index, follow" } });
    const result = applySearchIndexingPolicy(new Request("https://realtor.example/construction", { headers: { "x-forwarded-host": "preview.lovable.app" } }), original);
    expect(result).toBe(original);
    expect(result.headers.get("x-robots-tag")).toBe("index, follow");
    const eligible = new Response("<html>Custom</html>", { headers: { "content-type": "text/html" } });
    expect(applySearchIndexingPolicy(new Request("https://realtor.example"), eligible).headers.has("x-robots-tag")).toBe(false);
  });
  test("host boundary and normalization", () => {
    expect(isPlatformHostname("PREVIEW.LOVABLE.APP.")).toBe(true);
    expect(isPlatformHostname("preview.lovable.app.example")).toBe(false);
    expect(isPlatformHostname("notlovable.app")).toBe(false);
  });
  test("JSON and existing error statuses are preserved", () => {
    const request = new Request("https://preview.pages.dev/missing");
    const json = new Response("{}", { headers: { "content-type": "application/json" } });
    expect(applySearchIndexingPolicy(request, json)).toBe(json);
    const html = applySearchIndexingPolicy(request, new Response("error", { status: 500, headers: { "content-type": "text/html", "x-robots-tag": "nofollow" } }));
    expect(html.status).toBe(500);
    expect(html.headers.get("x-robots-tag")).toBe("nofollow, noindex");
  });
});