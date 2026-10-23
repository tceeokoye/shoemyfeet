"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRightIcon } from "@/components/ui/Icons";
import { Footprints, Sparkles } from "lucide-react";

const footprintTrail = [
  { left: "5%", top: "30%", delay: 0, rotate: -20 },
  { left: "12%", top: "55%", delay: 0.3, rotate: 15 },
  { left: "20%", top: "25%", delay: 0.6, rotate: -8 },
  { left: "30%", top: "60%", delay: 0.9, rotate: 12 },
  { left: "42%", top: "20%", delay: 1.2, rotate: -5 },
  { left: "55%", top: "65%", delay: 1.5, rotate: 10 },
  { left: "65%", top: "28%", delay: 1.8, rotate: -15 },
  { left: "75%", top: "58%", delay: 2.1, rotate: 8 },
  { left: "85%", top: "22%", delay: 2.4, rotate: -10 },
  { left: "93%", top: "50%", delay: 2.7, rotate: 5 },
];

export default function VolunteerFinalCTA() {
  return (
    <section
      id="volunteer-cta"
      className="relative section-padding bg-[#111827] overflow-hidden"
    >
      {/* Ambient glows */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute top-1/3 left-1/5 w-[500px] h-[500px] rounded-full bg-[#1A3A6B]/12 blur-[150px]" />
        <div className="absolute bottom-1/3 right-1/5 w-[400px] h-[400px] rounded-full bg-[#1A3A6B]/8 blur-[130px]" />
        <div className="absolute top-0 right-0 w-64 h-64 rounded-full bg-[#1A3A6B]/10 blur-[100px]" />
      </div>

      {/* Animated footprint trail */}
      <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
        {footprintTrail.map((fp, i) => (
          <motion.div
            key={i}
            className="absolute text-white/8 text-2xl select-none"
            style={{ left: fp.left, top: fp.top, rotate: fp.rotate }}
            animate={{
              y: [0, -16, 0],
              opacity: [0.04, 0.16, 0.04],
              scale: [1, 1.15, 1],
            }}
            transition={{
              duration: 4 + i * 0.3,
              repeat: Infinity,
              ease: "easeInOut",
              delay: fp.delay,
            }}
          >
            <Footprints size={22} aria-hidden="true" />
          </motion.div>
        ))}
      </div>

      {/* Floating sparkles */}
      {[...Array(6)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute text-[#1A3A6B]/20 select-none pointer-events-none"
          style={{
            fontSize: `${14 + (i % 3) * 8}px`,
            left: `${15 + i * 14}%`,
            top: `${10 + (i % 4) * 20}%`,
          }}
          animate={{ rotate: [0, 360] }}
          transition={{ duration: 10 + i * 3, repeat: Infinity, ease: "linear", delay: i * 0.5 }}
        >
          <Sparkles size={18} aria-hidden="true" />
        </motion.div>
      ))}

      {/* Main content */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col items-center"
        >
          {/* Icon */}
          <motion.div
            className="w-20 h-20 rounded-full bg-[#1A3A6B] flex items-center justify-center text-4xl shadow-2xl mb-8"
            animate={{ scale: [1, 1.08, 1], rotate: [0, 5, -5, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          >
            <Footprints size={34} className="text-white" strokeWidth={1.8} aria-hidden="true" />
          </motion.div>

          {/* Headline */}
          <h2 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-[1.1] mb-6 tracking-tight drop-shadow-lg">
            Your Time Can Change a{" "}
            <span className="relative inline-block">
              <span className="text-[#1A3A6B]">
                Child&apos;s Future
              </span>
              <svg className="absolute -bottom-1.5 left-0 w-full h-3 text-[#1A3A6B]/50" viewBox="0 0 100 12" preserveAspectRatio="none">
                <path d="M0,0 Q50,12 100,0" fill="none" stroke="currentColor" strokeWidth="4" />
              </svg>
            </span>
          </h2>

          {/* Subtext */}
          <p className="font-body text-neutral-200/80 text-lg sm:text-xl leading-relaxed max-w-2xl mb-10">
            One volunteer. One child. One step. That&apos;s all it takes to begin. The children of Nigeria are waiting — and they&apos;re worth every moment you give.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-5 justify-center w-full sm:w-auto">
            <a
              href="#volunteer-form"
              className="btn-primary text-base sm:text-lg px-8 py-4 rounded-[10px] shadow-2xl hover:scale-105 transition-all duration-300 justify-center inline-flex items-center gap-2"
            >
              Apply to Volunteer
            </a>
            <a
              href="/contact"
              className="inline-flex items-center gap-2 justify-center px-8 py-4 rounded-full border border-white/25 bg-white/10 backdrop-blur-md text-white font-bold text-base sm:text-lg hover:bg-white/20 hover:scale-105 transition-all duration-300"
            >
              Contact Our Team
              <ArrowRightIcon size={18} className="group-hover:translate-x-1 transition-transform" />
            </a>
            <Link
              href="/donate"
              className="inline-flex items-center gap-2 justify-center px-8 py-4 rounded-full border border-[#1A3A6B]/40 bg-[#1A3A6B]/10 text-[#1A3A6B] font-bold text-base sm:text-lg hover:bg-[#1A3A6B]/20 hover:scale-105 transition-all duration-300"
            >
              Donate Instead
            </Link>
          </div>

          {/* Social proof */}
          <motion.div
            className="mt-12 flex flex-wrap items-center justify-center gap-6 sm:gap-8"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5, duration: 0.6 }}
          >
            {[
              { value: "480+", label: "Volunteers" },
              { value: "24,000+", label: "Hours Given" },
              { value: "14,000+", label: "Children Impacted" },
              { value: "78%", label: "Return Rate" },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <p className="font-heading text-2xl sm:text-3xl font-extrabold text-white">{stat.value}</p>
                <p className="font-body text-orange-300/70 text-xs font-semibold">{stat.label}</p>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
