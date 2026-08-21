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
    color: "bg-[#f97316]",
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
    color: "bg-[#f59e0b]",
    bg: "bg-amber-50",
    border: "border-amber-100 hover:border-amber-300",
  },
  {
    icon: "🎓",
    title: "Encourages School Attendance",
    subtitle: "Breaking Educational Barriers",
    description:
      "Lack of required footwear leads to school expulsion, shame, or missing classes due to foot injuries. Providing shoes increases regular attendance by over 30%.",
    stat: "+30% Attendance",
    color: "bg-[#1a3a6b]",
    bg: "bg-blue-50",
    border: "border-blue-100 hover:border-blue-300",
  },
  {
    icon: "✨",
    title: "Builds Confidence",
    subtitle: "Self-Worth & Social Inclusion",
    description:
      "Wearing clean, fitted school shoes inspires pride and self-assurance. Children participate more eagerly in classroom activities and sports without feeling inferior.",
    stat: "High Self-Worth",
    color: "bg-[#1a3a6b]",
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
    color: "bg-[#15803d]",
    bg: "bg-emerald-50",
    border: "border-emerald-100 hover:border-emerald-300",
  },
  {
    icon: "🎖️",
    title: "Gives Children Dignity",
    subtitle: "Equal Belonging & Pride",
    description:
      "Every child deserves to stand tall and feel valued. Providing shoes treats children with honor and dignity, proving to them that their future matters.",
    stat: "Restored Dignity",
    color: "bg-[#f97316]",
    bg: "bg-orange-50",
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
            className="inline-block px-4 py-1.5 rounded-full bg-blue-100 text-royal-blue text-xs sm:text-sm font-bold font-body mb-3 border border-blue-200"
          >
            Why Shoes Matter
          </motion.span>
          <motion.h2
            variants={fadeUp}
            className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1a1a2e] mb-4 leading-tight"
          >
            More Than Footwear — A Gateway to <span className="text-royal-blue">Life Transformation</span>
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
              whileHover={{ y: -8, scale: 1.02, transition: { type: "spring", stiffness: 280, damping: 22 } }}
              className={`group relative bg-white rounded-3xl p-8 border ${benefit.border} shadow-md hover:shadow-2xl transition-all duration-500 flex flex-col justify-between overflow-hidden cursor-default`}
            >
              {/* Soft glow background on hover */}
              <div className={`absolute inset-0 benefit.color opacity-0 group-hover:opacity-5 transition-opacity duration-500 rounded-3xl pointer-events-none`} />

              <div>
                {/* Header row with Icon and Stat Chip */}
                <div className="flex items-center justify-between mb-6">
                  <div
                    className={`w-14 h-14 rounded-2xl benefit.color flex items-center justify-center text-2xl text-white shadow-lg group-hover:scale-110 transition-transform duration-300`}
                  >
                    {benefit.icon}
                  </div>
                  <span className={`px-3 py-1 rounded-full text-xs font-bold font-body ${benefit.bg} text-gray-700 border border-black/5`}>
                    {benefit.stat}
                  </span>
                </div>

                <h3 className="font-heading font-bold text-2xl text-[#1a1a2e] mb-1 group-hover:text-royal-blue transition-colors">
                  {benefit.title}
                </h3>
                <p className="text-xs font-bold text-gray-400 font-body uppercase tracking-wider mb-4">
                  {benefit.subtitle}
                </p>

                <p className="text-gray-600 font-body text-sm leading-relaxed">
                  {benefit.description}
                </p>
              </div>

              {/* Bottom decorative grow bar */}
              <div className={`h-1.5 w-12 rounded-full benefit.color mt-6 group-hover:w-full transition-all duration-500`} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
