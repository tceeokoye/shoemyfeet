"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Article } from "@/lib/blogData";
import { fadeUp, viewportConfig, scaleIn } from "@/lib/animations";
import { TrendingUpIcon, EyeIcon, Share2Icon, ClockIcon, ArrowRightIcon, StarIcon } from "@/components/ui/Icons";

interface TrendingStoriesProps {
  articles: Article[];
  onReadStory: (article: Article) => void;
}

type FilterCriterion = "most_read" | "most_shared" | "editors_pick" | "latest";

export default function TrendingStories({ articles, onReadStory }: TrendingStoriesProps) {
  const [activeTab, setActiveTab] = useState<FilterCriterion>("most_read");

  const getFilteredArticles = () => {
    const list = [...articles];
    if (activeTab === "most_read") {
      return list.sort((a, b) => b.viewsCount - a.viewsCount).slice(0, 4);
    }
    if (activeTab === "most_shared") {
      return list.sort((a, b) => b.sharesCount - a.sharesCount).slice(0, 4);
    }
    if (activeTab === "editors_pick") {
      return list.filter((a) => a.isEditorsPick).concat(list).slice(0, 4);
    }
    return list.slice(0, 4);
  };

  const trendingList = getFilteredArticles();

  return (
    <section className="mb-16 bg-[#1a3a6b] p-6 sm:p-10 rounded-3xl border border-blue-100/80 relative overflow-hidden">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-8 border-b border-gray-200/60 pb-6">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100/80 text-royal-blue text-xs font-bold uppercase tracking-wider mb-2">
            <TrendingUpIcon size={14} className="text-warm-orange" />
            <span>Popular & Essential Reads</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-heading font-bold text-[#1a1a2e]">
            Trending Field Stories
          </h2>
        </div>

        {/* Criterion Tabs */}
        <div className="flex flex-wrap items-center gap-2 bg-white/80 p-1.5 rounded-full border border-gray-200 shadow-xs backdrop-blur-xs">
          {[
            { id: "most_read", label: "Most Read", icon: EyeIcon },
            { id: "most_shared", label: "Most Shared", icon: Share2Icon },
            { id: "editors_pick", label: "Editor's Pick", icon: StarIcon },
            { id: "latest", label: "Latest Updates", icon: ClockIcon },
          ].map((tab) => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                type="button"
                onClick={() => setActiveTab(tab.id as FilterCriterion)}
                className={`relative px-4 py-2 rounded-full text-xs font-bold transition-all cursor-pointer inline-flex items-center gap-1.5 ${
                  isActive ? "text-white shadow-md" : "text-gray-600 hover:text-[#1a3a6b]"
                }`}
              >
                {isActive && (
                  <motion.div
                    layoutId="trendingTabBackground"
                    className="absolute inset-0 rounded-full bg-[#1a3a6b]"
                    transition={{ type: "spring", stiffness: 400, damping: 30 }}
                  />
                )}
                <span className="relative z-10 flex items-center gap-1.5">
                  <Icon size={13} />
                  {tab.label}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Grid of Trending Cards */}
      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={viewportConfig}
        className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6"
      >
        <AnimatePresence mode="wait">
          {trendingList.map((article, idx) => (
            <motion.div
              key={`${activeTab}-${article.id}`}
              variants={scaleIn}
              initial="hidden"
              animate="visible"
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.3, delay: idx * 0.05 }}
              className="group bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-md hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Image header with Rank badge */}
                <div className="relative h-44 overflow-hidden">
                  <Image
                    src={article.coverImage}
                    alt={article.title}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    className="object-cover group-hover:scale-108 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-[#1a3a6b]" />

                  {/* Rank badge */}
                  <span className="absolute top-3 left-3 w-8 h-8 rounded-full bg-[#f97316] text-white font-heading font-bold text-xs flex items-center justify-center shadow-lg border border-white/40">
                    #{idx + 1}
                  </span>

                  <span className="absolute bottom-3 left-3 px-2.5 py-1 rounded-md bg-black/60 backdrop-blur-xs text-white text-[10px] font-bold">
                    {article.category}
                  </span>
                </div>

                {/* Body */}
                <div className="p-5">
                  <div className="flex items-center justify-between text-[11px] font-body text-gray-500 mb-2">
                    <span>{article.publishedAt}</span>
                    <span className="flex items-center gap-1 font-semibold text-royal-blue">
                      <EyeIcon size={12} /> {(article.viewsCount / 1000).toFixed(1)}k
                    </span>
                  </div>

                  <h3 className="font-heading font-bold text-sm sm:text-base text-[#1a1a2e] mb-2 group-hover:text-warm-orange transition-colors line-clamp-2 leading-snug">
                    {article.title}
                  </h3>

                  <p className="text-gray-600 font-body text-xs line-clamp-2 mb-4 leading-relaxed">
                    {article.excerpt}
                  </p>
                </div>
              </div>

              {/* Action */}
              <div className="p-5 pt-0">
                <button
                  type="button"
                  onClick={() => onReadStory(article)}
                  className="w-full py-2 px-4 rounded-xl bg-blue-50 text-[#1a3a6b] hover:bg-[#1a3a6b] hover:text-white font-bold text-xs transition-all duration-300 inline-flex items-center justify-center gap-1.5 cursor-pointer"
                >
                  <span>Read Story</span>
                  <ArrowRightIcon size={13} />
                </button>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </section>
  );
}
