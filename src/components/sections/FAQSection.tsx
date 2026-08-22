"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { fadeUp, staggerContainer, viewportConfig } from "@/lib/animations";
import { FAQ } from "@/lib/constants";
import { ChevronDownIcon, HelpCircleIcon } from "@/components/ui/Icons";

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="section-padding bg-[#09090b] overflow-hidden">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <motion.div
          className="text-center mb-14"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
        >
          <motion.span variants={fadeUp} className="inline-block px-4 py-1.5 rounded-full bg-orange-100 text-[#f97316] text-sm font-bold mb-4 border border-slate-200">
            Frequently Asked Questions
          </motion.span>
          <motion.h2 variants={fadeUp} className="font-heading text-4xl sm:text-5xl font-bold text-[#1a1a2e] mb-4">
            Questions? We&apos;ve Got{" "}
            <span className="text-[#f97316]">Answers</span>
          </motion.h2>
          <motion.p variants={fadeUp} className="text-lg text-gray-600 font-body">
            Everything you need to know about Shoe My Feet Foundation and how you can help.
          </motion.p>
        </motion.div>

        {/* Accordion */}
        <motion.div
          className="flex flex-col gap-3"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
        >
          {FAQ.map((item, index) => (
            <motion.div
              key={index}
              variants={fadeUp}
              className="bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow overflow-hidden"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full flex items-start justify-between gap-4 px-6 py-5 text-left group cursor-pointer"
                aria-expanded={openIndex === index}
              >
                <div className="flex items-start gap-3">
                  <div className={`w-8 h-8 rounded-lg flex items-center justify-center shrink-0 mt-0.5 transition-colors ${
                    openIndex === index ? "bg-[#09090b] text-white" : "bg-slate-50 text-[#f97316] group-hover:bg-orange-100"
                  }`}>
                    <HelpCircleIcon size={16} />
                  </div>
                  <span className="font-heading font-bold text-[#1a1a2e] text-base leading-snug">
                    {item.question}
                  </span>
                </div>
                <motion.div
                  animate={{ rotate: openIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                  className="shrink-0 mt-1"
                >
                  <ChevronDownIcon
                    size={20}
                    className={`transition-colors ${openIndex === index ? "text-[#f97316]" : "text-gray-400"}`}
                  />
                </motion.div>
              </button>

              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                  >
                    <div className="px-6 pb-5 ml-11 border-t border-gray-50 pt-3">
                      <p className="text-gray-600 font-body leading-relaxed text-sm">
                        {item.answer}
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </motion.div>

        {/* Contact CTA */}
        <motion.div
          className="mt-10 text-center"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
        >
          <div className="bg-[#09090b] rounded-2xl px-8 py-6 border border-slate-100">
            <p className="font-body text-gray-600 mb-3">
              Still have questions? We&apos;d love to hear from you.
            </p>
            <a
              href="mailto:hello@shoemyfeet.org"
              className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full font-bold text-[#f97316] border-2 border-[#09090b] hover:bg-[#09090b] hover:text-white transition-all text-sm font-body"
            >
              Contact Us →
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
