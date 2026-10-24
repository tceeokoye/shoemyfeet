"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import FastImage from "@/components/ui/FastImage";
import { X } from "lucide-react";
import type { ProjectPhoto } from "@/lib/projectDetails";

export default function ProjectImageCarousel({ photos }: { photos: ProjectPhoto[] }) {
  const [selectedImage, setSelectedImage] = useState<ProjectPhoto | null>(null);

  useEffect(() => {
    if (!selectedImage) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setSelectedImage(null);
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [selectedImage]);

  const images = [...photos, ...photos];

  return (
    <>
      <section aria-label="Project photos" className="overflow-hidden bg-white py-8 sm:py-10">
        <div className="group">
          <div
            className="animate-marquee flex w-max gap-4 pr-4 group-hover:[animation-play-state:paused] group-focus-within:[animation-play-state:paused] motion-reduce:animate-none"
            style={{
              animationDuration: "38s",
              animationPlayState: selectedImage ? "paused" : undefined,
            }}
          >
            {images.map((image, index) => (
              <button
                key={`${image.src}-${index}`}
                type="button"
                aria-label={`View image: ${image.alt}`}
                onClick={() => setSelectedImage(image)}
                className="relative h-44 w-64 shrink-0 cursor-zoom-in overflow-hidden rounded-lg sm:h-52 sm:w-80"
              >
                <FastImage
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover transition-transform duration-500 hover:scale-105"
                  sizes="(max-width: 640px) 256px, 320px"
                />
              </button>
            ))}
          </div>
        </div>
      </section>

      {selectedImage && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={selectedImage.alt}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-transparent p-4"
          onClick={() => setSelectedImage(null)}
        >
          <button
            type="button"
            aria-label="Close image"
            onClick={() => setSelectedImage(null)}
            className="absolute right-4 top-4 z-10 flex h-11 w-11 items-center justify-center rounded-full bg-black/50 text-white transition-colors hover:bg-black/75 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
          >
            <X aria-hidden="true" size={24} />
          </button>

          <div
            className="relative h-[85vh] w-full max-w-6xl"
            onClick={(event) => event.stopPropagation()}
          >
            <Image
              src={selectedImage.src}
              alt={selectedImage.alt}
              fill
              priority
              sizes="100vw"
              className="object-contain"
            />
          </div>
        </div>
      )}
    </>
  );
}
