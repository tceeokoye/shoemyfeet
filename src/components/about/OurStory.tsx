"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Image from "@/components/ui/RealImage";
import { fadeUp, staggerContainer } from "@/lib/animations";

export default function OurStory() {
  const imgRef = useRef<HTMLDivElement>(null);
  const txtRef = useRef<HTMLDivElement>(null);
  const imgInView = useInView(imgRef, { once: true, amount: 0.3 });
  const txtInView = useInView(txtRef, { once: true, amount: 0.2 });

  return (
    <section className="section-padding bg-white overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* Left Column — Image of volunteers giving shoes to children */}
          <motion.div
            ref={imgRef}
            initial={{ opacity: 0, x: -50 }}
            animate={imgInView ? { opacity: 1, x: 0 } : {}}
            transition={{ type: "spring" as const, stiffness: 70, damping: 18, delay: 0.1 }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl aspect-[4/3] sm:aspect-[4/3] border-4 border-white">
              <Image
                src="/images/MrPhilo.jpeg"
                alt="Volunteers giving brand new shoes to smiling children"
                fill
                className="object-cover hover:scale-105 transition-transform duration-700"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
            </div>

            {/* Floating stat card */}
            <motion.div
              className="absolute -bottom-6 -right-4 sm:right-6 bg-white/95 backdrop-blur-xl  p-5 shadow-2xl border border-slate-100 flex items-center gap-4 z-10"
              initial={{ opacity: 0, scale: 0.8, y: 20 }}
              animate={imgInView ? { opacity: 1, scale: 1, y: 0 } : {}}
              transition={{ type: "spring" as const, stiffness: 120, damping: 18, delay: 0.5 }}
            >
             
              <div>
                <p className="font-heading font-extrabold text-2xl sm:text-3xl text-[#111827]">6,500+</p>
                <p className="font-body text-xs font-semibold text-slate-500">Lives Transformed & Fitted</p>
              </div>
            </motion.div>

            {/* Decorative organic shapes */}
            <div className="absolute -top-6 -left-6 w-24 h-24 rounded-full border-4 border-[#1A3A6B]/30 pointer-events-none" />
            <div className="absolute -top-2 -left-2 w-12 h-12 rounded-full bg-[#1A3A6B] opacity-25 pointer-events-none" />
          </motion.div>

          {/* Right Column — Story text */}
          <motion.div
            ref={txtRef}
            variants={staggerContainer}
            initial="hidden"
            animate={txtInView ? "visible" : "hidden"}
          >
            <motion.span
              variants={fadeUp}
              className="inline-block px-4 py-1.5 rounded-full bg-orange-100 text-[#1A3A6B] text-xs font-bold font-body mb-4 border border-orange-200"
            >
              Our Story
            </motion.span>

            {/* Requested Title */}
            <motion.h2
              variants={fadeUp}
              className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-[#111827] mb-6 leading-tight"
            >
              How It All <span className="text-[#1A3A6B]">Began</span>
            </motion.h2>

            {/* Requested Compelling Story */}
            <motion.p variants={fadeUp} className="font-body text-slate-600 text-base sm:text-lg leading-relaxed mb-4">
              Shoe My Feet Foundation was born out of a profound realization on International Women&apos;s Day in March 2022. Our founder, <strong className="text-[#111827]">Philomena Nwajagu</strong>, recognized that thousands of children across Nigerian communities were walking kilometres to school barefoot — exposing their vulnerable feet to severe injuries, soil-borne infections, and reduced confidence.
            </motion.p>

            <motion.p variants={fadeUp} className="font-body text-slate-600 text-base sm:text-lg leading-relaxed mb-4">
              Many pupils missed classes simply because they lacked proper dress-code school shoes, or felt embarrassed standing beside their peers. Determined to break this cycle, Philomena mobilized her personal savings and family support to purchase and hand-fit the first 100 pairs of school shoes for local children.
            </motion.p>

            <motion.p variants={fadeUp} className="font-body text-slate-600 text-base sm:text-lg leading-relaxed mb-6 font-semibold text-[#1A3A6B]">
              What started as a single act of kindness rapidly grew into a national movement — providing over 6,500 pairs of shoes, launching child shoemaking academies, and restoring hope and dignity to thousands of children across Nigeria.
            </motion.p>

            {/* Key Milestone Badges */}
            {/* <motion.div variants={fadeUp} className="flex flex-wrap gap-3 pt-2">
              {[
                { label: "Founded March 2022", icon: "🌱" },
                { label: "6,500+ Pairs Donated", icon: "👟" },
                { label: "18+ Communities Reached", icon: "📍" },
                { label: "137+ Kids Trained", icon: "🛠️" },
              ].map((chip) => (
                <div
                  key={chip.label}
                  className="flex items-center gap-2 px-3.5 py-2 rounded-full bg-slate-50/80 border border-slate-100 text-xs sm:text-sm font-body font-bold text-[#1A3A6B] shadow-sm"
                >
                  <span>{chip.icon}</span>
                  <span>{chip.label}</span>
                </div>
              ))}
            </motion.div> */}
          </motion.div>

        </div>
      </div>
    </section>
  );
}
