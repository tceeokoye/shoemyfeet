"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { fadeUp, fadeLeft, fadeRight, staggerContainer, viewportConfig } from "@/lib/animations";
import { TIMELINE } from "@/lib/constants";
import { Heart, TrendingUp, MapPin, Wrench, Star } from "lucide-react";

const iconMap: Record<string, React.ReactNode> = {
  heart: <Heart size={20} className="text-white" />,
  "trending-up": <TrendingUp size={20} className="text-white" />,
  "map-pin": <MapPin size={20} className="text-white" />,
  tool: <Wrench size={20} className="text-white" />,
  star: <Star size={20} className="text-white" />,
  handshake: <span className="text-white text-sm">🤝</span>,
};

export default function OurStorySection() {
  return (
    <section id="story" className="section-padding bg-[#09090b] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <motion.div
          className="text-center max-w-3xl mx-auto mb-16"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
        >
          <motion.span variants={fadeUp} className="inline-block px-4 py-1.5 rounded-full bg-orange-100  text-warm-orange-dark text-sm font-bold mb-4 border border-orange-200">
            Our Story
          </motion.span>
          <motion.h2 variants={fadeUp} className="font-heading text-4xl sm:text-5xl font-bold text-[#1a1a2e] mb-4">
            One Act of Kindness That{" "}
            <span className="text-warm-orange">Started a Movement</span>
          </motion.h2>
          <motion.p variants={fadeUp} className="text-lg text-gray-600 font-body leading-relaxed">
            On International Women&apos;s Day 2022, Philomena Nwajagu chose to celebrate
            by giving school shoes to children in her community. That single act
            of compassion revealed a much larger crisis — and sparked a national movement.
          </motion.p>
        </motion.div>

        {/* Founder feature */}
        <motion.div
          className="grid md:grid-cols-2 gap-10 mb-20 items-center"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
        >
          <motion.div
            variants={fadeLeft}
            className="relative"
          >
            <div className="absolute inset-0 bg-[#09090b] rounded-3xl blur-2xl scale-105" />
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <Image
                src="/images/founder.jpg"
                alt="Philomena Nwajagu, Founder of Shoe My Feet Foundation"
                width={600}
                height={450}
                className="w-full h-80 object-cover object-center"
              />
              <div className="absolute inset-0 bg-[#09090b]" />
              <div className="absolute bottom-4 left-4 right-4">
                <div className="rounded-xl px-4 py-3 border border-white/20 bg-[#09090b]/80 backdrop-blur-md">
                  <p className="font-heading font-bold text-white text-lg drop-shadow-md">Philomena Nwajagu</p>
                  <p className="text-amber-300 text-sm font-body font-semibold tracking-wide">Founder &amp; Social Entrepreneur</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div variants={fadeRight} className="flex flex-col gap-5">
            <div className="inline-flex">
              <span className="text-5xl">❝</span>
            </div>
            <blockquote className="font-heading text-2xl text-[#1a1a2e] leading-relaxed">
              I started with 100 pairs of shoes and a belief that every child
              deserves to walk into school with dignity. Today, that belief has
              become a national movement touching thousands of lives.
            </blockquote>
            <p className="font-body text-gray-500 text-sm">
              — Philomena Nwajagu, Founder
            </p>
            <div className="flex gap-4 pt-2">
              <div className="text-center">
                <div className="font-heading font-bold text-3xl text-[#f97316]">2022</div>
                <div className="text-xs text-gray-500 font-body">Founded</div>
              </div>
              <div className="w-px bg-gray-200" />
              <div className="text-center">
                <div className="font-heading font-bold text-3xl text-warm-orange">100</div>
                <div className="text-xs text-gray-500 font-body">First shoes</div>
              </div>
              <div className="w-px bg-gray-200" />
              <div className="text-center">
                <div className="font-heading font-bold text-3xl text-[#16a34a]">6,500+</div>
                <div className="text-xs text-gray-500 font-body">Today</div>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Center line */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-[#09090b] -translate-x-1/2" />

          <div className="flex flex-col gap-10">
            {TIMELINE.map((item, index) => (
              <motion.div
                key={item.title}
                className={`flex flex-col md:flex-row gap-6 items-center ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
                initial="hidden"
                whileInView="visible"
                viewport={viewportConfig}
                variants={index % 2 === 0 ? fadeLeft : fadeRight}
              >
                {/* Card */}
                <div className="flex-1 max-w-md">
                  <motion.div
                    className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow card-hover"
                    whileHover={{ y: -4 }}
                  >
                    <div className="flex items-start gap-4">
                      <div className={`w-12 h-12 rounded-xl item.color flex items-center justify-center shadow-md shrink-0`}>
                        {iconMap[item.icon] || <Heart size={20} className="text-white" />}
                      </div>
                      <div>
                        <span className="text-xs font-bold text-gray-400 font-body tracking-wider">{item.year}</span>
                        <h3 className="font-heading font-bold text-lg text-[#1a1a2e] mt-0.5">{item.title}</h3>
                        <p className="text-gray-600 font-body text-sm mt-1.5 leading-relaxed">{item.description}</p>
                      </div>
                    </div>
                  </motion.div>
                </div>

                {/* Timeline dot */}
                <div className="relative shrink-0">
                  <div className={`w-5 h-5 rounded-full item.color shadow-lg border-2 border-white z-10 relative`} />
                  <div className={`absolute inset-0 rounded-full item.color opacity-30 animate-pulse-ring`} />
                </div>

                {/* Spacer for alternating layout */}
                <div className="flex-1 max-w-md hidden md:block" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
