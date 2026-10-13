import type { Plate } from "../data/projects";

// Must match the `sizes` FeaturedWork gives a plate, so the browser fetches
// the same srcset candidate the book will render.
export const FEATURED_PLATE_SIZES = "(min-width: 1024px) 70vw, 100vw";

const requested = new Set<string>();

// Fetches and decodes a work's plate ahead of the click, so the cover-to-book
// transition never waits on the network.
export const preloadPlate = (plate: Plate) => {
  if (requested.has(plate.small)) return;
  requested.add(plate.small);
  const img = new Image();
  img.sizes = FEATURED_PLATE_SIZES;
  img.srcset = `${plate.small} 800w, ${plate.large} ${plate.largeWidth}w`;
  img.src = plate.small;
  img.decode().catch(() => requested.delete(plate.small));
};
