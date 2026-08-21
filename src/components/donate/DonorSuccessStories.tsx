"use client";

import { motion } from "framer-motion";
import { fadeUp, staggerContainer, viewportConfig } from "@/lib/animations";
import { ArrowRightIcon, QuoteIcon } from "@/components/ui/Icons";

const stories = [
  {
    id: 1,
    name: "Adaeze Okonkwo",
    age: 9,
    community: "Enugu North, Enugu State",
    quote: "Before I got my shoes, I was too ashamed to raise my hand in class. Now I run to school every morning because I feel just like everyone else.",
    before: "Missed school 3 days per week due to foot injuries from walking barefoot.",
    after: "Maintains 95% school attendance and was recently named class prefect.",
    emoji: "👧",
    color: "bg-[#f97316]",
    bg: "bg-orange-50",
    border: "border-orange-100",
  },
  {
    id: 2,
    name: "Emeka Chibueze",
    age: 11,
    community: "Kaduna South, Kaduna State",
    quote: "My mum cried when she saw my new shoes. She said she wished she could give me more. But you gave us more than shoes — you gave us hope.",
    before: "Frequently sent home from school for not wearing proper footwear.",
    after: "Top student in his class, aspires to become a doctor.",
    emoji: "👦",
    color: "bg-[#1a3a6b]",
    bg: "bg-blue-50",
    border: "border-blue-100",
  },
  {
    id: 3,
    name: "Fatima Aliyu",
    age: 8,
    community: "Daura, Katsina State",
    quote: "I used to hide my feet under my desk. Now I show off my shoes to all my friends. I feel like a princess who can learn anything.",
    before: "Suffered from recurring hookworm infections due to walking barefoot.",
    after: "Free from infection for 8 months, reading above her grade level.",
    emoji: "👧",
    color: "bg-[#1a3a6b]",
    bg: "bg-purple-50",
    border: "border-purple-100",
  },
];

export default function DonorSuccessStories() {
  return (
    <section className="section-padding bg-white relative overflow-hidden" aria-label="Success stories">
      <div className="absolute top-0 left-0 right-0 h-px bg-[#1a3a6b]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={viewportConfig} className="text-center mb-14">
          <motion.span variants={fadeUp} className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-rose-100 border border-rose-200 text-rose-700 font-bold text-sm mb-4">
            ❤️ Real Transformations
          </motion.span>
          <motion.h2 variants={fadeUp} className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1a1a2e] mb-5">
            Stories of{" "}
            <span className="text-warm-orange">Children Transformed</span>
          </motion.h2>
          <motion.p variants={fadeUp} className="text-gray-600 font-body text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
            Every donation creates a real story of transformation. These are the children whose lives you are helping to change.
          </motion.p>
        </motion.div>

        {/* Story Cards */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {stories.map((story, index) => (
            <motion.div
              key={story.id}
              variants={fadeUp}
              custom={index}
              whileHover={{ y: -8, scale: 1.02 }}
              transition={{ type: "spring", stiffness: 280, damping: 22 }}
              className={`rounded-3xl overflow-hidden border ${story.border} shadow-sm hover:shadow-2xl transition-all group relative`}
            >
              {/* Image / Avatar area */}
              <div className={`h-44 story.color relative flex items-center justify-center`}>
                <motion.span
                  className="text-8xl filter drop-shadow-2xl"
                  animate={{ y: [-4, 4, -4] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: index * 0.5 }}
                >
                  {story.emoji}
                </motion.span>
                <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-white/20 backdrop-blur-sm text-xs text-white font-bold font-body border border-white/30">
                  Age {story.age} • {story.community.split(",")[1]?.trim() || story.community}
                </div>
              </div>

              {/* Content */}
              <div className={`p-6  ${story.bg} relative`}>
                {/* Quote */}
                <div className="flex items-start gap-2 mb-4">
                  <QuoteIcon size={20} className="text-gray-300 flex-shrink-0 mt-0.5" />
                  <p className="text-gray-700 font-body text-sm italic leading-relaxed">
                    &ldquo;{story.quote}&rdquo;
                  </p>
                </div>

                <h3 className="font-heading font-bold text-xl text-[#1a1a2e] mb-1">{story.name}</h3>
                <p className="text-xs text-gray-500 font-body mb-4">{story.community}</p>

                {/* Before/After */}
                <div className="space-y-2">
                  <div className="flex items-start gap-2 text-xs font-body">
                    <span className="px-2 py-0.5 rounded-full bg-red-100 text-red-600 font-bold flex-shrink-0">Before</span>
                    <span className="text-gray-500 leading-relaxed">{story.before}</span>
                  </div>
                  <div className="flex items-start gap-2 text-xs font-body">
                    <span className="px-2 py-0.5 rounded-full bg-green-100 text-green-700 font-bold flex-shrink-0">After</span>
                    <span className="text-gray-500 leading-relaxed">{story.after}</span>
                  </div>
                </div>

                <a
                  href="/blog"
                  className="inline-flex items-center gap-1.5 text-sm font-bold font-body text-royal-blue hover:gap-2.5 transition-all mt-5"
                >
                  Read Full Story <ArrowRightIcon size={14} />
                </a>

                {/* Bottom line */}
                <motion.div
                  className={`absolute bottom-0 left-0 h-0.5 story.color`}
                  initial={{ width: "0%" }}
                  whileInView={{ width: "100%" }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.7, delay: index * 0.1 + 0.3 }}
                />
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          className="text-center mt-12"
        >
          <p className="text-gray-600 font-body mb-5">Your donation writes the next chapter of one of these stories.</p>
          <a href="#donate-widget" className="btn-orange text-base">
            Help Another Child Today →
          </a>
        </motion.div>
      </div>
    </section>
  );
}
