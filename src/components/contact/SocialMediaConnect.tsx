"use client";

import { motion } from "framer-motion";
import { fadeUp, staggerContainer, viewportConfig } from "@/lib/animations";
import { ArrowRightIcon } from "@/components/ui/Icons";

const socialPlatforms = [
  {
    name: "Instagram",
    handle: "@shoemyfeetng",
    count: "28.5k Followers",
    desc: "Daily photos, outreach reels, and live video updates from field distribution days.",
    icon: "📸",
    color: "bg-[#1A3A6B]",
    bg: "bg-[#1A3A6B]",
    border: "border-pink-100",
    link: "https://instagram.com",
  },
  {
    name: "Facebook",
    handle: "Shoe My Feet Foundation",
    count: "15.2k Followers",
    desc: "Community stories, volunteer spotlights, event announcements, and donor appreciation posts.",
    icon: "📘",
    color: "bg-[#111827]",
    bg: "bg-slate-50",
    border: "border-slate-100",
    link: "https://facebook.com",
  },
  {
    name: "X (Twitter)",
    handle: "@shoemyfeet_ng",
    count: "12.8k Followers",
    desc: "Real-time updates, news, impact tweets, partner shoutouts, and live threads.",
    icon: "🐦",
    color: "bg-slate-700",
    bg: "bg-slate-700",
    border: "border-gray-200",
    link: "https://twitter.com",
  },
  {
    name: "LinkedIn",
    handle: "Shoe My Feet Foundation",
    count: "8.4k Professionals",
    desc: "CSR partnerships, governance reports, corporate sponsorships, and ESG impact news.",
    icon: "💼",
    color: "bg-[#111827]",
    bg: "bg-slate-700",
    border: "border-slate-100",
    link: "https://linkedin.com",
  },
  {
    name: "YouTube",
    handle: "Shoe My Feet Foundation",
    count: "5.1k Subscribers",
    desc: "Full-length documentaries, story features, volunteer interviews, and mini-films.",
    icon: "📺",
    color: "bg-[#1A3A6B]",
    bg: "bg-[#1A3A6B]",
    border: "border-red-100",
    link: "https://youtube.com",
  },
  {
    name: "TikTok",
    handle: "@shoemyfeetfoundation",
    count: "18.9k Supporters",
    desc: "Short viral clips, shoe unboxing reactions from children, and kids shoe-making content.",
    icon: "🎵",
    color: "bg-[#16A34A]",
    bg: "bg-[#16A34A]",
    border: "border-teal-100",
    link: "https://tiktok.com",
  },
];

export default function SocialMediaConnect() {
  return (
    <section className="section-padding bg-white relative overflow-hidden" aria-label="Connect on social media">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          className="text-center mb-14"
        >
          <motion.span variants={fadeUp} className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-pink-100 border border-pink-200 text-pink-700 font-bold text-sm mb-4">
            🌐 Social Media Channels
          </motion.span>
          <motion.h2 variants={fadeUp} className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-[#111827] mb-4">
            Follow Our <span className="text-[#1A3A6B]">Impact Journey</span>
          </motion.h2>
          <motion.p variants={fadeUp} className="text-gray-600 font-body text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
            Stay updated with daily stories, outreach photos, and distribution videos across all our social platforms.
          </motion.p>
        </motion.div>

        {/* Cards Grid */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {socialPlatforms.map((platform, index) => (
            <motion.a
              key={platform.name}
              href={platform.link}
              target="_blank"
              rel="noopener noreferrer"
              variants={fadeUp}
              custom={index}
              whileHover={{ y: -8, scale: 1.02 }}
              transition={{ type: "spring", stiffness: 280, damping: 22 }}
              className={`rounded-2xl p-6 border ${platform.border} platform.bg shadow-sm hover:shadow-xl transition-all group flex flex-col justify-between relative overflow-hidden`}
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className={`w-12 h-12  platform.color flex items-center justify-center text-2xl shadow-md text-white group-hover:scale-110 transition-transform`}>
                    {platform.icon}
                  </div>
                  <span className="text-[10px] font-bold font-body px-2.5 py-1 rounded-full bg-white border border-gray-200 text-gray-700 shadow-xs">
                    {platform.count}
                  </span>
                </div>

                <h3 className="font-heading font-bold text-xl text-[#111827] mb-0.5">{platform.name}</h3>
                <div className="text-xs text-[#1A3A6B] font-body font-semibold mb-3">{platform.handle}</div>
                <p className="text-xs text-gray-600 font-body leading-relaxed mb-4">{platform.desc}</p>
              </div>

              <div className="pt-4 border-t border-black/5 flex items-center justify-between text-xs font-bold font-body text-[#1A3A6B] group-hover:text-[#1A3A6B] transition-colors">
                <span>Visit {platform.name}</span>
                <ArrowRightIcon size={14} className="group-hover:translate-x-1 transition-transform" />
              </div>
            </motion.a>
          ))}
        </motion.div>

        {/* Global CTA */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          className="text-center mt-12"
        >
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary text-base inline-flex items-center gap-2"
          >
            <span>Follow Our Journey on All Platforms</span>
            <ArrowRightIcon size={16} />
          </a>
        </motion.div>

      </div>
    </section>
  );
}
