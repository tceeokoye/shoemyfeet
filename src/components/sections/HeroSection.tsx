"use client";

import { useRef, useEffect, useState } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Play, ChevronDown } from "lucide-react";
import { fadeUp, staggerContainer, float, blurReveal, viewportConfig } from "@/lib/animations";
import { IMPACT_STATS } from "@/lib/constants";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import Image from "next/image";

function StatCard({ stat, index }: { stat: (typeof IMPACT_STATS)[0]; index: number }) {
  const { ref, inView } = useInView({ threshold: 0.3, triggerOnce: true });

  return (
    <motion.div
      ref={ref}
      className="glass rounded-2xl px-5 py-4 text-center border border-white/30 shadow-lg hover:shadow-xl transition-shadow"
      variants={fadeUp}
      whileHover={{ y: -4, scale: 1.03 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
    >
      <div className={`text-3xl font-heading font-bold stat.color bg-clip-text text-transparent`}>
        {inView ? (
          <CountUp end={stat.value} duration={2.5} separator="," />
        ) : (
          "0"
        )}
        {stat.suffix}
      </div>
      <div className="text-xs text-gray-600 font-body mt-1 leading-tight max-w-[100px] mx-auto">
        {stat.label}
      </div>
    </motion.div>
  );
}

export default function HeroSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springX = useSpring(mouseX, { stiffness: 50, damping: 20 });
  const springY = useSpring(mouseY, { stiffness: 50, damping: 20 });

  const blob1X = useTransform(springX, [-0.5, 0.5], [-20, 20]);
  const blob1Y = useTransform(springY, [-0.5, 0.5], [-20, 20]);
  const blob2X = useTransform(springX, [-0.5, 0.5], [15, -15]);
  const blob2Y = useTransform(springY, [-0.5, 0.5], [15, -15]);
  const illustrationX = useTransform(springX, [-0.5, 0.5], [-10, 10]);
  const illustrationY = useTransform(springY, [-0.5, 0.5], [-8, 8]);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    mouseX.set((e.clientX - rect.left) / rect.width - 0.5);
    mouseY.set((e.clientY - rect.top) / rect.height - 0.5);
  };

  return (
    <section
      ref={containerRef}
      onMouseMove={handleMouseMove}
      className="relative min-h-screen flex items-center overflow-hidden bg-[#f8fafc] pt-20"
      aria-label="Hero section"
    >
      {/* Animated gradient background */}
      <div className="absolute inset-0">
        {/* Blobs */}
        <motion.div
          className="absolute top-10 left-10 w-96 h-96 rounded-full opacity-30 animate-blob"
          style={{ x: blob1X, y: blob1Y, background: "#f97316" }}
        />
        <motion.div
          className="absolute bottom-20 right-20 w-80 h-80 rounded-full opacity-25 animate-blob-slow"
          style={{ x: blob2X, y: blob2Y, background: "#f97316" }}
          />
        <motion.div
          className="absolute top-1/2 left-1/3 w-48 h-48 rounded-full opacity-20 animate-blob"
          style={{ background: "#f97316", animationDelay: "3s" }}
        />

        {/* Animated footprints */}
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute opacity-10"
            style={{
              left: `${15 + i * 13}%`,
              top: `${30 + (i % 3) * 20}%`,
            }}
            animate={{ opacity: [0.05, 0.2, 0.05], y: [0, -15, 0] }}
            transition={{ duration: 3, repeat: Infinity, delay: i * 0.5, ease: "easeInOut" }}
          >
            <svg viewBox="0 0 24 32" className="w-6 h-8 fill-[#f97316]">
              <ellipse cx="12" cy="10" rx="7" ry="9" />
              <ellipse cx="7" cy="22" rx="3.5" ry="4" />
              <ellipse cx="17" cy="22" rx="3.5" ry="4" />
            </svg>
          </motion.div>
        ))}

        {/* Particles */}
        {[...Array(12)].map((_, i) => (
          <motion.div
            key={`particle-${i}`}
            className="absolute rounded-full"
            style={{
              width: Math.random() * 6 + 3,
              height: Math.random() * 6 + 3,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              background: i % 3 === 0 ? "#f97316" : i % 3 === 1 ? "#f97316" : "#fbbf24",
              opacity: 0.3,
            }}
            animate={{
              y: [0, -20, 0],
              opacity: [0.2, 0.5, 0.2],
            }}
            transition={{
              duration: 3 + Math.random() * 3,
              repeat: Infinity,
              delay: Math.random() * 2,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center min-h-[calc(100vh-5rem)] py-16">

          {/* Left: Text Content */}
          <motion.div
            className="flex flex-col gap-6"
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
          >
            {/* Badge */}
            <motion.div variants={fadeUp} className="inline-flex">
              <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-orange-100 text-[#f97316] text-sm font-bold border border-slate-200">
                <span className="w-2 h-2 rounded-full bg-[#f97316] animate-pulse" />
                Nigerian Nonprofit • Founded 2022
              </span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              variants={blurReveal}
              className="font-heading text-5xl sm:text-6xl lg:text-7xl font-bold leading-[1.05] text-[#1a1a2e]"
            >
              Every Child{" "}
              <span className="text-warm-orange">Deserves</span>{" "}
              To Walk Into{" "}
              <span className="relative inline-block">
                Their Future
                <motion.span
                  className="absolute -bottom-1 left-0 h-1 bg-[#f97316] rounded-full"
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ delay: 1, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                  style={{ originX: 0, width: "100%" }}
                />
              </span>{" "}
              With Confidence.
            </motion.h1>

            {/* Subheading */}
            <motion.p
              variants={fadeUp}
              className="text-lg text-gray-600 font-body max-w-lg leading-relaxed"
            >
              A simple pair of shoes can change a child&apos;s life. Together we&apos;re
              restoring dignity, protecting health, and keeping children in
              school across Nigeria.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              variants={fadeUp}
              className="flex flex-wrap gap-3 items-center"
            >
              <Link href="#donate" className="btn-orange group">
                Donate Now
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link href="#volunteer" className="btn-primary group">
                Become a Volunteer
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </Link>
              <button className="flex items-center gap-2 px-5 py-3 rounded-full font-bold text-gray-700 hover:text-[#f97316] hover:bg-slate-50 transition-all group">
                <span className="w-10 h-10 flex items-center justify-center rounded-full bg-white shadow-md border border-gray-100 group-hover:shadow-lg transition-shadow">
                  <Play size={14} className="ml-0.5 fill-[#f97316] text-[#f97316]" />
                </span>
                Watch Our Story
              </button>
            </motion.div>

            {/* Impact stats */}
            <motion.div
              variants={staggerContainer}
              className="grid grid-cols-2 sm:grid-cols-4 gap-3 mt-4"
            >
              {IMPACT_STATS.map((stat, index) => (
                <StatCard key={stat.label} stat={stat} index={index} />
              ))}
            </motion.div>
          </motion.div>

          {/* Right: Illustration */}
          <motion.div
            className="relative flex items-center justify-center lg:justify-end"
            style={{ x: illustrationX, y: illustrationY }}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          >
            {/* Main illustration frame */}
            <div className="relative w-full max-w-lg">
              {/* Background glow */}
              <div className="absolute inset-0 bg-[#09090b] rounded-3xl blur-3xl scale-110" />

              {/* Main image */}
              <motion.div
                className="relative rounded-3xl overflow-hidden shadow-2xl border border-white/50"
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 200, damping: 20 }}
              >
                <Image
                  src="/images/hero.jpg"
                  alt="Happy Nigerian children receiving school shoes, smiling with joy and confidence"
                  width={600}
                  height={400}
                  className="w-full h-auto object-cover"
                  priority
                />
                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-[#09090b]" />
              </motion.div>

              {/* Floating glass card - Impact */}
              <motion.div
                className="absolute -bottom-6 -left-6 glass rounded-2xl px-4 py-3 shadow-xl border border-white/40"
                animate={{ y: [-4, 4, -4] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-[#09090b] flex items-center justify-center">
                    <span className="text-lg">👟</span>
                  </div>
                  <div>
                    <div className="font-heading font-bold text-[#f97316] text-lg">6,500+</div>
                    <div className="text-xs text-gray-500 font-body">Shoes Given</div>
                  </div>
                </div>
              </motion.div>

              {/* Floating glass card - Community */}
              <motion.div
                className="absolute -top-4 -right-4 glass rounded-2xl px-4 py-3 shadow-xl border border-white/40"
                animate={{ y: [4, -4, 4] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-[#09090b] flex items-center justify-center">
                    <span className="text-lg">🏘️</span>
                  </div>
                  <div>
                    <div className="font-heading font-bold text-[#f97316] text-lg">18+</div>
                    <div className="text-xs text-gray-500 font-body">Communities</div>
                  </div>
                </div>
              </motion.div>

              {/* Floating emoji elements */}
              <motion.div
                className="absolute top-1/4 -left-8 text-3xl"
                animate={{ rotate: [0, 10, -10, 0], y: [-5, 5, -5] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              >
                📚
              </motion.div>
              <motion.div
                className="absolute bottom-1/3 -right-6 text-2xl"
                animate={{ rotate: [0, -10, 10, 0], y: [5, -5, 5] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
              >
                ⭐
              </motion.div>
              <motion.div
                className="absolute top-2/3 -right-10 text-3xl"
                animate={{ y: [-8, 8, -8] }}
                transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
              >
                🎒
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
        >
          <span className="text-xs text-gray-400 font-body tracking-widest uppercase">Scroll</span>
          <div className="w-6 h-10 border-2 border-gray-300 rounded-full flex justify-center p-1">
            <motion.div
              className="w-1.5 h-1.5 bg-[#f97316] rounded-full"
              animate={{ y: [0, 14, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            />
          </div>
          {/* Footprint arrows */}
          {[0, 1, 2].map((i) => (
            <motion.div
              key={i}
              className="opacity-30"
              animate={{ opacity: [0.2, 0.6, 0.2] }}
              transition={{ duration: 1, repeat: Infinity, delay: i * 0.2 }}
            >
              <ChevronDown size={14} className="text-[#f97316]" />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
