"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { fadeUp, fadeRight, staggerContainer, viewportConfig } from "@/lib/animations";
import { ArrowRightIcon, HeartIcon, GlobeIcon, StarIcon } from "@/components/ui/Icons";

export default function VolunteerSection() {
  return (
    <section id="volunteer" className="section-padding overflow-hidden relative">
      {/* Background */}
      <div className="absolute inset-0 bg-[#1a3a6b]" />
      <div className="absolute inset-0">
        <div className="absolute top-20 right-20 w-64 h-64 rounded-full bg-emerald-200/30 animate-blob-slow" />
        <div className="absolute bottom-20 left-20 w-48 h-48 rounded-full bg-orange-200/30 animate-blob" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">

          {/* Left content */}
          <motion.div
            className="flex flex-col gap-6"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={viewportConfig}
          >
            <motion.span variants={fadeUp} className="inline-block px-4 py-1.5 rounded-full bg-emerald-100 text-[#16a34a] text-sm font-bold border border-emerald-200 w-fit">
              Join Our Movement
            </motion.span>

            <motion.h2 variants={fadeUp} className="font-heading text-4xl sm:text-5xl font-bold text-[#1a1a2e]">
              Become a{" "}
              <span className="text-royal-blue">Change-Maker</span>{" "}
              Today
            </motion.h2>

            <motion.p variants={fadeUp} className="text-lg text-gray-600 font-body leading-relaxed">
              You don&apos;t need to give money to make a difference. Your time,
              skills, and heart can transform children&apos;s lives across Nigeria.
              Join hundreds of volunteers who are part of our growing family.
            </motion.p>

            {/* Ways to volunteer */}
            <motion.div variants={staggerContainer} className="grid sm:grid-cols-2 gap-4">
              {[
                { icon: "👟", title: "Shoe Distribution", desc: "Join outreach events at schools" },
                { icon: "🛠️", title: "Skills Training", desc: "Mentor shoemaking trainees" },
                { icon: "📸", title: "Documentation", desc: "Capture stories & impact" },
                { icon: "📊", title: "Operations", desc: "Support logistics & planning" },
                { icon: "🎨", title: "Creative Work", desc: "Design, social media, content" },
                { icon: "🤝", title: "Fundraising", desc: "Organize events & campaigns" },
              ].map((item) => (
                <motion.div
                  key={item.title}
                  variants={fadeUp}
                  className="flex items-start gap-3 p-3 bg-white rounded-xl shadow-sm border border-gray-100 hover:shadow-md hover:border-emerald-100 transition-all group transform-gpu will-change-transform"
                  whileHover={{ y: -2 }}
                >
                  <span className="text-xl group-hover:scale-110 transition-transform">{item.icon}</span>
                  <div>
                    <p className="font-heading font-bold text-sm text-[#1a1a2e]">{item.title}</p>
                    <p className="text-xs text-gray-500 font-body">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            <motion.div variants={fadeUp} className="flex flex-wrap gap-3 pt-2">
              <button className="btn-primary group">
                <HeartIcon size={18} className="group-hover:scale-110 transition-transform" />
                Apply to Volunteer
                <ArrowRightIcon size={16} className="group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="px-5 py-3 rounded-full font-bold text-royal-blue border-2 border-[#1a3a6b] hover:bg-[#1a3a6b] hover:text-white transition-all font-body">
                Corporate Volunteering
              </button>
            </motion.div>
          </motion.div>

          {/* Right image */}
          <motion.div
            variants={fadeRight}
            initial="hidden"
            whileInView="visible"
            viewport={viewportConfig}
            className="relative"
          >
            <div className="absolute inset-0 bg-[#1a3a6b] rounded-3xl blur-2xl scale-105" />
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <Image
                src="/images/volunteers.jpg"
                alt="Happy volunteers at Shoe My Feet Foundation shoe distribution event"
                width={600}
                height={480}
                className="w-full h-96 object-cover"
              />
              <div className="absolute inset-0 bg-[#1a3a6b]" />
            </div>

            {/* Stats */}
            <motion.div
              className="absolute -bottom-6 -right-4 glass rounded-2xl px-5 py-4 shadow-xl border border-white/40"
              animate={{ y: [-4, 4, -4] }}
              transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-[#1a3a6b] flex items-center justify-center">
                  <GlobeIcon size={18} className="text-white" />
                </div>
                <div>
                  <div className="font-heading font-bold text-royal-blue text-xl">200+</div>
                  <div className="text-xs text-gray-500 font-body">Active Volunteers</div>
                </div>
              </div>
            </motion.div>

            {/* Review stars */}
            <motion.div
              className="absolute -top-4 -left-4 glass rounded-2xl px-4 py-3 shadow-xl border border-white/40"
              animate={{ y: [4, -4, 4] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            >
              <div className="flex gap-0.5 mb-1">
                {[1,2,3,4,5].map((s) => (
                  <StarIcon key={s} size={12} className="fill-amber-400 text-amber-400" />
                ))}
              </div>
              <p className="text-xs text-gray-600 font-body max-w-[120px]">
                &ldquo;Most rewarding experience of my year!&rdquo;
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
