"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { fadeUp, staggerContainer, viewportConfig } from "@/lib/animations";

const benefits = [
  {
    icon: "🦠",
    title: "Protects Against Infections",
    subtitle: "Health & Disease Prevention",
    description:
      "Bare feet expose children to soil-transmitted helminths, tetanus, bacterial infections, and parasitic worms. Proper footwear forms a crucial health shield, keeping children safe and healthy.",
    stat: "99% Protection",
    color: "bg-[#1A3A6B]",
    bg: "bg-rose-50",
    border: "border-rose-100 hover:border-rose-300",
  },
  {
    icon: "🛡️",
    title: "Reduces Physical Injuries",
    subtitle: "Safety On Long Journeys",
    description:
      "Many rural children walk 3 to 8 kilometres across rocky paths, thorny brush, and sharp stones to reach school. Sturdy shoes prevent cuts, punctures, and chronic foot trauma.",
    stat: "Safer Routes",
    color: "bg-[#1A3A6B]",
    bg: "bg-[#FFFFFF]",
    border: "border-slate-200 hover:border-[#1A3A6B]",
  },
  {
    icon: "🎓",
    title: "Encourages School Attendance",
    subtitle: "Breaking Educational Barriers",
    description:
      "Lack of required footwear leads to school expulsion, shame, or missing classes due to foot injuries. Providing shoes increases regular attendance by over 30%.",
    stat: "+30% Attendance",
    color: "bg-[#111827]",
    bg: "bg-slate-50",
    border: "border-slate-100 hover:border-slate-200",
  },
  {
    icon: "✨",
    title: "Builds Confidence",
    subtitle: "Self-Worth & Social Inclusion",
    description:
      "Wearing clean, fitted school shoes inspires pride and self-assurance. Children participate more eagerly in classroom activities and sports without feeling inferior.",
    stat: "High Self-Worth",
    color: "bg-[#111827]",
    bg: "bg-purple-50",
    border: "border-purple-100 hover:border-purple-300",
  },
  {
    icon: "🏃‍♂️",
    title: "Promotes Healthy Development",
    subtitle: "Proper Posture & Support",
    description:
      "Growing feet require ergonomic support. Quality shoes safeguard joint alignment, bone structure, and physical agility during vital childhood development years.",
    stat: "Healthy Growth",
    color: "bg-[#F97316]",
    bg: "bg-orange-50",
    border: "border-orange-100 hover:border-orange-300",
  },
  {
    icon: "🎖️",
    title: "Gives Children Dignity",
    subtitle: "Equal Belonging & Pride",
    description:
      "Every child deserves to stand tall and feel valued. Providing shoes treats children with honor and dignity, proving to them that their future matters.",
    stat: "Restored Dignity",
    color: "bg-[#1A3A6B]",
    bg: "bg-[#F3F4F6]",
    border: "border-orange-100 hover:border-orange-300",
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 45 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      type: "spring" as const,
      stiffness: 85,
      damping: 18,
      delay: i * 0.1,
    },
  }),
};

export default function WhyShoesMatterAbout() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.15 });

  return (
    <section className="section-padding bg-[#f8fafc] overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          className="text-center max-w-3xl mx-auto mb-16"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
        >
          <motion.span
            variants={fadeUp}
            className="inline-block px-4 py-1.5 rounded-full bg-orange-100 text-[#1A3A6B] text-xs sm:text-sm font-bold font-body mb-3 border border-slate-200"
          >
            Why Shoes Matter
          </motion.span>
          <motion.h2
            variants={fadeUp}
            className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-[#111827] mb-4 leading-tight"
          >
            More Than Footwear — A Gateway to <span className="text-[#1A3A6B]">Life Transformation</span>
          </motion.h2>
          <motion.p
            variants={fadeUp}
            className="text-base sm:text-lg text-gray-600 font-body leading-relaxed"
          >
            For underserved children across Nigeria, receiving proper school shoes touches every aspect of their physical, emotional, and social development.
          </motion.p>
        </motion.div>

        {/* 6 Benefit Cards Grid */}
        <div ref={sectionRef} className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <motion.div
              key={benefit.title}
              custom={index}
              variants={cardVariants}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              whileHover={{ y: -6, transition: { type: "spring", stiffness: 280, damping: 22 } }}
              className="bg-white rounded-2xl p-8 border border-slate-100 shadow-md hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Header row with Icon and Stat Chip */}
                <div className="flex items-center justify-between mb-6">
                  <div className="w-14 h-14  bg-slate-50 border border-slate-100 flex items-center justify-center text-2xl shadow-sm">
                    {benefit.icon}
                  </div>
                  <span className="px-3 py-1 rounded-full text-xs font-bold font-body bg-slate-100 text-slate-700">
                    {benefit.stat}
                  </span>
                </div>

                <h3 className="font-heading font-bold text-2xl text-[#111827] mb-1">
                  {benefit.title}
                </h3>
                <p className="text-xs font-bold text-slate-400 font-body uppercase tracking-wider mb-4">
                  {benefit.subtitle}
                </p>

                <p className="text-slate-600 font-body text-sm leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
