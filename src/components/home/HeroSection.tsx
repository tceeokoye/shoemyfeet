"use client";

import { useState } from "react";
import {
  AnimatePresence,
  motion,
  useReducedMotion,
} from "framer-motion";
import Link from "next/link";
import impactPhoto from "@/assets/FCR_6666.jpg";
import { ArrowRightIcon, PlayIcon } from "@/components/ui/Icons";

export default function HeroSection() {
  const shouldReduceMotion = useReducedMotion();
  const [isPlayingVideo, setIsPlayingVideo] = useState(false);

  return (
    <section
      aria-label="Shoe My Feet Foundation"
      className="relative isolate flex min-h-screen items-center justify-center overflow-hidden px-5 pb-12 pt-24 text-center sm:px-8 lg:pt-44"
    >
      <div
        aria-hidden="true"
        className="absolute inset-0 z-0 scale-105 bg-center opacity-40 "
        style={{ backgroundImage: `url("${impactPhoto.src}")` }}
      />
      <video
        aria-hidden="true"
        autoPlay={!shouldReduceMotion}
        className="absolute inset-0 z-[1] h-full w-full object-cover"
        loop
        muted
        playsInline
        poster={impactPhoto.src}
        preload={shouldReduceMotion ? "none" : "metadata"}
        tabIndex={-1}
      >
        <source src="/videos/My-Intro.mp4" type="video/mp4" />
      </video>

      <div
        aria-hidden="true"
        className="absolute inset-0 z-2 bg-linear-to-b from-black/30 via-black/40 to-[#111827]/65"
      />

      <motion.div
        animate={{ opacity: 1, y: 0 }}
        className="relative z-3 mx-auto flex w-full max-w-5xl flex-col items-center gap-6"
        initial={shouldReduceMotion ? false : { opacity: 0, y: 24 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <h1 className="max-w-4xl text-4xl font-extrabold leading-[1.08] tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl">
          Every Child Deserves
          <span className="mt-2 block">
            <span className="text-white">To Walk With</span>{" "}
            <span className="text-[#F97316]">Confidence.</span>
          </span>
        </h1>

        <p className="max-w-2xl  leading-relaxed text-white/90 drop-shadow text-xl sm:text-lg md:text-xl ">
          A simple pair of school shoes protects health, restores dignity, and
          helps underserved children stay in the classroom across Nigeria.
        </p>

        <div className="mt-2 flex flex-wrap items-center justify-center gap-4">
          <Link
            className="group inline-flex items-center gap-3 rounded-[10px] bg-[#F97316] px-7 py-3.5 text-base font-semibold text-white shadow-lg transition-colors hover:bg-[#EA580C] sm:text-lg"
            href="/donate"
          >
            Support a Child Today
            <ArrowRightIcon
              className="transition-transform group-hover:translate-x-1"
              size={18}
            />
          </Link>

          <button
            className="group inline-flex cursor-pointer items-center gap-3 rounded-[10px] border border-[#1A3A6B] bg-white px-7 py-3.5 text-base font-semibold text-[#1A3A6B] transition-colors hover:bg-[#F3F4F6] sm:text-lg"
            onClick={() => setIsPlayingVideo(true)}
            type="button"
          >
            <span className="flex h-7 w-7 items-center justify-center rounded-md bg-[#F3F4F6]">
              <PlayIcon className="fill-[#1A3A6B]" size={14} />
            </span>
            Watch Our Story
          </button>
        </div>
      </motion.div>

      <AnimatePresence>
        {isPlayingVideo && (
          <motion.div
            animate={{ opacity: 1 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4 backdrop-blur-md"
            exit={{ opacity: 0 }}
            initial={{ opacity: 0 }}
            onClick={() => setIsPlayingVideo(false)}
          >
            <motion.div
              animate={{ opacity: 1, scale: 1, y: 0 }}
              aria-label="Watch the Shoe My Feet Foundation story"
              aria-modal="true"
              className="relative w-full max-w-4xl overflow-hidden rounded-2xl border border-white/20 bg-black p-3 shadow-2xl"
              initial={{ opacity: 0, scale: 0.95, y: 16 }}
              onClick={(event) => event.stopPropagation()}
              role="dialog"
              transition={{ duration: 0.25 }}
            >
              <div className="mb-2 flex items-center justify-between border-b border-white/10 px-3 py-2 text-white">
                <span className="font-semibold">
                  Shoe My Feet Foundation — Our Story
                </span>
                <button
                  aria-label="Close video"
                  className="flex h-8 w-8 items-center justify-center rounded-full bg-white/10 text-lg hover:bg-white/20"
                  onClick={() => setIsPlayingVideo(false)}
                  type="button"
                >
                  ×
                </button>
              </div>
              <div className="relative aspect-video overflow-hidden">
                <video
                  autoPlay
                  className="h-full w-full object-contain"
                  controls
                  playsInline
                >
                  <source src="/videos/story.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
