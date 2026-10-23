"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { fadeUp, staggerContainer, viewportConfig } from "@/lib/animations";
import { DONATION_AMOUNTS } from "@/lib/constants";
import { HeartIcon, ArrowRightIcon, CheckIcon } from "@/components/ui/Icons";

export default function DonateSection() {
  const [selectedAmount, setSelectedAmount] = useState(100);
  const [customAmount, setCustomAmount] = useState("");
  const [isCustom, setIsCustom] = useState(false);

  const effectiveAmount = isCustom ? (parseFloat(customAmount) || 0) : selectedAmount;
  const shoesCount = Math.floor(effectiveAmount / 20);

  return (
    <section id="donate" className="section-padding bg-white overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <motion.div
          className="text-center max-w-3xl mx-auto mb-12"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
        >
          <motion.span variants={fadeUp} className="inline-block px-4 py-1.5 rounded-full bg-orange-100  text-[#1A3A6B]-dark text-sm font-bold mb-4 border border-orange-200">
            Make a Difference Today
          </motion.span>
          <motion.h2 variants={fadeUp} className="font-heading text-4xl sm:text-5xl font-bold text-[#111827] mb-4">
            Your Donation{" "}
            <span className="text-[#1A3A6B]">Changes Lives</span>
          </motion.h2>
          <motion.p variants={fadeUp} className="text-lg text-gray-600 font-body">
            Every dollar goes directly toward putting shoes on children&apos;s feet
            and building skills that last a lifetime.
          </motion.p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-10 items-start">

          {/* Donation Widget */}
          <motion.div
            className="bg-white rounded-2xl shadow-2xl border border-gray-100 overflow-hidden transform-gpu will-change-transform"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={viewportConfig}
          >
            {/* Top gradient bar */}
            <div className="h-2 bg-[#111827]" />

            <div className="p-8">
              <h3 className="font-heading text-xl font-bold text-[#111827] mb-6">
                Choose Your Impact Level
              </h3>

              {/* Preset amounts */}
              <div className="grid grid-cols-3 gap-3 mb-4">
                {DONATION_AMOUNTS.map((donation) => (
                  <motion.button
                    key={donation.amount}
                    onClick={() => { setSelectedAmount(donation.amount); setIsCustom(false); }}
                    className={`relative p-3  border-2 text-center transition-all font-body ${
                      !isCustom && selectedAmount === donation.amount
                        ? "border-[#111827] bg-slate-50 text-[#1A3A6B]"
                        : "border-gray-200 hover:border-slate-200 text-gray-700"
                    } ${donation.highlight ? "ring-2 ring-orange-400/30" : ""}`}
                    whileHover={{ y: -2 }}
                    whileTap={{ scale: 0.97 }}
                  >
                    {donation.highlight && (
                      <div className="absolute -top-2 left-1/2 -translate-x-1/2 px-2 py-0.5 rounded-full bg-[#111827] text-white text-[9px] font-bold whitespace-nowrap">
                        POPULAR
                      </div>
                    )}
                    <div className="text-lg mb-0.5">{donation.emoji}</div>
                    <div className="font-heading font-bold text-lg">${donation.amount}</div>
                    <div className="text-[10px] text-gray-500 leading-tight">{donation.impact}</div>
                    {!isCustom && selectedAmount === donation.amount && (
                      <div className="absolute top-2 right-2 w-4 h-4 rounded-full bg-[#111827] flex items-center justify-center">
                        <CheckIcon size={10} className="text-white" />
                      </div>
                    )}
                  </motion.button>
                ))}
              </div>

              {/* Custom amount */}
              <button
                onClick={() => setIsCustom(true)}
                className={`w-full py-3 rounded-xl border-2 text-sm font-bold transition-all font-body mb-6 ${
                  isCustom
                    ? "border-[#111827] bg-slate-50 text-[#1A3A6B]"
                    : "border-dashed border-gray-200 text-gray-500 hover:border-slate-200"
                }`}
              >
                {isCustom ? (
                  <input
                    type="number"
                    className="w-full text-center bg-transparent outline-none text-[#1A3A6B] font-heading text-lg"
                    placeholder="Enter custom amount ($)"
                    value={customAmount}
                    onChange={(e) => setCustomAmount(e.target.value)}
                    autoFocus
                  />
                ) : (
                  "+ Custom Amount"
                )}
              </button>

              {/* Impact Calculator */}
              {effectiveAmount > 0 && (
                <motion.div
                  className="bg-[#111827]  p-4 mb-6 border border-slate-100"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                >
                  <p className="text-sm text-gray-600 font-body mb-2">Your ${effectiveAmount} impact:</p>
                  <div className="flex items-center gap-2 flex-wrap">
                    <div className="font-heading font-bold text-2xl text-[#1A3A6B]">
                      {shoesCount}
                    </div>
                    <div className="text-sm text-gray-600 font-body">
                      {shoesCount === 1 ? "pair of shoes" : "pairs of shoes"}
                      {shoesCount > 0 ? ` for ${shoesCount} ${shoesCount === 1 ? "child" : "children"}` : ""}
                    </div>
                    <div className="flex gap-1 flex-wrap">
                      {[...Array(Math.min(shoesCount, 10))].map((_, i) => (
                        <motion.span
                          key={i}
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          transition={{ delay: i * 0.05, type: "spring" }}
                          className="text-lg"
                        >
                          👟
                        </motion.span>
                      ))}
                      {shoesCount > 10 && (
                        <span className="text-sm text-gray-500 font-body">+{shoesCount - 10} more</span>
                      )}
                    </div>
                  </div>
                </motion.div>
              )}

              {/* Donate button */}
              <motion.button
                className="w-full btn-primary py-4 text-base justify-center  shadow-xl"
                whileHover={{ y: -2, scale: 1.01 }}
                whileTap={{ scale: 0.98 }}
              >
                Donate ${effectiveAmount || 0} Now
                <ArrowRightIcon size={16} />
              </motion.button>

              {/* Trust signals */}
              <div className="flex items-center justify-center gap-4 mt-4 text-xs text-gray-400 font-body">
                <span className="flex items-center gap-1">🔒 Secure payment</span>
                <span>·</span>
                <span className="flex items-center gap-1">🧾 Tax receipt</span>
                <span>·</span>
                <span className="flex items-center gap-1">✅ CAC registered</span>
              </div>
            </div>
          </motion.div>

          {/* Right side: Why donate */}
          <motion.div
            className="flex flex-col gap-6"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={viewportConfig}
          >
            <motion.div variants={fadeUp}>
              <h3 className="font-heading text-2xl font-bold text-[#111827] mb-4">
                Where Your Money Goes
              </h3>
            </motion.div>

            {[
              { pct: "85%", label: "Direct Program Costs", desc: "Shoes, training materials, community outreach", color: "bg-[#111827]", width: "85%" },
              { pct: "10%", label: "Operations", desc: "Coordination, volunteer management, logistics", color: "bg-[#1A3A6B]", width: "10%" },
              { pct: "5%", label: "Administration", desc: "Reporting, compliance, strategic growth", color: "bg-[#16A34A]", width: "5%" },
            ].map((item, i) => (
              <motion.div key={item.label} variants={fadeUp} className="group">
                <div className="flex items-center justify-between mb-1.5">
                  <span className="font-body font-semibold text-gray-700 text-sm">{item.label}</span>
                  <span className={`font-heading font-bold text-lg item.color bg-clip-text text-transparent`}>{item.pct}</span>
                </div>
                <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                  <motion.div
                    className={`h-full rounded-full item.color`}
                    initial={{ width: 0 }}
                    whileInView={{ width: item.width }}
                    viewport={viewportConfig}
                    transition={{ duration: 1, delay: i * 0.15, ease: [0.16, 1, 0.3, 1] }}
                  />
                </div>
                <p className="text-xs text-gray-400 font-body mt-1">{item.desc}</p>
              </motion.div>
            ))}

            {/* Testimonial */}
            <motion.div
              variants={fadeUp}
              className="mt-4 bg-[#111827]  p-5 border border-slate-100"
            >
              <p className="font-body text-gray-700 text-sm italic leading-relaxed mb-3">
                &ldquo;Access Bank&apos;s partnership helped us distribute 1,000 pairs of shoes
                in a single outreach. The impact was immediate and visible — children
                were attending school who hadn&apos;t been before.&rdquo;
              </p>
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-[#111827] flex items-center justify-center">
                  <span className="text-white font-bold text-xs">AB</span>
                </div>
                <div>
                  <p className="font-body font-bold text-xs text-gray-800">Access Bank</p>
                  <p className="text-[10px] text-gray-400">CSR Partner, 2023</p>
                </div>
              </div>
            </motion.div>

            {/* Other ways to help */}
            <motion.div variants={fadeUp}>
              <p className="text-sm font-bold text-gray-500 font-body mb-3">Other ways to help:</p>
              <div className="flex flex-wrap gap-2">
                {["Volunteer", "Corporate Sponsor", "In-Kind Donation", "Share Our Story"].map((way) => (
                  <a
                    key={way}
                    href="#volunteer"
                    className="px-3 py-1.5 rounded-full border border-gray-200 text-xs font-bold text-gray-600 hover:border-[#111827] hover:text-[#1A3A6B] transition-all font-body"
                  >
                    {way}
                  </a>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
