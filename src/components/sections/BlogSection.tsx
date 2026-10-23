"use client";

import { motion } from "framer-motion";
import { fadeUp, staggerContainer, viewportConfig } from "@/lib/animations";
import { ArrowRightIcon, CalendarIcon, ClockIcon } from "@/components/ui/Icons";

const blogPosts = [
  {
    id: 1,
    title: "2,000 Pairs of Hope: Inside Our Largest Northern Nigeria Outreach",
    excerpt: "When we first set our sights on Kaduna State, we knew we were stepping into new territory. Here's the full story of how we made history.",
    category: "Impact Story",
    date: "June 2024",
    readTime: "5 min read",
    emoji: "📖",
    color: "bg-[#111827]",
    bg: "bg-slate-50",
  },
  {
    id: 2,
    title: "From Beneficiary to Shoemaker: Emeka's Journey",
    excerpt: "Just two years ago, Emeka walked barefoot to his interview for our training programme. Today, he runs his own shoemaking business and teaches others.",
    category: "Kids Empowerment",
    date: "May 2024",
    readTime: "4 min read",
    emoji: "🛠️",
    color: "bg-[#1A3A6B]",
    bg: "bg-[#F3F4F6]",
  },
  {
    id: 3,
    title: "Access Bank Partnership: How Corporate Nigeria Is Stepping Up",
    excerpt: "The partnership that gave 1,000 children new shoes in a single day — and what it means for the future of corporate social responsibility in Nigeria.",
    category: "Partnerships",
    date: "March 2024",
    readTime: "3 min read",
    emoji: "🤝",
    color: "bg-[#16A34A]",
    bg: "bg-emerald-50",
  },
];

export default function BlogSection() {
  return (
    <section id="blog" className="section-padding bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <motion.div
          className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-12"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
        >
          <div>
            <motion.span variants={fadeUp} className="inline-block px-4 py-1.5 rounded-full bg-purple-100 text-purple-700 text-sm font-bold mb-3 border border-purple-200">
              Latest Stories
            </motion.span>
            <motion.h2 variants={fadeUp} className="font-heading text-4xl font-bold text-[#111827]">
              Stories of{" "}
              <span className="text-[#1A3A6B]">Transformation</span>
            </motion.h2>
          </div>
          <motion.a
            variants={fadeUp}
            href="#"
            className="flex items-center gap-2 px-5 py-2.5 rounded-full border-2 border-[#111827] text-[#1A3A6B] font-bold text-sm hover:bg-[#111827] hover:text-white transition-all font-body whitespace-nowrap"
          >
            View All Stories
            <ArrowRightIcon size={14} />
          </motion.a>
        </motion.div>

        {/* Blog Grid */}
        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
        >
          {blogPosts.map((post, index) => (
            <motion.article
              key={post.id}
              variants={fadeUp}
              className="group bg-white rounded-2xl border border-gray-100 shadow-md hover:shadow-xl transition-all duration-400 overflow-hidden cursor-pointer transform-gpu will-change-transform"
              whileHover={{ y: -6 }}
            >
              {/* Top gradient image area */}
              <div className={`h-44 ${post.bg} flex items-center justify-center relative overflow-hidden`}>
                <div className={`absolute inset-0 post.color opacity-10`} />
                <motion.span
                  className="text-6xl relative z-10"
                  animate={{ rotate: [0, -5, 5, 0], y: [-3, 3, -3] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: index * 0.5 }}
                >
                  {post.emoji}
                </motion.span>
                {/* Category badge */}
                <div className={`absolute top-4 left-4 px-3 py-1 rounded-full post.color text-white text-xs font-bold shadow-lg font-body`}>
                  {post.category}
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="flex items-center gap-3 text-xs text-gray-400 font-body mb-3">
                  <span className="flex items-center gap-1">
                    <CalendarIcon size={11} />
                    {post.date}
                  </span>
                  <span>·</span>
                  <span className="flex items-center gap-1">
                    <ClockIcon size={11} />
                    {post.readTime}
                  </span>
                </div>

                <h3 className="font-heading font-bold text-lg text-[#111827] mb-3 group-hover:text-[#1A3A6B] transition-colors leading-snug">
                  {post.title}
                </h3>

                <p className="text-gray-600 font-body text-sm leading-relaxed mb-4 line-clamp-3">
                  {post.excerpt}
                </p>

                <div className="flex items-center gap-1 text-sm font-bold text-[#1A3A6B] font-body group-hover:gap-2 transition-all">
                  Read Story
                  <ArrowRightIcon size={14} className="group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
