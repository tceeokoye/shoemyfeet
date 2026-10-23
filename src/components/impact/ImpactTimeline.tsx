"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { TIMELINE } from "@/lib/constants";
import { staggerContainer, fadeUp, viewportConfig } from "@/lib/animations";
import { Heart, TrendingUp, Handshake, MapPin, Wrench, Star, type LucideIcon } from "lucide-react";

const iconMap: Record<string, LucideIcon> = {
  heart: Heart,
  "trending-up": TrendingUp,
  handshake: Handshake,
  "map-pin": MapPin,
  tool: Wrench,
  star: Star,
};

function TimelineItem({
  item,
  index,
  total,
}: {
  item: (typeof TIMELINE)[0];
  index: number;
  total: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.3 });
  const isLeft = index % 2 === 0;
  const Icon = iconMap[item.icon];

  return (
    <div ref={ref} className="relative flex items-center justify-center">
      {/* Connector line – only before last item */}
      {index < total - 1 && (
        <motion.div
          className="absolute left-1/2 top-1/2 w-0.5 bg-[#111827]"
          style={{ height: "calc(100% + 2rem)", translateX: "-50%", top: "50%" }}
          initial={{ scaleY: 0 }}
          animate={inView ? { scaleY: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
        />
      )}

      {/* Layout */}
      <div className="grid grid-cols-1 md:grid-cols-[1fr_auto_1fr] gap-4 md:gap-8 w-full items-center">
        {/* Left side content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.55, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className={`${isLeft ? "md:text-right" : "md:col-start-3 md:text-left"} md:block`}
        >
          {isLeft && (
            <div className="bg-white  p-5 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300 card-hover">
              <span className={`inline-block px-3 py-1 rounded-full text-xs font-bold item.color text-white mb-2`}>
                {item.year}
              </span>
              <h3 className="font-heading text-lg font-bold text-[#111827] mb-2">{item.title}</h3>
              <p className="font-body text-gray-600 text-sm leading-relaxed">{item.description}</p>
            </div>
          )}
        </motion.div>

        {/* Center dot */}
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={inView ? { scale: 1, opacity: 1 } : {}}
          transition={{ type: "spring", stiffness: 200, damping: 18, delay: 0.05 }}
          className="flex-shrink-0 flex items-center justify-center z-10"
        >
          <div className={`w-14 h-14 rounded-full item.color shadow-lg flex items-center justify-center border-4 border-white`}>
            <Icon size={22} className="text-[#1A3A6B]" strokeWidth={1.8} aria-hidden="true" />
          </div>
        </motion.div>

        {/* Right side content */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.55, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className={`${!isLeft ? "" : "md:col-start-3"} md:block`}
        >
          {!isLeft && (
            <div className="bg-white  p-5 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300 card-hover">
              <span className={`inline-block px-3 py-1 rounded-full text-xs font-bold item.color text-white mb-2`}>
                {item.year}
              </span>
              <h3 className="font-heading text-lg font-bold text-[#111827] mb-2">{item.title}</h3>
              <p className="font-body text-gray-600 text-sm leading-relaxed">{item.description}</p>
            </div>
          )}
        </motion.div>
      </div>
    </div>
  );
}

export default function ImpactTimeline() {
  return (
    <section className="section-padding bg-[#111827] overflow-hidden">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          className="text-center max-w-3xl mx-auto mb-16"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
        >
          <motion.span
            variants={fadeUp}
            className="inline-block px-4 py-1.5 rounded-full bg-orange-100 text-orange-700 text-xs sm:text-sm font-bold border border-orange-200 mb-4"
          >
            Our Journey
          </motion.span>
          <motion.h2
            variants={fadeUp}
            className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-[#111827] mb-4 leading-tight"
          >
            Our Impact{" "}
            <span className="text-[#1A3A6B]">Journey</span>
          </motion.h2>
          <motion.p
            variants={fadeUp}
            className="text-base sm:text-lg text-[#1A3A6B] font-body leading-relaxed"
          >
            From a single act of kindness to a national movement — discover the milestones that shaped our growing impact.
          </motion.p>
        </motion.div>

        {/* Timeline */}
        <div className="space-y-12 md:space-y-16 relative">
          {/* Mobile: Simple stacked layout */}
          <div className="md:hidden space-y-6">
            {TIMELINE.map((item, index) => {
              const Icon = iconMap[item.icon];
              return (
                <motion.div
                  key={item.year}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.5, delay: index * 0.07 }}
                  className="flex gap-4 items-start"
                >
                  <div className={`flex-shrink-0 w-12 h-12 rounded-full item.color shadow-md flex items-center justify-center border-4 border-white`}>
                    <Icon size={20} className="text-[#1A3A6B]" strokeWidth={1.8} aria-hidden="true" />
                  </div>
                  <div className="bg-white  p-4 shadow-md border border-gray-100 flex-1">
                    <span className={`inline-block px-2.5 py-0.5 rounded-full text-xs font-bold item.color text-white mb-2`}>
                      {item.year}
                    </span>
                    <h3 className="font-heading text-base font-bold text-[#111827] mb-1">{item.title}</h3>
                    <p className="font-body text-gray-600 text-sm leading-relaxed">{item.description}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Desktop: Alternating timeline */}
          <div className="hidden md:block space-y-16 relative">
            {/* Vertical center line */}
            <motion.div
              className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-[#111827] -translate-x-1/2"
              initial={{ scaleY: 0 }}
              whileInView={{ scaleY: 1 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
              style={{ originY: 0 }}
            />
            {TIMELINE.map((item, index) => (
              <TimelineItem key={item.year} item={item} index={index} total={TIMELINE.length} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
