"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { FEATURED_MOMENTS, FeaturedMoment } from "./galleryData";
import { MapPinIcon, CalendarIcon, SparklesIcon, ChevronRightIcon, CameraIcon } from "@/components/ui/Icons";
import { fadeUp, staggerContainer, viewportConfig } from "@/lib/animations";

interface FeaturedMomentsProps {
  onOpenAlbum: (album: FeaturedMoment) => void;
}

export default function FeaturedMoments({ onOpenAlbum }: FeaturedMomentsProps) {
  return (
    <section className="section-padding bg-[#f8faff] relative overflow-hidden">
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
            className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-blue-100 text-royal-blue text-xs sm:text-sm font-bold mb-3 border border-blue-200"
          >
            <SparklesIcon size={14} className="text-warm-orange" />
            Curated Outreaches
          </motion.span>

          <motion.h2
            variants={fadeUp}
            className="font-heading text-3xl sm:text-5xl font-bold text-[#1a1a2e] mb-4"
          >
            Featured <span className="text-warm-orange">Moments & Albums</span>
          </motion.h2>

          <motion.p
            variants={fadeUp}
            className="text-base sm:text-lg text-gray-600 font-body leading-relaxed"
          >
            Deep dive into complete event albums documenting our major campaigns, volunteer appreciation, and vocational trainings.
          </motion.p>
        </motion.div>

        {/* 6 Large Featured Moment Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {FEATURED_MOMENTS.map((moment) => (
            <motion.div
              key={moment.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={viewportConfig}
              transition={{ duration: 0.5 }}
              className="bg-white rounded-3xl overflow-hidden shadow-lg border border-gray-100 card-hover flex flex-col group"
            >
              {/* Cover Image */}
              <div className="relative h-60 w-full overflow-hidden bg-gray-100">
                <Image
                  src={moment.coverImage}
                  alt={moment.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-[#2563eb]" />

                {/* Badges */}
                <div className="absolute top-4 left-4 right-4 flex items-center justify-between z-10">
                  <span className="px-3 py-1 rounded-full bg-warm-orange text-white text-xs font-bold font-heading shadow-md">
                    {moment.itemCount} Media Items
                  </span>
                  <span className="glass px-3 py-1 rounded-full text-white text-xs font-body flex items-center gap-1">
                    <MapPinIcon size={12} className="text-orange-300" />
                    {moment.location}
                  </span>
                </div>

                <div className="absolute bottom-4 left-4 right-4 z-10">
                  <span className="text-xs font-body text-hope-yellow flex items-center gap-1 mb-1">
                    <CalendarIcon size={12} />
                    {moment.date}
                  </span>
                  <h3 className="font-heading text-xl font-bold text-white line-clamp-1">
                    {moment.title}
                  </h3>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <p className="font-body text-xs font-semibold text-royal-blue mb-2">
                    {moment.subtitle}
                  </p>
                  <p className="font-body text-xs text-gray-600 leading-relaxed line-clamp-3 mb-6">
                    {moment.summary}
                  </p>
                </div>

                <div className="pt-4 border-t border-gray-100 flex items-center justify-between">
                  <div className="flex flex-wrap gap-1">
                    {moment.tags.slice(0, 2).map((tag, i) => (
                      <span key={i} className="px-2 py-0.5 rounded-md bg-gray-100 text-[10px] font-semibold text-gray-600">
                        {tag}
                      </span>
                    ))}
                  </div>

                  <button
                    onClick={() => onOpenAlbum(moment)}
                    className="btn-primary text-xs py-2 px-4 rounded-full inline-flex items-center gap-1.5 shadow-sm group-hover:scale-105 transition-all"
                  >
                    <CameraIcon size={13} />
                    <span>View Album</span>
                    <ChevronRightIcon size={13} />
                  </button>
                </div>
              </div>

            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
