"use client";

import { motion } from "framer-motion";
import Image from "@/components/ui/RealImage";
import { COMMUNITY_VOICES, MediaItem } from "./galleryData";
import { QuoteIcon, PlayIcon, SparklesIcon, MapPinIcon } from "@/components/ui/Icons";
import { fadeUp, staggerContainer, viewportConfig } from "@/lib/animations";

interface CommunityVoicesProps {
  onPlayVideo?: (video: MediaItem) => void;
}

export default function CommunityVoices({ onPlayVideo }: CommunityVoicesProps) {
  return (
    <section className="section-padding bg-[#fafafa] relative">
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
            className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-orange-100 text-[#1A3A6B]-dark text-xs sm:text-sm font-bold mb-3 border border-orange-200"
          >
            <SparklesIcon size={14} className="text-[#1A3A6B]" />
            Voices of Impact
          </motion.span>

          <motion.h2
            variants={fadeUp}
            className="font-heading text-3xl sm:text-5xl font-bold text-[#111827] mb-4"
          >
            Community <span className="text-[#1A3A6B]">Voices</span>
          </motion.h2>

          <motion.p
            variants={fadeUp}
            className="text-base sm:text-lg text-gray-600 font-body leading-relaxed"
          >
            Hear directly from teachers, students, child trainees, and lead volunteers about the transformative power of a single pair of shoes.
          </motion.p>
        </motion.div>

        {/* 4 Testimonial Cards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {COMMUNITY_VOICES.map((voice) => (
            <motion.div
              key={voice.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={viewportConfig}
              transition={{ duration: 0.5 }}
              className="bg-white rounded-2xl p-6 border border-gray-100 shadow-lg card-hover flex flex-col justify-between group"
            >
              <div>
                {/* Header Profile Info */}
                <div className="flex items-center gap-4 mb-4">
                  <div className="relative w-14 h-14  overflow-hidden shrink-0 border-2 border-[#1A3A6B]/30 shadow-md">
                    <Image
                      src={voice.avatar}
                      alt={voice.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="font-heading font-bold text-base text-[#1A3A6B] leading-tight">
                      {voice.name}
                    </h3>
                    <p className="font-body text-xs text-gray-500 font-medium line-clamp-1">
                      {voice.role}
                    </p>
                    <span className="inline-flex items-center gap-1 text-[10px] text-[#1A3A6B] font-semibold">
                      <MapPinIcon size={10} />
                      {voice.location}
                    </span>
                  </div>
                </div>

                {/* Quote Box */}
                <div className="relative bg-[#F3F4F6]/60 p-4  mb-4 border border-orange-100">
                  <QuoteIcon size={16} className="text-[#1A3A6B] mb-1" />
                  <p className="font-body text-xs text-gray-700 leading-relaxed italic">
                    &quot;{voice.quote}&quot;
                  </p>
                </div>
              </div>

              {/* Video Play Button if available */}
              {voice.hasVideo && onPlayVideo && (
                <button
                  onClick={() =>
                    onPlayVideo({
                      id: voice.id,
                      type: "video",
                      title: `${voice.name} Testimonial`,
                      caption: voice.quote,
                      location: voice.location,
                      event: voice.role,
                      date: "2026",
                      year: "2026",
                      categories: ["Videos"],
                      image: voice.thumbnail || voice.avatar,
                      videoUrl: voice.videoUrl || "/videos/story.mp4",
                    })
                  }
                  className="w-full py-2.5  bg-[#1A3A6B] text-white font-heading text-xs font-bold flex items-center justify-center gap-2 shadow-md hover:scale-102 transition-all"
                >
                  <PlayIcon size={14} className="fill-white" />
                  <span>Play Video Testimonial</span>
                </button>
              )}

            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
