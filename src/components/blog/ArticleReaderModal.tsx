"use client";

import { useState, useEffect, useRef } from "react";
import Image from "@/components/ui/RealImage";
import { motion, AnimatePresence } from "framer-motion";
import { Article, ARTICLES, ContentBlock } from "@/lib/blogData";
import {
  XIcon,
  CalendarIcon,
  ClockIcon,
  EyeIcon,
  Share2Icon,
  BookmarkIcon,
  PrinterIcon,
  SunIcon,
  MoonIcon,
  SparklesIcon,
  DownloadIcon,
  QuoteIcon,
  CheckCircle2Icon,
  PlayIcon,
  ArrowRightIcon,
  UserIcon,
} from "@/components/ui/Icons";
import { trackArticleShare, trackEvent } from "@/lib/analytics";

interface ArticleReaderModalProps {
  article: Article | null;
  onClose: () => void;
  onSelectArticle: (article: Article) => void;
  onAuthorClick: (authorId: string) => void;
}

export default function ArticleReaderModal({
  article,
  onClose,
  onSelectArticle,
  onAuthorClick,
}: ArticleReaderModalProps) {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [fontSize, setFontSize] = useState<"sm" | "base" | "lg">("base");
  const [themeMode, setThemeMode] = useState<"light" | "sepia" | "dark">("light");
  const [isBookmarked, setIsBookmarked] = useState(false);
  const [copiedToast, setCopiedToast] = useState(false);
  const contentRef = useRef<HTMLDivElement>(null);

  // Focus & Keyboard Listeners
  useEffect(() => {
    function handleKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") {
        onClose();
      }
    }
    if (article) {
      window.addEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "hidden";
    }
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "unset";
    };
  }, [article, onClose]);

  // Track scroll progress inside reader container
  const handleScroll = () => {
    if (contentRef.current) {
      const { scrollTop, scrollHeight, clientHeight } = contentRef.current;
      const progress = (scrollTop / (scrollHeight - clientHeight)) * 100;
      setScrollProgress(Math.min(100, Math.max(0, progress)));
    }
  };

  if (!article) return null;

  // Font size styling map
  const getFontSizeClass = () => {
    switch (fontSize) {
      case "sm":
        return "text-sm leading-relaxed";
      case "lg":
        return "text-lg leading-loose";
      default:
        return "text-base leading-relaxed";
    }
  };

  // Theme mode styling map
  const getThemeClass = () => {
    switch (themeMode) {
      case "sepia":
        return "bg-[#fbf0d9] text-[#433422]";
      case "dark":
        return "bg-[#121824] text-[#e2e8f0]";
      default:
        return "bg-white text-[#111827]";
    }
  };

  const handleCopyLink = () => {
    if (typeof window !== "undefined") {
      navigator.clipboard.writeText(window.location.href);
      setCopiedToast(true);
      setTimeout(() => setCopiedToast(false), 2500);
      trackArticleShare(article.id, "copy_link");
    }
  };

  const handlePrint = () => {
    if (typeof window !== "undefined") {
      window.print();
    }
  };

  const toggleBookmark = () => {
    setIsBookmarked(!isBookmarked);
    trackEvent("article_bookmark", article.title, { isBookmarked: !isBookmarked });
  };

  // Related articles (same category or tags, excluding current)
  const relatedArticles = ARTICLES.filter(
    (a) => a.id !== article.id && (a.category === article.category || a.tags.some((t) => article.tags.includes(t)))
  ).slice(0, 3);

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 md:p-6 overflow-hidden">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="absolute inset-0 bg-black/80 backdrop-blur-md"
        />

        {/* Toast Notification */}
        <AnimatePresence>
          {copiedToast && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="absolute top-6 left-1/2 -translate-x-1/2 bg-forest-green text-white text-xs font-bold px-4 py-2 rounded-full shadow-2xl z-50 flex items-center gap-2"
            >
              <CheckCircle2Icon size={16} /> Link copied to clipboard!
            </motion.div>
          )}
        </AnimatePresence>

        {/* Modal Main Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          className={`relative w-full max-w-4xl max-h-[92vh] rounded-2xl shadow-2xl flex flex-col overflow-hidden border border-white/20 z-10 transition-colors duration-300 ${getThemeClass()}`}
        >
          {/* Top Sticky Reading Progress Bar */}
          <div className="w-full bg-gray-200/40 h-1.5 shrink-0">
            <div
              className="bg-[#1A3A6B] h-full transition-all duration-150"
              style={{ width: `${scrollProgress}%` }}
            />
          </div>

          {/* Reader Top Controls Toolbar */}
          <div className="px-6 py-4 border-b border-gray-200/30 flex flex-wrap items-center justify-between gap-4 shrink-0 bg-white/5 backdrop-blur-md">
            {/* Category & Reading Time */}
            <div className="flex items-center gap-3">
              <span className="px-3 py-1 rounded-full bg-orange-100 text-[#1A3A6B]-dark font-bold text-xs">
                {article.category}
              </span>
              <span className="text-xs opacity-75 font-body flex items-center gap-1">
                <ClockIcon size={13} /> {article.readingTime}
              </span>
            </div>

            {/* Interactive Reader Options (Font size, Theme, Share, Bookmark, Print, Close) */}
            <div className="flex items-center gap-2">
              {/* Font Size Adjuster */}
              <div className="flex items-center bg-gray-200/30 rounded-lg p-1 text-xs font-bold font-heading">
                <button
                  type="button"
                  onClick={() => setFontSize("sm")}
                  className={`px-2 py-0.5 rounded cursor-pointer ${fontSize === "sm" ? "bg-white text-[#1A3A6B] shadow-xs" : "opacity-60"}`}
                >
                  A-
                </button>
                <button
                  type="button"
                  onClick={() => setFontSize("base")}
                  className={`px-2 py-0.5 rounded cursor-pointer ${fontSize === "base" ? "bg-white text-[#1A3A6B] shadow-xs" : "opacity-60"}`}
                >
                  A
                </button>
                <button
                  type="button"
                  onClick={() => setFontSize("lg")}
                  className={`px-2 py-0.5 rounded cursor-pointer ${fontSize === "lg" ? "bg-white text-[#1A3A6B] shadow-xs" : "opacity-60"}`}
                >
                  A+
                </button>
              </div>

              {/* Theme Mode Toggle */}
              <button
                type="button"
                onClick={() => setThemeMode(themeMode === "light" ? "sepia" : themeMode === "sepia" ? "dark" : "light")}
                className="p-2 rounded-lg bg-gray-200/30 hover:bg-gray-200/50 transition-colors cursor-pointer text-xs font-bold inline-flex items-center gap-1"
                title="Toggle Reading Theme"
              >
                {themeMode === "light" && <SunIcon size={16} className="text-[#1A3A6B]" />}
                {themeMode === "sepia" && <SparklesIcon size={16} className="text-[#1A3A6B]" />}
                {themeMode === "dark" && <MoonIcon size={16} className="text-orange-400" />}
              </button>

              {/* Bookmark Button */}
              <button
                type="button"
                onClick={toggleBookmark}
                className={`p-2 rounded-lg transition-colors cursor-pointer ${
                  isBookmarked ? "bg-[#1A3A6B] text-white" : "bg-gray-200/30 hover:bg-gray-200/50"
                }`}
                title="Bookmark Article"
              >
                <BookmarkIcon size={16} />
              </button>

              {/* Copy Link Button */}
              <button
                type="button"
                onClick={handleCopyLink}
                className="p-2 rounded-lg bg-gray-200/30 hover:bg-gray-200/50 transition-colors cursor-pointer"
                title="Share Article Link"
              >
                <Share2Icon size={16} />
              </button>

              {/* Print Button */}
              <button
                type="button"
                onClick={handlePrint}
                className="p-2 rounded-lg bg-gray-200/30 hover:bg-gray-200/50 transition-colors cursor-pointer hidden sm:block"
                title="Print Article"
              >
                <PrinterIcon size={16} />
              </button>

              {/* Close Button */}
              <button
                type="button"
                onClick={onClose}
                className="p-2 rounded-full bg-red-500/10 text-red-500 hover:bg-red-500 hover:text-white transition-colors cursor-pointer ml-2"
                title="Close Reader (ESC)"
              >
                <XIcon size={18} />
              </button>
            </div>
          </div>

          {/* Modal Article Body (Scrollable Container) */}
          <div ref={contentRef} onScroll={handleScroll} className="overflow-y-auto p-6 sm:p-10 space-y-8 flex-1">
            {/* Header Header */}
            <div>
              <div className="flex items-center gap-3 text-xs font-body opacity-70 mb-3">
                <span className="flex items-center gap-1 font-medium">
                  <CalendarIcon size={13} /> {article.publishedAt}
                </span>
                <span>•</span>
                <span className="flex items-center gap-1 font-medium">
                  <EyeIcon size={13} /> {(article.viewsCount / 1000).toFixed(1)}k Views
                </span>
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-4xl font-heading font-bold mb-4 leading-tight">
                {article.title}
              </h1>

              {article.subtitle && (
                <p className="text-lg opacity-85 font-body leading-relaxed mb-6 font-medium">
                  {article.subtitle}
                </p>
              )}

              {/* Author Trigger Header */}
              <button
                type="button"
                onClick={() => onAuthorClick(article.author.id)}
                className="flex items-center gap-3 p-3  bg-gray-100/50 border border-gray-200/40 hover:bg-[#F3F4F6]/50 transition-all cursor-pointer inline-flex"
              >
                <div className="relative w-12 h-12 rounded-full overflow-hidden border-2 border-[#1A3A6B]">
                  <Image src={article.author.avatar} alt={article.author.name} fill className="object-cover" />
                </div>
                <div className="text-left">
                  <h4 className="font-heading font-bold text-sm text-[#1A3A6B]">{article.author.name}</h4>
                  <span className="text-xs opacity-75 font-body block">{article.author.role}</span>
                </div>
              </button>
            </div>

            {/* Cover Image */}
            <div className="relative h-72 sm:h-96 rounded-2xl overflow-hidden shadow-lg border border-gray-200/30">
              <Image src={article.coverImage} alt={article.title} fill className="object-cover" priority />
            </div>

            {/* Content Blocks Engine */}
            <div className={`space-y-6 font-body ${getFontSizeClass()}`}>
              {article.contentBlocks.map((block, idx) => {
                switch (block.type) {
                  case "paragraph":
                    return (
                      <p key={idx} className="opacity-90 leading-relaxed">
                        {block.text}
                      </p>
                    );

                  case "heading":
                    return (
                      <h2 key={idx} className="text-2xl font-heading font-bold mt-8 mb-4 border-b border-gray-200/30 pb-2">
                        {block.text}
                      </h2>
                    );

                  case "pullQuote":
                    return (
                      <div key={idx} className="my-8 p-6  bg-[#111827] border-l-4 border-[#1A3A6B] relative">
                        <QuoteIcon size={28} className="text-[#1A3A6B]/30 absolute top-4 right-4" />
                        <p className="font-heading font-bold italic text-lg sm:text-xl text-[#1A3A6B]-dark mb-2 leading-relaxed">
                          &ldquo;{block.quote}&rdquo;
                        </p>
                        {block.attribution && (
                          <span className="text-xs font-body font-bold opacity-75 block">
                            — {block.attribution}
                          </span>
                        )}
                      </div>
                    );

                  case "statsGrid":
                    return (
                      <div key={idx} className="grid sm:grid-cols-3 gap-4 my-8">
                        {block.stats.map((stat, sIdx) => (
                          <div key={sIdx} className="bg-slate-50/80 p-5  text-center border border-slate-100 shadow-sm">
                            <span className="font-heading font-bold text-2xl text-[#1A3A6B] block mb-1">{stat.value}</span>
                            <span className="font-bold text-xs text-[#1A3A6B] block mb-1">{stat.label}</span>
                            <span className="text-[11px] opacity-75 block">{stat.description}</span>
                          </div>
                        ))}
                      </div>
                    );

                  case "calloutBox":
                    return (
                      <div key={idx} className="p-5  bg-emerald-50 text-emerald-900 border border-emerald-200 my-6">
                        <h4 className="font-heading font-bold text-sm mb-1">{block.title}</h4>
                        <p className="text-xs opacity-90">{block.text}</p>
                      </div>
                    );

                  case "bulletList":
                    return (
                      <ul key={idx} className="space-y-2 my-4 pl-4">
                        {block.items.map((item, bIdx) => (
                          <li key={bIdx} className="flex items-start gap-2 text-sm">
                            <CheckCircle2Icon size={16} className="text-forest-green shrink-0 mt-0.5" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    );

                  default:
                    return null;
                }
              })}
            </div>

            {/* Article Tags */}
            <div className="pt-6 border-t border-gray-200/30 flex flex-wrap items-center gap-2 text-xs font-body">
              <span className="font-bold opacity-75">Tags:</span>
              {article.tags.map((tag) => (
                <span key={tag} className="px-3 py-1 rounded-full bg-gray-200/50 text-xs font-semibold">
                  #{tag}
                </span>
              ))}
            </div>

            {/* Author Profile Bio Box */}
            <div className="bg-[#111827] text-white p-6 sm:p-8 rounded-2xl shadow-xl flex flex-col sm:flex-row items-center gap-6">
              <div className="relative w-20 h-20 rounded-full overflow-hidden border-4 border-white/20 shrink-0">
                <Image src={article.author.avatar} alt={article.author.name} fill className="object-cover" />
              </div>
              <div className="text-center sm:text-left flex-1">
                <span className="text-xs uppercase font-bold text-[#142E56] tracking-wider font-heading block mb-1">
                  About The Author
                </span>
                <h3 className="font-heading font-bold text-xl text-white mb-1">{article.author.name}</h3>
                <span className="text-xs text-neutral-300 font-body block mb-3">{article.author.role}</span>
                <p className="text-xs text-neutral-200 font-body leading-relaxed mb-4">{article.author.bio}</p>

                <button
                  type="button"
                  onClick={() => onAuthorClick(article.author.id)}
                  className="btn-primary text-xs py-2 px-4 rounded-[10px] font-bold inline-flex items-center gap-1 shadow-md cursor-pointer"
                >
                  <UserIcon size={14} />
                  <span>View Author Profile & All Posts ({article.author.articleCount})</span>
                </button>
              </div>
            </div>

            {/* Related Articles Section ("You May Also Like") */}
            {relatedArticles.length > 0 && (
              <div className="pt-8 border-t border-gray-200/30">
                <h3 className="text-xl font-heading font-bold mb-6">You May Also Like</h3>
                <div className="grid sm:grid-cols-3 gap-6">
                  {relatedArticles.map((rel) => (
                    <button
                      key={rel.id}
                      type="button"
                      onClick={() => onSelectArticle(rel)}
                      className="text-left bg-gray-50/80 p-4  border border-gray-200/40 hover:bg-[#F3F4F6]/50 transition-all cursor-pointer group"
                    >
                      <div className="relative h-28 rounded-xl overflow-hidden mb-3">
                        <Image src={rel.coverImage} alt={rel.title} fill className="object-cover group-hover:scale-105 transition-transform" />
                      </div>
                      <span className="text-[10px] font-bold text-[#1A3A6B] uppercase tracking-wider block mb-1 font-heading">
                        {rel.category}
                      </span>
                      <h4 className="font-heading font-bold text-xs text-[#111827] group-hover:text-[#1A3A6B] transition-colors line-clamp-2 mb-2 leading-snug">
                        {rel.title}
                      </h4>
                      <span className="text-[10px] opacity-60 font-body block">{rel.readingTime}</span>
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
