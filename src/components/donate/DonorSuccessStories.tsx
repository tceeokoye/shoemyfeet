"use client";

import { motion } from "framer-motion";
import { fadeUp, staggerContainer, viewportConfig } from "@/lib/animations";

const stories = [
  {
    id: 1,
    name: "Adaeze Okonkwo",
    age: 9,
    community: "Enugu North, Enugu State",
    quote: "Before I got my shoes, I was too ashamed to raise my hand in class. Now I run to school every morning because I feel just like everyone else.",
    before: "Missed school 3 days per week due to foot injuries from walking barefoot.",
    after: "Maintains 95% school attendance and was recently named class prefect.",
  },
  {
    id: 2,
    name: "Emeka Chibueze",
    age: 11,
    community: "Kaduna South, Kaduna State",
    quote: "My mum cried when she saw my new shoes. She said she wished she could give me more. But you gave us more than shoes — you gave us hope.",
    before: "Frequently sent home from school for not wearing proper footwear.",
    after: "Top student in his class, aspires to become a doctor.",
  },
  {
    id: 3,
    name: "Fatima Aliyu",
    age: 8,
    community: "Daura, Katsina State",
    quote: "I used to hide my feet under my desk. Now I show off my shoes to all my friends. I feel like a princess who can learn anything.",
    before: "Suffered from recurring hookworm infections due to walking barefoot.",
    after: "Free from infection for 8 months, reading above her grade level.",
  },
];

export default function DonorSuccessStories() {
  return (
    <section className="section-padding bg-[#FFFFFF]" aria-label="Success stories">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={viewportConfig} className="text-center mb-14">
          <motion.span variants={fadeUp} className="text-sm font-semibold uppercase tracking-wide text-[#142E56] mb-4">
            Real Transformations
          </motion.span>
          <motion.h2 variants={fadeUp} className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-[#111827] mb-5">
            Stories of{" "}
            <span className="text-[#1A3A6B]">Children Transformed</span>
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
              className="rounded-xl bg-white p-6 shadow-md"
            >
              <p className="text-gray-700 font-body text-sm italic leading-relaxed mb-5">
                &ldquo;{story.quote}&rdquo;
              </p>
              <h3 className="font-heading font-bold text-xl text-[#111827] mb-1">{story.name}</h3>
              <p className="text-xs text-gray-500 font-body mb-5">
                Age {story.age} · {story.community}
              </p>
              <div className="space-y-3 text-sm font-body">
                <p className="text-gray-600"><strong className="text-[#111827]">Before:</strong> {story.before}</p>
                <p className="text-gray-600"><strong className="text-[#111827]">After:</strong> {story.after}</p>
              </div>
              <a href="/blog" className="mt-5 inline-block text-sm font-bold font-body text-[#1A3A6B] hover:underline">
                Read Full Story
              </a>
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
          <a href="#donate-widget" className="btn-primary text-base">
            Help Another Child Today
          </a>
        </motion.div>
      </div>
    </section>
  );
}
