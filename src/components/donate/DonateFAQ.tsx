"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { fadeUp, staggerContainer, viewportConfig } from "@/lib/animations";
import { ChevronDownIcon } from "@/components/ui/Icons";

const faqs = [
  {
    q: "Is my donation secure?",
    a: "Absolutely. All donations are processed through industry-standard SSL-encrypted payment gateways including Paystack, Flutterwave, Stripe, and PayPal. Your financial information is never stored on our servers.",
  },
  {
    q: "Can I donate monthly or on a recurring basis?",
    a: "Yes! We offer one-time, monthly, quarterly, and annual giving options. Recurring donations provide predictable funding that helps us plan and execute long-term outreach programs more effectively.",
  },
  {
    q: "Can I donate shoes instead of money?",
    a: "We gratefully accept new or gently used shoes in good condition. Contact us via our Contact page or visit one of our drop-off locations in Enugu, Kaduna, or Edo State. We verify and distribute all donated shoes to children in need.",
  },
  {
    q: "Will I receive a receipt for my donation?",
    a: "Yes. All donors receive an official email receipt immediately upon completing their donation. For corporate and large donations, we provide official documentation suitable for CSR reporting and tax purposes.",
  },
  {
    q: "Can I sponsor a specific community or school?",
    a: "Yes, we offer targeted community and school sponsorship packages. Contact us with your preferred location and we'll match your donation with an eligible community or school in our outreach pipeline.",
  },
  {
    q: "How exactly are donations used?",
    a: "55% goes to shoe procurement, 15% to transportation and logistics, 12% to community outreach coordination, 8% to volunteer support, 5% to education materials, and 5% to administration. We publish annual financial reports for full transparency.",
  },
  {
    q: "Can I make an anonymous donation?",
    a: "Yes. During the donation process, you can toggle 'Make this an anonymous donation.' Your name will not be displayed on our donor wall or in any public communications, though you'll still receive a private receipt.",
  },
  {
    q: "Are corporate donations accepted?",
    a: "Absolutely. We have dedicated corporate giving and CSR partnership programs with customizable packages, brand visibility benefits, employee giving campaigns, and impact reporting. Contact us to discuss your company's giving goals.",
  },
  {
    q: "Is Shoe My Feet Foundation a registered nonprofit?",
    a: "Yes. Shoe My Feet Foundation is fully registered with the Corporate Affairs Commission (CAC) in Nigeria. We operate in compliance with all Nigerian nonprofit regulations and maintain transparent governance practices.",
  },
  {
    q: "Can I donate from outside Nigeria?",
    a: "Yes. We accept international donations through PayPal and Stripe. International donors can choose their currency and the payment will be converted automatically. Receipts are issued in both NGN and the donor's local currency.",
  },
];

export default function DonateFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="section-padding bg-[#f8fafc] relative overflow-hidden" aria-label="Frequently asked questions">
      <div className="absolute top-0 left-0 right-0 h-px bg-[#09090b]" />

      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={viewportConfig} className="text-center mb-12">
          <motion.span variants={fadeUp} className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-100 border border-indigo-200 text-indigo-700 font-bold text-sm mb-4">
            ❓ Have Questions?
          </motion.span>
          <motion.h2 variants={fadeUp} className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1a1a2e] mb-5">
            Frequently Asked{" "}
            <span className="text-[#f97316]">Questions</span>
          </motion.h2>
          <motion.p variants={fadeUp} className="text-gray-600 font-body text-base sm:text-lg max-w-xl mx-auto leading-relaxed">
            Everything you need to know about donating to Shoe My Feet Foundation, safely, securely, and transparently.
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
                className={`rounded-2xl border transition-all overflow-hidden ${
                  isOpen ? "border-[#09090b]/30 shadow-md shadow-blue-900/8" : "border-gray-100 bg-white shadow-sm"
                }`}
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className={`w-full flex items-start gap-4 px-5 py-4 text-left transition-colors cursor-pointer ${
                    isOpen ? "bg-[#09090b]" : "bg-white hover:bg-gray-50"
                  }`}
                  aria-expanded={isOpen}
                >
                  <span className={`w-7 h-7 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 text-sm font-bold transition-colors ${
                    isOpen ? "bg-[#09090b] text-white" : "bg-gray-100 text-gray-500"
                  }`}>
                    {index + 1}
                  </span>
                  <span className={`flex-1 font-body font-bold text-sm sm:text-base ${isOpen ? "text-[#f97316]" : "text-[#1a1a2e]"}`}>
                    {faq.q}
                  </span>
                  <motion.div
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.25 }}
                    className={`flex-shrink-0 mt-0.5 ${isOpen ? "text-[#f97316]" : "text-gray-400"}`}
                  >
                    <ChevronDownIcon size={18} />
                  </motion.div>
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
          className="mt-10 p-6 rounded-3xl bg-[#09090b] border border-orange-100 text-center"
        >
          <p className="font-body text-gray-600 mb-4">Still have questions? Our team is here to help.</p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a href="mailto:hello@shoemyfeet.org" className="btn-orange text-sm py-3 px-6">
              📧 Email Us
            </a>
            <a href="/contact" className="btn-primary text-sm py-3 px-6">
              Contact Our Team
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
