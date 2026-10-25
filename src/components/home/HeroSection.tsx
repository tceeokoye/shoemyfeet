"use client";

import { useEffect, useRef, useState } from "react";
import {
  AnimatePresence,
  motion,
  useReducedMotion,
} from "framer-motion";
import { createPortal } from "react-dom";
import Link from "next/link";
import { ArrowRightIcon, PlayIcon } from "@/components/ui/Icons";

const impactPhoto = "/images/everychild.jpg";
const storyVideo = "/videos/My-Intro.mp4";

export default function HeroSection() {
  const shouldReduceMotion = useReducedMotion();
  const [isPlayingVideo, setIsPlayingVideo] = useState(false);
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!isPlayingVideo) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeButtonRef.current?.focus();

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsPlayingVideo(false);
        return;
      }

      if (event.key !== "Tab") return;

      const focusableElements = document.querySelectorAll<HTMLElement>(
        "[data-story-video-dialog] button, [data-story-video-dialog] video",
      );
      const firstElement = focusableElements[0];
      const lastElement = focusableElements[focusableElements.length - 1];

      if (event.shiftKey && document.activeElement === firstElement) {
        event.preventDefault();
        lastElement?.focus();
      } else if (!event.shiftKey && document.activeElement === lastElement) {
        event.preventDefault();
        firstElement?.focus();
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isPlayingVideo]);

  return (
    <section
      aria-label="Shoe My Feet Foundation"
      className="relative isolate flex min-h-screen items-center justify-center overflow-hidden px-5 pb-12 pt-24 text-center sm:px-8 lg:pt-44"
    >
      <div
        aria-hidden="true"
        className="absolute inset-0 z-0 scale-105 bg-center opacity-40 "
        style={{ backgroundImage: `url("${impactPhoto}")` }}
      />
      <video
        aria-hidden="true"
        autoPlay={!shouldReduceMotion}
        className="absolute inset-0 z-[1] h-full w-full object-cover"
        loop
        muted
        playsInline
        poster={impactPhoto}
        preload={shouldReduceMotion ? "none" : "metadata"}
        tabIndex={-1}
      >
        <source src={storyVideo} type="video/mp4" />
      </video>

      <div
        aria-hidden="true"
        className="absolute inset-0 z-2 bg-linear-to-b from-black/30 via-black/40 to-[#111827]/65"
      />

      <div className="relative z-3 mx-auto flex w-full max-w-5xl flex-col items-center gap-6">
        <h1 className="max-w-4xl text-3xl font-extrabold leading-[1.08] tracking-tight text-white sm:text-4xl md:text-5xl lg:text-6xl">
          <motion.span
            className="block"
            initial={shouldReduceMotion ? false : { opacity: 0, x: -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            Every Child Deserves
          </motion.span>
          <motion.span
            className="mt-2 block"
            initial={shouldReduceMotion ? false : { opacity: 0, x: 80 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.15, ease: "easeOut" }}
          >
            <span className="text-white">To Walk With</span>{" "}
            <span className="text-[#F97316]">Confidence.</span>
          </motion.span>
        </h1>

        <motion.p
          className="max-w-2xl leading-relaxed text-base text-white/90 drop-shadow sm:text-lg md:text-xl"
          initial={shouldReduceMotion ? false : { opacity: 0, x: 80 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
        >
          A simple pair of school shoes protects health, restores dignity, and
          helps underserved children stay in the classroom across Nigeria.
        </motion.p>

        <motion.div
          className="mt-2 flex flex-wrap items-center justify-center gap-4"
          initial={shouldReduceMotion ? false : { opacity: 0, y: 48 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.45, ease: "easeOut" }}
        >
        

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
        </motion.div>
      </div>

      <AnimatePresence>
        {isPlayingVideo &&
          createPortal(
            <motion.div
              animate={{ opacity: 1 }}
              aria-label="Watch the Shoe My Feet Foundation story"
              aria-modal="true"
              className="fixed inset-0 z-[1000] flex items-center justify-center bg-black p-4 sm:p-8"
              data-story-video-dialog
              initial={{ opacity: 0 }}
              role="dialog"
              transition={{ duration: 0.25 }}
            >
              <button
                ref={closeButtonRef}
                aria-label="Close video"
                className="absolute right-5 top-5 z-10 flex size-11 items-center justify-center rounded-full bg-white/15 text-3xl leading-none text-white transition-colors hover:bg-white/25 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white sm:right-8 sm:top-8"
                onClick={() => setIsPlayingVideo(false)}
                type="button"
              >
                ×
              </button>
              <video
                autoPlay
                className="max-h-full w-full max-w-7xl object-contain"
                controls
                playsInline
                src={storyVideo}
              >
                Your browser does not support the video tag.
              </video>
            </motion.div>,
            document.body,
          )}
      </AnimatePresence>
    </section>
  );
}
