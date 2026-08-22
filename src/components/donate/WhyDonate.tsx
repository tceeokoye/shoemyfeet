"use client";

import { motion } from "framer-motion";
import { fadeUp, staggerContainer, viewportConfig } from "@/lib/animations";

const reasons = [
  {
    icon: "👟",
    title: "Provides Proper Footwear",
    description: "Every pair of quality shoes we provide protects children's feet from injury, infections, and environmental hazards every single day.",
    color: "bg-[#f97316]",
    bg: "bg-orange-50",
    border: "border-orange-100",
  },
  {
    icon: "🎓",
    title: "Supports School Attendance",
    description: "With proper footwear, children can attend school regularly — no longer turned away at the gate or missing days due to foot pain.",
    color: "bg-[#2563eb]",
    bg: "bg-blue-50",
    border: "border-blue-100",
  },
  {
    icon: "🏥",
    title: "Improves Foot Health",
    description: "We prevent soil-transmitted diseases, parasitic infections, and injuries that disproportionately affect barefoot children in underserved communities.",
    color: "bg-[#15803d]",
    bg: "bg-[#15803d]",
    border: "border-green-100",
  },
  {
    icon: "✨",
    title: "Restores Confidence",
    description: "A new pair of shoes transforms a child's self-esteem. They walk taller, participate more actively, and dream bigger when they feel valued.",
    color: "bg-[#2563eb]",
    bg: "bg-purple-50",
    border: "border-purple-100",
  },
  {
    icon: "🏘️",
    title: "Strengthens Communities",
    description: "Our outreach programs bring communities together, foster collective responsibility for child welfare, and create lasting social change.",
    color: "bg-[#f97316]",
    bg: "bg-[#f97316]",
    border: "border-rose-100",
  },
  {
    icon: "🌱",
    title: "Creates Long-Term Impact",
    description: "Education sustained by proper footwear leads to better life outcomes, breaking cycles of poverty and empowering future generations of leaders.",
    color: "bg-[#15803d]",
    bg: "bg-[#15803d]",
    border: "border-teal-100",
  },
];

export default function WhyDonate() {
  return (
    <section className="section-padding bg-white relative overflow-hidden" aria-label="Why your donation matters">
      {/* Subtle background */}
      <div className="absolute inset-0 bg-[#2563eb] pointer-events-none" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[1px] bg-[#2563eb]" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          className="text-center mb-16"
        >
          <motion.span variants={fadeUp} className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange-100 border border-orange-200 text-warm-orange-dark font-bold text-sm mb-4">
            💡 Why It Matters
          </motion.span>
          <motion.h2 variants={fadeUp} className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1a1a2e] mb-5">
            Why Your Donation{" "}
            <span className="text-warm-orange">Matters</span>
          </motion.h2>
          <motion.p variants={fadeUp} className="text-gray-600 font-body text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
            Every contribution directly transforms lives. Here&apos;s how your generosity creates ripples of change across Nigerian communities.
          </motion.p>
        </motion.div>

        {/* Cards Grid */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {reasons.map((reason, index) => (
            <motion.div
              key={reason.title}
              variants={fadeUp}
              custom={index}
              whileHover={{ y: -8, scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300, damping: 22 }}
              className={`relative rounded-3xl p-6 border ${reason.border} reason.bg shadow-sm hover:shadow-xl transition-shadow group overflow-hidden`}
            >
              {/* Decorative glow */}
              <div className={`absolute -top-8 -right-8 w-24 h-24 rounded-full reason.color opacity-10 group-hover:opacity-20 transition-opacity blur-xl`} />

              <div className={`w-14 h-14 rounded-2xl reason.color flex items-center justify-center shadow-lg mb-4 text-2xl`}>
                {reason.icon}
              </div>
              <h3 className="font-heading font-bold text-xl text-[#1a1a2e] mb-3">{reason.title}</h3>
              <p className="text-gray-600 font-body text-sm leading-relaxed">{reason.description}</p>

              {/* Bottom accent line */}
              <motion.div
                className={`absolute bottom-0 left-0 h-1 reason.color rounded-full`}
                initial={{ width: "0%" }}
                whileInView={{ width: "100%" }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.1 + 0.3, ease: [0.22, 1, 0.36, 1] }}
              />
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          className="text-center mt-12"
        >
          <a href="#donate-widget" className="btn-orange text-base">
            <span>Make a Difference Now</span>
            <span className="text-lg">→</span>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
