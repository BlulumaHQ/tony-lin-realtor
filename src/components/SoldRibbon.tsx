export function SoldRibbon() {
  return (
    <div className="pointer-events-none absolute right-0 top-0 z-10 h-28 w-28 overflow-hidden" aria-label="Sold">
      <span className="absolute right-[-2.15rem] top-[1.15rem] w-32 rotate-45 bg-destructive py-1.5 text-center text-[0.68rem] font-bold uppercase tracking-[0.2em] text-destructive-foreground shadow-sm">
        Sold
      </span>
    </div>
  );
}