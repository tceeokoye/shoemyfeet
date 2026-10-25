"use client";

import Image from "@/components/ui/RealImage";
import { Article, BLOG_TAGS } from "@/lib/blogData";
import { EyeIcon, TrendingUpIcon, TagIcon, MailIcon, HeartIcon, ArrowRightIcon } from "@/components/ui/Icons";

interface PopularSidebarProps {
  articles: Article[];
  onReadStory: (article: Article) => void;
  selectedTag: string | null;
  onSelectTag: (tag: string) => void;
  onNewsletterClick: () => void;
}

export default function PopularSidebar({
  articles,
  onReadStory,
  selectedTag,
  onSelectTag,
  onNewsletterClick,
}: PopularSidebarProps) {
  const mostRead = [...articles].sort((a, b) => b.viewsCount - a.viewsCount).slice(0, 3);
  const mostShared = [...articles].sort((a, b) => b.sharesCount - a.sharesCount).slice(0, 3);

  return (
    <aside className="space-y-8">
      {/* Most Read Widget */}
      <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-xl">
        <div className="flex items-center gap-2 mb-6 border-b border-gray-100 pb-4">
          <div className="w-8 h-8 rounded-xl bg-orange-100 text-[#1A3A6B] flex items-center justify-center">
            <TrendingUpIcon size={16} />
          </div>
          <h3 className="font-heading font-bold text-lg text-[#111827]">Most Read Stories</h3>
        </div>

        <div className="space-y-4">
          {mostRead.map((article, idx) => (
            <button
              key={article.id}
              type="button"
              onClick={() => onReadStory(article)}
              className="w-full text-left flex items-center gap-3 group cursor-pointer border-b border-gray-50 pb-3 last:border-0 last:pb-0"
            >
              <span className="font-heading font-bold text-lg text-gray-300 group-hover:text-[#1A3A6B] transition-colors w-5 shrink-0">
                0{idx + 1}
              </span>
              <div className="relative w-14 h-14 rounded-xl overflow-hidden shrink-0">
                <Image src={article.coverImage} alt={article.title} fill className="object-cover group-hover:scale-105 transition-transform" />
              </div>
              <div className="flex-1 min-w-0">
                <h4 className="font-heading font-bold text-xs text-[#111827] group-hover:text-[#1A3A6B] transition-colors line-clamp-2 leading-snug">
                  {article.title}
                </h4>
                <div className="flex items-center gap-2 text-[10px] text-gray-400 font-body mt-1">
                  <span className="flex items-center gap-1">
                    <EyeIcon size={10} /> {(article.viewsCount / 1000).toFixed(1)}k
                  </span>
                  <span>•</span>
                  <span>{article.publishedAt}</span>
                </div>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Popular Tags Widget */}
      <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-xl">
        <div className="flex items-center gap-2 mb-6 border-b border-gray-100 pb-4">
          <div className="w-8 h-8 rounded-xl bg-orange-100 text-[#1A3A6B] flex items-center justify-center">
            <TagIcon size={16} />
          </div>
          <h3 className="font-heading font-bold text-lg text-[#111827]">Popular Tags</h3>
        </div>

        <div className="flex flex-wrap gap-2">
          {BLOG_TAGS.map((tag) => {
            const isSelected = selectedTag === tag;
            return (
              <button
                key={tag}
                type="button"
                onClick={() => onSelectTag(tag)}
                className={`px-3.5 py-1.5 rounded-full text-xs font-bold transition-all cursor-pointer ${
                  isSelected
                    ? "bg-[#111827] text-white shadow-md"
                    : "bg-gray-100 text-gray-600 hover:bg-orange-100 hover:text-[#1A3A6B]-dark"
                }`}
              >
                #{tag}
              </button>
            );
          })}
        </div>
      </div>

      {/* Quick Newsletter Widget */}
      <div className="bg-[#111827] rounded-2xl p-6 text-white relative overflow-hidden shadow-xl">
        <div className="absolute top-0 right-0 w-32 h-32 rounded-full bg-white/10 blur-2xl pointer-events-none" />
        <div className="relative z-10">
          <div className="w-10 h-10  bg-white/10 flex items-center justify-center mb-4 backdrop-blur-xs">
            <MailIcon size={20} className="text-[#142E56]" />
          </div>
          <h3 className="font-heading font-bold text-xl text-white mb-2">Join Our Newsletter</h3>
          <p className="text-neutral-200 font-body text-xs leading-relaxed mb-6">
            Get field updates, beneficiary success stories, and upcoming distribution dates delivered directly to your inbox.
          </p>
          <button
            type="button"
            onClick={onNewsletterClick}
            className="w-full btn-primary text-xs py-3 px-5 rounded-[10px] font-bold inline-flex items-center justify-center gap-2 shadow-lg cursor-pointer"
          >
            <span>Subscribe Now</span>
            <ArrowRightIcon size={14} />
          </button>
        </div>
      </div>

      {/* Impact Stat Banner */}
      <div className="bg-[#111827] rounded-2xl p-6 border border-[#F3F4F6]/60">
        <div className="flex items-center gap-2 mb-2 text-[#1A3A6B]-dark font-bold text-xs">
          <HeartIcon size={14} className="fill-[#1A3A6B] text-[#1A3A6B]" />
          <span>Our Field Impact</span>
        </div>
        <h4 className="font-heading font-bold text-2xl text-[#111827] mb-1">14,000+</h4>
        <p className="text-xs text-gray-600 font-body">Children shod across rural Nigerian public schools.</p>
      </div>
    </aside>
  );
}
