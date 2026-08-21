"use client";

import { useRef } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import CountUp from "react-countup";
import { staggerContainer, fadeUp, viewportConfig } from "@/lib/animations";

const stats = [
  { value: 6500, suffix: "+", label: "Children Supported", icon: "👶", color: "bg-[#1a3a6b]", bg: "bg-blue-50", border: "border-blue-100" },
  { value: 6500, suffix: "+", label: "Pairs of Shoes Distributed", icon: "👟", color: "bg-[#f97316]", bg: "bg-orange-50", border: "border-orange-100" },
  { value: 18, suffix: "+", label: "Communities Reached", icon: "🏘️", color: "bg-[#15803d]", bg: "bg-emerald-50", border: "border-emerald-100" },
  { value: 12, suffix: "+", label: "Schools Partnered With", icon: "🏫", color: "bg-[#1a3a6b]", bg: "bg-purple-50", border: "border-purple-100" },
  { value: 300, suffix: "+", label: "Volunteers Mobilized", icon: "🙌", color: "bg-[#f97316]", bg: "bg-rose-50", border: "border-rose-100" },
  { value: 6, suffix: "+", label: "Corporate Partners", icon: "🤝", color: "bg-[#f59e0b]", bg: "bg-amber-50", border: "border-amber-100" },
  { value: 25, suffix: "+", label: "Outreach Events Conducted", icon: "🎉", color: "bg-[#15803d]", bg: "bg-teal-50", border: "border-teal-100" },
  { value: 4, suffix: "", label: "Years of Impact", icon: "⭐", color: "bg-[#1a3a6b]", bg: "bg-indigo-50", border: "border-indigo-100" },
];

function StatCard({ stat, index }: { stat: typeof stats[0]; index: number }) {
  const { ref, inView } = useInView({ threshold: 0.3, triggerOnce: true });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40, scale: 0.9 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.55, delay: index * 0.06, ease: [0.16, 1, 0.3, 1] }}
      whileHover={{ y: -8, scale: 1.03, transition: { type: "spring", stiffness: 300, damping: 20 } }}
      className={`relative group ${stat.bg} ${stat.border} border rounded-3xl p-6 text-center overflow-hidden cursor-default shadow-sm hover:shadow-xl transition-shadow duration-500`}
    >
      {/* Background glow on hover */}
      <div className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 stat.color rounded-3xl`} style={{ opacity: 0 }} />
      
      {/* Icon */}
      <motion.div
        className="text-4xl mb-3 relative z-10"
        animate={{ rotate: [0, 5, -5, 0] }}
        transition={{ duration: 4 + index * 0.3, repeat: Infinity, ease: "easeInOut", delay: index * 0.2 }}
      >
        {stat.icon}
      </motion.div>

      {/* Counter */}
      <div className={`font-heading text-4xl sm:text-5xl font-extrabold stat.color bg-clip-text text-transparent mb-2 relative z-10 leading-none`}>
        {inView ? <CountUp end={stat.value} duration={2.2} separator="," /> : "0"}
        {stat.suffix}
      </div>

      {/* Label */}
      <p className="font-body text-gray-600 text-sm font-semibold leading-tight relative z-10">{stat.label}</p>

      {/* Animated underline bar */}
      <motion.div
        className={`absolute bottom-0 left-0 h-1 stat.color rounded-b-3xl`}
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: index * 0.06 + 0.3, ease: [0.22, 1, 0.36, 1] }}
        style={{ originX: 0, width: "100%" }}
      />
    </motion.div>
  );
}

export default function ImpactNumbers() {
  return (
    <section id="impact-numbers" className="section-padding bg-[#f8fafc] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
            className="inline-block px-4 py-1.5 rounded-full bg-blue-100 text-royal-blue text-xs sm:text-sm font-bold border border-blue-200 mb-4"
          >
            Impact by the Numbers
          </motion.span>
          <motion.h2
            variants={fadeUp}
            className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1a1a2e] mb-4 leading-tight"
          >
            Numbers That Tell a{" "}
            <span className="text-warm-orange">Story of Hope</span>
          </motion.h2>
          <motion.p
            variants={fadeUp}
            className="text-base sm:text-lg text-gray-600 font-body leading-relaxed"
          >
            Every number represents a real child, a real family, a real community transformed. These are not statistics — they are lives changed forever.
          </motion.p>
        </motion.div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {stats.map((stat, index) => (
            <StatCard key={stat.label} stat={stat} index={index} />
          ))}
        </div>

        {/* Quote strip */}
        <motion.div
          className="mt-16 rounded-3xl bg-[#1a3a6b] p-8 sm:p-10 text-center relative overflow-hidden"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-0 left-0 w-64 h-64 rounded-full bg-[#f97316]/10 blur-[100px]" />
            <div className="absolute bottom-0 right-0 w-64 h-64 rounded-full bg-[#38bdf8]/10 blur-[100px]" />
          </div>
          <div className="relative z-10">
            <div className="text-5xl mb-4">👣</div>
            <p className="font-heading text-xl sm:text-2xl lg:text-3xl font-bold text-white leading-relaxed max-w-3xl mx-auto">
              "Each pair of shoes is a promise — that this child matters, that their future matters, that we see them."
            </p>
            <p className="font-body text-blue-300 mt-4 text-sm font-semibold">— Philomena Nwajagu, Founder</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
