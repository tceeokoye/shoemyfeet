"use client";

import { useRef } from "react";
import Link from "next/link";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { ArrowRightIcon } from "@/components/ui/Icons";

interface ProjectShowcasePanelProps {
  title: string;
  description: string;
  href: string;
  image: string;
  alt: string;
}

export default function ProjectShowcasePanel({
  title,
  description,
  href,
  image,
  alt,
}: ProjectShowcasePanelProps) {
  const panelRef = useRef<HTMLElement>(null);
  const shouldReduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: panelRef,
    offset: ["start end", "end start"],
  });
  const imageY = useTransform(scrollYProgress, [0, 1], ["-8%", "8%"]);

  return (
    <article
      ref={panelRef}
      className="relative isolate flex min-h-[380px] items-center justify-center overflow-hidden bg-[#111827] px-5 py-20 text-center text-white sm:min-h-[440px] sm:px-8 lg:min-h-[500px]"
    >
      <div aria-hidden="true" className="absolute inset-0 z-0 overflow-hidden">
        <motion.div
          className="absolute -inset-y-[8%] inset-x-0"
          style={{ y: shouldReduceMotion ? 0 : imageY }}
        >
          <Image
            src={image}
            alt={alt}
            fill
            className="object-cover"
            sizes="100vw"
          />
        </motion.div>
      </div>
      <div
        aria-hidden="true"
        className="absolute inset-0 z-10 bg-gradient-to-b from-[#111827]/45 via-[#111827]/35 to-[#111827]/55"
      />
      <div className="relative z-20 mx-auto max-w-3xl">
        <h2 className="font-heading text-2xl font-extrabold uppercase leading-tight tracking-[0.12em] text-white sm:text-3xl md:text-4xl">
          {title}
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-sm leading-6 text-white/90 sm:text-base sm:leading-7">
          {description}
        </p>
        <Link
          href={href}
          className="group mt-8 inline-flex items-center gap-3 rounded-[10px] bg-[#F97316] px-7 py-3.5 text-base font-semibold text-white shadow-lg transition-colors hover:bg-[#EA580C] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white sm:text-lg"
        >
          View Project
          <ArrowRightIcon
            aria-hidden="true"
            className="transition-transform group-hover:translate-x-1"
            size={18}
          />
        </Link>
      </div>
    </article>
  );
}
