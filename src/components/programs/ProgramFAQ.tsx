"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { staggerContainer, fadeUp, viewportConfig } from "@/lib/animations";
import { ChevronDownIcon } from "@/components/ui/Icons";

const faqs = [
  {
    q: "Who benefits from your programs?",
    a: "Our programs primarily benefit primary school-aged children in underserved communities across Nigeria — particularly those in rural areas, urban slums, and low-income communities where access to quality footwear is limited. We prioritize the most vulnerable children first.",
  },
  {
    q: "How are communities selected for shoe distribution?",
    a: "We use a transparent community assessment process involving collaboration with local school heads, community leaders, and verified NGO partners. Communities are prioritized based on the number of children without shoes, access to education, and geographic vulnerability.",
  },
  {
    q: "Can I volunteer with Shoe My Feet Foundation?",
    a: "Absolutely! We welcome volunteers of all ages and skill levels. You can help at distribution events, sort and organize donations, support logistics, or serve as a community liaison. Visit our Volunteer page to register and join our growing team.",
  },
  {
    q: "Can I donate used or pre-owned shoes?",
    a: "Yes! We accept gently used, clean shoes in good condition. All donated shoes go through quality inspection and sorting by our volunteers. Please ensure donated shoes are washed, in pairs, and free of major damage before dropping them off at our collection points.",
  },
  {
    q: "How can my organization partner with you?",
    a: "We welcome partnerships with schools, churches, businesses, NGOs, and government agencies. Corporate partners can sponsor shoe distributions, co-organize outreach events, or contribute financially through CSR programs. Contact us via our Contact page to start the conversation.",
  },
  {
    q: "Are donations to Shoe My Feet Foundation tax-deductible?",
    a: "We are registered with the Corporate Affairs Commission (CAC) in Nigeria as a non-profit organization. Financial deductibility depends on your country of residence and applicable tax laws. Please consult your tax advisor. We provide receipts for all financial contributions upon request.",
  },
];

function FAQItem({ item, index }: { item: typeof faqs[0]; index: number }) {
  const [open, setOpen] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ delay: index * 0.07, duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
      className="border border-gray-200 rounded-2xl overflow-hidden bg-white hover:border-slate-200 transition-colors duration-300"
    >
      <button
        onClick={() => setOpen((p) => !p)}
        className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left"
        aria-expanded={open}
      >
        <span className="font-heading font-bold text-[#1a1a2e] text-base sm:text-lg pr-4">
          {item.q}
        </span>
        <motion.div
          animate={{ rotate: open ? 180 : 0 }}
          transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="shrink-0 w-8 h-8 rounded-full bg-slate-50 flex items-center justify-center text-[#f97316]"
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
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="overflow-hidden"
          >
            <div className="px-6 pb-5 pt-0 border-t border-gray-100">
              <p className="font-body text-gray-600 text-sm sm:text-base leading-relaxed pt-4">
                {item.a}
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default function ProgramFAQ() {
  return (
    <section className="section-padding bg-[#f8fafc] overflow-hidden">
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
            className="inline-block px-4 py-1.5 rounded-full bg-orange-100 text-[#f97316] text-xs sm:text-sm font-bold border border-slate-200 mb-4"
          >
            Frequently Asked Questions
          </motion.span>
          <motion.h2
            variants={fadeUp}
            className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1a1a2e] mb-4 leading-tight"
          >
            Got <span className="text-[#f97316]">Questions?</span>
          </motion.h2>
          <motion.p
            variants={fadeUp}
            className="text-base sm:text-lg text-gray-600 font-body leading-relaxed"
          >
            Everything you need to know about how our programs work and how you can get involved.
          </motion.p>
        </motion.div>

        {/* Accordion */}
        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <FAQItem key={faq.q} item={faq} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
