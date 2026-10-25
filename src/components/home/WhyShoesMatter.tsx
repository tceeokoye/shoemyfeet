"use client";

import { motion, useReducedMotion } from "framer-motion";
import Link from "next/link";
import TitleSplashBackground from "@/components/ui/TitleSplashBackground";

export default function WhyShoesMatter() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section className="overflow-hidden bg-white px-4 py-16 text-center text-[#454545] sm:px-6 sm:py-20 lg:px-8">
      <div className="mx-auto max-w-4xl">
        <motion.h2
          className="relative mx-auto mb-8 flex h-[120px] w-full max-w-[704px] items-center justify-center font-heading text-xl font-bold uppercase leading-tight text-white sm:mb-10 sm:h-[140px] sm:text-[21px]"
          initial={shouldReduceMotion ? false : { opacity: 0, y: 56 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <TitleSplashBackground variant={3} />
          <span className="relative z-10">The Challenge</span>
        </motion.h2>

        <motion.p
          className="mx-auto max-w-4xl text-base leading-relaxed sm:text-lg"
          initial={shouldReduceMotion ? false : { opacity: 0, x: -64 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.12 }}
        >
          Too many children walk to school without proper footwear. Bare feet
          leave them vulnerable to injury and infection, while the lack of
          school shoes can keep them from learning with confidence.{" "}
          <motion.span
            className="inline-block font-semibold text-[#1A3A6B]"
            initial={shouldReduceMotion ? false : { opacity: 0, x: 64 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{
              duration: 0.9,
              ease: [0.22, 1, 0.36, 1],
              delay: 0.28,
            }}
          >
            Every child deserves to learn, grow, and feel protected.
          </motion.span>
        </motion.p>

        <motion.div
          className="mt-7 flex flex-col items-center gap-7"
          initial={shouldReduceMotion ? false : { opacity: 0, y: 36 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1], delay: 0.38 }}
        >
          <Link
            href="/about"
            className="text-base text-[#1A3A6B] underline decoration-1 underline-offset-2 hover:text-[#142E56]"
          >
            Learn More About Us &gt;
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
