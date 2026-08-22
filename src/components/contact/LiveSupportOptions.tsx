"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { fadeUp, staggerContainer, viewportConfig } from "@/lib/animations";
import { PhoneIcon, MailIcon, ArrowRightIcon, CheckIcon, XIcon } from "@/components/ui/Icons";

const supportChannels = [
  {
    id: "whatsapp",
    title: "WhatsApp Live Chat",
    description: "Chat with a support agent instantly on WhatsApp for quick answers and guidance.",
    icon: "💬",
    cta: "Chat on WhatsApp",
    href: "https://wa.me/2348140009988",
    badge: "Instant",
    color: "bg-[#15803d]",
    bg: "bg-[#15803d]",
    border: "border-green-100",
  },
  {
    id: "callback",
    title: "Request a Call Back",
    description: "Leave your number and we'll call you back at your preferred date and time.",
    icon: "📞",
    cta: "Request Call Back",
    action: "callback-modal",
    badge: "Free Call",
    color: "bg-[#f97316]",
    bg: "bg-orange-50",
    border: "border-orange-100",
  },
  {
    id: "meeting",
    title: "Schedule Virtual Meeting",
    description: "Book a 15-minute video call with our partnerships team or volunteer leads.",
    icon: "💻",
    cta: "Book Video Call",
    href: "#visit-office",
    badge: "1-on-1",
    color: "bg-[#2563eb]",
    bg: "bg-blue-50",
    border: "border-blue-100",
  },
  {
    id: "email",
    title: "Email Support Desk",
    description: "Send detailed enquiries with documents or attachments directly to our support inbox.",
    icon: "✉️",
    cta: "Email Support",
    href: "mailto:hello@shoemyfeet.org",
    badge: "< 4hrs Reply",
    color: "bg-[#2563eb]",
    bg: "bg-purple-50",
    border: "border-purple-100",
  },
];

export default function LiveSupportOptions() {
  const [showCallBackModal, setShowCallBackModal] = useState(false);
  const [callbackSuccess, setCallbackSuccess] = useState(false);
  const [callbackData, setCallbackData] = useState({ name: "", phone: "", topic: "General Enquiry" });

  const handleCallbackSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setCallbackSuccess(true);
    setTimeout(() => {
      setCallbackSuccess(false);
      setShowCallBackModal(false);
    }, 2500);
  };

  return (
    <section className="section-padding bg-[#2563eb] relative overflow-hidden" aria-label="Live support options">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          className="text-center mb-14"
        >
          <motion.span variants={fadeUp} className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-100 border border-green-200 text-forest-green font-bold text-sm mb-4">
            🎧 Live Assistance
          </motion.span>
          <motion.h2 variants={fadeUp} className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1a1a2e] mb-4">
            Interactive <span className="text-royal-blue">Support Options</span>
          </motion.h2>
          <motion.p variants={fadeUp} className="text-gray-600 font-body text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
            Need real-time help? Connect with our team through any of our live support channels.
          </motion.p>
        </motion.div>

        {/* Support Grid */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {supportChannels.map((chan, index) => (
            <motion.div
              key={chan.title}
              variants={fadeUp}
              custom={index}
              whileHover={{ y: -8, scale: 1.02 }}
              transition={{ type: "spring", stiffness: 280, damping: 22 }}
              className={`rounded-3xl p-6 border ${chan.border} chan.bg shadow-sm hover:shadow-xl transition-all flex flex-col justify-between relative overflow-hidden`}
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className={`w-12 h-12 rounded-2xl chan.color flex items-center justify-center text-2xl shadow-md text-white`}>
                    {chan.icon}
                  </div>
                  <span className="text-[10px] font-bold font-body px-2.5 py-1 rounded-full bg-white border border-gray-200 text-gray-700 shadow-xs">
                    {chan.badge}
                  </span>
                </div>

                <h3 className="font-heading font-bold text-lg text-[#1a1a2e] mb-2">{chan.title}</h3>
                <p className="text-xs text-gray-600 font-body leading-relaxed mb-6">{chan.description}</p>
              </div>

              <div className="pt-4 border-t border-black/5">
                {chan.action === "callback-modal" ? (
                  <button
                    onClick={() => setShowCallBackModal(true)}
                    className={`w-full py-3 px-4 rounded-2xl chan.color text-white font-bold font-body text-xs text-center inline-flex items-center justify-center gap-2 shadow-md hover:opacity-95 transition-all cursor-pointer`}
                  >
                    <span>{chan.cta}</span>
                    <ArrowRightIcon size={14} />
                  </button>
                ) : (
                  <a
                    href={chan.href}
                    className={`w-full py-3 px-4 rounded-2xl chan.color text-white font-bold font-body text-xs text-center inline-flex items-center justify-center gap-2 shadow-md hover:opacity-95 transition-all`}
                  >
                    <span>{chan.cta}</span>
                    <ArrowRightIcon size={14} />
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </motion.div>

      </div>

      {/* Call Back Request Modal */}
      <AnimatePresence>
        {showCallBackModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs"
            onClick={() => setShowCallBackModal(false)}
          >
            <motion.div
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-white rounded-4xl p-6 sm:p-8 max-w-md w-full shadow-2xl relative"
            >
              <button
                onClick={() => setShowCallBackModal(false)}
                className="absolute top-4 right-4 p-2 rounded-full text-gray-400 hover:text-gray-600 hover:bg-gray-100 transition-colors cursor-pointer"
              >
                <XIcon size={18} />
              </button>

              {!callbackSuccess ? (
                <form onSubmit={handleCallbackSubmit} className="space-y-4">
                  <div className="text-center mb-4">
                    <span className="text-3xl">📞</span>
                    <h3 className="font-heading font-bold text-2xl text-[#1a1a2e] mt-1">Request a Call Back</h3>
                    <p className="text-xs text-gray-500 font-body">We will call your phone line free of charge</p>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-gray-700 font-body mb-1">Your Name</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Obinna Johnson"
                      value={callbackData.name}
                      onChange={(e) => setCallbackData({ ...callbackData, name: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl border border-gray-200 font-body text-xs focus:outline-none focus:border-royal-blue"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-gray-700 font-body mb-1">Phone Number</label>
                    <input
                      type="tel"
                      required
                      placeholder="+234 800 000 0000"
                      value={callbackData.phone}
                      onChange={(e) => setCallbackData({ ...callbackData, phone: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl border border-gray-200 font-body text-xs focus:outline-none focus:border-royal-blue"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-gray-700 font-body mb-1">Topic to Discuss</label>
                    <select
                      value={callbackData.topic}
                      onChange={(e) => setCallbackData({ ...callbackData, topic: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl border border-gray-200 font-body text-xs focus:outline-none focus:border-royal-blue"
                    >
                      <option value="General Enquiry">General Enquiry</option>
                      <option value="Volunteering">Volunteering Opportunities</option>
                      <option value="Donations & Grants">Donations & Grants</option>
                      <option value="Corporate CSR">Corporate CSR Partnership</option>
                      <option value="School Outreach">School Shoe Outreach</option>
                    </select>
                  </div>

                  <button type="submit" className="w-full btn-orange py-3 text-xs justify-center cursor-pointer">
                    Submit Call Back Request
                  </button>
                </form>
              ) : (
                <div className="text-center py-6 space-y-3">
                  <div className="w-16 h-16 rounded-full bg-green-100 text-green-600 flex items-center justify-center mx-auto text-2xl">
                    <CheckIcon size={32} />
                  </div>
                  <h4 className="font-heading font-bold text-xl text-[#1a1a2e]">Call Request Received!</h4>
                  <p className="text-xs text-gray-600 font-body">
                    Our team will call <strong>{callbackData.phone}</strong> shortly. Thank you!
                  </p>
                </div>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </section>
  );
}
