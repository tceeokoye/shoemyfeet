"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import type { ProjectStat } from "@/lib/projectDetails";

function ProjectStatCard({ stat, index }: { stat: ProjectStat; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.4 });
  const [count, setCount] = useState(0);
  const [cardDropped, setCardDropped] = useState(false);

  useEffect(() => {
    if (!cardDropped) return;

    let frameId = 0;
    let startTime: number | undefined;
    const duration = 1400;

    const animateCount = (timestamp: number) => {
      if (startTime === undefined) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      const easedProgress = 1 - (1 - progress) ** 3;
      setCount(Math.round(stat.value * easedProgress));

      if (progress < 1) {
        frameId = window.requestAnimationFrame(animateCount);
      }
    };

    frameId = window.requestAnimationFrame(animateCount);
    return () => {
      window.cancelAnimationFrame(frameId);
    };
  }, [cardDropped, stat.value]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: -48, scale: 0.94 }}
      animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
      transition={{
        duration: 0.65,
        delay: index * 0.18,
        ease: [0.22, 1, 0.36, 1],
      }}
      onAnimationComplete={() => setCardDropped(true)}
      className="rounded-xl bg-white px-4 py-6 text-center shadow-md sm:py-8"
    >
      <div className="mb-2 flex items-center justify-center gap-0.5 font-heading text-3xl font-semibold leading-none text-[#142E56] sm:text-4xl">
        {stat.prefix}
        {count.toLocaleString()}
        {stat.suffix}
      </div>
      <p className="font-body text-xs font-medium uppercase tracking-wide text-[#696558] sm:text-sm">
        {stat.label}
      </p>
    </motion.div>
  );
}

export default function ProjectStats({ stats }: { stats: ProjectStat[] }) {
  return (
    <section aria-label="Project impact statistics" className="bg-white py-6 sm:py-8">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
          {stats.map((stat, index) => (
            <ProjectStatCard key={stat.label} stat={stat} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
