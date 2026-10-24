"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Heart } from "lucide-react";
import { fadeUp, viewportConfig } from "@/lib/animations";
import TitleSplashBackground from "@/components/ui/TitleSplashBackground";

export default function WhyShoesMatter() {
  return (
    <section className="overflow-hidden bg-white px-4 py-16 text-center text-[#454545] sm:px-6 sm:py-20 lg:px-8">
      <motion.div
        className="mx-auto max-w-4xl"
        initial="hidden"
        whileInView="visible"
        viewport={viewportConfig}
        variants={{
          hidden: {},
          visible: { transition: { staggerChildren: 0.12 } },
        }}
      >
        <motion.h2
          variants={fadeUp}
          className="relative mx-auto mb-8 flex h-[120px] w-full max-w-[704px] items-center justify-center font-heading text-xl font-bold uppercase leading-tight text-white sm:mb-10 sm:h-[140px] sm:text-[21px]"
        >
          <TitleSplashBackground variant={3} />
          <span className="relative z-10">The Challenge</span>
        </motion.h2>

        <motion.p
          variants={fadeUp}
          className="mx-auto max-w-4xl text-base leading-relaxed sm:text-lg"
        >
          Too many children walk to school without proper footwear. Bare feet
          leave them vulnerable to injury and infection, while the lack of
          school shoes can keep them from learning with confidence.{" "}
          <span className="font-semibold text-[#1A3A6B]">
            Every child deserves to learn, grow, and feel protected.
          </span>
        </motion.p>

        <motion.div
          variants={fadeUp}
          className="mt-7 flex flex-col items-center gap-7"
        >
          <Link
            href="/about/mission"
            className="text-base text-[#1A3A6B] underline decoration-1 underline-offset-2 hover:text-[#142E56]"
          >
            Learn More About Us &gt;
          </Link>
          <Link
            href="/donate"
            className="inline-flex min-w-[260px] items-center justify-center gap-2 rounded-[10px] bg-[#F97316] px-8 py-4 text-base font-medium tracking-[0.08em] text-white transition-colors hover:bg-[#EA580C] sm:min-w-[300px]"
          >
            Support Us Today
            <Heart aria-hidden="true" className="h-4 w-4 fill-white text-white" />
          </Link>
        </motion.div>
      </motion.div>
    </section>
  );
}
