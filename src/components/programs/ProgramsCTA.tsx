"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { staggerContainer, fadeUp, viewportConfig } from "@/lib/animations";
import { HeartIcon, ArrowRightIcon } from "@/components/ui/Icons";

export default function ProgramsCTA() {
  return (
    <section className="section-padding bg-[#2563eb] overflow-hidden relative">
      {/* Glowing backgrounds */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/6 w-96 h-96 rounded-full bg-[#f97316]/15 blur-[120px]" />
        <div className="absolute bottom-1/4 right-1/6 w-[400px] h-[400px] rounded-full bg-[#38bdf8]/12 blur-[140px]" />
      </div>

      {/* Animated footprint trail decorations */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute text-white/10 text-4xl select-none"
            style={{
              left: `${10 + i * 11}%`,
              bottom: `${15 + (i % 3) * 12}%`,
            }}
            animate={{
              y: [0, -20, 0],
              opacity: [0.05, 0.18, 0.05],
            }}
            transition={{
              duration: 3 + i * 0.4,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.35,
            }}
          >
            👣
          </motion.div>
        ))}
      </div>

      {/* Floating geometric shapes */}
      <motion.div
        className="absolute top-10 left-10 w-16 h-16 rounded-3xl border-2 border-white/15 glass hidden md:block"
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
          <motion.div variants={fadeUp} className="mb-6">
            <span className="inline-flex items-center gap-2 px-5 py-2 rounded-full border border-white/20 bg-white/10 backdrop-blur-md text-white text-xs sm:text-sm font-bold">
              <HeartIcon size={14} className="fill-orange-400 text-orange-400" />
              Together, We Can Do More
            </span>
          </motion.div>

          <motion.h2
            variants={fadeUp}
            className="font-heading text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-[1.1] mb-6 tracking-tight"
          >
            Every Pair of Shoes Opens the{" "}
            <span className="text-warm-orange">
              Door to Opportunity
            </span>
          </motion.h2>

          <motion.p
            variants={fadeUp}
            className="text-blue-100/90 text-lg sm:text-xl font-body leading-relaxed max-w-2xl mb-10"
          >
            Your generosity helps children walk confidently toward education, health,
            and a brighter future. Every contribution — no matter the size — leaves a lasting footprint.
          </motion.p>

          {/* CTAs */}
          <motion.div
            variants={fadeUp}
            className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center w-full sm:w-auto"
          >
            <Link
              href="/donate"
              className="btn-orange text-base sm:text-lg px-8 py-4 rounded-full shadow-2xl hover:scale-105 transition-all duration-300 justify-center group"
            >
              <span>Donate Today</span>
            </Link>
            <Link
              href="/volunteer"
              className="btn-primary border border-white/20 text-base sm:text-lg px-8 py-4 rounded-full backdrop-blur-md hover:scale-105 transition-all duration-300 justify-center group"
            >
              <span>Join Our Mission</span>
              <ArrowRightIcon size={20} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
