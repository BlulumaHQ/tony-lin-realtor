import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { useState } from "react";
import { Button } from "./ui/button";

export function ListingGallery({ photos, address }: { photos: string[]; address: string }) {
  const safePhotos = photos.filter(Boolean);
  const [active, setActive] = useState(0);
  const [open, setOpen] = useState(false);
  const current = safePhotos[active];
  if (!current) return null;

  const move = (step: number) => setActive((value) => (value + step + safePhotos.length) % safePhotos.length);

  return (
    <>
      <button type="button" onClick={() => setOpen(true)} className="block w-full overflow-hidden rounded-2xl bg-muted" aria-label={`Open photo of ${address}`}>
        <img src={current} alt={address} className="aspect-[16/9] w-full object-cover" />
      </button>
      {safePhotos.length > 1 ? (
        <div className="mt-4 grid grid-cols-5 gap-3">
          {safePhotos.map((photo, index) => (
            <button key={photo} type="button" onClick={() => setActive(index)} className={`overflow-hidden rounded-lg border ${index === active ? "border-primary" : "border-border"}`}>
              <img src={photo} alt={`${address}, view ${index + 1}`} className="aspect-[4/3] w-full object-cover" loading="lazy" />
            </button>
          ))}
        </div>
      ) : null}
      {open ? (
        <div className="fixed inset-0 z-[70] grid place-items-center bg-secondary/95 p-4" role="dialog" aria-modal="true" aria-label="Listing photo gallery">
          <img src={current} alt={address} className="max-h-[88vh] max-w-full object-contain" />
          <Button variant="outline" size="icon" className="absolute right-4 top-4 rounded-full" onClick={() => setOpen(false)} aria-label="Close gallery"><X /></Button>
          {safePhotos.length > 1 ? <>
            <Button variant="outline" size="icon" className="absolute left-4 top-1/2 rounded-full" onClick={() => move(-1)} aria-label="Previous photo"><ChevronLeft /></Button>
            <Button variant="outline" size="icon" className="absolute right-4 top-1/2 rounded-full" onClick={() => move(1)} aria-label="Next photo"><ChevronRight /></Button>
          </> : null}
        </div>
      ) : null}
    </>
  );
}