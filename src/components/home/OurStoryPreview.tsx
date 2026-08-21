"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import FastImage from "@/components/ui/FastImage";
import { fadeUp, fadeLeft, fadeRight, staggerContainer, viewportConfig } from "@/lib/animations";
import { TIMELINE } from "@/lib/constants";
import { ArrowRightIcon } from "@/components/ui/Icons";

export default function OurStoryPreview() {
  const milestones = TIMELINE.slice(0, 3);

  return (
    <section className="section-padding bg-[#fdfbf7] relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-orange-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Section Header */}
        <motion.div
          className="text-center max-w-3xl mx-auto mb-16"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
        >
          <motion.div variants={fadeUp} className="flex items-center justify-center gap-3 mb-4">
            <div className="h-px w-10 bg-[#f97316]" />
            <span className="text-xs font-bold text-[#f97316] uppercase tracking-widest font-heading">
              Our Origin Story
            </span>
            <div className="h-px w-10 bg-[#f97316]" />
          </motion.div>

          <motion.h2 variants={fadeUp} className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0b1933] mb-4">
            One Act of Kindness That{" "}
            <span className="text-[#f97316]">Started a Movement</span>
          </motion.h2>
          <motion.p variants={fadeUp} className="text-base sm:text-lg text-slate-600 font-body leading-relaxed">
            On International Women&apos;s Day 2022, Philomena Nwajagu gave school shoes to children in her community. That single act of compassion revealed a nationwide crisis — and sparked an ongoing movement.
          </motion.p>
        </motion.div>

        {/* Founder Photo & Quote Grid */}
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-12 items-center mb-20">
          
          {/* Founder Image */}
          <motion.div
            className="lg:col-span-5 relative"
            variants={fadeLeft}
            initial="hidden"
            whileInView="visible"
            viewport={viewportConfig}
          >
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white card-3d">
              <FastImage
                src="/images/founder.webp"
                alt="Philomena Nwajagu, Founder of Shoe My Feet Foundation"
                width={550}
                height={450}
                className="w-full h-80 sm:h-[420px] object-cover object-top hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              
              <div className="absolute bottom-5 left-5 right-5">
                <div className="rounded-2xl p-4 border border-white/20 bg-[#0b1933]/90 backdrop-blur-md shadow-lg">
                  <p className="font-heading font-bold text-white text-xl drop-shadow-md">Philomena Nwajagu</p>
                  <p className="text-amber-400 text-xs font-body font-semibold tracking-wide mt-0.5">Founder &amp; Social Entrepreneur</p>
                </div>
              </div>
            </div>

            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-6 -right-4 hidden sm:flex items-center gap-2 bg-[#f97316] text-white px-4 py-2.5 rounded-2xl shadow-xl font-heading font-bold text-xs border border-amber-300"
            >
              <span>👟</span>
              <span>100 Pairs in 2022</span>
            </motion.div>
          </motion.div>

          {/* Founder Quote */}
          <motion.div
            className="lg:col-span-7 flex flex-col gap-6"
            variants={fadeRight}
            initial="hidden"
            whileInView="visible"
            viewport={viewportConfig}
          >
            <div className="w-14 h-14 rounded-2xl bg-[#0f2347] flex items-center justify-center text-amber-300 shadow-xl text-3xl font-heading">
              ❝
            </div>
            <blockquote className="font-heading text-2xl sm:text-3xl text-[#0b1933] leading-snug font-semibold">
              &ldquo;I started with 100 pairs of shoes and a belief that every child deserves to walk into school with dignity. Today, that belief has grown into a movement.&rdquo;
            </blockquote>
            <p className="font-body text-slate-600 leading-relaxed text-base">
              Without proper footwear, children face health risks, severe discomfort, and social embarrassment. Shoe My Feet Foundation is dedicated to removing this obstacle, empowering kids through craftsmanship, and inspiring lasting community growth.
            </p>

            <div>
              <Link href="/about" className="btn-orange group inline-flex items-center gap-2 shadow-lg">
                <span>Read Our Full Story</span>
                <ArrowRightIcon size={16} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </motion.div>
        </div>

        {/* 3D Milestone Cards */}
        <div className="bg-white rounded-3xl p-8 sm:p-10 shadow-xl border border-slate-100">
          <div className="text-center mb-10">
            <h3 className="font-heading font-bold text-2xl sm:text-3xl text-[#0b1933] mb-2">
              Key Journey Milestones
            </h3>
            <p className="text-slate-500 font-body text-sm">Highlights from our path of impact since 2022</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 relative">
            {milestones.map((item) => (
              <motion.div
                key={item.title}
                className="relative bg-[#0f2347] text-white rounded-2xl p-6 border border-white/10 card-3d-dark flex flex-col justify-between group"
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={viewportConfig}
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="px-3.5 py-1 rounded-full bg-[#f97316] text-white font-heading font-bold text-xs shadow-md">
                      {item.year}
                    </span>
                    <span className="text-xl group-hover:scale-125 transition-transform">✨</span>
                  </div>
                  <h4 className="font-heading font-bold text-xl text-white mb-2 group-hover:text-amber-300 transition-colors">
                    {item.title}
                  </h4>
                  <p className="text-xs sm:text-sm text-blue-100/90 font-body leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="mt-8 text-center">
            <Link
              href="/about"
              className="text-sm font-extrabold text-[#f97316] hover:text-[#ea580c] transition-colors font-heading inline-flex items-center gap-1.5 group"
            >
              <span>Explore our full interactive timeline on the About page</span>
              <ArrowRightIcon size={14} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>

      </div>
    </section>
  );
}
