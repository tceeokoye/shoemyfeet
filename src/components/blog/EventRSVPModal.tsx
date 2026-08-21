"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Event } from "@/lib/blogData";
import { XIcon, CalendarIcon, ClockIcon, MapPinIcon, CheckCircle2Icon, MailIcon, HeartIcon } from "@/components/ui/Icons";
import { trackEvent } from "@/lib/analytics";

interface EventRSVPModalProps {
  event: Event | null;
  onClose: () => void;
}

export default function EventRSVPModal({ event, onClose }: EventRSVPModalProps) {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [ticketsCount, setTicketsCount] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isConfirmed, setIsConfirmed] = useState(false);

  if (!event) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!fullName || !email) return;

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsConfirmed(true);
      trackEvent("event_rsvp", event.title, { fullName, email, ticketsCount });
    }, 700);
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 overflow-hidden">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="absolute inset-0 bg-black/75 backdrop-blur-md"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          className="relative w-full max-w-xl bg-white rounded-3xl shadow-2xl overflow-hidden border border-gray-100 z-10 flex flex-col max-h-[90vh]"
        >
          {/* Header Banner */}
          <div className="relative h-36 overflow-hidden">
            <Image src={event.coverImage} alt={event.title} fill className="object-cover" />
            <div className="absolute inset-0 bg-[#1a3a6b]" />
            <button
              type="button"
              onClick={onClose}
              className="absolute top-4 right-4 p-2 rounded-full bg-black/40 text-white hover:bg-white hover:text-black transition-colors cursor-pointer"
            >
              <XIcon size={18} />
            </button>
            <div className="absolute bottom-4 left-6 right-6 text-white">
              <span className="px-2.5 py-1 rounded-md bg-warm-orange text-white font-bold text-[10px] uppercase tracking-wider mb-1 inline-block">
                RSVP Registration
              </span>
              <h3 className="font-heading font-bold text-lg leading-snug truncate">{event.title}</h3>
            </div>
          </div>

          {/* Body Content */}
          <div className="p-6 sm:p-8 overflow-y-auto">
            {!isConfirmed ? (
              <form onSubmit={handleSubmit} className="space-y-4">
                {/* Event Details Quick Summary */}
                <div className="bg-blue-50/70 p-4 rounded-2xl border border-blue-100 flex flex-col gap-1.5 text-xs text-gray-700 font-body">
                  <div className="flex items-center gap-2 font-bold text-[#1a3a6b]">
                    <CalendarIcon size={14} className="text-warm-orange" />
                    <span>{event.displayDate} • {event.time}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPinIcon size={14} className="text-warm-orange" />
                    <span>{event.location} ({event.state})</span>
                  </div>
                </div>

                {/* Form Fields */}
                <div>
                  <label className="block text-xs font-bold text-gray-700 mb-1 font-heading">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    placeholder="e.g. Dr. Ngozi Eze"
                    className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 text-sm font-body focus:bg-white focus:outline-none focus:border-[#1a3a6b]"
                  />
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-gray-700 mb-1 font-heading">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="ngozi@example.com"
                      className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 text-sm font-body focus:bg-white focus:outline-none focus:border-[#1a3a6b]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-gray-700 mb-1 font-heading">
                      Phone Number (Optional)
                    </label>
                    <input
                      type="tel"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="+234 803 123 4567"
                      className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 text-sm font-body focus:bg-white focus:outline-none focus:border-[#1a3a6b]"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-gray-700 mb-1 font-heading">
                    Number of Attendees
                  </label>
                  <select
                    value={ticketsCount}
                    onChange={(e) => setTicketsCount(Number(e.target.value))}
                    className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 text-sm font-body focus:bg-white focus:outline-none focus:border-[#1a3a6b]"
                  >
                    <option value={1}>1 Seat</option>
                    <option value={2}>2 Seats</option>
                    <option value={3}>3 Seats</option>
                    <option value={4}>4+ Group Delegation</option>
                  </select>
                </div>

                {/* Submit Action */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full btn-orange text-sm py-3.5 px-6 rounded-full font-bold shadow-lg hover:shadow-orange-500/25 cursor-pointer mt-4"
                >
                  {isSubmitting ? "Confirming Spot..." : "Confirm RSVP Registration"}
                </button>
              </form>
            ) : (
              <div className="text-center py-6">
                <div className="w-16 h-16 rounded-full bg-forest-green text-white flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <CheckCircle2Icon size={36} />
                </div>
                <h3 className="text-2xl font-heading font-bold text-[#1a1a2e] mb-2">
                  RSVP Confirmed, {fullName}!
                </h3>
                <p className="text-gray-600 font-body text-xs sm:text-sm max-w-sm mx-auto mb-6 leading-relaxed">
                  We have reserved <span className="font-bold text-warm-orange">{ticketsCount} seat(s)</span> for you at <span className="font-bold">{event.title}</span>. A confirmation pass has been sent to <span className="font-bold text-royal-blue">{email}</span>.
                </p>

                {/* Add to Calendar Link */}
                <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
                  <a
                    href={`https://calendar.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(event.title)}&location=${encodeURIComponent(event.location)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary text-xs py-2.5 px-5 rounded-full inline-flex items-center gap-2"
                  >
                    <CalendarIcon size={14} /> Add to Google Calendar
                  </a>
                  <button
                    type="button"
                    onClick={onClose}
                    className="px-5 py-2.5 rounded-full bg-gray-100 text-gray-700 font-bold text-xs hover:bg-gray-200 cursor-pointer"
                  >
                    Done
                  </button>
                </div>
              </div>
            )}
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
