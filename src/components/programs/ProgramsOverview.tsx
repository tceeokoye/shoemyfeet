"use client";

import { motion } from "framer-motion";
import { staggerContainer, fadeUp, viewportConfig } from "@/lib/animations";
import { GraduationCapIcon, HeartPulseIcon, HeartHandshakeIcon, SparklesIcon } from "@/components/ui/Icons";

const pillars = [
  {
    icon: <GraduationCapIcon size={32} className="text-[#1A3A6B]" />,
    title: "Education",
    desc: "Ensuring every child can attend school with dignity",
    color: "bg-slate-50",
    border: "border-slate-100",
    iconBg: "bg-orange-100",
  },
  {
    icon: <HeartPulseIcon size={32} className="text-emerald-600" />,
    title: "Health",
    desc: "Protecting feet from injury, infection, and disease",
    color: "bg-emerald-50",
    border: "border-emerald-100",
    iconBg: "bg-emerald-100",
  },
  {
    icon: <HeartHandshakeIcon size={32} className="text-[#1A3A6B]" />,
    title: "Community",
    desc: "Building strong bonds through outreach and service",
    color: "bg-[#F3F4F6]",
    border: "border-orange-100",
    iconBg: "bg-orange-100",
  },
  {
    icon: <SparklesIcon size={32} className="text-purple-600" />,
    title: "Hope",
    desc: "Inspiring futures through the power of one simple gift",
    color: "bg-purple-50",
    border: "border-purple-100",
    iconBg: "bg-purple-100",
  },
];

export default function ProgramsOverview() {
  return (
    <section className="section-padding bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center max-w-3xl mx-auto mb-16"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
        >
          <motion.span
            variants={fadeUp}
            className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-emerald-100 text-emerald-700 text-xs sm:text-sm font-bold mb-4 border border-emerald-200"
          >
            <SparklesIcon size={13} className="text-emerald-600" />
            Our Approach
          </motion.span>
          <motion.h2
            variants={fadeUp}
            className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-[#111827] mb-5 leading-tight"
          >
            Programs Built to{" "}
            <span className="text-[#1A3A6B]">Remove Every Barrier</span>
          </motion.h2>
          <motion.p
            variants={fadeUp}
            className="text-base sm:text-lg text-gray-600 font-body leading-relaxed"
          >
            Every program we design is rooted in one belief — that no child should be prevented from
            learning, playing, or thriving because they lack a pair of shoes. Our initiatives address
            education, health, community resilience, and lasting hope.
          </motion.p>
        </motion.div>

        {/* Pillars */}
        <motion.div
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
        >
          {pillars.map((p) => (
            <motion.div
              key={p.title}
              variants={fadeUp}
              whileHover={{ y: -6, transition: { type: "spring" as const, stiffness: 300, damping: 22 } }}
              className={`group p.color border ${p.border} rounded-2xl p-7 text-center hover:shadow-xl transition-all duration-300`}
            >
              <div className={`w-16 h-16 ${p.iconBg}  flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 shadow-sm`}>
                {p.icon}
              </div>
              <h3 className="font-heading font-bold text-xl text-[#111827] mb-2">{p.title}</h3>
              <p className="font-body text-gray-600 text-sm leading-relaxed">{p.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
