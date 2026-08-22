"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { SparklesIcon, MapPinIcon, ChevronRightIcon } from "@/components/ui/Icons";
import { fadeUp, staggerContainer, viewportConfig } from "@/lib/animations";

const galleryData = [
  {
    id: "gs1",
    src: "/images/gallery1.jpg",
    alt: "Children receiving school shoes in a community distribution event",
    caption: "Distribution Day — Enugu State",
    location: "Enugu State",
    category: "Outreach",
  },
  {
    id: "gs2",
    src: "/images/gallery2.jpg",
    alt: "A young girl confidently walking to school in her new shoes",
    caption: "Walking Into Her Future With Pride",
    location: "Kaduna State",
    category: "Impact",
  },
  {
    id: "gs3",
    src: "/images/gallery3.jpg",
    alt: "kids learning shoemaking skills in a training session",
    caption: "Shoemaking Vocational Training",
    location: "Edo State",
    category: "Empowerment",
  },
  {
    id: "gs4",
    src: "/images/gallery4.jpg",
    alt: "Volunteers and community members at a shoe distribution event",
    caption: "Community Outreach & Logistics — Kaduna",
    location: "Kaduna State",
    category: "Volunteers",
  },
  {
    id: "gs5",
    src: "/images/gallery5.jpg",
    alt: "Happy schoolchildren in uniforms and matching school shoes",
    caption: "Joy of Belonging — 137 Smiles",
    location: "Enugu State",
    category: "Education",
  },
  {
    id: "gs6",
    src: "/images/gallery6.jpg",
    alt: "A young boy's wonder as he puts on shoes for the first time",
    caption: "First Pair, First Smile",
    location: "Kaduna State",
    category: "Dignity",
  },
];

// Area 0 = big featured (top-left 2×2), areas 1–2 = right side, areas 3–5 = bottom row
const AREA_NAMES = ["feat", "sm0", "sm1", "sm2", "sm3", "sm4"];
const GRID_TEMPLATE_AREAS = `"feat feat sm0" "feat feat sm1" "sm2 sm3 sm4"`;

// Custom directional slide-in animation variants:
// - Big image (area 0): slides in from the left
// - Right images (area 1 & 2): slide in from the right, one after the other
// - Bottom images (area 3, 4, 5): slide in from the bottom, one after the other
const itemVariants = {
  hidden: (areaIdx: number) => {
    if (areaIdx === 0) {
      return { opacity: 0, x: -140, y: 0 };
    }
    if (areaIdx === 1 || areaIdx === 2) {
      return { opacity: 0, x: 140, y: 0 };
    }
    return { opacity: 0, x: 0, y: 140 };
  },
  visible: (areaIdx: number) => {
    const delays = [0.05, 0.25, 0.42, 0.58, 0.74, 0.90];
    return {
      opacity: 1,
      x: 0,
      y: 0,
      transition: {
        type: "spring" as const,
        stiffness: 70,
        damping: 14,
        mass: 0.85,
        delay: delays[areaIdx],
      },
    };
  },
};

export default function GallerySection() {
  return (
    <section id="gallery" className="section-padding bg-[#fafafa] overflow-hidden">
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
            className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-blue-100 text-royal-blue text-sm font-bold mb-4 border border-blue-200"
          >
            <SparklesIcon size={14} className="text-orange-500" />
            Stories in Pictures
          </motion.span>
          <motion.h2
            variants={fadeUp}
            className="font-heading text-4xl sm:text-5xl font-bold text-[#1a1a2e] mb-4"
          >
            Every Photo Tells a{" "}
            <span className="text-warm-orange">Story of Change</span>
          </motion.h2>
          <motion.p
            variants={fadeUp}
            className="text-lg text-gray-600 font-body leading-relaxed"
          >
            Witness the real power of giving through our community outreaches and empowerment programs.
          </motion.p>
        </motion.div>

        {/* Bento Grid: ALL 6 images with staggered directional slide animations */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="w-full mb-12"
          style={{
            display: "grid",
            gridTemplateAreas: GRID_TEMPLATE_AREAS,
            gridTemplateColumns: "1fr 1fr 1fr",
            gridTemplateRows: "240px 240px 240px",
            gap: "12px",
          }}
        >
          {galleryData.map((item, areaIdx) => {
            const isFeatured = areaIdx === 0;

            return (
              <motion.div
                key={item.id}
                custom={areaIdx}
                variants={itemVariants}
                style={{ gridArea: AREA_NAMES[areaIdx] }}
                className={`relative overflow-hidden transition-all duration-500 group will-change-transform ${
                  isFeatured
                    ? "rounded-3xl border-2 border-[#f97316] shadow-2xl"
                    : "rounded-2xl border-2 border-white hover:border-[#f97316]/60 hover:shadow-xl"
                }`}
              >
                {/* Image */}
                <Image
                  src={item.src}
                  alt={item.alt}
                  fill
                  priority={isFeatured}
                  className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                  sizes={isFeatured ? "(max-width: 768px) 100vw, 45vw" : "(max-width: 768px) 50vw, 22vw"}
                />

                {/* Gradient */}
                <div className="absolute inset-0 bg-[#2563eb] pointer-events-none" />

                {/* Featured top badges */}
                {isFeatured && (
                  <div className="absolute top-4 left-4 right-4 flex items-center justify-between z-10">
                    <span className="px-3.5 py-1.5 rounded-full bg-[#f97316] text-white text-xs font-heading font-bold shadow-lg">
                      FEATURED
                    </span>
                    <span className="glass px-3.5 py-1.5 rounded-full text-white text-xs font-body font-medium border border-white/30 flex items-center gap-1">
                      <MapPinIcon size={12} className="text-orange-300" />
                      {item.location}
                    </span>
                  </div>
                )}

                {/* Caption */}
                <div className="absolute bottom-0 left-0 right-0 p-3.5 z-10 pointer-events-none">
                  {isFeatured && (
                    <span className="inline-block px-2.5 py-0.5 rounded-md bg-white/20 backdrop-blur-md text-white text-[11px] font-body font-bold mb-1.5 border border-white/30">
                      {item.category}
                    </span>
                  )}
                  <h3
                    className={`font-heading font-bold text-white leading-snug drop-shadow-md ${
                      isFeatured ? "text-xl sm:text-2xl lg:text-3xl" : "text-xs line-clamp-1"
                    }`}
                  >
                    {item.caption}
                  </h3>
                  {!isFeatured && (
                    <p className="text-orange-200 text-[10px] font-body mt-0.5 opacity-90">
                      {item.location}
                    </p>
                  )}
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* CTA */}
        <motion.div
          className="text-center mt-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5, delay: 1.0 }}
        >
          <a
            href="https://instagram.com/shoemyfeet"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary group inline-flex items-center gap-2"
          >
            <span>View Full Gallery on Instagram</span>
            <ChevronRightIcon size={16} className="group-hover:translate-x-1 transition-transform" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}

