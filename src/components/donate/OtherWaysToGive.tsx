"use client";

import { motion } from "framer-motion";
import { fadeUp, staggerContainer, viewportConfig } from "@/lib/animations";
import { ShieldCheckIcon, ArrowRightIcon } from "@/components/ui/Icons";

const otherWays = [
  {
    icon: "👟",
    title: "Donate Shoes",
    description: "Contribute new or gently used shoes in good condition. We accept all sizes and ensure they reach children who need them most.",
    cta: "Drop Off Shoes",
    href: "/contact",
    color: "bg-[#f97316]",
    bg: "bg-orange-50",
    border: "border-orange-100",
    accent: "text-orange-600",
  },
  {
    icon: "🏘️",
    title: "Sponsor a Community",
    description: "Fund an entire outreach event for a community. Your sponsorship covers shoes, transportation, and coordination for hundreds of children.",
    cta: "Sponsor Community",
    href: "/contact",
    color: "bg-[#1a3a6b]",
    bg: "bg-blue-50",
    border: "border-blue-100",
    accent: "text-blue-600",
  },
  {
    icon: "🏫",
    title: "Sponsor a School",
    description: "Provide shoes for every child in one school. This comprehensive program ensures no child is left out of the classroom footwear initiative.",
    cta: "Sponsor a School",
    href: "/contact",
    color: "bg-[#15803d]",
    bg: "bg-green-50",
    border: "border-green-100",
    accent: "text-green-700",
  },
  {
    icon: "🏢",
    title: "Corporate Giving",
    description: "Integrate giving into your company's CSR strategy. We offer customizable partnership packages with brand visibility and impact reporting.",
    cta: "Corporate Partnership",
    href: "/contact",
    color: "bg-[#1a3a6b]",
    bg: "bg-purple-50",
    border: "border-purple-100",
    accent: "text-purple-700",
  },
  {
    icon: "⛪",
    title: "Church & Community",
    description: "Organize collective donation drives through your faith community or organization. We provide support materials and volunteer coordination.",
    cta: "Organize a Drive",
    href: "/contact",
    color: "bg-[#f97316]",
    bg: "bg-rose-50",
    border: "border-rose-100",
    accent: "text-rose-700",
  },
  {
    icon: "🌿",
    title: "Legacy Giving",
    description: "Leave a lasting impact through planned giving. Honor your values by including Shoe My Feet Foundation in your estate or long-term giving plan.",
    cta: "Plan Your Legacy",
    href: "/contact",
    color: "bg-[#15803d]",
    bg: "bg-teal-50",
    border: "border-teal-100",
    accent: "text-teal-700",
  },
];

export default function OtherWaysToGive() {
  return (
    <section className="section-padding bg-white relative overflow-hidden" aria-label="Other ways to give">
      {/* Subtle section divider */}
      <div className="absolute top-0 left-0 right-0 h-px bg-[#1a3a6b]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={viewportConfig} className="text-center mb-14">
          <motion.span variants={fadeUp} className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-100 border border-green-200 text-forest-green font-bold text-sm mb-4">
            🌟 Other Ways to Give
          </motion.span>
          <motion.h2 variants={fadeUp} className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1a1a2e] mb-5">
            More Ways to{" "}
            <span className="text-royal-blue">Make a Difference</span>
          </motion.h2>
          <motion.p variants={fadeUp} className="text-gray-600 font-body text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
            Beyond monetary donations, there are many powerful ways you can help us put shoes on children&apos;s feet across Nigeria.
          </motion.p>
        </motion.div>

        {/* Cards Grid */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {otherWays.map((way, index) => (
            <motion.div
              key={way.title}
              variants={fadeUp}
              custom={index}
              whileHover={{ y: -8, scale: 1.02 }}
              transition={{ type: "spring", stiffness: 280, damping: 22 }}
              className={`rounded-3xl p-6 border ${way.border} ${way.bg} shadow-sm hover:shadow-xl transition-all group overflow-hidden relative`}
            >
              {/* Icon */}
              <div className={`w-14 h-14 rounded-2xl way.color flex items-center justify-center shadow-lg mb-4 text-2xl group-hover:scale-110 transition-transform`}>
                {way.icon}
              </div>

              <h3 className="font-heading font-bold text-xl text-[#1a1a2e] mb-2">{way.title}</h3>
              <p className="text-gray-600 font-body text-sm leading-relaxed mb-5">{way.description}</p>

              <a
                href={way.href}
                className={`inline-flex items-center gap-2 text-sm font-bold font-body ${way.accent} hover:gap-3 transition-all`}
              >
                {way.cta}
                <ArrowRightIcon size={15} />
              </a>

              {/* Bottom gradient line */}
              <motion.div
                className={`absolute bottom-0 left-0 h-0.5 way.color`}
                initial={{ width: "0%" }}
                whileInView={{ width: "100%" }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: index * 0.08 + 0.2 }}
              />
            </motion.div>
          ))}
        </motion.div>

        {/* In-kind donation note */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          className="mt-10 p-6 rounded-3xl bg-[#1a3a6b] border border-blue-100 flex items-start gap-4 max-w-2xl mx-auto"
        >
          <div className="w-10 h-10 rounded-xl bg-[#1a3a6b] flex items-center justify-center flex-shrink-0">
            <ShieldCheckIcon size={20} className="text-white" />
          </div>
          <div>
            <h4 className="font-heading font-bold text-royal-blue mb-1">All Giving is Welcome</h4>
            <p className="text-sm text-gray-600 font-body leading-relaxed">
              Whether it&apos;s ₦1,000 or ₦1,000,000 — every contribution is transformative. We provide tax receipts for all eligible donations and full transparency on fund usage.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
