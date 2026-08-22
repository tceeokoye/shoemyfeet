"use client";

import { motion } from "framer-motion";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

const metrics = [
  { value: 6500, suffix: "+", label: "Pairs Distributed", icon: "👟" },
  { value: 18,   suffix: "+", label: "Schools & Communities", icon: "🏫" },
  { value: 137,  suffix: "+", label: "Kids Trained", icon: "🛠️" },
  { value: 3,    suffix: "",  label: "Nigerian States", icon: "🗺️" },
];

function Counter({ metric, index }: { metric: typeof metrics[0]; index: number }) {
  const { ref, inView } = useInView({ threshold: 0.4, triggerOnce: true });

  return (
    <motion.div
      ref={ref}
      className="flex flex-col items-center text-center px-4 py-8 sm:py-10 relative group"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
    >
      {/* Divider (except first) */}
      {index > 0 && (
        <div className="absolute left-0 top-1/2 -translate-y-1/2 h-10 w-px bg-white/10 hidden sm:block" />
      )}

      <span className="text-3xl mb-2 filter drop-shadow">{metric.icon}</span>

      <div
        className="font-heading font-extrabold text-white leading-none mb-1 drop-shadow-sm flex items-center justify-center gap-0.5"
        style={{ fontSize: "clamp(2rem, 4vw, 3.25rem)" }}
      >
        {inView ? (
          <CountUp end={metric.value} duration={2.2} separator="," />
        ) : (
          "0"
        )}
        <span className="text-[#f97316]">{metric.suffix}</span>
      </div>

      <p className="font-body text-xs sm:text-sm text-neutral-300 font-semibold tracking-wide uppercase">
        {metric.label}
      </p>
    </motion.div>
  );
}

export default function ImpactSection() {
  return (
    <section className="bg-[#09090b] border-y border-white/10 text-white relative overflow-hidden">
      {/* Subtle Glow */}
      <div className="absolute -left-20 top-1/2 -translate-y-1/2 w-60 h-60 bg-orange-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -right-20 top-1/2 -translate-y-1/2 w-60 h-60 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-2 sm:grid-cols-4 divide-x-0 sm:divide-x divide-white/10">
          {metrics.map((m, i) => (
            <Counter key={m.label} metric={m} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
