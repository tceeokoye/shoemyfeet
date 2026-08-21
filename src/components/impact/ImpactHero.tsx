"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { fadeUp, staggerContainer } from "@/lib/animations";
import { HeartIcon, ArrowRightIcon, SparklesIcon } from "@/components/ui/Icons";

const footprintPositions = [
  { left: "8%", bottom: "20%", delay: 0, rotate: -15 },
  { left: "15%", bottom: "35%", delay: 0.3, rotate: 10 },
  { left: "22%", bottom: "22%", delay: 0.6, rotate: -5 },
  { left: "75%", bottom: "28%", delay: 0.4, rotate: 12 },
  { left: "82%", bottom: "40%", delay: 0.7, rotate: -8 },
  { left: "89%", bottom: "24%", delay: 1.0, rotate: 5 },
  { left: "50%", bottom: "12%", delay: 0.2, rotate: 0 },
];

export default function ImpactHero() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section className="relative min-h-[92vh] flex items-center justify-center overflow-hidden bg-[#0d1f3c]">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/children_walking_school.jpg"
          alt="Children walking proudly to school wearing their new shoes"
          fill
          priority
          className="object-cover object-center scale-105 brightness-90"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-[#1a3a6b]" />
        <div className="absolute inset-0 bg-[#0d1f3c]/10" />
      </div>

      {/* Ambient glow overlays */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute top-1/4 left-1/6 w-96 h-96 rounded-full bg-[#f97316]/12 blur-[130px] animate-pulse" />
        <div className="absolute bottom-1/3 right-1/6 w-[450px] h-[450px] rounded-full bg-[#38bdf8]/10 blur-[150px] animate-pulse" />
      </div>

      {/* Animated footprint trail decorations */}
      <div className="absolute inset-0 pointer-events-none z-10 overflow-hidden">
        {footprintPositions.map((fp, i) => (
          <motion.div
            key={i}
            className="absolute text-white/15 text-3xl select-none"
            style={{ left: fp.left, bottom: fp.bottom, rotate: fp.rotate }}
            animate={{ y: [0, -18, 0], opacity: [0.08, 0.22, 0.08] }}
            transition={{ duration: 3.5 + i * 0.4, repeat: Infinity, ease: "easeInOut", delay: fp.delay }}
          >
            👣
          </motion.div>
        ))}
      </div>

      {/* Floating geometric shapes */}
      <motion.div
        className="absolute top-24 left-12 w-16 h-16 rounded-3xl border-2 border-white/20 glass hidden md:block z-10"
        animate={{ y: [-10, 10, -10], rotate: [0, 10, -10, 0] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-36 right-16 w-20 h-20 rounded-full border-2 border-orange-400/30 glass hidden md:block z-10"
        animate={{ y: [12, -12, 12], scale: [1, 1.05, 1] }}
        transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute top-1/3 right-16 text-yellow-400/40 text-5xl hidden lg:block z-10"
        animate={{ rotate: [0, 360] }}
        transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
      >
        ✦
      </motion.div>
      <motion.div
        className="absolute bottom-48 left-20 text-white/20 text-3xl hidden lg:block z-10"
        animate={{ y: [-8, 8, -8], rotate: [0, 15, -15, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      >
        👟
      </motion.div>

      {/* Main content */}
      <div ref={ref} className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-32 pb-24">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="flex flex-col items-center"
        >
          {/* Badge */}
          <motion.div variants={fadeUp} className="mb-6">
            <span className="inline-flex items-center gap-2 px-5 py-2 rounded-full border border-white/25 bg-white/10 backdrop-blur-md text-white text-xs sm:text-sm font-bold font-body shadow-lg">
              <SparklesIcon size={16} className="text-[#fbbf24] animate-spin-slow" />
              <span>Shoe My Feet Foundation · Our Impact</span>
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            variants={fadeUp}
            className="font-heading text-4xl sm:text-6xl lg:text-7xl font-extrabold text-white leading-[1.1] mb-6 tracking-tight drop-shadow-md max-w-4xl"
          >
            Every Step Creates a{" "}
            <span className="relative inline-block">
              <span className="text-warm-orange">
                Lasting Impact
              </span>
              <svg className="absolute -bottom-2 left-0 w-full h-3 text-warm-orange/60" viewBox="0 0 100 12" preserveAspectRatio="none">
                <path d="M0,0 Q50,12 100,0" fill="none" stroke="currentColor" strokeWidth="4" />
              </svg>
            </span>
          </motion.h1>

          {/* Subtext */}
          <motion.p
            variants={fadeUp}
            className="text-blue-100/95 text-lg sm:text-xl lg:text-2xl font-body leading-relaxed max-w-3xl mb-10"
          >
            Every pair of shoes represents more than footwear — it represents confidence, opportunity, better health, and a brighter future. Explore how Shoe My Feet Foundation is transforming lives, one child and one community at a time.
          </motion.p>

          {/* CTAs */}
          <motion.div variants={fadeUp} className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center w-full sm:w-auto">
            <a
              href="#impact-numbers"
              className="btn-orange text-base sm:text-lg px-8 py-4 rounded-full shadow-2xl hover:scale-105 transition-all duration-300 justify-center group"
            >
              <HeartIcon size={20} className="fill-white/30 group-hover:fill-white transition-colors" />
              <span>View Our Impact</span>
            </a>
            <Link
              href="/volunteer"
              className="btn-primary border border-white/20 text-base sm:text-lg px-8 py-4 rounded-full backdrop-blur-md hover:scale-105 transition-all duration-300 justify-center group"
            >
              <span>Join the Mission</span>
              <ArrowRightIcon size={20} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </motion.div>
      </div>

      {/* Bottom wave */}
      <div className="absolute bottom-0 left-0 right-0 z-10 pointer-events-none">
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-12 sm:h-16 text-white">
          <path d="M0,64L60,58.7C120,53,240,43,360,48C480,53,600,75,720,80C840,85,960,75,1080,64C1200,53,1320,43,1380,37.3L1440,32L1440,120L1380,120C1320,120,1200,120,1080,120C960,120,840,120,720,120C600,120,480,120,360,120C240,120,120,120,60,120L0,120Z" fill="currentColor" />
        </svg>
      </div>
    </section>
  );
}
