"use client";

import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { staggerContainer, fadeUp, viewportConfig } from "@/lib/animations";
import { TIMELINE } from "@/lib/constants";

const fourSteps = [
  {
    step: "01",
    title: "Identify Communities in Need",
    subtitle: "Needs Assessment & School Registration",
    description:
      "We collaborate closely with school administrators, community elders, and local leaders to identify primary schools where children lack adequate footwear and face severe hardship.",
    icon: "🔍",
    color: "bg-[#09090b]",
    bg: "bg-slate-50",
    border: "border-slate-100",
    details: ["School registration & verification", "Child shoe sizing audits", "Local stakeholder meetings"],
  },
  {
    step: "02",
    title: "Collect Shoes Through Donations & Partnerships",
    subtitle: "Sourcing & Corporate CSR",
    description:
      "Through generous individual donations, corporate CSR sponsorships (such as Access Bank), and shoe manufacturing partnerships, we secure high-quality, durable school shoes.",
    icon: "🤝",
    color: "bg-[#f97316]",
    bg: "bg-orange-50",
    border: "border-orange-100",
    details: ["Corporate CSR matching", "Donor drive campaigns", "Quality manufacturing standards"],
  },
  {
    step: "03",
    title: "Sort and Prepare Every Pair",
    subtitle: "Quality Assurance & Custom Fitting Preparation",
    description:
      "Our dedicated volunteers carefully inspect, categorize, and organize every pair of shoes by size, gender, and school specification to guarantee a perfect fit for every child.",
    icon: "📦",
    color: "bg-[#15803d]",
    bg: "bg-emerald-50",
    border: "border-emerald-100",
    details: ["Individual quality inspection", "Sizing categorisation", "Eco-friendly distribution packaging"],
  },
  {
    step: "04",
    title: "Distribute Shoes Directly to Children",
    subtitle: "Dignified Fitting & Empowerment Celebration",
    description:
      "We host joyous distribution events at schools where volunteers personally fit each child with new shoes, celebrate their educational journey, and instill confidence.",
    icon: "✨",
    color: "bg-[#09090b]",
    bg: "bg-purple-50",
    border: "border-purple-100",
    details: ["Personal shoe fitting events", "Child empowerment sessions", "Impact tracking & teacher follow-up"],
  },
];

export default function HowWeWork() {
  const [activeTab, setActiveTab] = useState<"process" | "timeline">("process");
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.1 });

  return (
    <section className="section-padding bg-[#f8fafc] overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <motion.div
          className="text-center max-w-3xl mx-auto mb-12"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
        >
          <motion.span
            variants={fadeUp}
            className="inline-block px-4 py-1.5 rounded-full bg-orange-100 text-[#f97316] text-xs sm:text-sm font-bold font-body mb-3 border border-orange-200"
          >
            How We Work
          </motion.span>
          <motion.h2
            variants={fadeUp}
            className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0a0a0a] mb-4 leading-tight"
          >
            Our 4-Step <span className="text-[#f97316]">Distribution Model</span>
          </motion.h2>
          <motion.p
            variants={fadeUp}
            className="text-base sm:text-lg text-slate-600 font-body leading-relaxed mb-8"
          >
            From identifying children in remote communities to personal fitting events, every step is executed with care, transparency, and dignity.
          </motion.p>

          {/* Toggle buttons */}
          <motion.div variants={fadeUp} className="inline-flex p-1.5 rounded-full bg-slate-100 border border-slate-200 shadow-inner">
            <button
              onClick={() => setActiveTab("process")}
              className={`px-6 py-2.5 rounded-full text-xs sm:text-sm font-bold font-body transition-all duration-300 ${
                activeTab === "process"
                  ? "bg-black text-white shadow-md"
                  : "text-slate-600 hover:text-black"
              }`}
            >
              4-Step Workflow
            </button>
            <button
              onClick={() => setActiveTab("timeline")}
              className={`px-6 py-2.5 rounded-full text-xs sm:text-sm font-bold font-body transition-all duration-300 ${
                activeTab === "timeline"
                  ? "bg-black text-white shadow-md"
                  : "text-slate-600 hover:text-black"
              }`}
            >
              Foundation History
            </button>
          </motion.div>
        </motion.div>

        {/* Tab 1: 4-Step Timeline Process */}
        {activeTab === "process" && (
          <div ref={ref} className="relative max-w-5xl mx-auto">
            {/* Connecting Line across steps on Desktop */}
            <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-slate-200 -translate-x-1/2 rounded-full" />

            <div className="flex flex-col gap-12 lg:gap-16">
              {fourSteps.map((item, i) => {
                const isEven = i % 2 === 0;
                return (
                  <motion.div
                    key={item.step}
                    initial={{ opacity: 0, y: 50, x: isEven ? -30 : 30 }}
                    animate={inView ? { opacity: 1, y: 0, x: 0 } : {}}
                    transition={{ type: "spring" as const, stiffness: 70, damping: 18, delay: i * 0.15 }}
                    className={`relative flex flex-col lg:flex-row items-center gap-8 ${
                      isEven ? "lg:flex-row" : "lg:flex-row-reverse"
                    }`}
                  >
                    {/* Content Card */}
                    <div className="w-full lg:w-[calc(50%-3rem)]">
                      <div className="bg-white rounded-3xl p-8 border border-slate-100 shadow-md hover:shadow-xl transition-all duration-300 relative overflow-hidden">
                        <div className="flex items-center justify-between mb-4">
                          <span className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-extrabold font-body bg-slate-100 text-slate-700">
                            <span>Step {item.step}</span>
                          </span>
                          <span className="text-3xl">{item.icon}</span>
                        </div>

                        <h3 className="font-heading font-bold text-2xl text-[#0a0a0a] mb-2">
                          {item.title}
                        </h3>
                        <p className="text-xs font-bold text-[#f97316] uppercase tracking-wider mb-4 font-body">
                          {item.subtitle}
                        </p>
                        <p className="font-body text-slate-600 text-sm leading-relaxed mb-6">
                          {item.description}
                        </p>

                        <div className="flex flex-wrap gap-2 pt-4 border-t border-slate-100">
                          {item.details.map((detail) => (
                            <span key={detail} className="text-[11px] font-semibold text-slate-600 bg-slate-50 px-2.5 py-1 rounded-md">
                              ✓ {detail}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Step Number Circle Indicator (Desktop Center) */}
                    <div
                      className="hidden lg:flex absolute left-1/2 -translate-x-1/2 w-14 h-14 rounded-full bg-black border-4 border-white shadow-xl items-center justify-center font-heading font-extrabold text-white text-lg z-10"
                    >
                      {item.step}
                    </div>

                    {/* Spacer for 2-column layout balance */}
                    <div className="hidden lg:block w-full lg:w-[calc(50%-3rem)]" />
                  </motion.div>
                );
              })}
            </div>
          </div>
        )}

        {/* Tab 2: Foundation Journey Timeline */}
        {activeTab === "timeline" && (
          <div className="relative max-w-4xl mx-auto">
            <div className="absolute left-1/2 top-0 bottom-0 w-px bg-[#09090b] hidden lg:block" />

            <div className="flex flex-col gap-10">
              {TIMELINE.map((item, i) => {
                const isLeft = i % 2 === 0;
                return (
                  <motion.div
                    key={item.year}
                    initial={{ opacity: 0, x: isLeft ? -40 : 40 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ type: "spring" as const, stiffness: 70, damping: 18, delay: i * 0.1 }}
                    className={`relative flex flex-col lg:flex-row items-center gap-6 ${
                      isLeft ? "lg:flex-row" : "lg:flex-row-reverse"
                    }`}
                  >
                    <div className="lg:w-[calc(50%-2rem)] w-full">
                      <div className="group bg-white rounded-3xl p-6 border border-gray-100 shadow-lg hover:shadow-xl transition-shadow duration-300 relative overflow-hidden">
                        <div className={`absolute top-0 left-0 right-0 h-1 item.color rounded-t-3xl`} />
                        <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold font-body mb-3 item.color text-white`}>
                          📅 {item.year}
                        </div>
                        <h3 className="font-heading font-bold text-xl text-[#1a1a2e] mb-2">{item.title}</h3>
                        <p className="font-body text-gray-600 text-sm leading-relaxed">{item.description}</p>
                      </div>
                    </div>

                    <div className="hidden lg:flex absolute left-1/2 -translate-x-1/2 w-8 h-8 rounded-full border-4 border-white shadow-lg items-center justify-center text-xs text-white z-10 bg-[#09090b]">
                      •
                    </div>

                    <div className="hidden lg:block lg:w-[calc(50%-2rem)]" />
                  </motion.div>
                );
              })}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
