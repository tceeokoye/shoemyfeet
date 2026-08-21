"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { RECOGNITION_ITEMS } from "@/lib/volunteerData";
import { VOLUNTEER_STORIES } from "@/lib/volunteerData";
import { staggerContainer, fadeUp, viewportConfig } from "@/lib/animations";
import { AwardIcon, StarIcon, MapPinIcon } from "@/components/ui/Icons";

// Volunteer of the Month spotlight (using Samuel as the featured vol)
const VOLUNTEER_OF_MONTH = VOLUNTEER_STORIES[5]; // Samuel Adeyemi

export default function VolunteerRecognition() {
  return (
    <section id="volunteer-recognition" className="section-padding bg-[#f8fafc] overflow-hidden">
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
            className="inline-block px-4 py-1.5 rounded-full bg-amber-100 text-amber-700 text-xs sm:text-sm font-bold border border-amber-200 mb-4"
          >
            Volunteer Recognition
          </motion.span>
          <motion.h2
            variants={fadeUp}
            className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1a1a2e] mb-4 leading-tight"
          >
            We Celebrate Our{" "}
            <span className="text-warm-orange">
              Heroes
            </span>
          </motion.h2>
          <motion.p
            variants={fadeUp}
            className="text-base sm:text-lg text-gray-600 font-body leading-relaxed"
          >
            Your contribution is never invisible here. We believe in recognizing every volunteer who gives their time, energy, and heart to this mission.
          </motion.p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-10 items-start">
          {/* Recognition Cards */}
          <div className="space-y-4">
            {RECOGNITION_ITEMS.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5, delay: index * 0.09, ease: [0.16, 1, 0.3, 1] }}
                whileHover={{ x: 6, transition: { type: "spring", stiffness: 300, damping: 20 } }}
                className="group flex items-start gap-5 bg-white rounded-2xl p-6 border border-gray-100 hover:border-amber-200 shadow-sm hover:shadow-lg transition-all duration-400 cursor-default"
              >
                {/* Icon */}
                <div className={`w-14 h-14 rounded-2xl item.color flex items-center justify-center text-2xl shadow-lg shrink-0 group-hover:scale-110 transition-transform duration-300`}>
                  {item.icon}
                </div>

                {/* Content */}
                <div>
                  <h3 className="font-heading text-base font-bold text-[#1a1a2e] mb-1.5 group-hover:text-amber-700 transition-colors duration-300">
                    {item.title}
                  </h3>
                  <p className="font-body text-gray-500 text-sm leading-relaxed">{item.description}</p>
                </div>

                <AwardIcon size={18} className="text-gray-200 group-hover:text-amber-200 transition-colors duration-300 shrink-0 mt-0.5" />
              </motion.div>
            ))}
          </div>

          {/* Volunteer of the Month Spotlight */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="sticky top-24"
          >
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-amber-100">
              {/* Header */}
              <div className="relative bg-[#f59e0b] p-6 text-center">
                <div className="absolute inset-0 bg-black/5" />
                <div className="relative z-10">
                  <div className="flex items-center justify-center gap-2 mb-1">
                    <StarIcon size={16} className="text-white fill-white" />
                    <span className="font-body text-white font-bold text-xs uppercase tracking-widest">Volunteer of the Month</span>
                    <StarIcon size={16} className="text-white fill-white" />
                  </div>
                  <p className="font-body text-white/70 text-xs">July 2026</p>
                </div>
                {/* Decorative star burst */}
                <motion.div
                  className="absolute top-3 right-4 text-white/20 text-3xl"
                  animate={{ rotate: [0, 360] }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                >
                  ✦
                </motion.div>
                <motion.div
                  className="absolute bottom-3 left-4 text-white/20 text-2xl"
                  animate={{ rotate: [0, -360] }}
                  transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                >
                  ✦
                </motion.div>
              </div>

              {/* Portrait */}
              <div className="relative h-64 overflow-hidden">
                <Image
                  src={VOLUNTEER_OF_MONTH.image}
                  alt={VOLUNTEER_OF_MONTH.name}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-black/60" />
                {/* Golden trophy badge */}
                <div className="absolute bottom-4 right-4">
                  <div className="w-16 h-16 rounded-full bg-[#f59e0b] flex flex-col items-center justify-center shadow-xl">
                    <span className="text-2xl">🏆</span>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="bg-white p-7">
                <h3 className="font-heading text-2xl font-bold text-[#1a1a2e] mb-0.5">{VOLUNTEER_OF_MONTH.name}</h3>
                <p className="font-body text-warm-orange-dark font-semibold text-sm mb-1">{VOLUNTEER_OF_MONTH.role}</p>
                <div className="flex items-center gap-1 mb-4">
                  <MapPinIcon size={12} className="text-gray-400" />
                  <p className="font-body text-xs text-gray-400">{VOLUNTEER_OF_MONTH.location} · {VOLUNTEER_OF_MONTH.yearsOfService} years of service</p>
                </div>

                <div className="text-4xl text-amber-200 font-serif leading-none mb-2">&ldquo;</div>
                <p className="font-body text-gray-600 text-sm italic leading-relaxed mb-4">{VOLUNTEER_OF_MONTH.quote}</p>
                <p className="font-body text-gray-500 text-xs leading-relaxed">{VOLUNTEER_OF_MONTH.fullStory}</p>

                {/* Tags */}
                <div className="mt-4 flex flex-wrap gap-2">
                  {VOLUNTEER_OF_MONTH.tags.map((tag) => (
                    <span key={tag} className="px-3 py-1 rounded-full text-xs font-bold bg-amber-50 text-amber-700 border border-amber-200">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
