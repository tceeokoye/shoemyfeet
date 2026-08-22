"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { fadeUp, fadeLeft, fadeRight, staggerContainer, viewportConfig } from "@/lib/animations";
import { PROGRAMS } from "@/lib/constants";
import { ArrowRight, Package, Wrench, Heart } from "lucide-react";

const iconMap: Record<string, React.ReactNode> = {
  package: <Package size={24} className="text-white" />,
  tool: <Wrench size={24} className="text-white" />,
  heart: <Heart size={24} className="text-white" />,
};

const programImages = [
  "/images/distribution.jpg",
  "/images/shoemaking.jpg",
  "/images/community.jpg",
];

export default function ProgramsSection() {
  return (
    <section id="programs" className="section-padding bg-[#2563eb] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <motion.div
          className="text-center max-w-3xl mx-auto mb-16"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
        >
          <motion.span variants={fadeUp} className="inline-block px-4 py-1.5 rounded-full bg-emerald-100 text-[#16a34a] text-sm font-bold mb-4 border border-emerald-200">
            Our Programs
          </motion.span>
          <motion.h2 variants={fadeUp} className="font-heading text-4xl sm:text-5xl font-bold text-[#1a1a2e] mb-4">
            Three Ways We&apos;re{" "}
            <span className="text-royal-blue">Changing Lives</span>
          </motion.h2>
          <motion.p variants={fadeUp} className="text-lg text-gray-600 font-body leading-relaxed">
            Combining immediate impact with long-term community empowerment —
            our programmes address the root cause, not just the symptoms.
          </motion.p>
        </motion.div>

        {/* Programs */}
        <div className="flex flex-col gap-8">
          {PROGRAMS.map((program, index) => (
            <motion.div
              key={program.id}
              className={`grid md:grid-cols-2 gap-8 lg:gap-12 items-center ${
                index % 2 === 1 ? "md:flex-row-reverse" : ""
              }`}
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={viewportConfig}
            >
              {/* Image side */}
              <motion.div
                variants={index % 2 === 0 ? fadeLeft : fadeRight}
                className={index % 2 === 1 ? "md:order-2" : ""}
              >
                <div className="relative rounded-3xl overflow-hidden shadow-xl group">
                  <div className="absolute inset-0 bg-[#2563eb] blur-xl scale-105 z-[-1]" />
                  <Image
                    src={programImages[index]}
                    alt={program.title}
                    width={600}
                    height={380}
                    className="w-full h-72 object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-[#2563eb]" />

                  {/* Floating stat */}
                  <motion.div
                    className="absolute bottom-4 left-4 glass rounded-xl px-4 py-2.5 border border-white/30"
                    animate={{ y: [-3, 3, -3] }}
                    transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                  >
                    <p className="text-white font-bold text-sm font-heading">{program.stats}</p>
                  </motion.div>
                </div>
              </motion.div>

              {/* Content side */}
              <motion.div
                variants={index % 2 === 0 ? fadeRight : fadeLeft}
                className={`flex flex-col gap-5 ${index % 2 === 1 ? "md:order-1" : ""}`}
              >
                {/* Program number + icon */}
                <div className="flex items-center gap-3">
                  <div className={`w-12 h-12 rounded-xl program.color flex items-center justify-center shadow-lg`}>
                    {iconMap[program.icon]}
                  </div>
                  <span className="text-xs font-bold text-gray-400 tracking-widest font-body">
                    PROGRAM 0{index + 1}
                  </span>
                </div>

                <h3 className="font-heading font-bold text-3xl text-[#1a1a2e]">
                  {program.title}
                </h3>
                <p className="text-gray-600 font-body leading-relaxed">
                  {program.longDescription}
                </p>

                {/* Features list */}
                <div className="grid grid-cols-2 gap-2">
                  {program.features.map((feature) => (
                    <div key={feature} className="flex items-center gap-2 text-sm text-gray-600 font-body">
                      <span className="w-5 h-5 rounded-full bg-emerald-100 flex items-center justify-center shrink-0">
                        <span className="text-[#16a34a] text-xs font-bold">✓</span>
                      </span>
                      {feature}
                    </div>
                  ))}
                </div>

                <div>
                  <a
                    href={`#${program.id}`}
                    className={`inline-flex items-center gap-2 px-6 py-3 rounded-full font-bold text-white program.color shadow-lg hover:shadow-xl transition-all hover:-translate-y-1 font-body`}
                  >
                    Learn More
                    <ArrowRight size={16} />
                  </a>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
