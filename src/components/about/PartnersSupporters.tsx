"use client";

import { motion } from "framer-motion";
import { fadeUp, staggerContainer, viewportConfig } from "@/lib/animations";

const partners = [
  { name: "Access Bank", type: "CSR Sponsor", initials: "AB", color: "bg-[#f97316]" },
  { name: "The Rose Project", type: "Initiative Partner", initials: "RP", color: "bg-[#f97316]" },
  { name: "UBA Her Progress", type: "Recognition Partner", initials: "UB", color: "bg-[#1a3a6b]" },
  { name: "iF Design Award", type: "Global Recognition", initials: "iF", color: "bg-[#f59e0b]" },
  { name: "Häagen-Dazs Initiative", type: "Supporting Partner", initials: "HD", color: "bg-[#1a3a6b]" },
  { name: "Kaduna Education Ministry", type: "State Partner", initials: "KM", color: "bg-[#15803d]" },
  { name: "Enugu State Govt", type: "State Partner", initials: "ES", color: "bg-[#15803d]" },
  { name: "CAC Nigeria", type: "Regulatory Trustee", initials: "CA", color: "bg-slate-700" },
];

export default function PartnersSupporters() {
  return (
    <section className="py-20 bg-[#1a3a6b] overflow-hidden border-t border-gray-100 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center mb-12">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          className="max-w-3xl mx-auto"
        >
          <motion.span
            variants={fadeUp}
            className="inline-block px-4 py-1.5 rounded-full bg-blue-100 text-royal-blue text-xs font-bold font-body mb-3 border border-blue-200"
          >
            Partners & Supporters
          </motion.span>
          <motion.h2
            variants={fadeUp}
            className="font-heading text-3xl sm:text-4xl font-bold text-[#1a1a2e] mb-4"
          >
            Powered by <span className="text-royal-blue">Generosity & Collaboration</span>
          </motion.h2>
          <motion.p
            variants={fadeUp}
            className="text-base sm:text-lg text-gray-600 font-body leading-relaxed max-w-2xl mx-auto"
          >
            We extend our deepest gratitude to all partner organizations, CSR sponsors, selfless volunteers, and generous individual donors whose unwavering support empowers thousands of children to walk forward with pride.
          </motion.p>
        </motion.div>
      </div>

      {/* Marquee Track */}
      <div className="relative flex overflow-x-hidden group py-4">
        {/* Gradient Fade Overlays */}
        <div className="absolute left-0 top-0 bottom-0 w-24 sm:w-40 bg-[#1a3a6b] z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-24 sm:w-40 bg-[#1a3a6b] z-10 pointer-events-none" />

        {/* Marquee Row 1 */}
        <div className="flex shrink-0 animate-marquee group-hover:[animation-play-state:paused] items-center gap-8 py-2">
          {partners.concat(partners).map((partner, index) => (
            <div
              key={`about-partner-1-${index}`}
              className="flex items-center gap-4 px-6 py-3.5 rounded-2xl bg-white border border-gray-200/70 shadow-sm hover:shadow-md hover:border-blue-300 transition-all shrink-0 cursor-default"
            >
              <div className={`w-10 h-10 rounded-xl partner.color flex items-center justify-center text-white font-heading font-bold text-sm shadow-sm`}>
                {partner.initials}
              </div>
              <div className="text-left">
                <span className="font-heading font-bold text-base text-[#1a1a2e] block leading-none">
                  {partner.name}
                </span>
                <span className="text-xs text-gray-400 font-body font-medium block mt-1">
                  {partner.type}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Marquee Row 2 (duplicate for infinite seamless scroll) */}
        <div className="flex shrink-0 animate-marquee group-hover:[animation-play-state:paused] items-center gap-8 py-2" aria-hidden="true">
          {partners.concat(partners).map((partner, index) => (
            <div
              key={`about-partner-2-${index}`}
              className="flex items-center gap-4 px-6 py-3.5 rounded-2xl bg-white border border-gray-200/70 shadow-sm hover:shadow-md hover:border-blue-300 transition-all shrink-0 cursor-default"
            >
              <div className={`w-10 h-10 rounded-xl partner.color flex items-center justify-center text-white font-heading font-bold text-sm shadow-sm`}>
                {partner.initials}
              </div>
              <div className="text-left">
                <span className="font-heading font-bold text-base text-[#1a1a2e] block leading-none">
                  {partner.name}
                </span>
                <span className="text-xs text-gray-400 font-body font-medium block mt-1">
                  {partner.type}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
