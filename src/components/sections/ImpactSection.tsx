"use client";

import { motion } from "framer-motion";
import { fadeUp, staggerContainer, viewportConfig } from "@/lib/animations";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

const metrics = [
  {
    value: 6500,
    suffix: "+",
    prefix: "",
    label: "Pairs of School Shoes",
    sublabel: "Distributed to children in need",
    icon: "👟",
    color: "bg-[#1a3a6b]",
    bg: "bg-blue-50",
  },
  {
    value: 18,
    suffix: "+",
    prefix: "",
    label: "Schools & Communities",
    sublabel: "Reached across Nigeria",
    icon: "🏫",
    color: "bg-[#f97316]",
    bg: "bg-orange-50",
  },
  {
    value: 137,
    suffix: "+",
    prefix: "",
    label: "Kids Trained",
    sublabel: "In shoemaking & entrepreneurship",
    icon: "🛠️",
    color: "bg-[#15803d]",
    bg: "bg-emerald-50",
  },
  {
    value: 3,
    suffix: "",
    prefix: "",
    label: "Nigerian States",
    sublabel: "And growing",
    icon: "🗺️",
    color: "bg-[#1a3a6b]",
    bg: "bg-purple-50",
  },
  {
    value: 2000,
    suffix: "+",
    prefix: "",
    label: "Shoes in One Outreach",
    sublabel: "Kaduna State record distribution",
    icon: "🌟",
    color: "bg-[#f59e0b]",
    bg: "bg-amber-50",
  },
  {
    value: 4,
    suffix: "",
    prefix: "",
    label: "Years of Impact",
    sublabel: "Since our founding in 2022",
    icon: "📅",
    color: "bg-[#1a3a6b]",
    bg: "bg-sky-50",
  },
];

function MetricCard({ metric, index }: { metric: typeof metrics[0]; index: number }) {
  const { ref, inView } = useInView({ threshold: 0.3, triggerOnce: true });

  return (
    <motion.div
      ref={ref}
      variants={fadeUp}
      custom={index}
      className={`${metric.bg} rounded-3xl p-6 border border-white shadow-md hover:shadow-xl transition-all duration-300 group cursor-default`}
      whileHover={{ y: -6, scale: 1.02 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
    >
      {/* Icon */}
      <div className={`w-14 h-14 rounded-2xl metric.color flex items-center justify-center mb-4 text-2xl shadow-lg group-hover:shadow-xl transition-shadow group-hover:scale-110 duration-300`}>
        {metric.icon}
      </div>

      {/* Number */}
      <div className="font-heading font-bold text-4xl lg:text-5xl text-[#1a1a2e] mb-2 relative z-10 leading-none">
        {inView ? (
          <CountUp
            end={metric.value}
            duration={2.5}
            separator=","
          />
        ) : (
          "0"
        )}
        {metric.suffix}
      </div>

      {/* Labels */}
      <div className="mt-2">
        <p className="font-heading font-bold text-lg text-[#1a1a2e]">{metric.label}</p>
        <p className="text-sm text-gray-500 font-body mt-0.5">{metric.sublabel}</p>
      </div>
    </motion.div>
  );
}

export default function ImpactSection() {
  return (
    <section id="impact" className="section-padding bg-[#1a3a6b] overflow-hidden relative">

      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-20 -right-20 w-96 h-96 rounded-full bg-blue-500/10 animate-blob-slow" />
        <div className="absolute -bottom-20 -left-20 w-80 h-80 rounded-full bg-orange-500/10 animate-blob" />
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-white/5"
            style={{
              width: Math.random() * 4 + 2,
              height: Math.random() * 4 + 2,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{ opacity: [0.2, 0.6, 0.2], y: [0, -10, 0] }}
            transition={{ duration: 3 + Math.random() * 2, repeat: Infinity, delay: Math.random() * 2 }}
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Header */}
        <motion.div
          className="text-center max-w-3xl mx-auto mb-16"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
        >
          <motion.span variants={fadeUp} className="inline-block px-4 py-1.5 rounded-full bg-white/10 text-orange-300 text-sm font-bold mb-4 border border-white/20 backdrop-blur-sm">
            Measurable Impact
          </motion.span>
          <motion.h2 variants={fadeUp} className="font-heading text-4xl sm:text-5xl font-bold text-white mb-4">
            Numbers That Tell a{" "}
            <span className="text-warm-orange">Story of Hope</span>
          </motion.h2>
          <motion.p variants={fadeUp} className="text-lg text-blue-200 font-body leading-relaxed">
            Every number represents a real child, a real family, a real community
            whose lives have been touched by the power of a simple pair of shoes.
          </motion.p>
        </motion.div>

        {/* Metrics Grid */}
        <motion.div
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
        >
          {metrics.map((metric, index) => (
            <MetricCard key={metric.label} metric={metric} index={index} />
          ))}
        </motion.div>

        {/* Nigeria Map Visual */}
        <motion.div
          className="mt-16 bg-white/5 backdrop-blur-sm rounded-3xl p-8 border border-white/10"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
        >
          <div className="text-center mb-6">
            <h3 className="font-heading text-2xl font-bold text-white mb-2">Geographic Reach</h3>
            <p className="text-blue-200 font-body text-sm">States where Shoe My Feet Foundation has made an impact</p>
          </div>
          <div className="flex flex-wrap justify-center gap-4">
            {[
              { state: "Enugu State", detail: "Our founding base — multiple rural schools", emoji: "🟢" },
              { state: "Kaduna State", detail: "Northern Nigeria — 2,000+ shoes in one outreach", emoji: "🟡" },
              { state: "Edo State", detail: "2026 expansion — Benin City outreach", emoji: "🔵" },
            ].map((item) => (
              <motion.div
                key={item.state}
                className="glass-dark rounded-2xl px-5 py-4 border border-white/10 hover:border-white/20 transition-colors text-center min-w-[200px]"
                whileHover={{ y: -4 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                <span className="text-2xl mb-2 block">{item.emoji}</span>
                <h4 className="font-heading font-bold text-white text-base">{item.state}</h4>
                <p className="text-blue-300 text-xs font-body mt-1">{item.detail}</p>
              </motion.div>
            ))}
          </div>
          <motion.div
            className="text-center mt-6"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={viewportConfig}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 text-blue-200 text-sm font-body">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              Actively expanding to more Nigerian states
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
