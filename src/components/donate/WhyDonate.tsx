"use client";

import { motion } from "framer-motion";
import { fadeUp, staggerContainer, viewportConfig } from "@/lib/animations";

const reasons = [
  {
    title: "Provides Proper Footwear",
    description: "Every pair of quality shoes we provide protects children's feet from injury, infections, and environmental hazards every single day.",
  },
  {
    title: "Supports School Attendance",
    description: "With proper footwear, children can attend school regularly — no longer turned away at the gate or missing days due to foot pain.",
  },
  {
    title: "Improves Foot Health",
    description: "We prevent soil-transmitted diseases, parasitic infections, and injuries that disproportionately affect barefoot children in underserved communities.",
  },
  {
    title: "Restores Confidence",
    description: "A new pair of shoes transforms a child's self-esteem. They walk taller, participate more actively, and dream bigger when they feel valued.",
  },
  {
    title: "Strengthens Communities",
    description: "Our outreach programs bring communities together, foster collective responsibility for child welfare, and create lasting social change.",
  },
  {
    title: "Creates Long-Term Impact",
    description: "Education sustained by proper footwear leads to better life outcomes, breaking cycles of poverty and empowering future generations of leaders.",
  },
];

export default function WhyDonate() {
  return (
    <section className="section-padding bg-[#FFFFFF]" aria-label="Why your donation matters">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          className="text-center mb-16"
        >
          <motion.span variants={fadeUp} className="text-sm font-semibold uppercase tracking-wide text-[#142E56] mb-4">
            Why It Matters
          </motion.span>
          <motion.h2 variants={fadeUp} className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-[#111827] mb-5">
            Why Your Donation{" "}
            <span className="text-[#1A3A6B]">Matters</span>
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
              className="rounded-xl bg-white p-6 shadow-sm"
            >
              <h3 className="font-heading font-bold text-xl text-[#111827] mb-3">{reason.title}</h3>
              <p className="text-gray-600 font-body text-sm leading-relaxed">{reason.description}</p>
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
          <a href="#donate-widget" className="btn-primary text-base">
            Make a Difference Now
          </a>
        </motion.div>
      </div>
    </section>
  );
}
