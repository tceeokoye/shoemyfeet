"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { GALLERY_STATS } from "./galleryData";
import { fadeUp, staggerContainer, viewportConfig } from "@/lib/animations";
import { CameraIcon, VideoIcon, CalendarIcon, MapPinIcon, UsersIcon } from "@/components/ui/Icons";

function Counter({ value, suffix }: { value: number; suffix: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.5 });

  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const duration = 2000;
    const increment = value / (duration / 16);

    const timer = setInterval(() => {
      start += increment;
      if (start >= value) {
        setCount(value);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);

    return () => clearInterval(timer);
  }, [inView, value]);

  return (
    <span ref={ref}>
      {count.toLocaleString()}
      {suffix}
    </span>
  );
}

export default function GalleryStats() {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case "camera":
        return <CameraIcon size={24} className="text-white" />;
      case "video":
        return <VideoIcon size={24} className="text-white" />;
      case "calendar":
        return <CalendarIcon size={24} className="text-white" />;
      case "map-pin":
        return <MapPinIcon size={24} className="text-white" />;
      default:
        return <UsersIcon size={24} className="text-white" />;
    }
  };

  return (
    <section className="relative z-20 -mt-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <motion.div
        className="bg-white rounded-3xl p-6 sm:p-8 shadow-2xl border border-gray-100 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6"
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={viewportConfig}
      >
        {GALLERY_STATS.map((stat, idx) => (
          <motion.div
            key={idx}
            variants={fadeUp}
            className="flex flex-col items-center text-center p-3 group hover:scale-105 transition-transform"
          >
            <div className={`w-12 h-12 rounded-2xl stat.color flex items-center justify-center shadow-lg mb-3 group-hover:rotate-6 transition-transform`}>
              {getIcon(stat.icon)}
            </div>
            <h3 className="font-heading text-2xl sm:text-3xl font-extrabold text-royal-blue leading-tight mb-1">
              <Counter value={stat.value} suffix={stat.suffix} />
            </h3>
            <p className="font-body text-xs sm:text-sm font-semibold text-gray-500">
              {stat.label}
            </p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
