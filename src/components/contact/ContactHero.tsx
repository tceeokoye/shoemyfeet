"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { MailIcon, MapPinIcon, ArrowRightIcon, HeartIcon } from "@/components/ui/Icons";
import { fadeUp, staggerContainer } from "@/lib/animations";

const staticParticles = [
  { width: 6, height: 6, left: "10%", top: "25%", color: "#f97316", duration: 4.2, delay: 0 },
  { width: 8, height: 8, left: "82%", top: "18%", color: "#fbbf24", duration: 5.0, delay: 0.5 },
  { width: 5, height: 5, left: "38%", top: "72%", color: "#1a3a6b", duration: 3.6, delay: 1.0 },
  { width: 7, height: 7, left: "90%", top: "65%", color: "#f97316", duration: 4.5, delay: 0.3 },
  { width: 4, height: 4, left: "6%", top: "80%", color: "#fbbf24", duration: 3.8, delay: 1.2 },
  { width: 9, height: 9, left: "55%", top: "12%", color: "#1a3a6b", duration: 5.2, delay: 0.7 },
];

const footprintPositions = [
  { left: "10%", top: "58%", rotate: -15, delay: 0 },
  { left: "16%", top: "64%", rotate: -18, delay: 0.3 },
  { left: "22%", top: "60%", rotate: -12, delay: 0.6 },
  { left: "28%", top: "67%", rotate: -20, delay: 0.9 },
  { left: "72%", top: "22%", rotate: 10, delay: 0.2 },
  { left: "78%", top: "16%", rotate: 8, delay: 0.5 },
  { left: "84%", top: "24%", rotate: 12, delay: 0.8 },
];

const HEADLINE_WORDS = [
  { word: "Let's", direction: { x: -70, y: -50, rotate: -12 } },
  { word: "Make", direction: { x: 80, y: -60, rotate: 14 } },
  { word: "Every", direction: { x: -80, y: 45, rotate: -18 }, gradient: true },
  { word: "Step", direction: { x: 60, y: -40, rotate: 10 }, gradient: true },
  { word: "Count", direction: { x: -60, y: -70, rotate: -10 } },
  { word: "Together", direction: { x: 90, y: 55, rotate: 16 }, highlight: true },
];

export default function ContactHero() {
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsReady(true), 200);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section
      className="relative min-h-[85vh] flex items-center overflow-hidden bg-[#f8fafc] pt-28 pb-16 sm:pt-32 lg:py-24"
      aria-label="Contact hero section"
    >
      {/* Background Glows & Floating Particles */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          className="absolute top-10 left-8 w-[450px] h-[450px] rounded-full opacity-25 animate-blob"
          style={{ background: "#1a3a6b" }}
        />
        <motion.div
          className="absolute bottom-12 right-12 w-[380px] h-[380px] rounded-full opacity-20 animate-blob-slow"
          style={{ background: "#1a3a6b" }}
        />

        {staticParticles.map((p, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full"
            style={{ width: p.width, height: p.height, left: p.left, top: p.top, background: p.color, opacity: 0.3 }}
            animate={{ y: [0, -20, 0], opacity: [0.2, 0.55, 0.2] }}
            transition={{ duration: p.duration, repeat: Infinity, delay: p.delay, ease: "easeInOut" }}
          />
        ))}

        {footprintPositions.map((fp, i) => (
          <motion.div
            key={`fp-${i}`}
            className="absolute text-xl select-none"
            style={{ left: fp.left, top: fp.top, rotate: fp.rotate, opacity: 0 }}
            animate={{ opacity: [0, 0.2, 0], scale: [0.7, 1.1, 0.9] }}
            transition={{ duration: 4, repeat: Infinity, delay: fp.delay + 1, ease: "easeInOut" }}
          >
            👣
          </motion.div>
        ))}
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Text & Buttons */}
          <div className="lg:col-span-7 flex flex-col gap-6">
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={isReady ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-100 border border-blue-200 text-royal-blue font-bold text-sm w-fit"
            >
              <MailIcon size={14} className="text-royal-blue" />
              We&apos;re Here to Listen & Help
            </motion.div>

            {/* Animated Headline */}
            <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-[1.1] text-[#1a1a2e] flex flex-wrap gap-x-[0.25em] gap-y-1">
              {HEADLINE_WORDS.map((item, index) => (
                <motion.span
                  key={`${item.word}-${isReady}`}
                  initial={{ opacity: 0, x: item.direction.x, y: item.direction.y, rotate: item.direction.rotate, scale: 0.5, filter: "blur(8px)" }}
                  animate={isReady ? { opacity: 1, x: 0, y: 0, rotate: 0, scale: 1, filter: "blur(0px)" } : {}}
                  transition={{ duration: 0.85, delay: 0.2 + index * 0.08, ease: [0.16, 1, 0.3, 1] }}
                  className={`inline-block relative will-change-transform ${item.gradient ? "text-warm-orange" : ""} ${item.highlight ? "text-warm-orange-dark" : ""}`}
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

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={isReady ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: HEADLINE_WORDS.length * 0.08 + 0.4, ease: [0.22, 1, 0.36, 1] }}
              className="text-base sm:text-lg text-gray-600 font-body max-w-xl leading-relaxed"
            >
              Whether you want to volunteer, donate, partner with us, request assistance, or simply learn more about our mission, we&apos;d love to hear from you. Every conversation is another opportunity to change a child&apos;s life.
            </motion.p>

            {/* Action Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isReady ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: HEADLINE_WORDS.length * 0.08 + 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="flex flex-wrap gap-3.5 items-center pt-2"
            >
              <a href="#contact-form" className="btn-orange text-base group">
                <MailIcon size={18} className="text-white group-hover:scale-110 transition-transform" />
                Send a Message
                <ArrowRightIcon size={16} className="group-hover:translate-x-1 transition-transform" />
              </a>
              <a href="#location" className="px-6 py-3 rounded-full font-bold text-royal-blue border-2 border-royal-blue/20 hover:border-royal-blue/50 hover:bg-blue-50 transition-all group font-body text-base flex items-center gap-2">
                <MapPinIcon size={18} className="text-royal-blue" />
                View Our Location
              </a>
            </motion.div>

            {/* Quick response badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isReady ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 1 }}
              className="flex items-center gap-4 pt-4 border-t border-gray-200/60 mt-2 text-xs font-body text-gray-500"
            >
              <span className="flex items-center gap-1.5 font-semibold text-green-700 bg-green-50 px-3 py-1 rounded-full border border-green-200">
                <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                Average response time: &lt; 4 hours
              </span>
              <span>Mon – Fri (8am – 5pm WAT)</span>
            </motion.div>
          </div>

          {/* Right Column: Visual Card Showcase */}
          <div className="lg:col-span-5 relative flex items-center justify-center">
            <motion.div
              initial={{ opacity: 0, x: 80, scale: 0.9 }}
              animate={isReady ? { opacity: 1, x: 0, scale: 1 } : {}}
              transition={{ duration: 1, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="relative w-full max-w-sm mx-auto"
            >
              <div className="absolute inset-0 bg-[#1a3a6b] rounded-3xl blur-3xl scale-110" />

              <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-white/80 bg-white p-8">
                <div className="w-20 h-20 rounded-2xl bg-[#1a3a6b] flex items-center justify-center mx-auto mb-5 shadow-xl text-3xl text-white">
                  💬
                </div>
                <h2 className="font-heading text-2xl font-bold text-[#1a1a2e] text-center mb-2">Connect With Us</h2>
                <p className="text-xs text-gray-500 font-body text-center mb-6 leading-relaxed">
                  We are available across email, phone, WhatsApp, and social channels. Reach out today!
                </p>

                <div className="space-y-3 text-xs font-body">
                  <div className="flex items-center justify-between p-3 rounded-xl bg-gray-50 border border-gray-100">
                    <span className="text-gray-500 font-medium">📍 Main Office</span>
                    <span className="font-bold text-[#1a1a2e]">Enugu State, Nigeria</span>
                  </div>
                  <div className="flex items-center justify-between p-3 rounded-xl bg-gray-50 border border-gray-100">
                    <span className="text-gray-500 font-medium">✉️ General Email</span>
                    <span className="font-bold text-royal-blue">hello@shoemyfeet.org</span>
                  </div>
                  <div className="flex items-center justify-between p-3 rounded-xl bg-gray-50 border border-gray-100">
                    <span className="text-gray-500 font-medium">📞 Helpline</span>
                    <span className="font-bold text-forest-green">+234 800 746 3693</span>
                  </div>
                </div>
              </div>

              {/* Floating badges */}
              <motion.div
                className="absolute -top-4 -right-4 glass rounded-2xl p-3 shadow-xl border border-white/60 flex items-center gap-2 z-10"
                animate={{ y: [-5, 5, -5] }}
                transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
              >
                <span className="text-xl">🤝</span>
                <div>
                  <div className="font-heading font-bold text-royal-blue text-xs">Open for Partnerships</div>
                  <div className="text-[10px] text-gray-500 font-body">Schools, NGOs & Corporates</div>
                </div>
              </motion.div>

              <motion.div
                className="absolute -bottom-4 -left-4 glass rounded-2xl p-3 shadow-xl border border-white/60 flex items-center gap-2 z-10"
                animate={{ y: [5, -5, 5] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              >
                <span className="text-xl">💚</span>
                <div>
                  <div className="font-heading font-bold text-royal-blue text-xs">Friendly Support</div>
                  <div className="text-[10px] text-gray-500 font-body">We reply to every query</div>
                </div>
              </motion.div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
