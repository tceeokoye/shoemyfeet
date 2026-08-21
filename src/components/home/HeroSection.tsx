"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import FastImage from "@/components/ui/FastImage";
import {
  ArrowRightIcon,
  PlayIcon,
  HeartIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
  SparklesIcon,
} from "@/components/ui/Icons";

interface SlideData {
  id: number;
  image: string;
  badge: string;
  headlineLines: string[];
  highlightWord: string;
  description: string;
  primaryCta: { label: string; href: string };
  secondaryCta: { label: string; href?: string; isVideo?: boolean };
  floatStat?: { number: string; text: string; location: string };
}

const HERO_SLIDES: SlideData[] = [
  {
    id: 1,
    image: "/images/hero.webp",
    badge: "Every Step Changes a Life",
    headlineLines: ["Every Child Deserves", "To Walk With"],
    highlightWord: "Confidence.",
    description:
      "A simple pair of school shoes protects health, restores dignity, and keeps underserved children in the classroom across Nigeria.",
    primaryCta: { label: "Donate Now", href: "/donate" },
    secondaryCta: { label: "Watch Our Story", isVideo: true },
    floatStat: { number: "6,500+", text: "Pairs Gifted to Children", location: "Lagos & Ogun State" },
  },
  {
    id: 2,
    image: "/images/distribution.webp",
    badge: "Health & Dignity Protected",
    headlineLines: ["Protecting Little Soles", "From Pain &"],
    highlightWord: "Infection.",
    description:
      "Over 6,500+ pairs delivered directly into remote schools, preventing soil-transmitted infections and severe foot injuries.",
    primaryCta: { label: "Support Outreach", href: "/donate" },
    secondaryCta: { label: "Explore Our Impact", href: "/impact" },
    floatStat: { number: "100%", text: "Parasite Protection Rate", location: "Enugu Outreach" },
  },
  {
    id: 3,
    image: "/images/children_walking_school.webp",
    badge: "Equal Access to Education",
    headlineLines: ["Keeping Children in Class,", "One Step at a"],
    highlightWord: "Time.",
    description:
      "No student should miss class due to barefoot journeys or shoe policies. We provide durable footwear so learning never stops.",
    primaryCta: { label: "Sponsor a Child", href: "/donate" },
    secondaryCta: { label: "View Our Programs", href: "/programs" },
    floatStat: { number: "+30%", text: "Increase in Attendance", location: "Primary Schools" },
  },
  {
    id: 4,
    image: "/images/shoemaking.webp",
    badge: "Kids Shoemaking & Craftsmanship",
    headlineLines: ["Building Sustainable", "Futures Through"],
    highlightWord: "Craftsmanship.",
    description:
      "137+ kids trained in shoemaking, producing quality footwear while building independent, sustainable livelihoods.",
    primaryCta: { label: "Empower Kids", href: "/volunteer" },
    secondaryCta: { label: "Our Story", href: "/about" },
    floatStat: { number: "137+", text: "Kids Trained in Shoemaking", location: "Footwear Academy" },
  },
];

const SLIDE_DURATION = 7500; // ms

export default function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [direction, setDirection] = useState(1);
  const [isPaused, setIsPaused] = useState(false);
  const [isPlayingVideo, setIsPlayingVideo] = useState(false);
  const [isReady, setIsReady] = useState(false);
  const touchStartX = useRef<number | null>(null);

  useEffect(() => {
    const handleLoaderComplete = () => setIsReady(true);
    window.addEventListener("page-loader-complete", handleLoaderComplete);
    const timer = setTimeout(() => setIsReady(true), 600);

    return () => {
      window.removeEventListener("page-loader-complete", handleLoaderComplete);
      clearTimeout(timer);
    };
  }, []);

  const nextSlide = useCallback(() => {
    setDirection(1);
    setCurrentSlide((prev) => (prev + 1) % HERO_SLIDES.length);
  }, []);

  const prevSlide = useCallback(() => {
    setDirection(-1);
    setCurrentSlide((prev) => (prev - 1 + HERO_SLIDES.length) % HERO_SLIDES.length);
  }, []);

  const goToSlide = (index: number) => {
    setDirection(index > currentSlide ? 1 : -1);
    setCurrentSlide(index);
  };

  // Continuous Autoplay Timer
  useEffect(() => {
    if (isPaused || !isReady) return;

    const timer = setInterval(() => {
      nextSlide();
    }, SLIDE_DURATION);

    return () => clearInterval(timer);
  }, [nextSlide, isPaused, isReady, currentSlide]);

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return;
    const touchEndX = e.changedTouches[0].clientX;
    const diff = touchStartX.current - touchEndX;

    if (diff > 50) nextSlide();
    else if (diff < -50) prevSlide();
    touchStartX.current = null;
  };

  // Preload all slide images immediately
  useEffect(() => {
    HERO_SLIDES.forEach((s) => {
      if (typeof window !== "undefined") {
        const img = new window.Image();
        img.src = s.image;
      }
    });
  }, []);

  const slide = HERO_SLIDES[currentSlide];

  return (
    <section
      className="relative min-h-[92vh] lg:min-h-screen flex flex-col justify-between overflow-hidden bg-[#0b1933] pt-28 sm:pt-32 pb-10 select-none"
      aria-label="Hero section"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      {/* Background Glow Lights */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-orange-500/20 rounded-full blur-[140px] pointer-events-none z-0" />
      <div className="absolute bottom-10 right-10 w-[30rem] h-[30rem] bg-blue-500/20 rounded-full blur-[160px] pointer-events-none z-0" />

      {/* CONTINUOUS CINEMATOGRAPHY SLOW MOTION BACKGROUND CAROUSEL */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        {/* Base Image Layer to eliminate black flash */}
        <div className="absolute inset-0 w-full h-full">
          <FastImage
            src={HERO_SLIDES[0].image}
            alt="Hero background base"
            fill
            priority
            className="object-cover object-center transform-gpu scale-105"
            sizes="100vw"
          />
        </div>

        {/* Seamless Cross-fade with Continuous Slow Motion Cinematography (scale & pan) */}
        <AnimatePresence initial={false} custom={direction}>
          <motion.div
            key={slide.id}
            custom={direction}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{
              opacity: { duration: 1.2, ease: "easeInOut" },
            }}
            className="absolute inset-0 w-full h-full"
          >
            {/* Image layer continuously moving like cinematography */}
            <motion.div
              animate={{
                scale: [1.18, 1.03],
                x: [0, -25],
                y: [0, -15],
              }}
              transition={{
                duration: SLIDE_DURATION / 1000,
                ease: "easeInOut",
              }}
              className="relative w-full h-full"
            >
              <FastImage
                src={slide.image}
                alt={slide.badge}
                fill
                priority
                className="object-cover object-center transform-gpu"
                sizes="100vw"
              />
            </motion.div>

            {/* Dark Gradient Overlay ensuring 100% text legibility */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#0b1933]/95 via-[#0f2347]/85 to-[#0b1933]/70 backdrop-brightness-95" />
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Hero Content Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full flex-1 flex flex-col lg:flex-row lg:items-center justify-between py-6 sm:py-10 gap-8">
        <div className="max-w-3xl">
          <AnimatePresence mode="wait">
            <motion.div
              key={`slide-content-${slide.id}`}
              initial={{ opacity: 0, y: 35, filter: "blur(6px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              exit={{ opacity: 0, y: -25, filter: "blur(4px)" }}
              transition={{
                duration: 0.8,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="flex flex-col gap-5 sm:gap-6"
            >
              {/* Kids Badge Tag */}
              <motion.div
                initial={{ opacity: 0, scale: 0.85 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.15 }}
                className="inline-flex items-center gap-2.5 self-start px-4 py-2 rounded-full bg-[#f97316] text-white text-xs sm:text-sm font-extrabold uppercase tracking-wider shadow-lg shadow-orange-600/30 font-heading border border-amber-300/40"
              >
                <span className="w-2.5 h-2.5 rounded-full bg-white animate-pulse" />
                <span>{slide.badge}</span>
              </motion.div>

              {/* Main Headline with Kid Font Fredoka */}
              <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.12] text-white tracking-tight drop-shadow-lg">
                {slide.headlineLines.map((line, idx) => (
                  <span key={idx} className="block">
                    {line}
                  </span>
                ))}
                <span className="text-[#f59e0b] inline-block relative mt-1 drop-shadow-md">
                  {slide.highlightWord}
                  <span className="absolute -bottom-1.5 left-0 w-full h-2.5 bg-[#f97316] rounded-full opacity-90" />
                </span>
              </h1>

              {/* Description Subtitle */}
              <p className="text-base sm:text-lg md:text-xl text-blue-100/90 font-body leading-relaxed max-w-2xl font-normal drop-shadow">
                {slide.description}
              </p>

              {/* CTAs */}
              <div className="flex flex-wrap gap-4 items-center pt-2">
                <Link
                  href={slide.primaryCta.href}
                  className="btn-orange text-base sm:text-lg font-bold group shadow-2xl"
                >
                  <HeartIcon
                    size={20}
                    className="fill-white text-white group-hover:scale-110 transition-transform"
                  />
                  <span>{slide.primaryCta.label}</span>
                  <ArrowRightIcon
                    size={18}
                    className="group-hover:translate-x-1 transition-transform"
                  />
                </Link>

                {slide.secondaryCta.isVideo ? (
                  <button
                    onClick={() => setIsPlayingVideo(true)}
                    className="flex items-center gap-3.5 px-6 py-3.5 rounded-full font-bold text-white bg-white/10 hover:bg-white/20 border border-white/30 transition-all font-heading text-base cursor-pointer backdrop-blur-md group shadow-md"
                  >
                    <span className="relative flex items-center justify-center w-8 h-8 rounded-full bg-[#f97316] text-white shadow-md group-hover:scale-110 transition-transform">
                      <PlayIcon size={14} className="ml-0.5 fill-white text-white" />
                    </span>
                    <span>{slide.secondaryCta.label}</span>
                  </button>
                ) : (
                  <Link
                    href={slide.secondaryCta.href || "#"}
                    className="flex items-center gap-2 px-6 py-3.5 rounded-full font-bold text-white bg-white/10 hover:bg-white/20 border border-white/30 transition-all font-heading text-base backdrop-blur-md group"
                  >
                    <span>{slide.secondaryCta.label}</span>
                    <ArrowRightIcon
                      size={16}
                      className="group-hover:translate-x-1 transition-transform text-[#f59e0b]"
                    />
                  </Link>
                )}
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* 3D Floating Showcase Card (Desktop) */}
        {slide.floatStat && (
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="hidden lg:flex flex-col gap-4 self-center"
          >
            <motion.div
              animate={{
                y: [0, -14, 0],
                rotate: [0, 1.5, 0, -1.5, 0],
              }}
              transition={{
                duration: 6,
                ease: "easeInOut",
                repeat: Infinity,
                repeatType: "mirror",
              }}
              className="bg-[#0f2347]/90 backdrop-blur-2xl border-2 border-white/20 rounded-3xl p-6 shadow-2xl max-w-xs text-white relative overflow-hidden group hover:border-[#f97316]/60 transition-all card-3d-dark"
            >
              <div className="absolute -top-10 -right-10 w-28 h-28 bg-orange-500/20 rounded-full blur-xl" />
              
              <div className="flex items-center gap-3 mb-3">
                <span className="w-10 h-10 rounded-2xl bg-orange-500/20 border border-orange-500/40 flex items-center justify-center text-amber-300">
                  <SparklesIcon size={20} />
                </span>
                <div>
                  <span className="text-[11px] font-bold uppercase tracking-wider text-amber-300 block font-heading">
                    Verified Field Impact
                  </span>
                  <span className="text-xs text-blue-100 font-body">
                    {slide.floatStat.location}
                  </span>
                </div>
              </div>

              <div className="text-4xl font-heading font-extrabold text-white mb-1 drop-shadow-md">
                {slide.floatStat.number}
              </div>

              <p className="text-xs text-blue-100 font-body leading-relaxed">
                {slide.floatStat.text}
              </p>

              <div className="mt-4 pt-3 border-t border-white/10 flex items-center justify-between text-[11px] text-blue-200">
                <span className="flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-orange-400 animate-ping" />
                  Live Field Data
                </span>
                <span className="font-semibold text-amber-300">Shoe My Feet</span>
              </div>
            </motion.div>
          </motion.div>
        )}
      </div>

      {/* Swiper Controls & Progress */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="flex items-center justify-between gap-4 pb-4 border-b border-white/15">
          {/* Swiper Indicators */}
          <div className="flex items-center gap-4">
            <span className="text-xs font-bold text-blue-200 font-heading tracking-widest">
              0{currentSlide + 1} / 0{HERO_SLIDES.length}
            </span>

            <div className="flex items-center gap-2">
              {HERO_SLIDES.map((s, idx) => (
                <button
                  key={s.id}
                  onClick={() => goToSlide(idx)}
                  aria-label={`Go to slide ${idx + 1}`}
                  className="group relative h-2.5 rounded-full transition-all duration-300 overflow-hidden cursor-pointer"
                  style={{
                    width: idx === currentSlide ? "3rem" : "0.75rem",
                    backgroundColor:
                      idx === currentSlide ? "#f97316" : "rgba(255, 255, 255, 0.3)",
                  }}
                >
                  {idx === currentSlide && (
                    <motion.div
                      key={`progress-${currentSlide}-${isPaused}`}
                      className="absolute inset-0 bg-amber-400 origin-left"
                      initial={{ scaleX: 0 }}
                      animate={{ scaleX: isPaused ? 0 : 1 }}
                      transition={{
                        duration: SLIDE_DURATION / 1000,
                        ease: "linear",
                      }}
                    />
                  )}
                </button>
              ))}
            </div>
          </div>

          {/* Arrow Navigation */}
          <div className="flex items-center gap-2">
            <button
              onClick={prevSlide}
              aria-label="Previous slide"
              className="w-10 h-10 rounded-full bg-white/10 hover:bg-[#f97316] border border-white/25 text-white flex items-center justify-center transition-all duration-200 cursor-pointer shadow-md hover:scale-105 active:scale-95"
            >
              <ChevronLeftIcon size={20} />
            </button>
            <button
              onClick={nextSlide}
              aria-label="Next slide"
              className="w-10 h-10 rounded-full bg-white/10 hover:bg-[#f97316] border border-white/25 text-white flex items-center justify-center transition-all duration-200 cursor-pointer shadow-md hover:scale-105 active:scale-95"
            >
              <ChevronRightIcon size={20} />
            </button>
          </div>
        </div>
      </div>

      {/* Video Modal */}
      <AnimatePresence mode="wait">
        {isPlayingVideo && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 backdrop-blur-md p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsPlayingVideo(false)}
          >
            <motion.div
              onClick={(e) => e.stopPropagation()}
              className="bg-[#0b1933] border border-white/20 rounded-3xl p-3 max-w-4xl w-full shadow-2xl overflow-hidden relative"
              initial={{ opacity: 0, scale: 0.9, y: 30 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="flex items-center justify-between px-3 py-2 text-white border-b border-white/10 mb-2">
                <span className="font-heading font-bold text-sm text-[#f59e0b]">
                  Shoe My Feet Foundation — Our Story
                </span>
                <button
                  onClick={() => setIsPlayingVideo(false)}
                  className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white cursor-pointer font-bold"
                >
                  ✕
                </button>
              </div>
              <div className="relative aspect-video overflow-hidden rounded-2xl bg-black">
                <video className="w-full h-full object-cover" controls autoPlay playsInline>
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
