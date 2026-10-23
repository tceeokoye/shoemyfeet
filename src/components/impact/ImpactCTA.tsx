"use client";

import { motion } from "framer-motion";
import { Footprints } from "lucide-react";
import Link from "next/link";
import { staggerContainer, fadeUp, viewportConfig } from "@/lib/animations";
import { HeartIcon, ArrowRightIcon } from "@/components/ui/Icons";

const footprintPositions = [
  { left: "5%", bottom: "15%", delay: 0, rotate: -20 },
  { left: "12%", bottom: "30%", delay: 0.25, rotate: 12 },
  { left: "19%", bottom: "18%", delay: 0.5, rotate: -8 },
  { left: "26%", bottom: "35%", delay: 0.75, rotate: 5 },
  { left: "72%", bottom: "22%", delay: 0.1, rotate: -15 },
  { left: "79%", bottom: "38%", delay: 0.4, rotate: 10 },
  { left: "86%", bottom: "20%", delay: 0.65, rotate: -5 },
  { left: "93%", bottom: "35%", delay: 0.9, rotate: 8 },
  { left: "50%", bottom: "8%", delay: 0.3, rotate: 0 },
];

export default function ImpactCTA() {
  return (
    <section className="section-padding bg-[#111827] overflow-hidden relative">
      {/* Glowing backgrounds */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/6 w-96 h-96 rounded-full bg-[#1A3A6B]/15 blur-[120px]" />
        <div className="absolute bottom-1/4 right-1/6 w-[400px] h-[400px] rounded-full bg-[#1A3A6B]/12 blur-[140px]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-[#1A3A6B]/5 blur-[160px]" />
      </div>

      {/* Animated footprint trail */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {footprintPositions.map((fp, i) => (
          <motion.div
            key={i}
            className="absolute text-white/10 text-4xl select-none"
            style={{ left: fp.left, bottom: fp.bottom, rotate: fp.rotate }}
            animate={{ y: [0, -20, 0], opacity: [0.05, 0.18, 0.05] }}
            transition={{ duration: 3.5 + i * 0.4, repeat: Infinity, ease: "easeInOut", delay: fp.delay }}
          >
            <Footprints size={32} aria-hidden="true" />
          </motion.div>
        ))}
      </div>

      {/* Floating geometric shapes */}
      <motion.div
        className="absolute top-10 left-10 w-16 h-16 rounded-2xl border-2 border-white/15 glass hidden md:block"
        animate={{ y: [-10, 10, -10], rotate: [0, 10, -10, 0] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-10 right-16 w-12 h-12 rounded-full border-2 border-orange-400/25 glass hidden md:block"
        animate={{ y: [8, -8, 8], scale: [1, 1.06, 1] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          className="flex flex-col items-center"
        >
          {/* Badge */}
          <motion.div variants={fadeUp} className="mb-6">
            <span className="inline-flex items-center gap-2 px-5 py-2 rounded-full border border-white/20 bg-white/10 backdrop-blur-md text-white text-xs sm:text-sm font-bold">
              <HeartIcon size={14} className="fill-orange-400 text-orange-400" />
              Be Part of the Story
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h2
            variants={fadeUp}
            className="font-heading text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-[1.1] mb-6 tracking-tight"
          >
            Your Support Creates{" "}
            <span className="text-[#1A3A6B]">
              Every Success Story
            </span>
          </motion.h2>

          {/* Subtext */}
          <motion.p
            variants={fadeUp}
            className="text-neutral-200/90 text-lg sm:text-xl font-body leading-relaxed max-w-2xl mb-10"
          >
            Every donation, partnership, and volunteer hour helps another child take a confident step toward education, health, and opportunity. Together, we can multiply our impact.
          </motion.p>

          {/* CTAs */}
          <motion.div
            variants={fadeUp}
            className="flex flex-col sm:flex-row gap-4 sm:gap-5 justify-center w-full sm:w-auto"
          >
            <Link
              href="/donate"
              className="btn-primary text-base sm:text-lg px-8 py-4 rounded-[10px] shadow-2xl hover:scale-105 transition-all duration-300 justify-center group"
            >
              <span>Donate Now</span>
            </Link>
            <Link
              href="/volunteer"
              className="btn-secondary border border-white/20 text-base sm:text-lg px-8 py-4 rounded-[10px] backdrop-blur-md hover:scale-105 transition-all duration-300 justify-center group"
            >
              <span>Volunteer With Us</span>
              <ArrowRightIcon size={20} className="group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 text-base sm:text-lg px-8 py-4 rounded-full font-bold font-body text-white border border-white/20 hover:bg-white/10 backdrop-blur-md transition-all duration-300 group hover:scale-105"
            >
              <span>Partner With Us</span>
              <ArrowRightIcon size={20} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>

          {/* Trust indicators */}
          <motion.div
            variants={fadeUp}
            className="mt-12 flex flex-wrap items-center justify-center gap-4 text-xs text-orange-300 font-body"
          >
            {["CAC Registered", "100% Transparent", "Every ₦ Counts", "Impact Verified"].map((item) => (
              <span key={item} className="flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-white/10 bg-white/5">
                <span className="text-emerald-400">✓</span>
                {item}
              </span>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
