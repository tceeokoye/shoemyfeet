"use client";

import { motion } from "framer-motion";
import { fadeUp, staggerContainer, viewportConfig } from "@/lib/animations";

const cards = [
  {
    label: "Our Mission",
    icon: "🎯",
    gradient: "bg-[#1a3a6b]",
    border: "border-blue-200 hover:border-blue-400",
    bg: "bg-blue-50/60",
    text: "To provide quality school shoes that protect children's health, restore their dignity, and empower them to pursue education, confidence, and brighter futures without physical or social barriers.",
    tag: "What Drives Us Daily",
    tagColor: "bg-blue-100 text-royal-blue",
  },
  {
    label: "Our Vision",
    icon: "🌟",
    gradient: "bg-[#f97316]",
    border: "border-orange-200 hover:border-orange-400",
    bg: "bg-orange-50/60",
    text: "A world where no child is held back, excluded from school, or limited in their potential simply because they lack proper footwear.",
    tag: "Our Horizon",
    tagColor: "bg-orange-100  text-warm-orange-dark",
  },
];

export default function MissionVision() {
  return (
    <section className="section-padding bg-[#f8fafc] overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        <motion.div
          className="text-center max-w-2xl mx-auto mb-14"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
        >
          <motion.span variants={fadeUp} className="inline-block px-4 py-1.5 rounded-full bg-blue-100 text-royal-blue text-xs font-bold font-body mb-3 border border-blue-200">
            Mission & Vision
          </motion.span>
          <motion.h2 variants={fadeUp} className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1a1a2e] leading-tight">
            Guided by Purpose & <span className="text-royal-blue">Deep Compassion</span>
          </motion.h2>
        </motion.div>

        {/* 2 Premium Cards */}
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {cards.map((card, i) => (
            <motion.div
              key={card.label}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ type: "spring" as const, stiffness: 80, damping: 18, delay: i * 0.15 }}
              whileHover={{ y: -8, scale: 1.01, transition: { type: "spring" as const, stiffness: 300, damping: 20 } }}
              className={`group relative rounded-3xl p-8 sm:p-10 border ${card.border} ${card.bg} shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden flex flex-col justify-between`}
            >
              {/* Top Accent Strip */}
              <div className={`absolute top-0 left-0 right-0 h-2 card.gradient rounded-t-3xl`} />

              <div>
                {/* Header Badge */}
                <div className="flex items-center justify-between mb-6">
                  <span className={`inline-block text-xs font-extrabold font-body px-3.5 py-1 rounded-full ${card.tagColor}`}>
                    {card.tag}
                  </span>
                  <div className={`w-14 h-14 rounded-2xl card.gradient flex items-center justify-center text-3xl shadow-lg group-hover:scale-110 transition-transform duration-300 text-white`}>
                    {card.icon}
                  </div>
                </div>

                <h3 className="font-heading text-3xl font-bold text-[#1a1a2e] mb-4">{card.label}</h3>
                <p className="font-body text-gray-700 text-base sm:text-lg leading-relaxed">{card.text}</p>
              </div>

              {/* Bottom Growing Indicator */}
              <div className={`h-1.5 w-12 rounded-full card.gradient mt-8 group-hover:w-full transition-all duration-500`} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
