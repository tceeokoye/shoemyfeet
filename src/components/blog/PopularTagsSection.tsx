"use client";

import { motion } from "framer-motion";
import { BLOG_TAGS, Article } from "@/lib/blogData";
import { TagIcon, SparklesIcon } from "@/components/ui/Icons";

interface PopularTagsSectionProps {
  articles: Article[];
  selectedTag: string | null;
  onSelectTag: (tag: string) => void;
}

export default function PopularTagsSection({ articles, selectedTag, onSelectTag }: PopularTagsSectionProps) {
  // Count articles per tag
  const getTagCount = (tagName: string) => {
    return articles.filter((a) => a.tags.includes(tagName)).length;
  };

  return (
    <section className="my-16 bg-white p-8 rounded-3xl border border-gray-100 shadow-xl">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6 pb-4 border-b border-gray-100">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-xl bg-orange-100 text-warm-orange flex items-center justify-center">
            <TagIcon size={18} />
          </div>
          <div>
            <h3 className="font-heading font-bold text-xl text-[#1a1a2e]">Explore Topics by Popular Tags</h3>
            <span className="text-xs text-gray-500 font-body">Click any tag pill to filter matching articles instantly</span>
          </div>
        </div>
      </div>

      <div className="flex flex-wrap gap-2.5">
        {BLOG_TAGS.map((tag) => {
          const count = getTagCount(tag);
          const isSelected = selectedTag === tag;

          return (
            <button
              key={tag}
              type="button"
              onClick={() => onSelectTag(tag)}
              className={`px-4 py-2 rounded-full text-xs font-bold transition-all cursor-pointer inline-flex items-center gap-2 ${
                isSelected
                  ? "bg-[#1a3a6b] text-white shadow-md scale-105"
                  : "bg-gray-50 text-gray-700 hover:bg-orange-100 hover:text-warm-orange-dark border border-gray-200/80"
              }`}
            >
              <span>#{tag}</span>
              <span
                className={`px-2 py-0.5 rounded-full text-[10px] font-bold ${
                  isSelected ? "bg-white/20 text-white" : "bg-gray-200 text-gray-600"
                }`}
              >
                {count}
              </span>
            </button>
          );
        })}
      </div>
    </section>
  );
}
