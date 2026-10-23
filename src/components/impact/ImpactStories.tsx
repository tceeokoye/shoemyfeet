"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "@/components/ui/RealImage";
import { staggerContainer, fadeUp, viewportConfig } from "@/lib/animations";
import { MapPinIcon, ArrowRightIcon } from "@/components/ui/Icons";

const stories = [
  {
    id: 1,
    name: "Chisom N.",
    community: "Enugu State",
    role: "Primary 4 Student, Age 9",
    image: "/images/story1.webp",
    before: "Chisom used to walk over 2km to school barefoot, arriving with cracked, bleeding feet. She often felt embarrassed around her classmates and would hide her feet under the desk.",
    after: "With her new pair of school shoes, Chisom arrives at school confident and pain-free. Her teacher says she's the first to raise her hand and her grades have improved dramatically.",
    quote: "I used to be afraid to go to school because my feet were always hurting. Now I run to school every morning in my new shoes!",
    tag: "Student Transformation",
    tagColor: "bg-emerald-100 text-emerald-800 border-emerald-200",
    accentClass: "bg-[#047857]",
  },
  {
    id: 2,
    name: "Mrs. Grace O.",
    community: "Kaduna State",
    role: "Primary School Teacher",
    image: "/images/story2.webp",
    before: "In Mrs. Okonkwo's class, nearly half the students lacked proper footwear. Many would miss school during rainy season due to infections and foot pain.",
    after: "After Shoe My Feet's distribution, classroom attendance jumped by nearly 30%. Children are more focused, more confident, and genuinely excited to learn.",
    quote: "We saw attendance increase by nearly 30% after the shoe distribution. Children were more confident and focused in class.",
    tag: "School Partnership",
    tagColor: "bg-[#FFFFFF] text-[#1A3A6B] border-[#F3F4F6]",
    accentClass: "bg-[#1A3A6B]",
  },
  {
    id: 3,
    name: "Emeka E.",
    community: "Enugu State",
    role: "Child Shoemaking Graduate, Age 22",
    image: "/images/story3.webp",
    before: "Emeka was unemployed after secondary school with no clear path forward. He had passion but lacked a skill that could sustain him in his community.",
    after: "After completing the Child Shoemaking program, Emeka launched his own small shoemaking business. He now trains others in his community, creating a ripple of empowerment.",
    quote: "Learning shoemaking gave me a trade. Now I run my own small business and I'm training others in my community.",
    tag: "Kids Empowerment",
    tagColor: "bg-emerald-100 text-emerald-700 border-emerald-200",
    accentClass: "bg-[#059669]",
  },
  {
    id: 4,
    name: "Aisha M.",
    community: "Kaduna State",
    role: "Primary 6 Student, Age 11",
    image: "/images/story4.webp",
    before: "Aisha shared a single pair of worn-out shoes with her younger sister. They would alternate days at school, meaning each child missed half the academic year.",
    after: "With her own pair of shoes, Aisha attends every day. She's preparing for her primary school leaving exams with full confidence and a dream of becoming a doctor.",
    quote: "These shoes make me feel like I belong. I can focus on my studies instead of worrying about my feet.",
    tag: "Community Outreach",
    tagColor: "bg-orange-100 text-orange-700 border-orange-200",
    accentClass: "bg-[#1A3A6B]",
  },
];

function StoryCard({ story, index }: { story: typeof stories[0]; index: number }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.55, delay: index * 0.08, ease: [0.16, 1, 0.3, 1] }}
      className="bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-lg hover:shadow-2xl transition-all duration-500 group"
    >
      {/* Image */}
      <div className="relative h-60 overflow-hidden">
        <Image
          src={story.image}
          alt={story.name}
          fill
          className="object-cover group-hover:scale-110 transition-transform duration-700"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />
        {/* Subtle gradient scrim — NOT a solid cover */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
        {/* Top accent colour strip */}
        <div className={`absolute top-0 left-0 right-0 h-1.5 ${story.accentClass}`} />
        <div className="absolute bottom-3 left-3">
          <span className={`text-xs font-bold px-2.5 py-1 rounded-full border font-body ${story.tagColor}`}>
            {story.tag}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        {/* Quote */}
        <div className="text-5xl text-[#1A3A6B]/20 font-serif leading-none mb-1">&ldquo;</div>
        <p className="font-body text-gray-700 text-sm leading-relaxed italic mb-4">
          {story.quote}
        </p>

        {/* Before / After */}
        <AnimatePresence>
          {expanded && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              className="overflow-hidden mb-4"
            >
              <div className="space-y-3 pt-2 pb-4 border-t border-gray-100">
                <div className="bg-red-50 rounded-xl p-3 border-l-4 border-red-300">
                  <p className="text-xs font-bold text-red-700 mb-1 uppercase tracking-wide">Before</p>
                  <p className="font-body text-gray-600 text-xs leading-relaxed">{story.before}</p>
                </div>
                <div className="bg-emerald-50 rounded-xl p-3 border-l-4 border-emerald-400">
                  <p className="text-xs font-bold text-emerald-700 mb-1 uppercase tracking-wide">After</p>
                  <p className="font-body text-gray-600 text-xs leading-relaxed">{story.after}</p>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Person info */}
        <div className="flex items-center justify-between pt-3 border-t border-gray-100">
          <div className="flex items-center gap-2">
            <div>
              <p className="font-heading font-bold text-[#111827] text-sm">{story.name}</p>
              <p className="font-body text-xs text-[#1A3A6B]-dark font-semibold">{story.role}</p>
              <div className="flex items-center gap-1 mt-0.5">
                <MapPinIcon size={10} className="text-gray-400" />
                <p className="font-body text-xs text-gray-400">{story.community}</p>
              </div>
            </div>
          </div>
          <button
            onClick={() => setExpanded(!expanded)}
            className={`inline-flex items-center gap-1.5 text-xs font-bold font-body px-3 py-1.5 rounded-full transition-all duration-300 cursor-pointer ${
              expanded
                ? "bg-gray-100 text-gray-600"
                : "bg-[#1A3A6B] text-white shadow-md hover:shadow-lg hover:bg-[#142E56]"
            }`}
          >
            {expanded ? "Close" : "Read Story"}
            <ArrowRightIcon
              size={12}
              className={`transition-transform duration-300 ${expanded ? "rotate-180" : "group-hover:translate-x-0.5"}`}
            />
          </button>
        </div>
      </div>
    </motion.div>
  );
}

export default function ImpactStories() {
  return (
    <section className="section-padding bg-[#fdfbf7] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          className="text-center max-w-3xl mx-auto mb-14"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
        >
          <motion.span
            variants={fadeUp}
            className="inline-block px-4 py-1.5 rounded-full bg-rose-100 text-rose-600 text-xs sm:text-sm font-bold border border-rose-200 mb-4"
          >
            Real Stories, Real Lives
          </motion.span>
          <motion.h2
            variants={fadeUp}
            className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-[#111827] mb-4 leading-tight"
          >
            The People Behind{" "}
            <span className="text-[#1A3A6B]">Every Number</span>
          </motion.h2>
          <motion.p
            variants={fadeUp}
            className="text-base sm:text-lg text-gray-600 font-body leading-relaxed"
          >
            Behind every statistic is a real transformation. Read the stories of children, families, and community members whose lives changed because of a single pair of shoes.
          </motion.p>
        </motion.div>

        {/* Story Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {stories.map((story, index) => (
            <StoryCard key={story.id} story={story} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
