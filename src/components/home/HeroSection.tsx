"use client";

import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { createPortal } from "react-dom";
import { PlayIcon, XIcon } from "@/components/ui/Icons";

const impactPhoto = "/images/everychild.jpg";
const storyVideo = "/videos/My-Intro.mp4";

export default function HeroSection() {
  const shouldReduceMotion = useReducedMotion();
  const [isPlayingVideo, setIsPlayingVideo] = useState(false);
  const [videoError, setVideoError] = useState<string | null>(null);
  const [mounted, setMounted] = useState(false);
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!isPlayingVideo) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    // Focus close button when modal opens
    closeButtonRef.current?.focus();

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsPlayingVideo(false);
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
        className="pointer-events-none absolute inset-0 z-0 scale-105 bg-center opacity-40"
        style={{ backgroundImage: `url("${impactPhoto}")` }}
      />
      <video
        aria-hidden="true"
        autoPlay={!shouldReduceMotion}
        className="pointer-events-none absolute inset-0 z-0 h-full w-full object-cover"
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
        className="pointer-events-none absolute inset-0 z-0 bg-gradient-to-b from-black/30 via-black/40 to-[#111827]/65"
      />

      <div className="relative z-10 mx-auto flex w-full max-w-5xl flex-col items-center gap-6">
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
            type="button"
            onClick={() => {
              setVideoError(null);
              setIsPlayingVideo(true);
            }}
            className="group inline-flex cursor-pointer items-center gap-3 rounded-[10px] border border-[#1A3A6B] bg-white px-7 py-3.5 text-base font-semibold text-[#1A3A6B] transition-colors hover:bg-[#F3F4F6] sm:text-lg"
          >
            <span className="flex h-7 w-7 items-center justify-center rounded-md bg-[#F3F4F6]">
              <PlayIcon className="fill-[#1A3A6B]" size={14} />
            </span>
            Watch Our Story
          </button>
        </motion.div>
      </div>

      {mounted &&
        createPortal(
          <AnimatePresence>
            {isPlayingVideo && (
              <motion.div
                key="story-video-modal"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.25 }}
                className="fixed inset-0 z-[99999] flex items-center justify-center bg-black/95 p-4 sm:p-8"
                role="dialog"
                aria-modal="true"
                aria-label="Watch the Shoe My Feet Foundation story"
                data-story-video-dialog
                onClick={(e) => {
                  if (e.target === e.currentTarget) {
                    setIsPlayingVideo(false);
                  }
                }}
              >
                <button
                  ref={closeButtonRef}
                  type="button"
                  onClick={() => setIsPlayingVideo(false)}
                  aria-label="Close video"
                  className="absolute right-5 top-5 z-10 flex h-11 w-11 cursor-pointer items-center justify-center rounded-full bg-white/15 text-white transition-colors hover:bg-white/25 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white sm:right-8 sm:top-8"
                >
                  <XIcon size={24} />
                </button>

                <div className="w-full max-w-5xl">
                  <p className="mb-4 text-center text-xl font-bold text-white">
                    Shoe My Feet Foundation — Our Story
                  </p>

                  <div className="relative aspect-video w-full overflow-hidden rounded-xl bg-black shadow-2xl">
                    <video
                      ref={videoRef}
                      key={storyVideo}
                      controls
                      autoPlay
                      playsInline
                      preload="auto"
                      className="h-full w-full object-contain"
                      src={storyVideo}
                      onError={(event) => {
                        const video = event.currentTarget;
                        console.error("Video loading failed:", {
                          src: video.currentSrc,
                          errorCode: video.error?.code,
                          errorMessage: video.error?.message,
                        });
                        setVideoError("The story video could not be loaded.");
                      }}
                    >
                      Your browser does not support HTML video.
                    </video>
                  </div>

                  {videoError && (
                    <p
                      className="mt-3 text-center text-sm text-red-400"
                      role="alert"
                    >
                      {videoError}
                    </p>
                  )}
                </div>
              </motion.div>
            )}
          </AnimatePresence>,
          document.body
        )}
    </section>
  );
}
