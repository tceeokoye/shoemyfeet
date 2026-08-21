"use client";

import { motion } from "framer-motion";
import { fadeUp, staggerContainer, viewportConfig } from "@/lib/animations";

const donors = {
  top: [
    { name: "Chukwuemeka Nwosu", type: "Individual", badge: "🏆 Platinum Donor", amount: "₦500,000+", anonymous: false },
    { name: "FintechNigeria Ltd.", type: "Corporate", badge: "💼 Gold Partner", amount: "₦1,000,000+", anonymous: false },
    { name: "First Baptist Church Enugu", type: "Faith Community", badge: "⛪ Silver Partner", amount: "₦250,000+", anonymous: false },
    { name: "Anonymous Donor", type: "Individual", badge: "❤️ Champion", amount: "₦200,000+", anonymous: true },
    { name: "Sunrise Academy PTA", type: "School", badge: "🏫 Supporter", amount: "₦100,000+", anonymous: false },
    { name: "Women of Purpose NGO", type: "Organization", badge: "💜 Partner", amount: "₦75,000+", anonymous: false },
  ],
  recent: [
    { name: "T. Adeyemi", amount: "₦25,000", time: "2 hours ago", emoji: "👏" },
    { name: "Kelechi O.", amount: "₦10,000", time: "5 hours ago", emoji: "❤️" },
    { name: "Anonymous", amount: "₦50,000", time: "Yesterday", emoji: "🙏" },
    { name: "M. Abdullahi", amount: "₦5,000", time: "Yesterday", emoji: "👟" },
    { name: "Sunrise Group", amount: "₦100,000", time: "2 days ago", emoji: "🌟" },
    { name: "J. Okonkwo", amount: "₦15,000", time: "3 days ago", emoji: "💙" },
  ],
};

const recognitionLevels = [
  { badge: "🌱 Friend", threshold: "₦1,000 – ₦9,999", color: "bg-[#15803d]", border: "border-green-100", text: "text-green-700" },
  { badge: "⭐ Supporter", threshold: "₦10,000 – ₦49,999", color: "bg-[#1a3a6b]", border: "border-blue-100", text: "text-blue-700" },
  { badge: "🥈 Champion", threshold: "₦50,000 – ₦99,999", color: "bg-slate-700", border: "border-gray-200", text: "text-gray-700" },
  { badge: "🥇 Silver", threshold: "₦100,000 – ₦249,999", color: "bg-[#f59e0b]", border: "border-amber-100", text: "text-amber-700" },
  { badge: "💛 Gold", threshold: "₦250,000 – ₦499,999", color: "bg-[#f59e0b]", border: "border-yellow-200", text: "text-yellow-700" },
  { badge: "💎 Platinum", threshold: "₦500,000+", color: "bg-[#1a3a6b]", border: "border-indigo-100", text: "text-indigo-700" },
];

export default function DonorWall() {
  return (
    <section className="section-padding bg-[#1a3a6b] relative overflow-hidden" aria-label="Donor wall">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={viewportConfig} className="text-center mb-14">
          <motion.span variants={fadeUp} className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-amber-100 border border-amber-200 text-amber-700 font-bold text-sm mb-4">
            🏆 Hall of Generosity
          </motion.span>
          <motion.h2 variants={fadeUp} className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1a1a2e] mb-5">
            Our Beloved{" "}
            <span className="text-warm-orange">Donor Community</span>
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
          {recognitionLevels.map((level, i) => (
            <motion.div
              key={level.badge}
              variants={fadeUp}
              className={`rounded-2xl p-4 text-center border ${level.border} level.color`}
            >
              <div className="text-2xl mb-2">{level.badge.split(" ")[0]}</div>
              <div className={`font-heading font-bold text-sm ${level.text}`}>{level.badge.split(" ").slice(1).join(" ")}</div>
              <div className="text-[10px] text-gray-400 font-body mt-1">{level.threshold}</div>
            </motion.div>
          ))}
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-10">
          {/* Top Donors */}
          <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={viewportConfig}>
            <motion.h3 variants={fadeUp} className="font-heading font-bold text-xl text-[#1a1a2e] mb-5">
              🌟 Featured Donors
            </motion.h3>
            <div className="space-y-3">
              {donors.top.map((donor, i) => (
                <motion.div
                  key={i}
                  variants={fadeUp}
                  whileHover={{ x: 4, scale: 1.01 }}
                  className="flex items-center gap-4 p-4 rounded-2xl bg-white border border-gray-100 shadow-sm hover:shadow-md transition-all group"
                >
                  <div className="w-12 h-12 rounded-2xl bg-[#1a3a6b] border border-orange-100 flex items-center justify-center text-xl flex-shrink-0">
                    {donor.anonymous ? "🙈" : donor.type === "Corporate" ? "🏢" : donor.type === "Faith Community" ? "⛪" : donor.type === "School" ? "🏫" : "😊"}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="font-heading font-bold text-base text-[#1a1a2e] truncate">{donor.name}</div>
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
            <motion.h3 variants={fadeUp} className="font-heading font-bold text-xl text-[#1a1a2e] mb-5">
              ⏰ Recent Donations
            </motion.h3>
            <div className="space-y-3">
              {donors.recent.map((donor, i) => (
                <motion.div
                  key={i}
                  variants={fadeUp}
                  className="flex items-center gap-4 p-4 rounded-2xl bg-white border border-gray-100 shadow-sm hover:shadow-md transition-all"
                >
                  <div className="w-10 h-10 rounded-full bg-[#1a3a6b] flex items-center justify-center text-xl flex-shrink-0">
                    {donor.emoji}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="font-heading font-bold text-sm text-[#1a1a2e]">{donor.name}</div>
                    <div className="text-xs text-gray-400 font-body">{donor.time}</div>
                  </div>
                  <div className="font-heading font-bold text-base text-warm-orange-dark flex-shrink-0">{donor.amount}</div>
                </motion.div>
              ))}
            </div>

            {/* Join the wall CTA */}
            <motion.div variants={fadeUp} className="mt-6 p-5 rounded-2xl bg-[#1a3a6b] border border-orange-100 text-center">
              <p className="text-sm text-gray-600 font-body mb-3">Join our growing community of generous hearts</p>
              <a href="#donate-widget" className="btn-orange text-sm py-3 px-6 justify-center w-full">
                Add Your Name to the Wall ❤️
              </a>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
