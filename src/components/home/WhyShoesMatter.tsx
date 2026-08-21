"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { staggerContainer, viewportConfig, fadeUp } from "@/lib/animations";

const cards = [
  {
    icon: "🎓",
    title: "Education",
    subtitle: "School Attendance",
    stat: "+30% Attendance",
    description:
      "Children miss school due to foot injuries or dress code rejection. Shoes remove this obstacle, keeping children in class.",
    accent: "#f97316",
  },
  {
    icon: "❤️‍🩹",
    title: "Health",
    subtitle: "Infection Protection",
    stat: "100% Infection Safety",
    description:
      "Bare feet expose children to soil-transmitted parasites, sharp objects, and infections on long daily walks.",
    accent: "#ef4444",
  },
  {
    icon: "✨",
    title: "Confidence",
    subtitle: "Self-Esteem & Pride",
    stat: "Visible Transformation",
    description:
      "Wearing school shoes gives children the self-assurance to stand tall, participate in class, and feel equal among peers.",
    accent: "#f59e0b",
  },
  {
    icon: "🛡️",
    title: "Dignity",
    subtitle: "Equal Belonging",
    stat: "Restored Pride",
    description:
      "No child should feel ashamed of their poverty. Shoes restore pride and afford every student the respect they deserve.",
    accent: "#10b981",
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      type: "spring" as const,
      stiffness: 90,
      damping: 18,
      delay: i * 0.12,
    },
  }),
};

export default function WhyShoesMatter() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.15 });

  return (
    <section className="section-padding bg-[#fdfbf7] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <motion.div
          className="text-center max-w-2xl mx-auto mb-14"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
        >
          <motion.div variants={fadeUp} className="flex items-center justify-center gap-3 mb-4">
            <div className="h-px w-10 bg-[#f97316]" />
            <span className="text-xs font-bold text-[#f97316] uppercase tracking-widest font-heading">
              Core Mission Purpose
            </span>
            <div className="h-px w-10 bg-[#f97316]" />
          </motion.div>

          <motion.h2
            variants={fadeUp}
            className="font-heading font-bold text-3xl sm:text-4xl lg:text-5xl text-[#0b1933] mb-4 tracking-tight"
          >
            A Simple Pair of Shoes Is{" "}
            <span className="text-[#f97316]">More Than Footwear</span>
          </motion.h2>

          <motion.p variants={fadeUp} className="font-body text-slate-600 text-base sm:text-lg leading-relaxed">
            For underserved children across Nigeria, shoes are a gateway to education,
            physical protection, emotional well-being, and social inclusion.
          </motion.p>
        </motion.div>

        {/* 4 Interactive 3D Cards */}
        <div ref={ref} className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {cards.map((card, i) => (
            <motion.div
              key={card.title}
              custom={i}
              variants={cardVariants}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              className="group bg-white rounded-3xl p-7 border border-slate-200/80 card-3d flex flex-col justify-between overflow-hidden cursor-default relative"
            >
              {/* Top Accent Line */}
              <div
                className="h-1.5 w-full rounded-full mb-6 -mx-7 -mt-7 rounded-t-3xl"
                style={{ background: card.accent, width: "calc(100% + 3.5rem)" }}
              />

              <div>
                {/* Icon + Stat Badge */}
                <div className="flex items-start justify-between mb-5">
                  <div className="w-14 h-14 rounded-2xl bg-slate-50 border border-slate-100 flex items-center justify-center text-3xl shadow-md group-hover:scale-110 transition-transform">
                    {card.icon}
                  </div>
                  <span
                    className="text-xs font-bold font-body px-3 py-1 rounded-full shadow-xs"
                    style={{ background: `${card.accent}18`, color: card.accent }}
                  >
                    {card.stat}
                  </span>
                </div>

                <h3 className="font-heading font-bold text-2xl text-[#0b1933] mb-0.5 group-hover:text-[#f97316] transition-colors">
                  {card.title}
                </h3>
                <p className="text-xs font-extrabold text-slate-400 uppercase tracking-wider font-body mb-3">
                  {card.subtitle}
                </p>
                <p className="font-body text-slate-600 text-sm leading-relaxed">
                  {card.description}
                </p>
              </div>

              {/* Bottom accent bar */}
              <div
                className="h-1.5 rounded-full mt-6 w-10 group-hover:w-full transition-all duration-500"
                style={{ background: card.accent }}
              />
            </motion.div>
          ))}
        </div>

        {/* Bottom Banner */}
        <motion.div
          className="mt-14 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <div className="inline-flex items-center gap-3 bg-[#0b1933] text-white rounded-2xl px-6 py-4 shadow-2xl text-sm sm:text-base font-body border border-white/10">
            <span className="text-2xl animate-bounce">👟</span>
            <span>
              <strong className="text-[#f59e0b] font-heading font-bold text-lg">$20</strong>{" "}
              can provide 1 durable pair of school shoes and transform a child's journey.
            </span>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
