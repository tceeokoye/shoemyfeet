"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { VOLUNTEER_SPOTLIGHTS, VolunteerSpotlight } from "@/lib/blogData";
import { fadeUp, viewportConfig, scaleIn } from "@/lib/animations";
import { UsersIcon, MapPinIcon, QuoteIcon, ArrowRightIcon, AwardIcon } from "@/components/ui/Icons";

interface VolunteerSpotlightProps {
  onSpotlightClick: (spotlight: VolunteerSpotlight) => void;
}

export default function VolunteerSpotlightSection({ onSpotlightClick }: VolunteerSpotlightProps) {
  return (
    <section className="my-20">
      {/* Section Header */}
      <div className="text-center max-w-2xl mx-auto mb-16">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-orange-100 text-warm-orange-dark font-bold text-xs uppercase tracking-wider mb-3">
          <UsersIcon size={14} className="text-warm-orange" />
          <span>Champions of Change</span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-heading font-bold text-[#1a1a2e] mb-4">
          Volunteer & Partner Spotlights
        </h2>
        <p className="text-gray-600 font-body text-sm sm:text-base leading-relaxed">
          Behind every shoe distributed stands an incredible network of field nurses, school principals, church leaders, and corporate donors working hand-in-hand.
        </p>
      </div>

      {/* Grid of Spotlight Cards */}
      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={viewportConfig}
        className="grid md:grid-cols-3 gap-8"
      >
        {VOLUNTEER_SPOTLIGHTS.map((person) => (
          <motion.div
            key={person.id}
            variants={scaleIn}
            className="bg-white rounded-3xl p-8 border border-gray-100 shadow-xl hover:shadow-2xl transition-all duration-300 flex flex-col justify-between group relative overflow-hidden"
          >
            {/* Top decorative gradient bar */}
            <div className="absolute top-0 left-0 right-0 h-2 bg-[#1a3a6b]" />

            <div>
              {/* Header: Portrait & Role */}
              <div className="flex items-center gap-4 mb-6">
                <div className="relative w-16 h-16 rounded-2xl overflow-hidden border-2 border-warm-orange/30 shadow-md group-hover:scale-105 transition-transform shrink-0">
                  <Image src={person.avatar} alt={person.name} fill className="object-cover" />
                </div>
                <div>
                  <h3 className="font-heading font-bold text-lg text-[#1a1a2e] group-hover:text-warm-orange transition-colors">
                    {person.name}
                  </h3>
                  <span className="text-xs font-bold text-warm-orange block font-body">{person.role}</span>
                  <span className="text-[11px] text-gray-500 font-body block">{person.organization}</span>
                </div>
              </div>

              {/* Location Badge */}
              <div className="flex items-center gap-1.5 text-xs text-gray-500 font-body mb-4">
                <MapPinIcon size={14} className="text-royal-blue" />
                <span>{person.location}</span>
                <span>•</span>
                <span className="font-bold text-forest-green">{person.shoesDistributed.toLocaleString()}+ Shoes Impacted</span>
              </div>

              {/* Bio */}
              <p className="text-gray-600 font-body text-xs sm:text-sm leading-relaxed mb-6">
                {person.bio}
              </p>

              {/* Quote */}
              <div className="bg-blue-50/70 p-4 rounded-2xl border-l-4 border-[#1a3a6b] relative mb-6">
                <QuoteIcon size={16} className="text-[#1a3a6b]/20 absolute top-2 right-2" />
                <p className="font-body italic text-xs text-gray-700 leading-relaxed">
                  &ldquo;{person.quote}&rdquo;
                </p>
              </div>
            </div>

            {/* Action */}
            <button
              type="button"
              onClick={() => onSpotlightClick(person)}
              className="w-full py-3 px-4 rounded-xl bg-gray-50 text-[#1a3a6b] hover:bg-[#1a3a6b] hover:text-white font-bold text-xs transition-all duration-300 inline-flex items-center justify-center gap-1.5 cursor-pointer shadow-xs"
            >
              <span>Read Full Spotlight</span>
              <ArrowRightIcon size={13} />
            </button>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
