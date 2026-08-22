"use client";

import { motion } from "framer-motion";
import { fadeUp, staggerContainer, viewportConfig } from "@/lib/animations";
import { ArrowRightIcon } from "@/components/ui/Icons";

const reports = [
  {
    icon: "📊",
    title: "Annual Reports",
    description: "Comprehensive yearly overview of our programs, reach, financials, and strategic goals.",
    cta: "Download 2025 Report",
    color: "bg-[#09090b]",
    bg: "bg-slate-50",
    border: "border-slate-100",
  },
  {
    icon: "💰",
    title: "Financial Reports",
    description: "Detailed audited financial statements showing exactly how every naira was spent.",
    cta: "View Financials",
    color: "bg-[#15803d]",
    bg: "bg-[#15803d]",
    border: "border-green-100",
  },
  {
    icon: "🌍",
    title: "Impact Reports",
    description: "Data-driven reports on children helped, communities reached, and lives transformed.",
    cta: "See Impact Data",
    color: "bg-[#f97316]",
    bg: "bg-orange-50",
    border: "border-orange-100",
  },
  {
    icon: "🏛️",
    title: "Governance",
    description: "Our board structure, bylaws, and commitment to ethical nonprofit management.",
    cta: "View Governance",
    color: "bg-[#09090b]",
    bg: "bg-purple-50",
    border: "border-purple-100",
  },
  {
    icon: "🛡️",
    title: "Child Protection",
    description: "Our comprehensive policy ensuring the safety and dignity of every child we serve.",
    cta: "Read Policy",
    color: "bg-[#f97316]",
    bg: "bg-[#f97316]",
    border: "border-rose-100",
  },
  {
    icon: "🔒",
    title: "Privacy Policy",
    description: "How we collect, use, and protect your personal information as a donor or partner.",
    cta: "Read Policy",
    color: "bg-[#15803d]",
    bg: "bg-[#15803d]",
    border: "border-teal-100",
  },
];

const certifications = [
  { name: "CAC Registered", icon: "🏛️", desc: "Corporate Affairs Commission" },
  { name: "SSL Secured", icon: "🔒", desc: "256-bit encryption" },
  { name: "PCI Compliant", icon: "💳", desc: "Payment security standard" },
  { name: "NDPR Compliant", icon: "🛡️", desc: "Nigeria Data Protection Regulation" },
  { name: "Child Safe", icon: "👶", desc: "Child protection certified" },
  { name: "Audited Annually", icon: "📋", desc: "Independent financial audit" },
];

export default function TransparencySection() {
  return (
    <section className="section-padding bg-[#09090b] relative overflow-hidden" aria-label="Transparency and accountability">
      <div className="absolute top-0 left-0 right-0 h-px bg-[#09090b]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={viewportConfig} className="text-center mb-14">
          <motion.span variants={fadeUp} className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-100 border border-green-200 text-forest-green font-bold text-sm mb-4">
            🔍 Full Transparency
          </motion.span>
          <motion.h2 variants={fadeUp} className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1a1a2e] mb-5">
            Trust is Our{" "}
            <span className="text-[#f97316]">Foundation</span>
          </motion.h2>
          <motion.p variants={fadeUp} className="text-gray-600 font-body text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
            We believe donors deserve full visibility into how their funds are used. Access all our reports, policies, and governance documents below.
          </motion.p>
        </motion.div>

        {/* Reports Grid */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-14"
        >
          {reports.map((report, index) => (
            <motion.div
              key={report.title}
              variants={fadeUp}
              custom={index}
              whileHover={{ y: -6, scale: 1.02 }}
              transition={{ type: "spring", stiffness: 280, damping: 22 }}
              className={`rounded-3xl p-6 border ${report.border} report.bg shadow-sm hover:shadow-xl transition-all group relative overflow-hidden`}
            >
              <div className={`w-12 h-12 rounded-2xl report.color flex items-center justify-center text-2xl shadow-md mb-4 group-hover:scale-110 transition-transform`}>
                {report.icon}
              </div>
              <h3 className="font-heading font-bold text-lg text-[#1a1a2e] mb-2">{report.title}</h3>
              <p className="text-sm text-gray-600 font-body leading-relaxed mb-5">{report.description}</p>
              <a
                href="/contact"
                className="inline-flex items-center gap-1.5 text-sm font-bold font-body text-[#f97316] hover:gap-3 transition-all"
              >
                {report.cta} <ArrowRightIcon size={14} />
              </a>
              <motion.div
                className={`absolute bottom-0 left-0 h-0.5 report.color`}
                initial={{ width: "0%" }}
                whileInView={{ width: "100%" }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: index * 0.08 + 0.2 }}
              />
            </motion.div>
          ))}
        </motion.div>

        {/* Certifications */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          className="bg-white rounded-3xl border border-gray-100 shadow-sm p-8"
        >
          <motion.h3 variants={fadeUp} className="font-heading font-bold text-xl text-[#1a1a2e] text-center mb-8">
            Certifications & Compliance
          </motion.h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
            {certifications.map((cert, i) => (
              <motion.div
                key={cert.name}
                variants={fadeUp}
                custom={i}
                whileHover={{ y: -4, scale: 1.05 }}
                className="text-center p-4 rounded-2xl bg-gray-50 border border-gray-100 hover:bg-white hover:shadow-md transition-all"
              >
                <div className="text-3xl mb-2">{cert.icon}</div>
                <div className="font-heading font-bold text-xs text-[#1a1a2e]">{cert.name}</div>
                <div className="text-[10px] text-gray-400 font-body mt-0.5">{cert.desc}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
