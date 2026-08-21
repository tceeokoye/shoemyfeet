"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { TRANSFORMATIONS, TransformationItem, MediaItem } from "./galleryData";
import { SparklesIcon, PlayIcon, QuoteIcon, SlidersIcon } from "@/components/ui/Icons";
import { fadeUp, staggerContainer, viewportConfig } from "@/lib/animations";

interface BeforeAfterTransformationsProps {
  onPlayVideo?: (video: MediaItem) => void;
}

function ComparisonSlider({ item }: { item: TransformationItem }) {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);

  const handleMove = (clientX: number, rect: DOMRect) => {
    const x = clientX - rect.left;
    let pos = (x / rect.width) * 100;
    if (pos < 0) pos = 0;
    if (pos > 100) pos = 100;
    setSliderPosition(pos);
  };

  const handleTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    handleMove(e.touches[0].clientX, rect);
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!isDragging && e.type !== "click") return;
    const rect = e.currentTarget.getBoundingClientRect();
    handleMove(e.clientX, rect);
  };

  return (
    <div
      className="relative aspect-4/3 w-full rounded-2xl overflow-hidden cursor-ew-resize select-none border-2 border-white shadow-xl"
      onMouseDown={() => setIsDragging(true)}
      onMouseUp={() => setIsDragging(false)}
      onMouseLeave={() => setIsDragging(false)}
      onMouseMove={handleMouseMove}
      onTouchMove={handleTouchMove}
      onClick={handleMouseMove}
    >
      {/* After Image (Background) */}
      <Image
        src={item.afterImage}
        alt={item.afterLabel}
        fill
        className="object-cover"
      />
      <div className="absolute bottom-3 right-3 px-3 py-1 rounded-full bg-emerald-600/90 backdrop-blur-md text-white text-[11px] font-heading font-bold shadow-md">
        AFTER: {item.afterLabel}
      </div>

      {/* Before Image (Clipped Foreground) */}
      <div
        className="absolute inset-0 overflow-hidden"
        style={{ width: `${sliderPosition}%` }}
      >
        <Image
          src={item.beforeImage}
          alt={item.beforeLabel}
          fill
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute bottom-3 left-3 px-3 py-1 rounded-full bg-gray-900/90 backdrop-blur-md text-white text-[11px] font-heading font-bold shadow-md">
          BEFORE: {item.beforeLabel}
        </div>
      </div>

      {/* Vertical Slider Handle Line */}
      <div
        className="absolute top-0 bottom-0 w-1 bg-white shadow-2xl z-20 pointer-events-none"
        style={{ left: `${sliderPosition}%` }}
      >
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-white text-royal-blue shadow-2xl flex items-center justify-center border-2 border-warm-orange">
          <SlidersIcon size={16} />
        </div>
      </div>
    </div>
  );
}

export default function BeforeAfterTransformations({ onPlayVideo }: BeforeAfterTransformationsProps) {
  return (
    <section className="section-padding bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <motion.div
          className="text-center max-w-3xl mx-auto mb-16"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
        >
          <motion.span
            variants={fadeUp}
            className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-orange-100 text-warm-orange-dark text-xs sm:text-sm font-bold mb-3 border border-orange-200"
          >
            <SparklesIcon size={14} className="text-warm-orange" />
            Visual Impact Proof
          </motion.span>

          <motion.h2
            variants={fadeUp}
            className="font-heading text-3xl sm:text-5xl font-bold text-[#1a1a2e] mb-4"
          >
            Before & After <span className="text-warm-orange">Transformations</span>
          </motion.h2>

          <motion.p
            variants={fadeUp}
            className="text-base sm:text-lg text-gray-600 font-body leading-relaxed"
          >
            Drag the slider handles below to reveal the life-changing difference a pair of school shoes makes for children across Nigeria.
          </motion.p>
        </motion.div>

        {/* 3 Interactive Transformation Cards */}
        <div className="grid lg:grid-cols-3 gap-8">
          {TRANSFORMATIONS.map((item) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={viewportConfig}
              transition={{ duration: 0.5 }}
              className="bg-[#fafafa] rounded-3xl p-6 border border-gray-200/80 shadow-lg flex flex-col justify-between"
            >
              <div>
                {/* Interactive Slider */}
                <ComparisonSlider item={item} />

                {/* Child Details & Story */}
                <div className="mt-6">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="font-heading text-xl font-bold text-royal-blue">
                      {item.childName}, Age {item.age}
                    </h3>
                    <span className="text-xs font-semibold text-gray-500 bg-white px-2.5 py-1 rounded-full border border-gray-200">
                      {item.location}
                    </span>
                  </div>

                  <p className="font-body text-xs text-gray-600 leading-relaxed mb-4">
                    {item.story}
                  </p>
                </div>
              </div>

              {/* Quote & Optional Video */}
              <div className="pt-4 border-t border-gray-200/80 bg-white p-4 rounded-2xl">
                <div className="flex gap-2.5 items-start mb-3">
                  <QuoteIcon size={18} className="text-warm-orange shrink-0 mt-0.5" />
                  <p className="font-body text-xs italic text-gray-700 font-medium">
                    &quot;{item.quote}&quot;
                  </p>
                </div>

                {item.testimonialVideo && onPlayVideo && (
                  <button
                    onClick={() =>
                      onPlayVideo({
                        id: item.id,
                        type: "video",
                        title: `${item.childName}'s Testimonial Video`,
                        caption: item.story,
                        location: item.location,
                        event: "Beneficiary Story",
                        date: "2026",
                        year: "2026",
                        categories: ["Videos"],
                        image: item.afterImage,
                        videoUrl: item.testimonialVideo,
                      })
                    }
                    className="w-full py-2 rounded-xl bg-orange-50 hover:bg-orange-100 text-warm-orange-dark font-heading text-xs font-bold flex items-center justify-center gap-1.5 transition-colors"
                  >
                    <PlayIcon size={14} className="fill-warm-orange" />
                    <span>Watch {item.childName}&apos;s Video Story</span>
                  </button>
                )}
              </div>

            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
