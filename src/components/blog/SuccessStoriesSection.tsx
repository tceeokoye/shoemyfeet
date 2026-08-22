"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { SUCCESS_STORIES, Article } from "@/lib/blogData";
import { fadeUp, viewportConfig, scaleIn } from "@/lib/animations";
import { MapPinIcon, QuoteIcon, ArrowRightIcon, HeartIcon, SparklesIcon } from "@/components/ui/Icons";

interface SuccessStoriesSectionProps {
  articles: Article[];
  onReadStory: (article: Article) => void;
}

export default function SuccessStoriesSection({ articles, onReadStory }: SuccessStoriesSectionProps) {
  return (
    <section className="my-20 py-16 px-6 sm:px-10 rounded-3xl bg-[#2563eb] border border-blue-100 relative overflow-hidden">
      {/* Section Header */}
      <div className="text-center max-w-2xl mx-auto mb-16">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-orange-100 text-warm-orange-dark font-bold text-xs uppercase tracking-wider mb-4">
          <HeartIcon size={14} className="fill-warm-orange text-warm-orange" />
          <span>Real Lives Transformed</span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-heading font-bold text-[#1a1a2e] mb-4">
          Success Stories of Hope & Resilience
        </h2>
        <p className="text-gray-600 font-body text-sm sm:text-base leading-relaxed">
          Every pair of shoes distributed carries a personal story of dignity, protection, and renewed academic enthusiasm. Meet the children whose lives are moving forward step by step.
        </p>
      </div>

      {/* Alternating Cards List */}
      <div className="space-y-12 max-w-5xl mx-auto">
        {SUCCESS_STORIES.map((story, idx) => {
          const isEven = idx % 2 === 0;
          const matchingArticle = articles.find((a) => a.id === story.storyId) || articles[0];

          return (
            <motion.div
              key={story.id}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={viewportConfig}
              className={`bg-white rounded-3xl overflow-hidden border border-gray-100 shadow-xl hover:shadow-2xl transition-all duration-500 grid md:grid-cols-12 gap-0 items-center ${
                isEven ? "" : "md:flex-row-reverse"
              }`}
            >
              {/* Image Column */}
              <div className={`md:col-span-6 relative min-h-[300px] sm:min-h-[360px] ${isEven ? "md:order-1" : "md:order-2"}`}>
                <Image src={story.coverImage} alt={story.childName} fill className="object-cover" />
                <div className="absolute inset-0 bg-[#2563eb]" />

                {/* Location Badge Overlay */}
                <div className="absolute top-4 left-4 inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/90 backdrop-blur-md text-[#2563eb] font-bold text-xs shadow-md">
                  <MapPinIcon size={14} className="text-warm-orange" />
                  <span>{story.community}, {story.state}</span>
                </div>

                {/* Impact Pill Grid */}
                <div className="absolute bottom-4 left-4 right-4 flex gap-3 z-10">
                  {story.impactMetrics.map((metric) => (
                    <div key={metric.label} className="bg-black/60 backdrop-blur-md px-3 py-1.5 rounded-xl border border-white/20 text-white">
                      <span className="font-heading font-bold text-xs text-hope-yellow block">{metric.value}</span>
                      <span className="text-[10px] text-gray-300 font-body block">{metric.label}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Text Content Column */}
              <div className={`md:col-span-6 p-8 sm:p-10 flex flex-col justify-between ${isEven ? "md:order-2" : "md:order-1"}`}>
                <div>
                  {/* Child Name */}
                  <span className="text-xs font-bold text-warm-orange uppercase tracking-wider font-heading mb-1 block">
                    Beneficiary Spotlight
                  </span>
                  <h3 className="text-2xl font-heading font-bold text-[#1a1a2e] mb-4">
                    {story.childName}
                  </h3>

                  {/* Summary */}
                  <p className="text-gray-600 font-body text-sm leading-relaxed mb-6">
                    {story.summary}
                  </p>

                  {/* Quote Block */}
                  <div className="bg-orange-50/70 border-l-4 border-warm-orange p-4 rounded-r-2xl mb-6 relative">
                    <QuoteIcon size={20} className="text-warm-orange/30 absolute top-2 right-2" />
                    <p className="font-body italic text-xs sm:text-sm text-gray-700 leading-relaxed">
                      &ldquo;{story.quote}&rdquo;
                    </p>
                  </div>
                </div>

                {/* Action Trigger */}
                <button
                  type="button"
                  onClick={() => onReadStory(matchingArticle)}
                  className="btn-orange text-xs py-3 px-6 rounded-full inline-flex items-center justify-center gap-2 cursor-pointer shadow-md hover:shadow-orange-500/20 self-start"
                >
                  <span>Read Story</span>
                  <ArrowRightIcon size={14} />
                </button>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
