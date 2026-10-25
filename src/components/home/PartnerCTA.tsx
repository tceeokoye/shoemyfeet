"use client";

import { motion, useReducedMotion } from "framer-motion";
import DonationOptions from "@/components/donate/DonationOptions";

export default function PartnerCTA() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section
      aria-labelledby="partner-heading"
      className="bg-white px-4 py-16 text-center sm:px-6 sm:py-20 lg:px-8"
    >
      <div className="mx-auto max-w-3xl">
        <motion.h2
          id="partner-heading"
          className="mx-auto max-w-3xl font-heading text-3xl font-extrabold uppercase leading-tight text-[#1A3A6B] sm:text-4xl lg:text-5xl"
          initial={shouldReduceMotion ? false : { opacity: 0, x: -64 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
        >
          Become a Partner of Change Today
        </motion.h2>
        <motion.p
          className="mt-7 text-base leading-relaxed text-[#F97316] sm:text-lg"
          initial={shouldReduceMotion ? false : { opacity: 0, x: -64 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{
            duration: 0.9,
            delay: 0.12,
            ease: [0.22, 1, 0.36, 1],
          }}
        >
          Give a child the comfort, confidence, and support to take their next
          step.
        </motion.p>
        <motion.div
          className="mx-auto mt-7 max-w-110 text-left"
          initial={shouldReduceMotion ? false : { opacity: 0, y: 56 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{
            duration: 0.85,
            delay: 0.24,
            ease: [0.22, 1, 0.36, 1],
          }}
        >
          <DonationOptions embedded />
        </motion.div>
      </div>
    </section>
  );
}
