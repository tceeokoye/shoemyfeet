"use client";

import { motion } from "framer-motion";
import { fadeUp, staggerContainer, viewportConfig } from "@/lib/animations";
import { ArrowRightIcon } from "@/components/ui/Icons";

const benefits = [
  { icon: "📊", title: "CSR Impact Reports", description: "Detailed quarterly reports showing the direct impact of your investment on children and communities." },
  { icon: "👥", title: "Employee Giving Programs", description: "Engage your team with structured giving campaigns, volunteer days, and matching gift opportunities." },
  { icon: "🎯", title: "Matching Gift Programs", description: "Double your impact by matching employee donations — a powerful way to maximize community benefit." },
  { icon: "📦", title: "Sponsorship Packages", description: "Tailored packages from community event sponsorship to full school outreach campaigns." },
  { icon: "📣", title: "Brand Visibility", description: "Your logo on outreach materials, social media recognition, and website listing as an impact partner." },
  { icon: "🌍", title: "Community Impact", description: "Build genuine goodwill in Nigerian communities and align your brand with a mission that matters." },
];

const packages = [
  {
    name: "Community Friend",
    amount: "₦100,000 – ₦249,999",
    color: "bg-[#15803d]",
    perks: ["Logo on event materials", "Social media mention", "Impact certificate", "Quarterly report"],
  },
  {
    name: "Silver Partner",
    amount: "₦250,000 – ₦499,999",
    color: "bg-slate-700",
    perks: ["All Community Friend perks", "Website logo placement", "Employee volunteer day", "Custom impact story"],
    featured: false,
  },
  {
    name: "Gold Champion",
    amount: "₦500,000 – ₦999,999",
    color: "bg-[#f59e0b]",
    perks: ["All Silver perks", "Sponsored outreach event", "Executive media feature", "Annual dinner invite"],
    featured: true,
  },
  {
    name: "Platinum Guardian",
    amount: "₦1,000,000+",
    color: "bg-[#1a3a6b]",
    perks: ["All Gold perks", "School naming rights", "Board observer seat", "National press coverage"],
  },
];

export default function CorporatePartnerships() {
  return (
    <section className="section-padding bg-white relative overflow-hidden" aria-label="Corporate partnerships">
      <div className="absolute top-0 left-0 right-0 h-px bg-[#1a3a6b]" />
      <div className="absolute top-10 right-10 w-80 h-80 rounded-full opacity-5 blur-3xl bg-[#1a3a6b] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={viewportConfig} className="text-center mb-14">
          <motion.span variants={fadeUp} className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-100 border border-purple-200 text-purple-700 font-bold text-sm mb-4">
            🤝 Corporate Giving
          </motion.span>
          <motion.h2 variants={fadeUp} className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1a1a2e] mb-5">
            Partner With Us to{" "}
            <span className="text-royal-blue">Maximize Impact</span>
          </motion.h2>
          <motion.p variants={fadeUp} className="text-gray-600 font-body text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
            Join forward-thinking businesses investing in the future of Nigerian children. Together, we create sustainable community change.
          </motion.p>
        </motion.div>

        {/* Benefits Grid */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-14"
        >
          {benefits.map((benefit, i) => (
            <motion.div
              key={benefit.title}
              variants={fadeUp}
              whileHover={{ y: -5, scale: 1.02 }}
              className="p-5 rounded-2xl border border-gray-100 bg-gray-50 hover:bg-white hover:shadow-lg transition-all group"
            >
              <div className="text-3xl mb-3">{benefit.icon}</div>
              <h3 className="font-heading font-bold text-lg text-[#1a1a2e] mb-2">{benefit.title}</h3>
              <p className="text-sm text-gray-600 font-body leading-relaxed">{benefit.description}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Sponsorship Packages */}
        <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={viewportConfig} className="mb-10">
          <h3 className="font-heading font-bold text-2xl text-[#1a1a2e] text-center mb-8">Partnership Packages</h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {packages.map((pkg, i) => (
              <motion.div
                key={pkg.name}
                variants={fadeUp}
                custom={i}
                whileHover={{ y: -8, scale: 1.03 }}
                transition={{ type: "spring", stiffness: 280, damping: 22 }}
                className={`relative rounded-3xl overflow-hidden shadow-sm hover:shadow-2xl transition-all ${pkg.featured ? "ring-2 ring-amber-400 ring-offset-2" : "border border-gray-100"}`}
              >
                {pkg.featured && (
                  <div className="absolute top-3 left-1/2 -translate-x-1/2 z-10 px-3 py-1 rounded-full bg-amber-400 text-white text-xs font-bold font-body whitespace-nowrap">
                    ⭐ Most Popular
                  </div>
                )}
                <div className={`h-24 pkg.color flex items-end px-5 pb-4`}>
                  <div>
                    <div className="font-heading font-bold text-white text-lg leading-none">{pkg.name}</div>
                    <div className="text-white/80 text-xs font-body">{pkg.amount}</div>
                  </div>
                </div>
                <div className="bg-white p-5">
                  <ul className="space-y-2">
                    {pkg.perks.map((perk) => (
                      <li key={perk} className="flex items-start gap-2 text-xs font-body text-gray-600">
                        <span className="text-green-500 font-bold mt-0.5">✓</span>
                        {perk}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA Buttons */}
        <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={viewportConfig} className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a href="/contact" className="btn-orange text-base">
            Become a Partner <ArrowRightIcon size={16} />
          </a>
          <a href="/contact" className="btn-primary text-base">
            Download Partnership Brochure
          </a>
        </motion.div>
      </div>
    </section>
  );
}
