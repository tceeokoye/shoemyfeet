"use client";

import { motion } from "framer-motion";
import { staggerContainer, fadeUp, viewportConfig } from "@/lib/animations";

const reports = [
  {
    year: "2024",
    title: "Annual Impact Report",
    description: "Our comprehensive 2024 impact report documenting shoe distributions, community outreach events, children's empowerment outcomes, and financial transparency.",
    icon: "📊",
    color: "bg-[#09090b]",
    bg: "bg-slate-50",
    border: "border-slate-100",
    badge: "Full Report",
    badgeColor: "bg-orange-100 text-[#0a0a0a]",
  },
  {
    year: "2024",
    title: "Financial Summary",
    description: "A transparent breakdown of how every Naira donated was spent — from shoe procurement to volunteer logistics and community events.",
    icon: "💰",
    color: "bg-[#15803d]",
    bg: "bg-emerald-50",
    border: "border-emerald-100",
    badge: "Financials",
    badgeColor: "bg-emerald-100 text-emerald-700",
  },
  {
    year: "2024",
    title: "Community Outreach Report",
    description: "Detailed accounts of every community visit, school partnership, and outreach event conducted across Enugu, Kaduna, and Edo states.",
    icon: "🏘️",
    color: "bg-[#f97316]",
    bg: "bg-orange-50",
    border: "border-orange-100",
    badge: "Outreach Data",
    badgeColor: "bg-orange-100 text-orange-700",
  },
  {
    year: "2024",
    title: "Partnership Report",
    description: "An overview of our corporate and institutional partnerships, CSR outcomes, and the collective impact driven by collaboration.",
    icon: "🤝",
    color: "bg-[#09090b]",
    bg: "bg-purple-50",
    border: "border-purple-100",
    badge: "Partnerships",
    badgeColor: "bg-purple-100 text-purple-700",
  },
];

export default function ImpactReports() {
  return (
    <section className="section-padding bg-[#f8fafc] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          className="text-center max-w-3xl mx-auto mb-14"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
        >
          <motion.span
            variants={fadeUp}
            className="inline-block px-4 py-1.5 rounded-full bg-indigo-100 text-indigo-700 text-xs sm:text-sm font-bold border border-indigo-200 mb-4"
          >
            Annual Reports & Transparency
          </motion.span>
          <motion.h2
            variants={fadeUp}
            className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1a1a2e] mb-4 leading-tight"
          >
            Open, Accountable,{" "}
            <span className="text-[#f97316]">Transparent</span>
          </motion.h2>
          <motion.p
            variants={fadeUp}
            className="text-base sm:text-lg text-gray-600 font-body leading-relaxed"
          >
            We believe in full transparency. Every report below details exactly how your support has been used to create measurable, verifiable impact.
          </motion.p>
        </motion.div>

        {/* Report Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {reports.map((report, index) => (
            <motion.div
              key={report.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.55, delay: index * 0.08, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ y: -8, transition: { type: "spring", stiffness: 300, damping: 22 } }}
              className={`${report.bg} ${report.border} border rounded-3xl p-6 group hover:shadow-xl transition-all duration-500 relative overflow-hidden`}
            >
              {/* Background glow */}
              <div className={`absolute -bottom-6 -right-6 w-20 h-20 rounded-full report.color opacity-10 group-hover:opacity-20 transition-opacity duration-500`} />

              {/* Icon */}
              <div className={`w-14 h-14 rounded-2xl report.color flex items-center justify-center text-3xl shadow-lg mb-4`}>
                {report.icon}
              </div>

              {/* Badge */}
              <span className={`inline-block text-xs font-bold px-2.5 py-0.5 rounded-full font-body mb-3 ${report.badgeColor}`}>
                {report.badge} · {report.year}
              </span>

              {/* Title */}
              <h3 className="font-heading text-lg font-bold text-[#1a1a2e] mb-3">{report.title}</h3>

              {/* Description */}
              <p className="font-body text-gray-600 text-sm leading-relaxed mb-6">{report.description}</p>

              {/* Download button */}
              <button
                className={`w-full inline-flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl text-sm font-bold font-body report.color text-white shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300 cursor-pointer`}
                aria-label={`Download ${report.title}`}
              >
                <span>📥</span>
                <span>Download Report</span>
              </button>
            </motion.div>
          ))}
        </div>

        {/* Trust note */}
        <motion.div
          className="mt-12 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <p className="font-body text-gray-500 text-sm">
            🔒 Shoe My Feet Foundation is a{" "}
            <span className="font-bold text-[#f97316]">CAC-Registered Incorporated Trustee</span>. All reports are verified and published annually.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
