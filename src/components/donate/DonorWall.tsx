"use client";

import { motion } from "framer-motion";
import { fadeUp, staggerContainer, viewportConfig } from "@/lib/animations";

const donors = {
  top: [
    { name: "Chukwuemeka Nwosu", type: "Individual", badge: "Platinum Donor", amount: "₦500,000+", anonymous: false },
    { name: "FintechNigeria Ltd.", type: "Corporate", badge: "Gold Partner", amount: "₦1,000,000+", anonymous: false },
    { name: "First Baptist Church Enugu", type: "Faith Community", badge: "Silver Partner", amount: "₦250,000+", anonymous: false },
    { name: "Anonymous Donor", type: "Individual", badge: "Champion", amount: "₦200,000+", anonymous: true },
    { name: "Sunrise Academy PTA", type: "School", badge: "Supporter", amount: "₦100,000+", anonymous: false },
    { name: "Women of Purpose NGO", type: "Organization", badge: "Partner", amount: "₦75,000+", anonymous: false },
  ],
  recent: [
    { name: "T. Adeyemi", amount: "₦25,000", time: "2 hours ago" },
    { name: "Kelechi O.", amount: "₦10,000", time: "5 hours ago" },
    { name: "Anonymous", amount: "₦50,000", time: "Yesterday" },
    { name: "M. Abdullahi", amount: "₦5,000", time: "Yesterday" },
    { name: "Sunrise Group", amount: "₦100,000", time: "2 days ago" },
    { name: "J. Okonkwo", amount: "₦15,000", time: "3 days ago" },
  ],
};

const recognitionLevels = [
  { badge: "Friend", threshold: "₦1,000 – ₦9,999" },
  { badge: "Supporter", threshold: "₦10,000 – ₦49,999" },
  { badge: "Champion", threshold: "₦50,000 – ₦99,999" },
  { badge: "Silver", threshold: "₦100,000 – ₦249,999" },
  { badge: "Gold", threshold: "₦250,000 – ₦499,999" },
  { badge: "Platinum", threshold: "₦500,000+" },
];

export default function DonorWall() {
  return (
    <section className="section-padding bg-[#FFFFFF] relative overflow-hidden" aria-label="Donor wall">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={viewportConfig} className="text-center mb-14">
          <motion.span variants={fadeUp} className="text-sm font-semibold uppercase tracking-wide text-[#142E56] mb-4">
            Hall of Generosity
          </motion.span>
          <motion.h2 variants={fadeUp} className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-[#111827] mb-5">
            Our Beloved{" "}
            <span className="text-[#1A3A6B]">Donor Community</span>
          </motion.h2>
          <motion.p variants={fadeUp} className="text-gray-600 font-body text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
            We celebrate every generous soul who has helped us put shoes on children&apos;s feet. Thank you for making this mission possible.
          </motion.p>
        </motion.div>

        {/* Recognition Levels */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 mb-12"
        >
          {recognitionLevels.map((level) => (
            <motion.div
              key={level.badge}
              variants={fadeUp}
              className="rounded-lg bg-white p-4 text-center shadow-sm"
            >
              <div className="font-heading font-bold text-sm text-[#1A3A6B]">{level.badge}</div>
              <div className="text-[10px] text-gray-500 font-body mt-1">{level.threshold}</div>
            </motion.div>
          ))}
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-10">
          {/* Top Donors */}
          <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={viewportConfig}>
            <motion.h3 variants={fadeUp} className="font-heading font-bold text-xl text-[#111827] mb-5">
              Featured Donors
            </motion.h3>
            <div className="space-y-3">
              {donors.top.map((donor, i) => (
                <motion.div
                  key={i}
                  variants={fadeUp}
                  className="flex items-center gap-4 rounded-lg bg-white p-4 shadow-sm"
                >
                  <div className="flex-1 min-w-0">
                    <div className="font-heading font-bold text-base text-[#111827] truncate">{donor.name}</div>
                    <div className="text-xs text-gray-500 font-body">{donor.type} · {donor.badge}</div>
                  </div>
                  <div className="text-right flex-shrink-0">
                    <div className="font-heading font-bold text-sm text-forest-green">{donor.amount}</div>
                    <div className="text-[10px] text-gray-400 font-body">contributed</div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Recent Donors */}
          <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={viewportConfig}>
            <motion.h3 variants={fadeUp} className="font-heading font-bold text-xl text-[#111827] mb-5">
              Recent Donations
            </motion.h3>
            <div className="space-y-3">
              {donors.recent.map((donor, i) => (
                <motion.div
                  key={i}
                  variants={fadeUp}
                  className="flex items-center gap-4 rounded-lg bg-white p-4 shadow-sm"
                >
                  <div className="flex-1 min-w-0">
                    <div className="font-heading font-bold text-sm text-[#111827]">{donor.name}</div>
                    <div className="text-xs text-gray-400 font-body">{donor.time}</div>
                  </div>
                  <div className="font-heading font-bold text-base text-[#142E56] flex-shrink-0">{donor.amount}</div>
                </motion.div>
              ))}
            </div>

            {/* Join the wall CTA */}
            <motion.div variants={fadeUp} className="mt-6 rounded-lg bg-white p-5 text-center shadow-sm">
              <p className="text-sm text-gray-600 font-body mb-3">Join our growing community of generous hearts</p>
              <a href="#donate-widget" className="btn-primary text-sm py-3 px-6 justify-center w-full">
                Add Your Name to the Wall
              </a>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
