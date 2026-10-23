"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "@/components/ui/RealImage";
import { VOLUNTEER_STORIES } from "@/lib/volunteerData";
import { staggerContainer, fadeUp, viewportConfig } from "@/lib/animations";
import { MapPinIcon, ArrowRightIcon, XIcon } from "@/components/ui/Icons";

function StoryCard({ story, index }: { story: typeof VOLUNTEER_STORIES[0]; index: number }) {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.15 }}
        transition={{ duration: 0.55, delay: index * 0.08, ease: [0.16, 1, 0.3, 1] }}
        className="group bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-md hover:shadow-2xl transition-all duration-500 flex flex-col"
      >
        {/* Portrait */}
        <div className="relative h-56 overflow-hidden">
          <Image
            src={story.image}
            alt={story.name}
            fill
            className="object-cover group-hover:scale-110 transition-transform duration-700"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          />
          <div className="absolute inset-0 bg-black/60" />
          {/* Tags */}
          <div className="absolute bottom-3 left-3 flex gap-1.5 flex-wrap">
            {story.tags.map((tag) => (
              <span key={tag} className="px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-white/90 text-[#111827]">
                {tag}
              </span>
            ))}
          </div>
          {/* Years badge */}
          <div className="absolute top-3 right-3">
            <div className="w-12 h-12 rounded-full bg-[#1A3A6B] flex flex-col items-center justify-center shadow-lg">
              <span className="font-heading text-white font-extrabold text-sm leading-none">{story.yearsOfService}</span>
              <span className="text-white/80 text-[9px] font-body leading-none">{story.yearsOfService === 1 ? "yr" : "yrs"}</span>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="p-6 flex flex-col flex-1">
          {/* Quote */}
          <div className="text-4xl text-[#1A3A6B]/20 font-serif leading-none mb-1">&ldquo;</div>
          <p className="font-body text-gray-600 text-sm leading-relaxed italic mb-4 flex-1">
            {story.quote}
          </p>

          {/* Person */}
          <div className="flex items-center justify-between pt-4 border-t border-gray-100">
            <div>
              <p className="font-heading font-bold text-[#111827] text-base">{story.name}</p>
              <p className="font-body text-xs text-[#1A3A6B]-dark font-semibold">{story.role}</p>
              <div className="flex items-center gap-1 mt-0.5">
                <MapPinIcon size={11} className="text-slate-600" />
                <p className="font-body text-xs text-slate-700 font-medium">{story.location}</p>
              </div>
            </div>
            <button
              onClick={() => setModalOpen(true)}
              className="inline-flex items-center gap-1.5 text-xs font-bold font-body px-3 py-2 rounded-full bg-[#1A3A6B] text-white shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300 cursor-pointer shrink-0"
            >
              Full Story
              <ArrowRightIcon size={12} />
            </button>
          </div>
        </div>
      </motion.div>

      {/* Story Modal */}
      <AnimatePresence>
        {modalOpen && (
          <>
            <motion.div
              className="fixed inset-0 bg-black/60 z-50"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setModalOpen(false)}
            />
            <motion.div
              className="fixed inset-4 sm:inset-auto sm:top-1/2 sm:left-1/2 sm:-translate-x-1/2 sm:-translate-y-1/2 sm:w-full sm:max-w-xl z-50 bg-white rounded-2xl shadow-2xl overflow-hidden"
              initial={{ opacity: 0, scale: 0.92, y: 30 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.92, y: 30 }}
              transition={{ type: "spring", stiffness: 260, damping: 22 }}
            >
              {/* Modal image */}
              <div className="relative h-52 overflow-hidden">
                <Image src={story.image} alt={story.name} fill className="object-cover" />
                <div className="absolute inset-0 bg-black/60" />
                <div className="absolute bottom-4 left-5">
                  <p className="font-heading font-bold text-white text-xl">{story.name}</p>
                  <p className="font-body text-sm text-orange-300 font-semibold">{story.role}</p>
                </div>
                <button
                  onClick={() => setModalOpen(false)}
                  className="absolute top-4 right-4 w-9 h-9 rounded-full bg-black/40 flex items-center justify-center text-white hover:bg-black/60 transition-colors cursor-pointer"
                  aria-label="Close story"
                >
                  <XIcon size={18} />
                </button>
              </div>
              {/* Modal content */}
              <div className="p-6">
                <div className="flex items-center gap-2 mb-4">
                  <MapPinIcon size={13} className="text-gray-400" />
                  <p className="font-body text-sm text-gray-400">{story.location} · {story.yearsOfService} {story.yearsOfService === 1 ? "year" : "years"} of service</p>
                </div>
                <div className="text-4xl text-[#1A3A6B]/20 font-serif leading-none mb-2">&ldquo;</div>
                <p className="font-body text-gray-700 text-base italic leading-relaxed mb-5">{story.quote}</p>
                <p className="font-body text-gray-600 text-sm leading-relaxed">{story.fullStory}</p>
                <div className="mt-6 flex flex-wrap gap-2">
                  {story.tags.map((tag) => (
                    <span key={tag} className="px-3 py-1 rounded-full text-xs font-bold bg-[#F3F4F6] text-[#1A3A6B]-dark border border-orange-200">
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="mt-6">
                  <a
                    href="#volunteer-form"
                    onClick={() => setModalOpen(false)}
                    className="btn-primary w-full justify-center"
                  >
                    I Want to Volunteer Too →
                  </a>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}

export default function VolunteerSpotlights() {
  return (
    <section id="volunteer-spotlights" className="section-padding bg-[#f8fafc] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          className="text-center max-w-3xl mx-auto mb-14"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
        >
          <motion.span
            variants={fadeUp}
            className="inline-block px-4 py-1.5 rounded-full bg-rose-100 text-rose-600 text-xs sm:text-sm font-bold border border-rose-200 mb-4"
          >
            Volunteer Spotlights
          </motion.span>
          <motion.h2
            variants={fadeUp}
            className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-[#111827] mb-4 leading-tight"
          >
            Meet the Hearts Behind{" "}
            <span className="text-[#1A3A6B]">Our Mission</span>
          </motion.h2>
          <motion.p
            variants={fadeUp}
            className="text-base sm:text-lg text-gray-600 font-body leading-relaxed"
          >
            These are real  teachers, students, retirees, professionals  who chose to give their time and talents. Their stories will inspire yours.
          </motion.p>
        </motion.div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {VOLUNTEER_STORIES.map((story, index) => (
            <StoryCard key={story.id} story={story} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
