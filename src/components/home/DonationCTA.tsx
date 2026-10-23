"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import FastImage from "@/components/ui/FastImage";
import { fadeUp, staggerContainer, viewportConfig } from "@/lib/animations";
import { HeartIcon, ArrowRightIcon, SparklesIcon, CheckCircle2Icon } from "@/components/ui/Icons";

export default function DonationCTA() {
  return (
    <section className="section-padding bg-[#fdfbf7] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <motion.div
          className="relative bg-[#111827] rounded-2xl overflow-hidden shadow-2xl p-8 sm:p-12 lg:p-16 text-white border border-white/15 shadow-black/80"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
        >
          {/* Background Image Layer with opacity */}
          <div className="absolute inset-0 opacity-25 pointer-events-none">
            <FastImage
              src="/images/children_walking_school.webp"
              alt="Nigerian children walking to school"
              fill
              className="object-cover"
            />
          </div>

          {/* Ambient Glow Orbs */}
          <div className="absolute -top-24 -right-24 w-80 h-80 rounded-full bg-[#1A3A6B]/15 blur-3xl pointer-events-none" />
          <div className="absolute -bottom-24 -left-24 w-80 h-80 rounded-full bg-[#FFFFFF]0/10 blur-3xl pointer-events-none" />

          <div className="relative z-10 grid lg:grid-cols-12 gap-10 items-center">
            
            {/* Headline & Description */}
            <div className="lg:col-span-7 flex flex-col gap-6">
              <motion.span variants={fadeUp} className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-black/80 text-[#142E56] text-xs sm:text-sm font-bold border border-white/15 w-fit shadow-md">
                <HeartIcon size={14} className="fill-[#1A3A6B] text-[#1A3A6B]" />
                Make a Direct Impact Today
              </motion.span>

              <motion.h2 variants={fadeUp} className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight text-white">
                Your Gift Helps a Child Walk into School with{" "}
                <span className="text-[#1A3A6B]">Confidence</span>
              </motion.h2>

              <motion.p variants={fadeUp} className="text-base sm:text-lg text-neutral-300 font-body leading-relaxed max-w-xl">
                $20 provides a durable pair of shoes. $100 fits an entire classroom. Join us in breaking the cycle of discomfort and absenteeism today.
              </motion.p>

              {/* Trust highlights */}
              <motion.div variants={fadeUp} className="flex flex-wrap gap-4 text-xs font-body text-neutral-300">
                <span className="flex items-center gap-1.5">
                  <CheckCircle2Icon size={15} className="text-[#1A3A6B]" /> 100% Direct Program Delivery
                </span>
                <span className="flex items-center gap-1.5">
                  <CheckCircle2Icon size={15} className="text-[#1A3A6B]" /> Registered CAC NGO
                </span>
                <span className="flex items-center gap-1.5">
                  <CheckCircle2Icon size={15} className="text-[#1A3A6B]" /> Transparent Financial Reports
                </span>
              </motion.div>
            </div>

            {/* Action Buttons Box */}
            <motion.div variants={fadeUp} className="lg:col-span-5 flex flex-col gap-4 bg-black/80 backdrop-blur-xl p-8 rounded-2xl border border-white/15 shadow-2xl shadow-black/80">
              <h3 className="font-heading font-bold text-xl text-white mb-2 text-center">
                Choose How You Give
              </h3>

              {/* Donate Once Button */}
              <Link
                href="/donate"
                className="w-full btn-primary justify-center py-4 text-base  shadow-xl group font-body"
              >
                <span>Donate Once Now</span>
                <ArrowRightIcon size={16} className="group-hover:translate-x-1 transition-transform" />
              </Link>

              {/* Monthly Supporter Button */}
              <Link
                href="/donate"
                className="w-full py-4  border border-white/20 hover:border-[#142E56] bg-white/5 hover:bg-white/10 text-white font-bold text-center transition-all font-body text-base flex items-center justify-center gap-2 group"
              >
                <SparklesIcon size={18} className="text-[#142E56]" />
                <span>Become a Monthly Partner</span>
              </Link>

              <p className="text-[11px] text-center text-neutral-400 font-body mt-2">
                Tax-deductible contributions • Full financial transparency
              </p>
            </motion.div>

          </div>
        </motion.div>

      </div>
    </section>
  );
}
