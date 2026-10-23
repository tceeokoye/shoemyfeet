"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { fadeUp, staggerContainer, viewportConfig } from "@/lib/animations";
import { ChevronDownIcon, SearchIcon } from "@/components/ui/Icons";

const faqs = [
  {
    q: "How do I volunteer with Shoe My Feet Foundation?",
    a: "You can sign up on our Volunteer page! We have remote and on-ground volunteer opportunities including outreach assistants, shoe fitting specialists, photographers, logistics coordinators, and community advocates.",
  },
  {
    q: "How can I donate to support children with shoes?",
    a: "You can donate securely online via our Donate page using debit/credit cards, bank transfers, USSD, Paystack, Flutterwave, Stripe, or PayPal. You can choose one-time or recurring monthly contributions.",
  },
  {
    q: "Can my company partner with the foundation for CSR?",
    a: "Yes! We offer tailored corporate sponsorship packages, employee matching gift programs, sponsored school outreach events, and comprehensive ESG impact reporting. Visit our Donate page or contact partnerships@shoemyfeet.org.",
  },
  {
    q: "How do schools request assistance for barefoot children?",
    a: "School headmasters, teachers, or PTA representatives can submit a School Partnership request through our contact form. Our regional outreach coordinator will verify eligibility and schedule an assessment visit.",
  },
  {
    q: "Can I donate physical shoes instead of money?",
    a: "Gently used or new shoes in good condition are warmly welcomed. You can drop off shoes at our Enugu headquarters or regional hubs in Kaduna and Benin City, or contact us to arrange collection for bulk donations.",
  },
  {
    q: "How long does it take to receive a response to my enquiry?",
    a: "We respond to all enquiries within 4 business hours. Urgent requests regarding school outreach or treasury support receive immediate priority.",
  },
  {
    q: "Do you operate outside Nigeria?",
    a: "Our primary field operations are in Nigeria (Enugu, Kaduna, Edo, Lagos, etc.). However, we accept international donations globally and collaborate with international NGO partners for bulk shoe procurement.",
  },
  {
    q: "How can I become a Shoe My Feet Foundation Ambassador?",
    a: "You can apply to be a Campus or Community Ambassador! Ambassadors help organize local shoe drives, raise awareness on social media, and advocate for children's footwear dignity in their institutions.",
  },
];

export default function ContactFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const [searchTerm, setSearchTerm] = useState("");

  const filteredFaqs = faqs.filter(
    (f) =>
      f.q.toLowerCase().includes(searchTerm.toLowerCase()) ||
      f.a.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <section className="section-padding bg-[#111827] relative overflow-hidden" aria-label="Contact FAQs">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          className="text-center mb-12"
        >
          <motion.span variants={fadeUp} className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-100 border border-indigo-200 text-indigo-700 font-bold text-sm mb-4">
            ❓ Got Questions?
          </motion.span>
          <motion.h2 variants={fadeUp} className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-[#111827] mb-4">
            Frequently Asked <span className="text-[#1A3A6B]">Questions</span>
          </motion.h2>
          <motion.p variants={fadeUp} className="text-gray-600 font-body text-base sm:text-lg max-w-xl mx-auto leading-relaxed mb-6">
            Find fast answers to common questions about getting involved, partnerships, donations, and outreach requests.
          </motion.p>

          {/* Search Box */}
          <motion.div variants={fadeUp} className="relative max-w-md mx-auto">
            <SearchIcon size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="Search questions (e.g. volunteer, donate, school)..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-11 pr-4 py-3  border border-gray-200 bg-white shadow-sm font-body text-sm text-[#111827] focus:outline-none focus:border-[#111827]"
            />
          </motion.div>
        </motion.div>

        {/* FAQ Accordion */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          className="space-y-3"
        >
          {filteredFaqs.length > 0 ? (
            filteredFaqs.map((faq, index) => {
              const isOpen = openIndex === index;
              return (
                <motion.div
                  key={index}
                  variants={fadeUp}
                  className={` border transition-all overflow-hidden ${
                    isOpen ? "border-[#111827]/30 shadow-md shadow-blue-900/8 bg-white" : "border-gray-100 bg-white shadow-sm"
                  }`}
                >
                  <button
                    onClick={() => setOpenIndex(isOpen ? null : index)}
                    className={`w-full flex items-start gap-4 px-5 py-4 text-left transition-colors cursor-pointer ${
                      isOpen ? "bg-[#111827]" : "bg-white hover:bg-gray-50"
                    }`}
                    aria-expanded={isOpen}
                  >
                    <span className={`w-7 h-7 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 text-sm font-bold transition-colors ${
                      isOpen ? "bg-[#111827] text-white" : "bg-gray-100 text-gray-500"
                    }`}>
                      {index + 1}
                    </span>
                    <span className={`flex-1 font-body font-bold text-sm sm:text-base ${isOpen ? "text-[#1A3A6B]" : "text-[#111827]"}`}>
                      {faq.q}
                    </span>
                    <motion.div
                      animate={{ rotate: isOpen ? 180 : 0 }}
                      transition={{ duration: 0.25 }}
                      className={`flex-shrink-0 mt-0.5 ${isOpen ? "text-[#1A3A6B]" : "text-gray-400"}`}
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
            })
          ) : (
            <div className="text-center py-8 text-gray-500 font-body">
              No matching questions found for &ldquo;{searchTerm}&rdquo;. Try another search or send us a message above!
            </div>
          )}
        </motion.div>

      </div>
    </section>
  );
}
