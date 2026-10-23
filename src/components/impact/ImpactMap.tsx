"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { staggerContainer, fadeUp, viewportConfig } from "@/lib/animations";
import { MapPinIcon, ArrowRightIcon } from "@/components/ui/Icons";

const regions = [
  {
    id: "enugu",
    name: "Enugu State",
    shortName: "Enugu",
    beneficiaries: 3200,
    communities: 8,
    schools: 5,
    description: "Our founding state and primary base of operations. Home to our first distribution and ongoing child shoemaking program.",
    color: "bg-[#111827]",
    dotColor: "#1A3A6B",
    x: "52%",
    y: "65%",
    highlights: ["First distribution site", "kids shoemaking hub", "8 communities served"],
  },
  {
    id: "kaduna",
    name: "Kaduna State",
    shortName: "Kaduna",
    beneficiaries: 2800,
    communities: 7,
    schools: 5,
    description: "Our Northern Nigeria expansion. Over 2,000 shoes distributed in early 2024, marking our first major northern outreach.",
    color: "bg-[#1A3A6B]",
    dotColor: "#1A3A6B",
    x: "40%",
    y: "32%",
    highlights: ["2,000+ shoes in 2024", "Northern Nigeria breakthrough", "7 communities reached"],
  },
  {
    id: "edo",
    name: "Edo State",
    shortName: "Edo",
    beneficiaries: 500,
    communities: 3,
    schools: 2,
    description: "Our newest expansion, launched in 2026 through a Benin City community outreach with national media coverage.",
    color: "bg-[#16A34A]",
    dotColor: "#16a34a",
    x: "38%",
    y: "68%",
    highlights: ["2026 expansion", "Benin City outreach", "National media coverage"],
  },
];

// Simple SVG Nigeria map with approximate state positions
function NigeriaMap({ activeRegion, onSelect }: { activeRegion: string | null; onSelect: (id: string) => void }) {
  return (
    <div className="relative w-full aspect-[4/3] max-w-xl mx-auto">
      {/* Nigeria outline SVG */}
      <svg viewBox="0 0 400 350" className="w-full h-full drop-shadow-xl" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Nigeria approximate outline */}
        <path
          d="M80,80 L120,50 L160,45 L200,50 L240,45 L280,55 L320,70 L340,100 L350,140 L345,180 L330,220 L310,250 L280,270 L260,290 L240,300 L210,295 L190,280 L170,275 L150,280 L130,270 L110,250 L90,220 L75,190 L70,150 L75,120 L80,80Z"
          fill="url(#nigeriaGrad)"
          stroke="#e2e8f0"
          strokeWidth="2"
        />
        <defs>
          <linearGradient id="nigeriaGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#dbeafe" />
            <stop offset="100%" stopColor="#eff6ff" />
          </linearGradient>
        </defs>

        {/* State labels */}
        <text x="200" y="180" textAnchor="middle" className="font-heading" fontSize="10" fill="#94a3b8" fontFamily="sans-serif">Nigeria</text>

        {/* Dots for each region */}
        {regions.map((region) => {
          const cx = parseFloat(region.x) * 4;
          const cy = parseFloat(region.y) * 3.5;
          const isActive = activeRegion === region.id;

          return (
            <g key={region.id} onClick={() => onSelect(region.id)} className="cursor-pointer">
              {/* Pulse ring */}
              {isActive && (
                <>
                  <circle cx={cx} cy={cy} r="20" fill={region.dotColor} fillOpacity="0.15" className="animate-pulse" />
                  <circle cx={cx} cy={cy} r="14" fill={region.dotColor} fillOpacity="0.25" />
                </>
              )}
              {/* Main dot */}
              <circle
                cx={cx}
                cy={cy}
                r={isActive ? 10 : 8}
                fill={region.dotColor}
                stroke="white"
                strokeWidth="2.5"
                style={{ transition: "r 0.3s ease" }}
              />
              {/* Label */}
              <text
                x={cx}
                y={cy - 16}
                textAnchor="middle"
                fontSize="9"
                fontWeight="700"
                fill={region.dotColor}
                fontFamily="sans-serif"
              >
                {region.shortName}
              </text>
            </g>
          );
        })}
      </svg>
    </div>
  );
}

export default function ImpactMap() {
  const [activeRegion, setActiveRegion] = useState<string>("enugu");
  const selected = regions.find((r) => r.id === activeRegion) || regions[0];

  return (
    <section className="section-padding bg-[#111827] overflow-hidden relative">
      {/* Background glows */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/6 w-96 h-96 rounded-full bg-[#1A3A6B]/10 blur-[120px]" />
        <div className="absolute bottom-1/4 right-1/6 w-[400px] h-[400px] rounded-full bg-[#1A3A6B]/10 blur-[140px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
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
            className="inline-block px-4 py-1.5 rounded-full border border-white/20 bg-white/10 backdrop-blur-md text-white text-xs sm:text-sm font-bold mb-4"
          >
            Community Reach
          </motion.span>
          <motion.h2
            variants={fadeUp}
            className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4 leading-tight"
          >
            Where We&apos;re{" "}
            <span className="text-[#1A3A6B]">
              Making an Impact
            </span>
          </motion.h2>
          <motion.p
            variants={fadeUp}
            className="text-neutral-300 text-base sm:text-lg font-body leading-relaxed"
          >
            Currently active across 3 Nigerian states, we&apos;re growing our reach to serve more underserved communities every year.
          </motion.p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* Map */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="glass-dark rounded-2xl p-6 sm:p-8"
          >
            <NigeriaMap activeRegion={activeRegion} onSelect={setActiveRegion} />
            
            {/* Region selector buttons */}
            <div className="flex flex-wrap gap-2 mt-6 justify-center">
              {regions.map((region) => (
                <button
                  key={region.id}
                  onClick={() => setActiveRegion(region.id)}
                  className={`px-4 py-2 rounded-full text-sm font-bold font-body transition-all duration-300 cursor-pointer ${
                    activeRegion === region.id
                      ? " " + region.color + " text-white shadow-lg scale-105"
                      : "bg-white/10 text-neutral-300 hover:bg-white/20 border border-white/10"
                  }`}
                >
                  <MapPinIcon size={14} className="mr-1 inline-block" aria-hidden="true" /> {region.name}
                </button>
              ))}
            </div>
          </motion.div>

          {/* Detail panel */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={selected.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className={`w-12 h-12 rounded-xl selected.color flex items-center justify-center text-2xl shadow-lg`}>
                    <MapPinIcon size={22} className="text-white" aria-hidden="true" />
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <MapPinIcon size={16} className="text-[#1A3A6B]" />
                      <h3 className="font-heading text-2xl font-bold text-white">{selected.name}</h3>
                    </div>
                    <p className="text-orange-300 text-xs font-body">Active since {selected.id === "enugu" ? "2022" : selected.id === "kaduna" ? "2023" : "2026"}</p>
                  </div>
                </div>

                <p className="text-neutral-200 font-body text-base leading-relaxed mb-6">{selected.description}</p>

                {/* Stats */}
                <div className="grid grid-cols-3 gap-4 mb-6">
                  {[
                    { label: "Beneficiaries", value: selected.beneficiaries.toLocaleString() + "+" },
                    { label: "Communities", value: selected.communities + "+" },
                    { label: "Schools", value: selected.schools + "+" },
                  ].map((stat) => (
                    <div key={stat.label} className="glass-dark  p-4 text-center border border-white/10">
                      <div className={`font-heading text-2xl font-bold selected.color bg-clip-text text-transparent`}>
                        {stat.value}
                      </div>
                      <div className="text-orange-300 text-xs font-body mt-1">{stat.label}</div>
                    </div>
                  ))}
                </div>

                {/* Highlights */}
                <div className="space-y-2">
                  {selected.highlights.map((h, i) => (
                    <motion.div
                      key={h}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.08 }}
                      className="flex items-center gap-2.5"
                    >
                      <div className={`w-2 h-2 rounded-full selected.color flex-shrink-0`} />
                      <p className="text-neutral-300 font-body text-sm">{h}</p>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Future expansion note */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              className="mt-8 p-4  border border-white/15 bg-white/5 backdrop-blur-sm"
            >
              <p className="text-orange-300 text-sm font-body">
                <span className="text-[#1A3A6B] font-bold"><ArrowRightIcon size={14} className="mr-1 inline-block" aria-hidden="true" /> Expanding soon:</span>{" "}
                We&apos;re planning to reach Lagos, Abuja, Rivers, and Anambra states in our next phase of national expansion.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
