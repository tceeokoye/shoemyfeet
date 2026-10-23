"use client";

import Image from "@/components/ui/RealImage";
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
    <section className="my-20 py-16 px-6 sm:px-10 rounded-2xl bg-[#111827] border border-slate-100 relative overflow-hidden">
      {/* Section Header */}
      <div className="text-center max-w-2xl mx-auto mb-16">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-orange-100 text-[#1A3A6B]-dark font-bold text-xs uppercase tracking-wider mb-4">
          <HeartIcon size={14} className="fill-[#1A3A6B] text-[#1A3A6B]" />
          <span>Real Lives Transformed</span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-heading font-bold text-[#111827] mb-4">
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
              className={`bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-xl hover:shadow-2xl transition-all duration-500 grid md:grid-cols-12 gap-0 items-center ${
                isEven ? "" : "md:flex-row-reverse"
              }`}
            >
              {/* Image Column */}
              <div className={`md:col-span-6 relative min-h-[300px] sm:min-h-[360px] ${isEven ? "md:order-1" : "md:order-2"}`}>
                <Image src={story.coverImage} alt={story.childName} fill className="object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />

                {/* Location Badge Overlay */}
                <div className="absolute top-4 left-4 inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/90 backdrop-blur-md text-[#1A3A6B] font-bold text-xs shadow-md">
                  <MapPinIcon size={14} className="text-[#1A3A6B]" />
                  <span>{story.community}, {story.state}</span>
                </div>

                {/* Impact Pill Grid */}
                <div className="absolute bottom-4 left-4 right-4 flex gap-3 z-10">
                  {story.impactMetrics.map((metric) => (
                    <div key={metric.label} className="bg-black/60 backdrop-blur-md px-3 py-1.5 rounded-xl border border-white/20 text-white">
                      <span className="font-heading font-bold text-xs text-[#142E56] block">{metric.value}</span>
                      <span className="text-[10px] text-gray-300 font-body block">{metric.label}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Text Content Column */}
              <div className={`md:col-span-6 p-8 sm:p-10 flex flex-col justify-between ${isEven ? "md:order-2" : "md:order-1"}`}>
                <div>
                  {/* Child Name */}
                  <span className="text-xs font-bold text-[#1A3A6B] uppercase tracking-wider font-heading mb-1 block">
                    Beneficiary Spotlight
                  </span>
                  <h3 className="text-2xl font-heading font-bold text-[#111827] mb-4">
                    {story.childName}
                  </h3>

                  {/* Summary */}
                  <p className="text-gray-600 font-body text-sm leading-relaxed mb-6">
                    {story.summary}
                  </p>

                  {/* Quote Block */}
                  <div className="bg-[#F3F4F6]/70 border-l-4 border-[#1A3A6B] p-4 rounded-r-2xl mb-6 relative">
                    <QuoteIcon size={20} className="text-[#1A3A6B]/30 absolute top-2 right-2" />
                    <p className="font-body italic text-xs sm:text-sm text-gray-700 leading-relaxed">
                      &ldquo;{story.quote}&rdquo;
                    </p>
                  </div>
                </div>

                {/* Action Trigger */}
                <button
                  type="button"
                  onClick={() => onReadStory(matchingArticle)}
                  className="btn-primary text-xs py-3 px-6 rounded-[10px] inline-flex items-center justify-center gap-2 cursor-pointer shadow-md hover:shadow-163D2A/20 self-start"
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
