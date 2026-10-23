"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import CountUp from "react-countup";
import { Footprints } from "lucide-react";
import { VOLUNTEER_STATS } from "@/lib/volunteerData";
import { staggerContainer, fadeUp, viewportConfig } from "@/lib/animations";

function StatCard({ stat, index }: { stat: typeof VOLUNTEER_STATS[0]; index: number }) {
  const { ref, inView } = useInView({ threshold: 0.3, triggerOnce: true });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40, scale: 0.9 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.55, delay: index * 0.08, ease: [0.16, 1, 0.3, 1] }}
      whileHover={{ y: -8, scale: 1.04, transition: { type: "spring", stiffness: 300, damping: 20 } }}
      className="relative group text-center cursor-default"
    >
      {/* Glow card */}
      <div className="relative overflow-hidden  border border-white/10 bg-white/5 hover:bg-white/10 transition-colors duration-500 p-6 sm:p-8">
        {/* Animated gradient border */}
        <div className={`absolute inset-0  opacity-0 group-hover:opacity-100 transition-opacity duration-500 stat.color`} style={{ opacity: 0, padding: "1px" }}>
          <div className="h-full w-full  bg-[#111827]" />
        </div>

        {/* Icon */}
        <motion.div
          className="text-4xl mb-4 relative z-10"
          animate={{ rotate: [0, 5, -5, 0] }}
          transition={{ duration: 4 + index * 0.3, repeat: Infinity, ease: "easeInOut", delay: index * 0.2 }}
        >
          <stat.icon size={30} className="mx-auto text-[#1A3A6B]" strokeWidth={1.8} aria-hidden="true" />
        </motion.div>

        {/* Counter */}
        <div className={`font-heading text-5xl sm:text-6xl font-extrabold text-white mb-2 relative z-10 leading-none`}>
          {inView ? <CountUp end={stat.value} duration={2.5} separator="," /> : "0"}
          <span className="text-[#1A3A6B]">{stat.suffix}</span>
        </div>

        {/* Label */}
        <p className="font-body text-neutral-300 text-sm font-semibold leading-tight relative z-10 mt-2">{stat.label}</p>

        {/* Bottom glow line */}
        <motion.div
          className={`absolute bottom-0 left-0 h-1 stat.color rounded-b-2xl`}
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, delay: index * 0.08 + 0.4, ease: [0.22, 1, 0.36, 1] }}
          style={{ originX: 0, width: "100%" }}
        />
      </div>
    </motion.div>
  );
}

export default function VolunteerImpact() {
  return (
    <section
      id="volunteer-impact"
      className="relative section-padding bg-[#111827] text-white overflow-hidden border-t border-white/10"
    >
      {/* Decorative floating elements */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute top-1/4 left-1/6 w-[400px] h-[400px] rounded-full bg-[#1A3A6B]/8 blur-[120px]" />
        <div className="absolute bottom-1/4 right-1/6 w-[350px] h-[350px] rounded-full bg-[#1A3A6B]/8 blur-[110px]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-white/3 blur-[200px]" />
      </div>

      {/* Floating footprints */}
      {[...Array(5)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute text-white/6 text-4xl select-none pointer-events-none"
          style={{ left: `${10 + i * 20}%`, top: `${20 + (i % 3) * 25}%` }}
          animate={{ y: [0, -20, 0], opacity: [0.04, 0.10, 0.04] }}
          transition={{ duration: 4 + i * 0.6, repeat: Infinity, ease: "easeInOut", delay: i * 0.5 }}
        >
          <Footprints size={32} aria-hidden="true" />
        </motion.div>
      ))}

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          className="text-center max-w-3xl mx-auto mb-16"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
        >
          <motion.span
            variants={fadeUp}
            className="inline-block px-4 py-1.5 rounded-full bg-orange-400/20 text-orange-300 text-xs sm:text-sm font-bold border border-orange-400/30 mb-4"
          >
            Volunteer Impact
          </motion.span>
          <motion.h2
            variants={fadeUp}
            className="font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white mb-4 leading-tight"
          >
            The Difference Your{" "}
            <span className="text-[#1A3A6B]">
              Time Makes
            </span>
          </motion.h2>
          <motion.p
            variants={fadeUp}
            className="text-base sm:text-lg text-neutral-300/80 font-body leading-relaxed"
          >
            Every hour donated, every shoe sorted, every child visited — these contributions stack up to numbers that tell the story of a movement.
          </motion.p>
        </motion.div>

        {/* Stats grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 sm:gap-6">
          {VOLUNTEER_STATS.map((stat, index) => (
            <StatCard key={stat.label} stat={stat} index={index} />
          ))}
        </div>

        {/* Bottom CTA strip */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <p className="font-body text-neutral-300/70 text-base mb-6">
            These numbers grow because of people like you. Ready to add yours?
          </p>
          <a
            href="#volunteer-form"
            className="btn-primary text-base sm:text-lg px-8 py-4 rounded-[10px] shadow-2xl hover:scale-105 transition-all duration-300 inline-flex items-center gap-2"
          >
            Add Your Impact →
          </a>
        </motion.div>
      </div>
    </section>
  );
}
