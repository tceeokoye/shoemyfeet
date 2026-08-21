"use client";

import { motion } from "framer-motion";
import { EDUCATIONAL_RESOURCES, EducationalResource } from "@/lib/blogData";
import { fadeUp, viewportConfig, scaleIn } from "@/lib/animations";
import { ShieldCheckIcon, HeartPulseIcon, GraduationCapIcon, SparklesIcon, DownloadIcon, ClockIcon, BookOpenIcon, CheckCircleIcon } from "@/components/ui/Icons";

interface EducationalResourcesProps {
  onResourceClick: (resource: EducationalResource) => void;
}

export default function EducationalResourcesSection({ onResourceClick }: EducationalResourcesProps) {
  const getIconComponent = (iconName: string) => {
    switch (iconName) {
      case "ShieldCheck":
        return ShieldCheckIcon;
      case "HeartPulse":
        return HeartPulseIcon;
      case "GraduationCap":
        return GraduationCapIcon;
      case "Sparkles":
        return SparklesIcon;
      default:
        return BookOpenIcon;
    }
  };

  return (
    <section className="my-20">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-100 text-royal-blue font-bold text-xs uppercase tracking-wider mb-3">
            <BookOpenIcon size={14} className="text-warm-orange" />
            <span>Educational Field Resources</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-heading font-bold text-[#1a1a2e]">
            Foot Health & School Readiness Guides
          </h2>
        </div>
        <p className="text-gray-600 font-body text-xs sm:text-sm max-w-md">
          Download free informative handbooks, fitting rulers, and hygiene maintenance manuals created by our medical and education advisory council.
        </p>
      </div>

      {/* Grid of Resource Cards */}
      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={viewportConfig}
        className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6"
      >
        {EDUCATIONAL_RESOURCES.map((res) => {
          const IconComponent = getIconComponent(res.iconName);

          return (
            <motion.div
              key={res.id}
              variants={scaleIn}
              className="bg-white rounded-3xl p-6 border border-gray-100 shadow-lg hover:shadow-2xl transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1"
            >
              <div>
                {/* Icon & Category */}
                <div className="flex items-center justify-between mb-6">
                  <div className="w-12 h-12 rounded-2xl bg-[#1a3a6b] text-white flex items-center justify-center shadow-md group-hover:scale-110 transition-transform">
                    <IconComponent size={24} />
                  </div>
                  <span className="px-2.5 py-1 rounded-full bg-blue-50 text-royal-blue font-bold text-[10px] uppercase">
                    {res.category}
                  </span>
                </div>

                {/* Title */}
                <h3 className="font-heading font-bold text-base text-[#1a1a2e] mb-3 group-hover:text-warm-orange transition-colors leading-snug">
                  {res.title}
                </h3>

                {/* Description */}
                <p className="text-gray-600 font-body text-xs leading-relaxed mb-4">
                  {res.description}
                </p>

                {/* Key Takeaways */}
                <div className="bg-gray-50 p-3 rounded-2xl mb-6">
                  <span className="text-[10px] font-bold text-gray-400 uppercase tracking-wider block mb-2 font-heading">
                    Key Highlights
                  </span>
                  <ul className="space-y-1.5">
                    {res.keyTakeaways.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-1.5 text-[11px] font-body text-gray-700">
                        <CheckCircleIcon size={12} className="text-forest-green shrink-0 mt-0.5" />
                        <span className="line-clamp-1">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Action Button */}
              <div className="pt-4 border-t border-gray-100 flex items-center justify-between">
                <span className="text-[11px] font-body text-gray-400 flex items-center gap-1">
                  <ClockIcon size={12} /> {res.readingTime}
                </span>
                <button
                  type="button"
                  onClick={() => onResourceClick(res)}
                  className="btn-primary text-xs py-2 px-4 rounded-full inline-flex items-center gap-1.5 cursor-pointer shadow-xs"
                >
                  <DownloadIcon size={13} />
                  <span>{res.fileSize}</span>
                </button>
              </div>
            </motion.div>
          );
        })}
      </motion.div>
    </section>
  );
}
