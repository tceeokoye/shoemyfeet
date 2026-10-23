"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import FastImage from "@/components/ui/FastImage";
import { ArrowRightIcon } from "@/components/ui/Icons";
import { fadeUp, staggerContainer, viewportConfig } from "@/lib/animations";
import { STORIES } from "@/lib/constants";

const galleryData = [
  { id: "g1", src: "/images/shoe_distribution.jpg", alt: "A volunteer fitting school shoes for children", caption: "A Day of New Beginnings", location: "Nigeria", tag: "Outreach" },
  { id: "g2", src: "/images/everychild.jpg", alt: "The founder standing with children at their school", caption: "Standing Together at School", location: "Nigeria", tag: "Community" },
  { id: "g3", src: "/images/crafting1.jpeg", alt: "A shoemaking instructor guiding a practical workshop", caption: "Learning Shoemaking Skills", location: "Nigeria", tag: "Empowerment" },
  { id: "g4", src: "/images/keeping-children.jpg", alt: "School children walking together outdoors", caption: "Every Step Opens a Door", location: "Nigeria", tag: "Education" },
  { id: "g5", src: "/images/happy-kids.jpeg", alt: "Children sharing a joyful moment", caption: "Confidence in Every Step", location: "Nigeria", tag: "Joy" },
  { id: "g6", src: "/images/everymoment.jpeg", alt: "Children taking part in a community programme", caption: "Growing Together", location: "Nigeria", tag: "Community" },
];

const AREA_NAMES = ["feat", "sm0", "sm1", "sm2", "sm3", "sm4"];
const GRID_AREAS = `"feat feat sm0" "feat feat sm1" "sm2 sm3 sm4"`;

const itemVariants = {
  hidden: (i: number) => {
    if (i === 0) return { opacity: 0, x: -60 };
    if (i <= 2)  return { opacity: 0, x: 60 };
    return { opacity: 0, y: 50 };
  },
  visible: (i: number) => ({
    opacity: 1, x: 0, y: 0,
    transition: {
      type: "spring" as const,
      stiffness: 65,
      damping: 14,
      delay: [0.05, 0.18, 0.3, 0.45, 0.58, 0.7][i],
    },
  }),
};

export default function GalleryPreview() {
  const story = STORIES[0];

  return (
    <section className="section-padding bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <motion.div
          className="text-center max-w-2xl mx-auto mb-14"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
        >
          <motion.div variants={fadeUp} className="flex items-center justify-center gap-3 mb-4">
            <div className="h-px w-10 bg-[#1A3A6B]" />
            <span className="text-xs font-medium text-[#C2410C] uppercase tracking-[0.12em] font-heading">
              Impact Photo Gallery
            </span>
            <div className="h-px w-10 bg-[#1A3A6B]" />
          </motion.div>

          <motion.h2
            variants={fadeUp}
            className="font-heading font-semibold text-3xl sm:text-4xl lg:text-5xl text-[#111827] mb-4"
          >
            Hope &amp; Dignity{" "}
            <span className="text-[#C2410C]">In Pictures</span>
          </motion.h2>

          <motion.p variants={fadeUp} className="font-body text-slate-600 text-base sm:text-lg leading-relaxed">
            Real moments of transformation, joy, and dignity across Nigerian communities.
          </motion.p>
        </motion.div>

        {/* Bento grid with 3D card tilt effects */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          className="w-full mb-12 hidden md:grid"
          style={{
            gridTemplateAreas: GRID_AREAS,
            gridTemplateColumns: "1fr 1fr 1fr",
            gridTemplateRows: "210px 210px 210px",
            gap: "14px",
          }}
        >
          {galleryData.map((item, i) => {
            return (
              <motion.div
                key={item.id}
                custom={i}
                variants={itemVariants}
                style={{ gridArea: AREA_NAMES[i] }}
                className="group relative cursor-pointer overflow-hidden rounded-2xl border border-[#F3F4F6]"
              >
                <FastImage
                  src={item.src}
                  alt={item.alt}
                  fill
                  className="object-cover group-hover:scale-108 transition-transform duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <span className="text-[11px] text-[#F97316] font-medium font-heading uppercase tracking-[0.12em] block mb-1">
                    {item.location}
                  </span>
                  <p className="font-heading font-medium text-base leading-snug drop-shadow-sm">
                    {item.caption}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Mobile vertical cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10 md:hidden">
          {galleryData.map((item) => (
            <div key={item.id} className="relative h-60 overflow-hidden rounded-2xl border border-[#F3F4F6]">
              <FastImage src={item.src} alt={item.alt} fill className="object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
              <div className="absolute bottom-3 left-3 right-3 text-white">
                <p className="text-xs text-orange-400 font-bold font-heading uppercase">{item.location}</p>
                <p className="font-heading font-bold text-base leading-snug">{item.caption}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Testimonial Pull-Quote Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="relative mb-8 overflow-hidden rounded-2xl border border-[#F3F4F6] border-l-4 border-l-[#1A3A6B] bg-[#FFFFFF] p-8 text-[#111827] sm:p-10"
        >
          <div className="relative z-10 max-w-3xl mx-auto text-center">
            <p className="font-heading font-medium text-xl sm:text-2xl text-[#111827] mb-4 leading-snug">
              &ldquo;{story.quote}&rdquo;
            </p>
            <p className="font-heading text-sm text-[#142E56] font-medium">
              — {story.name}, {story.role} · {story.location}
            </p>
          </div>
        </motion.div>

        {/* View Gallery Button */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.3 }}
        >
          <Link href="/gallery" className="btn-primary group text-base shadow-xl">
            <span>View Full Impact Gallery</span>
            <ArrowRightIcon size={16} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>

      </div>
    </section>
  );
}
