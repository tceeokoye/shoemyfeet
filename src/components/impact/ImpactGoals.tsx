"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Footprints, School, MapPin, Wrench, Handshake, Globe } from "lucide-react";
import { staggerContainer, fadeUp, viewportConfig } from "@/lib/animations";

const goals = [
  {
    id: 1,
    icon: Footprints,
    title: "10,000 Shoes by 2027",
    description: "Reach 10,000 pairs of school shoes distributed annually, doubling our current capacity through expanded fundraising and partnerships.",
    color: "bg-[#111827]",
    status: "In Progress",
    progress: 65,
    timeline: "2025–2027",
  },
  {
    id: 2,
    icon: School,
    title: "50+ School Partnerships",
    description: "Establish formal partnerships with 50 schools across 5 Nigerian states, creating reliable distribution channels and impact tracking systems.",
    color: "bg-[#111827]",
    status: "Planning",
    progress: 24,
    timeline: "2025–2026",
  },
  {
    id: 3,
    icon: MapPin,
    title: "Expand to 5 More States",
    description: "Extend our reach to Lagos, Abuja (FCT), Rivers, Anambra, and Ogun states, creating a truly national footprint across Nigeria.",
    color: "bg-[#16A34A]",
    status: "Planning",
    progress: 15,
    timeline: "2026–2027",
  },
  {
    id: 4,
    icon: Wrench,
    title: "Train 500 kids in Shoemaking",
    description: "Scale our Kids Shoemaking & Skills programme to train 500 young people, creating sustainable livelihood opportunities across communities.",
    color: "bg-[#1A3A6B]",
    status: "In Progress",
    progress: 27,
    timeline: "2025–2026",
  },
  {
    id: 5,
    icon: Handshake,
    title: "20 Corporate Partners",
    description: "Secure 20 long-term corporate CSR partnerships, with structured impact reporting and employee volunteering opportunities for each partner.",
    color: "bg-[#1A3A6B]",
    status: "Planning",
    progress: 30,
    timeline: "2025–2026",
  },
  {
    id: 6,
    icon: Globe,
    title: "Launch Digital Giving Platform",
    description: "Build a dedicated online giving platform enabling recurring donations, impact tracking dashboards, and real-time beneficiary updates for donors.",
    color: "bg-[#111827]",
    status: "Upcoming",
    progress: 5,
    timeline: "2026",
  },
];

const statusColors: Record<string, string> = {
  "In Progress": "bg-emerald-100 text-emerald-700 border-emerald-200",
  "Planning": "bg-orange-100 text-[#1A3A6B] border-slate-200",
  "Upcoming": "bg-[#FFFFFF] text-[#1A3A6B] border-[#F3F4F6]",
};

function GoalCard({ goal, index }: { goal: typeof goals[0]; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.55, delay: index * 0.08, ease: [0.16, 1, 0.3, 1] }}
      whileHover={{ y: -6, transition: { type: "spring", stiffness: 300, damping: 22 } }}
      className="bg-white rounded-2xl p-6 border border-gray-100 shadow-lg hover:shadow-2xl transition-all duration-500 relative overflow-hidden group"
    >
      {/* Top accent bar */}
      <div className={`absolute top-0 left-0 right-0 h-1.5 goal.color rounded-t-3xl`} />

      {/* Background glow */}
      <div className={`absolute -top-8 -right-8 w-24 h-24 rounded-full goal.color opacity-5 group-hover:opacity-15 transition-opacity duration-500`} />

      {/* Header */}
      <div className="flex items-start justify-between gap-3 mb-4 mt-2">
        <div className={`w-12 h-12  goal.color flex items-center justify-center text-2xl shadow-md flex-shrink-0`}>
          <goal.icon size={23} className="text-white" strokeWidth={1.8} aria-hidden="true" />
        </div>
        <div className="flex flex-col items-end gap-1">
          <span className={`inline-block text-xs font-bold px-2.5 py-0.5 rounded-full border font-body ${statusColors[goal.status]}`}>
            {goal.status}
          </span>
          <span className="text-xs text-gray-400 font-body">{goal.timeline}</span>
        </div>
      </div>

      {/* Content */}
      <h3 className="font-heading text-lg font-bold text-[#111827] mb-2">{goal.title}</h3>
      <p className="font-body text-gray-600 text-sm leading-relaxed mb-5">{goal.description}</p>

      {/* Progress */}
      <div>
        <div className="flex justify-between items-center mb-1.5">
          <span className="text-xs font-bold font-body text-gray-500">Progress</span>
          <span className={`text-xs font-extrabold font-heading goal.color bg-clip-text text-transparent`}>
            {goal.progress}%
          </span>
        </div>
        <div className="relative h-2 rounded-full bg-gray-100 overflow-hidden">
          <motion.div
            className={`absolute inset-y-0 left-0 rounded-full goal.color`}
            initial={{ width: 0 }}
            animate={inView ? { width: `${goal.progress}%` } : {}}
            transition={{ duration: 1.3, delay: index * 0.08 + 0.3, ease: [0.22, 1, 0.36, 1] }}
          />
        </div>
      </div>
    </motion.div>
  );
}

export default function ImpactGoals() {
  return (
    <section className="section-padding bg-[#f8fafc] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
            className="inline-block px-4 py-1.5 rounded-full bg-teal-100 text-teal-700 text-xs sm:text-sm font-bold border border-teal-200 mb-4"
          >
            Looking Ahead
          </motion.span>
          <motion.h2
            variants={fadeUp}
            className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-[#111827] mb-4 leading-tight"
          >
            The Road{" "}
            <span className="text-[#1A3A6B]">Ahead</span>
          </motion.h2>
          <motion.p
            variants={fadeUp}
            className="text-base sm:text-lg text-gray-600 font-body leading-relaxed"
          >
            Our ambitions are as big as the need. Explore the goals we&apos;re working toward — and see how you can help us reach them faster.
          </motion.p>
        </motion.div>

        {/* Goals Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {goals.map((goal, index) => (
            <GoalCard key={goal.id} goal={goal} index={index} />
          ))}
        </div>

        {/* Connecting dots animation */}
        <motion.div
          className="mt-12 flex justify-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
        >
          <div className="flex items-center gap-2">
            {[...Array(6)].map((_, i) => (
              <motion.div
                key={i}
                className={`rounded-full ${i < 2 ? "bg-[#1A3A6B]" : "bg-gray-300"}`}
                style={{ width: i < 2 ? 12 : 8, height: i < 2 ? 12 : 8 }}
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 1.5, repeat: Infinity, delay: i * 0.2 }}
              />
            ))}
            <span className="text-gray-400 font-body text-xs ml-2">Goals in progress</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
