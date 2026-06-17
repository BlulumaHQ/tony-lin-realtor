import { Link } from "@tanstack/react-router";
import unilifeLogo from "../assets/unilife-royal-pacific.png";
import tonyLinLogo from "../assets/tony-lin-logo.svg";
import { CONTACT, DISCLAIMER } from "../lib/contact";
import { AlertsForm } from "./AlertsForm";
import { SocialLinks } from "./SocialLinks";

export function SiteFooter({ locale = "en" }: { locale?: "en" | "zh-TW" }) {
  const zh = locale === "zh-TW";
  const base = zh ? "/zh-tw" : "";
  return (
    <footer className="bg-[color:var(--charcoal)] text-[color:var(--ivory)]">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="mb-14 rounded-3xl border border-white/10 bg-background p-7 text-foreground md:p-10">
          <div className="grid items-center gap-6 md:grid-cols-[minmax(0,1fr)_minmax(24rem,0.9fr)] md:gap-10">
            <div className="min-w-0">
            <p className="section-label">
              <span className="gold-divider mr-3" />
              {zh ? "市場快訊" : "Market Updates"}
            </p>
            <h2 className="mt-3 font-serif text-3xl">{zh ? "掌握新房源與市場消息" : <>Get new-listing &amp; market alerts</>}</h2>
            <p className="mt-2 text-sm text-foreground/70">
              {zh ? "定期收到符合需求的物件與在地市場重點，不錯過值得留意的機會。" : "Receive concise updates on relevant opportunities and local market activity."}
            </p>
            </div>
            <AlertsForm locale={locale} />
          </div>
        </div>
        <div className="grid gap-12 md:grid-cols-3">
          <div>
            <img src={tonyLinLogo} alt="Tony Lin REALTOR®" className="h-14 w-auto brightness-0 invert" />
            <p className="mt-3 text-xs uppercase tracking-[0.28em] text-primary">
              {CONTACT.brokerage}
            </p>
            <p className="mt-6 text-sm text-white/70">
               {zh ? "提供 Greater Vancouver 商用不動產、住宅與土地買賣服務，可使用 English 或國語溝通。" : "Greater Vancouver real estate representation across commercial, residential, and land. English & 國語 service."}
            </p>
            <div className="mt-6">
              <SocialLinks light />
            </div>
            <img
              src={unilifeLogo}
              alt="UniLife Realty Inc. — Royal Pacific Realty Group"
              className="mt-8 h-10 w-auto bg-white/95 px-3 py-1 rounded"
            />
          </div>

          <div className="text-sm">
             <p className="text-xs uppercase tracking-[0.22em] text-primary">{zh ? "聯絡方式" : "Contact"}</p>
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
               <li className="text-white/60">{zh ? "語言" : "Languages"}: {CONTACT.languages}</li>
            </ul>

             <p className="mt-8 text-xs uppercase tracking-[0.22em] text-primary">{zh ? "辦公室" : "Office"}</p>
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
             <p className="text-xs uppercase tracking-[0.22em] text-primary">{zh ? "網站導覽" : "Explore"}</p>
            <ul className="mt-4 grid grid-cols-2 gap-2 text-white/85">
              <li>
                 <Link to={base || "/"} className="hover:text-primary">
                   {zh ? "首頁" : "Home"}
                </Link>
              </li>
              <li>
                 <Link to={`${base}/listings`} className="hover:text-primary">
                   {zh ? "房源" : "Listings"}
                </Link>
              </li>
              <li>
                 <Link to={`${base}/about`} className="hover:text-primary">
                   {zh ? "關於 Tony" : "About"}
                </Link>
              </li>
              <li>
                 <Link to={`${base}/services`} className="hover:text-primary">
                   {zh ? "服務項目" : "Services"}
                </Link>
              </li>
              <li>
                 <Link to={`${base}/contact`} className="hover:text-primary">
                   {zh ? "聯絡" : "Contact"}
                </Link>
              </li>
            </ul>

            <p className="mt-8 text-xs uppercase tracking-[0.22em] text-primary">
              MLS<sup>®</sup> Disclaimer
            </p>
            <p className="mt-4 text-xs leading-relaxed text-white/60">{DISCLAIMER}</p>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-start justify-between gap-3 border-t border-white/10 pt-6 text-xs text-white/55 md:flex-row md:items-center">
           <p>© 2026 Tony Lin. {zh ? "版權所有。" : "All rights reserved."}</p>
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
