"use client";

import { motion } from "framer-motion";
import { CameraIcon, VideoIcon, SparklesIcon } from "@/components/ui/Icons";
import { fadeUp, staggerContainer, viewportConfig } from "@/lib/animations";

interface ShareYourStoryProps {
  onOpenUpload: (type: "photo" | "video") => void;
}

export default function ShareYourStory({ onOpenUpload }: ShareYourStoryProps) {
  return (
    <section className="section-padding bg-[#111827] text-white relative overflow-hidden border-t border-white/10">
      {/* Ambient background glows */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-96 h-96 rounded-full bg-[#1A3A6B]/10 blur-[140px]" />
        <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-96 h-96 rounded-full bg-[#FFFFFF]0/5 blur-[150px]" />
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          className="bg-white/5 backdrop-blur-xl rounded-2xl p-8 sm:p-14 border border-white/15 shadow-2xl"
        >
          {/* Badge */}
          <motion.div variants={fadeUp} className="mb-4">
            <span className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-white/10 text-[#142E56] text-xs sm:text-sm font-bold font-heading border border-white/20">
              <SparklesIcon size={14} className="text-[#1A3A6B]" />
              Community Contributions
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h2
            variants={fadeUp}
            className="font-heading text-3xl sm:text-5xl font-extrabold text-white mb-4 leading-tight"
          >
            Captured a <span className="text-[#1A3A6B]">Moment of Hope?</span>
          </motion.h2>

          {/* Supporting text */}
          <motion.p
            variants={fadeUp}
            className="text-base sm:text-xl text-neutral-200/90 font-body leading-relaxed max-w-2xl mx-auto mb-8"
          >
            If you attended one of our outreach events, share your photos or videos and help inspire others to join the mission.
          </motion.p>

          {/* Buttons */}
          <motion.div variants={fadeUp} className="flex flex-wrap items-center justify-center gap-4">
            <button
              onClick={() => onOpenUpload("photo")}
              className="btn-primary text-base px-8 py-4 rounded-[10px] shadow-2xl hover:scale-105 transition-all duration-300 inline-flex items-center gap-2"
            >
              <CameraIcon size={20} />
              <span>Upload Photos</span>
            </button>

            <button
              onClick={() => onOpenUpload("video")}
              className="btn-primary border border-white/20 text-base px-8 py-4 rounded-[10px] backdrop-blur-md hover:scale-105 transition-all duration-300 inline-flex items-center gap-2"
            >
              <VideoIcon size={20} className="text-[#142E56]" />
              <span>Upload Videos</span>
            </button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
