"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { staggerContainer, fadeUp, viewportConfig } from "@/lib/animations";

const testimonials = [
  {
    id: 1,
    name: "Chisom Nnamdi",
    role: "Primary 4 Student (Beneficiary)",
    location: "Enugu State",
    quote:
      "I used to feel ashamed going to school because my old shoes had holes and made my feet bleed on hot pavement. When Shoe My Feet gave me new black shoes, I felt so happy and proud. Now I never miss a day of school!",
    image: "/images/story1.jpg",
    rating: 5,
  },
  {
    id: 2,
    name: "Mrs. Grace Okonkwo",
    role: "Primary School Teacher",
    location: "Kaduna State",
    quote:
      "Before the shoe distribution, over 25% of our pupils came to class barefoot or in worn slippers. The difference since Shoe My Feet visited is remarkable — class attendance increased by nearly 30%, and the children's self-esteem has soared.",
    image: "/images/story2.jpg",
    rating: 5,
  },
  {
    id: 3,
    name: "Emeka Eze",
    role: "Parent & Local Artisan",
    location: "Enugu State",
    quote:
      "As a single father struggling to feed three children, buying school shoes was almost impossible. When Shoe My Feet provided shoes for all three of my kids, a huge burden was lifted off my shoulders. God bless this foundation!",
    image: "/images/story3.jpg",
    rating: 5,
  },
  {
    id: 4,
    name: "Amina Yusuf",
    role: "kids Volunteer & Shoemaking Graduate",
    location: "Edo State",
    quote:
      "Volunteering with Shoe My Feet allowed me to complete the child shoemaking program. Now I don't just help fit shoes on children — I actually help make durable school footwear in my local workshop!",
    image: "/images/story4.jpg",
    rating: 5,
  },
];

export default function Testimonials() {
  const [active, setActive] = useState(0);
  const [autoplay, setAutoplay] = useState(true);

  useEffect(() => {
    if (!autoplay) return;
    const timer = setInterval(() => {
      setActive((prev) => (prev + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [autoplay]);

  const current = testimonials[active];

  return (
    <section className="section-padding bg-[#f8fafc] overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <motion.div
          className="text-center max-w-2xl mx-auto mb-14"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
        >
          <motion.span
            variants={fadeUp}
            className="inline-block px-4 py-1.5 rounded-full bg-orange-100 text-[#f97316] text-xs sm:text-sm font-bold font-body mb-3 border border-orange-200"
          >
            Heartfelt Testimonials
          </motion.span>
          <motion.h2
            variants={fadeUp}
            className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0a0a0a] leading-tight"
          >
            Stories That <span className="text-[#f97316]">Touch the Heart</span>
          </motion.h2>
          <motion.p
            variants={fadeUp}
            className="text-slate-600 font-body text-base mt-4 leading-relaxed"
          >
            Hear directly from the children, parents, teachers, and volunteers whose lives have been transformed.
          </motion.p>
        </motion.div>

        {/* Testimonial Card Slider */}
        <div className="max-w-4xl mx-auto" onMouseEnter={() => setAutoplay(false)} onMouseLeave={() => setAutoplay(true)}>
          <AnimatePresence mode="wait">
            <motion.div
              key={current.id}
              initial={{ opacity: 0, x: 50, scale: 0.98 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              exit={{ opacity: 0, x: -50, scale: 0.98 }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="bg-white rounded-3xl p-8 sm:p-14 border border-slate-100 shadow-xl relative overflow-hidden text-center flex flex-col items-center justify-between"
            >
              {/* Large quote icon in background */}
              <div className="absolute -top-4 right-8 text-9xl font-serif text-slate-100 pointer-events-none select-none">
                “
              </div>

              {/* Star Rating */}
              <div className="flex gap-1.5 mb-6 text-[#f59e0b] text-xl">
                {[...Array(current.rating)].map((_, i) => (
                  <span key={i}>★</span>
                ))}
              </div>

              {/* Quote */}
              <blockquote className="font-body text-slate-700 text-lg sm:text-2xl leading-relaxed italic mb-10 max-w-2xl relative z-10">
                &ldquo;{current.quote}&rdquo;
              </blockquote>

              {/* Profile info */}
              <div className="flex items-center gap-4 text-left">
                <div className="relative w-16 h-16 sm:w-20 sm:h-20 rounded-full overflow-hidden border-4 border-[#f97316]/30 shadow-lg shrink-0">
                  <Image
                    src={current.image}
                    alt={current.name}
                    fill
                    className="object-cover"
                    sizes="80px"
                  />
                </div>
                <div>
                  <p className="font-heading font-bold text-xl text-[#0a0a0a]">{current.name}</p>
                  <p className="font-body text-sm font-semibold text-[#f97316]">{current.role}</p>
                  <p className="font-body text-xs text-slate-400">{current.location}</p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Controls */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <button
              onClick={() => setActive((prev) => (prev - 1 + testimonials.length) % testimonials.length)}
              className="w-11 h-11 rounded-full bg-white border border-slate-200 text-black flex items-center justify-center shadow-md hover:bg-black hover:text-white transition-all cursor-pointer"
              aria-label="Previous Testimonial"
            >
              ←
            </button>

            <div className="flex gap-2">
              {testimonials.map((t, idx) => (
                <button
                  key={t.id}
                  onClick={() => setActive(idx)}
                  className={`h-3 rounded-full transition-all duration-300 ${
                    idx === active ? "w-8 bg-[#f97316]" : "w-3 bg-slate-300 hover:bg-slate-400"
                  }`}
                  aria-label={`Go to slide ${idx + 1}`}
                />
              ))}
            </div>

            <button
              onClick={() => setActive((prev) => (prev + 1) % testimonials.length)}
              className="w-11 h-11 rounded-full bg-white border border-slate-200 text-black flex items-center justify-center shadow-md hover:bg-black hover:text-white transition-all cursor-pointer"
              aria-label="Next Testimonial"
            >
              →
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
