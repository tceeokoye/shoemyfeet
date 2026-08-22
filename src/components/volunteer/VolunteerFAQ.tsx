"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FAQ_ITEMS } from "@/lib/volunteerData";
import { staggerContainer, fadeUp, viewportConfig } from "@/lib/animations";
import { ChevronDownIcon, SearchIcon } from "@/components/ui/Icons";

function FAQAccordionItem({ item, index }: { item: typeof FAQ_ITEMS[0]; index: number }) {
  const [open, setOpen] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ delay: index * 0.06, duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
      className={`border rounded-2xl overflow-hidden transition-all duration-300 ${
        open
          ? "border-warm-orange/40 shadow-lg shadow-orange-50/80"
          : "border-gray-200 bg-white hover:border-orange-200"
      }`}
    >
      <button
        onClick={() => setOpen((p) => !p)}
        className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left cursor-pointer bg-white hover:bg-orange-50/40 transition-colors duration-300"
        aria-expanded={open}
        id={`faq-${item.id}`}
        aria-controls={`faq-content-${item.id}`}
      >
        <span className="font-heading font-bold text-[#1a1a2e] text-base sm:text-lg pr-4 leading-snug">
          {item.question}
        </span>
        <motion.div
          animate={{ rotate: open ? 180 : 0 }}
          transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className={`shrink-0 w-9 h-9 rounded-full flex items-center justify-center transition-all duration-300 ${
            open
              ? "bg-[#f97316] text-white shadow-md"
              : "bg-orange-50 text-warm-orange"
          }`}
        >
          <ChevronDownIcon size={18} />
        </motion.div>
      </button>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            key="faq-content"
            id={`faq-content-${item.id}`}
            role="region"
            aria-labelledby={`faq-${item.id}`}
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.38, ease: [0.16, 1, 0.3, 1] }}
            className="overflow-hidden"
          >
            <div className="px-6 pb-5 pt-0 border-t border-orange-100">
              <p className="font-body text-gray-600 text-sm sm:text-base leading-relaxed pt-4">
                {item.answer}
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default function VolunteerFAQ() {
  const [search, setSearch] = useState("");

  const filtered = FAQ_ITEMS.filter(
    (faq) =>
      faq.question.toLowerCase().includes(search.toLowerCase()) ||
      faq.answer.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <section id="volunteer-faq" className="section-padding bg-[#f8fafc] overflow-hidden">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          className="text-center max-w-2xl mx-auto mb-12"
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
            Questions? We Have{" "}
            <span className="text-warm-orange">Answers.</span>
          </motion.h2>
          <motion.p
            variants={fadeUp}
            className="text-base sm:text-lg text-gray-600 font-body leading-relaxed"
          >
            Everything you need to know about volunteering with Shoe My Feet Foundation — from who can join to how to get trained.
          </motion.p>
        </motion.div>

        {/* Search */}
        <motion.div
          className="relative mb-8 max-w-xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="absolute left-4 top-1/2 -translate-y-1/2 pointer-events-none">
            <SearchIcon size={18} className="text-gray-400" />
          </div>
          <input
            type="text"
            placeholder="Search questions..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full pl-12 pr-4 py-3.5 rounded-2xl border border-gray-200 focus:outline-none focus:border-warm-orange focus:ring-2 focus:ring-orange-100 font-body text-sm text-[#1a1a2e] bg-white shadow-sm transition-all duration-300"
            aria-label="Search FAQ"
          />
        </motion.div>

        {/* FAQ Accordion */}
        <div className="space-y-3">
          <AnimatePresence>
            {filtered.length > 0 ? (
              filtered.map((faq, i) => (
                <FAQAccordionItem key={faq.id} item={faq} index={i} />
              ))
            ) : (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="text-center py-12"
              >
                <div className="text-4xl mb-3">🔍</div>
                <p className="font-body text-gray-500 text-base">No matching questions found. Try a different search term.</p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Still have questions */}
        <motion.div
          className="mt-12 text-center rounded-3xl bg-[#09090b] p-8 relative overflow-hidden"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-0 right-0 w-48 h-48 rounded-full bg-orange-400/10 blur-[80px]" />
            <div className="absolute bottom-0 left-0 w-48 h-48 rounded-full bg-slate-800/8 blur-[80px]" />
          </div>
          <div className="relative z-10">
            <div className="text-3xl mb-3">💬</div>
            <h3 className="font-heading text-xl font-bold text-white mb-2">Still Have Questions?</h3>
            <p className="font-body text-neutral-300/80 text-sm mb-5">
              Our volunteer team responds within 24 hours. Don't hesitate to reach out!
            </p>
            <a href="/contact" className="btn-orange inline-flex items-center gap-2 px-6 py-3 text-sm">
              Contact Us →
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
