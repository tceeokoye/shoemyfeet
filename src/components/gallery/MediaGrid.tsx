"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "@/components/ui/RealImage";
import { ALL_MEDIA_ITEMS, CATEGORY_TABS, MediaItem } from "./galleryData";
import { PlayIcon, ZoomInIcon, MapPinIcon, CalendarIcon, SparklesIcon, FilterIcon } from "@/components/ui/Icons";
import { fadeUp, staggerContainer, viewportConfig } from "@/lib/animations";

interface MediaGridProps {
  onSelectPhoto: (item: MediaItem, index: number) => void;
  onSelectVideo: (item: MediaItem) => void;
  initialTab?: string;
}

export default function MediaGrid({ onSelectPhoto, onSelectVideo, initialTab = "All Media" }: MediaGridProps) {
  const [activeTab, setActiveTab] = useState(initialTab);

  const filteredMedia = ALL_MEDIA_ITEMS.filter((item) => {
    if (activeTab === "All Media") return true;
    if (activeTab === "Photos") return item.type === "photo";
    if (activeTab === "Videos") return item.type === "video";
    return item.categories.includes(activeTab);
  });

  const photoList = filteredMedia.filter((m) => m.type === "photo");

  return (
    <section id="media-filters" className="section-padding bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <motion.div
          className="text-center max-w-3xl mx-auto mb-10"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
        >
          <motion.span
            variants={fadeUp}
            className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-orange-100 text-[#1A3A6B] text-xs sm:text-sm font-bold mb-3 border border-slate-200"
          >
            <FilterIcon size={14} className="text-[#1A3A6B]" />
            Interactive Visual Collection
          </motion.span>

          <motion.h2
            variants={fadeUp}
            className="font-heading text-3xl sm:text-5xl font-bold text-[#111827] mb-4"
          >
            Explore Our <span className="text-[#1A3A6B]">Media Collection</span>
          </motion.h2>

          <motion.p
            variants={fadeUp}
            className="text-base sm:text-lg text-gray-600 font-body leading-relaxed"
          >
            Filter through photos and videos capturing school visits, shoe distributions, volunteer smiles, and community empowerment.
          </motion.p>
        </motion.div>

        {/* Sticky Animated Filter Category Tabs Bar */}
        <div className="sticky top-20 sm:top-22 z-30 py-3 mb-10 -mx-4 px-4 sm:mx-0 sm:px-0 bg-white/85 backdrop-blur-md border border-gray-200/80  sm:rounded-full shadow-md transition-all duration-300">
          <div className="flex items-center justify-start sm:justify-center gap-2 sm:gap-3 overflow-x-auto no-scrollbar pb-1 sm:pb-0 px-2">
            {CATEGORY_TABS.map((tab) => {
              const isActive = activeTab === tab;
              return (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`relative shrink-0 px-4 py-2 rounded-full text-xs sm:text-sm font-heading font-bold transition-all duration-300 ${
                    isActive
                      ? "text-white shadow-md scale-105"
                      : "bg-gray-100/90 text-gray-600 hover:bg-gray-200/90 hover:text-[#1A3A6B]"
                  }`}
                >
                  {isActive && (
                    <motion.div
                      layoutId="activeMediaTab"
                      className="absolute inset-0 rounded-full bg-[#111827]"
                      transition={{ type: "spring", stiffness: 400, damping: 30 }}
                    />
                  )}
                  <span className="relative z-10 flex items-center gap-1.5 whitespace-nowrap">
                    {tab}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Grid of Media Cards */}
        <motion.div
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          <AnimatePresence mode="popLayout">
            {filteredMedia.map((item) => {
              const isVideo = item.type === "video";

              return (
                <motion.div
                  key={item.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.4 }}
                  onClick={() => {
                    if (isVideo) {
                      onSelectVideo(item);
                    } else {
                      const photoIdx = photoList.findIndex((p) => p.id === item.id);
                      onSelectPhoto(item, photoIdx >= 0 ? photoIdx : 0);
                    }
                  }}
                  className="group relative bg-white rounded-2xl overflow-hidden shadow-lg border border-gray-100 hover:shadow-2xl hover:-translate-y-1.5 transition-all duration-300 cursor-pointer flex flex-col"
                >
                  {/* Image Thumbnail Container */}
                  <div className="relative aspect-4/3 w-full overflow-hidden bg-gray-100">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      loading="lazy"
                      className="object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />

                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-[#111827] opacity-80 group-hover:opacity-90 transition-opacity" />

                    {/* Top Badges */}
                    <div className="absolute top-3.5 left-3.5 right-3.5 flex items-center justify-between z-10">
                      <span
                        className={`px-3 py-1 rounded-full text-[11px] font-heading font-bold shadow-md ${
                          isVideo
                            ? "bg-[#1A3A6B] text-white"
                            : "bg-white/90 text-[#1A3A6B] backdrop-blur-md"
                        }`}
                      >
                        {isVideo ? `VIDEO · ${item.duration}` : "PHOTO"}
                      </span>

                      <span className="glass px-2.5 py-1 rounded-full text-white text-[11px] font-body flex items-center gap-1">
                        <MapPinIcon size={12} className="text-orange-300" />
                        {item.location}
                      </span>
                    </div>

                    {/* Play / Zoom Center Icon Overlay */}
                    <div className="absolute inset-0 flex items-center justify-center z-10">
                      {isVideo ? (
                        <div className="w-14 h-14 rounded-full bg-[#1A3A6B] text-white flex items-center justify-center shadow-xl group-hover:scale-110 transition-transform">
                          <PlayIcon size={22} className="ml-0.5 fill-white" />
                        </div>
                      ) : (
                        <div className="w-12 h-12 rounded-full bg-white/30 backdrop-blur-md text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all group-hover:scale-110">
                          <ZoomInIcon size={20} />
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Text Details Area */}
                  <div className="p-5 flex-1 flex flex-col justify-between">
                    <div>
                      <div className="text-[11px] font-bold text-[#1A3A6B] uppercase tracking-wider mb-1">
                        {item.event}
                      </div>
                      <h3 className="font-heading text-lg font-bold text-[#111827] group-hover:text-[#1A3A6B] transition-colors line-clamp-1 mb-2">
                        {item.title}
                      </h3>
                      <p className="font-body text-xs text-gray-600 line-clamp-2 leading-relaxed mb-4">
                        {item.caption}
                      </p>
                    </div>

                    <div className="flex items-center justify-between pt-3 border-t border-gray-100 text-xs font-body text-gray-500">
                      <span className="flex items-center gap-1">
                        <CalendarIcon size={13} className="text-gray-400" />
                        {item.date}
                      </span>
                      <span className="font-bold text-[#1A3A6B] group-hover:translate-x-1 transition-transform inline-flex items-center gap-1">
                        {isVideo ? "Watch Video" : "View Photo"} →
                      </span>
                    </div>
                  </div>

                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>

        {filteredMedia.length === 0 && (
          <div className="text-center py-16">
            <p className="text-gray-500 font-body text-base">
              No media items found for &quot;{activeTab}&quot;.
            </p>
          </div>
        )}

      </div>
    </section>
  );
}
