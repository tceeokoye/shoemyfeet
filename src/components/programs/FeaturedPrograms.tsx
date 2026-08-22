"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { CheckCircleIcon, ArrowRightIcon } from "@/components/ui/Icons";

const programs = [
  {
    id: "shoe-distribution",
    title: "Shoe Distribution Initiative",
    tagline: "Core Program",
    tagColor: "bg-orange-100 text-[#f97316] border-slate-200",
    icon: "👟",
    image: "/images/distribution.jpg",
    description:
      "Our flagship initiative provides quality footwear to children in underserved communities across Nigeria, ensuring they can attend school and daily activities safely without fear of injury or embarrassment.",
    objectives: [
      "Provide durable school shoes to at least 2,000 children per year",
      "Partner with local schools for seamless distribution",
      "Ensure proper fitting for every child",
      "Reduce school absenteeism due to lack of footwear",
    ],
    accentColor: "bg-[#09090b]",
    topBar: "bg-[#09090b]",
    href: "/donate",
    cta: "Support This Program",
  },
  {
    id: "back-to-school",
    title: "Back-to-School Campaign",
    tagline: "Seasonal Initiative",
    tagColor: "bg-emerald-100 text-emerald-700 border-emerald-200",
    icon: "🎒",
    image: "/images/children_walking_school.jpg",
    description:
      "Every academic year, we launch our Back-to-School Campaign to equip children with shoes before the new school term. This helps improve attendance, academic confidence, and the school experience for thousands of pupils.",
    objectives: [
      "Launch campaigns at the start of every school term",
      "Reach the most vulnerable children first",
      "Partner with PTAs and headteachers for smooth coordination",
      "Monitor attendance impact post-distribution",
    ],
    accentColor: "bg-[#15803d]",
    topBar: "bg-[#15803d]",
    href: "/donate",
    cta: "Support This Program",
  },
  {
    id: "community-outreach",
    title: "Community Outreach",
    tagline: "Grassroots Program",
    tagColor: "bg-orange-100 text-orange-700 border-orange-200",
    icon: "🏘️",
    image: "/images/community.jpg",
    description:
      "We organize immersive outreach events in rural and urban communities, combining shoe donations with health awareness sessions, hygiene education, and meaningful family engagement to maximize holistic impact.",
    objectives: [
      "Host community events in underserved areas",
      "Integrate health and hygiene education workshops",
      "Engage families, community leaders, and local health workers",
      "Document and share community transformation stories",
    ],
    accentColor: "bg-[#f97316]",
    topBar: "bg-[#f97316]",
    href: "/volunteer",
    cta: "Join an Outreach",
  },
  {
    id: "school-partnership",
    title: "School Partnership Program",
    tagline: "Institutional Collaboration",
    tagColor: "bg-purple-100 text-purple-700 border-purple-200",
    icon: "🏫",
    image: "/images/gallery5.jpg",
    description:
      "We collaborate directly with primary and secondary schools to identify the most vulnerable children and deliver shoes where they are needed most. Schools act as trusted distribution hubs to ensure fairness and traceability.",
    objectives: [
      "Establish partnerships with 50+ schools across Nigeria",
      "Create school-based identification systems for vulnerable pupils",
      "Train school staff on distribution protocols",
      "Track and report impact data from each partner school",
    ],
    accentColor: "bg-[#09090b]",
    topBar: "bg-[#09090b]",
    href: "/contact",
    cta: "Partner With Us",
  },
  {
    id: "volunteer-outreach",
    title: "Volunteer Outreach Program",
    tagline: "Community Mobilization",
    tagColor: "bg-rose-100 text-rose-700 border-rose-200",
    icon: "🙌",
    image: "/images/volunteers.jpg",
    description:
      "We mobilize a passionate network of volunteers who assist with sorting donations, organizing distribution events, and driving community engagement. Volunteers are the heartbeat of everything we do.",
    objectives: [
      "Recruit and train 300+ active volunteers annually",
      "Create structured volunteer roles for meaningful impact",
      "Provide volunteer appreciation and certification",
      "Support volunteers with logistics, transport, and coordination",
    ],
    accentColor: "bg-[#f97316]",
    topBar: "bg-[#f97316]",
    href: "/volunteer",
    cta: "Become a Volunteer",
  },
  {
    id: "corporate-partnership",
    title: "Corporate Partnership Initiative",
    tagline: "Business & CSR",
    tagColor: "bg-amber-100 text-amber-700 border-amber-200",
    icon: "🤝",
    image: "/images/shoemaking.jpg",
    description:
      "We work with businesses, philanthropists, and organizations to expand our impact through CSR sponsorships, bulk donations, and long-term partnerships. Every corporate partner amplifies our reach exponentially.",
    objectives: [
      "Secure CSR partnerships with leading Nigerian companies",
      "Create structured sponsorship tiers with clear impact metrics",
      "Offer co-branding and employee volunteering opportunities",
      "Publish annual impact reports for all corporate partners",
    ],
    accentColor: "bg-[#f59e0b]",
    topBar: "bg-[#f59e0b]",
    href: "/contact",
    cta: "Become a Partner",
  },
];

function ProgramCard({ program, index }: { program: typeof programs[0]; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.15 });
  const isEven = index % 2 === 0;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 60 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ type: "spring" as const, stiffness: 60, damping: 18, delay: 0.1 }}
      className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center"
    >
      {/* Image */}
      <motion.div
        initial={{ opacity: 0, x: isEven ? -60 : 60 }}
        animate={inView ? { opacity: 1, x: 0 } : {}}
        transition={{ type: "spring" as const, stiffness: 60, damping: 18, delay: 0.05 }}
        className={`relative h-72 sm:h-96 rounded-3xl overflow-hidden shadow-2xl ${isEven ? "" : "lg:order-last"}`}
      >
        <Image
          src={program.image}
          alt={program.title}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-700"
          sizes="(max-width: 1024px) 100vw, 50vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-transparent to-transparent" />
        <div className="absolute bottom-4 left-4">
          <span className="text-4xl">{program.icon}</span>
        </div>
        {/* Colored top bar accent */}
        <div className="absolute top-0 left-0 right-0 h-1.5 bg-[#f97316]" />
      </motion.div>

      {/* Content */}
      <motion.div
        initial={{ opacity: 0, x: isEven ? 60 : -60 }}
        animate={inView ? { opacity: 1, x: 0 } : {}}
        transition={{ type: "spring" as const, stiffness: 60, damping: 18, delay: 0.2 }}
        className={isEven ? "" : "lg:order-first"}
      >
        <span className="inline-block px-3 py-1 rounded-full text-xs font-bold font-body border mb-4 bg-orange-500/20 text-amber-300 border-orange-500/40">
          {program.tagline}
        </span>
        <h3 className="font-heading text-2xl sm:text-3xl font-bold text-white mb-4 leading-tight">
          {program.title}
        </h3>
        <p className="font-body text-neutral-200/90 text-base leading-relaxed mb-6">
          {program.description}
        </p>

        {/* Objectives */}
        <div className="space-y-2.5 mb-7">
          {program.objectives.map((obj) => (
            <div key={obj} className="flex items-start gap-3">
              <CheckCircleIcon size={18} className="text-emerald-400 shrink-0 mt-0.5" />
              <p className="font-body text-neutral-200 text-sm">{obj}</p>
            </div>
          ))}
        </div>

        <Link
          href={program.href}
          className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-white font-bold font-body text-sm btn-orange shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 group"
        >
          <span>{program.cta}</span>
          <ArrowRightIcon size={16} className="group-hover:translate-x-1 transition-transform" />
        </Link>
      </motion.div>
    </motion.div>
  );
}

export default function FeaturedPrograms() {
  return (
    <section className="section-padding bg-[#09090b] text-white overflow-hidden border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          className="text-center max-w-3xl mx-auto mb-20"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-orange-500/20 text-amber-300 text-xs sm:text-sm font-bold border border-orange-500/40 mb-4">
            What We Do
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4 leading-tight">
            Our Featured <span className="text-[#f59e0b]">Programs</span>
          </h2>
          <p className="text-base sm:text-lg text-neutral-300 font-body leading-relaxed">
            Six targeted programs designed to give children the shoes — and the future — they deserve.
          </p>
        </motion.div>

        {/* Program cards */}
        <div className="space-y-24">
          {programs.map((program, index) => (
            <ProgramCard key={program.id} program={program} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
