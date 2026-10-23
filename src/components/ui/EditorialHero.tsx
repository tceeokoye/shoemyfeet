import type { ReactNode } from "react";
import FastImage from "@/components/ui/FastImage";

interface EditorialHeroProps {
  eyebrow: string;
  title: ReactNode;
  description: string;
  image: string;
  imageAlt: string;
  children?: ReactNode;
}

export default function EditorialHero({
  eyebrow,
  title,
  description,
  image,
  imageAlt,
  children,
}: EditorialHeroProps) {
  return (
    <section className="bg-[#FFFFFF] pt-28 sm:pt-32">
      <div className="mx-auto grid max-w-7xl items-stretch gap-0 px-4 sm:px-6 lg:min-h-[min(760px,calc(100vh-5.5rem))] lg:grid-cols-[0.92fr_1.08fr] lg:px-8">
        <div className="flex flex-col items-start justify-center py-12 sm:py-16 lg:py-20 lg:pr-12">
          <p className="mb-5 text-xs font-medium uppercase tracking-[0.16em] text-[#142E56]">
            {eyebrow}
          </p>
          <h1 className="max-w-2xl font-heading text-4xl font-medium leading-[1.08] text-[#111827] sm:text-5xl lg:text-6xl">
            {title}
          </h1>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-[#696558] sm:text-lg">
            {description}
          </p>
          {children && <div className="mt-8 flex flex-wrap items-center gap-3">{children}</div>}
        </div>

        <figure className="relative min-h-80 overflow-hidden bg-[#F3F4F6] sm:min-h-110 lg:min-h-[580px]">
          <FastImage
            src={image}
            alt={imageAlt}
            fill
            priority
            className="object-cover"
            sizes="(max-width: 1024px) 100vw, 55vw"
          />
        </figure>
      </div>
    </section>
  );
}