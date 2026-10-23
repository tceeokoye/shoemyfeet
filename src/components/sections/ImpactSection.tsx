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
    bg: "bg-slate-50",
  },
  {
    value: 18,
    suffix: "+",
    prefix: "",
    label: "Schools & Communities",
    sublabel: "Reached across Nigeria",
    bg: "bg-[#F3F4F6]",
  },
  {
    value: 137,
    suffix: "+",
    prefix: "",
    label: "Kids Trained",
    sublabel: "In shoemaking & entrepreneurship",
    bg: "bg-emerald-50",
  },
  {
    value: 3,
    suffix: "",
    prefix: "",
    label: "Nigerian States",
    sublabel: "And growing",
    bg: "bg-purple-50",
  },
  {
    value: 2000,
    suffix: "+",
    prefix: "",
    label: "Shoes in One Outreach",
    sublabel: "Kaduna State record distribution",
    bg: "bg-[#FFFFFF]",
  },
  {
    value: 4,
    suffix: "",
    prefix: "",
    label: "Years of Impact",
    sublabel: "Since our founding in 2022",
    bg: "bg-slate-100",
  },
];

function MetricCard({ metric, index }: { metric: typeof metrics[0]; index: number }) {
  const { ref, inView } = useInView({ threshold: 0.3, triggerOnce: true });

  return (
    <motion.div
      ref={ref}
      variants={fadeUp}
      custom={index}
      className={`${metric.bg} rounded-2xl p-6 border border-white shadow-md hover:shadow-xl transition-all duration-300 group cursor-default`}
      whileHover={{ y: -6, scale: 1.02 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
    >
      {/* Number */}
      <div className="font-heading font-bold text-4xl lg:text-5xl text-[#111827] mb-2 relative z-10 leading-none">
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
        <p className="font-heading font-bold text-lg text-[#111827]">{metric.label}</p>
        <p className="text-sm text-gray-500 font-body mt-0.5">{metric.sublabel}</p>
      </div>
    </motion.div>
  );
}

const backgroundDots = [
  { left: "8%", top: "12%", width: 4, height: 4, duration: 3.2, delay: 0.4 },
  { left: "18%", top: "38%", width: 5, height: 5, duration: 4.1, delay: 1.2 },
  { left: "32%", top: "26%", width: 3, height: 3, duration: 3.6, delay: 0.9 },
  { left: "44%", top: "54%", width: 6, height: 6, duration: 5, delay: 1.8 },
  { left: "58%", top: "18%", width: 4, height: 4, duration: 3.5, delay: 0.6 },
  { left: "72%", top: "42%", width: 5, height: 5, duration: 4.3, delay: 1.5 },
  { left: "88%", top: "30%", width: 3, height: 3, duration: 3.1, delay: 0.3 },
  { left: "12%", top: "72%", width: 4, height: 4, duration: 4.6, delay: 1.1 },
  { left: "28%", top: "84%", width: 5, height: 5, duration: 3.8, delay: 1.7 },
  { left: "46%", top: "72%", width: 3, height: 3, duration: 4.2, delay: 0.8 },
  { left: "60%", top: "80%", width: 6, height: 6, duration: 5.2, delay: 2 },
  { left: "76%", top: "68%", width: 4, height: 4, duration: 3.7, delay: 0.5 },
  { left: "92%", top: "80%", width: 5, height: 5, duration: 4.4, delay: 1.4 },
  { left: "20%", top: "52%", width: 3, height: 3, duration: 3.9, delay: 0.7 },
  { left: "52%", top: "12%", width: 5, height: 5, duration: 4.9, delay: 1.9 },
  { left: "82%", top: "16%", width: 4, height: 4, duration: 3.3, delay: 0.2 },
  { left: "36%", top: "66%", width: 4, height: 4, duration: 4.8, delay: 1.6 },
  { left: "66%", top: "58%", width: 3, height: 3, duration: 3.4, delay: 0.9 },
  { left: "14%", top: "92%", width: 5, height: 5, duration: 4.1, delay: 1.3 },
  { left: "86%", top: "92%", width: 4, height: 4, duration: 3.6, delay: 0.4 },
] as const;

export default function ImpactSection() {
  return (
    <section id="impact" className="section-padding bg-[#111827] overflow-hidden relative">

      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-20 -right-20 w-96 h-96 rounded-full bg-black/10 animate-blob-slow" />
        <div className="absolute -bottom-20 -left-20 w-80 h-80 rounded-full bg-[#1A3A6B]/10 animate-blob" />
        {backgroundDots.map((dot, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-white/5"
            style={{
              width: dot.width,
              height: dot.height,
              left: dot.left,
              top: dot.top,
            }}
            animate={{ opacity: [0.2, 0.6, 0.2], y: [0, -10, 0] }}
            transition={{ duration: dot.duration, repeat: Infinity, delay: dot.delay }}
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
          <motion.h2 variants={fadeUp} className="font-heading text-4xl sm:text-5xl font-bold text-white mb-4">
            Numbers That Tell a{" "}
            <span className="text-[#1A3A6B]">Story of Hope</span>
          </motion.h2>
          <motion.p variants={fadeUp} className="text-lg text-neutral-300 font-body leading-relaxed">
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
          className="mt-16 bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
        >
          <div className="text-center mb-6">
            <h3 className="font-heading text-2xl font-bold text-white mb-2">Geographic Reach</h3>
            <p className="text-neutral-300 font-body text-sm">States where Shoe My Feet Foundation has made an impact</p>
          </div>
          <div className="flex flex-wrap justify-center gap-4">
            {[
              { state: "Enugu State", detail: "Our founding base — multiple rural schools", emoji: "🟢" },
              { state: "Kaduna State", detail: "Northern Nigeria — 2,000+ shoes in one outreach", emoji: "🟡" },
              { state: "Edo State", detail: "2026 expansion — Benin City outreach", emoji: "🔵" },
            ].map((item) => (
              <motion.div
                key={item.state}
                className="glass-dark  px-5 py-4 border border-white/10 hover:border-white/20 transition-colors text-center min-w-[200px]"
                whileHover={{ y: -4 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                <span className="text-2xl mb-2 block">{item.emoji}</span>
                <h4 className="font-heading font-bold text-white text-base">{item.state}</h4>
                <p className="text-orange-300 text-xs font-body mt-1">{item.detail}</p>
              </motion.div>
            ))}
          </div>
          <motion.div
            className="text-center mt-6"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={viewportConfig}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 text-neutral-300 text-sm font-body">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              Actively expanding to more Nigerian states
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
