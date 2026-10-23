"use client";

import { motion } from "framer-motion";
import { fadeUp, staggerContainer, viewportConfig } from "@/lib/animations";

const reports = [
  {
    title: "Annual Reports",
    description: "Comprehensive yearly overview of our programs, reach, financials, and strategic goals.",
    cta: "Download 2025 Report",
  },
  {
    title: "Financial Reports",
    description: "Detailed audited financial statements showing exactly how every naira was spent.",
    cta: "View Financials",
  },
  {
    title: "Impact Reports",
    description: "Data-driven reports on children helped, communities reached, and lives transformed.",
    cta: "See Impact Data",
  },
  {
    title: "Governance",
    description: "Our board structure, bylaws, and commitment to ethical nonprofit management.",
    cta: "View Governance",
  },
  {
    title: "Child Protection",
    description: "Our comprehensive policy ensuring the safety and dignity of every child we serve.",
    cta: "Read Policy",
  },
  {
    title: "Privacy Policy",
    description: "How we collect, use, and protect your personal information as a donor or partner.",
    cta: "Read Policy",
  },
];

const certifications = [
  { name: "CAC Registered", desc: "Corporate Affairs Commission" },
  { name: "SSL Secured", desc: "256-bit encryption" },
  { name: "PCI Compliant", desc: "Payment security standard" },
  { name: "NDPR Compliant", desc: "Nigeria Data Protection Regulation" },
  { name: "Child Safe", desc: "Child protection certified" },
  { name: "Audited Annually", desc: "Independent financial audit" },
];

export default function TransparencySection() {
  return (
    <section className="section-padding bg-[#FFFFFF]" aria-label="Transparency and accountability">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={viewportConfig} className="text-center mb-14">
          <motion.span variants={fadeUp} className="text-sm font-semibold uppercase tracking-wide text-[#142E56] mb-4">
            Full Transparency
          </motion.span>
          <motion.h2 variants={fadeUp} className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-[#111827] mb-5">
            Trust is Our{" "}
            <span className="text-[#1A3A6B]">Foundation</span>
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
              className="rounded-xl bg-white p-6 shadow-md"
            >
              <h3 className="font-heading font-bold text-lg text-[#111827] mb-2">{report.title}</h3>
              <p className="text-sm text-gray-600 font-body leading-relaxed mb-5">{report.description}</p>
              <a
                href="/contact"
                className="text-sm font-bold font-body text-[#1A3A6B] hover:underline"
              >
                {report.cta}
              </a>
            </motion.div>
          ))}
        </motion.div>

        {/* Certifications */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          className="rounded-xl bg-white p-8 shadow-md"
        >
          <motion.h3 variants={fadeUp} className="font-heading font-bold text-xl text-[#111827] text-center mb-8">
            Certifications & Compliance
          </motion.h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
            {certifications.map((cert, i) => (
              <motion.div
                key={cert.name}
                variants={fadeUp}
                custom={i}
                className="rounded-lg bg-white p-4 text-center shadow-sm"
              >
                <div className="font-heading font-bold text-xs text-[#111827]">{cert.name}</div>
                <div className="text-[10px] text-gray-400 font-body mt-0.5">{cert.desc}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
