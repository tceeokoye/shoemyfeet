"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "@/components/ui/RealImage";
import { VOLUNTEER_GALLERY } from "@/lib/volunteerData";
import { staggerContainer, fadeUp, viewportConfig } from "@/lib/animations";
import { XIcon, PlayIcon, ChevronLeftIcon, ChevronRightIcon } from "@/components/ui/Icons";

const CATEGORIES = ["All", "Outreach", "Logistics", "School Visits", "Events", "Team Meetings", "Training", "Health", "Corporate"];

export default function VolunteerGallery() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const filtered = activeCategory === "All"
    ? VOLUNTEER_GALLERY
    : VOLUNTEER_GALLERY.filter((item) => item.category === activeCategory);

  const openLightbox = (index: number) => setLightboxIndex(index);
  const closeLightbox = () => setLightboxIndex(null);
  const prevItem = useCallback(() => {
    if (lightboxIndex !== null) setLightboxIndex((i) => (i! > 0 ? i! - 1 : filtered.length - 1));
  }, [lightboxIndex, filtered.length]);
  const nextItem = useCallback(() => {
    if (lightboxIndex !== null) setLightboxIndex((i) => (i! < filtered.length - 1 ? i! + 1 : 0));
  }, [lightboxIndex, filtered.length]);

  // Keyboard navigation
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (lightboxIndex === null) return;
      if (e.key === "Escape") closeLightbox();
      if (e.key === "ArrowLeft") prevItem();
      if (e.key === "ArrowRight") nextItem();
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [lightboxIndex, prevItem, nextItem]);

  return (
    <section id="volunteer-gallery" className="section-padding bg-[#f8fafc] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          className="text-center max-w-3xl mx-auto mb-12"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
        >
          <motion.span
            variants={fadeUp}
            className="inline-block px-4 py-1.5 rounded-full bg-purple-100 text-purple-700 text-xs sm:text-sm font-bold border border-purple-200 mb-4"
          >
            Volunteer Gallery
          </motion.span>
          <motion.h2
            variants={fadeUp}
            className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-[#111827] mb-4 leading-tight"
          >
            Moments of{" "}
            <span className="text-[#1A3A6B]">Purpose & Joy</span>
          </motion.h2>
          <motion.p
            variants={fadeUp}
            className="text-base sm:text-lg text-gray-600 font-body leading-relaxed"
          >
            A visual celebration of our volunteers in action — building bonds, distributing hope, and making memories that last a lifetime.
          </motion.p>
        </motion.div>

        {/* Category filter */}
        <motion.div
          className="flex flex-wrap gap-2 justify-center mb-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-full text-sm font-bold font-body transition-all duration-300 cursor-pointer ${
                activeCategory === cat
                  ? "bg-[#111827] text-white shadow-lg scale-105"
                  : "bg-white border border-gray-200 text-gray-600 hover:border-purple-300 hover:text-purple-700 hover:scale-105"
              }`}
            >
              {cat}
            </button>
          ))}
        </motion.div>

        {/* Gallery Masonry Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-4 space-y-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
          >
            {filtered.map((item, index) => (
              <motion.div
                key={item.id}
                className="relative break-inside-avoid  overflow-hidden cursor-pointer group shadow-sm hover:shadow-xl transition-shadow duration-500"
                initial={{ opacity: 0, scale: 0.94 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.45, delay: index * 0.04, ease: [0.16, 1, 0.3, 1] }}
                onClick={() => openLightbox(index)}
                role="button"
                tabIndex={0}
                aria-label={`Open ${item.caption}`}
                onKeyDown={(e) => e.key === "Enter" && openLightbox(index)}
              >
                <div className="relative w-full" style={{ paddingBottom: `${55 + (index % 3) * 15}%` }}>
                  <Image
                    src={item.thumb}
                    alt={item.caption}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  />
                  {/* Hover overlay */}
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-400" />
                  {/* Caption */}
                  <div className="absolute bottom-3 left-3 right-3 translate-y-3 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-400">
                    <p className="font-body text-white text-xs font-semibold leading-snug">{item.caption}</p>
                    <span className="text-[10px] font-bold text-orange-300 mt-0.5 block">{item.category}</span>
                  </div>
                  {/* Video play button */}
                  {item.type === "video" && (
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-14 h-14 rounded-full bg-white/90 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                        <PlayIcon size={24} className="text-[#1A3A6B] ml-1" />
                      </div>
                    </div>
                  )}
                  {/* Category badge */}
                  <div className="absolute top-3 left-3">
                    <span className="px-2 py-0.5 rounded-full bg-white/90 text-[#111827] text-[10px] font-bold">
                      {item.category}
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {lightboxIndex !== null && (
          <>
            <motion.div
              className="fixed inset-0 bg-black/90 z-50 backdrop-blur-sm"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={closeLightbox}
            />
            <motion.div
              className="fixed inset-0 z-50 flex items-center justify-center p-4"
              initial={{ opacity: 0, scale: 0.92 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.92 }}
              transition={{ type: "spring", stiffness: 260, damping: 24 }}
            >
              <div className="relative max-w-4xl w-full max-h-[85vh]" onClick={(e) => e.stopPropagation()}>
                {/* Image */}
                <div className="relative w-full aspect-video  overflow-hidden shadow-2xl">
                  <Image
                    src={filtered[lightboxIndex].src}
                    alt={filtered[lightboxIndex].caption}
                    fill
                    className="object-cover"
                    sizes="100vw"
                  />
                  {filtered[lightboxIndex].type === "video" && (
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-20 h-20 rounded-full bg-white/90 flex items-center justify-center shadow-2xl">
                        <PlayIcon size={36} className="text-[#1A3A6B] ml-1.5" />
                      </div>
                    </div>
                  )}
                </div>

                {/* Caption */}
                <div className="text-center mt-4">
                  <p className="font-body text-white text-sm">{filtered[lightboxIndex].caption}</p>
                  <span className="font-body text-orange-400 text-xs font-bold">{filtered[lightboxIndex].category}</span>
                </div>

                {/* Controls */}
                <button onClick={closeLightbox} className="absolute -top-12 right-0 w-10 h-10 rounded-full bg-white/20 hover:bg-white/30 flex items-center justify-center text-white cursor-pointer transition-colors" aria-label="Close lightbox">
                  <XIcon size={20} />
                </button>
                <button onClick={prevItem} className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-12 w-10 h-10 rounded-full bg-white/20 hover:bg-white/30 flex items-center justify-center text-white cursor-pointer transition-colors" aria-label="Previous image">
                  <ChevronLeftIcon size={20} />
                </button>
                <button onClick={nextItem} className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-12 w-10 h-10 rounded-full bg-white/20 hover:bg-white/30 flex items-center justify-center text-white cursor-pointer transition-colors" aria-label="Next image">
                  <ChevronRightIcon size={20} />
                </button>

                {/* Counter */}
                <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 text-white/60 font-body text-xs">
                  {lightboxIndex + 1} / {filtered.length}
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </section>
  );
}
