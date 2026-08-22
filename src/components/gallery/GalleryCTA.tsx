"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { HeartIcon, UsersIcon, HeartHandshakeIcon, SparklesIcon } from "@/components/ui/Icons";
import { fadeUp, staggerContainer, viewportConfig } from "@/lib/animations";

const leadingFootprints = [
  { delay: 0, x: -100, y: 30, rotate: -20 },
  { delay: 0.2, x: -50, y: 15, rotate: 10 },
  { delay: 0.4, x: 0, y: 0, rotate: -10 },
  { delay: 0.6, x: 50, y: 15, rotate: 15 },
  { delay: 0.8, x: 100, y: 30, rotate: -15 },
];

export default function GalleryCTA() {
  return (
    <section className="section-padding bg-[#2563eb] text-white relative overflow-hidden">
      {/* Background Orbs */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-orange-500/10 blur-[150px]" />
        <div className="absolute bottom-0 left-0 w-96 h-96 rounded-full bg-blue-400/10 blur-[150px]" />
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
        >
          {/* Badge */}
          <motion.div variants={fadeUp} className="mb-4 inline-block">
            <span className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-white/10 text-hope-yellow text-xs sm:text-sm font-bold font-heading border border-white/20">
              <SparklesIcon size={14} className="text-warm-orange" />
              Make A Difference Today
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h2
            variants={fadeUp}
            className="font-heading text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white mb-6 leading-tight max-w-4xl mx-auto"
          >
            Every Smile Captured Inspires Another{" "}
            <span className="text-warm-orange">
              Act of Kindness
            </span>
          </motion.h2>

          {/* Supporting text */}
          <motion.p
            variants={fadeUp}
            className="text-base sm:text-xl text-blue-100/95 font-body leading-relaxed max-w-3xl mx-auto mb-10"
          >
            These moments are made possible by generous supporters, dedicated volunteers, and caring partners. Join us in creating even more life-changing memories.
          </motion.p>

          {/* Subtle animated footprints leading toward buttons */}
          <div className="relative flex justify-center items-center h-12 mb-6 pointer-events-none">
            {leadingFootprints.map((fp, idx) => (
              <motion.div
                key={idx}
                className="absolute text-white/25 text-2xl select-none"
                style={{
                  transform: `translate(${fp.x}px, ${fp.y}px) rotate(${fp.rotate}deg)`,
                }}
                animate={{
                  opacity: [0.2, 0.8, 0.2],
                  scale: [0.9, 1.1, 0.9],
                }}
                transition={{
                  duration: 2.5,
                  repeat: Infinity,
                  delay: fp.delay,
                  ease: "easeInOut",
                }}
              >
                👣
              </motion.div>
            ))}
          </div>

          {/* Action Buttons */}
          <motion.div variants={fadeUp} className="flex flex-wrap items-center justify-center gap-4 sm:gap-6">
            <Link
              href="/donate"
              className="btn-orange text-base sm:text-lg px-8 py-4 rounded-full shadow-2xl hover:scale-105 transition-all duration-300 inline-flex items-center gap-2"
            >
              <span>Donate Now</span>
            </Link>

            <Link
              href="/volunteer"
              className="btn-primary border border-white/20 text-base sm:text-lg px-8 py-4 rounded-full backdrop-blur-md hover:scale-105 transition-all duration-300 inline-flex items-center gap-2"
            >
              <UsersIcon size={20} />
              <span>Volunteer</span>
            </Link>

            <Link
              href="/contact"
              className="px-8 py-4 rounded-full bg-white/10 hover:bg-white/20 text-white font-heading font-bold text-base border border-white/20 hover:scale-105 transition-all duration-300 inline-flex items-center gap-2"
            >
              <span>Partner With Us</span>
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
