"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { PlayIcon, MapPinIcon, CalendarIcon, SparklesIcon, UsersIcon } from "@/components/ui/Icons";
import { FEATURED_VIDEO, MediaItem } from "./galleryData";
import { fadeUp, staggerContainer, viewportConfig } from "@/lib/animations";

interface FeaturedVideoSectionProps {
  onPlayVideo: (video: MediaItem) => void;
}

export default function FeaturedVideoSection({ onPlayVideo }: FeaturedVideoSectionProps) {
  return (
    <section id="featured-video" className="section-padding bg-[#fafafa] relative overflow-hidden">
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
            className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-orange-100 text-warm-orange-dark text-xs sm:text-sm font-bold mb-3 border border-orange-200"
          >
            <SparklesIcon size={14} className="text-warm-orange" />
            Documentary Spotlight
          </motion.span>

          <motion.h2
            variants={fadeUp}
            className="font-heading text-3xl sm:text-5xl font-bold text-[#1a1a2e] mb-4"
          >
            Featured <span className="text-warm-orange">Story Film</span>
          </motion.h2>

          <motion.p
            variants={fadeUp}
            className="text-base sm:text-lg text-gray-600 font-body leading-relaxed"
          >
            Watch how every shoe distribution transforms lives, inspires hope, and restores dignity across Nigerian school communities.
          </motion.p>
        </motion.div>

        {/* Cinematic Video Card */}
        <motion.div
          className="relative rounded-3xl overflow-hidden shadow-2xl bg-[#0f2347] border border-gray-200/80 group cursor-pointer"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewportConfig}
          transition={{ duration: 0.6 }}
          onClick={() => onPlayVideo(FEATURED_VIDEO)}
        >
          <div className="grid lg:grid-cols-12 gap-0 items-center">
            
            {/* Cinematic Thumbnail Area */}
            <div className="lg:col-span-7 relative h-72 sm:h-[420px] w-full overflow-hidden">
              <Image
                src={FEATURED_VIDEO.image}
                alt={FEATURED_VIDEO.title}
                fill
                priority
                className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                sizes="(max-width: 1024px) 100vw, 60vw"
              />
              <div className="absolute inset-0 bg-[#1a3a6b] lg: lg:from-transparent lg:to-[#0f2347]" />

              {/* Pulsing Custom Play Button */}
              <div className="absolute inset-0 flex items-center justify-center z-10">
                <div className="relative">
                  <div className="ripple" />
                  <div className="ripple ripple-delay" />
                  <button
                    className="w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-[#1a3a6b] text-white flex items-center justify-center shadow-2xl group-hover:scale-110 transition-transform duration-300 relative z-20"
                    aria-label="Play Featured Video"
                  >
                    <PlayIcon size={32} className="ml-1 fill-white" />
                  </button>
                </div>
              </div>

              {/* Duration & Type Badges */}
              <div className="absolute top-4 left-4 flex items-center gap-2 z-10">
                <span className="px-3 py-1 rounded-full bg-warm-orange text-white text-xs font-bold font-heading shadow-md">
                  FEATURED FILM
                </span>
                <span className="px-3 py-1 rounded-full bg-black/60 backdrop-blur-md text-white text-xs font-mono">
                  {FEATURED_VIDEO.duration}
                </span>
              </div>
            </div>

            {/* Content Details Area */}
            <div className="lg:col-span-5 p-6 sm:p-10 text-white flex flex-col justify-center">
              <div className="flex flex-wrap items-center gap-3 text-xs text-blue-200 font-body mb-4">
                <span className="flex items-center gap-1">
                  <MapPinIcon size={14} className="text-warm-orange" />
                  {FEATURED_VIDEO.location}
                </span>
                <span className="flex items-center gap-1">
                  <CalendarIcon size={14} className="text-hope-yellow" />
                  {FEATURED_VIDEO.date}
                </span>
              </div>

              <h3 className="font-heading text-2xl sm:text-3xl font-extrabold text-white leading-tight mb-4 group-hover:text-hope-yellow transition-colors">
                {FEATURED_VIDEO.title}
              </h3>

              <p className="font-body text-sm sm:text-base text-blue-100/90 leading-relaxed mb-6">
                {FEATURED_VIDEO.caption}
              </p>

              {FEATURED_VIDEO.beneficiaries && (
                <div className="mb-6 inline-flex items-center gap-2 px-4 py-2 rounded-2xl bg-white/10 text-hope-yellow text-xs font-bold border border-white/15">
                  <UsersIcon size={16} />
                  <span>Impact Reached: {FEATURED_VIDEO.beneficiaries}</span>
                </div>
              )}

              <div className="inline-flex items-center gap-2 text-sm font-bold font-heading text-warm-orange group-hover:translate-x-2 transition-transform">
                <span>Watch Full Documentary</span>
                <PlayIcon size={16} className="fill-warm-orange" />
              </div>
            </div>

          </div>
        </motion.div>

      </div>
    </section>
  );
}
