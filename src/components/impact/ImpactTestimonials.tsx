"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "@/components/ui/RealImage";
import { staggerContainer, fadeUp, viewportConfig } from "@/lib/animations";
import { ChevronLeftIcon, ChevronRightIcon, StarIcon } from "@/components/ui/Icons";

const testimonials = [
  {
    id: 1,
    name: "Chisom N.",
    role: "Student, Primary 4",
    community: "Enugu State",
    quote: "I used to hide my feet in class because my shoes had big holes. Now I walk in front proudly. My teacher says I'm the first to raise my hand!",
    image: "/images/story1.jpg",
    stars: 5,
    color: "bg-[#111827]",
  },
  {
    id: 2,
    name: "Mrs. Grace O.",
    role: "Primary School Teacher",
    community: "Kaduna State",
    quote: "Class attendance jumped by nearly 30% after Shoe My Feet visited our school. The children are more focused, confident, and eager to learn.",
    image: "/images/story2.jpg",
    stars: 5,
    color: "bg-[#111827]",
  },
  {
    id: 3,
    name: "Emeka E.",
    role: "Kids Empowerment Graduate",
    community: "Enugu State",
    quote: "The volunteer program changed my life. I completed shoemaking training and now I help make the very shoes we distribute to children!",
    image: "/images/story3.jpg",
    stars: 5,
    color: "bg-[#16A34A]",
  },
  {
    id: 4,
    name: "Aisha M.",
    role: "Student, Primary 6",
    community: "Kaduna State",
    quote: "These shoes make me feel like I belong. I can focus on my studies instead of worrying about my feet.",
    image: "/images/story4.jpg",
    stars: 5,
    color: "bg-[#1A3A6B]",
  },
  {
    id: 5,
    name: "Pastor James A.",
    role: "Community Leader",
    community: "Enugu State",
    quote: "Shoe My Feet hasn't just given shoes — they've given our community dignity. We are proud of what they do for our children.",
    image: "/images/volunteers.jpg",
    stars: 5,
    color: "bg-[#1A3A6B]",
  },
  {
    id: 6,
    name: "Ada Corporate Partner",
    role: "CSR Manager, Access Bank",
    community: "Partner Organization",
    quote: "Our partnership with Shoe My Feet is one of the most impactful CSR initiatives we've undertaken. The transparency and dedication are unmatched.",
    image: "/images/founder.jpg",
    stars: 5,
    color: "bg-[#111827]",
  },
];

export default function ImpactTestimonials() {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState<1 | -1>(1);

  const goNext = () => {
    setDirection(1);
    setCurrent((prev) => (prev + 1) % testimonials.length);
  };

  const goPrev = () => {
    setDirection(-1);
    setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const goTo = (index: number) => {
    setDirection(index > current ? 1 : -1);
    setCurrent(index);
  };

  const t = testimonials[current];

  const slideVariants = {
    enter: (dir: number) => ({ opacity: 0, x: dir * 80 }),
    center: { opacity: 1, x: 0 },
    exit: (dir: number) => ({ opacity: 0, x: dir * -80 }),
  };

  return (
    <section className="section-padding bg-[#f8fafc] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          className="text-center max-w-3xl mx-auto mb-16"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
        >
          <motion.span
            variants={fadeUp}
            className="inline-block px-4 py-1.5 rounded-full bg-[#FFFFFF] text-[#1A3A6B] text-xs sm:text-sm font-bold border border-[#F3F4F6] mb-4"
          >
            Voices of Impact
          </motion.span>
          <motion.h2
            variants={fadeUp}
            className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-[#111827] mb-4 leading-tight"
          >
            Words from{" "}
            <span className="text-[#1A3A6B]">Those We Serve</span>
          </motion.h2>
          <motion.p
            variants={fadeUp}
            className="text-base sm:text-lg text-gray-600 font-body leading-relaxed"
          >
            Hear directly from children, parents, teachers, volunteers, community leaders, and partners who've witnessed transformation firsthand.
          </motion.p>
        </motion.div>

        {/* Main Carousel */}
        <div className="relative max-w-4xl mx-auto">
          <div className="overflow-hidden rounded-2xl">
            <AnimatePresence custom={direction} mode="wait">
              <motion.div
                key={t.id}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                className={`t.color p-1 rounded-2xl shadow-2xl`}
              >
                <div className="bg-white rounded-[calc(1.5rem-4px)] p-8 sm:p-10 relative overflow-hidden">
                  {/* Background pattern */}
                  <div className="absolute top-0 right-0 w-48 h-48 opacity-5">
                    <div className="text-[12rem] leading-none font-serif text-gray-900">&ldquo;</div>
                  </div>

                  <div className="grid sm:grid-cols-[auto_1fr] gap-6 sm:gap-8 items-start relative z-10">
                    {/* Portrait */}
                    <div className="flex flex-col items-center gap-3">
                      <div className={`w-20 h-20 overflow-hidden border-4 border-transparent ${t.color} p-0.5 shadow-lg`}>
                        <div className="w-full h-full rounded-xl overflow-hidden">
                          <Image
                            src={t.image}
                            alt={t.name}
                            width={80}
                            height={80}
                            className="w-full h-full object-cover"
                          />
                        </div>
                      </div>
                      {/* Stars */}
                      <div className="flex gap-0.5">
                        {Array.from({ length: t.stars }).map((_, i) => (
                          <StarIcon key={i} size={14} className="text-[#1A3A6B]" />
                        ))}
                      </div>
                    </div>

                    {/* Content */}
                    <div>
                      <div className="text-5xl text-gray-200 font-serif leading-none mb-3">&ldquo;</div>
                      <p className="font-body text-gray-700 text-lg sm:text-xl leading-relaxed italic mb-6">
                        {t.quote}
                      </p>
                      <div>
                        <p className="font-heading font-bold text-[#111827] text-base">{t.name}</p>
                        <p className={`font-body text-sm font-semibold ${t.color} bg-clip-text text-transparent`}>{t.role}</p>
                        <p className="font-body text-xs text-gray-400 mt-0.5">{t.community}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation */}
          <div className="flex items-center justify-between mt-8">
            <button
              onClick={goPrev}
              className="w-12 h-12 rounded-full bg-white border border-gray-200 shadow-md flex items-center justify-center text-gray-600 hover:border-slate-300 hover:text-[#1A3A6B] hover:shadow-lg transition-all duration-300 cursor-pointer"
              aria-label="Previous testimonial"
            >
              <ChevronLeftIcon size={20} />
            </button>

            {/* Dots */}
            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => goTo(i)}
                  className={`rounded-full transition-all duration-300 cursor-pointer ${
                    i === current ? "w-8 h-3 bg-[#1A3A6B]" : "w-3 h-3 bg-gray-300 hover:bg-gray-400"
                  }`}
                  aria-label={`Go to testimonial ${i + 1}`}
                />
              ))}
            </div>

            <button
              onClick={goNext}
              className="w-12 h-12 rounded-full bg-white border border-gray-200 shadow-md flex items-center justify-center text-gray-600 hover:border-slate-300 hover:text-[#1A3A6B] hover:shadow-lg transition-all duration-300 cursor-pointer"
              aria-label="Next testimonial"
            >
              <ChevronRightIcon size={20} />
            </button>
          </div>
        </div>

        {/* Mini thumbnails */}
        <div className="flex justify-center gap-3 mt-10 overflow-x-auto pb-2">
          {testimonials.map((tes, i) => (
            <motion.button
              key={tes.id}
              onClick={() => goTo(i)}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className={`flex-shrink-0 flex flex-col items-center gap-1.5 cursor-pointer transition-all duration-300 ${
                i === current ? "opacity-100" : "opacity-50 hover:opacity-80"
              }`}
            >
              <div className={`w-12 h-12 rounded-xl overflow-hidden border-2 transition-all duration-300 ${
                i === current ? "border-[#1A3A6B] shadow-md" : "border-gray-200"
              }`}>
                <Image src={tes.image} alt={tes.name} width={48} height={48} className="w-full h-full object-cover" />
              </div>
              <p className="text-[10px] font-body font-semibold text-gray-500 max-w-[60px] text-center leading-tight hidden sm:block">
                {tes.name.split(" ")[0]}
              </p>
            </motion.button>
          ))}
        </div>
      </div>
    </section>
  );
}
