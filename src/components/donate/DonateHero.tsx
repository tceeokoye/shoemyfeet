"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { HeartIcon, ArrowRightIcon, ChevronDownIcon, SparklesIcon } from "@/components/ui/Icons";
import { fadeUp, staggerContainer } from "@/lib/animations";

const staticParticles = [
  { width: 6, height: 6, left: "12%", top: "20%", color: "#f97316", duration: 4.2, delay: 0 },
  { width: 8, height: 8, left: "78%", top: "15%", color: "#fbbf24", duration: 5.1, delay: 0.6 },
  { width: 5, height: 5, left: "35%", top: "75%", color: "#f97316", duration: 3.8, delay: 1.1 },
  { width: 7, height: 7, left: "88%", top: "60%", color: "#f97316", duration: 4.7, delay: 0.3 },
  { width: 4, height: 4, left: "8%",  top: "82%", color: "#fbbf24", duration: 3.5, delay: 1.4 },
  { width: 9, height: 9, left: "52%", top: "10%", color: "#f97316", duration: 5.5, delay: 0.8 },
  { width: 6, height: 6, left: "25%", top: "40%", color: "#f97316", duration: 4.0, delay: 0.2 },
  { width: 5, height: 5, left: "68%", top: "88%", color: "#fbbf24", duration: 4.3, delay: 0.9 },
];

const footprintPositions = [
  { left: "8%",  top: "55%",  rotate: -15, delay: 0 },
  { left: "14%", top: "62%",  rotate: -18, delay: 0.3 },
  { left: "20%", top: "58%",  rotate: -12, delay: 0.6 },
  { left: "26%", top: "65%",  rotate: -20, delay: 0.9 },
  { left: "32%", top: "60%",  rotate: -15, delay: 1.2 },
  { left: "38%", top: "67%",  rotate: -18, delay: 1.5 },
  { left: "68%", top: "20%",  rotate: 10,  delay: 0.2 },
  { left: "74%", top: "14%",  rotate: 8,   delay: 0.5 },
  { left: "80%", top: "22%",  rotate: 12,  delay: 0.8 },
  { left: "86%", top: "16%",  rotate: 6,   delay: 1.1 },
];

const HEADLINE_WORDS = [
  { word: "Every",      direction: { x: -70, y: -50, rotate: -12 } },
  { word: "Donation",   direction: { x: 80,  y: -60, rotate: 14  }, gradient: true },
  { word: "Helps",      direction: { x: -80, y: 45,  rotate: -18 } },
  { word: "a",          direction: { x: 60,  y: -40, rotate: 10  } },
  { word: "Child",      direction: { x: -60, y: -70, rotate: -10 } },
  { word: "Take",       direction: { x: 90,  y: 55,  rotate: 16  } },
  { word: "the",        direction: { x: -50, y: -35, rotate: -8  } },
  { word: "Next",       direction: { x: 85,  y: -65, rotate: 15  } },
  { word: "Step",       direction: { x: -75, y: 60,  rotate: -14 }, highlight: true },
];

export default function DonateHero() {
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsReady(true), 200);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section
      className="relative min-h-screen flex items-center overflow-hidden bg-[#09090b] pt-28 pb-16 sm:pt-32 lg:py-24"
      aria-label="Donate hero section"
    >
      {/* Background elements */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          className="absolute top-10 left-8 w-[450px] h-[450px] rounded-full opacity-25 animate-blob"
          style={{ background: "#f97316" }}
        />
        <motion.div
          className="absolute bottom-12 right-12 w-[380px] h-[380px] rounded-full opacity-20 animate-blob-slow"
          style={{ background: "#f97316" }}
        />
        <motion.div
          className="absolute top-1/3 right-1/4 w-64 h-64 rounded-full opacity-15"
          style={{ background: "#f97316" }}
          animate={{ scale: [1, 1.2, 1], opacity: [0.15, 0.25, 0.15] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />

        {/* Animated floating particles */}
        {staticParticles.map((p, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full"
            style={{ width: p.width, height: p.height, left: p.left, top: p.top, background: p.color, opacity: 0.3 }}
            animate={{ y: [0, -20, 0], opacity: [0.2, 0.55, 0.2] }}
            transition={{ duration: p.duration, repeat: Infinity, delay: p.delay, ease: "easeInOut" }}
          />
        ))}

        {/* Decorative footprints */}
        {footprintPositions.map((fp, i) => (
          <motion.div
            key={`fp-${i}`}
            className="absolute text-xl select-none"
            style={{ left: fp.left, top: fp.top, rotate: fp.rotate, opacity: 0 }}
            animate={{ opacity: [0, 0.18, 0], scale: [0.7, 1.1, 0.9] }}
            transition={{ duration: 4, repeat: Infinity, delay: fp.delay + 1, ease: "easeInOut" }}
          >
            👣
          </motion.div>
        ))}
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-center">

          {/* Left: Text Content */}
          <div className="lg:col-span-7 flex flex-col gap-6">

            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={isReady ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange-500/20 border border-orange-500/40 text-amber-300 font-bold text-sm w-fit"
            >
              <SparklesIcon size={14} className="text-amber-300" />
              Make a Difference Today
            </motion.div>

            {/* Headline */}
            <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-[1.1] text-white flex flex-wrap gap-x-[0.25em] gap-y-1">
              {HEADLINE_WORDS.map((item, index) => (
                <motion.span
                  key={`${item.word}-${isReady}`}
                  initial={{ opacity: 0, x: item.direction.x, y: item.direction.y, rotate: item.direction.rotate, scale: 0.5, filter: "blur(8px)" }}
                  animate={isReady ? { opacity: 1, x: 0, y: 0, rotate: 0, scale: 1, filter: "blur(0px)" } : {}}
                  transition={{ duration: 0.85, delay: 0.2 + index * 0.08, ease: [0.16, 1, 0.3, 1] }}
                  className={`inline-block relative will-change-transform ${item.gradient ? "text-warm-orange" : ""} ${item.highlight ? "text-amber-400" : ""}`}
                >
                  {item.word}
                  {item.highlight && (
                    <motion.span
                      className="absolute -bottom-1.5 left-0 h-1.5 bg-[#f97316] rounded-full"
                      initial={{ scaleX: 0 }}
                      animate={isReady ? { scaleX: 1 } : { scaleX: 0 }}
                      transition={{ delay: HEADLINE_WORDS.length * 0.08 + 0.4, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                      style={{ originX: 0, width: "100%" }}
                    />
                  )}
                </motion.span>
              ))}
            </h1>

            {/* Sub-text */}
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={isReady ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: HEADLINE_WORDS.length * 0.08 + 0.4, ease: [0.22, 1, 0.36, 1] }}
              className="text-base sm:text-lg text-neutral-200/90 font-body max-w-xl leading-relaxed"
            >
              Your generosity provides more than a pair of shoes — it gives a child confidence, protection, dignity, and the opportunity to learn, play, and dream without limits.
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isReady ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: HEADLINE_WORDS.length * 0.08 + 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="flex flex-wrap gap-3.5 items-center pt-2"
            >
              <a
                href="#donate-widget"
                className="btn-orange text-base group"
              >
                Donate Now
                <ArrowRightIcon size={16} className="group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="#impact-calculator"
                className="btn-outline text-base text-white border-2 border-white/30 hover:bg-white/10 transition-all font-body"
              >
                See Your Impact
              </a>
            </motion.div>

            {/* Trust Badges */}
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              animate={isReady ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: HEADLINE_WORDS.length * 0.08 + 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="flex flex-wrap gap-3 pt-4 border-t border-white/15 mt-2"
            >
              {[
                { icon: "🔒", label: "SSL Secured" },
                { icon: "✅", label: "CAC Registered" },
                { icon: "💳", label: "Paystack & Stripe" },
                { icon: "🧾", label: "Receipt Provided" },
              ].map((badge) => (
                <span key={badge.label} className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/10 border border-white/20 text-xs text-neutral-200 font-body font-semibold shadow-sm">
                  {badge.icon} {badge.label}
                </span>
              ))}
            </motion.div>
          </div>

          {/* Right: Decorative visual */}
          <div className="lg:col-span-5 relative flex items-center justify-center">
            <motion.div
              initial={{ opacity: 0, x: 80, scale: 0.9 }}
              animate={isReady ? { opacity: 1, x: 0, scale: 1 } : {}}
              transition={{ duration: 1, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="relative w-full max-w-sm mx-auto"
            >
              {/* Glow background */}
              <div className="absolute inset-0 bg-[#09090b] rounded-3xl blur-3xl scale-110" />

              {/* Main card */}
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-white/80 bg-white p-8">
                {/* Animated heart */}
                <motion.div
                  className="flex items-center justify-center mb-6"
                  animate={{ scale: [1, 1.06, 1] }}
                  transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                >
                  <div className="w-24 h-24 rounded-full bg-[#09090b] flex items-center justify-center shadow-2xl shadow-orange-500/30">
                    <span className="text-5xl">❤️</span>
                  </div>
                </motion.div>

                <h2 className="font-heading text-2xl font-bold text-[#1a1a2e] text-center mb-2">Join 10,000+ Donors</h2>
                <p className="text-sm text-gray-500 font-body text-center mb-6">Together we&apos;ve changed thousands of lives</p>

                {/* Impact counters */}
                <div className="grid grid-cols-2 gap-3">
                  {[
                    { value: "6,500+", label: "Shoes Given", icon: "👟" },
                    { value: "4,200+", label: "Children Helped", icon: "👧" },
                    { value: "38+", label: "Communities", icon: "🏘️" },
                    { value: "12+", label: "States Reached", icon: "🗺️" },
                  ].map((stat) => (
                    <motion.div
                      key={stat.label}
                      className="bg-slate-50 rounded-2xl p-3 text-center border border-slate-100"
                      whileHover={{ scale: 1.04 }}
                    >
                      <span className="text-2xl">{stat.icon}</span>
                      <div className="font-heading font-bold text-lg text-[#0a0a0a] leading-none mt-1">{stat.value}</div>
                      <div className="text-[10px] text-slate-800 font-body font-semibold mt-0.5">{stat.label}</div>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Floating badges */}
              <motion.div
                className="absolute -top-4 -right-4 glass rounded-2xl p-3 shadow-xl border border-white/60 flex items-center gap-2 z-10"
                animate={{ y: [-5, 5, -5] }}
                transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
              >
                <span className="text-xl">🎉</span>
                <div>
                  <div className="font-heading font-bold text-[#0a0a0a] text-xs">New Donor</div>
                  <div className="text-[10px] text-slate-700 font-body font-medium">Just donated ₦10,000</div>
                </div>
              </motion.div>
              <motion.div
                className="absolute -bottom-4 -left-4 glass rounded-2xl p-3 shadow-xl border border-white/60 flex items-center gap-2 z-10"
                animate={{ y: [5, -5, 5] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              >
                <span className="text-xl">🙏</span>
                <div>
                  <div className="font-heading font-bold text-[#0a0a0a] text-xs">Thank You!</div>
                  <div className="text-[10px] text-slate-700 font-body font-medium">1 child helped today</div>
                </div>
              </motion.div>
            </motion.div>
          </div>

        </div>

        {/* Scroll indicator */}
        <motion.div
          className="hidden sm:flex flex-col items-center gap-1.5 mt-12"
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <span className="text-[10px] text-neutral-300/80 font-body tracking-widest uppercase font-semibold">Scroll to give</span>
          <ChevronDownIcon size={16} className="text-warm-orange" />
        </motion.div>
      </div>
    </section>
  );
}
