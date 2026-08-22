"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { fadeUp, staggerContainer, viewportConfig } from "@/lib/animations";
import { STORIES } from "@/lib/constants";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";

export default function SuccessStoriesSection() {
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
          <motion.span variants={fadeUp} className="inline-block px-4 py-1.5 rounded-full bg-amber-100 text-amber-700 text-sm font-bold mb-4 border border-amber-200">
            Real Stories
          </motion.span>
          <motion.h2 variants={fadeUp} className="font-heading text-4xl sm:text-5xl font-bold text-[#1a1a2e] mb-4">
            Voices From the{" "}
            <span className="text-warm-orange">Communities We Serve</span>
          </motion.h2>
          <motion.p variants={fadeUp} className="text-lg text-gray-600 font-body">
            Behind every pair of shoes is a story of transformation, hope, and new beginnings.
          </motion.p>
        </motion.div>

        {/* Story Carousel */}
        <div className="relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeIndex}
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -40 }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              className="grid md:grid-cols-2 gap-10 items-center"
            >
              {/* Image */}
              <div className="relative">
                <div className="absolute inset-0 bg-[#2563eb] rounded-3xl blur-2xl scale-105" />
                <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                  <Image
                    src={`/images/story${(activeIndex % 2) + 1}.jpg`}
                    alt={`Story of ${story.name}`}
                    width={600}
                    height={450}
                    className="w-full h-80 object-cover"
                  />
                  <div className="absolute inset-0 bg-[#2563eb]" />
                  <div className="absolute bottom-4 left-4">
                    <span className="glass rounded-full px-3 py-1 text-white text-xs font-bold border border-white/30">
                      {story.year} · {story.location}
                    </span>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="flex flex-col gap-6">
                <div className="w-12 h-12 rounded-2xl bg-[#f97316] flex items-center justify-center shadow-lg">
                  <Quote size={22} className="text-white" />
                </div>

                <blockquote className="font-heading text-2xl text-[#1a1a2e] leading-relaxed italic">
                  &ldquo;{story.quote}&rdquo;
                </blockquote>

                <div>
                  <p className="font-heading font-bold text-lg text-royal-blue">{story.name}</p>
                  <p className="text-gray-500 font-body text-sm">{story.role} · {story.location}</p>
                </div>

                {/* Navigation */}
                <div className="flex items-center gap-4">
                  <button
                    onClick={prev}
                    className="w-11 h-11 rounded-full border-2 border-[#2563eb] text-royal-blue flex items-center justify-center hover:bg-[#2563eb] hover:text-white transition-all"
                    aria-label="Previous story"
                  >
                    <ChevronLeft size={18} />
                  </button>
                  <div className="flex gap-2">
                    {STORIES.map((_, i) => (
                      <button
                        key={i}
                        onClick={() => setActiveIndex(i)}
                        className={`w-2.5 h-2.5 rounded-full transition-all ${
                          i === activeIndex
                            ? "bg-[#f97316] w-6"
                            : "bg-gray-300 hover:bg-gray-400"
                        }`}
                        aria-label={`Story ${i + 1}`}
                      />
                    ))}
                  </div>
                  <button
                    onClick={next}
                    className="w-11 h-11 rounded-full border-2 border-[#2563eb] text-royal-blue flex items-center justify-center hover:bg-[#2563eb] hover:text-white transition-all"
                    aria-label="Next story"
                  >
                    <ChevronRight size={18} />
                  </button>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Story thumbnails */}
        <div className="mt-12 flex justify-center gap-4 flex-wrap">
          {STORIES.map((s, i) => (
            <motion.button
              key={s.id}
              onClick={() => setActiveIndex(i)}
              className={`flex items-center gap-3 px-4 py-2.5 rounded-full border transition-all font-body text-sm ${
                i === activeIndex
                  ? "bg-[#2563eb] text-white border-[#2563eb] shadow-lg"
                  : "bg-white text-gray-600 border-gray-200 hover:border-[#2563eb] hover:text-royal-blue"
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
            >
              <span className={`w-2 h-2 rounded-full ${i === activeIndex ? "bg-orange-400" : "bg-gray-300"}`} />
              <span className="font-semibold">{s.name}</span>
            </motion.button>
          ))}
        </div>
      </div>
    </section>
  );
}
