"use client";

import { motion } from "framer-motion";
import { GROUP_TYPES } from "@/lib/volunteerData";
import { staggerContainer, fadeUp, viewportConfig } from "@/lib/animations";
import { ArrowRightIcon, CheckIcon } from "@/components/ui/Icons";

export default function CorporateVolunteering() {
  return (
    <section id="corporate-volunteering" className="section-padding bg-[#f8fafc] overflow-hidden">
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
            className="inline-block px-4 py-1.5 rounded-full bg-blue-100 text-royal-blue text-xs sm:text-sm font-bold border border-blue-200 mb-4"
          >
            Group & Corporate Volunteering
          </motion.span>
          <motion.h2
            variants={fadeUp}
            className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1a1a2e] mb-4 leading-tight"
          >
            Volunteer as a{" "}
            <span className="text-royal-blue">Team</span>
          </motion.h2>
          <motion.p
            variants={fadeUp}
            className="text-base sm:text-lg text-gray-600 font-body leading-relaxed"
          >
            Whether you&apos;re a company, church, school, or community group — we&apos;ll design a meaningful volunteering experience that aligns with your values and builds team spirit.
          </motion.p>
        </motion.div>

        {/* Group Type Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {GROUP_TYPES.map((group, index) => (
            <motion.div
              key={group.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.5, delay: index * 0.08, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ y: -8, scale: 1.01, transition: { type: "spring", stiffness: 280, damping: 20 } }}
              className="group relative bg-white/70 backdrop-blur-sm rounded-3xl p-7 border border-white shadow-sm hover:shadow-2xl transition-all duration-500 overflow-hidden cursor-default"
              style={{
                background: "rgba(255,255,255,0.75)",
                backdropFilter: "blur(20px) saturate(180%)",
                WebkitBackdropFilter: "blur(20px) saturate(180%)",
                border: "1px solid rgba(255,255,255,0.6)",
              }}
            >
              {/* Glass gradient overlay on hover */}
              <div className={`absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 group.color`} style={{ opacity: 0 }} />
              <div className={`absolute -top-20 -right-20 w-40 h-40 rounded-full group.color opacity-5 group-hover:opacity-10 transition-opacity duration-500 blur-xl`} />

              {/* Icon */}
              <motion.div
                className={`relative z-10 w-14 h-14 rounded-2xl group.color flex items-center justify-center text-3xl shadow-lg mb-5`}
                animate={{ rotate: [0, 3, -3, 0] }}
                transition={{ duration: 5 + index * 0.4, repeat: Infinity, ease: "easeInOut", delay: index * 0.3 }}
              >
                {group.icon}
              </motion.div>

              {/* Content */}
              <div className="relative z-10">
                <h3 className="font-heading text-xl font-bold text-[#1a1a2e] mb-2 group-hover:text-royal-blue transition-colors duration-300">
                  {group.title}
                </h3>
                <p className="font-body text-gray-500 text-sm leading-relaxed mb-5">{group.description}</p>

                {/* Benefits */}
                <ul className="space-y-2 mb-6">
                  {group.benefits.map((benefit) => (
                    <li key={benefit} className="flex items-center gap-2.5">
                      <div className={`w-5 h-5 rounded-full group.color flex items-center justify-center shrink-0 shadow-sm`}>
                        <CheckIcon size={10} className="text-white" />
                      </div>
                      <span className="font-body text-gray-600 text-xs font-medium">{benefit}</span>
                    </li>
                  ))}
                </ul>

                <a
                  href="/contact"
                  className={`inline-flex items-center gap-2 text-sm font-bold font-body px-5 py-2.5 rounded-full group.color text-white shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300`}
                >
                  Get in Touch
                  <ArrowRightIcon size={14} />
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CSR highlight blurb */}
        <motion.div
          className="mt-14 rounded-3xl bg-[#2563eb] p-8 sm:p-10 text-center relative overflow-hidden"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-0 left-0 w-64 h-64 rounded-full bg-orange-400/10 blur-[80px]" />
            <div className="absolute bottom-0 right-0 w-64 h-64 rounded-full bg-blue-400/8 blur-[80px]" />
          </div>
          <div className="relative z-10">
            <div className="text-4xl mb-4">🏢</div>
            <h3 className="font-heading text-2xl sm:text-3xl font-bold text-white mb-3">
              CSR That Actually Matters
            </h3>
            <p className="font-body text-blue-200/80 text-base leading-relaxed max-w-2xl mx-auto mb-6">
              Partner with us for a corporate social responsibility experience that goes beyond a press release. Your team will sort shoes, visit schools, and see firsthand the difference you make — documented with photos and a full impact report.
            </p>
            <a href="/contact" className="btn-orange inline-flex items-center gap-2 px-8 py-4 text-base">
              Plan Your Corporate Day →
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
