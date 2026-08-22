"use client";

import { motion } from "framer-motion";
import { fadeUp, staggerContainer, viewportConfig } from "@/lib/animations";
import { PARTNERS } from "@/lib/constants";

const partnerLogos = [
  { name: "Access Bank", color: "#FF6B00", initial: "AB" },
  { name: "The Rose Project", color: "#E91E8C", initial: "RP" },
  { name: "UBA Her Progress", color: "#D4151A", initial: "UBA" },
  { name: "iF Design Award", color: "#333", initial: "iF" },
  { name: "Häagen-Dazs", color: "#8B1A1A", initial: "HD" },
  { name: "CAC Nigeria", color: "#16a34a", initial: "CAC" },
  { name: "UN SDG", color: "#009EDB", initial: "UN" },
  { name: "Media Partners", color: "#4f46e5", initial: "MP" },
];

const doubled = [...partnerLogos, ...partnerLogos];

export default function TrustedBySection() {
  return (
    <section className="py-16 bg-white border-y border-gray-100 overflow-hidden" aria-label="Partners and supporters">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-10"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
        >
          <motion.p variants={fadeUp} className="text-sm font-bold text-gray-400 tracking-widest uppercase font-body mb-2">
            Trusted & Supported By
          </motion.p>
          <motion.h2 variants={fadeUp} className="font-heading text-2xl text-gray-700">
            Partners Who Believe Every Child Deserves Better
          </motion.h2>
        </motion.div>
      </div>

      {/* Marquee */}
      <div className="relative">
        {/* Fade edges */}
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-[#2563eb] z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-[#2563eb] z-10" />

        <div className="flex overflow-hidden">
          <div className="flex gap-8 animate-marquee shrink-0">
            {doubled.map((partner, i) => (
              <motion.div
                key={`logo-${i}`}
                className="flex items-center gap-3 px-6 py-4 rounded-2xl bg-gray-50 border border-gray-100 hover:border-gray-200 hover:shadow-md transition-all cursor-default shrink-0 group"
                whileHover={{ y: -3, scale: 1.03 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center text-white font-bold text-sm font-heading shadow-sm group-hover:shadow-md transition-shadow"
                  style={{ background: "#2563eb" }}
                >
                  {partner.initial}
                </div>
                <span className="text-sm font-bold text-gray-600 font-body whitespace-nowrap group-hover:text-gray-800 transition-colors">
                  {partner.name}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* SDG Goals strip */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-10">
        <motion.div
          className="flex flex-wrap justify-center gap-3"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
        >
          {[
            { num: "SDG 1", label: "No Poverty", color: "#E5243B" },
            { num: "SDG 3", label: "Good Health", color: "#4C9F38" },
            { num: "SDG 4", label: "Quality Education", color: "#C5192D" },
            { num: "SDG 10", label: "Reduced Inequalities", color: "#DD1367" },
            { num: "SDG 17", label: "Partnerships", color: "#19486A" },
          ].map((sdg) => (
            <motion.div
              key={sdg.num}
              variants={fadeUp}
              className="flex items-center gap-2 px-3 py-1.5 rounded-full border text-xs font-bold font-body"
              style={{ borderColor: sdg.color + "40", color: sdg.color, background: sdg.color + "10" }}
              whileHover={{ scale: 1.05 }}
            >
              <span className="font-heading font-bold">{sdg.num}</span>
              <span>{sdg.label}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
