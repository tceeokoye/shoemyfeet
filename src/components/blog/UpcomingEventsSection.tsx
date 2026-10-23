"use client";

import { useState, useEffect } from "react";
import Image from "@/components/ui/RealImage";
import { motion } from "framer-motion";
import { UPCOMING_EVENTS, Event } from "@/lib/blogData";
import { fadeUp, viewportConfig, scaleIn } from "@/lib/animations";
import { CalendarIcon, ClockIcon, MapPinIcon, UsersIcon, ArrowRightIcon, SparklesIcon, CheckCircleIcon } from "@/components/ui/Icons";

interface UpcomingEventsProps {
  onRSVPClick: (event: Event) => void;
}

// Countdown timer calculator component
function CountdownTimer({ targetDate }: { targetDate: string }) {
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    function calculate() {
      const difference = +new Date(targetDate) - +new Date();
      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        });
      }
    }
    calculate();
    const timer = setInterval(calculate, 1000);
    return () => clearInterval(timer);
  }, [targetDate]);

  return (
    <div className="grid grid-cols-4 gap-1.5 text-center bg-black/60 backdrop-blur-md p-2 rounded-xl border border-white/20 text-white">
      <div>
        <span className="font-heading font-bold text-xs sm:text-sm text-[#142E56] block leading-none">{timeLeft.days}</span>
        <span className="text-[9px] uppercase tracking-wider text-gray-300 font-body block">Days</span>
      </div>
      <div>
        <span className="font-heading font-bold text-xs sm:text-sm text-white block leading-none">{timeLeft.hours}</span>
        <span className="text-[9px] uppercase tracking-wider text-gray-300 font-body block">Hrs</span>
      </div>
      <div>
        <span className="font-heading font-bold text-xs sm:text-sm text-white block leading-none">{timeLeft.minutes}</span>
        <span className="text-[9px] uppercase tracking-wider text-gray-300 font-body block">Min</span>
      </div>
      <div>
        <span className="font-heading font-bold text-xs sm:text-sm text-white block leading-none">{timeLeft.seconds}</span>
        <span className="text-[9px] uppercase tracking-wider text-gray-300 font-body block">Sec</span>
      </div>
    </div>
  );
}

export default function UpcomingEventsSection({ onRSVPClick }: UpcomingEventsProps) {
  return (
    <section className="my-20">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
        <div>
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-orange-100 text-[#1A3A6B]-dark font-bold text-xs uppercase tracking-wider mb-3">
            <CalendarIcon size={14} className="text-[#1A3A6B]" />
            <span>Mark Your Calendar</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-heading font-bold text-[#111827]">
            Upcoming Field Events & Gala
          </h2>
        </div>
        <p className="text-gray-600 font-body text-xs sm:text-sm max-w-md">
          Join our live outreach distributions, vocational training workshops, and annual fundraising events across Nigeria.
        </p>
      </div>

      {/* Grid of Event Cards */}
      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={viewportConfig}
        className="grid lg:grid-cols-3 gap-8"
      >
        {UPCOMING_EVENTS.map((event) => {
          const percentageLeft = Math.round(((event.capacity - event.seatsLeft) / event.capacity) * 100);

          return (
            <motion.div
              key={event.id}
              variants={scaleIn}
              className="bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-xl hover:shadow-2xl transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                {/* Image Cover & Live Countdown */}
                <div className="relative h-48 overflow-hidden">
                  <Image src={event.coverImage} alt={event.title} fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />

                  {/* Category & State Overlay */}
                  <div className="absolute top-4 left-4 flex gap-2">
                    <span className="px-3 py-1 rounded-full bg-white/90 backdrop-blur-md text-[#1A3A6B] font-bold text-xs shadow-md">
                      {event.state}
                    </span>
                  </div>

                  {/* Live Countdown Widget Overlay */}
                  <div className="absolute bottom-3 left-4 right-4 z-10">
                    <CountdownTimer targetDate={event.date} />
                  </div>
                </div>

                {/* Event Body */}
                <div className="p-6">
                  {/* Date & Time */}
                  <div className="flex items-center justify-between text-xs font-body text-[#1A3A6B] font-bold mb-2">
                    <span className="flex items-center gap-1">
                      <CalendarIcon size={14} /> {event.displayDate}
                    </span>
                    <span className="flex items-center gap-1 text-gray-500 font-medium">
                      <ClockIcon size={13} /> {event.time}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="font-heading font-bold text-lg text-[#111827] mb-3 group-hover:text-[#1A3A6B] transition-colors leading-snug">
                    {event.title}
                  </h3>

                  {/* Location & Map Link */}
                  <div className="flex items-start gap-2 text-xs font-body text-gray-600 mb-4">
                    <MapPinIcon size={16} className="text-[#1A3A6B] shrink-0 mt-0.5" />
                    <span>
                      {event.location} (
                      <a href={event.mapUrl} target="_blank" rel="noopener noreferrer" className="text-[#1A3A6B] hover:underline font-bold">
                        Google Maps
                      </a>
                      )
                    </span>
                  </div>

                  {/* Description */}
                  <p className="text-gray-600 font-body text-xs leading-relaxed mb-6 line-clamp-3">
                    {event.description}
                  </p>

                  {/* Seats Capacity Progress Bar */}
                  <div className="bg-gray-50 p-3.5  mb-6 border border-gray-100">
                    <div className="flex items-center justify-between text-xs font-body mb-1.5">
                      <span className="font-bold text-gray-700">Capacity & Seats</span>
                      <span className="font-bold text-[#1A3A6B]-dark">{event.seatsLeft} seats left</span>
                    </div>
                    <div className="w-full bg-gray-200 h-2 rounded-full overflow-hidden">
                      <div className="bg-[#1A3A6B] h-full rounded-full transition-all duration-500" style={{ width: `${percentageLeft}%` }} />
                    </div>
                  </div>
                </div>
              </div>

              {/* Action Button */}
              <div className="p-6 pt-0 border-t border-gray-100">
                <button
                  type="button"
                  onClick={() => onRSVPClick(event)}
                  className="w-full btn-primary text-xs py-3 px-5 rounded-[10px] font-bold inline-flex items-center justify-center gap-2 shadow-md cursor-pointer"
                >
                  <span>RSVP & Register Spot</span>
                  <ArrowRightIcon size={14} />
                </button>
              </div>
            </motion.div>
          );
        })}
      </motion.div>
    </section>
  );
}
