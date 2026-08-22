"use client";

import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Article } from "@/lib/blogData";
import { fadeUp, viewportConfig, scaleIn } from "@/lib/animations";
import { CalendarIcon, ClockIcon, EyeIcon, Share2Icon, ArrowRightIcon, SparklesIcon, BookOpenIcon } from "@/components/ui/Icons";

interface ArticlesGridProps {
  articles: Article[];
  onReadStory: (article: Article) => void;
  onAuthorClick: (authorId: string) => void;
  onResetFilters: () => void;
}

export default function ArticlesGrid({ articles, onReadStory, onAuthorClick, onResetFilters }: ArticlesGridProps) {
  if (articles.length === 0) {
    return (
      <motion.div
        variants={fadeUp}
        initial="hidden"
        animate="visible"
        className="bg-white rounded-3xl p-12 text-center border border-gray-100 shadow-xl max-w-xl mx-auto my-12"
      >
        <div className="w-16 h-16 rounded-full bg-orange-100 text-warm-orange flex items-center justify-center mx-auto mb-4">
          <BookOpenIcon size={32} />
        </div>
        <h3 className="text-2xl font-heading font-bold text-[#1a1a2e] mb-2">No Stories Found</h3>
        <p className="text-gray-600 font-body text-sm mb-6 leading-relaxed">
          We couldn&apos;t find any articles matching your selected search query or active filters. Try broadening your keywords or clearing filters.
        </p>
        <button
          type="button"
          onClick={onResetFilters}
          className="btn-primary text-xs py-3 px-6 rounded-full inline-flex items-center gap-2 cursor-pointer shadow-md"
        >
          <span>Reset All Filters</span>
        </button>
      </motion.div>
    );
  }

  return (
    <div className="space-y-12">
      {/* Grid of Articles */}
      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={viewportConfig}
        className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
      >
        <AnimatePresence>
          {articles.map((article, idx) => (
            <motion.article
              key={article.id}
              variants={scaleIn}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="group bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-lg hover:shadow-2xl transition-all duration-500 flex flex-col justify-between"
            >
              <div>
                {/* Image Container with Hover Zoom */}
                <div className="relative h-52 overflow-hidden">
                  <Image
                    src={article.coverImage}
                    alt={article.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover group-hover:scale-108 transition-transform duration-700 ease-out"
                  />
                  <div className="absolute inset-0 bg-[#09090b] opacity-80 group-hover:opacity-60 transition-opacity" />

                  {/* Badges */}
                  <div className="absolute top-4 left-4 flex flex-wrap gap-2">
                    <span className="px-3 py-1 rounded-full bg-white/95 backdrop-blur-md text-[#f97316] font-bold text-xs shadow-md">
                      {article.category}
                    </span>
                    {article.isNew && (
                      <span className="px-2.5 py-1 rounded-full bg-forest-green text-white font-bold text-[10px] shadow-sm uppercase tracking-wider">
                        New
                      </span>
                    )}
                    {article.isFeatured && (
                      <span className="px-2.5 py-1 rounded-full bg-warm-orange text-white font-bold text-[10px] shadow-sm uppercase tracking-wider inline-flex items-center gap-1">
                        <SparklesIcon size={10} /> Featured
                      </span>
                    )}
                  </div>

                  {/* Date & Reading time overlay */}
                  <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between text-[11px] text-white/90 font-body">
                    <span className="flex items-center gap-1 font-medium">
                      <CalendarIcon size={12} /> {article.publishedAt}
                    </span>
                    <span className="flex items-center gap-1 font-medium">
                      <ClockIcon size={12} /> {article.readingTime}
                    </span>
                  </div>
                </div>

                {/* Body Content */}
                <div className="p-6">
                  {/* Article Title */}
                  <h3 className="text-xl font-heading font-bold text-[#1a1a2e] mb-3 group-hover:text-warm-orange transition-colors line-clamp-2 leading-snug">
                    {article.title}
                  </h3>

                  {/* Excerpt */}
                  <p className="text-gray-600 font-body text-xs sm:text-sm line-clamp-3 mb-6 leading-relaxed">
                    {article.excerpt}
                  </p>
                </div>
              </div>

              {/* Card Footer: Author & Read CTA */}
              <div className="p-6 pt-0 border-t border-gray-100 flex items-center justify-between gap-3 mt-auto">
                {/* Author Info */}
                <button
                  type="button"
                  onClick={() => onAuthorClick(article.author.id)}
                  className="flex items-center gap-2.5 hover:opacity-80 transition-opacity cursor-pointer group/author text-left min-w-0"
                >
                  <div className="relative w-8 h-8 rounded-full overflow-hidden border border-warm-orange/40 shrink-0">
                    <Image src={article.author.avatar} alt={article.author.name} fill className="object-cover" />
                  </div>
                  <div className="truncate">
                    <h5 className="font-heading font-bold text-xs text-[#1a1a2e] group-hover/author:text-warm-orange transition-colors truncate">
                      {article.author.name}
                    </h5>
                    <div className="flex items-center gap-2 text-[10px] text-gray-400 font-body">
                      <span className="flex items-center gap-0.5">
                        <EyeIcon size={10} /> {(article.viewsCount / 1000).toFixed(1)}k
                      </span>
                    </div>
                  </div>
                </button>

                {/* Read Button */}
                <button
                  type="button"
                  onClick={() => onReadStory(article)}
                  className="btn-primary text-xs py-2 px-4 rounded-full inline-flex items-center gap-1 cursor-pointer shrink-0 shadow-xs group-hover:bg-[#f97316] transition-colors"
                >
                  <span>Read</span>
                  <ArrowRightIcon size={13} className="group-hover:translate-x-0.5 transition-transform" />
                </button>
              </div>
            </motion.article>
          ))}
        </AnimatePresence>
      </motion.div>
    </div>
  );
}
