import { Instagram } from "lucide-react";

export const SOCIAL = {
  instagram: "https://www.instagram.com/tony.lin.realtor",
  xiaohongshu: "https://xhslink.com/m/2xfGs4l91eT",
  // Future slots (intentionally not rendered until Tony's profiles are confirmed):
  facebook: null,
  linkedin: null,
} as const;

export function SocialLinks({ light = false }: { light?: boolean }) {
  const linkClass = light
    ? "inline-flex items-center gap-2 text-sm text-white/80 transition hover:text-primary"
    : "inline-flex items-center gap-2 text-sm text-foreground/75 transition hover:text-primary";
  return (
    <div className="flex flex-wrap items-center gap-4">
      <a
        href={SOCIAL.instagram}
        target="_blank"
        rel="noreferrer"
        className={linkClass}
        aria-label="Instagram"
      >
        <Instagram className="size-4" aria-hidden /> Instagram
      </a>
      <a
        href={SOCIAL.xiaohongshu}
        target="_blank"
        rel="noreferrer"
        className={linkClass}
        aria-label="Xiaohongshu RED"
      >
        <span className="rounded bg-destructive px-1.5 py-0.5 text-[0.58rem] font-bold text-destructive-foreground">
          小紅書
        </span>
        RED
      </a>
    </div>
  );
}
