"use client";

import Image from "@/components/ui/RealImage";
import { motion, AnimatePresence } from "framer-motion";
import { Author, Article, ARTICLES } from "@/lib/blogData";
import { XIcon, BookOpenIcon, EyeIcon, MailIcon, ArrowRightIcon, CalendarIcon } from "@/components/ui/Icons";

interface AuthorProfileModalProps {
  author: Author | null;
  onClose: () => void;
  onSelectArticle: (article: Article) => void;
}

export default function AuthorProfileModal({ author, onClose, onSelectArticle }: AuthorProfileModalProps) {
  if (!author) return null;

  // Filter articles authored by this person
  const authorArticles = ARTICLES.filter((a) => a.author.id === author.id);

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 overflow-hidden">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="absolute inset-0 bg-black/75 backdrop-blur-md"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          className="relative w-full max-w-2xl bg-white rounded-2xl shadow-2xl overflow-hidden border border-gray-100 z-10 flex flex-col max-h-[90vh]"
        >
          {/* Header Banner */}
          <div className="bg-[#111827] h-32 relative p-6 flex items-start justify-between">
            <div className="w-8 h-8 rounded-full bg-white/20 text-white flex items-center justify-center backdrop-blur-xs">
              <BookOpenIcon size={16} />
            </div>
            <button
              type="button"
              onClick={onClose}
              className="p-2 rounded-full bg-black/20 text-white hover:bg-white hover:text-black transition-colors cursor-pointer"
            >
              <XIcon size={18} />
            </button>
          </div>

          {/* Body Content */}
          <div className="p-6 sm:p-8 -mt-16 overflow-y-auto space-y-6">
            {/* Profile Avatar & Title */}
            <div className="flex flex-col sm:flex-row items-center sm:items-end gap-5 text-center sm:text-left">
              <div className="relative w-24 h-24 rounded-2xl overflow-hidden border-4 border-white shadow-xl shrink-0">
                <Image src={author.avatar} alt={author.name} fill className="object-cover" />
              </div>
              <div className="mb-2">
                <h2 className="text-2xl font-heading font-bold text-[#111827]">{author.name}</h2>
                <span className="text-xs font-bold text-[#1A3A6B] font-body block">{author.role}</span>
              </div>
            </div>

            {/* Author Stats Strip */}
            <div className="grid grid-cols-2 gap-4 bg-gray-50 p-4  border border-gray-100 text-center">
              <div>
                <span className="font-heading font-bold text-xl text-[#1A3A6B] block">{author.articleCount}</span>
                <span className="text-xs text-gray-500 font-body block">Articles Published</span>
              </div>
              <div>
                <span className="font-heading font-bold text-xl text-[#1A3A6B] block">{(author.totalViews / 1000).toFixed(1)}k</span>
                <span className="text-xs text-gray-500 font-body block">Total Readers Reached</span>
              </div>
            </div>

            {/* Biography */}
            <div>
              <h4 className="font-heading font-bold text-xs text-gray-400 uppercase tracking-wider mb-2">Biography</h4>
              <p className="text-gray-600 font-body text-xs sm:text-sm leading-relaxed">{author.bio}</p>
            </div>

            {/* Social Contact Links */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              {author.socialLinks.email && (
                <a
                  href={`mailto:${author.socialLinks.email}`}
                  className="px-4 py-2 rounded-full bg-slate-50 text-[#1A3A6B] hover:bg-orange-100 text-xs font-bold font-body transition-colors inline-flex items-center gap-1.5"
                >
                  <MailIcon size={14} /> Contact Author
                </a>
              )}
            </div>

            {/* Articles written by author */}
            <div className="pt-4 border-t border-gray-100">
              <h4 className="font-heading font-bold text-sm text-[#111827] mb-4">
                Articles by {author.name} ({authorArticles.length})
              </h4>
              <div className="space-y-3">
                {authorArticles.map((article) => (
                  <button
                    key={article.id}
                    type="button"
                    onClick={() => {
                      onSelectArticle(article);
                      onClose();
                    }}
                    className="w-full text-left p-3.5  bg-gray-50 hover:bg-[#F3F4F6]/70 border border-gray-100 transition-all flex items-center justify-between gap-4 cursor-pointer group"
                  >
                    <div className="flex items-center gap-3 min-w-0">
                      <div className="relative w-12 h-12 rounded-xl overflow-hidden shrink-0">
                        <Image src={article.coverImage} alt={article.title} fill className="object-cover" />
                      </div>
                      <div className="truncate">
                        <h5 className="font-heading font-bold text-xs text-[#111827] group-hover:text-[#1A3A6B] transition-colors truncate">
                          {article.title}
                        </h5>
                        <div className="flex items-center gap-2 text-[10px] text-gray-400 font-body mt-0.5">
                          <span className="flex items-center gap-1">
                            <CalendarIcon size={10} /> {article.publishedAt}
                          </span>
                          <span>•</span>
                          <span className="flex items-center gap-1">
                            <EyeIcon size={10} /> {(article.viewsCount / 1000).toFixed(1)}k
                          </span>
                        </div>
                      </div>
                    </div>
                    <ArrowRightIcon size={14} className="text-gray-400 group-hover:text-[#1A3A6B] group-hover:translate-x-1 transition-transform shrink-0" />
                  </button>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
