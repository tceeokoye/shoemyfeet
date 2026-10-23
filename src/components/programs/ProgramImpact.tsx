"use client";

import { useRef, useState, useEffect } from "react";
import { motion, useInView } from "framer-motion";
import { staggerContainer, fadeUp, viewportConfig } from "@/lib/animations";
import { Footprints, UsersRound, MapPin, School, Handshake } from "lucide-react";

function Counter({ value, suffix, prefix = "" }: { value: number; suffix: string; prefix?: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.5 });

  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const duration = 2000;
    const step = 16;
    const increment = value / (duration / step);
    const timer = setInterval(() => {
      start += increment;
      if (start >= value) {
        setCount(value);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, step);
    return () => clearInterval(timer);
  }, [inView, value]);

  return (
    <span ref={ref}>
      {prefix}{count.toLocaleString()}{suffix}
    </span>
  );
}

const stats = [
  { value: 6500, suffix: "+", label: "Children Reached", icon: UsersRound, color: "text-[#1A3A6B]" },
  { value: 6500, suffix: "+", label: "Pairs of Shoes Distributed", icon: Footprints, color: "text-[#1A3A6B]" },
  { value: 18, suffix: "+", label: "Communities Served", icon: MapPin, color: "text-[#16A34A]" },
  { value: 24, suffix: "+", label: "Schools Partnered With", icon: School, color: "text-[#1A3A6B]" },
  { value: 150, suffix: "+", label: "Volunteers Engaged", icon: UsersRound, color: "text-[#1A3A6B]" },
  { value: 12, suffix: "+", label: "Corporate Partners", icon: Handshake, color: "text-[#1A3A6B]" },
];

export default function ProgramImpact() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.1 });

  return (
    <section className="section-padding bg-[#111827] overflow-hidden relative">
      {/* Footprint SVG background pattern */}
      <div className="absolute inset-0 opacity-5 pointer-events-none overflow-hidden">
        {[...Array(12)].map((_, i) => (
          <div
            key={i}
            className="absolute text-white text-6xl select-none"
            style={{
              left: `${(i % 4) * 26 + 5}%`,
              top: `${Math.floor(i / 4) * 35 + 5}%`,
              transform: `rotate(${i % 2 === 0 ? -15 : 15}deg)`,
            }}
          >
            <Footprints size={48} className="text-white/15" aria-hidden="true" />
          </div>
        ))}
      </div>

      {/* Ambient glows */}
      <div className="absolute top-0 left-1/4 w-96 h-96 rounded-full bg-slate-800/10 blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-80 h-80 rounded-full bg-orange-400/10 blur-[80px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          className="text-center max-w-2xl mx-auto mb-14"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
        >
          <motion.span variants={fadeUp} className="inline-block px-4 py-1.5 rounded-full bg-white/10 border border-white/20 text-white text-xs font-bold font-body mb-4">
            Program Impact
          </motion.span>
          <motion.h2 variants={fadeUp} className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight">
            Every Number Is a{" "}
            <span className="text-[#142E56]">Child&apos;s Story</span>
          </motion.h2>
          <motion.p variants={fadeUp} className="text-neutral-200/90 font-body text-base mt-4 leading-relaxed">
            Behind every statistic is a real child who walks to school with confidence, a family with renewed hope,
            and a community uplifted by the generosity of donors and volunteers.
          </motion.p>
        </motion.div>

        <div ref={ref} className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ type: "spring" as const, stiffness: 80, damping: 18, delay: i * 0.1 }}
              whileHover={{ y: -6, scale: 1.02, transition: { type: "spring" as const, stiffness: 280, damping: 22 } }}
              className="group relative bg-white rounded-2xl p-7 text-center border border-gray-100 shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden"
            >
              <div className="w-14 h-14  bg-slate-50 border border-slate-100 flex items-center justify-center text-2xl shadow-sm mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <stat.icon size={25} className={stat.color} strokeWidth={1.8} aria-hidden="true" />
              </div>
              <div className={`font-heading text-4xl sm:text-5xl font-bold ${stat.color} mb-2`}>
                <Counter value={stat.value} suffix={stat.suffix} />
              </div>
              <p className="font-body text-[#0f2347] text-base font-bold">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
