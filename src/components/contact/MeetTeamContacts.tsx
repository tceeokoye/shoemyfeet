"use client";

import { motion } from "framer-motion";
import { fadeUp, staggerContainer, viewportConfig } from "@/lib/animations";
import { MailIcon, ArrowRightIcon } from "@/components/ui/Icons";

const teamMembers = [
  {
    name: "Chidubem Nnamani",
    position: "Executive Director & Founder",
    department: "Executive Leadership",
    email: "chidubem@shoemyfeet.org",
    bio: "Leads global strategy, vision, and governance for Shoe My Feet Foundation.",
    avatar: "👨‍💼",
    color: "bg-[#111827]",
  },
  {
    name: "Dr. Amaka Eze",
    position: "Volunteer & Outreach Director",
    department: "Community Operations",
    email: "amaka@shoemyfeet.org",
    bio: "Oversees 1,200+ volunteers and coordinates school shoe distribution events.",
    avatar: "👩‍⚕️",
    color: "bg-[#1A3A6B]",
  },
  {
    name: "Emeka Okoro",
    position: "Head of Corporate Partnerships",
    department: "Partnerships & CSR",
    email: "emeka@shoemyfeet.org",
    bio: "Manages CSR partnerships, corporate sponsors, and major donor relationships.",
    avatar: "👨‍💼",
    color: "bg-[#111827]",
  },
  {
    name: "Blessing Johnson",
    position: "Communications & Media Lead",
    department: "Public Relations & Media",
    email: "blessing@shoemyfeet.org",
    bio: "Handles press enquiries, story features, social media, and impact documentaries.",
    avatar: "👩‍💻",
    color: "bg-[#16A34A]",
  },
  {
    name: "Grace Danjuma",
    position: "Donations & Financial Officer",
    department: "Stewardship & Treasury",
    email: "grace@shoemyfeet.org",
    bio: "Manages donation receipts, recurring giving programs, and financial reporting.",
    avatar: "👩‍💼",
    color: "bg-[#1A3A6B]",
  },
];

export default function MeetTeamContacts() {
  return (
    <section className="section-padding bg-[#f8fafc] relative overflow-hidden" aria-label="Meet our team contacts">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          className="text-center mb-14"
        >
          <motion.span variants={fadeUp} className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-teal-100 border border-teal-200 text-teal-700 font-bold text-sm mb-4">
            👥 People Behind the Mission
          </motion.span>
          <motion.h2 variants={fadeUp} className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-[#111827] mb-4">
            Meet Our Key <span className="text-[#1A3A6B]">Team Contacts</span>
          </motion.h2>
          <motion.p variants={fadeUp} className="text-gray-600 font-body text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
            Have a specific query for a department lead? Reach out directly to our leadership team.
          </motion.p>
        </motion.div>

        {/* Team Grid */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          className="grid sm:grid-cols-2 lg:grid-cols-5 gap-5"
        >
          {teamMembers.map((member, index) => (
            <motion.div
              key={member.name}
              variants={fadeUp}
              custom={index}
              whileHover={{ y: -8, scale: 1.02 }}
              transition={{ type: "spring", stiffness: 280, damping: 22 }}
              className="bg-white rounded-2xl p-5 border border-gray-100 shadow-sm hover:shadow-xl transition-all flex flex-col justify-between text-center relative overflow-hidden group"
            >
              <div>
                <div className={`w-20 h-20  member.color flex items-center justify-center text-4xl mx-auto mb-4 shadow-lg text-white group-hover:scale-105 transition-transform`}>
                  {member.avatar}
                </div>

                <h3 className="font-heading font-bold text-base text-[#111827] mb-1">{member.name}</h3>
                <div className="text-xs text-[#1A3A6B]-dark font-body font-bold mb-1">{member.position}</div>
                <div className="text-[10px] text-gray-400 font-body uppercase tracking-wider font-semibold mb-3">{member.department}</div>
                <p className="text-xs text-gray-500 font-body leading-relaxed mb-4">{member.bio}</p>
              </div>

              <div className="pt-4 border-t border-gray-100">
                <a
                  href={`mailto:${member.email}`}
                  className="w-full py-2 px-3 rounded-xl bg-slate-50 text-[#1A3A6B] font-bold font-body text-xs flex items-center justify-center gap-1.5 hover:bg-[#111827] hover:text-white transition-all"
                >
                  <MailIcon size={13} />
                  <span>Email Direct</span>
                </a>
              </div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
