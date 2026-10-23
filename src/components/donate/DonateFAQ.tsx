"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { fadeUp, staggerContainer, viewportConfig } from "@/lib/animations";

const faqs = [
  {
    q: "Can I donate online?",
    a: "Online payment is not currently available. Please contact our team to arrange a gift. Selecting an amount on this page does not process a payment.",
  },
  {
    q: "Can I arrange monthly giving?",
    a: "You can choose monthly giving in the amount selector, then contact us to confirm the arrangement. Recurring payments are not set up through this page.",
  },
  {
    q: "Can I donate shoes instead of money?",
    a: "Contact us to discuss shoe donations and confirm what types, sizes, and hand-off arrangements are currently needed.",
  },
  {
    q: "How exactly are donations used?",
    a: "Donations support our work providing school shoes and delivering community programmes. Contact us for details about current priorities.",
  },
];

export default function DonateFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="section-padding bg-[#FFFFFF]" aria-label="Frequently asked questions">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={viewportConfig} className="text-center mb-12">
          <motion.span variants={fadeUp} className="text-sm font-semibold uppercase tracking-wide text-[#142E56] mb-4">
            Have Questions?
          </motion.span>
          <motion.h2 variants={fadeUp} className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-[#111827] mb-5">
            Frequently Asked{" "}
            <span className="text-[#1A3A6B]">Questions</span>
          </motion.h2>
          <motion.p variants={fadeUp} className="text-gray-600 font-body text-base sm:text-lg max-w-xl mx-auto leading-relaxed">
            Find out how to arrange a gift and get answers about supporting our work.
          </motion.p>
        </motion.div>

        {/* FAQ Accordion */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          className="space-y-3"
        >
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <motion.div
                key={index}
                variants={fadeUp}
                className="rounded-lg bg-white shadow-sm overflow-hidden"
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="w-full flex items-start gap-4 px-5 py-4 text-left hover:bg-gray-50 transition-colors cursor-pointer"
                  aria-expanded={isOpen}
                >
                  <span className="flex-1 font-body font-bold text-sm sm:text-base text-[#111827]">
                    {faq.q}
                  </span>
                  <motion.span
                    aria-hidden="true"
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    className="flex-shrink-0 text-[#142E56]"
                    transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
                  >
                    <ChevronDown size={20} />
                  </motion.span>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                    >
                      <div className="px-5 pb-5 pt-2 pl-16 text-sm text-gray-600 font-body leading-relaxed">
                        {faq.a}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Contact CTA */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          className="mt-10 rounded-xl bg-white p-6 text-center shadow-sm"
        >
          <p className="font-body text-gray-600 mb-4">Still have questions? Our team is here to help.</p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a href="mailto:hello@shoemyfeet.org" className="btn-primary text-sm py-3 px-6">
              Email Us
            </a>
            <a href="/contact" className="btn-secondary text-sm py-3 px-6">
              Contact Our Team
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
