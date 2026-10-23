"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { staggerContainer, fadeUp, viewportConfig } from "@/lib/animations";

const values = [
  {
    icon: "❤️",
    title: "Compassion",
    desc: "We lead with deep empathy, treating every child with the warmth, care, and love they deserve.",
    gradient: "bg-[#1A3A6B]",
    border: "border-rose-100 hover:border-rose-300",
    bg: "bg-rose-50/50",
  },
  {
    icon: "👑",
    title: "Dignity",
    desc: "Every child is intrinsically valuable. Our work is grounded in honoring the worth and self-respect of every student.",
    gradient: "bg-[#1A3A6B]",
    border: "border-slate-200 hover:border-[#1A3A6B]",
    bg: "bg-[#FFFFFF]/50",
  },
  {
    icon: "🛡️",
    title: "Integrity",
    desc: "We maintain absolute transparency in every dollar donated, operating with accountability to our supporters and communities.",
    gradient: "bg-[#111827]",
    border: "border-slate-100 hover:border-slate-200",
    bg: "bg-slate-50/50",
  },
  {
    icon: "🤝",
    title: "Community",
    desc: "Transformative change happens together. We partner with teachers, parents, and local leaders for sustainable impact.",
    gradient: "bg-[#F97316]",
    border: "border-orange-100 hover:border-orange-300",
    bg: "bg-orange-50/50",
  },
  {
    icon: "🌱",
    title: "Hope",
    desc: "We believe every child carries immense potential. A simple pair of shoes unlocks their confidence to step forward.",
    gradient: "bg-[#111827]",
    border: "border-purple-100 hover:border-purple-300",
    bg: "bg-purple-50/50",
  },
  {
    icon: "✨",
    title: "Excellence",
    desc: "We hold ourselves to the highest standards in footwear durability, fitting accuracy, and organizational stewardship.",
    gradient: "bg-[#1A3A6B]",
    border: "border-orange-100 hover:border-orange-300",
    bg: "bg-[#F3F4F6]/50",
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 45 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      type: "spring" as const,
      stiffness: 80,
      damping: 18,
      delay: i * 0.1,
    },
  }),
};

export default function CoreValues() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.15 });

  return (
    <section className="section-padding bg-white overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        <motion.div
          className="text-center max-w-2xl mx-auto mb-16"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
        >
          <motion.span variants={fadeUp} className="inline-block px-4 py-1.5 rounded-full bg-orange-100 text-[#1A3A6B] text-xs font-bold font-body mb-3 border border-orange-200">
            Our Core Values
          </motion.span>
          <motion.h2 variants={fadeUp} className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-[#111827] leading-tight">
            The Principles That <span className="text-[#1A3A6B]">Guide Us</span>
          </motion.h2>
          <motion.p variants={fadeUp} className="text-slate-600 font-body text-base mt-4 leading-relaxed">
            Six unwavering commitments that shape how we serve children, partner with communities, and steward resources.
          </motion.p>
        </motion.div>

        {/* 6 Clean White Cards */}
        <div ref={ref} className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {values.map((v, i) => (
            <motion.div
              key={v.title}
              custom={i}
              variants={cardVariants}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              whileHover={{ y: -6, transition: { type: "spring" as const, stiffness: 280, damping: 22 } }}
              className="bg-white rounded-2xl p-8 border border-slate-100 shadow-md hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Icon Container */}
                <div className="w-14 h-14  bg-slate-50 border border-slate-100 flex items-center justify-center text-2xl shadow-sm mb-6">
                  {v.icon}
                </div>

                <h3 className="font-heading font-bold text-2xl text-[#111827] mb-3">
                  {v.title}
                </h3>
                <p className="font-body text-slate-600 text-sm leading-relaxed">{v.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
