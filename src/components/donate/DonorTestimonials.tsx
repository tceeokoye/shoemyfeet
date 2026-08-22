"use client";

import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { fadeUp, staggerContainer, viewportConfig } from "@/lib/animations";
import { ChevronLeftIcon, ChevronRightIcon, QuoteIcon, StarIcon } from "@/components/ui/Icons";

const testimonials = [
  {
    name: "Dr. Ngozi Adeyemi",
    role: "Pediatrician & Philanthropist",
    org: "Lagos Island General Hospital",
    quote: "As a doctor, I know firsthand how barefoot children suffer. Shoe My Feet Foundation is addressing one of the most overlooked health crises affecting Nigerian children. My monthly donation is one of the most meaningful things I do.",
    amount: "Monthly Donor",
    avatar: "👩‍⚕️",
    stars: 5,
  },
  {
    name: "Chidi Okafor",
    role: "Tech Entrepreneur",
    org: "Lagos Startup Hub",
    quote: "I grew up barefoot. I know exactly what it feels like to be turned away from school or to hide your feet in shame. When I found Shoe My Feet Foundation, I knew I had to contribute. This is exactly where giving should go.",
    amount: "Annual Donor",
    avatar: "👨‍💼",
    stars: 5,
  },
  {
    name: "TechForward Nigeria",
    role: "Corporate Partner",
    org: "IT & Technology Company",
    quote: "As part of our CSR initiative, we've partnered with Shoe My Feet Foundation for two years. The transparency, impact reporting, and genuine care for children make them one of our most trusted nonprofit partners.",
    amount: "Gold Partner",
    avatar: "🏢",
    stars: 5,
  },
  {
    name: "Pastor Mrs. Blessing Eze",
    role: "Church Leader",
    org: "Redeemed Christian Church, Enugu",
    quote: "Our congregation organized a shoe donation drive and raised ₦450,000 in one Sunday service. The children we helped were so joyful — their faces lit up like Christmas morning. We will be doing this every quarter now.",
    amount: "Community Drive Organizer",
    avatar: "⛪",
    stars: 5,
  },
  {
    name: "Aisha Bello",
    role: "NGO Program Manager",
    org: "Girls Forward Initiative",
    quote: "We've seen firsthand how shoe insecurity affects girls' attendance and self-esteem. Collaborating with Shoe My Feet Foundation has amplified our reach enormously. They are a model of how Nigerian nonprofits should operate.",
    amount: "Partner Organization",
    avatar: "👩‍💼",
    stars: 5,
  },
];

export default function DonorTestimonials() {
  const [active, setActive] = useState(0);

  const prev = () => setActive((i) => (i - 1 + testimonials.length) % testimonials.length);
  const next = () => setActive((i) => (i + 1) % testimonials.length);

  return (
    <section className="section-padding bg-white relative overflow-hidden" aria-label="Donor testimonials">
      <div className="absolute top-0 left-0 right-0 h-px bg-[#2563eb]" />
      <div className="absolute bottom-0 left-0 w-80 h-80 opacity-5 blur-3xl rounded-full bg-blue-400 pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={viewportConfig} className="text-center mb-14">
          <motion.span variants={fadeUp} className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-teal-100 border border-teal-200 text-teal-700 font-bold text-sm mb-4">
            💬 Donor Voices
          </motion.span>
          <motion.h2 variants={fadeUp} className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1a1a2e] mb-5">
            Hear From Our{" "}
            <span className="text-royal-blue">Generous Donors</span>
          </motion.h2>
          <motion.p variants={fadeUp} className="text-gray-600 font-body text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
            Real voices from the people and organizations who have joined our mission.
          </motion.p>
        </motion.div>

        {/* Testimonial Carousel */}
        <div className="relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              initial={{ opacity: 0, y: 30, scale: 0.97 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -20, scale: 0.97 }}
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              className="bg-[#2563eb] rounded-4xl border border-gray-100 shadow-xl p-8 sm:p-10 relative overflow-hidden"
            >
              {/* Quote mark */}
              <div className="absolute top-6 right-8 opacity-10">
                <QuoteIcon size={64} className="text-royal-blue" />
              </div>

              <div className="flex flex-col sm:flex-row gap-6 items-start sm:items-center mb-6">
                {/* Avatar */}
                <div className="w-20 h-20 rounded-2xl bg-[#2563eb] flex items-center justify-center text-4xl flex-shrink-0 border border-blue-100 shadow-sm">
                  {testimonials[active].avatar}
                </div>
                <div>
                  <h3 className="font-heading font-bold text-xl text-[#1a1a2e]">{testimonials[active].name}</h3>
                  <p className="text-sm text-gray-500 font-body">{testimonials[active].role}</p>
                  <p className="text-xs text-royal-blue font-body font-semibold">{testimonials[active].org}</p>
                  <div className="flex gap-0.5 mt-1">
                    {Array.from({ length: testimonials[active].stars }).map((_, i) => (
                      <StarIcon key={i} size={14} className="text-amber-400 fill-amber-400" />
                    ))}
                  </div>
                </div>
                <div className="sm:ml-auto">
                  <span className="px-3 py-1.5 rounded-full bg-orange-100 border border-orange-200 text-warm-orange-dark text-xs font-bold font-body">
                    {testimonials[active].amount}
                  </span>
                </div>
              </div>

              <blockquote className="text-gray-700 font-body text-base sm:text-lg leading-relaxed italic relative z-10">
                &ldquo;{testimonials[active].quote}&rdquo;
              </blockquote>
            </motion.div>
          </AnimatePresence>

          {/* Navigation */}
          <div className="flex items-center justify-between mt-6">
            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActive(i)}
                  className={`rounded-full transition-all cursor-pointer ${i === active ? "w-8 h-2.5 bg-warm-orange" : "w-2.5 h-2.5 bg-gray-200 hover:bg-gray-300"}`}
                  aria-label={`Go to testimonial ${i + 1}`}
                />
              ))}
            </div>
            <div className="flex gap-2">
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={prev}
                className="w-10 h-10 rounded-full border-2 border-gray-200 flex items-center justify-center text-gray-500 hover:border-royal-blue hover:text-royal-blue transition-all cursor-pointer"
              >
                <ChevronLeftIcon size={18} />
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={next}
                className="w-10 h-10 rounded-full bg-royal-blue text-white flex items-center justify-center hover:bg-royal-blue-dark transition-all shadow-md cursor-pointer"
              >
                <ChevronRightIcon size={18} />
              </motion.button>
            </div>
          </div>
        </div>

        {/* Grid of mini-testimonials below */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          className="grid grid-cols-2 sm:grid-cols-5 gap-4 mt-10"
        >
          {testimonials.map((t, i) => (
            <motion.button
              key={i}
              variants={fadeUp}
              whileHover={{ y: -3, scale: 1.05 }}
              onClick={() => setActive(i)}
              className={`p-3 rounded-2xl border text-center cursor-pointer transition-all ${
                i === active
                  ? "border-royal-blue bg-blue-50 shadow-md"
                  : "border-gray-100 bg-gray-50 hover:border-gray-200"
              }`}
            >
              <span className="text-2xl">{t.avatar}</span>
              <div className="text-[10px] font-bold text-gray-600 mt-1 font-body leading-tight">{t.name.split(" ")[0]}</div>
            </motion.button>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
