"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { fadeUp, staggerContainer, viewportConfig } from "@/lib/animations";
import { CheckIcon, ArrowRightIcon, UploadIcon, XIcon } from "@/components/ui/Icons";

const subjectCategories = [
  "General Enquiry",
  "Volunteer",
  "Donation Support",
  "Partnership",
  "Media",
  "School Partnership",
  "Corporate Sponsorship",
  "Community Outreach",
  "Technical Support",
  "Other",
];

const preferredContactMethods = [
  { id: "email", label: "Email", icon: "✉️" },
  { id: "phone", label: "Phone Call", icon: "📞" },
  { id: "whatsapp", label: "WhatsApp", icon: "💬" },
];

const bestTimes = [
  { id: "morning", label: "Morning (8am – 12pm)" },
  { id: "afternoon", label: "Afternoon (12pm – 4pm)" },
  { id: "evening", label: "Evening (4pm – 6pm)" },
  { id: "anytime", label: "Anytime" },
];

export default function ContactFormSection() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    subject: "General Enquiry",
    message: "",
    preferredMethod: "email",
    bestTime: "morning",
  });

  const [attachments, setAttachments] = useState<{ name: string; size: string }[]>([]);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const maxChars = 1000;

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      const newFiles = Array.from(e.target.files).map((f) => ({
        name: f.name,
        size: (f.size / (1024 * 1024)).toFixed(2) + " MB",
      }));
      setAttachments((prev) => [...prev, ...newFiles]);
    }
  };

  const removeAttachment = (index: number) => {
    setAttachments((prev) => prev.filter((_, i) => i !== index));
  };

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!formData.fullName.trim()) errs.fullName = "Full name is required";
    if (!formData.email.trim()) {
      errs.email = "Email address is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errs.email = "Please enter a valid email address";
    }
    if (!formData.message.trim()) errs.message = "Message cannot be empty";
    else if (formData.message.length < 10) errs.message = "Message must be at least 10 characters";

    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 1500);
  };

  return (
    <section id="contact-form" className="section-padding bg-[#111827] relative overflow-hidden" aria-label="Send us a message">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          className="text-center mb-12"
        >
          <motion.span variants={fadeUp} className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange-100 border border-slate-200 text-[#1A3A6B] font-bold text-sm mb-4">
            📝 Send a Message
          </motion.span>
          <motion.h2 variants={fadeUp} className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-[#111827] mb-4">
            We&apos;d Love to <span className="text-[#1A3A6B]">Hear From You</span>
          </motion.h2>
          <motion.p variants={fadeUp} className="text-gray-600 font-body text-base sm:text-lg max-w-xl mx-auto leading-relaxed">
            Fill out the form below and our dedicated support team will get back to you promptly.
          </motion.p>
        </motion.div>

        {/* Form Container */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          className="bg-white rounded-4xl shadow-2xl shadow-blue-900/8 border border-gray-100 overflow-hidden"
        >
          {!isSubmitted ? (
            <form onSubmit={handleSubmit} className="p-6 sm:p-10 space-y-6">
              
              {/* Personal Information */}
              <div>
                <h3 className="font-heading font-bold text-lg text-[#111827] mb-4 flex items-center gap-2">
                  <span className="w-6 h-6 rounded-full bg-orange-100 text-[#1A3A6B]-dark flex items-center justify-center text-xs">1</span>
                  Personal Information
                </h3>

                <div className="grid sm:grid-cols-3 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-gray-700 font-body mb-1.5">
                      Full Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. Chukwuma Eze"
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      className={`w-full px-4 py-3  border-2 bg-gray-50 font-body text-sm text-[#111827] focus:outline-none transition-all ${
                        errors.fullName ? "border-red-400 bg-red-50/20" : "border-gray-100 focus:border-[#111827]/50 focus:bg-white"
                      }`}
                    />
                    {errors.fullName && <p className="text-xs text-red-500 font-body mt-1">{errors.fullName}</p>}
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-gray-700 font-body mb-1.5">
                      Email Address <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="email"
                      placeholder="chukwuma@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className={`w-full px-4 py-3  border-2 bg-gray-50 font-body text-sm text-[#111827] focus:outline-none transition-all ${
                        errors.email ? "border-red-400 bg-red-50/20" : "border-gray-100 focus:border-[#111827]/50 focus:bg-white"
                      }`}
                    />
                    {errors.email && <p className="text-xs text-red-500 font-body mt-1">{errors.email}</p>}
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-gray-700 font-body mb-1.5">Phone Number</label>
                    <input
                      type="tel"
                      placeholder="+234 800 000 0000"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-4 py-3  border-2 border-gray-100 bg-gray-50 font-body text-sm text-[#111827] focus:outline-none focus:border-[#111827]/50 focus:bg-white transition-all"
                    />
                  </div>
                </div>
              </div>

              {/* Subject Category */}
              <div>
                <h3 className="font-heading font-bold text-lg text-[#111827] mb-3 flex items-center gap-2">
                  <span className="w-6 h-6 rounded-full bg-orange-100 text-[#1A3A6B] flex items-center justify-center text-xs">2</span>
                  Subject Category
                </h3>

                <div className="grid grid-cols-2 sm:grid-cols-5 gap-2">
                  {subjectCategories.map((cat) => (
                    <button
                      key={cat}
                      type="button"
                      onClick={() => setFormData({ ...formData, subject: cat })}
                      className={`px-3 py-2.5 rounded-xl text-xs font-bold font-body border transition-all text-center cursor-pointer ${
                        formData.subject === cat
                          ? "bg-[#111827] text-white border-[#111827] shadow-md"
                          : "bg-gray-50 border-gray-100 text-gray-600 hover:border-gray-200"
                      }`}
                    >
                      {cat}
                    </button>
                  ))}
                </div>
              </div>

              {/* Message Area */}
              <div>
                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-heading font-bold text-lg text-[#111827] flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-green-100 text-forest-green flex items-center justify-center text-xs">3</span>
                    Your Message <span className="text-red-500 text-xs">*</span>
                  </h3>
                  <span className={`text-xs font-body ${formData.message.length > maxChars * 0.9 ? "text-red-500 font-bold" : "text-gray-400"}`}>
                    {formData.message.length} / {maxChars}
                  </span>
                </div>

                <textarea
                  rows={5}
                  maxLength={maxChars}
                  placeholder="Tell us how we can help or how you'd like to get involved..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className={`w-full px-4 py-3  border-2 bg-gray-50 font-body text-sm text-[#111827] focus:outline-none transition-all resize-none ${
                    errors.message ? "border-red-400 bg-red-50/20" : "border-gray-100 focus:border-[#111827]/50 focus:bg-white"
                  }`}
                />
                {errors.message && <p className="text-xs text-red-500 font-body mt-1">{errors.message}</p>}
              </div>

              {/* Preferences & Upload */}
              <div className="grid sm:grid-cols-2 gap-6 pt-2 border-t border-gray-100">
                {/* Contact Method */}
                <div>
                  <label className="block text-xs font-bold text-gray-700 font-body mb-2">Preferred Contact Method</label>
                  <div className="flex gap-2">
                    {preferredContactMethods.map((m) => (
                      <button
                        key={m.id}
                        type="button"
                        onClick={() => setFormData({ ...formData, preferredMethod: m.id })}
                        className={`flex-1 py-2 px-3 rounded-xl text-xs font-bold font-body border flex items-center justify-center gap-1.5 transition-all cursor-pointer ${
                          formData.preferredMethod === m.id
                            ? "bg-[#1A3A6B] text-white border-[#1A3A6B] shadow-sm"
                            : "bg-gray-50 text-gray-600 border-gray-100 hover:border-gray-200"
                        }`}
                      >
                        <span>{m.icon}</span>
                        <span>{m.label}</span>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Best Time */}
                <div>
                  <label className="block text-xs font-bold text-gray-700 font-body mb-2">Best Time to Contact</label>
                  <select
                    value={formData.bestTime}
                    onChange={(e) => setFormData({ ...formData, bestTime: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl border border-gray-200 bg-gray-50 font-body text-xs font-semibold text-[#111827] focus:outline-none focus:border-[#111827]"
                  >
                    {bestTimes.map((t) => (
                      <option key={t.id} value={t.id}>{t.label}</option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Optional File Upload */}
              <div>
                <label className="block text-xs font-bold text-gray-700 font-body mb-2">
                  Optional Attachments (Proposal, Letter, Photos - Max 10MB)
                </label>
                <div className="relative border-2 border-dashed border-gray-200  p-4 text-center bg-gray-50 hover:bg-white hover:border-[#111827]/40 transition-all">
                  <input
                    type="file"
                    multiple
                    onChange={handleFileUpload}
                    className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                  />
                  <div className="flex flex-col items-center gap-1">
                    <UploadIcon size={20} className="text-gray-400" />
                    <span className="text-xs text-gray-600 font-body font-semibold">Click or drag files here to attach</span>
                  </div>
                </div>

                {attachments.length > 0 && (
                  <div className="flex flex-wrap gap-2 mt-3">
                    {attachments.map((file, i) => (
                      <span key={i} className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-50 border border-slate-100 text-xs font-body text-[#1A3A6B]">
                        📄 {file.name} ({file.size})
                        <button type="button" onClick={() => removeAttachment(i)} className="hover:text-red-500 cursor-pointer">
                          <XIcon size={12} />
                        </button>
                      </span>
                    ))}
                  </div>
                )}
              </div>

              {/* Submit Button */}
              <div className="pt-4 border-t border-gray-100">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full btn-primary py-4 text-base justify-center disabled:opacity-50 cursor-pointer shadow-lg shadow-[#F3F4F6]0/25"
                >
                  {isSubmitting ? (
                    <span className="flex items-center gap-2">
                      <span className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                      Sending Your Message...
                    </span>
                  ) : (
                    <span className="flex items-center gap-2">
                      Send Message Now
                      <ArrowRightIcon size={16} />
                    </span>
                  )}
                </button>
              </div>

            </form>
          ) : (
            /* Success Screen */
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="p-10 text-center space-y-6"
            >
              <div className="w-20 h-20 rounded-full bg-green-100 text-green-600 flex items-center justify-center mx-auto text-4xl shadow-xl">
                <CheckIcon size={40} />
              </div>
              <h3 className="font-heading font-bold text-3xl text-[#111827]">Message Sent Successfully!</h3>
              <p className="text-gray-600 font-body text-base max-w-md mx-auto leading-relaxed">
                Thank you for reaching out to <strong className="text-[#1A3A6B]">Shoe My Feet Foundation</strong>. We have received your message regarding <strong className="text-[#1A3A6B]-dark">{formData.subject}</strong> and will respond shortly.
              </p>
              <div className="p-4  bg-slate-50 text-xs font-body text-[#1A3A6B] max-w-sm mx-auto">
                📧 A copy has been sent to <strong>{formData.email}</strong>
              </div>
              <button
                onClick={() => {
                  setIsSubmitted(false);
                  setFormData({ fullName: "", email: "", phone: "", subject: "General Enquiry", message: "", preferredMethod: "email", bestTime: "morning" });
                }}
                className="btn-primary py-3 px-8 text-sm"
              >
                Send Another Message
              </button>
            </motion.div>
          )}
        </motion.div>

      </div>
    </section>
  );
}
