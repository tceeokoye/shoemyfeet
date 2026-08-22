"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { fadeUp, staggerContainer, viewportConfig, float, floatSlow } from "@/lib/animations";
import { FootprintsIcon, SparklesIcon, ArrowRightIcon, BookOpenIcon, HeartIcon, ShieldCheckIcon, GraduationCapIcon, UsersIcon } from "@/components/ui/Icons";

interface BlogHeroProps {
  onReadLatestClick: () => void;
  onExploreCategoriesClick: () => void;
}

const floatingStats = [
  { icon: HeartIcon, value: "14,000+", label: "Children Shod", color: "bg-[#f97316]", delay: 0 },
  { icon: GraduationCapIcon, value: "35", label: "Cobblers Trained", color: "bg-[#2563eb]", delay: 0.6 },
  { icon: UsersIcon, value: "48+", label: "Field Volunteers", color: "bg-[#15803d]", delay: 1.2 },
];

export default function BlogHero({ onReadLatestClick, onExploreCategoriesClick }: BlogHeroProps) {
  return (
    <section className="relative overflow-hidden min-h-[92vh] flex flex-col justify-center pt-24 pb-16">
      
      {/* ─── Rich Layered Background ─── */}
      <div className="absolute inset-0 z-0">
        {/* Base photo background */}
        <Image
          src="/images/hero.jpg"
          alt="Children receiving shoes"
          fill
          className="object-cover object-center"
          priority
        />
        {/* Multi-stop overlay softened for image transparency */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/60 to-black/40" />
        {/* Bottom fade to dark obsidian so page content flows naturally below */}
        <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-[#09090b] to-transparent" />
      </div>

      {/* ─── Animated Ambient Blobs ─── */}
      <div className="absolute inset-0 z-10 pointer-events-none overflow-hidden">
        <motion.div
          variants={float}
          initial="initial"
          animate="animate"
          className="absolute top-20 left-8 w-80 h-80 rounded-full bg-orange-400/20 blur-3xl"
        />
        <motion.div
          variants={floatSlow}
          initial="initial"
          animate="animate"
          className="absolute top-10 right-10 w-96 h-96 rounded-full bg-blue-400/15 blur-3xl"
        />
        <motion.div
          animate={{ y: [-12, 12, -12], opacity: [0.3, 0.7, 0.3] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-32 left-1/4 w-64 h-64 rounded-full bg-amber-400/15 blur-2xl"
        />
      </div>

      {/* ─── Floating Footprint Decorations ─── */}
      <div className="absolute inset-0 z-10 pointer-events-none">
        <motion.div
          animate={{ y: [-12, 10, -12], rotate: [0, 10, 0], opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-32 left-[8%] text-white/30 hidden md:block"
        >
          <FootprintsIcon size={52} />
        </motion.div>
        <motion.div
          animate={{ y: [10, -10, 10], rotate: [0, -8, 0], opacity: [0.4, 0.9, 0.4] }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="absolute top-48 right-[10%] text-amber-400/40 hidden md:block"
        >
          <FootprintsIcon size={62} />
        </motion.div>
        <motion.div
          animate={{ scale: [0.8, 1.2, 0.8], opacity: [0.3, 0.8, 0.3] }}
          transition={{ duration: 4, repeat: Infinity }}
          className="absolute top-36 right-[30%] text-yellow-300/50 hidden lg:block"
        >
          <SparklesIcon size={28} />
        </motion.div>
        <motion.div
          animate={{ scale: [1, 1.4, 1], opacity: [0.2, 0.6, 0.2] }}
          transition={{ duration: 5, repeat: Infinity, delay: 2 }}
          className="absolute bottom-36 right-[20%] text-orange-300/40 hidden lg:block"
        >
          <SparklesIcon size={22} />
        </motion.div>
      </div>

      {/* ─── Main Content ─── */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
        <div className="grid lg:grid-cols-12 gap-12 items-center">

          {/* Left: Text Content */}
          <div className="lg:col-span-7">
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              animate="visible"
              className="space-y-6"
            >
              {/* Eyebrow badge */}
              <motion.div variants={fadeUp}>
                <div className="inline-flex items-center gap-2.5 px-5 py-2 rounded-full bg-white/10 border border-white/25 backdrop-blur-md text-white text-xs font-bold uppercase tracking-widest shadow-lg">
                  <BookOpenIcon size={14} className="text-amber-300" />
                  <span>Digital Magazine & Field Dispatch</span>
                  <SparklesIcon size={14} className="text-amber-300 animate-pulse" />
                </div>
              </motion.div>

              {/* Headline */}
              <motion.h1
                variants={fadeUp}
                className="text-5xl sm:text-6xl lg:text-7xl font-heading font-bold text-white leading-[1.05] tracking-tight"
              >
                Stories That{" "}
                <span className="relative inline-block">
                  <span className="text-warm-orange">
                    Inspire
                  </span>
                </span>
                <br />
                <span className="text-warm-orange">
                  Every Step
                </span>
              </motion.h1>

              {/* Supporting text */}
              <motion.p
                variants={fadeUp}
                className="text-base sm:text-lg text-blue-100/90 font-body leading-relaxed max-w-xl"
              >
                Discover inspiring stories, outreach highlights, educational resources, and the latest news from{" "}
                <span className="text-amber-300 font-bold">Shoe My Feet Foundation</span>. Every article reflects our mission to bring hope, dignity, and opportunity to children through the gift of proper footwear.
              </motion.p>

              {/* CTA Buttons */}
              <motion.div variants={fadeUp} className="flex flex-wrap items-center gap-4 pt-2">
                <button
                  type="button"
                  onClick={onReadLatestClick}
                  className="group relative overflow-hidden px-8 py-4 rounded-full bg-[#2563eb] text-white font-bold text-sm shadow-2xl shadow-orange-500/40 hover:shadow-orange-500/60 transition-all duration-300 hover:scale-105 inline-flex items-center gap-2.5 cursor-pointer"
                >
                  <div className="absolute inset-0 bg-white/20 scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300 rounded-full" />
                  <span className="relative z-10">Read Latest Stories</span>
                  <ArrowRightIcon size={16} className="relative z-10 group-hover:translate-x-1 transition-transform" />
                </button>

                <button
                  type="button"
                  onClick={onExploreCategoriesClick}
                  className="px-8 py-4 rounded-full bg-white/15 hover:bg-white/25 border border-white/30 hover:border-white/50 text-white font-bold text-sm backdrop-blur-md shadow-lg transition-all duration-300 hover:scale-105 inline-flex items-center gap-2.5 cursor-pointer"
                >
                  <SparklesIcon size={16} className="text-amber-300" />
                  <span>Explore Categories</span>
                </button>
              </motion.div>

              {/* Impact badge strip */}
              <motion.div variants={fadeUp} className="flex flex-wrap items-center gap-3 pt-2">
                {[
                  { emoji: "🇳🇬", text: "Enugu" },
                  { emoji: "🇳🇬", text: "Kaduna" },
                  { emoji: "🇳🇬", text: "Edo" },
                ].map((item) => (
                  <span key={item.text} className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/10 border border-white/20 text-xs text-white/80 font-body font-medium backdrop-blur-xs">
                    <span>{item.emoji}</span>
                    <span>{item.text} State</span>
                  </span>
                ))}
                <span className="text-white text-xs">Active Distribution Zones</span>
              </motion.div>
            </motion.div>
          </div>

          {/* Right: Floating Stats Cards */}
          <div className="lg:col-span-5 hidden lg:flex flex-col gap-5">
            {floatingStats.map((stat, idx) => {
              const Icon = stat.icon;
              return (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.4 + stat.delay, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                  className="bg-[#1e40af] rounded-2xl p-5 flex items-center gap-5 shadow-2xl border border-white/30 hover:border-white/50 transition-all duration-300 hover:-translate-y-1 cursor-default"
                >
                  <div className={`w-14 h-14 rounded-2xl stat.color flex items-center justify-center shadow-lg shrink-0 group-hover:scale-110 transition-transform duration-300`}>
                    <Icon size={26} className="text-white" />
                  </div>
                  <div>
                    <span className="block text-3xl font-heading font-bold text-white leading-none mb-1">
                      {stat.value}
                    </span>
                    <span className="text-xs text-blue-100/80 font-body font-medium uppercase tracking-wider">
                      {stat.label}
                    </span>
                  </div>
                  {/* Glow accent */}
                  <div className={`absolute inset-0 rounded-2xl stat.color opacity-0 group-hover:opacity-10 transition-opacity duration-300 pointer-events-none`} />
                </motion.div>
              );
            })}

            {/* Verified badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 2, duration: 0.5 }}
              className="flex items-center gap-3 px-5 py-3 rounded-2xl bg-green-500/20 border border-green-400/30 backdrop-blur-md"
            >
              <ShieldCheckIcon size={20} className="text-green-400 shrink-0" />
              <span className="text-xs text-green-100 font-body font-medium">
                CAC Registered NGO • SDG-Aligned • Transparent Reporting
              </span>
            </motion.div>
          </div>
        </div>

        {/* ─── Bottom Scroll Indicator ─── */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.8 }}
          className="flex justify-center mt-12 md:mt-16"
        >
          <div className="flex flex-col items-center gap-2 text-white/50 text-xs font-body">
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
              className="w-6 h-9 rounded-full border-2 border-white/30 flex items-start justify-center pt-2"
            >
              <div className="w-1 h-2 rounded-full bg-white/50" />
            </motion.div>
            <span className="text-[#1e40af]">Scroll to explore</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
