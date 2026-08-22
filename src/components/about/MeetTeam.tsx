"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";
import { fadeUp, staggerContainer, viewportConfig } from "@/lib/animations";

const team = [
  {
    name: "Philomena Nwajagu",
    position: "Founder & Executive Director",
    photo: "/images/MrPhilo.jpeg",
    quote: "Providing shoes is not just charity — it's giving a child the dignity and confidence to step boldly into their future.",
    linkedin: "https://linkedin.com",
    twitter: "https://twitter.com",
    email: "philomena@shoemyfeet.org",
    tag: "Founder",
  },
  {
    name: "Emmanuel Chukwu",
    position: "Head of Field Operations & Distribution",
    photo: "/images/volunteers.jpg",
    quote: "Seeing a child's face light up when they put on their brand new fitting shoes makes every single kilometre worth walking.",
    linkedin: "https://linkedin.com",
    twitter: "https://twitter.com",
    email: "emmanuel@shoemyfeet.org",
    tag: "Operations",
  },
  {
    name: "Amina Bello",
    position: "Northern Region Outreach Lead",
    photo: "/images/story2.jpg",
    quote: "We don't just hand out shoes; we partner with teachers, parents, and community elders to protect every child's right to learn.",
    linkedin: "https://linkedin.com",
    twitter: "https://twitter.com",
    email: "amina@shoemyfeet.org",
    tag: "Outreach",
  },
  {
    name: "David Okafor",
    position: "Lead Shoemaking & Skills Instructor",
    photo: "/images/shoemaking.jpg",
    quote: "Training young people in shoemaking creates a self-sustaining wave of community pride, job creation, and lasting empowerment.",
    linkedin: "https://linkedin.com",
    twitter: "https://twitter.com",
    email: "david@shoemyfeet.org",
    tag: "Empowerment",
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      type: "spring" as const,
      stiffness: 80,
      damping: 18,
      delay: i * 0.12,
    },
  }),
};

export default function MeetTeam() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.15 });

  return (
    <section className="section-padding bg-white overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
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
            className="inline-block px-4 py-1.5 rounded-full bg-orange-100 text-[#f97316] text-xs sm:text-sm font-bold font-body mb-3 border border-orange-200"
          >
            Leadership &amp; Volunteers
          </motion.span>
          <motion.h2
            variants={fadeUp}
            className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0a0a0a] mb-4 leading-tight"
          >
            Meet the Hearts Behind <span className="text-[#f97316]">the Mission</span>
          </motion.h2>
          <motion.p
            variants={fadeUp}
            className="text-base sm:text-lg text-slate-600 font-body leading-relaxed"
          >
            A passionate team of changemakers, educators, and volunteers dedicated to serving underserved children across Nigeria.
          </motion.p>
        </motion.div>

        {/* Team Grid */}
        <div ref={ref} className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {team.map((member, index) => (
            <motion.div
              key={member.name}
              custom={index}
              variants={cardVariants}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              whileHover={{ y: -6, transition: { type: "spring" as const, stiffness: 280, damping: 22 } }}
              className="group relative bg-white rounded-3xl overflow-hidden border border-slate-100 shadow-md hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
            >
              {/* Top Image Container */}
              <div className="relative w-full h-72 overflow-hidden bg-slate-100">
                <Image
                  src={member.photo}
                  alt={member.name}
                  fill
                  className="object-cover object-top group-hover:scale-105 transition-transform duration-700"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                
                {/* Role Badge */}
                <span className="absolute top-4 left-4 px-3 py-1 rounded-full bg-black/80 text-white font-body text-xs font-bold shadow-md border border-white/20">
                  {member.tag}
                </span>
              </div>

              {/* Card Body */}
              <div className="p-6 flex flex-col flex-1 justify-between">
                <div>
                  <h3 className="font-heading font-bold text-xl text-[#0a0a0a] mb-1">
                    {member.name}
                  </h3>
                  <p className="text-xs font-bold text-[#f97316] font-body uppercase tracking-wider mb-4">
                    {member.position}
                  </p>

                  <p className="text-slate-600 font-body text-xs leading-relaxed italic mb-6 relative pl-3 border-l-2 border-[#f97316]">
                    &ldquo;{member.quote}&rdquo;
                  </p>
                </div>

                {/* Social links */}
                <div className="flex items-center gap-3 pt-4 border-t border-gray-100 text-gray-400">
                  <a
                    href={member.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-8 h-8 rounded-full bg-gray-50 flex items-center justify-center hover:bg-[#09090b] hover:text-white transition-colors"
                    aria-label={`${member.name} LinkedIn`}
                  >
                    <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                      <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
                    </svg>
                  </a>
                  <a
                    href={member.twitter}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-8 h-8 rounded-full bg-gray-50 flex items-center justify-center hover:bg-[#f97316] hover:text-white transition-colors"
                    aria-label={`${member.name} Twitter`}
                  >
                    <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                      <path d="M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.05c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98 8.58 8.58 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21 16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z" />
                    </svg>
                  </a>
                  <a
                    href={`mailto:${member.email}`}
                    className="w-8 h-8 rounded-full bg-gray-50 flex items-center justify-center hover:bg-[#ea580c] hover:text-white transition-colors ml-auto text-xs font-bold"
                    aria-label={`Email ${member.name}`}
                  >
                    ✉
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
