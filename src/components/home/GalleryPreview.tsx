"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import FastImage from "@/components/ui/FastImage";
import { MapPinIcon, ArrowRightIcon, SparklesIcon } from "@/components/ui/Icons";
import { fadeUp, staggerContainer, viewportConfig } from "@/lib/animations";
import { STORIES } from "@/lib/constants";

const galleryData = [
  { id: "g1", src: "/images/gallery1.webp", alt: "Children receiving shoes in Enugu", caption: "Enugu Distribution Day", location: "Enugu State", tag: "Outreach" },
  { id: "g2", src: "/images/gallery2.webp", alt: "Girl walking to school", caption: "Walking With Pride", location: "Kaduna State", tag: "Impact" },
  { id: "g3", src: "/images/gallery3.webp", alt: "Kids learning shoemaking", caption: "Child Shoemaking Workshop", location: "Edo State", tag: "Empowerment" },
  { id: "g4", src: "/images/gallery4.webp", alt: "Volunteers at school", caption: "Community Volunteers", location: "Benin City", tag: "Volunteers" },
  { id: "g5", src: "/images/gallery5.webp", alt: "Children with new shoes", caption: "Smiles of Dignity", location: "Enugu State", tag: "Joy" },
  { id: "g6", src: "/images/gallery6.webp", alt: "Boy with his first pair", caption: "First Pair of School Shoes", location: "Kaduna State", tag: "New Beginning" },
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
    <section className="section-padding bg-[#f8fafc] overflow-hidden">
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
            <div className="h-px w-10 bg-[#f97316]" />
            <span className="text-xs font-bold text-[#f97316] uppercase tracking-widest font-heading flex items-center gap-1.5">
              <SparklesIcon size={14} className="text-[#f97316]" />
              Impact Photo Gallery
            </span>
            <div className="h-px w-10 bg-[#f97316]" />
          </motion.div>

          <motion.h2
            variants={fadeUp}
            className="font-heading font-bold text-3xl sm:text-4xl lg:text-5xl text-[#0b1933] mb-4 tracking-tight"
          >
            Hope &amp; Dignity{" "}
            <span className="text-[#f97316]">In Pictures</span>
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
            const featured = i === 0;
            return (
              <motion.div
                key={item.id}
                custom={i}
                variants={itemVariants}
                style={{ gridArea: AREA_NAMES[i] }}
                className={`relative overflow-hidden group card-3d cursor-pointer ${
                  featured ? "rounded-3xl border-2 border-[#f97316]" : "rounded-2xl border-2 border-white"
                }`}
              >
                <FastImage
                  src={item.src}
                  alt={item.alt}
                  fill
                  priority={featured}
                  className="object-cover group-hover:scale-108 transition-transform duration-700 ease-out"
                  sizes={featured ? "45vw" : "22vw"}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent z-10" />

                {featured && (
                  <div className="absolute top-4 left-4 right-4 flex items-center justify-between z-20">
                    <span className="px-3.5 py-1.5 rounded-full bg-[#f97316] text-white text-xs font-heading font-bold shadow-lg flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
                      FEATURED OUTREACH
                    </span>
                    <span className="flex items-center gap-1 bg-black/40 backdrop-blur-md px-3 py-1.5 rounded-full text-white text-xs font-body border border-white/30">
                      <MapPinIcon size={12} className="text-orange-400" />
                      {item.location}
                    </span>
                  </div>
                )}

                <div className="absolute bottom-0 left-0 right-0 p-4 z-20">
                  <h3 className={`font-heading font-bold text-white leading-snug drop-shadow-md ${featured ? "text-xl sm:text-2xl" : "text-sm line-clamp-1"}`}>
                    {item.caption}
                  </h3>
                  {!featured && (
                    <p className="text-orange-300 text-xs font-body mt-0.5 font-semibold">
                      {item.location}
                    </p>
                  )}
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Mobile grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10 md:hidden">
          {galleryData.map((item) => (
            <div key={item.id} className="relative h-60 rounded-2xl overflow-hidden shadow-lg border border-slate-200">
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
          className="bg-[#0f2347] rounded-3xl p-8 sm:p-10 mb-8 relative overflow-hidden card-3d-dark border border-white/15 text-white"
        >
          <div className="absolute top-4 right-6 text-8xl font-heading text-white/10 leading-none select-none">❝</div>
          <div className="relative z-10 max-w-3xl mx-auto text-center">
            <p className="font-heading font-bold text-xl sm:text-2xl text-white mb-4 leading-snug">
              "{story.quote}"
            </p>
            <p className="font-heading text-sm text-amber-300 font-bold">
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
          <Link href="/gallery" className="btn-orange group text-base shadow-xl">
            <span>View Full Impact Gallery</span>
            <ArrowRightIcon size={16} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>

      </div>
    </section>
  );
}
