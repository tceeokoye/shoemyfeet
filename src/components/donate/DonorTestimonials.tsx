"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { fadeUp, staggerContainer, viewportConfig } from "@/lib/animations";

const testimonials = [
  {
    name: "Dr. Ngozi Adeyemi",
    role: "Pediatrician & Philanthropist",
    org: "Lagos Island General Hospital",
    quote: "As a doctor, I know firsthand how barefoot children suffer. Shoe My Feet Foundation is addressing one of the most overlooked health crises affecting Nigerian children. My monthly donation is one of the most meaningful things I do.",
    amount: "Monthly Donor",
  },
  {
    name: "Chidi Okafor",
    role: "Tech Entrepreneur",
    org: "Lagos Startup Hub",
    quote: "I grew up barefoot. I know exactly what it feels like to be turned away from school or to hide your feet in shame. When I found Shoe My Feet Foundation, I knew I had to contribute. This is exactly where giving should go.",
    amount: "Annual Donor",
  },
  {
    name: "TechForward Nigeria",
    role: "Corporate Partner",
    org: "IT & Technology Company",
    quote: "As part of our CSR initiative, we've partnered with Shoe My Feet Foundation for two years. The transparency, impact reporting, and genuine care for children make them one of our most trusted nonprofit partners.",
    amount: "Gold Partner",
  },
  {
    name: "Pastor Mrs. Blessing Eze",
    role: "Church Leader",
    org: "Redeemed Christian Church, Enugu",
    quote: "Our congregation organized a shoe donation drive and raised ₦450,000 in one Sunday service. The children we helped were so joyful — their faces lit up like Christmas morning. We will be doing this every quarter now.",
    amount: "Community Drive Organizer",
  },
  {
    name: "Aisha Bello",
    role: "NGO Program Manager",
    org: "Girls Forward Initiative",
    quote: "We've seen firsthand how shoe insecurity affects girls' attendance and self-esteem. Collaborating with Shoe My Feet Foundation has amplified our reach enormously. They are a model of how Nigerian nonprofits should operate.",
    amount: "Partner Organization",
  },
];

export default function DonorTestimonials() {
  const [active, setActive] = useState(0);

  const prev = () => setActive((i) => (i - 1 + testimonials.length) % testimonials.length);
  const next = () => setActive((i) => (i + 1) % testimonials.length);

  return (
    <section className="section-padding bg-white" aria-label="Donor testimonials">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={viewportConfig} className="text-center mb-14">
          <motion.span variants={fadeUp} className="text-sm font-semibold uppercase tracking-wide text-[#142E56] mb-4">
            Donor Voices
          </motion.span>
          <motion.h2 variants={fadeUp} className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-[#111827] mb-5">
            Hear From Our{" "}
            <span className="text-[#1A3A6B]">Generous Donors</span>
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
              className="rounded-xl bg-white p-8 shadow-md sm:p-10"
            >
              <div className="flex flex-col sm:flex-row gap-6 items-start sm:items-center mb-6">
                <div>
                  <h3 className="font-heading font-bold text-xl text-[#111827]">{testimonials[active].name}</h3>
                  <p className="text-sm text-gray-500 font-body">{testimonials[active].role}</p>
                  <p className="text-xs text-[#1A3A6B] font-body font-semibold">{testimonials[active].org}</p>
                </div>
                <div className="sm:ml-auto">
                  <span className="text-xs font-bold font-body text-[#142E56]">
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
            <div className="flex gap-3">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActive(i)}
                  className={`text-sm cursor-pointer ${i === active ? "font-bold text-[#1A3A6B]" : "text-gray-500 hover:text-[#1A3A6B]"}`}
                  aria-label={`Go to testimonial ${i + 1}`}
                >
                  {i + 1}
                </button>
              ))}
            </div>
            <div className="flex gap-2">
              <button
                onClick={prev}
                className="rounded-md bg-white px-4 py-2 text-sm font-semibold text-gray-600 shadow-sm hover:shadow-md cursor-pointer"
              >
                Previous
              </button>
              <button
                onClick={next}
                className="rounded-md bg-white px-4 py-2 text-sm font-semibold text-gray-600 shadow-sm hover:shadow-md cursor-pointer"
              >
                Next
              </button>
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
              onClick={() => setActive(i)}
              className={`rounded-lg bg-white p-3 text-center shadow-sm cursor-pointer transition-all ${
                i === active
                  ? "shadow-md"
                  : "hover:shadow-md"
              }`}
            >
              <span className="text-[10px] font-bold text-gray-600 font-body leading-tight">{t.name.split(" ")[0]}</span>
            </motion.button>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
