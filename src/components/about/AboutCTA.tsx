"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Link from "next/link";
import { fadeUp, staggerContainer } from "@/lib/animations";
import { HeartIcon, ArrowRightIcon, SparklesIcon } from "@/components/ui/Icons";

export default function AboutCTA() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <section className="section-padding relative overflow-hidden bg-[#111827] text-white border-t border-white/10">
      {/* Background ambient lighting */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-96 h-96 rounded-full bg-[#1A3A6B]/10 blur-[130px] animate-pulse" />
        <div className="absolute bottom-0 right-1/4 w-80 h-80 rounded-full bg-black/5 blur-[110px] animate-pulse" />
      </div>

      {/* Floating subtle animated shapes */}
      <motion.div
        className="absolute top-12 left-10 w-12 h-12  border border-white/20 bg-white/5 backdrop-blur-md hidden md:block"
        animate={{ y: [-12, 12, -12], rotate: [0, 15, -15, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-16 right-14 w-16 h-16 rounded-full border border-orange-400/30 bg-[#1A3A6B]/10 backdrop-blur-md hidden md:block"
        animate={{ y: [10, -10, 10], scale: [1, 1.1, 1] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute top-1/4 right-1/6 text-[#142E56]/40 text-3xl hidden lg:block"
        animate={{ rotate: [0, 360] }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
      >
        ✦
      </motion.div>

      {/* Main Content */}
      <div ref={ref} className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="flex flex-col items-center"
        >
          {/* Badge */}
          <motion.div variants={fadeUp} className="mb-6">
            <span className="inline-flex items-center gap-2 px-5 py-2 rounded-full border border-white/20 bg-white/10 backdrop-blur-md text-white text-xs sm:text-sm font-bold font-body shadow-lg">
              <SparklesIcon size={16} className="text-[#1A3A6B] animate-spin-slow" />
              Make a Difference Today
            </span>
          </motion.div>

          {/* Requested Headline */}
          <motion.h2
            variants={fadeUp}
            className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6 max-w-4xl"
          >
            Together We Can{" "}
            <span className="text-[#1A3A6B]">
              Change a Child&apos;s Story
            </span>
          </motion.h2>

          {/* Requested Supporting Text */}
          <motion.p
            variants={fadeUp}
            className="text-neutral-200/90 text-lg sm:text-xl font-body leading-relaxed max-w-3xl mb-10"
          >
            Whether you donate $20 for a child&apos;s first pair of school shoes, volunteer at an outreach event, or partner as an organization — your involvement creates immediate, lifelong impact.
          </motion.p>

          {/* Requested Buttons: Donate Now & Become a Volunteer */}
          <motion.div variants={fadeUp} className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center w-full sm:w-auto">
            <Link
              href="/donate"
              className="btn-primary text-base sm:text-lg px-8 py-4 rounded-[10px] shadow-2xl hover:scale-105 transition-all duration-300 justify-center group"
            >
              <span>Donate Now</span>
              <ArrowRightIcon size={18} className="group-hover:translate-x-1 transition-transform" />
            </Link>

            <Link
              href="/volunteer"
              className="btn-secondary border border-white/20 text-base sm:text-lg px-8 py-4 rounded-[10px] backdrop-blur-md hover:scale-105 transition-all duration-300 justify-center group"
            >
              <span>Become a Volunteer</span>
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
