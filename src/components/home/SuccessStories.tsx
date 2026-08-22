"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { fadeUp, staggerContainer, viewportConfig } from "@/lib/animations";
import { STORIES } from "@/lib/constants";
import { ChevronLeftIcon, ChevronRightIcon, QuoteIcon, ArrowRightIcon } from "@/components/ui/Icons";

export default function SuccessStories() {
  const [activeIndex, setActiveIndex] = useState(0);

  const prev = () => setActiveIndex((i) => (i - 1 + STORIES.length) % STORIES.length);
  const next = () => setActiveIndex((i) => (i + 1) % STORIES.length);

  const story = STORIES[activeIndex];

  return (
    <section className="section-padding bg-[#2563eb] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <motion.div
          className="text-center max-w-3xl mx-auto mb-16"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
        >
          <motion.span variants={fadeUp} className="inline-block px-4 py-1.5 rounded-full bg-amber-100 text-amber-800 text-xs sm:text-sm font-bold mb-3 border border-amber-200">
            Success Stories
          </motion.span>
          <motion.h2 variants={fadeUp} className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1a1a2e] mb-4">
            Voices of <span className="text-warm-orange">Transformation</span>
          </motion.h2>
          <motion.p variants={fadeUp} className="text-base sm:text-lg text-gray-600 font-body leading-relaxed">
            Behind every shoe distributed is a child whose dignity has been restored and whose future has been brightened.
          </motion.p>
        </motion.div>

        {/* Carousel Container */}
        <div className="relative max-w-5xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeIndex}
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -30 }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="bg-white rounded-3xl p-8 sm:p-12 shadow-2xl border border-gray-100 grid lg:grid-cols-12 gap-8 lg:gap-12 items-center"
            >
              {/* Image Side */}
              <div className="lg:col-span-5 relative">
                <div className="absolute inset-0 bg-[#2563eb] rounded-3xl blur-2xl scale-105" />
                <div className="relative rounded-3xl overflow-hidden shadow-xl border-4 border-white">
                  <Image
                    src={`/images/story${(activeIndex % 2) + 1}.jpg`}
                    alt={`Story of ${story.name}`}
                    width={500}
                    height={400}
                    className="w-full h-72 sm:h-80 object-cover"
                  />
                  <div className="absolute inset-0 bg-[#2563eb]" />
                  <div className="absolute bottom-4 left-4">
                    <span className="glass px-3 py-1 rounded-full text-white text-xs font-bold font-body border border-white/30">
                      {story.year} · {story.location}
                    </span>
                  </div>
                </div>
              </div>

              {/* Content Side */}
              <div className="lg:col-span-7 flex flex-col justify-between gap-6">
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-[#f97316] flex items-center justify-center text-white shadow-lg mb-6">
                    <QuoteIcon size={24} />
                  </div>

                  <blockquote className="font-heading text-2xl sm:text-3xl text-[#1a1a2e] leading-snug font-semibold italic mb-6">
                    &ldquo;{story.quote}&rdquo;
                  </blockquote>

                  <div>
                    <h4 className="font-heading font-bold text-xl text-royal-blue">{story.name}</h4>
                    <p className="text-sm text-gray-500 font-body">{story.role} · {story.location}</p>
                  </div>
                </div>

                {/* Controls & CTA Link */}
                <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                  {/* Navigation Arrows */}
                  <div className="flex items-center gap-3">
                    <button
                      onClick={prev}
                      className="w-11 h-11 rounded-full border-2 border-gray-200 hover:border-[#2563eb] hover:bg-[#2563eb] hover:text-white text-gray-700 flex items-center justify-center transition-all"
                      aria-label="Previous story"
                    >
                      <ChevronLeftIcon size={20} />
                    </button>

                    <div className="flex gap-1.5">
                      {STORIES.map((_, i) => (
                        <button
                          key={i}
                          onClick={() => setActiveIndex(i)}
                          className={`h-2.5 rounded-full transition-all ${
                            i === activeIndex ? "bg-[#f97316] w-6" : "bg-gray-200 w-2.5"
                          }`}
                          aria-label={`Go to slide ${i + 1}`}
                        />
                      ))}
                    </div>

                    <button
                      onClick={next}
                      className="w-11 h-11 rounded-full border-2 border-gray-200 hover:border-[#2563eb] hover:bg-[#2563eb] hover:text-white text-gray-700 flex items-center justify-center transition-all"
                      aria-label="Next story"
                    >
                      <ChevronRightIcon size={20} />
                    </button>
                  </div>

                  {/* Read Story Link */}
                  <Link
                    href="/blog"
                    className="inline-flex items-center gap-1.5 text-sm font-bold text-royal-blue hover: text-warm-orange-dark transition-colors font-body group"
                  >
                    <span>Read Story</span>
                    <ArrowRightIcon size={15} className="group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
}
