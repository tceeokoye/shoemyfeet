"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { fadeUp, staggerContainer, viewportConfig } from "@/lib/animations";
import { CheckIcon, ArrowRightIcon, HeartIcon } from "@/components/ui/Icons";

type Frequency = "one-time" | "monthly" | "quarterly" | "annually";

const frequencies: { id: Frequency; label: string; badge?: string }[] = [
  { id: "one-time", label: "One-Time" },
  { id: "monthly", label: "Monthly", badge: "Most Popular" },
  { id: "quarterly", label: "Quarterly" },
  { id: "annually", label: "Annually", badge: "Max Impact" },
];

const presetAmounts = [
  { amount: 5000,   label: "₦5,000",   impact: "Provides 1 pair of quality shoes for a child", icon: "👟" },
  { amount: 10000,  label: "₦10,000",  impact: "Supports 2 children with shoes & school supplies", icon: "🎒" },
  { amount: 25000,  label: "₦25,000",  impact: "Supports 5 children — a full classroom row", icon: "🏫" },
  { amount: 50000,  label: "₦50,000",  impact: "Equips 10 children for an entire school year", icon: "📚" },
  { amount: 100000, label: "₦100,000", impact: "Sponsors an entire school outreach event", icon: "🌟" },
  { amount: 0,      label: "Custom",    impact: "Choose your own meaningful contribution", icon: "💝", custom: true },
];

const paymentMethods = [
  { id: "card",        label: "Card",          icon: "💳" },
  { id: "bank",        label: "Bank Transfer",  icon: "🏦" },
  { id: "ussd",        label: "USSD",           icon: "📱" },
  { id: "paystack",    label: "Paystack",       icon: "🔵" },
  { id: "flutterwave", label: "Flutterwave",    icon: "🟠" },
  { id: "paypal",      label: "PayPal",         icon: "🔷" },
];

const FREQUENCY_MULTIPLIER: Record<Frequency, number> = {
  "one-time": 1,
  monthly: 12,
  quarterly: 4,
  annually: 1,
};

export default function DonateWidget() {
  const [step, setStep] = useState<1 | 2 | 3>(1);
  const [frequency, setFrequency] = useState<Frequency>("one-time");
  const [selectedAmount, setSelectedAmount] = useState<number>(25000);
  const [customAmount, setCustomAmount] = useState("");
  const [isCustom, setIsCustom] = useState(false);
  const [paymentMethod, setPaymentMethod] = useState("paystack");
  const [isAnonymous, setIsAnonymous] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [form, setForm] = useState({
    fullName: "", email: "", phone: "", country: "Nigeria", state: "",
    dedication: "", message: "",
  });

  const finalAmount = isCustom ? (parseInt(customAmount) || 0) : selectedAmount;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  const formatAmount = (amt: number) =>
    `₦${amt.toLocaleString("en-NG")}`;

  const annualTotal = finalAmount * FREQUENCY_MULTIPLIER[frequency];

  return (
    <section id="donate-widget" className="section-padding bg-[#1a3a6b] relative overflow-hidden" aria-label="Make a donation">
      {/* Decorative background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-80 h-80 rounded-full opacity-10 blur-3xl bg-[#1a3a6b]" />
        <div className="absolute bottom-0 left-0 w-72 h-72 rounded-full opacity-10 blur-3xl bg-[#1a3a6b]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={viewportConfig} className="text-center mb-14">
          <motion.span variants={fadeUp} className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-100 border border-blue-200 text-royal-blue font-bold text-sm mb-4">
            💙 Make a Donation
          </motion.span>
          <motion.h2 variants={fadeUp} className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1a1a2e] mb-5">
            Give a Child{" "}
            <span className="text-royal-blue">Their Next Step</span>
          </motion.h2>
          <motion.p variants={fadeUp} className="text-gray-600 font-body text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
            Choose your giving amount and frequency. Every donation is 100% secure and goes directly to children who need it most.
          </motion.p>
        </motion.div>

        {!isSubmitted ? (
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={viewportConfig}
            className="max-w-3xl mx-auto"
          >
            <div className="bg-white rounded-4xl shadow-2xl shadow-blue-900/8 border border-gray-100 overflow-hidden">
              {/* Step Indicator */}
              <div className="bg-[#1a3a6b] px-6 py-5">
                <div className="flex items-center gap-3 justify-center">
                  {[1, 2, 3].map((s) => (
                    <div key={s} className="flex items-center gap-3">
                      <motion.div
                        animate={{
                          scale: step === s ? 1.1 : 1,
                          backgroundColor: step > s ? "#22c55e" : step === s ? "#f97316" : "rgba(255,255,255,0.2)",
                        }}
                        className="w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold text-white border-2 border-white/30"
                      >
                        {step > s ? <CheckIcon size={14} className="text-white" /> : s}
                      </motion.div>
                      <span className={`text-xs font-body font-semibold hidden sm:block ${step === s ? "text-white" : "text-white/60"}`}>
                        {s === 1 ? "Choose Amount" : s === 2 ? "Your Details" : "Payment"}
                      </span>
                      {s < 3 && <div className="w-8 sm:w-12 h-px bg-white/20" />}
                    </div>
                  ))}
                </div>
              </div>

              <div className="p-6 sm:p-8">
                <AnimatePresence mode="wait">
                  {step === 1 && (
                    <motion.div
                      key="step1"
                      initial={{ opacity: 0, x: 30 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -30 }}
                      transition={{ duration: 0.3 }}
                      className="space-y-6"
                    >
                      {/* Frequency Toggle */}
                      <div>
                        <label className="block text-sm font-bold text-[#1a1a2e] font-body mb-3">Donation Frequency</label>
                        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                          {frequencies.map((freq) => (
                            <motion.button
                              key={freq.id}
                              whileHover={{ scale: 1.03 }}
                              whileTap={{ scale: 0.97 }}
                              onClick={() => setFrequency(freq.id)}
                              className={`relative px-3 py-3 rounded-2xl text-sm font-bold font-body border-2 transition-all text-center cursor-pointer ${
                                frequency === freq.id
                                  ? "bg-[#1a3a6b] text-white border-royal-blue shadow-lg shadow-blue-900/20"
                                  : "bg-gray-50 text-gray-600 border-gray-200 hover:border-royal-blue/40"
                              }`}
                            >
                              {freq.label}
                              {freq.badge && (
                                <span className={`absolute -top-2 left-1/2 -translate-x-1/2 text-[9px] px-2 py-0.5 rounded-full font-bold whitespace-nowrap ${
                                  frequency === freq.id ? "bg-warm-orange text-white" : "bg-amber-100 text-amber-700"
                                }`}>
                                  {freq.badge}
                                </span>
                              )}
                            </motion.button>
                          ))}
                        </div>
                      </div>

                      {/* Amount Cards */}
                      <div>
                        <label className="block text-sm font-bold text-[#1a1a2e] font-body mb-3">Select Amount</label>
                        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                          {presetAmounts.map((preset) => {
                            const isSelected = preset.custom ? isCustom : (!isCustom && selectedAmount === preset.amount);
                            return (
                              <motion.button
                                key={preset.label}
                                whileHover={{ y: -4, scale: 1.02 }}
                                whileTap={{ scale: 0.97 }}
                                onClick={() => {
                                  if (preset.custom) {
                                    setIsCustom(true);
                                  } else {
                                    setIsCustom(false);
                                    setSelectedAmount(preset.amount);
                                  }
                                }}
                                className={`relative rounded-2xl p-4 text-left border-2 transition-all cursor-pointer group ${
                                  isSelected
                                    ? "bg-[#1a3a6b] border-warm-orange shadow-lg shadow-orange-500/15"
                                    : "bg-gray-50 border-gray-100 hover:border-orange-200"
                                }`}
                              >
                                {isSelected && (
                                  <motion.div
                                    layoutId="selectedAmountIndicator"
                                    className="absolute top-2.5 right-2.5 w-5 h-5 rounded-full bg-warm-orange flex items-center justify-center"
                                    initial={{ scale: 0 }}
                                    animate={{ scale: 1 }}
                                  >
                                    <CheckIcon size={11} className="text-white" />
                                  </motion.div>
                                )}
                                <div className="text-lg mb-1">{preset.icon}</div>
                                <div className={`font-heading font-bold text-lg mb-1 ${isSelected ? "text-warm-orange-dark" : "text-[#1a1a2e]"}`}>
                                  {preset.label}
                                </div>
                                <div className="text-[11px] text-gray-500 font-body leading-tight">{preset.impact}</div>
                              </motion.button>
                            );
                          })}
                        </div>

                        {/* Custom Amount Input */}
                        <AnimatePresence>
                          {isCustom && (
                            <motion.div
                              initial={{ opacity: 0, height: 0 }}
                              animate={{ opacity: 1, height: "auto" }}
                              exit={{ opacity: 0, height: 0 }}
                              className="mt-4"
                            >
                              <div className="relative">
                                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 font-bold font-body text-lg">₦</span>
                                <input
                                  type="number"
                                  value={customAmount}
                                  onChange={(e) => setCustomAmount(e.target.value)}
                                  placeholder="Enter your amount"
                                  className="w-full pl-8 pr-4 py-4 rounded-2xl border-2 border-warm-orange bg-orange-50/30 font-body font-bold text-xl text-[#1a1a2e] focus:outline-none focus:ring-2 focus:ring-warm-orange/30"
                                />
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>

                      {/* Summary */}
                      {finalAmount > 0 && (
                        <motion.div
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          className="bg-[#1a3a6b] rounded-2xl p-4 border border-blue-100"
                        >
                          <div className="flex items-center justify-between">
                            <div>
                              <div className="text-sm text-gray-500 font-body font-medium">Your {frequency} donation</div>
                              <div className="font-heading font-bold text-2xl text-royal-blue">{formatAmount(finalAmount)}</div>
                            </div>
                            {frequency !== "one-time" && (
                              <div className="text-right">
                                <div className="text-sm text-gray-500 font-body font-medium">Annual total</div>
                                <div className="font-heading font-bold text-lg text-forest-green">{formatAmount(annualTotal)}</div>
                              </div>
                            )}
                          </div>
                        </motion.div>
                      )}

                      <motion.button
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        onClick={() => finalAmount > 0 && setStep(2)}
                        disabled={finalAmount <= 0}
                        className="w-full btn-orange py-4 text-base justify-center disabled:opacity-50 disabled:cursor-not-allowed"
                      >
                        <HeartIcon size={18} className="fill-white text-white" />
                        Continue to Details
                        <ArrowRightIcon size={16} />
                      </motion.button>
                    </motion.div>
                  )}

                  {step === 2 && (
                    <motion.div
                      key="step2"
                      initial={{ opacity: 0, x: 30 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -30 }}
                      transition={{ duration: 0.3 }}
                      className="space-y-5"
                    >
                      <div className="p-3 rounded-2xl bg-orange-50 border border-orange-100 flex items-center justify-between">
                        <div className="text-sm font-body font-semibold text-gray-600">Donating <span className="text-warm-orange-dark font-bold">{formatAmount(finalAmount)}</span> ({frequency})</div>
                        <button onClick={() => setStep(1)} className="text-xs text-royal-blue font-bold font-body hover:underline cursor-pointer">Change</button>
                      </div>

                      {/* Anonymous toggle */}
                      <div className="flex items-center gap-3 p-4 rounded-2xl bg-gray-50 border border-gray-100">
                        <button
                          onClick={() => setIsAnonymous(!isAnonymous)}
                          className={`relative w-12 h-6 rounded-full transition-colors cursor-pointer ${isAnonymous ? "bg-royal-blue" : "bg-gray-300"}`}
                        >
                          <motion.span
                            animate={{ x: isAnonymous ? 24 : 2 }}
                            className="absolute top-1 w-4 h-4 rounded-full bg-white shadow-sm"
                          />
                        </button>
                        <span className="text-sm text-gray-600 font-body font-medium">Make this an anonymous donation</span>
                      </div>

                      {!isAnonymous && (
                        <div className="grid sm:grid-cols-2 gap-4">
                          {[
                            { key: "fullName", label: "Full Name", type: "text", placeholder: "Chioma Obi", required: true },
                            { key: "email", label: "Email Address", type: "email", placeholder: "chioma@email.com", required: true },
                            { key: "phone", label: "Phone Number", type: "tel", placeholder: "+234 801 234 5678" },
                            { key: "state", label: "State", type: "text", placeholder: "Lagos" },
                          ].map((field) => (
                            <div key={field.key} className={field.key === "fullName" || field.key === "email" ? "" : ""}>
                              <label className="block text-xs font-bold text-gray-600 font-body mb-1.5">{field.label}{field.required && <span className="text-red-500 ml-0.5">*</span>}</label>
                              <input
                                type={field.type}
                                placeholder={field.placeholder}
                                value={form[field.key as keyof typeof form]}
                                onChange={(e) => setForm({ ...form, [field.key]: e.target.value })}
                                className="w-full px-4 py-3 rounded-2xl border-2 border-gray-100 bg-gray-50 font-body text-sm text-[#1a1a2e] focus:outline-none focus:border-royal-blue/50 focus:bg-white transition-all"
                              />
                            </div>
                          ))}
                        </div>
                      )}

                      {/* Dedication */}
                      <div>
                        <label className="block text-xs font-bold text-gray-600 font-body mb-1.5">Dedication (Optional) — donate in honor of someone</label>
                        <input
                          type="text"
                          placeholder="e.g. In memory of Grandma Ada..."
                          value={form.dedication}
                          onChange={(e) => setForm({ ...form, dedication: e.target.value })}
                          className="w-full px-4 py-3 rounded-2xl border-2 border-gray-100 bg-gray-50 font-body text-sm text-[#1a1a2e] focus:outline-none focus:border-royal-blue/50 focus:bg-white transition-all"
                        />
                      </div>

                      {/* Message */}
                      <div>
                        <label className="block text-xs font-bold text-gray-600 font-body mb-1.5">Message of Encouragement (Optional)</label>
                        <textarea
                          rows={3}
                          placeholder="Share a word of encouragement for the children..."
                          value={form.message}
                          onChange={(e) => setForm({ ...form, message: e.target.value })}
                          className="w-full px-4 py-3 rounded-2xl border-2 border-gray-100 bg-gray-50 font-body text-sm text-[#1a1a2e] focus:outline-none focus:border-royal-blue/50 focus:bg-white transition-all resize-none"
                        />
                      </div>

                      <div className="flex gap-3">
                        <button onClick={() => setStep(1)} className="flex-1 py-4 rounded-2xl border-2 border-gray-200 text-gray-600 font-bold font-body text-base hover:bg-gray-50 transition-all cursor-pointer">
                          ← Back
                        </button>
                        <motion.button
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                          onClick={() => setStep(3)}
                          className="flex-2 w-full btn-orange py-4 text-base justify-center"
                        >
                          Continue to Payment <ArrowRightIcon size={16} />
                        </motion.button>
                      </div>
                    </motion.div>
                  )}

                  {step === 3 && (
                    <motion.div
                      key="step3"
                      initial={{ opacity: 0, x: 30 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -30 }}
                      transition={{ duration: 0.3 }}
                      className="space-y-5"
                    >
                      <div className="p-3 rounded-2xl bg-orange-50 border border-orange-100 flex items-center justify-between">
                        <div className="text-sm font-body font-semibold text-gray-600">Donating <span className="text-warm-orange-dark font-bold">{formatAmount(finalAmount)}</span> ({frequency})</div>
                        <button onClick={() => setStep(1)} className="text-xs text-royal-blue font-bold font-body hover:underline cursor-pointer">Change</button>
                      </div>

                      <label className="block text-sm font-bold text-[#1a1a2e] font-body">Choose Payment Method</label>
                      <div className="grid grid-cols-3 gap-3">
                        {paymentMethods.map((pm) => (
                          <motion.button
                            key={pm.id}
                            whileHover={{ y: -3, scale: 1.04 }}
                            whileTap={{ scale: 0.96 }}
                            onClick={() => setPaymentMethod(pm.id)}
                            className={`p-4 rounded-2xl border-2 font-body text-sm font-bold transition-all text-center cursor-pointer flex flex-col items-center gap-1 ${
                              paymentMethod === pm.id
                                ? "bg-[#1a3a6b] border-royal-blue text-royal-blue shadow-md shadow-blue-900/10"
                                : "bg-gray-50 border-gray-100 text-gray-600 hover:border-gray-200"
                            }`}
                          >
                            <span className="text-2xl">{pm.icon}</span>
                            <span className="text-xs">{pm.label}</span>
                          </motion.button>
                        ))}
                      </div>

                      {/* Security badges */}
                      <div className="flex flex-wrap gap-2 justify-center py-2">
                        {["🔒 SSL Encrypted", "✅ PCI Compliant", "🛡️ Fraud Protected"].map((badge) => (
                          <span key={badge} className="text-xs text-gray-500 font-body bg-gray-50 border border-gray-100 rounded-full px-3 py-1">{badge}</span>
                        ))}
                      </div>

                      {/* Final summary */}
                      <div className="bg-[#1a3a6b] rounded-2xl p-5 border border-green-100">
                        <div className="flex items-center gap-2 mb-3">
                          <span className="text-xl">🎉</span>
                          <span className="font-heading font-bold text-green-700 text-lg">Ready to complete your gift</span>
                        </div>
                        <div className="space-y-1.5 text-sm font-body">
                          <div className="flex justify-between"><span className="text-gray-500">Amount</span><span className="font-bold text-[#1a1a2e]">{formatAmount(finalAmount)}</span></div>
                          <div className="flex justify-between"><span className="text-gray-500">Frequency</span><span className="font-bold text-[#1a1a2e] capitalize">{frequency}</span></div>
                          <div className="flex justify-between"><span className="text-gray-500">Payment</span><span className="font-bold text-[#1a1a2e]">{paymentMethods.find(p => p.id === paymentMethod)?.label}</span></div>
                          {!isAnonymous && form.fullName && <div className="flex justify-between"><span className="text-gray-500">Donor</span><span className="font-bold text-[#1a1a2e]">{form.fullName}</span></div>}
                        </div>
                      </div>

                      <div className="flex gap-3">
                        <button onClick={() => setStep(2)} className="px-6 py-4 rounded-2xl border-2 border-gray-200 text-gray-600 font-bold font-body text-base hover:bg-gray-50 transition-all cursor-pointer">
                          ← Back
                        </button>
                        <motion.button
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                          onClick={handleSubmit}
                          className="flex-1 btn-orange py-4 text-base justify-center"
                        >
                          <HeartIcon size={18} className="fill-white text-white" />
                          Complete Donation {formatAmount(finalAmount)}
                        </motion.button>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>
          </motion.div>
        ) : (
          /* Success Screen */
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ type: "spring", stiffness: 200, damping: 20 }}
            className="max-w-lg mx-auto text-center"
          >
            <div className="bg-white rounded-4xl shadow-2xl border border-green-100 p-10">
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ type: "spring", delay: 0.2, stiffness: 250, damping: 18 }}
                className="w-28 h-28 rounded-full bg-[#1a3a6b] flex items-center justify-center mx-auto mb-6 shadow-2xl shadow-green-500/30"
              >
                <span className="text-5xl">🎉</span>
              </motion.div>
              <motion.h3 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }} className="font-heading text-3xl font-bold text-[#1a1a2e] mb-3">
                Thank You So Much!
              </motion.h3>
              <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 }} className="text-gray-600 font-body leading-relaxed mb-6">
                Your donation of <strong className="text-forest-green">{formatAmount(finalAmount)}</strong> has been received. You&apos;ll receive a confirmation email and official receipt shortly.
              </motion.p>
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.6 }} className="space-y-3">
                <a href="/donate" onClick={() => { setIsSubmitted(false); setStep(1); }} className="btn-orange w-full justify-center py-4">
                  Donate Again
                </a>
                <a href="/" className="btn-primary w-full justify-center py-4">
                  Back to Home
                </a>
              </motion.div>
            </div>
          </motion.div>
        )}
      </div>
    </section>
  );
}
