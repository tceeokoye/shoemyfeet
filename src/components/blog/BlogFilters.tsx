"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { BLOG_CATEGORIES, Article } from "@/lib/blogData";
import { SearchIcon, XIcon, SlidersIcon, ChevronDownIcon, SparklesIcon } from "@/components/ui/Icons";

interface BlogFiltersProps {
  articles: Article[];
  selectedCategory: string;
  onSelectCategory: (cat: string) => void;
  searchQuery: string;
  onSearchChange: (query: string) => void;
  selectedYear: string;
  onSelectYear: (year: string) => void;
  selectedMonth: string;
  onSelectMonth: (month: string) => void;
  sortBy: "latest" | "oldest" | "popular";
  onSortChange: (sort: "latest" | "oldest" | "popular") => void;
  selectedTag: string | null;
  onClearTag: () => void;
  onSelectArticle: (article: Article) => void;
}

export default function BlogFilters({
  articles,
  selectedCategory,
  onSelectCategory,
  searchQuery,
  onSearchChange,
  selectedYear,
  onSelectYear,
  selectedMonth,
  onSelectMonth,
  sortBy,
  onSortChange,
  selectedTag,
  onClearTag,
  onSelectArticle,
}: BlogFiltersProps) {
  const [isSearchFocused, setIsSearchFocused] = useState(false);
  const [recentSearches, setRecentSearches] = useState<string[]>(["Enugu", "Footwear Health", "Kaduna Cobblers"]);
  const searchRef = useRef<HTMLDivElement>(null);

  // Filter matching suggestions
  const suggestions = searchQuery.trim()
    ? articles
        .filter(
          (a) =>
            a.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
            a.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
            a.category.toLowerCase().includes(searchQuery.toLowerCase())
        )
        .slice(0, 4)
    : [];

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (searchRef.current && !searchRef.current.contains(e.target as Node)) {
        setIsSearchFocused(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const hasActiveFilters =
    selectedCategory !== "All Posts" ||
    searchQuery !== "" ||
    selectedYear !== "all" ||
    selectedMonth !== "all" ||
    selectedTag !== null ||
    sortBy !== "latest";

  const handleClearAll = () => {
    onSelectCategory("All Posts");
    onSearchChange("");
    onSelectYear("all");
    onSelectMonth("all");
    onClearTag();
    onSortChange("latest");
  };

  return (
    <div className="mb-12 space-y-8" id="blog-filters-section">
      {/* Search & Secondary Filter Dropdowns Bar */}
      <div className="grid lg:grid-cols-12 gap-4 items-center bg-white p-4 sm:p-5 rounded-2xl border border-gray-100 shadow-lg">
        {/* Search Bar with Live Suggestions Dropdown */}
        <div className="lg:col-span-6 relative" ref={searchRef}>
          <div className="relative flex items-center">
            <SearchIcon size={18} className="absolute left-4 text-gray-400 pointer-events-none" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => onSearchChange(e.target.value)}
              onFocus={() => setIsSearchFocused(true)}
              placeholder="Search articles, topics, locations, or authors..."
              className="w-full pl-11 pr-10 py-3 rounded-xl bg-gray-50 border border-gray-200 font-body text-sm text-[#1a1a2e] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#2563eb]/30 focus:border-[#2563eb] transition-all"
            />
            {searchQuery && (
              <button
                type="button"
                onClick={() => onSearchChange("")}
                className="absolute right-3 text-gray-400 hover:text-gray-600 p-1 cursor-pointer"
              >
                <XIcon size={16} />
              </button>
            )}
          </div>

          {/* Live Search Overlay */}
          <AnimatePresence>
            {isSearchFocused && (
              <motion.div
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 8 }}
                className="absolute top-full left-0 right-0 mt-2 bg-white rounded-2xl shadow-2xl border border-gray-100 p-4 z-50 overflow-hidden"
              >
                {searchQuery.trim() ? (
                  <div>
                    <h5 className="text-[11px] font-bold uppercase tracking-wider text-gray-400 mb-2 font-heading">
                      Matching Stories ({suggestions.length})
                    </h5>
                    {suggestions.length > 0 ? (
                      <div className="space-y-2">
                        {suggestions.map((item) => (
                          <button
                            key={item.id}
                            type="button"
                            onClick={() => {
                              onSelectArticle(item);
                              setIsSearchFocused(false);
                            }}
                            className="w-full text-left p-2.5 rounded-xl hover:bg-blue-50/70 transition-colors flex items-start gap-3 cursor-pointer group"
                          >
                            <span className="px-2 py-0.5 rounded-md bg-orange-100 text-warm-orange-dark font-bold text-[10px] shrink-0 mt-0.5">
                              {item.category}
                            </span>
                            <div className="flex-1 min-w-0">
                              <h6 className="font-heading font-bold text-xs text-[#1a1a2e] group-hover:text-warm-orange transition-colors truncate">
                                {item.title}
                              </h6>
                              <span className="text-[11px] text-gray-500 font-body block truncate">
                                {item.excerpt}
                              </span>
                            </div>
                          </button>
                        ))}
                      </div>
                    ) : (
                      <p className="text-xs text-gray-500 font-body py-3 text-center">
                        No articles match &ldquo;{searchQuery}&rdquo;. Try another term or clear search.
                      </p>
                    )}
                  </div>
                ) : (
                  <div>
                    <h5 className="text-[11px] font-bold uppercase tracking-wider text-gray-400 mb-2 font-heading">
                      Popular Searches
                    </h5>
                    <div className="flex flex-wrap gap-1.5 mb-4">
                      {["Enugu Outreach", "Foot Health", "Kaduna Cobblers", "Back To School"].map((term) => (
                        <button
                          key={term}
                          type="button"
                          onClick={() => onSearchChange(term)}
                          className="px-3 py-1 rounded-full bg-gray-100 hover:bg-orange-100 hover:text-warm-orange-dark text-xs text-gray-600 font-body transition-colors cursor-pointer"
                        >
                          {term}
                        </button>
                      ))}
                    </div>

                    {recentSearches.length > 0 && (
                      <div>
                        <h5 className="text-[11px] font-bold uppercase tracking-wider text-gray-400 mb-2 font-heading">
                          Recent Searches
                        </h5>
                        <div className="flex flex-wrap gap-1.5">
                          {recentSearches.map((term) => (
                            <button
                              key={term}
                              type="button"
                              onClick={() => onSearchChange(term)}
                              className="px-2.5 py-1 rounded-md bg-blue-50 text-royal-blue text-xs font-body hover:bg-blue-100 transition-colors cursor-pointer"
                            >
                              {term}
                            </button>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                )}
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Dropdown Filters (Year, Month, Sort) */}
        <div className="lg:col-span-6 flex flex-wrap sm:flex-nowrap items-center gap-3">
          {/* Year Dropdown */}
          <div className="relative flex-1 min-w-[110px]">
            <select
              value={selectedYear}
              onChange={(e) => onSelectYear(e.target.value)}
              className="w-full appearance-none pl-3 pr-8 py-3 rounded-xl bg-gray-50 border border-gray-200 font-body text-xs font-semibold text-[#1a1a2e] focus:outline-none focus:border-[#2563eb] cursor-pointer"
            >
              <option value="all">All Years</option>
              <option value="2026">2026</option>
              <option value="2025">2025</option>
              <option value="2024">2024</option>
            </select>
            <ChevronDownIcon size={14} className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" />
          </div>

          {/* Month Dropdown */}
          <div className="relative flex-1 min-w-[120px]">
            <select
              value={selectedMonth}
              onChange={(e) => onSelectMonth(e.target.value)}
              className="w-full appearance-none pl-3 pr-8 py-3 rounded-xl bg-gray-50 border border-gray-200 font-body text-xs font-semibold text-[#1a1a2e] focus:outline-none focus:border-[#2563eb] cursor-pointer"
            >
              <option value="all">All Months</option>
              <option value="July">July</option>
              <option value="June">June</option>
              <option value="May">May</option>
              <option value="April">April</option>
            </select>
            <ChevronDownIcon size={14} className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" />
          </div>

          {/* Sort By Dropdown */}
          <div className="relative flex-1 min-w-[130px]">
            <select
              value={sortBy}
              onChange={(e) => onSortChange(e.target.value as "latest" | "oldest" | "popular")}
              className="w-full appearance-none pl-3 pr-8 py-3 rounded-xl bg-gray-50 border border-gray-200 font-body text-xs font-semibold text-[#1a1a2e] focus:outline-none focus:border-[#2563eb] cursor-pointer"
            >
              <option value="latest">Sort: Latest</option>
              <option value="oldest">Sort: Oldest</option>
              <option value="popular">Sort: Most Popular</option>
            </select>
            <ChevronDownIcon size={14} className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" />
          </div>
        </div>
      </div>

      {/* Category Tabs (All 10 Categories) */}
      <div className="relative">
        <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none no-scrollbar">
          {BLOG_CATEGORIES.map((cat) => {
            const isActive = selectedCategory === cat;
            return (
              <button
                key={cat}
                type="button"
                onClick={() => onSelectCategory(cat)}
                className={`relative shrink-0 px-5 py-2.5 rounded-full text-xs font-bold transition-all cursor-pointer whitespace-nowrap ${
                  isActive
                    ? "text-white shadow-md"
                    : "bg-white text-gray-600 border border-gray-200 hover:border-gray-300 hover:text-[#2563eb]"
                }`}
              >
                {isActive && (
                  <motion.div
                    layoutId="categoryTabBackground"
                    className="absolute inset-0 rounded-full bg-[#2563eb]"
                    transition={{ type: "spring", stiffness: 400, damping: 30 }}
                  />
                )}
                <span className="relative z-10">{cat}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Active Filter Chips & Results Summary */}
      {hasActiveFilters && (
        <motion.div
          initial={{ opacity: 0, y: -6 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex flex-wrap items-center gap-2 pt-2 border-t border-gray-200/60 text-xs font-body"
        >
          <span className="font-bold text-[#2563eb] flex items-center gap-1">
            <SlidersIcon size={13} /> Active Filters:
          </span>

          {selectedCategory !== "All Posts" && (
            <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-blue-100 text-[#2563eb] font-semibold">
              Category: {selectedCategory}
              <button type="button" onClick={() => onSelectCategory("All Posts")} className="hover:text-red-500 cursor-pointer ml-1">
                <XIcon size={12} />
              </button>
            </span>
          )}

          {searchQuery && (
            <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-amber-100 text-amber-900 font-semibold">
              Query: &ldquo;{searchQuery}&rdquo;
              <button type="button" onClick={() => onSearchChange("")} className="hover:text-red-500 cursor-pointer ml-1">
                <XIcon size={12} />
              </button>
            </span>
          )}

          {selectedTag && (
            <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-orange-100 text-warm-orange-dark font-semibold">
              Tag: #{selectedTag}
              <button type="button" onClick={onClearTag} className="hover:text-red-500 cursor-pointer ml-1">
                <XIcon size={12} />
              </button>
            </span>
          )}

          {selectedYear !== "all" && (
            <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-purple-100 text-purple-900 font-semibold">
              Year: {selectedYear}
              <button type="button" onClick={() => onSelectYear("all")} className="hover:text-red-500 cursor-pointer ml-1">
                <XIcon size={12} />
              </button>
            </span>
          )}

          {selectedMonth !== "all" && (
            <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-emerald-100 text-emerald-900 font-semibold">
              Month: {selectedMonth}
              <button type="button" onClick={() => onSelectMonth("all")} className="hover:text-red-500 cursor-pointer ml-1">
                <XIcon size={12} />
              </button>
            </span>
          )}

          <button
            type="button"
            onClick={handleClearAll}
            className="text-xs font-bold text-warm-orange hover:underline cursor-pointer ml-auto"
          >
            Clear All Filters
          </button>
        </motion.div>
      )}
    </div>
  );
}
