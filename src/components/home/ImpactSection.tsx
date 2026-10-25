
"use client";

import { motion, useReducedMotion } from "framer-motion";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

const metrics = [
  { value: 6500, suffix: "+", label: "Pairs Distributed" },
  { value: 18, suffix: "+", label: "Schools & Communities" },
  { value: 137, suffix: "+", label: "Kids Trained" },
  { value: 3, suffix: "", label: "Nigerian States" },
];


const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.4,
    },
  },
};

const cardVariants = {
  hidden: {
    opacity: 0,
    y: -100,
    scale: 0.9,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 1.3,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  },
};


function Counter({
  metric,
}: {
  metric: (typeof metrics)[number];
}) {
  const { ref, inView } = useInView({ threshold: 0.5, triggerOnce: true });
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.div
      ref={ref}
      variants={cardVariants}
      className="rounded-xl bg-white px-4 py-6 text-center shadow-md sm:py-8"
    >
      <div className="mb-2 flex items-center justify-center gap-0.5 font-heading text-3xl font-semibold leading-none text-[#142E56] sm:text-4xl">
        {inView && !shouldReduceMotion ? (
          <CountUp end={metric.value} duration={2.5} separator="," />
        ) : inView ? (
          metric.value.toLocaleString()
        ) : (
          "0"
        )}
        {metric.suffix}
      </div>

      <p className="font-body text-xs font-medium uppercase tracking-wide text-[#696558] sm:text-sm">
        {metric.label}
      </p>
    </motion.div>
  );
}

export default function ImpactSection() {
  return (
    <section className="bg-[#FFFFFF] py-6 sm:py-8">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          className="grid grid-cols-2 gap-4 sm:grid-cols-4"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.25 }}
        >
          {metrics.map((metric) => (
            <Counter key={metric.label} metric={metric} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
