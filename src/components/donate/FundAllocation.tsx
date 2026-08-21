"use client";

import { motion } from "framer-motion";
import { fadeUp, staggerContainer, viewportConfig } from "@/lib/animations";

const allocations = [
  { label: "Shoe Procurement", pct: 55, color: "bg-[#f97316]", icon: "👟", detail: "Direct purchase of quality shoes for children" },
  { label: "Transportation", pct: 15, color: "bg-[#1a3a6b]", icon: "🚚", detail: "Logistics and delivery to communities" },
  { label: "Community Outreach", pct: 12, color: "bg-[#15803d]", icon: "🏘️", detail: "Events, coordination, and community engagement" },
  { label: "Volunteer Support", pct: 8, color: "bg-[#1a3a6b]", icon: "🙌", detail: "Training, coordination, and volunteer resources" },
  { label: "Education Materials", pct: 5, color: "bg-[#15803d]", icon: "📚", detail: "Complementary school supplies and materials" },
  { label: "Administrative", pct: 5, color: "bg-slate-700", icon: "🏢", detail: "Operations, reporting, and governance" },
];

export default function FundAllocation() {
  return (
    <section className="section-padding bg-[#0f2347] text-white relative overflow-hidden" aria-label="Where your money goes">
      {/* Background decorations */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-96 h-96 rounded-full opacity-5 bg-blue-400 -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 right-0 w-80 h-80 rounded-full opacity-5 bg-orange-400 translate-x-1/2 translate-y-1/2" />
        {/* Grid pattern */}
        <div
          className="absolute inset-0 opacity-3"
          style={{
            backgroundImage: "transparent 1px, transparent 1px)",
            backgroundSize: "32px 32px",
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={viewportConfig} className="text-center mb-14">
          <motion.span variants={fadeUp} className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 text-white font-bold text-sm mb-4">
            📊 Full Transparency
          </motion.span>
          <motion.h2 variants={fadeUp} className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-5">
            Where Your Money{" "}
            <span className="text-warm-orange">Goes</span>
          </motion.h2>
          <motion.p variants={fadeUp} className="text-blue-200 font-body text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
            We believe in radical transparency. Every naira is accounted for and directed towards maximizing impact for Nigerian children.
          </motion.p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: Animated bar chart */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={viewportConfig}
            className="space-y-5"
          >
            {allocations.map((item, index) => (
              <motion.div key={item.label} variants={fadeUp} className="group">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-2">
                    <span className="text-lg">{item.icon}</span>
                    <span className="font-body font-semibold text-white text-sm">{item.label}</span>
                  </div>
                  <span className="font-heading font-bold text-warm-orange text-lg">{item.pct}%</span>
                </div>
                <div className="h-3 bg-white/10 rounded-full overflow-hidden">
                  <motion.div
                    className={`h-full rounded-full item.color`}
                    initial={{ width: "0%" }}
                    whileInView={{ width: `${item.pct}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: index * 0.1 + 0.2, ease: [0.22, 1, 0.36, 1] }}
                  />
                </div>
                <p className="text-xs text-blue-300 font-body mt-1 leading-relaxed">{item.detail}</p>
              </motion.div>
            ))}
          </motion.div>

          {/* Right: Visual donut summary + text */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={viewportConfig}
            className="flex flex-col items-center gap-8"
          >
            {/* Circular visual */}
            <motion.div variants={fadeUp} className="relative w-56 h-56">
              <svg viewBox="0 0 120 120" className="w-full h-full -rotate-90">
                {(() => {
                  let cumulative = 0;
                  return allocations.map((item) => {
                    const strokeDasharray = `${item.pct} ${100 - item.pct}`;
                    const strokeDashoffset = 100 - cumulative;
                    cumulative += item.pct;
                    return (
                      <motion.circle
                        key={item.label}
                        cx="60"
                        cy="60"
                        r="50"
                        fill="none"
                        strokeWidth="12"
                        className="transition-all"
                        style={{
                          stroke: item.color.includes("orange")
                            ? "#f97316"
                            : item.color.includes("blue-6")
                            ? "#2563eb"
                            : item.color.includes("forest")
                            ? "#16a34a"
                            : item.color.includes("purple")
                            ? "#9333ea"
                            : item.color.includes("teal")
                            ? "#0d9488"
                            : "#6b7280",
                          strokeDasharray: `${(item.pct / 100) * 314.16} 314.16`,
                          strokeDashoffset: -(((cumulative - item.pct) / 100) * 314.16),
                        }}
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.3 }}
                      />
                    );
                  });
                })()}
              </svg>
              <div className="absolute inset-0 flex flex-col items-center justify-center">
                <span className="font-heading text-4xl font-bold text-white">95%</span>
                <span className="text-xs text-blue-300 font-body font-semibold">Direct Impact</span>
              </div>
            </motion.div>

            {/* Key stats */}
            <motion.div variants={fadeUp} className="text-center space-y-4 w-full max-w-sm">
              <p className="text-blue-200 font-body text-sm leading-relaxed">
                <strong className="text-warm-orange">95 cents</strong> of every ₦1 donated goes directly to program expenses — shoes, outreach, transportation, and education.
              </p>

              <div className="grid grid-cols-2 gap-3">
                {[
                  { label: "Program Expenses", value: "95%", icon: "✅" },
                  { label: "Administrative", value: "5%", icon: "📋" },
                  { label: "Shoes Distributed", value: "6,500+", icon: "👟" },
                  { label: "Communities Reached", value: "38+", icon: "🗺️" },
                ].map((stat) => (
                  <div key={stat.label} className="glass-dark rounded-2xl p-3 text-center border border-white/10">
                    <span className="text-xl">{stat.icon}</span>
                    <div className="font-heading font-bold text-white text-xl mt-1">{stat.value}</div>
                    <div className="text-[10px] text-blue-300 font-body mt-0.5">{stat.label}</div>
                  </div>
                ))}
              </div>

              <a href="/contact" className="btn-orange text-sm w-full justify-center py-3.5">
                Download Annual Report
              </a>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
