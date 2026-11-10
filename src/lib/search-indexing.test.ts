import { describe, test } from "node:test";
import assert from "node:assert/strict";
import { applySearchIndexingPolicy, isPlatformHostname } from "./search-indexing";

describe("domain-aware indexing", () => {
  for (const suffix of ["lovable.app", "workers.dev", "pages.dev", "netlify.app"]) {
    test(`${suffix} HTML is accessible but noindex on every path`, async () => {
      for (const path of ["/", "/construction", "/zh-tw/construction", "/listings/example", "/missing"]) {
        const response = applySearchIndexingPolicy(
          new Request(`https://nested.preview.${suffix}${path}`),
          new Response("<html>Public page</html>", { status: 200, headers: { "content-type": "text/html; charset=utf-8" } }),
        );
        assert.equal(response.status, 200);
        assert.equal(response.headers.get("x-robots-tag"), "noindex");
        assert.equal(await response.text(), "<html>Public page</html>");
      }
    });
  }
  test("custom hosts retain their exact existing policy despite forwarded hosts", () => {
    const original = new Response("<html>Custom</html>", { headers: { "content-type": "text/html", "x-robots-tag": "index, follow" } });
    const result = applySearchIndexingPolicy(new Request("https://realtor.example/construction", { headers: { "x-forwarded-host": "preview.lovable.app" } }), original);
    assert.equal(result, original);
    assert.equal(result.headers.get("x-robots-tag"), "index, follow");
    const eligible = new Response("<html>Custom</html>", { headers: { "content-type": "text/html" } });
    assert.equal(applySearchIndexingPolicy(new Request("https://realtor.example"), eligible).headers.has("x-robots-tag"), false);
  });
  test("host boundary and normalization", () => {
    assert.equal(isPlatformHostname("PREVIEW.LOVABLE.APP."), true);
    assert.equal(isPlatformHostname("preview.lovable.app.example"), false);
    assert.equal(isPlatformHostname("notlovable.app"), false);
  });
  test("JSON and existing error statuses are preserved", () => {
    const request = new Request("https://preview.pages.dev/missing");
    const json = new Response("{}", { headers: { "content-type": "application/json" } });
    assert.equal(applySearchIndexingPolicy(request, json), json);
    const html = applySearchIndexingPolicy(request, new Response("error", { status: 500, headers: { "content-type": "text/html", "x-robots-tag": "nofollow" } }));
    assert.equal(html.status, 500);
    assert.equal(html.headers.get("x-robots-tag"), "nofollow, noindex");
  });
});