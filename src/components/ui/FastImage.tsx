"use client";

import { useState } from "react";
import Image, { ImageProps } from "next/image";

interface FastImageProps extends Omit<ImageProps, "onLoad"> {
  fallbackSrc?: string;
}

export default function FastImage({
  src,
  alt,
  className = "",
  priority = false,
  sizes,
  fill,
  width,
  height,
  ...props
}: FastImageProps) {
  const [isLoaded, setIsLoaded] = useState(false);

  // Convert .jpg / .png src to .webp if applicable
  let webpSrc = typeof src === "string" ? src : "";
  if (webpSrc.endsWith(".jpg") || webpSrc.endsWith(".png")) {
    webpSrc = webpSrc.replace(/\.(jpg|png)$/, ".webp");
  } else {
    webpSrc = typeof src === "string" ? src : "";
  }

  return (
    <div className={`relative overflow-hidden ${fill ? "w-full h-full" : ""}`}>
      {/* Skeleton background until loaded */}
      {!isLoaded && (
        <div className="absolute inset-0 z-10 skeleton-shimmer animate-pulse" />
      )}
      <Image
        src={webpSrc || src}
        alt={alt}
        fill={fill}
        width={width}
        height={height}
        priority={priority}
        sizes={sizes || "(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"}
        onLoad={() => setIsLoaded(true)}
        className={`transition-all duration-700 ease-out ${
          isLoaded ? "opacity-100 scale-100 filter-none" : "opacity-0 scale-105 blur-sm"
        } ${className}`}
        {...props}
      />
    </div>
  );
}
