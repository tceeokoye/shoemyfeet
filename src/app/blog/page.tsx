"use client";

import { useState, useMemo } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Breadcrumbs from "@/components/blog/Breadcrumbs";
import BlogHero from "@/components/blog/BlogHero";
import FeaturedArticle from "@/components/blog/FeaturedArticle";
import TrendingStories from "@/components/blog/TrendingStories";
import BlogFilters from "@/components/blog/BlogFilters";
import ArticlesGrid from "@/components/blog/ArticlesGrid";
import PopularSidebar from "@/components/blog/PopularSidebar";
import SuccessStoriesSection from "@/components/blog/SuccessStoriesSection";
import EducationalResourcesSection from "@/components/blog/EducationalResourcesSection";
import VolunteerSpotlightSection from "@/components/blog/VolunteerSpotlightSection";
import UpcomingEventsSection from "@/components/blog/UpcomingEventsSection";
import PopularTagsSection from "@/components/blog/PopularTagsSection";
import NewsletterSection from "@/components/blog/NewsletterSection";
import FinalCTA from "@/components/blog/FinalCTA";

import ArticleReaderModal from "@/components/blog/ArticleReaderModal";
import AuthorProfileModal from "@/components/blog/AuthorProfileModal";
import EventRSVPModal from "@/components/blog/EventRSVPModal";

import { ARTICLES, AUTHORS, Article, Author, Event, EducationalResource, VolunteerSpotlight } from "@/lib/blogData";
import { generateBreadcrumbSchema } from "@/lib/seoSchemas";

export default function BlogPage() {
  // Filter States
  const [selectedCategory, setSelectedCategory] = useState<string>("All Posts");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [selectedYear, setSelectedYear] = useState<string>("all");
  const [selectedMonth, setSelectedMonth] = useState<string>("all");
  const [sortBy, setSortBy] = useState<"latest" | "oldest" | "popular">("latest");
  const [selectedTag, setSelectedTag] = useState<string | null>(null);

  // Active Modals States
  const [activeArticle, setActiveArticle] = useState<Article | null>(null);
  const [activeAuthor, setActiveAuthor] = useState<Author | null>(null);
  const [activeEvent, setActiveEvent] = useState<Event | null>(null);

  // Primary Featured Article (First featured post)
  const featuredArticle = ARTICLES.find((a) => a.isFeatured) || ARTICLES[0];

  // Client-side filtering logic
  const filteredArticles = useMemo(() => {
    return ARTICLES.filter((article) => {
      // Category Filter
      if (selectedCategory !== "All Posts" && article.category !== selectedCategory) {
        return false;
      }
      // Tag Filter
      if (selectedTag && !article.tags.includes(selectedTag)) {
        return false;
      }
      // Year Filter
      if (selectedYear !== "all" && article.year.toString() !== selectedYear) {
        return false;
      }
      // Month Filter
      if (selectedMonth !== "all" && article.month !== selectedMonth) {
        return false;
      }
      // Search Query Filter
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase();
        const matchesTitle = article.title.toLowerCase().includes(q);
        const matchesExcerpt = article.excerpt.toLowerCase().includes(q);
        const matchesCategory = article.category.toLowerCase().includes(q);
        const matchesTag = article.tags.some((t) => t.toLowerCase().includes(q));
        const matchesAuthor = article.author.name.toLowerCase().includes(q);
        if (!matchesTitle && !matchesExcerpt && !matchesCategory && !matchesTag && !matchesAuthor) {
          return false;
        }
      }
      return true;
    }).sort((a, b) => {
      if (sortBy === "oldest") {
        return +new Date(a.publishedAt) - +new Date(b.publishedAt);
      }
      if (sortBy === "popular") {
        return b.viewsCount - a.viewsCount;
      }
      // Default: latest
      return +new Date(b.publishedAt) - +new Date(a.publishedAt);
    });
  }, [selectedCategory, selectedTag, selectedYear, selectedMonth, searchQuery, sortBy]);

  // Handlers for smooth navigation triggers
  const handleScrollToFilters = () => {
    const el = document.getElementById("blog-filters-section");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  const handleScrollToNewsletter = () => {
    const el = document.getElementById("newsletter-section");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  const handleAuthorClick = (authorId: string) => {
    const found = Object.values(AUTHORS).find((a) => a.id === authorId) || ARTICLES[0].author;
    setActiveAuthor(found);
  };

  const handleResourceClick = (resource: EducationalResource) => {
    // Open full story or resource alert
    const resourceArticle = ARTICLES.find((a) => a.category === "Health & Education") || ARTICLES[1];
    setActiveArticle(resourceArticle);
  };

  const handleSpotlightClick = (spotlight: VolunteerSpotlight) => {
    const matching = ARTICLES.find((a) => a.category === "Volunteer Stories" || a.category === "Partnerships") || ARTICLES[2];
    setActiveArticle(matching);
  };

  // Structured Schema Data
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", item: "https://shoemyfeet.org" },
    { name: "Blog & Stories", item: "https://shoemyfeet.org/blog" },
  ]);

  return (
    <>
      {/* Inject JSON-LD Breadcrumb Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      <Navbar />

      <main className="min-h-screen bg-soft-white">
        {/* Hero Section */}
        <BlogHero
          onReadLatestClick={() => setActiveArticle(featuredArticle)}
          onExploreCategoriesClick={handleScrollToFilters}
        />

        {/* Main Content Container */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          {/* Breadcrumb Navigation */}
          <Breadcrumbs
            category={selectedCategory !== "All Posts" ? selectedCategory : undefined}
            onCategoryClick={(cat) => setSelectedCategory(cat)}
          />

          {/* Featured Article Cover */}
          <FeaturedArticle
            article={featuredArticle}
            onReadStory={(article) => setActiveArticle(article)}
            onAuthorClick={handleAuthorClick}
          />

          {/* Trending Stories Section */}
          <TrendingStories
            articles={ARTICLES}
            onReadStory={(article) => setActiveArticle(article)}
          />

          {/* Search, Categories Filter, & Dropdowns Bar */}
          <BlogFilters
            articles={ARTICLES}
            selectedCategory={selectedCategory}
            onSelectCategory={setSelectedCategory}
            searchQuery={searchQuery}
            onSearchChange={setSearchQuery}
            selectedYear={selectedYear}
            onSelectYear={setSelectedYear}
            selectedMonth={selectedMonth}
            onSelectMonth={setSelectedMonth}
            sortBy={sortBy}
            onSortChange={setSortBy}
            selectedTag={selectedTag}
            onClearTag={() => setSelectedTag(null)}
            onSelectArticle={(article) => setActiveArticle(article)}
          />

          {/* Articles Feed & Popular Sidebar (8 cols / 4 cols layout) */}
          <div className="grid lg:grid-cols-12 gap-10 items-start">
            <div className="lg:col-span-8">
              <ArticlesGrid
                articles={filteredArticles}
                onReadStory={(article) => setActiveArticle(article)}
                onAuthorClick={handleAuthorClick}
                onResetFilters={() => {
                  setSelectedCategory("All Posts");
                  setSearchQuery("");
                  setSelectedYear("all");
                  setSelectedMonth("all");
                  setSelectedTag(null);
                  setSortBy("latest");
                }}
              />
            </div>

            {/* Desktop Sidebar */}
            <div className="lg:col-span-4 hidden lg:block sticky top-28">
              <PopularSidebar
                articles={ARTICLES}
                onReadStory={(article) => setActiveArticle(article)}
                selectedTag={selectedTag}
                onSelectTag={(tag) => {
                  setSelectedTag(tag);
                  handleScrollToFilters();
                }}
                onNewsletterClick={handleScrollToNewsletter}
              />
            </div>
          </div>

          {/* Success Stories Showcase */}
          <SuccessStoriesSection
            articles={ARTICLES}
            onReadStory={(article) => setActiveArticle(article)}
          />

          {/* Educational Resources & Guides */}
          <EducationalResourcesSection onResourceClick={handleResourceClick} />

          {/* Volunteer & Partner Spotlights */}
          <VolunteerSpotlightSection onSpotlightClick={handleSpotlightClick} />

          {/* Upcoming Events & Live Countdown */}
          <UpcomingEventsSection onRSVPClick={(event) => setActiveEvent(event)} />

          {/* Popular Tags Cloud */}
          <PopularTagsSection
            articles={ARTICLES}
            selectedTag={selectedTag}
            onSelectTag={(tag) => {
              setSelectedTag(tag);
              handleScrollToFilters();
            }}
          />

          {/* Newsletter Subscription */}
          <NewsletterSection />

          {/* Final Call to Action */}
          <FinalCTA />
        </div>
      </main>

      <Footer />

      {/* Reader Modal */}
      {activeArticle && (
        <ArticleReaderModal
          article={activeArticle}
          onClose={() => setActiveArticle(null)}
          onSelectArticle={(article) => setActiveArticle(article)}
          onAuthorClick={handleAuthorClick}
        />
      )}

      {/* Author Profile Modal */}
      {activeAuthor && (
        <AuthorProfileModal
          author={activeAuthor}
          onClose={() => setActiveAuthor(null)}
          onSelectArticle={(article) => setActiveArticle(article)}
        />
      )}

      {/* Event RSVP Modal */}
      {activeEvent && (
        <EventRSVPModal
          event={activeEvent}
          onClose={() => setActiveEvent(null)}
        />
      )}
    </>
  );
}
