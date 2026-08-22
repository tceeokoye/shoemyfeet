"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";
import { SparklesIcon, CameraIcon, VideoIcon, ArrowRightIcon } from "@/components/ui/Icons";
import { fadeUp, staggerContainer } from "@/lib/animations";

const footprintPositions = [
  { left: "6%", bottom: "25%", delay: 0, rotate: -15 },
  { left: "14%", bottom: "40%", delay: 0.3, rotate: 12 },
  { left: "22%", bottom: "20%", delay: 0.6, rotate: -8 },
  { left: "78%", bottom: "30%", delay: 0.4, rotate: 10 },
  { left: "86%", bottom: "45%", delay: 0.7, rotate: -12 },
  { left: "92%", bottom: "22%", delay: 1.0, rotate: 8 },
];

export default function GalleryHero() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-[#09090b] pt-28 pb-20">
      {/* Background Image Collage Blend */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/everymoment.jpeg"
          alt="Shoe My Feet Foundation outreach collage"
          fill
          priority
          className="object-cover object-center scale-105"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/60 to-black/40" />
      </div>

      {/* Background Glow Orbs */}
      <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-[#f97316]/20 blur-[140px] animate-pulse" />
        <div className="absolute bottom-1/3 right-1/4 w-[450px] h-[450px] rounded-full bg-[#f97316]/15 blur-[160px] animate-pulse" />
      </div>

      {/* Floating Footprints Animation Trail */}
      <div className="absolute inset-0 pointer-events-none z-10 overflow-hidden hidden sm:block">
        {footprintPositions.map((fp, i) => (
          <motion.div
            key={i}
            className="absolute text-white/20 text-3xl select-none"
            style={{ left: fp.left, bottom: fp.bottom, rotate: fp.rotate }}
            animate={{ y: [0, -16, 0], opacity: [0.1, 0.3, 0.1] }}
            transition={{ duration: 3.8 + i * 0.4, repeat: Infinity, ease: "easeInOut", delay: fp.delay }}
          >
            👣
          </motion.div>
        ))}
      </div>

      {/* Floating Decorative Glass Shapes */}
      <motion.div
        className="absolute top-28 left-10 w-16 h-16 rounded-3xl border border-white/20 glass hidden md:block z-10"
        animate={{ y: [-10, 10, -10], rotate: [0, 12, -12, 0] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-28 right-12 w-20 h-20 rounded-full border border-orange-400/30 glass hidden md:block z-10"
        animate={{ y: [14, -14, 14], scale: [1, 1.06, 1] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />

      <div ref={ref} className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          
          {/* Main Hero Content Column */}
          <motion.div
            className="lg:col-span-7 text-center lg:text-left"
            variants={staggerContainer}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
          >
            {/* Badge */}
            <motion.div variants={fadeUp} className="mb-6 inline-block">
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/20 bg-white/10 backdrop-blur-md text-white text-xs sm:text-sm font-bold font-body shadow-lg">
                <SparklesIcon size={16} className="text-[#fbbf24] animate-spin-slow" />
                <span>Shoe My Feet Foundation · Media Gallery</span>
              </span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              variants={fadeUp}
              className="font-heading text-4xl sm:text-6xl lg:text-7xl font-extrabold text-white leading-[1.1] mb-6 tracking-tight drop-shadow-md"
            >
              Every Moment{" "}
              <span className="relative inline-block">
                <span className="text-warm-orange">
                  Tells a Story
                </span>
                <svg className="absolute -bottom-2 left-0 w-full h-3 text-warm-orange/60" viewBox="0 0 100 12" preserveAspectRatio="none">
                  <path d="M0,0 Q50,12 100,0" fill="none" stroke="currentColor" strokeWidth="4" />
                </svg>
              </span>
            </motion.h1>

            {/* Subtext */}
            <motion.p
              variants={fadeUp}
              className="text-neutral-200/95 text-base sm:text-xl font-body leading-relaxed max-w-2xl mb-8 mx-auto lg:mx-0"
            >
              Explore the unforgettable moments captured during our outreach programs, school visits, volunteer activities, and life-changing shoe distributions across Nigeria.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div variants={fadeUp} className="flex flex-wrap items-center justify-center lg:justify-start gap-4">
              <a
                href="#media-filters"
                className="btn-orange text-base px-7 py-3.5 rounded-full shadow-2xl hover:scale-105 transition-all duration-300 inline-flex items-center gap-2"
              >
                <CameraIcon size={18} />
                <span>Explore Photos</span>
              </a>

              <a
                href="#featured-video"
                className="btn-primary border border-white/20 text-base px-7 py-3.5 rounded-full backdrop-blur-md hover:scale-105 transition-all duration-300 inline-flex items-center gap-2"
              >
                <VideoIcon size={18} className="text-hope-yellow" />
                <span>Watch Videos</span>
                <ArrowRightIcon size={16} />
              </a>
            </motion.div>
          </motion.div>

          {/* Right Floating Photo Collage Grid */}
          <motion.div
            className="lg:col-span-5 relative"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="grid grid-cols-2 gap-3.5 relative">
              <div className="space-y-3.5">
                <div className="relative h-44 sm:h-52 rounded-3xl overflow-hidden border-2 border-white/20 shadow-2xl group">
                  <Image
                    src="/images/gallery1.jpg"
                    alt="Distribution event"
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                  <span className="absolute bottom-3 left-3 text-xs font-heading font-bold text-white">
                    Enugu Distribution
                  </span>
                </div>
                <div className="relative h-36 rounded-3xl overflow-hidden border-2 border-white/20 shadow-xl group">
                  <Image
                    src="/images/crafting4.jpeg"
                    alt="Shoemaking workshop"
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                  <span className="absolute bottom-3 left-3 text-xs font-heading font-bold text-white">
                    kids Workshop
                  </span>
                </div>
              </div>

              <div className="space-y-3.5 pt-6">
                <div className="relative h-36 rounded-3xl overflow-hidden border-2 border-white/20 shadow-xl group">
                  <Image
                    src="/images/gallery2.jpg"
                    alt="School visits"
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                  <span className="absolute bottom-3 left-3 text-xs font-heading font-bold text-white">
                    School Visits
                  </span>
                </div>
                <div className="relative h-44 sm:h-52 rounded-3xl overflow-hidden border-2 border-white/20 shadow-2xl group">
                  <Image
                    src="/images/happy-kids.jpeg"
                    alt="Happy children"
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                  <span className="absolute bottom-3 left-3 text-xs font-heading font-bold text-white">
                    15,000+ Smiles
                  </span>
                </div>
              </div>

              {/* Floating Center Badge */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20">
                <div className="w-16 h-16 rounded-full bg-[#f97316] flex items-center justify-center text-white shadow-2xl border-4 border-[#09090b] animate-bounce">
                  <CameraIcon size={24} />
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
