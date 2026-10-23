"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { fadeUp, viewportConfig } from "@/lib/animations";
import { ArrowRightIcon } from "@/components/ui/Icons";

export default function SolutionSection() {
  return (
    <section
      className="relative isolate flex min-h-[520px] items-center justify-center overflow-hidden bg-[#17140f] bg-cover bg-center bg-scroll px-4 py-20 text-center text-white md:bg-fixed sm:px-6 lg:px-8"
      style={{ backgroundImage: "url('/images/shoe_distribution.jpg')" }}
    >
      <div aria-hidden="true" className="absolute inset-0 z-0 bg-black/65" />

      <motion.div
        className="relative z-10 mx-auto max-w-3xl"
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
          className="mb-7 font-heading text-3xl font-semibold leading-tight text-[#F97316] sm:text-4xl"
        >
          The Solution
        </motion.h2>
        <motion.p
          variants={fadeUp}
          className="mx-auto max-w-2xl text-base leading-relaxed sm:text-lg"
        >
          We provide school shoes to children who need them, helping protect
          their feet and making it easier to attend school with comfort and
          confidence.
        </motion.p>
        <motion.div variants={fadeUp} className="mt-12">
          <Link
            href="/programs"
            className="group inline-flex items-center gap-2 text-base font-semibold text-white transition-colors hover:text-[#F97316]"
          >
            Read More
            <ArrowRightIcon
              size={16}
              className="transition-transform group-hover:translate-x-1"
            />
          </Link>
        </motion.div>
      </motion.div>
    </section>
  );
}
