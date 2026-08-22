"use client";

import { motion } from "framer-motion";
import { fadeUp, staggerContainer, viewportConfig } from "@/lib/animations";
import { PhoneIcon, ArrowRightIcon } from "@/components/ui/Icons";

const emergencyCases = [
  {
    icon: "🚨",
    title: "Urgent School Outreach Request",
    subtitle: "For principals, teachers & community leaders",
    description: "Do you have children in your school walking barefoot or lacking shoes for exams? Contact our rapid intervention team.",
    cta: "Request School Support",
    href: "tel:+2348007463693",
    badge: "Fast Track Response",
    color: "bg-[#f97316]",
    bg: "bg-[#f97316]",
    border: "border-red-100",
  },
  {
    icon: "⚡",
    title: "Emergency Donation Assistance",
    subtitle: "Need help completing a donation?",
    description: "Having difficulty making a bank transfer, card payment, or corporate grant transfer? Connect directly with our treasury team.",
    cta: "Treasury Hotline",
    href: "tel:+2348029876543",
    badge: "Instant Support",
    color: "bg-[#f97316]",
    bg: "bg-orange-50",
    border: "border-orange-100",
  },
  {
    icon: "💼",
    title: "Corporate CSR Hotline",
    subtitle: "For business executives & CSR managers",
    description: "Want to launch a corporate shoe drive or match employee donations before quarter-end? Speak with our Corporate Director.",
    cta: "Connect CSR Director",
    href: "https://wa.me/2348140009988",
    badge: "Direct Line",
    color: "bg-[#09090b]",
    bg: "bg-slate-50",
    border: "border-slate-100",
  },
  {
    icon: "💬",
    title: "WhatsApp Emergency Help",
    subtitle: "Instant messaging for quick questions",
    description: "Get immediate answers to urgent questions regarding shoe drop-off, volunteer signups, or community outreach dates.",
    cta: "Open WhatsApp Chat",
    href: "https://wa.me/2348140009988",
    badge: "Active 24/7",
    color: "bg-[#15803d]",
    bg: "bg-[#15803d]",
    border: "border-green-100",
  },
];

export default function EmergencySupportCards() {
  return (
    <section className="section-padding bg-white relative overflow-hidden" aria-label="Emergency and urgent support">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          className="text-center mb-14"
        >
          <motion.span variants={fadeUp} className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-red-100 border border-red-200 text-red-700 font-bold text-sm mb-4">
            ⚡ Urgent Enquiries
          </motion.span>
          <motion.h2 variants={fadeUp} className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1a1a2e] mb-4">
            Need Immediate <span className="text-warm-orange">Assistance?</span>
          </motion.h2>
          <motion.p variants={fadeUp} className="text-gray-600 font-body text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
            For time-sensitive community requests, urgent school supply needs, or high-priority corporate partnerships, use our direct hotlines.
          </motion.p>
        </motion.div>

        {/* Grid */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {emergencyCases.map((item, index) => (
            <motion.div
              key={item.title}
              variants={fadeUp}
              custom={index}
              whileHover={{ y: -8, scale: 1.02 }}
              transition={{ type: "spring", stiffness: 280, damping: 22 }}
              className={`rounded-3xl p-6 border ${item.border} item.bg shadow-sm hover:shadow-xl transition-all flex flex-col justify-between relative overflow-hidden`}
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className={`w-12 h-12 rounded-2xl item.color flex items-center justify-center text-2xl shadow-md text-white`}>
                    {item.icon}
                  </div>
                  <span className="text-[10px] font-bold font-body px-2.5 py-1 rounded-full bg-white border border-gray-200 text-gray-700 shadow-xs">
                    {item.badge}
                  </span>
                </div>

                <h3 className="font-heading font-bold text-lg text-[#1a1a2e] mb-1">{item.title}</h3>
                <div className="text-xs text-gray-500 font-body mb-3 font-medium">{item.subtitle}</div>
                <p className="text-xs text-gray-600 font-body leading-relaxed mb-4">{item.description}</p>
              </div>

              <div className="pt-4 border-t border-black/5">
                <a
                  href={item.href}
                  className={`w-full py-3 px-4 rounded-2xl item.color text-white font-bold font-body text-xs text-center inline-flex items-center justify-center gap-2 shadow-md hover:opacity-95 transition-all`}
                >
                  <span>{item.cta}</span>
                  <ArrowRightIcon size={14} />
                </a>
              </div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
