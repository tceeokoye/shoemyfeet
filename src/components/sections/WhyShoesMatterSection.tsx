"use client";

import { motion } from "framer-motion";
import { fadeUp, staggerContainer, viewportConfig } from "@/lib/animations";
import { WHY_SHOES_MATTER } from "@/lib/constants";
import {
  HeartPulse,
  GraduationCap,
  Sparkles,
  Shield,
  Users,
  TrendingUp,
} from "lucide-react";

const iconMap: Record<string, React.ReactNode> = {
  "heart-pulse": <HeartPulse size={28} />,
  "graduation-cap": <GraduationCap size={28} />,
  sparkles: <Sparkles size={28} />,
  shield: <Shield size={28} />,
  users: <Users size={28} />,
  "trending-up": <TrendingUp size={28} />,
};

export default function WhyShoesMatterSection() {
  return (
    <section className="section-padding bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <motion.div
          className="text-center max-w-3xl mx-auto mb-16"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
        >
          <motion.span variants={fadeUp} className="inline-block px-4 py-1.5 rounded-full bg-orange-100 text-[#f97316] text-sm font-bold mb-4 border border-slate-200">
            Why It Matters
          </motion.span>
          <motion.h2 variants={fadeUp} className="font-heading text-4xl sm:text-5xl font-bold text-[#1a1a2e] mb-4">
            A Pair of Shoes Is{" "}
            <span className="text-[#f97316]">More Than Footwear</span>
          </motion.h2>
          <motion.p variants={fadeUp} className="text-lg text-gray-600 font-body leading-relaxed">
            For millions of Nigerian children, the absence of proper school shoes
            is not just uncomfortable — it is a barrier that cuts off their access
            to health, dignity, and education.
          </motion.p>
        </motion.div>

        {/* Cards Grid */}
        <motion.div
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
        >
          {WHY_SHOES_MATTER.map((item, index) => (
            <motion.div
              key={item.title}
              variants={fadeUp}
              custom={index}
              className="group relative bg-white rounded-3xl p-6 border border-gray-100 shadow-md hover:shadow-2xl transition-all duration-500 overflow-hidden cursor-default"
              whileHover={{ y: -8, scale: 1.02 }}
              transition={{ type: "spring", stiffness: 200, damping: 20 }}
            >
              {/* Gradient background on hover */}
              <div className={`absolute inset-0 item.color opacity-0 group-hover:opacity-5 transition-opacity duration-500 rounded-3xl`} />

              {/* Gradient border effect */}
              <div className={`absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
                style={{ background: "#f97316", boxShadow: `inset 0 0 0 1.5px rgba(26,58,107,0.1)` }}
              />

              {/* Icon */}
              <motion.div
                className={`w-14 h-14 rounded-2xl item.color flex items-center justify-center mb-5 text-white shadow-lg group-hover:shadow-xl transition-shadow`}
                whileHover={{ rotate: [0, -5, 5, 0] }}
                transition={{ duration: 0.5 }}
              >
                {iconMap[item.icon]}
              </motion.div>

              {/* Stat badge */}
              <div className={`inline-block px-3 py-1 rounded-full text-xs font-bold mb-3 ${item.bgColor}`}
                style={{ color: "inherit" }}>
                <span className={`item.color bg-clip-text text-transparent font-bold`}>
                  {item.stat}
                </span>
              </div>

              <h3 className="font-heading font-bold text-xl text-[#1a1a2e] mb-2 group-hover:text-[#f97316] transition-colors">
                {item.title}
              </h3>
              <p className="text-gray-600 font-body text-sm leading-relaxed">
                {item.description}
              </p>

              {/* Bottom accent line */}
              <motion.div
                className={`absolute bottom-0 left-0 right-0 h-0.5 item.color rounded-b-3xl`}
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                style={{ originX: 0 }}
              />
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          className="mt-12 text-center"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
        >
          <div className="inline-block bg-[#09090b] rounded-2xl px-8 py-6 border border-slate-100">
            <p className="font-body text-gray-600 mb-4">
              <span className="font-bold text-[#f97316]">$20 can provide 1 pair of shoes</span>{" "}
              and change a child&apos;s world forever.
            </p>
            <a href="#donate" className="btn-orange inline-flex">
              <span>Help a Child Today</span>
              <span className="text-lg">👟</span>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
