"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";
import {
  fadeUp,
  fadeLeft,
  fadeRight,
  staggerContainer,
  viewportConfig,
} from "@/lib/animations";
import { TIMELINE } from "@/lib/constants";
import { ArrowRightIcon } from "@/components/ui/Icons";

export default function OurStoryPreview() {
  const milestones = TIMELINE.slice(0, 3);

  return (
    <section className="bg-white relative overflow-hidden">
      <div className="relative left-1/2 w-full -translate-x-1/2">
        <div className="grid overflow-hidden lg:grid-cols-2">
          <motion.div
            className="order-1 flex min-h-85 flex-col items-center justify-center bg-[#F97316] px-6 py-12 text-center sm:min-h-96.25 sm:px-10 sm:py-14 lg:order-2 lg:min-h-140 lg:px-12"
            variants={fadeRight}
            initial="hidden"
            whileInView="visible"
            viewport={viewportConfig}
          >
            <h2 className="mb-5 font-heading text-3xl font-extrabold leading-tight text-[#1A3A6B] sm:text-4xl">
              About Shoe My Feet
            </h2>
            <p className="mb-7 max-w-xl text-base leading-6 text-[#1e1e1e] sm:text-lg sm:leading-7">
              Shoe My Feet Foundation works with schools and communities across Nigeria to provide children with school shoes, protect their feet, and help every child walk into learning with dignity.
            </p>
            <Link
              href="/about/story"
              className="group inline-flex items-center gap-2 font-body text-base font-semibold text-[#111827] transition-colors hover:text-[#1A3A6B]"
            >
              Read More
              <ArrowRightIcon
                size={16}
                className="transition-transform group-hover:translate-x-1"
              />
            </Link>
          </motion.div>

          <motion.figure
            className="relative order-2 min-h-80 bg-[#F3F4F6] sm:min-h-110 lg:order-1 lg:min-h-140"
            variants={fadeLeft}
            initial="hidden"
            whileInView="visible"
            viewport={viewportConfig}
          >
            <Image
              src="/images/everychild.jpg"
              alt="Children and volunteers gathered during a Shoe My Feet community outreach"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </motion.figure>
        </div>

        <div className="grid overflow-hidden lg:grid-cols-2">
          <motion.div
            className="order-1 flex min-h-85 flex-col items-start justify-center bg-[#1A3A6B] px-8 py-12 text-left text-white sm:min-h-96.25 sm:px-12 sm:py-14 lg:min-h-140 lg:px-16"
            variants={fadeLeft}
            initial="hidden"
            whileInView="visible"
            viewport={viewportConfig}
          >
            <h2 className="mb-7 font-heading text-3xl font-extrabold leading-tight text-[#F97316] sm:text-4xl">
              The Tools
            </h2>
            <p className="mb-8 max-w-xl text-base leading-7 sm:text-lg sm:leading-8">
              We believe practical skills open doors. Through hands-on
              shoemaking workshops, children learn to make and repair shoes,
              build confidence, and discover new opportunities for their
              future.
            </p>
            <Link
              href="/programs/kids-shoemaking"
              className="group inline-flex items-center gap-2 font-body text-base font-semibold text-white transition-colors hover:text-[#F97316]"
            >
              Read More
              <ArrowRightIcon
                size={16}
                className="transition-transform group-hover:translate-x-1"
              />
            </Link>
          </motion.div>

          <motion.figure
            className="relative order-2 min-h-80 bg-[#F3F4F6] sm:min-h-110 lg:min-h-140"
            variants={fadeRight}
            initial="hidden"
            whileInView="visible"
            viewport={viewportConfig}
          >
            <Image
              src="/images/crafting9.jpeg"
              alt="Children learning practical shoemaking skills in a workshop"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </motion.figure>
        </div>

        {/* <div className="mx-auto mt-20 max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-3xl bg-[#FFFFFF] p-6 sm:p-8">
            <div className="mb-8 flex flex-wrap items-end justify-between gap-4">
              <div>
                <p className="mb-2 text-xs font-medium uppercase tracking-[0.14em] text-[#C2410C]">Since 2022</p>
                <h3 className="font-heading text-2xl font-semibold text-[#111827] sm:text-3xl">Key journey milestones</h3>
              </div>
              <Link href="/about/how-we-work" className="inline-flex items-center gap-2 text-sm font-medium text-[#1A3A6B] hover:text-[#3f351d]">
                Explore our timeline <ArrowRightIcon size={15} />
              </Link>
            </div>
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={viewportConfig}
              className="grid gap-6 md:grid-cols-3"
            >
              {milestones.map((item) => (
                <motion.article
                  key={item.title}
                  variants={fadeUp}
                  className="rounded-xl bg-white p-6 shadow-sm"
                >
                  <p className="mb-2 text-xs font-medium uppercase tracking-[0.12em] text-[#C2410C]">{item.year}</p>
                  <h4 className="mb-2 font-heading text-lg font-medium text-[#111827]">{item.title}</h4>
                  <p className="text-sm leading-relaxed text-[#696558]">{item.description}</p>
                </motion.article>
              ))}
            </motion.div>
          </div>
        </div> */}
      </div>
    </section>
  );
}
