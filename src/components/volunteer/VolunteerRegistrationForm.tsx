"use client";

import { useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircleIcon, CheckIcon } from "@/components/ui/Icons";
import { staggerContainer, fadeUp, viewportConfig } from "@/lib/animations";

interface FormData {
  // Step 1
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  country: string;
  state: string;
  city: string;
  // Step 2
  role: string;
  interests: string[];
  skills: string;
  languages: string;
  availability: string;
  priorExperience: string;
  // Step 3
  motivation: string;
  emergencyContact: string;
  emergencyPhone: string;
  agreePolicy: boolean;
}

const ROLES = [
  "Community Outreach Volunteer",
  "Shoe Collection Volunteer",
  "Event Coordinator",
  "School Liaison Volunteer",
  "Medical & Health Outreach Assistant",
  "Logistics & Distribution Volunteer",
  "Photographer & Videographer",
  "Social Media & Content Creator",
  "Graphic Designer",
  "Fundraising Volunteer",
  "Administrative Support",
  "Corporate Volunteer Teams",
];

const INTEREST_OPTIONS = [
  "Field Outreach", "Events", "Digital/Social Media", "Logistics", "Health",
  "Education", "Fundraising", "Photography", "Admin", "Corporate",
];

const AVAILABILITY_OPTIONS = [
  "Weekdays (full-time)",
  "Weekdays (part-time)",
  "Weekends only",
  "Flexible / As needed",
  "One-off events only",
];

const STEP_LABELS = ["Personal Info", "Volunteer Details", "Final Step"];

const initialFormData: FormData = {
  firstName: "", lastName: "", email: "", phone: "", country: "Nigeria", state: "", city: "",
  role: "", interests: [], skills: "", languages: "English", availability: "", priorExperience: "No",
  motivation: "", emergencyContact: "", emergencyPhone: "", agreePolicy: false,
};

function InputField({
  label, id, type = "text", value, onChange, required = false, placeholder = "",
}: {
  label: string; id: string; type?: string; value: string; onChange: (v: string) => void;
  required?: boolean; placeholder?: string;
}) {
  return (
    <div>
      <label htmlFor={id} className="block font-body text-sm font-semibold text-[#111827] mb-1.5">
        {label} {required && <span className="text-[#1A3A6B]">*</span>}
      </label>
      <input
        id={id}
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        required={required}
        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:border-[#1A3A6B] focus:ring-2 focus:ring-orange-100 font-body text-sm text-[#111827] bg-white transition-all duration-300"
      />
    </div>
  );
}

export default function VolunteerRegistrationForm() {
  const [step, setStep] = useState(0);
  const [formData, setFormData] = useState<FormData>(initialFormData);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const update = useCallback((field: keyof FormData, value: FormData[keyof FormData]) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    setErrors((prev) => { const e = { ...prev }; delete e[field as string]; return e; });
  }, []);

  const toggleInterest = (interest: string) => {
    setFormData((prev) => ({
      ...prev,
      interests: prev.interests.includes(interest)
        ? prev.interests.filter((i) => i !== interest)
        : [...prev.interests, interest],
    }));
  };

  const validateStep = () => {
    const newErrors: Record<string, string> = {};
    if (step === 0) {
      if (!formData.firstName.trim()) newErrors.firstName = "First name is required";
      if (!formData.lastName.trim()) newErrors.lastName = "Last name is required";
      if (!formData.email.trim() || !/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = "Valid email is required";
      if (!formData.phone.trim()) newErrors.phone = "Phone number is required";
      if (!formData.state.trim()) newErrors.state = "State is required";
      if (!formData.city.trim()) newErrors.city = "City is required";
    }
    if (step === 1) {
      if (!formData.role) newErrors.role = "Please select a volunteer role";
      if (formData.interests.length === 0) newErrors.interests = "Select at least one area of interest";
      if (!formData.availability) newErrors.availability = "Please select your availability";
    }
    if (step === 2) {
      if (!formData.motivation.trim() || formData.motivation.trim().length < 30) newErrors.motivation = "Please write at least 30 characters";
      if (!formData.emergencyContact.trim()) newErrors.emergencyContact = "Emergency contact name is required";
      if (!formData.emergencyPhone.trim()) newErrors.emergencyPhone = "Emergency contact phone is required";
      if (!formData.agreePolicy) newErrors.agreePolicy = "You must agree to the volunteer policy";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const nextStep = () => { if (validateStep()) setStep((s) => s + 1); };
  const prevStep = () => setStep((s) => s - 1);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateStep()) return;
    setLoading(true);
    await new Promise((r) => setTimeout(r, 1800));
    setLoading(false);
    setSubmitted(true);
  };

  const progressPct = ((step) / STEP_LABELS.length) * 100;

  if (submitted) {
    return (
      <section id="volunteer-form" className="section-padding bg-[#f8fafc] overflow-hidden">
        <div className="max-w-xl mx-auto px-4 sm:px-6">
          <motion.div
            className="bg-white rounded-2xl p-10 text-center shadow-2xl border border-emerald-100"
            initial={{ opacity: 0, scale: 0.88 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ type: "spring", stiffness: 200, damping: 20 }}
          >
            <motion.div
              className="w-24 h-24 rounded-full bg-[#16A34A] flex items-center justify-center mx-auto mb-6 shadow-xl"
              initial={{ scale: 0 }}
              animate={{ scale: 1, rotate: [0, 10, -10, 0] }}
              transition={{ type: "spring", stiffness: 200, damping: 12, delay: 0.2 }}
            >
              <CheckIcon size={40} className="text-white" />
            </motion.div>
            <h2 className="font-heading text-3xl font-bold text-[#111827] mb-3">You&apos;re In!</h2>
            <p className="font-body text-gray-600 text-base leading-relaxed mb-6">
              Thank you, <strong>{formData.firstName}</strong>! Your volunteer application has been received. Our coordinator will be in touch within 48 hours to welcome you to the Shoe My Feet family.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <a href="/impact" className="btn-secondary px-6 py-3 text-sm">See Our Impact</a>
              <a href="/donate" className="btn-primary px-6 py-3 text-sm">Support the Mission</a>
            </div>
          </motion.div>
        </div>
      </section>
    );
  }

  return (
    <section id="volunteer-form" className="section-padding bg-[#f8fafc] overflow-hidden">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          className="text-center mb-12"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
        >
          <motion.span
            variants={fadeUp}
            className="inline-block px-4 py-1.5 rounded-full bg-emerald-100 text-emerald-700 text-xs sm:text-sm font-bold border border-emerald-200 mb-4"
          >
            Volunteer Registration
          </motion.span>
          <motion.h2
            variants={fadeUp}
            className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-[#111827] mb-4 leading-tight"
          >
            Apply to <span className="text-[#1A3A6B]">Volunteer</span>
          </motion.h2>
          <motion.p
            variants={fadeUp}
            className="text-base sm:text-lg text-gray-600 font-body leading-relaxed"
          >
            Fill out our simple 3-step form and our volunteer coordinator will reach out within 48 hours.
          </motion.p>
        </motion.div>

        {/* Form Card */}
        <motion.div
          className="bg-white rounded-2xl shadow-2xl border border-gray-100 overflow-hidden"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
        >
          {/* Progress bar */}
          <div className="px-8 pt-8 pb-0">
            <div className="flex items-center justify-between mb-3">
              {STEP_LABELS.map((label, i) => (
                <div key={label} className="flex flex-col items-center gap-1.5">
                  <div className={`w-9 h-9 rounded-full flex items-center justify-center text-sm font-bold transition-all duration-500 ${
                    i < step ? "bg-[#16A34A] text-white shadow-md"
                    : i === step ? "bg-[#1A3A6B] text-white shadow-md"
                    : "bg-gray-100 text-gray-400"
                  }`}>
                    {i < step ? <CheckIcon size={16} /> : i + 1}
                  </div>
                  <span className={`font-body text-[10px] font-semibold hidden sm:block ${i === step ? "text-[#1A3A6B]-dark" : "text-gray-400"}`}>
                    {label}
                  </span>
                </div>
              ))}
            </div>
            <div className="w-full h-2 bg-gray-100 rounded-full mb-6 overflow-hidden">
              <motion.div
                className="h-full rounded-full bg-[#1A3A6B]"
                animate={{ width: `${progressPct + 33.3}%` }}
                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              />
            </div>
          </div>

          <form onSubmit={handleSubmit} noValidate>
            <div className="px-8 pb-8">
              <AnimatePresence mode="wait">
                {/* STEP 1 */}
                {step === 0 && (
                  <motion.div
                    key="step1"
                    initial={{ opacity: 0, x: 40 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -40 }}
                    transition={{ duration: 0.38, ease: [0.16, 1, 0.3, 1] }}
                    className="space-y-5"
                  >
                    <h3 className="font-heading text-xl font-bold text-[#111827] mb-5">Tell Us About Yourself</h3>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <InputField label="First Name" id="firstName" value={formData.firstName} onChange={(v) => update("firstName", v)} required />
                        {errors.firstName && <p className="text-xs text-red-500 mt-1">{errors.firstName}</p>}
                      </div>
                      <div>
                        <InputField label="Last Name" id="lastName" value={formData.lastName} onChange={(v) => update("lastName", v)} required />
                        {errors.lastName && <p className="text-xs text-red-500 mt-1">{errors.lastName}</p>}
                      </div>
                    </div>
                    <div>
                      <InputField label="Email Address" id="email" type="email" value={formData.email} onChange={(v) => update("email", v)} required placeholder="you@example.com" />
                      {errors.email && <p className="text-xs text-red-500 mt-1">{errors.email}</p>}
                    </div>
                    <div>
                      <InputField label="Phone Number" id="phone" type="tel" value={formData.phone} onChange={(v) => update("phone", v)} required placeholder="+234..." />
                      {errors.phone && <p className="text-xs text-red-500 mt-1">{errors.phone}</p>}
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <InputField label="State / Region" id="state" value={formData.state} onChange={(v) => update("state", v)} required placeholder="e.g. Enugu" />
                        {errors.state && <p className="text-xs text-red-500 mt-1">{errors.state}</p>}
                      </div>
                      <div>
                        <InputField label="City / LGA" id="city" value={formData.city} onChange={(v) => update("city", v)} required placeholder="e.g. Enugu North" />
                        {errors.city && <p className="text-xs text-red-500 mt-1">{errors.city}</p>}
                      </div>
                    </div>
                    <div>
                      <label htmlFor="country" className="block font-body text-sm font-semibold text-[#111827] mb-1.5">Country</label>
                      <input id="country" type="text" value={formData.country} onChange={(e) => update("country", e.target.value)} className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:border-[#1A3A6B] focus:ring-2 focus:ring-orange-100 font-body text-sm bg-white transition-all duration-300" />
                    </div>
                  </motion.div>
                )}

                {/* STEP 2 */}
                {step === 1 && (
                  <motion.div
                    key="step2"
                    initial={{ opacity: 0, x: 40 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -40 }}
                    transition={{ duration: 0.38, ease: [0.16, 1, 0.3, 1] }}
                    className="space-y-5"
                  >
                    <h3 className="font-heading text-xl font-bold text-[#111827] mb-5">Your Volunteer Preferences</h3>
                    <div>
                      <label htmlFor="role" className="block font-body text-sm font-semibold text-[#111827] mb-1.5">
                        Preferred Role <span className="text-[#1A3A6B]">*</span>
                      </label>
                      <select
                        id="role"
                        value={formData.role}
                        onChange={(e) => update("role", e.target.value)}
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:border-[#1A3A6B] focus:ring-2 focus:ring-orange-100 font-body text-sm text-[#111827] bg-white transition-all duration-300"
                      >
                        <option value="">Select a role...</option>
                        {ROLES.map((r) => <option key={r} value={r}>{r}</option>)}
                      </select>
                      {errors.role && <p className="text-xs text-red-500 mt-1">{errors.role}</p>}
                    </div>

                    <div>
                      <p className="font-body text-sm font-semibold text-[#111827] mb-2">
                        Areas of Interest <span className="text-[#1A3A6B]">*</span>
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {INTEREST_OPTIONS.map((opt) => (
                          <button
                            key={opt}
                            type="button"
                            onClick={() => toggleInterest(opt)}
                            className={`px-3 py-1.5 rounded-full text-xs font-bold font-body transition-all duration-300 cursor-pointer ${
                              formData.interests.includes(opt)
                                ? "bg-[#1A3A6B] text-white shadow-sm"
                                : "bg-gray-100 text-gray-600 hover:bg-[#F3F4F6] hover:text-[#1A3A6B]"
                            }`}
                          >
                            {opt}
                          </button>
                        ))}
                      </div>
                      {errors.interests && <p className="text-xs text-red-500 mt-1">{errors.interests}</p>}
                    </div>

                    <div>
                      <InputField label="Skills / Expertise" id="skills" value={formData.skills} onChange={(v) => update("skills", v)} placeholder="e.g. Project management, photography, social media..." />
                    </div>
                    <div>
                      <InputField label="Languages Spoken" id="languages" value={formData.languages} onChange={(v) => update("languages", v)} placeholder="e.g. English, Igbo, Yoruba..." />
                    </div>

                    <div>
                      <p className="font-body text-sm font-semibold text-[#111827] mb-2">
                        Availability <span className="text-[#1A3A6B]">*</span>
                      </p>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                        {AVAILABILITY_OPTIONS.map((opt) => (
                          <label key={opt} className="flex items-center gap-2 cursor-pointer group">
                            <div
                              onClick={() => update("availability", opt)}
                              className={`w-5 h-5 rounded-full border-2 flex items-center justify-center shrink-0 transition-all duration-200 cursor-pointer ${
                                formData.availability === opt ? "border-[#1A3A6B] bg-[#1A3A6B]" : "border-gray-300 group-hover:border-orange-300"
                              }`}
                            >
                              {formData.availability === opt && <div className="w-2 h-2 rounded-full bg-white" />}
                            </div>
                            <span onClick={() => update("availability", opt)} className="font-body text-sm text-gray-600">{opt}</span>
                          </label>
                        ))}
                      </div>
                      {errors.availability && <p className="text-xs text-red-500 mt-1">{errors.availability}</p>}
                    </div>

                    <div>
                      <p className="font-body text-sm font-semibold text-[#111827] mb-2">Prior Volunteer Experience?</p>
                      <div className="flex gap-4">
                        {["Yes", "No"].map((v) => (
                          <label key={v} className="flex items-center gap-2 cursor-pointer">
                            <div
                              onClick={() => update("priorExperience", v)}
                              className={`w-5 h-5 rounded-full border-2 flex items-center justify-center cursor-pointer transition-all ${
                                formData.priorExperience === v ? "border-[#1A3A6B] bg-[#1A3A6B]" : "border-gray-300 hover:border-orange-300"
                              }`}
                            >
                              {formData.priorExperience === v && <div className="w-2 h-2 rounded-full bg-white" />}
                            </div>
                            <span className="font-body text-sm text-gray-600">{v}</span>
                          </label>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                )}

                {/* STEP 3 */}
                {step === 2 && (
                  <motion.div
                    key="step3"
                    initial={{ opacity: 0, x: 40 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -40 }}
                    transition={{ duration: 0.38, ease: [0.16, 1, 0.3, 1] }}
                    className="space-y-5"
                  >
                    <h3 className="font-heading text-xl font-bold text-[#111827] mb-5">One Last Step</h3>
                    <div>
                      <label htmlFor="motivation" className="block font-body text-sm font-semibold text-[#111827] mb-1.5">
                        Why do you want to volunteer with us? <span className="text-[#1A3A6B]">*</span>
                      </label>
                      <textarea
                        id="motivation"
                        rows={4}
                        value={formData.motivation}
                        onChange={(e) => update("motivation", e.target.value)}
                        placeholder="Tell us what motivates you to join our mission..."
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:border-[#1A3A6B] focus:ring-2 focus:ring-orange-100 font-body text-sm text-[#111827] bg-white resize-none transition-all duration-300"
                      />
                      {errors.motivation && <p className="text-xs text-red-500 mt-1">{errors.motivation}</p>}
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <InputField label="Emergency Contact Name" id="emergencyContact" value={formData.emergencyContact} onChange={(v) => update("emergencyContact", v)} required />
                        {errors.emergencyContact && <p className="text-xs text-red-500 mt-1">{errors.emergencyContact}</p>}
                      </div>
                      <div>
                        <InputField label="Emergency Contact Phone" id="emergencyPhone" type="tel" value={formData.emergencyPhone} onChange={(v) => update("emergencyPhone", v)} required />
                        {errors.emergencyPhone && <p className="text-xs text-red-500 mt-1">{errors.emergencyPhone}</p>}
                      </div>
                    </div>

                    {/* Policy Checkbox */}
                    <div>
                      <label className="flex items-start gap-3 cursor-pointer group">
                        <div
                          onClick={() => update("agreePolicy", !formData.agreePolicy)}
                          className={`mt-0.5 w-5 h-5 rounded-md border-2 flex items-center justify-center shrink-0 transition-all duration-200 cursor-pointer ${
                            formData.agreePolicy ? "border-[#1A3A6B] bg-[#1A3A6B]" : "border-gray-300 group-hover:border-orange-300"
                          }`}
                        >
                          {formData.agreePolicy && <CheckIcon size={12} className="text-white" />}
                        </div>
                        <span className="font-body text-sm text-gray-600 leading-relaxed">
                          I agree to the Shoe My Feet Foundation{" "}
                          <a href="/volunteer-policy" className="text-[#1A3A6B] underline hover:text-[#1A3A6B]-dark">
                            Volunteer Policy
                          </a>
                          , including the child protection guidelines and code of conduct. <span className="text-[#1A3A6B]">*</span>
                        </span>
                      </label>
                      {errors.agreePolicy && <p className="text-xs text-red-500 mt-1">{errors.agreePolicy}</p>}
                    </div>

                    {/* Summary */}
                    <div className=" bg-[#F3F4F6] border border-orange-200 p-4">
                      <p className="font-heading font-bold text-[#111827] text-sm mb-2">Application Summary</p>
                      <div className="space-y-1 font-body text-xs text-gray-600">
                        <p><strong>Name:</strong> {formData.firstName} {formData.lastName}</p>
                        <p><strong>Email:</strong> {formData.email}</p>
                        <p><strong>Role:</strong> {formData.role || "Not selected"}</p>
                        <p><strong>Location:</strong> {formData.city}, {formData.state}</p>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Navigation buttons */}
              <div className="flex items-center justify-between mt-8 pt-6 border-t border-gray-100">
                {step > 0 ? (
                  <button type="button" onClick={prevStep} className="px-6 py-2.5 rounded-[10px] border border-gray-200 font-body text-sm font-bold text-gray-600 hover:border-[#1A3A6B] hover:text-[#1A3A6B] transition-all duration-300 cursor-pointer">
                    ← Back
                  </button>
                ) : <div />}

                {step < 2 ? (
                  <button type="button" onClick={nextStep} className="btn-primary px-8 py-3 text-sm cursor-pointer">
                    Continue →
                  </button>
                ) : (
                  <button
                    type="submit"
                    disabled={loading}
                    className="btn-primary px-8 py-3 text-sm cursor-pointer disabled:opacity-60 disabled:cursor-not-allowed inline-flex items-center gap-2"
                  >
                    {loading ? (
                      <>
                        <div className="w-4 h-4 border-2 border-white/40 border-t-white rounded-full animate-spin" />
                        Submitting...
                      </>
                    ) : (
                      <>
                        <CheckCircleIcon size={18} />
                        Submit Application
                      </>
                    )}
                  </button>
                )}
              </div>
            </div>
          </form>
        </motion.div>
      </div>
    </section>
  );
}
