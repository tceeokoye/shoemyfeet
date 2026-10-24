import type { ReactNode } from "react";
import FastImage from "@/components/ui/FastImage";
import ProjectShareLinks from "@/components/programs/ProjectShareLinks";

interface ProjectDetailHeroProps {
  title: ReactNode;
  projectDetails: string;
  image: string;
  imageAlt: string;
}

export default function ProjectDetailHero({
  title,
  projectDetails,
  image,
  imageAlt,
}: ProjectDetailHeroProps) {
  return (
    <section className="relative isolate overflow-hidden bg-[#1A3A6B] pt-24 text-white sm:pt-28 lg:pt-32">
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-gradient-to-br from-[#244a7b] via-[#1A3A6B] to-[#142E56]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-40 top-16 h-96 w-96 rounded-full bg-[#F97316]/10 blur-3xl"
      />

      <div className="relative mx-auto grid w-full max-w-6xl items-center gap-10 px-5 pb-14 sm:px-8 sm:pb-16 lg:grid-cols-[0.9fr_1.1fr] lg:gap-14 lg:pb-20">
        <div className="min-w-0">
          <h1 className="font-heading text-4xl font-bold leading-[1.08] tracking-tight text-white sm:text-5xl lg:text-[3.4rem]">
            {title}
          </h1>

          <p className="mt-5 text-sm italic leading-relaxed text-white/75 sm:text-base">
            {projectDetails}
          </p>

          <ProjectShareLinks />
        </div>

        <figure className="relative aspect-[16/9] overflow-hidden bg-[#142E56] ring-1 ring-white/15">
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
