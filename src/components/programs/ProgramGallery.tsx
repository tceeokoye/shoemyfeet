"use client";

import { motion } from "framer-motion";
import Image from "@/components/ui/RealImage";
import { staggerContainer, fadeUp, viewportConfig } from "@/lib/animations";
import { SparklesIcon, MapPinIcon } from "@/components/ui/Icons";

const galleryImages = [
  { src: "/images/gallery1.jpg", alt: "Shoe distribution in Enugu community", caption: "Enugu Distribution Day", span: "col-span-2 row-span-2" },
  { src: "/images/gallery2.jpg", alt: "Girl walking confidently in new shoes", caption: "Walking With Pride" },
  { src: "/images/gallery3.jpg", alt: "kids shoemaking workshop", caption: "Shoemaking Workshop" },
  { src: "/images/gallery4.jpg", alt: "Volunteers at community outreach", caption: "Volunteer Outreach" },
  { src: "/images/gallery5.jpg", alt: "Happy children with new shoes", caption: "Smiles of Dignity" },
  { src: "/images/gallery6.jpg", alt: "Boy with first pair of shoes", caption: "First Pair, First Smile" },
];

const itemVariants = {
  hidden: (i: number) => ({
    opacity: 0,
    x: i === 0 ? -80 : i < 3 ? 80 : 0,
    y: i >= 3 ? 80 : 0,
  }),
  visible: (i: number) => ({
    opacity: 1,
    x: 0,
    y: 0,
    transition: {
      type: "spring" as const,
      stiffness: 65,
      damping: 15,
      delay: i * 0.12,
    },
  }),
};

export default function ProgramGallery() {
  return (
    <section className="section-padding bg-white overflow-hidden">
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
            className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-orange-100 text-[#1A3A6B] text-xs sm:text-sm font-bold border border-slate-200 mb-4"
          >
            <SparklesIcon size={13} className="text-[#1A3A6B]" />
            Program Gallery
          </motion.span>
          <motion.h2
            variants={fadeUp}
            className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-[#111827] mb-4 leading-tight"
          >
            Moments of <span className="text-[#1A3A6B]">Transformation</span>
          </motion.h2>
          <motion.p
            variants={fadeUp}
            className="text-base sm:text-lg text-gray-600 font-body leading-relaxed"
          >
            Every photo captures a real moment — a child receiving shoes, a volunteer&apos;s smile,
            a community uplifted by generosity and love.
          </motion.p>
        </motion.div>

        {/* Gallery Grid */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          className="grid grid-cols-3 gap-3 auto-rows-[220px]"
        >
          {galleryImages.map((img, i) => (
            <motion.div
              key={img.src}
              custom={i}
              variants={itemVariants}
              className={`relative overflow-hidden  group will-change-transform ${i === 0 ? "col-span-2 row-span-2" : ""}`}
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                sizes={i === 0 ? "(max-width: 768px) 100vw, 60vw" : "(max-width: 768px) 50vw, 25vw"}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
              {i === 0 && (
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1.5 rounded-full bg-[#1A3A6B] text-white text-xs font-heading font-bold shadow-lg flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
                    FEATURED
                  </span>
                </div>
              )}
              <div className="absolute bottom-0 left-0 right-0 p-3.5">
                <p className={`font-heading font-bold text-white drop-shadow-md ${i === 0 ? "text-xl sm:text-2xl" : "text-xs"}`}>
                  {img.caption}
                </p>
                {i === 0 && (
                  <div className="flex items-center gap-1 mt-1">
                    <MapPinIcon size={12} className="text-orange-300" />
                    <p className="text-orange-200 text-xs font-body">Nigeria</p>
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
