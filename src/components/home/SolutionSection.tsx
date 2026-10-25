"use client";

import { motion, useReducedMotion } from "framer-motion";
import Link from "next/link";
import ScrollOverBg from "@/components/ui/scrollOverBg";

export default function SolutionSection() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <ScrollOverBg
      backgroundImage="/images/shoe_distribution.jpg"
      minHeight="min-h-[520px]"
      className="px-4 sm:px-6 lg:px-8"
    >
      <div className="mx-auto flex max-w-3xl flex-col items-center gap-6 text-center">
        <motion.h2
          className="font-heading text-3xl font-semibold leading-tight text-[#F97316] sm:text-4xl"
          initial={shouldReduceMotion ? false : { opacity: 0, y: 56 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          The Solution
        </motion.h2>

        <motion.p
          className="max-w-2xl text-base leading-relaxed text-white/90 sm:text-lg"
          initial={shouldReduceMotion ? false : { opacity: 0, x: -64 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.9, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}
        >
          We provide school shoes to children who need them, helping protect
          their feet and making it easier to attend school with comfort and
          confidence.
        </motion.p>

        <motion.div
          className="mt-2"
          initial={shouldReduceMotion ? false : { opacity: 0, y: 36 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.75, delay: 0.28, ease: [0.22, 1, 0.36, 1] }}
        >
          <Link
            href="/about/how-we-work#solution"
            className="inline-flex items-center gap-2 text-base font-semibold text-white underline decoration-1 underline-offset-4 transition-colors hover:text-[#F97316]"
          >
            Learn about our solution <span aria-hidden="true">→</span>
          </Link>
        </motion.div>
      </div>
    </ScrollOverBg>
  );
}
