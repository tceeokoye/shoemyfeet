"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import FastImage from "@/components/ui/FastImage";
import { fadeUp, staggerContainer, viewportConfig } from "@/lib/animations";
import { PROGRAMS } from "@/lib/constants";
import { ArrowRightIcon } from "@/components/ui/Icons";

export default function ProgramsPreview() {
  return (
    <section className="section-padding bg-[#FFFFFF] text-[#111827]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          className="mb-12 grid gap-5 md:grid-cols-[1fr_0.8fr] md:items-end"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
        >
          <div>
            <motion.p variants={fadeUp} className="mb-3 text-xs font-medium uppercase tracking-[0.14em] text-[#C2410C]">Core action pillars</motion.p>
            <motion.h2 variants={fadeUp} className="max-w-2xl font-heading text-3xl font-semibold leading-tight text-[#111827] sm:text-4xl lg:text-5xl">
              Three Ways We&apos;re <span className="text-[#C2410C]">Transforming Lives</span>
            </motion.h2>
          </div>
          <motion.p variants={fadeUp} className="max-w-xl text-base leading-relaxed text-[#696558] sm:text-lg">
            Combining direct footwear provision with child shoemaking workshops to create long-term self-sustaining impact.
          </motion.p>
        </motion.div>

        <div className="grid gap-9 md:grid-cols-3 md:gap-7">
          {PROGRAMS.map((program, i) => (
            <motion.article
              key={program.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.45, delay: i * 0.08 }}
              className="group rounded-2xl border border-[#F3F4F6] bg-white p-4 shadow-sm transition-shadow hover:shadow-lg hover:shadow-[#1A3A6B]/10"
            >
              <div className="relative mb-5 aspect-[4/3] overflow-hidden rounded-xl bg-[#F3F4F6]">
                <FastImage
                  src={program.image}
                  alt={program.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>
              
              <h3 className="mb-3 font-heading text-2xl font-medium leading-snug text-[#111827]">{program.title}</h3>
              <p className="mb-5 text-sm leading-relaxed text-[#696558]">{program.description}</p>
              <ul className="space-y-2 border-t border-[#F3F4F6] pt-4">
                {program.features.slice(0, 3).map((feature) => (
                  <li key={feature} className="flex gap-3 text-sm text-[#514d42]">
                    <span aria-hidden="true" className="mt-[0.65em] h-px w-4 shrink-0 bg-[#1A3A6B]" />
                    {feature}
                  </li>
                ))}
              </ul>
              <Link href="/programs" className="mt-5 inline-flex items-center gap-2 border-b border-[#1A3A6B] pb-1 text-sm font-medium text-[#1A3A6B] hover:text-[#3f351d]">
                Explore program details <ArrowRightIcon size={15} />
              </Link>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
