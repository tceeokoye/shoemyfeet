"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { TIMELINE_EVENTS, TimelineEvent, MediaItem } from "./galleryData";
import { MapPinIcon, CalendarIcon, UsersIcon, PlayIcon, SparklesIcon } from "@/components/ui/Icons";
import { fadeUp, staggerContainer, viewportConfig } from "@/lib/animations";

interface EventTimelineProps {
  onPlayVideo?: (video: MediaItem) => void;
}

export default function EventTimeline({ onPlayVideo }: EventTimelineProps) {
  return (
    <section className="section-padding bg-[#0d1f3c] text-white relative overflow-hidden">
      {/* Background Glow Orbs */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute top-1/3 left-10 w-96 h-96 rounded-full bg-blue-500/10 blur-[150px]" />
        <div className="absolute bottom-1/3 right-10 w-96 h-96 rounded-full bg-orange-500/10 blur-[150px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
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
            className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-white/10 text-hope-yellow text-xs sm:text-sm font-bold mb-3 border border-white/20"
          >
            <SparklesIcon size={14} className="text-warm-orange" />
            Chronological Journey
          </motion.span>

          <motion.h2
            variants={fadeUp}
            className="font-heading text-3xl sm:text-5xl font-bold text-white mb-4"
          >
            Our Outreach <span className="text-warm-orange">Timeline</span>
          </motion.h2>

          <motion.p
            variants={fadeUp}
            className="text-base sm:text-lg text-blue-100/90 font-body leading-relaxed"
          >
            Follow our growth from a single 100-pair outreach in 2022 to a multi-state nonprofit powering shoes and children's empowerment across Nigeria.
          </motion.p>
        </motion.div>

        {/* Timeline Path */}
        <div className="relative">
          {/* Center Vertical Line */}
          <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-1 bg-[#1a3a6b] -translate-x-1/2 rounded-full opacity-40" />

          <div className="space-y-12 lg:space-y-16">
            {TIMELINE_EVENTS.map((event, idx) => {
              const isEven = idx % 2 === 0;

              return (
                <motion.div
                  key={event.id}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={viewportConfig}
                  transition={{ duration: 0.6, delay: idx * 0.1 }}
                  className={`flex flex-col lg:flex-row items-center gap-8 ${
                    isEven ? "lg:flex-row-reverse" : ""
                  }`}
                >
                  {/* Media Cover Card */}
                  <div className="w-full lg:w-1/2">
                    <div className="relative aspect-16/9 rounded-3xl overflow-hidden shadow-2xl border border-white/15 group">
                      <Image
                        src={event.coverImage}
                        alt={event.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-700"
                        sizes="(max-width: 1024px) 100vw, 50vw"
                      />
                      <div className="absolute inset-0 bg-[#1a3a6b]" />

                      {/* Video Play Trigger Overlay */}
                      {event.mediaType === "video" && onPlayVideo && (
                        <div
                          className="absolute inset-0 flex items-center justify-center cursor-pointer z-20"
                          onClick={() =>
                            onPlayVideo({
                              id: event.id,
                              type: "video",
                              title: event.title,
                              caption: event.description,
                              location: event.location,
                              event: event.title,
                              date: event.date,
                              year: event.year,
                              categories: ["Videos"],
                              image: event.coverImage,
                              videoUrl: event.videoUrl || "/videos/story.mp4",
                            })
                          }
                        >
                          <div className="w-16 h-16 rounded-full bg-warm-orange text-white flex items-center justify-center shadow-2xl group-hover:scale-110 transition-transform">
                            <PlayIcon size={24} className="ml-1 fill-white" />
                          </div>
                        </div>
                      )}

                      <div className="absolute top-4 left-4 z-10">
                        <span className="px-3 py-1 rounded-full bg-warm-orange text-white text-xs font-bold font-heading">
                          {event.year}
                        </span>
                      </div>

                      <div className="absolute bottom-4 left-4 right-4 z-10 flex items-center justify-between text-xs text-blue-200 font-body">
                        <span className="flex items-center gap-1">
                          <MapPinIcon size={12} className="text-warm-orange" />
                          {event.location}
                        </span>
                        <span className="flex items-center gap-1 text-hope-yellow font-bold">
                          <UsersIcon size={12} />
                          {event.beneficiaries}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Timeline Badge Node */}
                  <div className="hidden lg:flex shrink-0 w-12 h-12 rounded-full bg-[#f97316] text-white items-center justify-center font-heading font-extrabold text-sm shadow-xl z-20 border-4 border-[#0d1f3c]">
                    {idx + 1}
                  </div>

                  {/* Text Content Card */}
                  <div className="w-full lg:w-1/2">
                    <div className="bg-white/5 backdrop-blur-md p-6 sm:p-8 rounded-3xl border border-white/10 shadow-xl">
                      <div className="flex items-center gap-2 text-xs font-semibold text-hope-yellow mb-2 font-body">
                        <CalendarIcon size={14} />
                        {event.date}
                      </div>

                      <h3 className="font-heading text-2xl font-bold text-white mb-3">
                        {event.title}
                      </h3>

                      <p className="font-body text-sm text-blue-100/90 leading-relaxed mb-4">
                        {event.description}
                      </p>

                      <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-xs font-bold text-warm-orange border border-white/10">
                        <span>Impact: {event.beneficiaries}</span>
                      </div>
                    </div>
                  </div>

                </motion.div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
}
