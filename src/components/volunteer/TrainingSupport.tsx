"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { TRAINING_ITEMS } from "@/lib/volunteerData";
import { staggerContainer, fadeUp, viewportConfig } from "@/lib/animations";
import { ChevronDownIcon } from "@/components/ui/Icons";
import { Handshake } from "lucide-react";

function TrainingAccordion({ item, index }: { item: typeof TRAINING_ITEMS[0]; index: number }) {
  const [open, setOpen] = useState(index === 0);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ delay: index * 0.07, duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
      className={` overflow-hidden border transition-all duration-300 ${
        open
          ? "border-orange-200 shadow-lg shadow-[#F3F4F6]"
          : "border-gray-150 bg-white hover:border-orange-100"
      }`}
    >
      <button
        onClick={() => setOpen((p) => !p)}
        className={`w-full flex items-center gap-4 px-6 py-5 text-left transition-colors duration-300 cursor-pointer ${
          open ? "bg-[#111827]" : "bg-white hover:bg-[#F3F4F6]/40"
        }`}
        aria-expanded={open}
        id={`training-${index}`}
      >
        {/* Icon */}
        <div className={`w-11 h-11 rounded-xl flex items-center justify-center text-xl shadow-sm shrink-0 transition-all duration-300 ${
          open ? "bg-[#1A3A6B] shadow-black/5" : "bg-[#F3F4F6]"
        }`}>
          <item.icon size={22} strokeWidth={1.8} aria-hidden="true" />
        </div>

        <span className="flex-1 font-heading font-bold text-[#111827] text-base sm:text-lg pr-4">
          {item.title}
        </span>

        <motion.div
          animate={{ rotate: open ? 180 : 0 }}
          transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className={`shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-colors duration-300 ${
            open ? "bg-[#1A3A6B] text-white" : "bg-orange-100 text-[#1A3A6B]"
          }`}
        >
          <ChevronDownIcon size={16} />
        </motion.div>
      </button>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            key="content"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.38, ease: [0.16, 1, 0.3, 1] }}
            className="overflow-hidden"
          >
            {/* Orange left border indicator */}
            <div className="ml-6 mr-6 mb-5 mt-1 border-l-4 border-[#1A3A6B] pl-5">
              <p className="font-body text-gray-600 text-sm sm:text-base leading-relaxed">{item.content}</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default function TrainingSupport() {
  return (
    <section id="training-support" className="section-padding bg-[#f8fafc] overflow-hidden">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          className="text-center max-w-2xl mx-auto mb-14"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
        >
          <motion.span
            variants={fadeUp}
            className="inline-block px-4 py-1.5 rounded-full bg-[#FFFFFF] text-[#1A3A6B] text-xs sm:text-sm font-bold border border-[#F3F4F6] mb-4"
          >
            Training & Support
          </motion.span>
          <motion.h2
            variants={fadeUp}
            className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-[#111827] mb-4 leading-tight"
          >
            We Set You Up to{" "}
            <span className="text-[#1A3A6B]">Succeed</span>
          </motion.h2>
          <motion.p
            variants={fadeUp}
            className="text-base sm:text-lg text-gray-600 font-body leading-relaxed"
          >
            No experience? No problem. From your first orientation to ongoing mentorship, we have everything you need to volunteer with confidence and joy.
          </motion.p>
        </motion.div>

        {/* Accordion */}
        <div className="space-y-3">
          {TRAINING_ITEMS.map((item, i) => (
            <TrainingAccordion key={item.title} item={item} index={i} />
          ))}
        </div>

        {/* Bottom CTA card */}
        <motion.div
          className="mt-12 rounded-2xl bg-[#111827] border border-orange-200 p-8 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <Handshake size={30} className="mx-auto mb-3 text-[#1A3A6B]" strokeWidth={1.8} aria-hidden="true" />
          <h3 className="font-heading text-xl font-bold text-[#111827] mb-2">Have More Questions?</h3>
          <p className="font-body text-gray-600 text-sm mb-5">
            Our volunteer coordinator is just a message away. Don&apos;t hesitate to reach out — we&apos;re here to help you get started.
          </p>
          <a href="/contact" className="btn-primary inline-flex items-center gap-2 px-6 py-3 text-sm">
            Contact the Volunteer Team →
          </a>
        </motion.div>
      </div>
    </section>
  );
}
