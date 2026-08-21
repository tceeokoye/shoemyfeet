"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import FastImage from "@/components/ui/FastImage";
import { fadeUp, fadeRight, staggerContainer, viewportConfig } from "@/lib/animations";
import { ArrowRightIcon, HeartIcon, MailIcon, CheckCircle2Icon } from "@/components/ui/Icons";

const roles = [
  { icon: "👟", title: "Shoe Distribution", desc: "Assist fitting sessions" },
  { icon: "🛠️", title: "Skills Mentorship", desc: "Teach shoemaking" },
  { icon: "📸", title: "Media & Stories", desc: "Document impact" },
  { icon: "📊", title: "Event Operations", desc: "Logistics support" },
];

export default function VolunteerCTA() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) { setSubscribed(true); setEmail(""); }
  };

  return (
    <section className="section-padding bg-[#fdfbf7] relative overflow-hidden">
      <div className="absolute top-0 right-0 w-80 h-80 bg-orange-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* ── Volunteer Section ── */}
        <div className="grid lg:grid-cols-2 gap-14 items-center mb-24">

          {/* Text & Roles Grid */}
          <motion.div
            className="flex flex-col gap-6"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={viewportConfig}
          >
            <motion.div variants={fadeUp} className="flex items-center gap-3">
              <div className="h-px w-10 bg-[#f97316]" />
              <span className="text-xs font-bold text-[#f97316] uppercase tracking-widest font-heading">
                Volunteer Community
              </span>
            </motion.div>

            <motion.h2 variants={fadeUp} className="font-heading font-bold text-3xl sm:text-4xl lg:text-5xl text-[#0b1933] tracking-tight">
              Become a{" "}
              <span className="text-[#f97316]">Change-Maker</span> Today
            </motion.h2>

            <motion.p variants={fadeUp} className="font-body text-slate-600 text-base sm:text-lg leading-relaxed">
              Your time, passion, and skills can transform children's lives across Nigeria.
              Join 200+ dedicated volunteers making an impact at school outreaches, workshops,
              and community campaigns.
            </motion.p>

            {/* 3D Volunteer Role Cards */}
            <motion.div variants={staggerContainer} className="grid grid-cols-2 gap-4">
              {roles.map((r) => (
                <motion.div
                  key={r.title}
                  variants={fadeUp}
                  className="bg-white rounded-2xl p-4 border border-slate-200/80 card-3d flex items-start gap-3"
                >
                  <span className="text-3xl">{r.icon}</span>
                  <div>
                    <h4 className="font-heading font-bold text-base text-[#0b1933]">{r.title}</h4>
                    <p className="text-xs text-slate-500 font-body">{r.desc}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            <motion.div variants={fadeUp} className="pt-2">
              <Link href="/volunteer" className="btn-orange group text-base shadow-xl">
                <HeartIcon size={18} className="fill-white group-hover:scale-110 transition-transform" />
                <span>Join as a Volunteer</span>
                <ArrowRightIcon size={16} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>
          </motion.div>

          {/* Volunteer Image */}
          <motion.div
            className="relative"
            variants={fadeRight}
            initial="hidden"
            whileInView="visible"
            viewport={viewportConfig}
          >
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white card-3d">
              <FastImage
                src="/images/volunteers.webp"
                alt="Volunteers at shoe distribution event"
                width={600}
                height={480}
                className="w-full h-[400px] object-cover hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
            </div>

            {/* Floating 3D Badge */}
            <motion.div
              animate={{ y: [-6, 6, -6] }}
              transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -bottom-6 -right-4 bg-[#0b1933] text-white rounded-2xl p-4 shadow-2xl border border-white/20 flex items-center gap-3 card-3d-dark"
            >
              <div className="w-12 h-12 rounded-xl bg-[#f97316] flex items-center justify-center font-heading font-bold text-lg shadow-md">
                200+
              </div>
              <div>
                <div className="font-heading font-bold text-white text-base leading-none">Active Volunteers</div>
                <div className="text-xs text-blue-200 font-body mt-1">Across 3 States</div>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Unified Donate + Newsletter Banner */}
        <motion.div
          className="bg-[#0b1933] rounded-3xl overflow-hidden relative shadow-2xl border border-white/15 card-3d-dark text-white"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="absolute inset-0 opacity-15 pointer-events-none">
            <FastImage
              src="/images/children_walking_school.webp"
              alt=""
              fill
              className="object-cover"
            />
          </div>
          <div className="absolute top-0 right-0 w-80 h-80 bg-orange-500/20 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-blue-500/20 rounded-full blur-3xl" />

          <div className="relative z-10 grid lg:grid-cols-2 gap-0 divide-y lg:divide-y-0 lg:divide-x divide-white/15">

            {/* Donate Box */}
            <div className="p-8 sm:p-12 flex flex-col gap-5">
              <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-orange-500/20 border border-orange-500/40 text-amber-300 text-xs font-bold font-heading w-fit">
                <HeartIcon size={14} className="fill-amber-300" />
                Make a Direct Impact
              </span>

              <h2 className="font-heading font-bold text-2xl sm:text-3xl text-white leading-snug">
                Your Gift Helps a Child Walk into School with{" "}
                <span className="text-[#f59e0b]">Confidence</span>
              </h2>

              <p className="font-body text-blue-100/90 text-sm leading-relaxed">
                $20 provides a durable pair of shoes. $100 fits an entire classroom.
                Join us in breaking the cycle of absenteeism today.
              </p>

              <div className="flex flex-wrap gap-3 text-xs font-body text-blue-100">
                {["100% Direct Delivery", "Registered CAC NGO", "Transparent Reports"].map((t) => (
                  <span key={t} className="flex items-center gap-1.5 font-semibold">
                    <CheckCircle2Icon size={14} className="text-amber-400" />
                    {t}
                  </span>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row gap-3 pt-2">
                <Link href="/donate" className="btn-orange text-base font-bold shadow-xl">
                  <HeartIcon size={18} className="fill-white" />
                  <span>Donate Now</span>
                  <ArrowRightIcon size={16} className="group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link href="/donate" className="btn-outline text-base">
                  Become a Monthly Partner
                </Link>
              </div>
            </div>

            {/* Newsletter Box */}
            <div className="p-8 sm:p-12 flex flex-col gap-5">
              <div className="w-14 h-14 rounded-2xl bg-white/10 border border-white/20 flex items-center justify-center text-3xl shadow-lg">
                ✉️
              </div>

              <h3 className="font-heading font-bold text-2xl text-white">
                Stay Connected to Our Mission
              </h3>

              <p className="font-body text-blue-100/90 text-sm leading-relaxed">
                Receive quarterly impact updates, heartwarming stories, and outreach announcements
                directly in your inbox.
              </p>

              {subscribed ? (
                <motion.div
                  initial={{ scale: 0.9, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  className="bg-white/10 border border-white/20 rounded-2xl p-5 text-center"
                >
                  <div className="flex items-center justify-center gap-2 text-emerald-400 font-heading font-bold text-lg mb-1">
                    <CheckCircle2Icon size={20} />
                    <span>Thank you for subscribing!</span>
                  </div>
                  <p className="text-xs text-blue-200 font-body">
                    Welcome to the Shoe My Feet Foundation family.
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
                  <div className="relative flex-1">
                    <MailIcon size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-white/50" />
                    <input
                      type="email"
                      required
                      placeholder="Your email address"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full pl-11 pr-4 py-3.5 rounded-xl bg-white/10 border border-white/30 text-white placeholder-blue-200/60 text-sm font-body focus:outline-none focus:border-white transition-colors"
                    />
                  </div>
                  <button
                    type="submit"
                    className="btn-orange py-3.5 px-6 justify-center text-base font-bold shadow-xl cursor-pointer"
                  >
                    Subscribe
                  </button>
                </form>
              )}

              <p className="text-xs text-blue-300/70 font-body">
                We respect your privacy. Unsubscribe at any time.
              </p>
            </div>

          </div>
        </motion.div>

      </div>
    </section>
  );
}
