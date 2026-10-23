"use client";

import { useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "@/components/ui/RealImage";
import { staggerContainer, fadeUp, viewportConfig } from "@/lib/animations";
import { CloseIcon, ZoomInIcon } from "@/components/ui/Icons";

const galleryItems = [
  {
    src: "/images/distribution.jpg",
    alt: "Children receiving new school shoes at a distribution event",
    caption: "Shoe Distribution Day",
    category: "Distribution",
    span: "col-span-1 row-span-2",
  },
  {
    src: "/images/community.jpg",
    alt: "Community outreach event with volunteers and families",
    caption: "Community Outreach",
    category: "Community",
    span: "col-span-1 row-span-1",
  },
  {
    src: "/images/shoemaking.jpg",
    alt: "kids learning shoemaking skills at a workshop",
    caption: "Child Shoemaking Training",
    category: "Empowerment",
    span: "col-span-1 row-span-1",
  },
  {
    src: "/images/volunteers.jpg",
    alt: "Dedicated volunteers preparing shoe donations for distribution",
    caption: "Volunteers in Action",
    category: "Volunteers",
    span: "col-span-1 row-span-1",
  },
  {
    src: "/images/gallery1.jpg",
    alt: "Group celebration after a successful shoe distribution",
    caption: "Community Celebration",
    category: "Community",
    span: "col-span-1 row-span-1",
  },
  {
    src: "/images/gallery2.jpg",
    alt: "Children proudly showing their new shoes",
    caption: "Happy Children",
    category: "Distribution",
    span: "col-span-1 row-span-2",
  },
  {
    src: "/images/gallery3.jpg",
    alt: "School visit and outreach event",
    caption: "School Visit",
    category: "Schools",
    span: "col-span-1 row-span-1",
  },
  {
    src: "/images/gallery4.jpg",
    alt: "Families benefiting from the Shoe My Feet initiative",
    caption: "Families Benefiting",
    category: "Community",
    span: "col-span-1 row-span-1",
  },
  {
    src: "/images/gallery5.jpg",
    alt: "Foundation team at a major outreach event",
    caption: "Team at Outreach",
    category: "Volunteers",
    span: "col-span-1 row-span-1",
  },
  {
    src: "/images/gallery6.jpg",
    alt: "Children walking to school in their new shoes",
    caption: "Walking to School",
    category: "Distribution",
    span: "col-span-1 row-span-1",
  },
  {
    src: "/images/hero.jpg",
    alt: "Happy children with shoes in their community",
    caption: "Spreading Joy",
    category: "Community",
    span: "col-span-1 row-span-1",
  },
  {
    src: "/images/children_walking_school.jpg",
    alt: "Children confidently walking to school together",
    caption: "Confident Steps Forward",
    category: "Schools",
    span: "col-span-1 row-span-1",
  },
];

const categories = ["All", "Distribution", "Community", "Schools", "Volunteers", "Empowerment"];

export default function ImpactGallery() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [lightboxSrc, setLightboxSrc] = useState<string | null>(null);
  const [lightboxAlt, setLightboxAlt] = useState("");

  const filtered = activeCategory === "All" ? galleryItems : galleryItems.filter((g) => g.category === activeCategory);

  const openLightbox = useCallback((src: string, alt: string) => {
    setLightboxSrc(src);
    setLightboxAlt(alt);
  }, []);

  const closeLightbox = useCallback(() => {
    setLightboxSrc(null);
  }, []);

  return (
    <section className="section-padding bg-[#f8fafc] overflow-hidden">
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
            className="inline-block px-4 py-1.5 rounded-full bg-purple-100 text-purple-700 text-xs sm:text-sm font-bold border border-purple-200 mb-4"
          >
            Impact Gallery
          </motion.span>
          <motion.h2
            variants={fadeUp}
            className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-[#111827] mb-4 leading-tight"
          >
            Moments That{" "}
            <span className="text-[#1A3A6B]">Define Our Mission</span>
          </motion.h2>
          <motion.p
            variants={fadeUp}
            className="text-base sm:text-lg text-gray-600 font-body leading-relaxed"
          >
            A visual journey through our work across Nigeria — celebrating children, communities, and every meaningful step forward.
          </motion.p>
        </motion.div>

        {/* Category filters */}
        <motion.div
          className="flex flex-wrap gap-2 justify-center mb-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-full text-sm font-bold font-body transition-all duration-300 cursor-pointer ${
                activeCategory === cat
                  ? "bg-[#111827] text-white shadow-lg"
                  : "bg-white text-gray-600 border border-gray-200 hover:border-slate-200 hover:text-[#1A3A6B]"
              }`}
            >
              {cat}
            </button>
          ))}
        </motion.div>

        {/* Gallery Grid */}
        <motion.div
          className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4 auto-rows-[180px] sm:auto-rows-[200px]"
          layout
        >
          <AnimatePresence mode="popLayout">
            {filtered.map((item, index) => (
              <motion.div
                key={item.src}
                layout
                initial={{ opacity: 0, scale: 0.85 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.85 }}
                transition={{ duration: 0.4, delay: index * 0.04, ease: [0.22, 1, 0.36, 1] }}
                className="relative group  overflow-hidden cursor-pointer shadow-md hover:shadow-xl transition-shadow duration-500 bg-gray-100"
                onClick={() => openLightbox(item.src, item.alt)}
              >
                <Image
                  src={item.src}
                  alt={item.alt}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-700"
                  sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                />
                {/* Overlay */}
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                {/* Category badge */}
                <div className="absolute top-2 left-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-white/90 text-gray-700 font-body">
                    {item.category}
                  </span>
                </div>

                {/* Caption + zoom */}
                <div className="absolute bottom-0 left-0 right-0 p-3 translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                  <div className="flex items-end justify-between">
                    <p className="text-white text-xs font-bold font-body leading-tight">{item.caption}</p>
                    <div className="w-7 h-7 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center border border-white/30 flex-shrink-0">
                      <ZoomInIcon size={12} className="text-white" />
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {lightboxSrc && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-md p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={closeLightbox}
          >
            <motion.div
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-5xl w-full max-h-[85vh] rounded-2xl overflow-hidden shadow-2xl"
              initial={{ opacity: 0, scale: 0.85, y: 40 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              transition={{ type: "spring", stiffness: 140, damping: 18 }}
            >
              <div className="relative aspect-[4/3] sm:aspect-[16/9]">
                <Image src={lightboxSrc} alt={lightboxAlt} fill className="object-contain bg-black" />
              </div>
              <button
                onClick={closeLightbox}
                className="absolute top-3 right-3 w-10 h-10 rounded-full bg-white/20 backdrop-blur-md border border-white/30 flex items-center justify-center text-white hover:bg-white/30 transition-colors cursor-pointer"
                aria-label="Close lightbox"
              >
                <CloseIcon size={18} />
              </button>
              <div className="absolute bottom-0 left-0 right-0 p-4 bg-[#111827]">
                <p className="text-white text-sm font-body">{lightboxAlt}</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
