"use client";

import { motion } from "framer-motion";

const partners = [
  { name: "Access Bank CSR", type: "Community Partner", initials: "AB", color: "bg-[#f97316]" },
  { name: "Enugu State Ministry", type: "Education Partner", initials: "ES", color: "bg-emerald-600" },
  { name: "UNICEF Nigeria", type: "Child Welfare", initials: "UN", color: "bg-black" },
  { name: "Kaduna State Outreach", type: "Northern Partner", initials: "KM", color: "bg-[#09090b]" },
  { name: "GTBank Foundation", type: "kids Partner", initials: "GT", color: "bg-[#f97316]" },
  { name: "NACA Nigeria", type: "Health Protection", initials: "NA", color: "bg-teal-600" },
  { name: "Edo Education Board", type: "Skills Partner", initials: "ED", color: "bg-amber-500" },
  { name: "CAC Nigeria", type: "Registered NGO", initials: "CA", color: "bg-slate-800" },
];

export default function PartnerMarquee() {
  return (
    <section className="py-6 bg-[#09090b] border-y border-white/10 overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-4 mb-3 text-center">
        <p className="text-[11px] font-bold text-neutral-400 uppercase tracking-widest font-heading">
          Trusted &amp; Supported By Leading Organizations Across Nigeria
        </p>
      </div>

      {/* Marquee Track */}
      <div className="relative flex overflow-x-hidden group">
        {/* Gradient Edge Fades */}
        <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-[#09090b] to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-[#09090b] to-transparent z-10 pointer-events-none" />

        {/* Animated Marquee Content */}
        <div className="flex shrink-0 animate-marquee items-center gap-6 py-2">
          {partners.concat(partners).map((partner, index) => (
            <div
              key={`${partner.name}-${index}`}
              className="flex items-center gap-3 px-5 py-2.5 rounded-2xl bg-white/10 hover:bg-white/15 border border-white/15 backdrop-blur-md shadow-md transition-all shrink-0 cursor-default group/item hover:border-amber-400/50"
            >
              <div className={`w-8 h-8 rounded-xl ${partner.color} text-white flex items-center justify-center font-heading font-bold text-xs shadow-sm`}>
                {partner.initials}
              </div>
              <div className="text-left">
                <span className="font-heading font-bold text-xs text-white block leading-none group-hover/item:text-amber-400 transition-colors">
                  {partner.name}
                </span>
                <span className="text-[10px] text-emerald-200 font-body font-medium block mt-0.5">
                  {partner.type}
                </span>
              </div>
            </div>
          ))}
        </div>

        <div className="flex shrink-0 animate-marquee items-center gap-6 py-2" aria-hidden="true">
          {partners.concat(partners).map((partner, index) => (
            <div
              key={`repeat-${partner.name}-${index}`}
              className="flex items-center gap-3 px-5 py-2.5 rounded-2xl bg-white/10 hover:bg-white/15 border border-white/15 backdrop-blur-md shadow-md transition-all shrink-0 cursor-default group/item hover:border-amber-400/50"
            >
              <div className={`w-8 h-8 rounded-xl ${partner.color} text-white flex items-center justify-center font-heading font-bold text-xs shadow-sm`}>
                {partner.initials}
              </div>
              <div className="text-left">
                <span className="font-heading font-bold text-xs text-white block leading-none group-hover/item:text-amber-400 transition-colors">
                  {partner.name}
                </span>
                <span className="text-[10px] text-emerald-200 font-body font-medium block mt-0.5">
                  {partner.type}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
