"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { HeartIcon, ArrowRightIcon, MailIcon } from "@/components/ui/Icons";
import { fadeUp, staggerContainer, viewportConfig } from "@/lib/animations";

const footprintTrail = [
  { left: "4%", top: "50%", rotate: -10, delay: 0 },
  { left: "10%", top: "58%", rotate: -14, delay: 0.2 },
  { left: "16%", top: "52%", rotate: -8, delay: 0.4 },
  { left: "22%", top: "62%", rotate: -16, delay: 0.6 },
  { left: "28%", top: "55%", rotate: -12, delay: 0.8 },
  { left: "34%", top: "64%", rotate: -10, delay: 1.0 },
  { left: "68%", top: "35%", rotate: 8, delay: 0.3 },
  { left: "74%", top: "27%", rotate: 12, delay: 0.5 },
  { left: "80%", top: "38%", rotate: 6, delay: 0.7 },
  { left: "86%", top: "30%", rotate: 10, delay: 0.9 },
  { left: "92%", top: "42%", rotate: 8, delay: 1.1 },
];

export default function ContactFinalCTA() {
  return (
    <section className="relative section-padding bg-[#09090b] text-white overflow-hidden" aria-label="Final call to action">
      {/* Background layers */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 rounded-full opacity-10 blur-3xl bg-slate-800" />
        <div className="absolute bottom-0 right-1/4 w-80 h-80 rounded-full opacity-10 blur-3xl bg-orange-400" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full opacity-5 blur-3xl bg-white" />

        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: "transparent 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }}
        />

        {/* Animated footprint trail */}
        {footprintTrail.map((fp, i) => (
          <motion.div
            key={i}
            className="absolute text-2xl select-none"
            style={{ left: fp.left, top: fp.top, rotate: fp.rotate, opacity: 0 }}
            animate={{
              opacity: [0, 0.25, 0.15, 0],
              y: [0, -8, -4, 0],
            }}
            transition={{
              duration: 3.5,
              repeat: Infinity,
              delay: fp.delay + 0.5,
              ease: "easeInOut",
            }}
          >
            👣
          </motion.div>
        ))}
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          className="flex flex-col items-center gap-8"
        >
          {/* Animated Message Icon */}
          <motion.div variants={fadeUp} className="relative">
            <motion.div
              className="w-24 h-24 rounded-full bg-[#f97316] flex items-center justify-center shadow-2xl shadow-orange-500/30 text-white"
              animate={{ scale: [1, 1.06, 1] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            >
              <MailIcon size={40} />
            </motion.div>
            <div className="absolute inset-0 rounded-full border-2 border-orange-400/40 animate-pulse-ring" />
            <div className="absolute inset-0 rounded-full border-2 border-orange-400/20 animate-pulse-ring" style={{ animationDelay: "0.7s" }} />
          </motion.div>

          <motion.span variants={fadeUp} className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white/10 border border-white/20 text-white font-bold text-sm">
            💬 We Want to Hear From You
          </motion.span>

          <motion.h2 variants={fadeUp} className="font-heading text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold leading-[1.1] text-white">
            Every Conversation Can Change{" "}
            <span className="text-warm-orange">a Child&apos;s Future</span>
          </motion.h2>

          <motion.p variants={fadeUp} className="text-neutral-300 font-body text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
            Whether you&apos;re reaching out to ask a question, offer support, volunteer your time, or partner with us, we&apos;re excited to connect with you. Together, we can ensure every child walks confidently toward a brighter future.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div variants={fadeUp} className="flex flex-col sm:flex-row gap-4 justify-center w-full max-w-2xl">
            <a href="#contact-form" className="btn-orange text-base py-4 px-8 flex-1 justify-center group">
              <MailIcon size={18} className="text-white group-hover:scale-110 transition-transform" />
              Contact Us Today
              <ArrowRightIcon size={16} className="group-hover:translate-x-1 transition-transform" />
            </a>
            <Link href="/volunteer" className="flex-1 py-4 px-8 rounded-full font-bold font-body text-base text-white border-2 border-white/30 hover:bg-white/10 hover:border-white/50 transition-all flex items-center justify-center gap-2">
              Become a Volunteer
            </Link>
            <Link href="/donate" className="flex-1 py-4 px-8 rounded-full font-bold font-body text-base text-white border-2 border-white/10 hover:bg-white/5 hover:border-white/20 transition-all flex items-center justify-center gap-2">
              Donate Now
            </Link>
          </motion.div>

          <motion.p variants={fadeUp} className="text-xs text-orange-400 font-body">
            🔒 CAC Registered Nonprofit Organization in Nigeria. All inquiries strictly confidential.
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}
