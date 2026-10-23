"use client";

import { useRef, useState, useEffect } from "react";
import { motion, useInView } from "framer-motion";
import { staggerContainer, fadeUp, viewportConfig } from "@/lib/animations";

function Counter({ value, suffix }: { value: number; suffix: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.5 });

  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const duration = 1800;
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
      {count.toLocaleString()}{suffix}
    </span>
  );
}

const aboutPageStats = [
  { value: 6500,  suffix: "+", label: "Children Helped",      accent: "#1A3A6B" },
  { value: 6500,  suffix: "+", label: "Pairs of Shoes Donated", accent: "#047857" },
  { value: 18,    suffix: "+", label: "Communities Reached",   accent: "#059669" },
  { value: 150,   suffix: "+", label: "Volunteers Engaged",    accent: "#1A3A6B" },
  { value: 24,    suffix: "+", label: "Schools Supported",     accent: "#047857" },
  { value: 4,     suffix: "+", label: "Years of Service",      accent: "#142E56" },
];

export default function ImpactStats() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.1 });

  return (
    <section className="section-padding overflow-hidden relative bg-[#111827] border-y border-white/10 text-white">
      {/* Background Glows */}
      <div className="absolute top-0 left-1/4 w-96 h-96 rounded-full pointer-events-none bg-[#1A3A6B]/10 blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-80 h-80 rounded-full pointer-events-none bg-black/5 blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div
          className="text-center max-w-2xl mx-auto mb-14"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
        >
          <motion.h2
            variants={fadeUp}
            className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight text-white"
          >
            Every Number Is a{" "}
            <span style={{ color: "#1A3A6B" }}>Child&apos;s Story</span>
          </motion.h2>
          <motion.p
            variants={fadeUp}
            className="font-body text-base mt-4 leading-relaxed"
            style={{ color: "rgba(167,243,208,0.85)" }}
          >
            From a single act of generosity to a nationwide movement — here&apos;s the measurable impact
            we&apos;ve created together across Nigeria.
          </motion.p>
        </motion.div>

        {/* Stats Grid */}
        <div ref={ref} className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {aboutPageStats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ type: "spring" as const, stiffness: 80, damping: 18, delay: i * 0.1 }}
              whileHover={{ y: -6, scale: 1.02, transition: { type: "spring" as const, stiffness: 280, damping: 22 } }}
              className="group relative rounded-2xl p-7 text-center overflow-hidden cursor-default"
              style={{
                background: "rgba(255,255,255,0.05)",
                border: "1px solid rgba(255,255,255,0.1)",
                backdropFilter: "blur(12px)",
              }}
            >
              {/* Hover glow */}
              <div
                className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                style={{ background: `radial-gradient(circle at 50% 0%, ${stat.accent}22 0%, transparent 70%)` }}
              />

              {/* Count */}
              <div
                className="font-heading text-4xl sm:text-5xl font-extrabold mb-2 leading-none"
                style={{ color: stat.accent === "#047857" || stat.accent === "#059669" ? "#6ee7b7" : "#142E56" }}
              >
                <Counter value={stat.value} suffix={stat.suffix} />
              </div>

              {/* Label */}
              <p className="font-body text-base font-semibold" style={{ color: "rgba(209,250,229,0.9)" }}>
                {stat.label}
              </p>

              {/* Bottom accent line */}
              <div
                className="absolute bottom-0 left-1/2 -translate-x-1/2 h-0.5 w-0 group-hover:w-3/4 transition-all duration-500 rounded-full"
                style={{ background: stat.accent }}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
