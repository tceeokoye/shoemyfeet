"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { fadeUp, staggerContainer } from "@/lib/animations";
import { SparklesIcon, ArrowRightIcon, HeartIcon } from "@/components/ui/Icons";

const footprintPositions = [
  { left: "6%", bottom: "28%", delay: 0, rotate: -15 },
  { left: "13%", bottom: "42%", delay: 0.4, rotate: 10 },
  { left: "20%", bottom: "18%", delay: 0.8, rotate: -8 },
  { left: "72%", bottom: "32%", delay: 0.2, rotate: 14 },
  { left: "80%", bottom: "48%", delay: 0.6, rotate: -10 },
  { left: "88%", bottom: "20%", delay: 1.0, rotate: 6 },
  { left: "50%", bottom: "10%", delay: 0.3, rotate: 0 },
];

const floatingStats = [
  { label: "Active Volunteers", value: "480+", icon: "🙋", color: "bg-[#f97316]" },
  { label: "Hours Contributed", value: "24K+", icon: "⏱️", color: "bg-[#1a3a6b]" },
  { label: "Communities Served", value: "62+", icon: "🏘️", color: "bg-[#15803d]" },
];

export default function VolunteerHero() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section className="relative min-h-[96vh] flex items-center justify-center overflow-hidden bg-[#0d1f3c]">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/volunteers.jpg"
          alt="Passionate volunteers working together for Shoe My Feet Foundation"
          fill
          priority
          className="object-cover object-center scale-105 brightness-75"
          sizes="100vw"
        />
        {/* Deep navy → orange gradient overlay */}
        <div className="absolute inset-0 bg-[#1a3a6b]" />
        <div className="absolute inset-0 bg-[#1a3a6b]" />
      </div>

      {/* Ambient glow overlays */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute top-1/4 left-1/5 w-[500px] h-[500px] rounded-full bg-[#f97316]/15 blur-[140px] animate-pulse" />
        <div className="absolute bottom-1/4 right-1/5 w-[400px] h-[400px] rounded-full bg-[#38bdf8]/10 blur-[130px] animate-pulse" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full bg-[#fbbf24]/5 blur-[180px]" />
      </div>

      {/* Animated footprint trail */}
      <div className="absolute inset-0 pointer-events-none z-10 overflow-hidden">
        {footprintPositions.map((fp, i) => (
          <motion.div
            key={i}
            className="absolute text-white/12 text-3xl select-none"
            style={{ left: fp.left, bottom: fp.bottom, rotate: fp.rotate }}
            animate={{ y: [0, -20, 0], opacity: [0.06, 0.20, 0.06] }}
            transition={{ duration: 3.8 + i * 0.4, repeat: Infinity, ease: "easeInOut", delay: fp.delay }}
          >
            👣
          </motion.div>
        ))}
      </div>

      {/* Floating geometric shapes */}
      <motion.div
        className="absolute top-24 left-14 w-16 h-16 rounded-3xl border-2 border-white/20 glass hidden md:block z-10"
        animate={{ y: [-12, 12, -12], rotate: [0, 8, -8, 0] }}
        transition={{ duration: 7.5, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-40 right-16 w-20 h-20 rounded-full border-2 border-orange-400/30 glass hidden md:block z-10"
        animate={{ y: [10, -10, 10], scale: [1, 1.06, 1] }}
        transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute top-1/3 right-20 text-yellow-400/40 text-5xl hidden lg:block z-10"
        animate={{ rotate: [0, 360] }}
        transition={{ duration: 28, repeat: Infinity, ease: "linear" }}
      >
        ✦
      </motion.div>
      <motion.div
        className="absolute bottom-52 left-20 text-white/20 text-4xl hidden lg:block z-10"
        animate={{ y: [-8, 8, -8], rotate: [0, 12, -12, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      >
        ✨
      </motion.div>
      <motion.div
        className="absolute top-28 right-1/3 text-white/10 text-5xl hidden lg:block z-10"
        animate={{ y: [-6, 6, -6], rotate: [0, 360] }}
        transition={{ y: { duration: 5, repeat: Infinity, ease: "easeInOut" }, rotate: { duration: 20, repeat: Infinity, ease: "linear" } }}
      >
        👟
      </motion.div>

      {/* Main content */}
      <div ref={ref} className="relative z-20 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-36 pb-28">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="flex flex-col items-center"
        >
          {/* Badge */}
          <motion.div variants={fadeUp} className="mb-8">
            <span className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-white/25 bg-white/10 backdrop-blur-md text-white text-xs sm:text-sm font-bold font-body shadow-lg">
              <SparklesIcon size={16} className="text-[#fbbf24] animate-spin-slow" />
              <span>Shoe My Feet Foundation · Volunteer</span>
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            variants={fadeUp}
            className="font-heading text-4xl sm:text-6xl lg:text-7xl xl:text-8xl font-extrabold text-white leading-[1.05] mb-6 tracking-tight drop-shadow-lg max-w-5xl"
          >
            Be the Reason a Child{" "}
            <span className="relative inline-block">
              <span className="text-warm-orange">
                Walks With Confidence
              </span>
              <svg className="absolute -bottom-2 left-0 w-full h-3 text-warm-orange/60" viewBox="0 0 100 12" preserveAspectRatio="none">
                <path d="M0,0 Q50,12 100,0" fill="none" stroke="currentColor" strokeWidth="4" />
              </svg>
            </span>
          </motion.h1>

          {/* Subtext */}
          <motion.p
            variants={fadeUp}
            className="text-blue-100/90 text-lg sm:text-xl lg:text-2xl font-body leading-relaxed max-w-3xl mb-12"
          >
            Join a community of passionate changemakers who give their time, skills, and heart to put shoes on the feet of children who deserve to walk tall and dream big.
          </motion.p>

          {/* CTAs */}
          <motion.div variants={fadeUp} className="flex flex-col sm:flex-row gap-4 sm:gap-5 justify-center w-full sm:w-auto mb-16">
            <a
              href="#volunteer-form"
              className="btn-orange text-base sm:text-lg px-8 py-4 rounded-full shadow-2xl hover:scale-105 transition-all duration-300 justify-center group"
            >
              <HeartIcon size={20} className="fill-white/30 group-hover:fill-white transition-colors" />
              <span>Become a Volunteer</span>
            </a>
            <a
              href="#volunteer-opportunities"
              className="inline-flex items-center gap-2 justify-center px-8 py-4 rounded-full border border-white/25 bg-white/10 backdrop-blur-md text-white font-bold text-base sm:text-lg hover:bg-white/20 hover:scale-105 transition-all duration-300 group"
            >
              <span>Explore Opportunities</span>
              <ArrowRightIcon size={20} className="group-hover:translate-x-1 transition-transform" />
            </a>
          </motion.div>

          {/* Floating Stat Cards */}
          <motion.div
            variants={fadeUp}
            className="flex flex-col sm:flex-row gap-4 justify-center w-full max-w-2xl"
          >
            {floatingStats.map((stat, i) => (
              <motion.div
                key={stat.label}
                className="flex-1 bg-[#0d1f3c] rounded-2xl px-5 py-4 flex items-center gap-3 hover:scale-105 transition-transform duration-300 cursor-default "
                animate={{ y: [0, -6, 0] }}
                transition={{ duration: 3.5 + i * 0.5, repeat: Infinity, ease: "easeInOut", delay: i * 0.3 }}
              >
                <div className={`w-10 h-10 rounded-xl stat.color flex items-center justify-center text-lg shrink-0 shadow-md`}>
                  {stat.icon}
                </div>
                <div className="text-left">
                  <p className="font-heading font-extrabold text-white text-lg leading-none">{stat.value}</p>
                  <p className="font-body text-white/70 text-xs mt-0.5">{stat.label}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-1.5"
        animate={{ y: [0, 6, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
      >
        <span className="text-white/40 text-xs font-body">Scroll to explore</span>
        <div className="w-5 h-8 rounded-full border-2 border-white/25 flex items-start justify-center pt-1">
          <div className="w-1 h-2 rounded-full bg-white/50" />
        </div>
      </motion.div>

      {/* Bottom wave */}
      <div className="absolute bottom-0 left-0 right-0 z-10 pointer-events-none">
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-12 sm:h-16 text-white">
          <path d="M0,64L60,58.7C120,53,240,43,360,48C480,53,600,75,720,80C840,85,960,75,1080,64C1200,53,1320,43,1380,37.3L1440,32L1440,120L1380,120C1320,120,1200,120,1080,120C960,120,840,120,720,120C600,120,480,120,360,120C240,120,120,120,60,120L0,120Z" fill="currentColor" />
        </svg>
      </div>
    </section>
  );
}
