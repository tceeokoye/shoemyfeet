"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { fadeUp, staggerContainer } from "@/lib/animations";
import { HeartIcon, ArrowRightIcon, SparklesIcon } from "@/components/ui/Icons";

export default function AboutHero() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section className="relative min-h-[92vh] flex items-center justify-center overflow-hidden bg-[#09090b]">
      {/* Background Image with Layered Gradient Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/children_walking_school.jpg"
          alt="Heartwarming photo of happy school children walking confidently in shoes"
          fill
          priority
          className="object-cover object-center scale-105 filter brightness-105 contrast-105 transform animate-float-slow"
          sizes="100vw"
        />
        {/* Cinematic Black Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/60 to-black/40" />
      </div>

      {/* Floating background glowing ambient lights */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute top-1/4 left-1/6 w-96 h-96 rounded-full bg-[#f97316]/15 blur-[120px] animate-pulse" />
        <div className="absolute bottom-1/4 right-1/6 w-[450px] h-[450px] rounded-full bg-[#f97316]/15 blur-[140px] animate-pulse" />
      </div>

      {/* Floating decorative geometric shapes */}
      <motion.div
        className="absolute top-24 left-12 w-16 h-16 rounded-3xl border-2 border-white/20 glass hidden md:block z-10"
        animate={{ y: [-10, 10, -10], rotate: [0, 10, -10, 0] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-32 right-16 w-20 h-20 rounded-full border-2 border-orange-400/30 glass hidden md:block z-10"
        animate={{ y: [12, -12, 12], scale: [1, 1.05, 1] }}
        transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute top-1/3 right-1/12 text-yellow-400/40 text-4xl hidden lg:block z-10"
        animate={{ rotate: [0, 360] }}
        transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
      >
        ✦
      </motion.div>

      {/* Main Hero Content */}
      <div ref={ref} className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-32 pb-24">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="flex flex-col items-center"
        >
          {/* Tag Badge */}
          <motion.div variants={fadeUp} className="mb-6">
            <span className="inline-flex items-center gap-2 px-5 py-2 rounded-full border border-white/25 bg-white/10 backdrop-blur-md text-white text-xs sm:text-sm font-bold font-body shadow-lg">
              <SparklesIcon size={16} className="text-[#fbbf24] animate-spin-slow" />
              <span>Shoe My Feet Foundation · About Us</span>
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            variants={fadeUp}
            className="font-heading text-4xl sm:text-6xl lg:text-7xl font-extrabold text-white leading-[1.1] mb-6 tracking-tight drop-shadow-md max-w-4xl"
          >
            Every Child Deserves the{" "}
            <span className="relative inline-block">
              <span className="text-warm-orange">
                Confidence
              </span>
              <svg className="absolute -bottom-2 left-0 w-full h-3 text-warm-orange/60" viewBox="0 0 100 12" preserveAspectRatio="none">
                <path d="M0,0 Q50,12 100,0" fill="none" stroke="currentColor" strokeWidth="4" />
              </svg>
            </span>{" "}
            to Walk Forward
          </motion.h1>

          {/* Subheading */}
          <motion.p
            variants={fadeUp}
            className="text-neutral-200/95 text-lg sm:text-xl lg:text-2xl font-body leading-relaxed max-w-3xl mb-10 text-shadow"
          >
            Shoe My Feet Foundation exists to restore dignity, confidence, and opportunity by providing durable, quality school shoes to children who need them most — breaking barriers to education across Nigeria.
          </motion.p>

          {/* Action CTAs */}
          <motion.div variants={fadeUp} className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center w-full sm:w-auto">
            <Link
              href="/volunteer"
              className="btn-orange text-base sm:text-lg px-8 py-4 rounded-full shadow-2xl hover:scale-105 transition-all duration-300 justify-center group"
            >
              <span>Join Our Mission</span>
              <ArrowRightIcon size={20} className="group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              href="/donate"
              className="btn-primary border border-white/20 text-base sm:text-lg px-8 py-4 rounded-full backdrop-blur-md hover:scale-105 transition-all duration-300 justify-center group"
            >
              <span>Support a Child</span>
            </Link>
          </motion.div>
        </motion.div>
      </div>

      {/* Bottom Wave Divider */}
      <div className="absolute bottom-0 left-0 right-0 z-10 pointer-events-none">
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-12 sm:h-16 text-white preserve-3d">
          <path d="M0,64L60,58.7C120,53,240,43,360,48C480,53,600,75,720,80C840,85,960,75,1080,64C1200,53,1320,43,1380,37.3L1440,32L1440,120L1380,120C1320,120,1200,120,1080,120C960,120,840,120,720,120C600,120,480,120,360,120C240,120,120,120,60,120L0,120Z" fill="currentColor" />
        </svg>
      </div>
    </section>
  );
}

