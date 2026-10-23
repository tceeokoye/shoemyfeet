"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "@/components/ui/RealImage";
import { ALL_MEDIA_ITEMS, MediaItem } from "./galleryData";
import { SearchIcon, FilterIcon, MapPinIcon, CalendarIcon, PlayIcon, ZoomInIcon, ChevronDownIcon } from "@/components/ui/Icons";
import { fadeUp, staggerContainer, viewportConfig } from "@/lib/animations";

interface MediaArchiveProps {
  onSelectPhoto: (item: MediaItem, index: number) => void;
  onSelectVideo: (item: MediaItem) => void;
}

export default function MediaArchive({ onSelectPhoto, onSelectVideo }: MediaArchiveProps) {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedYear, setSelectedYear] = useState("All Years");
  const [selectedLocation, setSelectedLocation] = useState("All Locations");
  const [selectedType, setSelectedType] = useState("All Types");
  const [visibleCount, setVisibleCount] = useState(6);

  const filteredItems = ALL_MEDIA_ITEMS.filter((item) => {
    // Search query filter
    const matchesSearch =
      searchTerm === "" ||
      item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.caption.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.event.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.location.toLowerCase().includes(searchTerm.toLowerCase());

    // Year filter
    const matchesYear = selectedYear === "All Years" || item.year === selectedYear;

    // Location filter
    const matchesLocation =
      selectedLocation === "All Locations" || item.location.includes(selectedLocation);

    // Type filter
    const matchesType =
      selectedType === "All Types" ||
      (selectedType === "Photo" && item.type === "photo") ||
      (selectedType === "Video" && item.type === "video");

    return matchesSearch && matchesYear && matchesLocation && matchesType;
  });

  const displayedItems = filteredItems.slice(0, visibleCount);

  return (
    <section id="archive" className="section-padding bg-white relative">
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
            className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-orange-100 text-[#1A3A6B] text-xs sm:text-sm font-bold mb-3 border border-slate-200"
          >
            <FilterIcon size={14} className="text-[#1A3A6B]" />
            Digital History Museum
          </motion.span>

          <motion.h2
            variants={fadeUp}
            className="font-heading text-3xl sm:text-5xl font-bold text-[#111827] mb-4"
          >
            Complete Media <span className="text-[#1A3A6B]">Archive</span>
          </motion.h2>

          <motion.p
            variants={fadeUp}
            className="text-base sm:text-lg text-gray-600 font-body leading-relaxed"
          >
            Search and filter through historical outreach records by year, location, campaign type, and media format.
          </motion.p>
        </motion.div>

        {/* Search & Filter Control Bar */}
        <div className="bg-[#f8faff] rounded-2xl p-6 border border-gray-200/80 shadow-lg mb-10 space-y-4">
          
          {/* Top Search Input */}
          <div className="relative">
            <SearchIcon size={20} className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="Search by keywords, school name, event title, or state..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-12 pr-4 py-3.5  border border-gray-200 bg-white focus:outline-none focus:border-[#111827] text-sm text-gray-900 font-body shadow-sm"
            />
            {searchTerm && (
              <button
                onClick={() => setSearchTerm("")}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-xs font-bold text-gray-400 hover:text-gray-700"
              >
                Clear
              </button>
            )}
          </div>

          {/* Filter Select Dropdowns */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 font-body text-xs">
            {/* Year */}
            <div className="relative">
              <select
                value={selectedYear}
                onChange={(e) => setSelectedYear(e.target.value)}
                className="w-full px-4 py-3  border border-gray-200 bg-white font-semibold text-gray-800 appearance-none focus:outline-none focus:border-[#111827] cursor-pointer"
              >
                <option value="All Years">All Years (2022 – 2026)</option>
                <option value="2026">2026 Campaigns</option>
                <option value="2025">2025 Outreach</option>
                <option value="2024">2024 Expansion</option>
                <option value="2023">2023 Vocational Launch</option>
                <option value="2022">2022 Inaugural Year</option>
              </select>
              <ChevronDownIcon size={16} className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" />
            </div>

            {/* Location */}
            <div className="relative">
              <select
                value={selectedLocation}
                onChange={(e) => setSelectedLocation(e.target.value)}
                className="w-full px-4 py-3  border border-gray-200 bg-white font-semibold text-gray-800 appearance-none focus:outline-none focus:border-[#111827] cursor-pointer"
              >
                <option value="All Locations">All Locations</option>
                <option value="Enugu">Enugu State</option>
                <option value="Kaduna">Kaduna State</option>
                <option value="Edo">Edo State (Benin City)</option>
              </select>
              <ChevronDownIcon size={16} className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" />
            </div>

            {/* Format */}
            <div className="relative">
              <select
                value={selectedType}
                onChange={(e) => setSelectedType(e.target.value)}
                className="w-full px-4 py-3  border border-gray-200 bg-white font-semibold text-gray-800 appearance-none focus:outline-none focus:border-[#111827] cursor-pointer"
              >
                <option value="All Types">All Media Formats</option>
                <option value="Photo">Photos Only</option>
                <option value="Video">Videos Only</option>
              </select>
              <ChevronDownIcon size={16} className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" />
            </div>
          </div>

        </div>

        {/* Media Results Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {displayedItems.map((item, idx) => {
            const isVideo = item.type === "video";
            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: idx * 0.05 }}
                className="bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-md hover:shadow-xl transition-all cursor-pointer group flex flex-col justify-between"
                onClick={() => {
                  if (isVideo) {
                    onSelectVideo(item);
                  } else {
                    onSelectPhoto(item, idx);
                  }
                }}
              >
                <div className="relative aspect-4/3 overflow-hidden bg-gray-100">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 640px) 100vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />

                  <div className="absolute top-3 left-3 right-3 flex justify-between z-10">
                    <span className="px-2.5 py-1 rounded-full bg-black/60 backdrop-blur-md text-white text-[10px] font-bold">
                      {item.year}
                    </span>
                    <span className="px-2.5 py-1 rounded-full bg-[#1A3A6B] text-white text-[10px] font-bold">
                      {item.type.toUpperCase()}
                    </span>
                  </div>

                  <div className="absolute inset-0 flex items-center justify-center">
                    {isVideo ? (
                      <div className="w-12 h-12 rounded-full bg-[#1A3A6B] text-white flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                        <PlayIcon size={18} className="ml-0.5 fill-white" />
                      </div>
                    ) : (
                      <div className="w-10 h-10 rounded-full bg-white/30 backdrop-blur-md text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                        <ZoomInIcon size={18} />
                      </div>
                    )}
                  </div>
                </div>

                <div className="p-4">
                  <div className="flex items-center justify-between text-[11px] text-gray-500 font-body mb-1">
                    <span className="flex items-center gap-1">
                      <MapPinIcon size={11} className="text-[#1A3A6B]" />
                      {item.location}
                    </span>
                    <span className="flex items-center gap-1">
                      <CalendarIcon size={11} />
                      {item.date}
                    </span>
                  </div>
                  <h4 className="font-heading text-base font-bold text-[#1A3A6B] group-hover:text-[#1A3A6B] transition-colors line-clamp-1">
                    {item.title}
                  </h4>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Load More Button */}
        {visibleCount < filteredItems.length && (
          <div className="text-center mt-12">
            <button
              onClick={() => setVisibleCount((prev) => prev + 6)}
              className="btn-primary text-sm px-8 py-3.5 rounded-[10px] shadow-lg hover:scale-105 transition-all"
            >
              Load More Archive Items ({filteredItems.length - visibleCount} Remaining)
            </button>
          </div>
        )}

      </div>
    </section>
  );
}
