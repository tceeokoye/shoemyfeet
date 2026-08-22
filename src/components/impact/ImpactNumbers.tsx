"use client";

import { useRef } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import CountUp from "react-countup";
import { staggerContainer, fadeUp, viewportConfig } from "@/lib/animations";

const stats = [
  { value: 6500, suffix: "+", label: "Children Supported", icon: "👶", color: "bg-[#09090b]", bg: "bg-slate-50", border: "border-slate-100" },
  { value: 6500, suffix: "+", label: "Pairs of Shoes Distributed", icon: "👟", color: "bg-[#f97316]", bg: "bg-orange-50", border: "border-orange-100" },
  { value: 18, suffix: "+", label: "Communities Reached", icon: "🏘️", color: "bg-[#15803d]", bg: "bg-emerald-50", border: "border-emerald-100" },
  { value: 12, suffix: "+", label: "Schools Partnered With", icon: "🏫", color: "bg-[#09090b]", bg: "bg-purple-50", border: "border-purple-100" },
  { value: 300, suffix: "+", label: "Volunteers Mobilized", icon: "🙌", color: "bg-[#f97316]", bg: "bg-rose-50", border: "border-rose-100" },
  { value: 6, suffix: "+", label: "Corporate Partners", icon: "🤝", color: "bg-[#f59e0b]", bg: "bg-amber-50", border: "border-amber-100" },
  { value: 25, suffix: "+", label: "Outreach Events Conducted", icon: "🎉", color: "bg-[#15803d]", bg: "bg-teal-50", border: "border-teal-100" },
  { value: 4, suffix: "", label: "Years of Impact", icon: "⭐", color: "bg-[#09090b]", bg: "bg-indigo-50", border: "border-indigo-100" },
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
      whileHover={{ y: -6, transition: { type: "spring", stiffness: 300, damping: 20 } }}
      className="bg-white border border-slate-100 rounded-3xl p-6 text-center overflow-hidden cursor-default shadow-md hover:shadow-xl transition-all duration-300"
    >
      {/* Icon */}
      <motion.div
        className="text-4xl mb-3 relative z-10"
        animate={{ rotate: [0, 5, -5, 0] }}
        transition={{ duration: 4 + index * 0.3, repeat: Infinity, ease: "easeInOut", delay: index * 0.2 }}
      >
        {stat.icon}
      </motion.div>

      {/* Counter */}
      <div className="font-heading text-4xl sm:text-5xl font-extrabold text-[#0a0a0a] mb-2 relative z-10 leading-none">
        {inView ? <CountUp end={stat.value} duration={2.2} separator="," /> : "0"}
        <span className="text-[#f97316]">{stat.suffix}</span>
      </div>

      {/* Label */}
      <p className="font-body text-slate-600 text-sm font-semibold leading-tight relative z-10">{stat.label}</p>
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
            className="inline-block px-4 py-1.5 rounded-full bg-orange-100 text-[#f97316] text-xs sm:text-sm font-bold border border-slate-200 mb-4"
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
          className="mt-16 rounded-3xl bg-[#09090b] p-8 sm:p-10 text-center relative overflow-hidden"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-0 left-0 w-64 h-64 rounded-full bg-[#f97316]/10 blur-[100px]" />
            <div className="absolute bottom-0 right-0 w-64 h-64 rounded-full bg-[#f97316]/10 blur-[100px]" />
          </div>
          <div className="relative z-10">
            <div className="text-5xl mb-4">👣</div>
            <p className="font-heading text-xl sm:text-2xl lg:text-3xl font-bold text-white leading-relaxed max-w-3xl mx-auto">
              "Each pair of shoes is a promise — that this child matters, that their future matters, that we see them."
            </p>
            <p className="font-body text-orange-300 mt-4 text-sm font-semibold">— Philomena Nwajagu, Founder</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
