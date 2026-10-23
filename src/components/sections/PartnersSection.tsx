"use client";

import { motion } from "framer-motion";
import { fadeUp, staggerContainer, viewportConfig } from "@/lib/animations";
import { ExternalLink } from "lucide-react";

const partners = [
  {
    name: "Access Bank",
    type: "Corporate Partner",
    description: "CSR funding for 1,000+ shoe distributions",
    initials: "AB",
    color: "bg-[#111827]",
    bg: "bg-red-50",
    border: "border-red-200",
    year: "Since 2023",
  },
  {
    name: "Enugu State Govt",
    type: "Government Partner",
    description: "State-level school outreach collaboration",
    initials: "ES",
    color: "bg-[#16A34A]",
    bg: "bg-green-50",
    border: "border-green-200",
    year: "Since 2022",
  },
  {
    name: "UNICEF Nigeria",
    type: "NGO Alliance",
    description: "Child welfare alignment & community access",
    initials: "UN",
    color: "bg-[#111827]",
    bg: "bg-slate-50",
    border: "border-slate-200",
    year: "Partner",
  },
  {
    name: "Kaduna Ministry",
    type: "Government Partner",
    description: "Northern Nigeria outreach facilitation",
    initials: "KM",
    color: "bg-[#111827]",
    bg: "bg-purple-50",
    border: "border-purple-200",
    year: "2024–Present",
  },
  {
    name: "GTBank Foundation",
    type: "Corporate Sponsor",
    description: "kids empowerment training program support",
    initials: "GT",
    color: "bg-[#1A3A6B]",
    bg: "bg-[#F3F4F6]",
    border: "border-orange-200",
    year: "Active Sponsor",
  },
  {
    name: "NACA Nigeria",
    type: "Health Ally",
    description: "Jigger & hookworm prevention in communities",
    initials: "NA",
    color: "bg-[#111827]",
    bg: "bg-slate-100",
    border: "border-slate-200",
    year: "Partner",
  },
  {
    name: "Edo State Education",
    type: "Government Partner",
    description: "2026 expansion into Benin City schools",
    initials: "ED",
    color: "bg-[#111827]",
    bg: "bg-[#FFFFFF]",
    border: "border-[#F3F4F6]",
    year: "2026 Partner",
  },
  {
    name: "CAC Nigeria",
    type: "Regulatory Body",
    description: "Official registration & compliance oversight",
    initials: "CA",
    color: "bg-[#111827]",
    bg: "bg-gray-50",
    border: "border-gray-200",
    year: "Registered NGO",
  },
];

const testimonials = [
  {
    quote: "Shoe My Feet Foundation's commitment to transforming young lives through such a basic but powerful intervention is exactly the kind of grassroots impact we love to amplify.",
    name: "Corporate Affairs Director",
    org: "Access Bank Nigeria",
    initials: "AB",
    color: "bg-[#111827]",
  },
  {
    quote: "The results speak for themselves — school attendance improved noticeably in every community where Shoe My Feet distributed shoes. A simple intervention with profound results.",
    name: "State Education Coordinator",
    org: "Enugu State Government",
    initials: "ES",
    color: "bg-[#16A34A]",
  },
];

export default function PartnersSection() {
  return (
    <section id="partners" className="section-padding bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          className="text-center max-w-3xl mx-auto mb-16"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
        >
          <motion.span
            variants={fadeUp}
            className="inline-block px-4 py-1.5 rounded-full bg-orange-100  text-[#1A3A6B]-dark text-sm font-bold mb-4 border border-orange-200"
          >
            Trusted By Many
          </motion.span>
          <motion.h2
            variants={fadeUp}
            className="font-heading text-4xl sm:text-5xl font-bold text-[#111827] mb-4"
          >
            Partners Who Believe In{" "}
            <span className="text-[#1A3A6B]">Our Mission</span>
          </motion.h2>
          <motion.p
            variants={fadeUp}
            className="text-lg text-gray-600 font-body leading-relaxed"
          >
            From government bodies to corporate giants, our partners share one
            vision: a Nigeria where no child is left unshod.
          </motion.p>
        </motion.div>

        {/* Partners Grid */}
        <motion.div
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-16"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
        >
          {partners.map((partner, index) => (
            <motion.div
              key={partner.name}
              variants={fadeUp}
              custom={index}
              className={`${partner.bg}  p-5 border ${partner.border} hover:shadow-lg transition-all duration-300 group cursor-default`}
              whileHover={{ y: -4, scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              {/* Logo avatar */}
              <div className={`w-12 h-12 rounded-xl partner.color flex items-center justify-center mb-4 shadow-md group-hover:shadow-lg transition-shadow group-hover:scale-110 duration-300`}>
                <span className="text-white font-heading font-bold text-sm">{partner.initials}</span>
              </div>

              {/* Info */}
              <div>
                <div className="flex items-start justify-between gap-2 mb-1">
                  <h3 className="font-heading font-bold text-[#111827] text-base leading-tight">{partner.name}</h3>
                </div>
                <span className={`inline-block text-[10px] font-bold px-2 py-0.5 rounded-full partner.color text-white mb-2`}>
                  {partner.type}
                </span>
                <p className="text-xs text-gray-500 font-body leading-relaxed">{partner.description}</p>
              </div>

              {/* Year badge */}
              <div className="mt-3 pt-3 border-t border-white/50">
                <span className="text-[10px] text-gray-400 font-body">{partner.year}</span>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Partner testimonials */}
        <motion.div
          className="grid md:grid-cols-2 gap-6 mb-12"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
        >
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              variants={fadeUp}
              className="bg-[#111827]  p-6 border border-slate-100 relative"
            >
              {/* Quote mark */}
              <div className="absolute top-4 right-5 text-4xl font-serif text-neutral-300 leading-none select-none">"</div>

              <p className="font-body text-gray-700 leading-relaxed mb-4 pr-6 italic text-sm">
                "{t.quote}"
              </p>
              <div className="flex items-center gap-3">
                <div className={`w-10 h-10 rounded-full t.color flex items-center justify-center shrink-0`}>
                  <span className="text-white font-bold text-xs">{t.initials}</span>
                </div>
                <div>
                  <p className="font-body font-bold text-sm text-gray-800">{t.name}</p>
                  <p className="text-xs text-gray-400 font-body">{t.org}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Become a partner CTA */}
        <motion.div
          className="relative bg-[#111827] rounded-2xl p-8 md:p-12 text-center overflow-hidden"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
        >
          {/* Background decoration */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute -top-10 -right-10 w-48 h-48 rounded-full bg-white/5 animate-blob-slow" />
            <div className="absolute -bottom-10 -left-10 w-56 h-56 rounded-full bg-[#1A3A6B]/10 animate-blob" />
          </div>

          <div className="relative z-10">
            <div className="w-16 h-16  bg-[#1A3A6B] flex items-center justify-center mx-auto mb-4 text-2xl shadow-xl">
              🤝
            </div>
            <h3 className="font-heading text-3xl font-bold text-white mb-3">
              Become a Partner
            </h3>
            <p className="text-neutral-300 font-body max-w-xl mx-auto mb-6 leading-relaxed">
              Whether you&apos;re a corporation, government body, or fellow NGO,
              let&apos;s build a partnership that puts shoes on the feet of Nigeria&apos;s
              most vulnerable children.
            </p>
            <div className="flex flex-wrap gap-3 justify-center">
              <motion.a
                href="mailto:partnerships@shoemyfeet.org"
                className="btn-primary group"
                whileHover={{ y: -2, scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <ExternalLink size={16} />
                Partner With Us
              </motion.a>
              <motion.a
                href="#donate"
                className="px-6 py-3 rounded-full border-2 border-white/30 text-white font-bold hover:bg-white/10 transition-all"
                whileHover={{ y: -2 }}
              >
                Explore CSR Options
              </motion.a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
