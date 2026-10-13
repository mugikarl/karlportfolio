import { useState } from "react";
import type { Plate } from "../data/projects";

interface PlateImageProps {
  plate: Plate;
  alt: string;
  sizes: string;
  priority?: boolean;
}

const PlateImage = ({ plate, alt, sizes, priority = false }: PlateImageProps) => {
  const [failed, setFailed] = useState(false);
  const [loaded, setLoaded] = useState(false);

  if (failed) {
    return (
      <div
        className="flex w-full items-center justify-center bg-paper-deep px-6 text-center text-sm text-graphite"
        style={{ aspectRatio: `${plate.width} / ${plate.height}` }}
        role="img"
        aria-label={alt}
      >
        Screenshot unavailable right now.
      </div>
    );
  }

  return (
    <div className="bg-paper-deep outline outline-1 -outline-offset-1 outline-ink/10">
      <img
        ref={(img) => {
          if (img?.complete && img.naturalWidth > 0) setLoaded(true);
        }}
        src={plate.small}
        srcSet={`${plate.small} 800w, ${plate.large} ${plate.largeWidth}w`}
        sizes={sizes}
        width={plate.width}
        height={plate.height}
        alt={alt}
        loading={priority ? "eager" : "lazy"}
        fetchPriority={priority ? "high" : "auto"}
        decoding="async"
        onLoad={() => setLoaded(true)}
        onError={() => setFailed(true)}
        className={`block h-auto w-full transition-opacity duration-200 ease-out-strong ${
          loaded ? "opacity-100" : "opacity-0"
        }`}
      />
    </div>
  );
};

export default PlateImage;
