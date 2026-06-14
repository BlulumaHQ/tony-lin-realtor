import { Link } from "@tanstack/react-router";
import unilifeLogo from "../assets/unilife-royal-pacific.png.asset.json";
import { CONTACT } from "../lib/contact";

const nav = [
  { to: "/", label: "Home" },
  { to: "/listings", label: "Listings" },
  { to: "/about", label: "About" },
  { to: "/services", label: "Services" },
  { to: "/contact", label: "Contact" },
] as const;

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-border/60 bg-background/85 backdrop-blur supports-[backdrop-filter]:bg-background/70">
      <div className="border-b border-border/60 bg-card/70">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-1.5 text-xs text-foreground/70">
          <a href={CONTACT.phoneHref} className="font-medium hover:text-primary">
            {CONTACT.phone}
          </a>
          <div className="inline-flex items-center rounded-full border border-border bg-background p-0.5" aria-label="Site language">
            <span className="rounded-full bg-secondary px-2.5 py-1 font-semibold text-secondary-foreground">EN</span>
            <button type="button" className="cursor-default px-2.5 py-1 text-foreground/55" aria-disabled="true" title="Chinese site coming soon">
              中文
            </button>
          </div>
        </div>
      </div>
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-6 py-4">
        <Link to="/" className="flex items-baseline gap-3">
          <span className="font-serif text-2xl tracking-tight text-foreground">Tony Lin</span>
          <span className="hidden text-[0.62rem] uppercase tracking-[0.28em] text-primary sm:inline">
            REALTOR<sup>®</sup>
          </span>
        </Link>

        <nav aria-label="Primary" className="hidden items-center gap-8 md:flex">
          {nav.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className="text-sm text-foreground/80 transition-colors hover:text-primary"
              activeProps={{ className: "text-primary" }}
              activeOptions={{ exact: item.to === "/" }}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <img
            src={unilifeLogo.url}
            alt="UniLife Realty Inc. — Royal Pacific Realty Group"
            className="h-9 w-auto md:h-10"
          />
        </div>
      </div>

      {/* Mobile nav */}
      <nav aria-label="Mobile" className="flex items-center justify-center gap-5 border-t border-border/60 px-4 py-2 md:hidden">
        {nav.map((item) => (
          <Link
            key={item.to}
            to={item.to}
            className="text-xs uppercase tracking-wider text-foreground/75"
            activeProps={{ className: "text-primary" }}
            activeOptions={{ exact: item.to === "/" }}
          >
            {item.label}
          </Link>
        ))}
      </nav>
    </header>
  );
}
