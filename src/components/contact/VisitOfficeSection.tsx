"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { fadeUp, staggerContainer, viewportConfig } from "@/lib/animations";
import { CheckIcon, CalendarIcon, ClockIcon, XIcon } from "@/components/ui/Icons";

export default function VisitOfficeSection() {
  const [showModal, setShowModal] = useState(false);
  const [booked, setBooked] = useState(false);
  const [visitForm, setVisitForm] = useState({
    name: "",
    email: "",
    date: "",
    time: "10:00 AM",
    purpose: "General Visit & Tour",
  });

  const handleBooking = (e: React.FormEvent) => {
    e.preventDefault();
    setBooked(true);
    setTimeout(() => {
      setBooked(false);
      setShowModal(false);
    }, 2500);
  };

  return (
    <section id="visit-office" className="section-padding bg-white relative overflow-hidden" aria-label="Visit our office">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#2563eb] rounded-4xl p-8 sm:p-12 text-white shadow-2xl relative overflow-hidden">
          
          {/* Background Ambient Elements */}
          <div className="absolute top-0 right-0 w-96 h-96 rounded-full opacity-10 bg-orange-400 blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-80 h-80 rounded-full opacity-10 bg-blue-300 blur-3xl pointer-events-none" />

          <div className="grid lg:grid-cols-12 gap-8 items-center relative z-10">
            
            {/* Left Content */}
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={viewportConfig}
              className="lg:col-span-7 space-y-6"
            >
              <motion.span variants={fadeUp} className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-white/20 text-white font-bold text-xs">
                🏢 Open Door Policy
              </motion.span>

              <motion.h2 variants={fadeUp} className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight">
                Visit Our Office in <span className="text-warm-orange">Enugu</span>
              </motion.h2>

              <motion.p variants={fadeUp} className="text-blue-100 font-body text-base leading-relaxed max-w-xl">
                We welcome volunteers, donors, school delegates, corporate partners, and well-wishers to visit our main headquarters. Tour our facilities, meet our team, and see our shoe distribution logistics center in action.
              </motion.p>

              <motion.div variants={fadeUp} className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-2">
                {[
                  { label: "Visiting Hours", val: "Mon–Fri (9am – 4pm)" },
                  { label: "Appointment", val: "Recommended" },
                  { label: "Accessibility", val: "100% Ramp Access" },
                ].map((item) => (
                  <div key={item.label} className="p-3 rounded-2xl bg-white/10 border border-white/10">
                    <div className="text-[10px] text-blue-200 font-body font-semibold">{item.label}</div>
                    <div className="font-heading font-bold text-sm text-white mt-0.5">{item.val}</div>
                  </div>
                ))}
              </motion.div>

              <motion.div variants={fadeUp} className="pt-4 flex flex-wrap gap-4">
                <button
                  onClick={() => setShowModal(true)}
                  className="btn-orange text-base cursor-pointer shadow-lg shadow-orange-500/30"
                >
                  <CalendarIcon size={18} />
                  <span>Schedule an Office Visit</span>
                </button>
              </motion.div>
            </motion.div>

            {/* Right Feature Display */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={viewportConfig}
              className="lg:col-span-5 relative"
            >
              <div className="bg-white/10 backdrop-blur-md rounded-3xl p-6 border border-white/20 space-y-4">
                <div className="text-4xl text-center">🏢</div>
                <h3 className="font-heading font-bold text-xl text-center text-white">Visitor Amenities</h3>
                
                <div className="space-y-2 text-xs font-body text-blue-100">
                  <div className="flex items-center gap-2 p-2.5 rounded-xl bg-white/5 border border-white/10">
                    <span>☕</span>
                    <span>Complimentary Guest Refreshments</span>
                  </div>
                  <div className="flex items-center gap-2 p-2.5 rounded-xl bg-white/5 border border-white/10">
                    <span>📶</span>
                    <span>High-Speed Visitor Wi-Fi</span>
                  </div>
                  <div className="flex items-center gap-2 p-2.5 rounded-xl bg-white/5 border border-white/10">
                    <span>🅿️</span>
                    <span>Secured On-Site Parking</span>
                  </div>
                  <div className="flex items-center gap-2 p-2.5 rounded-xl bg-white/5 border border-white/10">
                    <span>👟</span>
                    <span>Shoe Quality Testing Lab Tour</span>
                  </div>
                </div>
              </div>
            </motion.div>

          </div>
        </div>
      </div>

      {/* Appointment Modal */}
      <AnimatePresence>
        {showModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs"
            onClick={() => setShowModal(false)}
          >
            <motion.div
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-white rounded-4xl p-6 sm:p-8 max-w-md w-full shadow-2xl relative"
            >
              <button
                onClick={() => setShowModal(false)}
                className="absolute top-4 right-4 p-2 rounded-full text-gray-400 hover:text-gray-600 hover:bg-gray-100 transition-colors cursor-pointer"
              >
                <XIcon size={18} />
              </button>

              {!booked ? (
                <form onSubmit={handleBooking} className="space-y-4">
                  <div className="text-center mb-4">
                    <span className="text-3xl">🗓️</span>
                    <h3 className="font-heading font-bold text-2xl text-[#1a1a2e] mt-1">Schedule a Visit</h3>
                    <p className="text-xs text-gray-500 font-body">Book a guided tour of our Enugu headquarters</p>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-gray-700 font-body mb-1">Your Full Name</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Blessing Okafor"
                      value={visitForm.name}
                      onChange={(e) => setVisitForm({ ...visitForm, name: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl border border-gray-200 font-body text-xs focus:outline-none focus:border-royal-blue"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-gray-700 font-body mb-1">Email Address</label>
                    <input
                      type="email"
                      required
                      placeholder="blessing@example.com"
                      value={visitForm.email}
                      onChange={(e) => setVisitForm({ ...visitForm, email: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl border border-gray-200 font-body text-xs focus:outline-none focus:border-royal-blue"
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className="block text-xs font-bold text-gray-700 font-body mb-1">Preferred Date</label>
                      <input
                        type="date"
                        required
                        value={visitForm.date}
                        onChange={(e) => setVisitForm({ ...visitForm, date: e.target.value })}
                        className="w-full px-3 py-2 rounded-xl border border-gray-200 font-body text-xs focus:outline-none focus:border-royal-blue"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-gray-700 font-body mb-1">Time Slot</label>
                      <select
                        value={visitForm.time}
                        onChange={(e) => setVisitForm({ ...visitForm, time: e.target.value })}
                        className="w-full px-3 py-2 rounded-xl border border-gray-200 font-body text-xs focus:outline-none focus:border-royal-blue"
                      >
                        <option value="10:00 AM">10:00 AM</option>
                        <option value="11:30 AM">11:30 AM</option>
                        <option value="02:00 PM">02:00 PM</option>
                        <option value="03:30 PM">03:30 PM</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-gray-700 font-body mb-1">Purpose of Visit</label>
                    <select
                      value={visitForm.purpose}
                      onChange={(e) => setVisitForm({ ...visitForm, purpose: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl border border-gray-200 font-body text-xs focus:outline-none focus:border-royal-blue"
                    >
                      <option value="General Visit & Tour">General Visit & Tour</option>
                      <option value="School Partnership">School Partnership Discussion</option>
                      <option value="Corporate CSR Meeting">Corporate CSR Meeting</option>
                      <option value="Shoe Drop-Off">Shoe Drop-Off</option>
                      <option value="Volunteer Briefing">Volunteer Briefing</option>
                    </select>
                  </div>

                  <button type="submit" className="w-full btn-orange py-3 text-xs justify-center cursor-pointer">
                    Confirm Appointment Booking
                  </button>
                </form>
              ) : (
                <div className="text-center py-6 space-y-3">
                  <div className="w-16 h-16 rounded-full bg-green-100 text-green-600 flex items-center justify-center mx-auto text-2xl">
                    <CheckIcon size={32} />
                  </div>
                  <h4 className="font-heading font-bold text-xl text-[#1a1a2e]">Appointment Reserved!</h4>
                  <p className="text-xs text-gray-600 font-body">
                    A confirmation email has been sent to <strong>{visitForm.email}</strong> for <strong>{visitForm.date || "your requested date"}</strong> at <strong>{visitForm.time}</strong>.
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
