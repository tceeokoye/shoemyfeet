"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { fadeUp, viewportConfig, float, floatSlow } from "@/lib/animations";
import { HeartIcon, FootprintsIcon, SparklesIcon, ArrowRightIcon, UsersIcon, HeartHandshakeIcon } from "@/components/ui/Icons";

export default function FinalCTA() {
  return (
    <section className="my-24 relative overflow-hidden">
      <div className="bg-[#09090b] rounded-3xl p-10 sm:p-14 lg:p-20 text-white relative shadow-2xl overflow-hidden border border-white/10 text-center">
        {/* Animated footprints leading toward the CTA buttons */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <motion.div variants={float} initial="initial" animate="animate" className="absolute top-0 left-1/4 w-80 h-80 rounded-full bg-slate-800/10 blur-3xl" />
          <motion.div variants={floatSlow} initial="initial" animate="animate" className="absolute bottom-0 right-1/4 w-80 h-80 rounded-full bg-orange-500/10 blur-3xl" />

          {/* Footprint Trail Animation */}
          <div className="absolute inset-x-0 bottom-6 flex justify-center gap-12 opacity-15">
            <motion.div
              animate={{ y: [0, -10, 0], opacity: [0.2, 0.8, 0.2] }}
              transition={{ duration: 3, repeat: Infinity, delay: 0 }}
            >
              <FootprintsIcon size={36} className="text-warm-orange" />
            </motion.div>
            <motion.div
              animate={{ y: [0, -10, 0], opacity: [0.2, 0.8, 0.2] }}
              transition={{ duration: 3, repeat: Infinity, delay: 0.8 }}
            >
              <FootprintsIcon size={42} className="text-hope-yellow" />
            </motion.div>
            <motion.div
              animate={{ y: [0, -10, 0], opacity: [0.2, 0.8, 0.2] }}
              transition={{ duration: 3, repeat: Infinity, delay: 1.6 }}
            >
              <FootprintsIcon size={48} className="text-white" />
            </motion.div>
          </div>
        </div>

        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          className="max-w-3xl mx-auto relative z-10"
        >
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-white/20 text-hope-yellow text-xs font-bold uppercase tracking-wider mb-6 backdrop-blur-xs">
            <SparklesIcon size={14} className="text-warm-orange" />
            <span>Join Our Movement</span>
          </div>

          {/* Headline */}
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-white mb-6 leading-tight">
            Every Story Begins With One Step
          </h2>

          {/* Supporting Text */}
          <p className="text-neutral-200 font-body text-base sm:text-lg leading-relaxed mb-10 max-w-2xl mx-auto">
            Your support allows us to create more stories of hope, resilience, and transformed lives. Join Shoe My Feet Foundation in making every child&apos;s journey brighter.
          </p>

          {/* Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/donate"
              className="btn-orange text-sm px-8 py-4 rounded-full font-bold shadow-xl hover:shadow-orange-500/30 inline-flex items-center gap-2 cursor-pointer"
            >
              <span>Donate Today</span>
              <ArrowRightIcon size={16} />
            </Link>

            <Link
              href="/volunteer"
              className="px-7 py-4 rounded-full bg-white/10 hover:bg-white/20 text-white font-bold text-sm border border-white/20 shadow-md backdrop-blur-xs transition-all inline-flex items-center gap-2"
            >
              <UsersIcon size={18} className="text-hope-yellow" />
              <span>Volunteer</span>
            </Link>

            <Link
              href="/contact"
              className="px-7 py-4 rounded-full bg-white text-[#f97316] hover:bg-slate-50 font-bold text-sm shadow-md transition-all inline-flex items-center gap-2"
            >
              <span>Partner With Us</span>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
