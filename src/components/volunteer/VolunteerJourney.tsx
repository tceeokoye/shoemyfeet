"use client";

import { motion } from "framer-motion";
import { VOLUNTEER_JOURNEY_STEPS } from "@/lib/volunteerData";
import { staggerContainer, fadeUp, viewportConfig } from "@/lib/animations";

export default function VolunteerJourney() {
  return (
    <section id="volunteer-journey" className="section-padding bg-[#09090b] overflow-hidden">
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
            className="inline-block px-4 py-1.5 rounded-full bg-emerald-100 text-emerald-700 text-xs sm:text-sm font-bold border border-emerald-200 mb-4"
          >
            Your Volunteer Journey
          </motion.span>
          <motion.h2
            variants={fadeUp}
            className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1a1a2e] mb-4 leading-tight"
          >
            From <span className="text-[#f97316]">Sign-Up</span> to{" "}
            <span className="text-warm-orange">Impact</span>
          </motion.h2>
          <motion.p
            variants={fadeUp}
            className="text-base sm:text-lg text-gray-600 font-body leading-relaxed"
          >
            We've designed a simple, welcoming process so you can go from interested newcomer to empowered changemaker in just a few steps.
          </motion.p>
        </motion.div>

        {/* Desktop: Horizontal Timeline */}
        <div className="hidden lg:block relative">
          {/* Connecting animated line */}
          <div className="absolute top-12 left-0 right-0 h-0.5 bg-[#09090b] mx-24" />
          <motion.div
            className="absolute top-12 left-24 right-24 h-0.5 bg-[#f97316] origin-left"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 1.8, ease: [0.22, 1, 0.36, 1], delay: 0.4 }}
          />

          <div className="grid grid-cols-6 gap-4 relative z-10">
            {VOLUNTEER_JOURNEY_STEPS.map((step, index) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.55, delay: index * 0.12, ease: [0.16, 1, 0.3, 1] }}
                className="flex flex-col items-center text-center group"
              >
                {/* Step circle */}
                <motion.div
                  whileHover={{ scale: 1.15, rotate: 5 }}
                  transition={{ type: "spring", stiffness: 300, damping: 15 }}
                  className={`relative w-24 h-24 rounded-full step.color flex items-center justify-center text-3xl shadow-xl mb-5 cursor-default`}
                >
                  <span className="z-10">{step.icon}</span>
                  {/* Ring animation */}
                  <motion.div
                    className={`absolute inset-0 rounded-full step.color opacity-30`}
                    animate={{ scale: [1, 1.3, 1], opacity: [0.3, 0, 0.3] }}
                    transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: index * 0.4 }}
                  />
                  {/* Step number badge */}
                  <div className="absolute -top-1 -right-1 w-7 h-7 rounded-full bg-white border-2 border-gray-200 flex items-center justify-center text-xs font-extrabold text-[#1a1a2e] shadow-sm">
                    {step.step}
                  </div>
                </motion.div>

                <h3 className="font-heading text-base font-bold text-[#1a1a2e] mb-2 leading-snug group-hover:text-warm-orange-dark transition-colors duration-300">
                  {step.title}
                </h3>
                <p className="font-body text-gray-500 text-xs leading-relaxed">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Mobile: Vertical Timeline */}
        <div className="lg:hidden relative">
          {/* Vertical line */}
          <div className="absolute left-7 top-0 bottom-0 w-0.5 bg-[#f97316]" />

          <div className="space-y-10 relative z-10">
            {VOLUNTEER_JOURNEY_STEPS.map((step, index) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
                className="flex items-start gap-5"
              >
                {/* Step circle */}
                <div className={`relative shrink-0 w-14 h-14 rounded-full step.color flex items-center justify-center text-2xl shadow-lg`}>
                  <span>{step.icon}</span>
                  <div className="absolute -top-1 -right-1 w-5 h-5 rounded-full bg-white border-2 border-gray-200 flex items-center justify-center text-[10px] font-extrabold text-[#1a1a2e]">
                    {step.step}
                  </div>
                </div>

                {/* Text */}
                <div className="pt-2">
                  <h3 className="font-heading text-lg font-bold text-[#1a1a2e] mb-1">{step.title}</h3>
                  <p className="font-body text-gray-500 text-sm leading-relaxed">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <a
            href="#volunteer-form"
            className="btn-orange text-base sm:text-lg px-8 py-4 rounded-full shadow-xl hover:scale-105 transition-all duration-300 inline-flex items-center gap-2"
          >
            Start Your Journey Today →
          </a>
        </motion.div>
      </div>
    </section>
  );
}
