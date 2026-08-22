"use client";

import { motion } from "framer-motion";
import { fadeUp, staggerContainer, viewportConfig } from "@/lib/animations";
import { PhoneIcon, MailIcon, MapPinIcon } from "@/components/ui/Icons";

const regions = [
  {
    name: "Southeast Regional Hub",
    state: "Enugu (Headquarters)",
    coordinator: "Dr. Amaka Eze",
    role: "Regional Director & Outreach Lead",
    phone: "+234 803 123 4567",
    email: "southeast@shoemyfeet.org",
    coverage: "Enugu, Anambra, Abia, Imo, Ebonyi",
    avatar: "👩‍⚕️",
    color: "bg-[#2563eb]",
    bg: "bg-blue-50",
    border: "border-blue-100",
  },
  {
    name: "Northern Regional Hub",
    state: "Kaduna State",
    coordinator: "Mallam Ibrahim Bello",
    role: "Northern Program Coordinator",
    phone: "+234 802 987 6543",
    email: "north@shoemyfeet.org",
    coverage: "Kaduna, Kano, Katsina, FCT Abuja, Plateau",
    avatar: "👨‍🏫",
    color: "bg-[#f97316]",
    bg: "bg-orange-50",
    border: "border-orange-100",
  },
  {
    name: "South-South Regional Hub",
    state: "Benin City, Edo State",
    coordinator: "Osaro Ogbeide",
    role: "South-South Field Director",
    phone: "+234 814 555 7890",
    email: "southsouth@shoemyfeet.org",
    coverage: "Edo, Delta, Rivers, Cross River, Akwa Ibom",
    avatar: "👨‍💼",
    color: "bg-[#15803d]",
    bg: "bg-[#15803d]",
    border: "border-green-100",
  },
  {
    name: "Western & Lagos Hub",
    state: "Lagos State",
    coordinator: "Folake Adeniyi",
    role: "Western Liaison & Corporate Partnerships",
    phone: "+234 809 111 2233",
    email: "lagos@shoemyfeet.org",
    coverage: "Lagos, Ogun, Oyo, Osun, Ondo",
    avatar: "👩‍💼",
    color: "bg-[#2563eb]",
    bg: "bg-purple-50",
    border: "border-purple-100",
  },
];

export default function RegionalContacts() {
  return (
    <section className="section-padding bg-[#2563eb] relative overflow-hidden" aria-label="Regional contacts">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          className="text-center mb-14"
        >
          <motion.span variants={fadeUp} className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-100 border border-purple-200 text-purple-700 font-bold text-sm mb-4">
            🌍 Regional Presence
          </motion.span>
          <motion.h2 variants={fadeUp} className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1a1a2e] mb-4">
            Our Regional <span className="text-royal-blue">Coordinators</span>
          </motion.h2>
          <motion.p variants={fadeUp} className="text-gray-600 font-body text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
            Shoe My Feet Foundation operates active outreach hubs across Nigeria. Contact your local coordinator for community partnerships and field enquiries.
          </motion.p>
        </motion.div>

        {/* Cards */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {regions.map((region, index) => (
            <motion.div
              key={region.name}
              variants={fadeUp}
              custom={index}
              whileHover={{ y: -8, scale: 1.02 }}
              transition={{ type: "spring", stiffness: 280, damping: 22 }}
              className={`rounded-3xl p-6 border ${region.border} region.bg shadow-sm hover:shadow-xl transition-all flex flex-col justify-between relative overflow-hidden`}
            >
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className={`w-12 h-12 rounded-2xl region.color flex items-center justify-center text-2xl shadow-md text-white`}>
                    {region.avatar}
                  </div>
                  <div>
                    <h3 className="font-heading font-bold text-base text-[#1a1a2e] leading-tight">{region.name}</h3>
                    <span className="text-xs text-gray-500 font-body">{region.state}</span>
                  </div>
                </div>

                <div className="p-3 rounded-2xl bg-white/80 border border-white/60 mb-4">
                  <div className="font-heading font-bold text-sm text-royal-blue">{region.coordinator}</div>
                  <div className="text-[11px] text-gray-500 font-body">{region.role}</div>
                </div>

                <div className="space-y-2 text-xs font-body">
                  <div className="flex items-center gap-2 text-gray-600">
                    <span className="text-royal-blue font-bold">📞</span>
                    <a href={`tel:${region.phone.replace(/\s/g, "")}`} className="hover:text-warm-orange font-semibold">{region.phone}</a>
                  </div>
                  <div className="flex items-center gap-2 text-gray-600 truncate">
                    <span className="text-royal-blue font-bold">✉️</span>
                    <a href={`mailto:${region.email}`} className="hover:text-warm-orange font-semibold truncate">{region.email}</a>
                  </div>
                  <div className="pt-2 border-t border-black/5 text-[11px]">
                    <span className="text-gray-500 font-medium">States Served: </span>
                    <span className="font-bold text-[#1a1a2e]">{region.coverage}</span>
                  </div>
                </div>
              </div>

              <div className="pt-5 mt-5 border-t border-black/5">
                <a
                  href={`mailto:${region.email}`}
                  className="w-full py-2.5 px-3 rounded-xl bg-white border border-gray-200 text-royal-blue font-bold font-body text-xs text-center inline-block hover:bg-royal-blue hover:text-white transition-all shadow-xs"
                >
                  Contact Hub →
                </a>
              </div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
