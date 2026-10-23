"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { staggerContainer, fadeUp, viewportConfig } from "@/lib/animations";
import { Search, ClipboardList, Handshake, Package, Sparkles, ChartNoAxesColumnIncreasing } from "lucide-react";

const steps = [
  {
    number: "01",
    title: "Community Assessment",
    desc: "We partner with local leaders, schools, and health workers to assess communities and identify children in greatest need of footwear support.",
    icon: Search,
    color: "bg-[#111827]",
    bg: "bg-slate-50",
    border: "border-slate-100",
  },
  {
    number: "02",
    title: "Identify Children in Need",
    desc: "School teachers and community representatives create verified lists of children lacking adequate footwear, prioritizing the most vulnerable.",
    icon: ClipboardList,
    color: "bg-[#16A34A]",
    bg: "bg-emerald-50",
    border: "border-emerald-100",
  },
  {
    number: "03",
    title: "Collect Shoes & Donations",
    desc: "Through individual donors, corporate CSR partnerships, and community drives, we collect quality shoes and financial contributions.",
    icon: Handshake,
    color: "bg-[#1A3A6B]",
    bg: "bg-[#F3F4F6]",
    border: "border-orange-100",
  },
  {
    number: "04",
    title: "Prepare and Sort Supplies",
    desc: "Our volunteers carefully inspect, clean, sort by size, and package every pair to ensure a dignified, perfectly-fitting shoe for each child.",
    icon: Package,
    color: "bg-[#111827]",
    bg: "bg-purple-50",
    border: "border-purple-100",
  },
  {
    number: "05",
    title: "Community Distribution",
    desc: "We host joyful distribution events where volunteers personally fit each child with their new shoes in a celebration of dignity and hope.",
    icon: Sparkles,
    color: "bg-[#1A3A6B]",
    bg: "bg-rose-50",
    border: "border-rose-100",
  },
  {
    number: "06",
    title: "Follow-up & Measure Impact",
    desc: "Post-distribution, we track school attendance, gather feedback from teachers and families, and publish impact reports for accountability.",
    icon: ChartNoAxesColumnIncreasing,
    color: "bg-[#1A3A6B]",
    bg: "bg-[#FFFFFF]",
    border: "border-[#d4dcd4]",
  },
];

export default function HowProgramsWork() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.1 });

  return (
    <section className="section-padding bg-[#f8fafc] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          className="text-center max-w-3xl mx-auto mb-16"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
        >
          <motion.span
            variants={fadeUp}
            className="inline-block px-4 py-1.5 rounded-full bg-orange-100 text-[#1A3A6B] text-xs sm:text-sm font-bold border border-slate-200 mb-4"
          >
            Our Process
          </motion.span>
          <motion.h2
            variants={fadeUp}
            className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-[#111827] mb-4 leading-tight"
          >
            How Our Programs <span className="text-[#1A3A6B]">Work</span>
          </motion.h2>
          <motion.p
            variants={fadeUp}
            className="text-base sm:text-lg text-gray-600 font-body leading-relaxed"
          >
            From identifying children in remote communities to celebrating their first day in new shoes —
            every step is executed with care, love, and accountability.
          </motion.p>
        </motion.div>

        {/* Timeline */}
        <div ref={ref} className="relative max-w-5xl mx-auto">
          {/* Vertical line (desktop) */}
          <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[#1A3A6B]/10 via-[#1A3A6B]/40 to-[#1A3A6B]/10 -translate-x-1/2" />

          <div className="flex flex-col gap-12 lg:gap-16">
            {steps.map((step, i) => {
              const isEven = i % 2 === 0;
              return (
                <motion.div
                  key={step.number}
                  initial={{ opacity: 0, y: 50, x: isEven ? -30 : 30 }}
                  animate={inView ? { opacity: 1, y: 0, x: 0 } : {}}
                  transition={{ type: "spring" as const, stiffness: 70, damping: 18, delay: i * 0.12 }}
                  className={`relative flex flex-col lg:flex-row items-center gap-8 ${isEven ? "lg:flex-row" : "lg:flex-row-reverse"}`}
                >
                  {/* Card */}
                  <div className="w-full lg:w-[calc(50%-3rem)]">
                    <div className={`group bg-white rounded-2xl p-7 border ${step.border} shadow-xl hover:shadow-2xl transition-all duration-500 relative overflow-hidden`}>
                      <div className={`absolute top-0 left-0 right-0 h-1.5 step.color`} />
                      <div className="flex items-center justify-between mb-4">
                        <span className={`inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-extrabold font-body ${step.bg} text-gray-800 border border-black/5`}>
                          Step {step.number}
                        </span>
                        <step.icon size={28} className="text-[#1A3A6B]" strokeWidth={1.8} aria-hidden="true" />
                      </div>
                      <h3 className="font-heading font-bold text-xl text-[#111827] mb-3 group-hover:text-[#1A3A6B] transition-colors">
                        {step.title}
                      </h3>
                      <p className="font-body text-gray-600 text-sm leading-relaxed">{step.desc}</p>
                    </div>
                  </div>

                  {/* Circle Indicator (desktop) */}
                  <div
                    className="hidden lg:flex absolute left-1/2 -translate-x-1/2 w-14 h-14 rounded-full border-4 border-white shadow-2xl items-center justify-center font-heading font-extrabold text-white text-lg z-10"
                    style={{ background: "#1A3A6B" }}
                  >
                    {step.number}
                  </div>

                  {/* Spacer */}
                  <div className="hidden lg:block w-full lg:w-[calc(50%-3rem)]" />
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
