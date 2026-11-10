const platformSuffixes = [".lovable.app", ".workers.dev", ".pages.dev", ".netlify.app"];

/** Match DNS label boundaries; never trust caller-supplied forwarded host headers. */
export function isPlatformHostname(hostname: string): boolean {
  const normalized = hostname.toLowerCase().replace(/\.$/, "");
  return platformSuffixes.some((suffix) => normalized.endsWith(suffix));
}

/** Leave custom-domain responses, including their existing crawler policy, untouched. */
export function applySearchIndexingPolicy(request: Request, response: Response): Response {
  if (!isPlatformHostname(new URL(request.url).hostname)) return response;
  const contentType = response.headers.get("content-type")?.split(";", 1)[0].trim().toLowerCase();
  if (contentType !== "text/html" && contentType !== "application/xhtml+xml") return response;

  // Copy headers because upstream fetch responses can have immutable headers.
  const headers = new Headers(response.headers);
  headers.append("X-Robots-Tag", "noindex");
  return new Response(response.body, {
    status: response.status,
    statusText: response.statusText,
    headers,
  });
}