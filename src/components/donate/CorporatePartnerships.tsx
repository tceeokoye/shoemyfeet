"use client";

import { motion } from "framer-motion";
import { fadeUp, staggerContainer, viewportConfig } from "@/lib/animations";

const benefits = [
  { title: "CSR Impact Reports", description: "Detailed quarterly reports showing the direct impact of your investment on children and communities." },
  { title: "Employee Giving Programs", description: "Engage your team with structured giving campaigns, volunteer days, and matching gift opportunities." },
  { title: "Matching Gift Programs", description: "Double your impact by matching employee donations — a powerful way to maximize community benefit." },
  { title: "Sponsorship Packages", description: "Tailored packages from community event sponsorship to full school outreach campaigns." },
  { title: "Brand Visibility", description: "Your logo on outreach materials, social media recognition, and website listing as an impact partner." },
  { title: "Community Impact", description: "Build genuine goodwill in Nigerian communities and align your brand with a mission that matters." },
];

const packages = [
  {
    name: "Community Friend",
    amount: "₦100,000 – ₦249,999",
    perks: ["Logo on event materials", "Social media mention", "Impact certificate", "Quarterly report"],
  },
  {
    name: "Silver Partner",
    amount: "₦250,000 – ₦499,999",
    perks: ["All Community Friend perks", "Website logo placement", "Employee volunteer day", "Custom impact story"],
    featured: false,
  },
  {
    name: "Gold Champion",
    amount: "₦500,000 – ₦999,999",
    perks: ["All Silver perks", "Sponsored outreach event", "Executive media feature", "Annual dinner invite"],
    featured: true,
  },
  {
    name: "Platinum Guardian",
    amount: "₦1,000,000+",
    perks: ["All Gold perks", "School naming rights", "Board observer seat", "National press coverage"],
  },
];

export default function CorporatePartnerships() {
  return (
    <section className="section-padding bg-white" aria-label="Corporate partnerships">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={viewportConfig} className="text-center mb-14">
          <motion.span variants={fadeUp} className="text-sm font-semibold uppercase tracking-wide text-[#142E56] mb-4">
            Corporate Giving
          </motion.span>
          <motion.h2 variants={fadeUp} className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-[#111827] mb-5">
            Partner With Us to{" "}
            <span className="text-[#1A3A6B]">Maximize Impact</span>
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
          {benefits.map((benefit) => (
            <motion.div
              key={benefit.title}
              variants={fadeUp}
              className="rounded-xl bg-white p-5 shadow-md"
            >
              <h3 className="font-heading font-bold text-lg text-[#111827] mb-2">{benefit.title}</h3>
              <p className="text-sm text-gray-600 font-body leading-relaxed">{benefit.description}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Sponsorship Packages */}
        <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={viewportConfig} className="mb-10">
          <h3 className="font-heading font-bold text-2xl text-[#111827] text-center mb-8">Partnership Packages</h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {packages.map((pkg, i) => (
              <motion.div
                key={pkg.name}
                variants={fadeUp}
                custom={i}
                className="rounded-xl bg-white p-5 shadow-md"
              >
                {pkg.featured && <p className="text-xs font-semibold uppercase tracking-wide text-[#142E56] mb-2">Most Popular</p>}
                <div className="mb-4">
                  <div className="font-heading font-bold text-[#111827] text-lg leading-none">{pkg.name}</div>
                  <div className="text-gray-500 text-xs font-body mt-2">{pkg.amount}</div>
                </div>
                <ul className="space-y-2">
                  {pkg.perks.map((perk) => (
                    <li key={perk} className="text-xs font-body text-gray-600">{perk}</li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA Buttons */}
        <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={viewportConfig} className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a href="/contact" className="btn-primary text-base">
            Become a Partner
          </a>
          <a href="/contact" className="btn-secondary text-base">
            Download Partnership Brochure
          </a>
        </motion.div>
      </div>
    </section>
  );
}
