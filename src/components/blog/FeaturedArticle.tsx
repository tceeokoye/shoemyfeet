"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Article } from "@/lib/blogData";
import { fadeUp, viewportConfig } from "@/lib/animations";
import { CalendarIcon, ClockIcon, EyeIcon, Share2Icon, ArrowRightIcon, SparklesIcon } from "@/components/ui/Icons";

interface FeaturedArticleProps {
  article: Article;
  onReadStory: (article: Article) => void;
  onAuthorClick: (authorId: string) => void;
}

export default function FeaturedArticle({ article, onReadStory, onAuthorClick }: FeaturedArticleProps) {
  return (
    <section className="mb-16">
      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={viewportConfig}
        className="group relative bg-white rounded-3xl overflow-hidden shadow-xl border border-gray-100/80 hover:shadow-2xl transition-all duration-500"
      >
        <div className="grid lg:grid-cols-12 gap-0 items-stretch">
          {/* Large Image Cover Container */}
          <div className="lg:col-span-7 relative min-h-[320px] sm:min-h-[420px] overflow-hidden">
            <Image
              src={article.coverImage}
              alt={article.title}
              fill
              sizes="(max-width: 1024px) 100vw, 60vw"
              className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
              priority
            />
            <div className="absolute inset-0 bg-[#1a3a6b] lg: lg:from-transparent lg:via-black/20 lg:to-black/60" />

            {/* Badges Overlay */}
            <div className="absolute top-6 left-6 flex flex-wrap items-center gap-2 z-10">
              <span className="px-3.5 py-1.5 rounded-full bg-warm-orange text-white font-bold text-xs shadow-md tracking-wider uppercase inline-flex items-center gap-1.5">
                <SparklesIcon size={12} />
                Featured Story
              </span>
              <span className="px-3 py-1.5 rounded-full bg-white/90 backdrop-blur-md text-[#1a3a6b] font-bold text-xs shadow-md">
                {article.category}
              </span>
            </div>

            {/* Mobile View stats overlay */}
            <div className="absolute bottom-4 left-6 right-6 lg:hidden flex items-center justify-between text-xs text-white/90 font-body z-10">
              <span className="flex items-center gap-1">
                <CalendarIcon size={13} /> {article.publishedAt}
              </span>
              <span className="flex items-center gap-1">
                <ClockIcon size={13} /> {article.readingTime}
              </span>
            </div>
          </div>

          {/* Article Info Content */}
          <div className="lg:col-span-5 p-8 sm:p-10 lg:p-12 flex flex-col justify-between bg-white relative">
            <div>
              {/* Meta strip */}
              <div className="hidden lg:flex items-center gap-4 text-xs font-body text-gray-500 mb-4">
                <span className="flex items-center gap-1.5 font-medium text-gray-600">
                  <CalendarIcon size={14} className="text-warm-orange" />
                  {article.publishedAt}
                </span>
                <span>•</span>
                <span className="flex items-center gap-1.5 font-medium text-gray-600">
                  <ClockIcon size={14} className="text-warm-orange" />
                  {article.readingTime}
                </span>
              </div>

              {/* Title */}
              <h2 className="text-2xl sm:text-3xl lg:text-3xl font-heading font-bold text-[#1a1a2e] mb-4 group-hover:text-warm-orange transition-colors leading-snug">
                {article.title}
              </h2>

              {/* Excerpt */}
              <p className="text-gray-600 font-body text-sm sm:text-base leading-relaxed mb-6 line-clamp-4">
                {article.excerpt}
              </p>
            </div>

            {/* Author & CTA Row */}
            <div className="pt-6 border-t border-gray-100 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              {/* Author Trigger */}
              <button
                type="button"
                onClick={() => onAuthorClick(article.author.id)}
                className="flex items-center gap-3 text-left hover:opacity-80 transition-opacity cursor-pointer group/author"
              >
                <div className="relative w-11 h-11 rounded-full overflow-hidden border-2 border-warm-orange/30 group-hover/author:border-warm-orange transition-colors shadow-xs">
                  <Image src={article.author.avatar} alt={article.author.name} fill className="object-cover" />
                </div>
                <div>
                  <h4 className="font-heading font-bold text-xs text-[#1a1a2e] group-hover/author:text-warm-orange transition-colors">
                    {article.author.name}
                  </h4>
                  <span className="text-[11px] text-gray-500 font-body block">{article.author.role}</span>
                </div>
              </button>

              {/* Action Button */}
              <div className="flex items-center gap-3">
                <div className="hidden sm:flex items-center gap-3 text-xs text-gray-400 font-body mr-2">
                  <span className="flex items-center gap-1">
                    <EyeIcon size={13} /> {(article.viewsCount / 1000).toFixed(1)}k
                  </span>
                  <span className="flex items-center gap-1">
                    <Share2Icon size={13} /> {article.sharesCount}
                  </span>
                </div>

                <button
                  type="button"
                  onClick={() => onReadStory(article)}
                  className="btn-primary text-xs py-3 px-6 rounded-full inline-flex items-center justify-center gap-2 cursor-pointer shadow-md group-hover:bg-[#f97316] transition-all"
                >
                  <span>Read Full Story</span>
                  <ArrowRightIcon size={14} className="group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
