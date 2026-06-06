import { Link } from "@tanstack/react-router";
import unilifeLogo from "../assets/unilife-royal-pacific.png.asset.json";
import { CONTACT, DISCLAIMER } from "../lib/contact";

export function SiteFooter() {
  return (
    <footer className="mt-24 bg-[color:var(--charcoal)] text-[color:var(--ivory)]">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid gap-12 md:grid-cols-3">
          <div>
            <p className="font-serif text-2xl">Tony Lin</p>
            <p className="mt-1 text-xs uppercase tracking-[0.28em] text-primary">
              REALTOR<sup>®</sup> · {CONTACT.brokerage}
            </p>
            <p className="mt-6 text-sm text-white/70">
              Greater Vancouver real estate representation across commercial,
              residential, and land. English & Mandarin service.
            </p>
            <img
              src={unilifeLogo.url}
              alt="UniLife Realty Inc. — Royal Pacific Realty Group"
              className="mt-8 h-10 w-auto bg-white/95 px-3 py-1 rounded"
            />
          </div>

          <div className="text-sm">
            <p className="text-xs uppercase tracking-[0.22em] text-primary">Contact</p>
            <ul className="mt-4 space-y-2 text-white/85">
              <li>
                <a href={CONTACT.phoneHref} className="hover:text-primary">
                  {CONTACT.phone}
                </a>{" "}
                <span className="text-white/50">(direct)</span>
              </li>
              <li>
                <a href={`mailto:${CONTACT.email}`} className="hover:text-primary">
                  {CONTACT.email}
                </a>
              </li>
              <li className="text-white/60">Languages: {CONTACT.languages}</li>
            </ul>

            <p className="mt-8 text-xs uppercase tracking-[0.22em] text-primary">Office</p>
            <ul className="mt-4 space-y-2 text-white/85">
              <li>{CONTACT.brokerage}</li>
              <li>{CONTACT.officeAddress}</li>
              <li>{CONTACT.officeCity}</li>
              <li>
                <a href={CONTACT.officePhoneHref} className="hover:text-primary">
                  {CONTACT.officePhone}
                </a>
              </li>
            </ul>
          </div>

          <div className="text-sm">
            <p className="text-xs uppercase tracking-[0.22em] text-primary">Explore</p>
            <ul className="mt-4 grid grid-cols-2 gap-2 text-white/85">
              <li><Link to="/" className="hover:text-primary">Home</Link></li>
              <li><Link to="/listings" className="hover:text-primary">Listings</Link></li>
              <li><Link to="/about" className="hover:text-primary">About</Link></li>
              <li><Link to="/services" className="hover:text-primary">Services</Link></li>
              <li><Link to="/contact" className="hover:text-primary">Contact</Link></li>
            </ul>

            <p className="mt-8 text-xs uppercase tracking-[0.22em] text-primary">
              MLS<sup>®</sup> Disclaimer
            </p>
            <p className="mt-4 text-xs leading-relaxed text-white/60">{DISCLAIMER}</p>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-start justify-between gap-3 border-t border-white/10 pt-6 text-xs text-white/55 md:flex-row md:items-center">
          <p>© 2026 Tony Lin. All rights reserved.</p>
          <p>
            Web Design by{" "}
            <a
              href="https://bluluma.com"
              target="_blank"
              rel="noreferrer"
              className="text-primary hover:underline"
            >
              Bluluma
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
