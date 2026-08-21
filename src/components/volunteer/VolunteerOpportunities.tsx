"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { VOLUNTEER_ROLES } from "@/lib/volunteerData";
import { staggerContainer, fadeUp, viewportConfig } from "@/lib/animations";
import { MapPinIcon, ClockIcon, ArrowRightIcon } from "@/components/ui/Icons";

const CATEGORIES = ["All", "Field", "Logistics", "Events", "Partnerships", "Health", "Creative", "Digital", "Fundraising", "Admin", "Corporate"];

export default function VolunteerOpportunities() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedRole, setSelectedRole] = useState<string | null>(null);

  const filtered = activeCategory === "All"
    ? VOLUNTEER_ROLES
    : VOLUNTEER_ROLES.filter((r) => r.category === activeCategory);

  return (
    <section id="volunteer-opportunities" className="section-padding bg-[#f8fafc] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          className="text-center max-w-3xl mx-auto mb-12"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
        >
          <motion.span
            variants={fadeUp}
            className="inline-block px-4 py-1.5 rounded-full bg-blue-100 text-royal-blue text-xs sm:text-sm font-bold border border-blue-200 mb-4"
          >
            Find Your Role
          </motion.span>
          <motion.h2
            variants={fadeUp}
            className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1a1a2e] mb-4 leading-tight"
          >
            Volunteer{" "}
            <span className="text-royal-blue">Opportunities</span>
          </motion.h2>
          <motion.p
            variants={fadeUp}
            className="text-base sm:text-lg text-gray-600 font-body leading-relaxed"
          >
            From field outreach to digital marketing, from logistics to photography — there is a role tailor-made for your unique gifts and schedule.
          </motion.p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          className="flex flex-wrap gap-2 justify-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-full text-sm font-bold font-body transition-all duration-300 cursor-pointer ${
                activeCategory === cat
                  ? "bg-[#f97316] text-white shadow-lg scale-105"
                  : "bg-white border border-gray-200 text-gray-600 hover:border-orange-300 hover:text-warm-orange hover:scale-105"
              }`}
            >
              {cat}
            </button>
          ))}
        </motion.div>

        {/* Roles Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
          >
            {filtered.map((role, index) => {
              const isSelected = selectedRole === role.id;
              return (
                <motion.div
                  key={role.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.45, delay: index * 0.06, ease: [0.16, 1, 0.3, 1] }}
                  className={`group relative rounded-3xl overflow-hidden border transition-all duration-500 cursor-pointer ${
                    isSelected
                      ? "border-warm-orange shadow-2xl shadow-orange-200/60 scale-[1.02]"
                      : "border-gray-100 bg-white hover:border-orange-200 hover:shadow-xl hover:-translate-y-1"
                  }`}
                  onClick={() => setSelectedRole(isSelected ? null : role.id)}
                  role="button"
                  aria-expanded={isSelected}
                  tabIndex={0}
                  onKeyDown={(e) => e.key === "Enter" && setSelectedRole(isSelected ? null : role.id)}
                >
                  {/* Top gradient bar */}
                  <div className={`h-1.5 role.color`} />

                  {/* Card body */}
                  <div className="p-6">
                    <div className="flex items-start justify-between mb-4">
                      <div className={`w-12 h-12 rounded-2xl role.color flex items-center justify-center text-2xl shadow-md`}>
                        {role.icon}
                      </div>
                      <span className="text-xs font-bold font-body px-2.5 py-1 rounded-full bg-gray-100 text-gray-500">
                        {role.category}
                      </span>
                    </div>

                    <h3 className="font-heading text-lg font-bold text-[#1a1a2e] mb-2 leading-snug group-hover:text-warm-orange-dark transition-colors duration-300">
                      {role.title}
                    </h3>
                    <p className="font-body text-gray-500 text-sm leading-relaxed mb-4">{role.description}</p>

                    <div className="flex items-center gap-4 text-xs text-gray-400 font-body mb-4">
                      <span className="flex items-center gap-1.5">
                        <ClockIcon size={12} className="text-warm-orange" />
                        {role.commitment}
                      </span>
                      <span className="flex items-center gap-1.5">
                        <MapPinIcon size={12} className="text-royal-blue" />
                        {role.location}
                      </span>
                    </div>

                    {/* Skills tags */}
                    <div className="flex flex-wrap gap-1.5 mb-5">
                      {role.skills.map((skill) => (
                        <span
                          key={skill}
                          className="px-2.5 py-1 rounded-full bg-blue-50 text-royal-blue text-xs font-semibold font-body border border-blue-100"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>

                    {/* Expanded details */}
                    <AnimatePresence>
                      {isSelected && (
                        <motion.div
                          key="expanded"
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                          className="overflow-hidden"
                        >
                          <div className="pt-4 border-t border-orange-100 mb-4">
                            <p className="font-body text-sm text-gray-600 leading-relaxed">
                              Ready to step into this role? Click Apply to fill out our volunteer form and select <strong>{role.title}</strong> as your area of interest.
                            </p>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>

                    <a
                      href="#volunteer-form"
                      onClick={(e) => e.stopPropagation()}
                      className={`inline-flex items-center gap-2 text-sm font-bold font-body px-4 py-2.5 rounded-full transition-all duration-300 hover:scale-105 role.color text-white shadow-md hover:shadow-lg`}
                    >
                      Apply for This Role
                      <ArrowRightIcon size={14} />
                    </a>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
