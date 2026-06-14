import { Instagram, Mail, Phone } from "lucide-react";
import { CONTACT } from "../lib/contact";
import { SOCIAL } from "./SocialLinks";

export function MobileContactBar() {
  const actions = [
    { label: "Call", href: CONTACT.phoneHref, icon: Phone },
    { label: "Instagram", href: SOCIAL.instagram, icon: Instagram, external: true },
    { label: "小紅書", href: SOCIAL.xiaohongshu, badge: true, external: true },
    { label: "Email", href: `mailto:${CONTACT.email}`, icon: Mail },
  ];

  return (
    <nav
      aria-label="Quick contact"
      className="fixed inset-x-0 bottom-0 z-50 border-t border-border bg-background/95 px-2 pb-[max(0.5rem,env(safe-area-inset-bottom))] pt-2 shadow-2xl backdrop-blur md:hidden"
    >
      <div className="grid grid-cols-4 gap-1">
        {actions.map((action) => {
          const Icon = action.icon;
          return (
            <a
              key={action.label}
              href={action.href}
              target={action.external ? "_blank" : undefined}
              rel={action.external ? "noreferrer" : undefined}
              className="flex min-w-0 flex-col items-center gap-1 rounded-md px-1 py-1.5 text-[0.65rem] font-medium text-foreground/75 hover:bg-muted/30 hover:text-primary"
            >
              {Icon ? (
                <Icon className="size-4" aria-hidden />
              ) : (
                <span className="rounded bg-destructive px-1 text-[0.5rem] font-bold text-destructive-foreground">
                  RED
                </span>
              )}
              <span className="truncate">{action.label}</span>
            </a>
          );
        })}
      </div>
    </nav>
  );
}
