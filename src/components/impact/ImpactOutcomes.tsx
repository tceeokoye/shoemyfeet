"use client";

import { useRef } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { staggerContainer, fadeUp, viewportConfig } from "@/lib/animations";
import {
  GraduationCapIcon,
  SparklesIcon,
  HeartPulseIcon,
  UsersIcon,
  AwardIcon,
  HeartHandshakeIcon,
} from "@/components/ui/Icons";

const outcomes = [
  {
    icon: GraduationCapIcon,
    title: "Increased School Attendance",
    value: 30,
    unit: "%",
    description: "Average increase in school attendance recorded in partner schools after shoe distribution.",
    color: "bg-[#111827]",
    bg: "bg-slate-50",
    border: "border-slate-100",
    progress: 75,
  },
  {
    icon: SparklesIcon,
    title: "Improved Confidence",
    value: 94,
    unit: "%",
    description: "Of children report feeling more confident and engaged in school after receiving proper footwear.",
    color: "bg-[#1A3A6B]",
    bg: "bg-[#FFFFFF]",
    border: "border-[#d4dcd4]",
    progress: 94,
  },
  {
    icon: HeartPulseIcon,
    title: "Better Foot Health",
    value: 3,
    unit: "x",
    description: "Reduction in foot infections, cuts, and injuries reported among beneficiary children.",
    color: "bg-[#1A3A6B]",
    bg: "bg-rose-50",
    border: "border-rose-100",
    progress: 70,
  },
  {
    icon: UsersIcon,
    title: "Volunteer Growth",
    value: 300,
    unit: "+",
    description: "Active volunteers mobilized across all states, growing year on year as our community expands.",
    color: "bg-[#111827]",
    bg: "bg-purple-50",
    border: "border-purple-100",
    progress: 60,
  },
  {
    icon: HeartHandshakeIcon,
    title: "Community Engagement",
    value: 18,
    unit: "+",
    description: "Communities actively partnered with us, with local leaders, PTAs, and families fully involved.",
    color: "bg-[#16A34A]",
    bg: "bg-emerald-50",
    border: "border-emerald-100",
    progress: 80,
  },
  {
    icon: AwardIcon,
    title: "Long-Term Partnerships",
    value: 6,
    unit: "+",
    description: "Corporate and institutional partners committed to multi-year collaboration and support.",
    color: "bg-[#1A3A6B]",
    bg: "bg-[#F3F4F6]",
    border: "border-orange-100",
    progress: 65,
  },
];

function OutcomeCard({ outcome, index }: { outcome: typeof outcomes[0]; index: number }) {
  const { ref, inView } = useInView({ threshold: 0.2, triggerOnce: true });
  const Icon = outcome.icon;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.55, delay: index * 0.07, ease: [0.16, 1, 0.3, 1] }}
      whileHover={{ y: -6, transition: { type: "spring", stiffness: 300, damping: 22 } }}
      className="bg-white border border-slate-100 rounded-2xl p-6 relative overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
    >
      <div>
        {/* Icon */}
        <div className="w-12 h-12  bg-slate-50 border border-slate-100 flex items-center justify-center shadow-sm mb-4 text-[#1A3A6B]">
          <Icon size={22} className="text-[#1A3A6B]" />
        </div>

        {/* Title */}
        <h3 className="font-heading text-lg font-bold text-[#111827] mb-2">{outcome.title}</h3>

        {/* Big number */}
        <div className="font-heading text-4xl font-extrabold text-[#111827] mb-2">
          {outcome.value}<span className="text-[#1A3A6B]">{outcome.unit}</span>
        </div>

        {/* Description */}
        <p className="font-body text-slate-600 text-sm leading-relaxed mb-5">{outcome.description}</p>
      </div>

      {/* Progress bar */}
      <div>
        <div className="relative h-2 rounded-full bg-slate-100 overflow-hidden">
          <motion.div
            className="absolute inset-y-0 left-0 rounded-full bg-[#1A3A6B]"
            initial={{ width: 0 }}
            animate={inView ? { width: `${outcome.progress}%` } : {}}
            transition={{ duration: 1.2, delay: index * 0.07 + 0.3, ease: [0.22, 1, 0.36, 1] }}
          />
        </div>
        <p className="font-body text-xs text-slate-400 mt-1.5">{outcome.progress}% impact achieved toward goal</p>
      </div>
    </motion.div>
  );
}

export default function ImpactOutcomes() {
  return (
    <section className="section-padding bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          className="text-center max-w-3xl mx-auto mb-14"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
        >
          <motion.span
            variants={fadeUp}
            className="inline-block px-4 py-1.5 rounded-full bg-orange-100 text-[#1A3A6B] text-xs sm:text-sm font-bold border border-orange-200 mb-4"
          >
            Measuring Success
          </motion.span>
          <motion.h2
            variants={fadeUp}
            className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-[#111827] mb-4 leading-tight"
          >
            The Outcomes That{" "}
            <span className="text-[#1A3A6B]">Prove Our Impact</span>
          </motion.h2>
          <motion.p
            variants={fadeUp}
            className="text-base sm:text-lg text-slate-600 font-body leading-relaxed"
          >
            Our work is measured not just in shoes distributed, but in real, lasting changes to education, health, confidence, and community wellbeing.
          </motion.p>
        </motion.div>

        {/* Cards Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {outcomes.map((outcome, index) => (
            <OutcomeCard key={outcome.title} outcome={outcome} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
