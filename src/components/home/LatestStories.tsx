"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { fadeUp, staggerContainer, viewportConfig } from "@/lib/animations";
import { ArrowRightIcon, CalendarIcon, ClockIcon } from "@/components/ui/Icons";

const posts = [
  {
    id: 1,
    title: "2,000 Pairs of Hope: Inside Our Largest Northern Nigeria Outreach",
    excerpt: "When we set out for Kaduna State, we knew it would be our biggest undertaking yet. Here's how 2,000 children got their first school shoes.",
    category: "Impact Story",
    date: "June 2024",
    readTime: "5 min read",
    emoji: "📖",
    color: "bg-[#111827]",
    bg: "bg-slate-50",
  },
  {
    id: 2,
    title: "From Beneficiary to Shoemaker: Emeka's Inspiring Journey",
    excerpt: "Two years after receiving assistance, Emeka graduated from our shoemaking workshop and now runs his own small footwear business.",
    category: "Kids Empowerment",
    date: "May 2024",
    readTime: "4 min read",
    emoji: "🛠️",
    color: "bg-[#1A3A6B]",
    bg: "bg-[#F3F4F6]",
  },
  {
    id: 3,
    title: "Access Bank Partnership: Corporate Nigeria Stepping Up for Education",
    excerpt: "How a corporate social responsibility partnership delivered 1,000 school shoes across multiple schools in a single day.",
    category: "Partnerships",
    date: "March 2024",
    readTime: "3 min read",
    emoji: "🤝",
    color: "bg-[#16A34A]",
    bg: "bg-emerald-50",
  },
];

export default function LatestStories() {
  return (
    <section className="section-padding bg-[#111827] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <motion.div
          className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-14"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
        >
          <div>
            <motion.span variants={fadeUp} className="inline-block px-4 py-1.5 rounded-full bg-purple-100 text-purple-700 text-xs sm:text-sm font-bold mb-3 border border-purple-200">
              Latest Stories
            </motion.span>
            <motion.h2 variants={fadeUp} className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-[#111827]">
              Field Notes & <span className="text-[#1A3A6B]">Impact News</span>
            </motion.h2>
          </div>

          <motion.div variants={fadeUp}>
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border-2 border-[#111827] text-[#1A3A6B] font-bold text-sm hover:bg-[#111827] hover:text-white transition-all font-body whitespace-nowrap"
            >
              <span>View All Stories</span>
              <ArrowRightIcon size={15} />
            </Link>
          </motion.div>
        </motion.div>

        {/* Blog Grid */}
        <motion.div
          className="grid md:grid-cols-3 gap-8"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
        >
          {posts.map((post) => (
            <motion.article
              key={post.id}
              variants={fadeUp}
              className="group bg-white rounded-2xl border border-gray-100 shadow-md hover:shadow-2xl transition-all duration-400 overflow-hidden flex flex-col justify-between transform-gpu will-change-transform"
              whileHover={{ y: -6 }}
            >
              <div>
                {/* Header Banner */}
                <div className={`h-48 ${post.bg} flex items-center justify-center relative overflow-hidden`}>
                  <div className={`absolute inset-0 post.color opacity-10`} />
                  <span className="text-6xl relative z-10 group-hover:scale-110 transition-transform duration-300">
                    {post.emoji}
                  </span>
                  
                  {/* Category Chip */}
                  <div className={`absolute top-4 left-4 px-3.5 py-1 rounded-full post.color text-white text-xs font-bold font-body shadow-md`}>
                    {post.category}
                  </div>
                </div>

                {/* Body Content */}
                <div className="p-6 sm:p-7">
                  <div className="flex items-center gap-3 text-xs text-gray-400 font-body mb-3">
                    <span className="flex items-center gap-1">
                      <CalendarIcon size={12} />
                      {post.date}
                    </span>
                    <span>·</span>
                    <span className="flex items-center gap-1">
                      <ClockIcon size={12} />
                      {post.readTime}
                    </span>
                  </div>

                  <h3 className="font-heading font-bold text-xl text-[#111827] mb-3 group-hover:text-[#1A3A6B] transition-colors leading-snug">
                    {post.title}
                  </h3>

                  <p className="text-gray-600 font-body text-sm leading-relaxed mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>
                </div>
              </div>

              {/* Read Link */}
              <div className="px-6 pb-6 pt-0">
                <Link
                  href="/blog"
                  className="inline-flex items-center gap-1.5 text-sm font-bold text-[#1A3A6B] group-hover: text-[#1A3A6B]-dark transition-colors font-body group/link"
                >
                  <span>Read Full Story</span>
                  <ArrowRightIcon size={15} className="group-hover/link:translate-x-1 transition-transform" />
                </Link>
              </div>
            </motion.article>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
