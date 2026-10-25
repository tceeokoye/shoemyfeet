"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { fadeUp, staggerContainer, viewportConfig } from "@/lib/animations";
import { CheckIcon } from "@/components/ui/Icons";

type ContactItem = {
  label: string;
  value: string;
  clickable?: string;
};

type ContactCardCategory = {
  category: string;
  icon: string;
  color: string;
  bg: string;
  border: string;
  items: ContactItem[];
  actionLabel: string;
  actionHref: string;
};

const contactCards: ContactCardCategory[] = [
  {
    category: "Head Office",
    icon: "📍",
    color: "bg-[#111827]",
    bg: "bg-slate-50",
    border: "border-slate-100",
    items: [
      { label: "Office Address", value: "No. 14 Independence Layout, Plot 8" },
      { label: "City & State", value: "Enugu, Enugu State" },
      { label: "Country", value: "Nigeria (West Africa)" },
      { label: "Landmark", value: "Near Enugu State Secretariat" },
    ],
    actionLabel: "Get Directions",
    actionHref: "#location",
  },
  {
    category: "Phone Support",
    icon: "📞",
    color: "bg-[#1A3A6B]",
    bg: "bg-[#F3F4F6]",
    border: "border-orange-100",
    items: [
      { label: "General Enquiries", value: "+234 800 746 3693", clickable: "tel:+2348007463693" },
      { label: "Volunteer Team", value: "+234 803 123 4567", clickable: "tel:+2348031234567" },
      { label: "Donation Support", value: "+234 802 987 6543", clickable: "tel:+2348029876543" },
      { label: "WhatsApp Hotline", value: "+234 814 000 9988", clickable: "https://wa.me/2348140009988" },
    ],
    actionLabel: "Call General Line",
    actionHref: "tel:+2348007463693",
  },
  {
    category: "Email Channels",
    icon: "✉️",
    color: "bg-[#16A34A]",
    bg: "bg-[#16A34A]",
    border: "border-green-100",
    items: [
      { label: "General Support", value: "hello@shoemyfeet.org", clickable: "mailto:hello@shoemyfeet.org" },
      { label: "Partnerships", value: "partnerships@shoemyfeet.org", clickable: "mailto:partnerships@shoemyfeet.org" },
      { label: "Media & Press", value: "media@shoemyfeet.org", clickable: "mailto:media@shoemyfeet.org" },
      { label: "Volunteer Team", value: "volunteer@shoemyfeet.org", clickable: "mailto:volunteer@shoemyfeet.org" },
    ],
    actionLabel: "Email General Support",
    actionHref: "mailto:hello@shoemyfeet.org",
  },
  {
    category: "Office Hours",
    icon: "⏰",
    color: "bg-[#111827]",
    bg: "bg-purple-50",
    border: "border-purple-100",
    items: [
      { label: "Monday – Friday", value: "8:00 AM – 5:00 PM WAT" },
      { label: "Saturday", value: "9:00 AM – 2:00 PM WAT" },
      { label: "Sunday", value: "Closed (Emergency Only)" },
      { label: "Public Holidays", value: "Outreach Days / Closed" },
    ],
    actionLabel: "Schedule a Visit",
    actionHref: "#visit-office",
  },
];

export default function ContactInfoCards() {
  const [copiedItem, setCopiedItem] = useState<string | null>(null);

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopiedItem(text);
    setTimeout(() => setCopiedItem(null), 2000);
  };

  return (
    <section className="section-padding bg-white relative overflow-hidden" aria-label="Contact information">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          className="text-center mb-14"
        >
          <motion.span variants={fadeUp} className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange-100 border border-orange-200 text-[#1A3A6B]-dark font-bold text-sm mb-4">
            📌 Quick Contact
          </motion.span>
          <motion.h2 variants={fadeUp} className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-[#111827] mb-4">
            Ways to <span className="text-[#1A3A6B]">Reach Us</span>
          </motion.h2>
          <motion.p variants={fadeUp} className="text-gray-600 font-body text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
            Choose your preferred communication channel below. Our team is responsive, friendly, and eager to assist you.
          </motion.p>
        </motion.div>

        {/* Cards Grid */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {contactCards.map((card, index) => (
            <motion.div
              key={card.category}
              variants={fadeUp}
              custom={index}
              whileHover={{ y: -6 }}
              transition={{ type: "spring", stiffness: 280, damping: 22 }}
              className="bg-white rounded-2xl p-6 border border-slate-100 shadow-md hover:shadow-xl transition-all flex flex-col justify-between relative overflow-hidden"
            >
              <div>
                <div className="w-14 h-14  bg-slate-50 border border-slate-100 flex items-center justify-center text-2xl shadow-sm mb-5">
                  {card.icon}
                </div>

                <h3 className="font-heading font-bold text-xl text-[#111827] mb-4">{card.category}</h3>

                <div className="space-y-3">
                  {card.items.map((item) => (
                    <div key={item.label} className="group/item">
                      <div className="text-[11px] text-slate-500 font-body font-medium">{item.label}</div>
                      {item.clickable ? (
                        <div className="flex items-center justify-between gap-1">
                          <a
                            href={item.clickable}
                            className="font-body font-bold text-sm text-[#111827] hover:text-[#1A3A6B] transition-colors truncate"
                          >
                            {item.value}
                          </a>
                          <button
                            onClick={() => copyToClipboard(item.value)}
                            className="text-xs text-slate-400 hover:text-black p-1 rounded transition-colors cursor-pointer"
                            title="Copy to clipboard"
                          >
                            {copiedItem === item.value ? <CheckIcon size={12} className="text-green-600" /> : "📋"}
                          </button>
                        </div>
                      ) : (
                        <div className="font-body font-semibold text-sm text-[#111827]">{item.value}</div>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-6 mt-6 border-t border-slate-100">
                <a
                  href={card.actionHref}
                  className="w-full py-2.5 px-4 rounded-xl bg-slate-50 border border-slate-200 text-[#111827] font-bold font-body text-xs text-center inline-block hover:bg-black hover:text-white transition-all shadow-xs"
                >
                  {card.actionLabel} →
                </a>
              </div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
