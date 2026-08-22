"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Link from "next/link";
import FastImage from "@/components/ui/FastImage";
import { fadeUp, staggerContainer, viewportConfig } from "@/lib/animations";
import { PROGRAMS } from "@/lib/constants";
import { ArrowRightIcon } from "@/components/ui/Icons";

const cardVariants = {
  hidden: { opacity: 0, y: 45 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      type: "spring" as const,
      stiffness: 85,
      damping: 18,
      delay: i * 0.15,
    },
  }),
};

export default function ProgramsPreview() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.15 });

  return (
    <section className="section-padding bg-[#09090b] text-white relative overflow-hidden">
      {/* Background glow orbs */}
      <div className="absolute top-0 right-10 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-10 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Header */}
        <motion.div
          className="text-center max-w-2xl mx-auto mb-16"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
        >
          <motion.div variants={fadeUp} className="flex items-center justify-center gap-3 mb-4">
            <div className="h-px w-10 bg-[#f97316]" />
            <span className="text-xs font-bold text-amber-400 uppercase tracking-widest font-heading">
              Core Action Pillars
            </span>
            <div className="h-px w-10 bg-[#f97316]" />
          </motion.div>

          <motion.h2
            variants={fadeUp}
            className="font-heading font-bold text-3xl sm:text-4xl lg:text-5xl text-white mb-4 tracking-tight"
          >
            Three Ways We're{" "}
            <span className="text-[#f59e0b]">Transforming Lives</span>
          </motion.h2>

          <motion.p variants={fadeUp} className="font-body text-neutral-300 text-base sm:text-lg leading-relaxed">
            Combining direct footwear provision with child shoemaking workshops to create long-term self-sustaining impact.
          </motion.p>
        </motion.div>

        {/* 3 Program 3D Cards */}
        <div ref={ref} className="grid md:grid-cols-3 gap-8">
          {PROGRAMS.map((program, i) => {
            const img = program.image.replace(/\.(jpg|png)$/, ".webp");
            return (
              <motion.div
                key={program.id}
                custom={i}
                variants={cardVariants}
                initial="hidden"
                animate={inView ? "visible" : "hidden"}
                className="group bg-[#121214] rounded-3xl border border-white/10 card-3d-dark overflow-hidden flex flex-col justify-between hover:border-[#f97316]/50 transition-colors shadow-2xl"
              >
                <div>
                  {/* Image Header */}
                  <div className="relative h-60 overflow-hidden">
                    <FastImage
                      src={img}
                      alt={program.title}
                      fill
                      className="object-cover group-hover:scale-108 transition-transform duration-700 ease-out"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#121214] via-black/40 to-transparent" />

                    <div className="absolute top-4 left-4 rounded-full bg-black/75 backdrop-blur-md px-3.5 py-1 text-amber-400 border border-amber-500/30 text-xs font-heading font-bold uppercase tracking-wider">
                      PROGRAM 0{i + 1}
                    </div>

                    <div className="absolute bottom-3 left-4 rounded-full bg-[#f97316] px-4 py-1 text-white text-xs font-heading font-bold shadow-lg">
                      {program.stats}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6 sm:p-7">
                    <h3 className="font-heading font-bold text-2xl text-white mb-3 group-hover:text-amber-300 transition-colors leading-snug">
                      {program.title}
                    </h3>
                    <p className="font-body text-neutral-300 text-sm leading-relaxed mb-6">
                      {program.description}
                    </p>

                    {/* Features List */}
                    <div className="space-y-2 mb-6">
                      {program.features.slice(0, 3).map((feat) => (
                        <div key={feat} className="flex items-center gap-2.5 text-xs text-neutral-300 font-body">
                          <span className="w-4 h-4 rounded-full bg-orange-500/20 text-amber-400 flex items-center justify-center font-bold text-[10px]">✓</span>
                          <span>{feat}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Action CTA */}
                <div className="px-6 pb-6 pt-0">
                  <Link
                    href="/programs"
                    className="w-full btn-orange justify-center py-3.5 text-sm font-bold shadow-xl"
                  >
                    <span>Explore Program Details</span>
                    <ArrowRightIcon size={16} className="group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
