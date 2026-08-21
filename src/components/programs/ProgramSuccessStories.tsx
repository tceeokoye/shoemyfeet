"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { staggerContainer, fadeUp, viewportConfig } from "@/lib/animations";
import { ArrowRightIcon, MapPinIcon } from "@/components/ui/Icons";

const stories = [
  {
    id: 1,
    name: "Chisom N.",
    community: "Enugu State",
    role: "Primary 4 Student",
    image: "/images/story1.jpg",
    quote: "I used to hide my feet in class because my shoes had big holes. Now I walk in front proudly. My teacher says I'm the first to raise my hand!",
    program: "Shoe Distribution Initiative",
    tagColor: "bg-blue-100 text-royal-blue",
  },
  {
    id: 2,
    name: "Mrs. Grace O.",
    community: "Kaduna State",
    role: "Primary School Teacher",
    image: "/images/story2.jpg",
    quote: "Class attendance jumped by nearly 30% after Shoe My Feet visited our school. The children are more focused, confident, and eager to learn.",
    program: "School Partnership Program",
    tagColor: "bg-purple-100 text-purple-700",
  },
  {
    id: 3,
    name: "Emeka E.",
    community: "Enugu State",
    role: "Single Father",
    image: "/images/story3.jpg",
    quote: "Buying shoes for all three of my children was impossible on my earnings. When Shoe My Feet helped, a burden was lifted I'd carried for years.",
    program: "Community Outreach",
    tagColor: "bg-orange-100 text-orange-700",
  },
  {
    id: 4,
    name: "Amina Y.",
    community: "Edo State",
    role: "Volunteer & Shoemaking Graduate",
    image: "/images/story4.jpg",
    quote: "The volunteer program changed my life. I completed shoemaking training and now I help make the very shoes we distribute to children!",
    program: "Volunteer Outreach Program",
    tagColor: "bg-emerald-100 text-emerald-700",
  },
];

export default function ProgramSuccessStories() {
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <section className="section-padding bg-[#f8fafc] overflow-hidden">
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
            Success Stories
          </motion.span>
          <motion.h2
            variants={fadeUp}
            className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1a1a2e] mb-4 leading-tight"
          >
            Stories That <span className="text-warm-orange">Change Everything</span>
          </motion.h2>
          <motion.p
            variants={fadeUp}
            className="text-base sm:text-lg text-gray-600 font-body leading-relaxed"
          >
            Real people. Real transformations. Hear from those whose lives changed because of a pair of shoes.
          </motion.p>
        </motion.div>

        {/* Story Cards */}
        <motion.div
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
        >
          {stories.map((story) => (
            <motion.div
              key={story.id}
              variants={fadeUp}
              onHoverStart={() => setHovered(story.id)}
              onHoverEnd={() => setHovered(null)}
              whileHover={{ y: -10, transition: { type: "spring" as const, stiffness: 300, damping: 22 } }}
              className="group bg-white rounded-3xl overflow-hidden border border-gray-100 shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer"
            >
              {/* Image */}
              <div className="relative h-56 overflow-hidden">
                <Image
                  src={story.image}
                  alt={story.name}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-700"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                />
                <div className="absolute inset-0 bg-[#1a3a6b]" />
                <div className="absolute bottom-3 left-3">
                  <span className={`text-xs font-bold px-2.5 py-1 rounded-full ${story.tagColor} font-body`}>
                    {story.program}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-5">
                {/* Quote mark */}
                <div className="text-5xl text-warm-orange/20 font-serif leading-none mb-1">&ldquo;</div>
                <p className="font-body text-gray-700 text-sm leading-relaxed italic mb-4 line-clamp-3">
                  {story.quote}
                </p>
                <div className="flex items-center gap-2 pt-3 border-t border-gray-100">
                  <div>
                    <p className="font-heading font-bold text-[#1a1a2e] text-sm">{story.name}</p>
                    <p className="font-body text-xs  text-warm-orange-dark font-semibold">{story.role}</p>
                    <div className="flex items-center gap-1 mt-0.5">
                      <MapPinIcon size={10} className="text-gray-400" />
                      <p className="font-body text-xs text-gray-400">{story.community}</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Hover glow */}
              <AnimatePresence>
                {hovered === story.id && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="absolute inset-0 rounded-3xl border-2 border-[#f97316]/30 pointer-events-none"
                  />
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
        >
          <Link href="/about" className="btn-primary group inline-flex items-center gap-2 text-base">
            <span>Read More Stories</span>
            <ArrowRightIcon size={16} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
