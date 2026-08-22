"use client";

import { motion } from "framer-motion";
import { WHY_VOLUNTEER_BENEFITS } from "@/lib/volunteerData";
import { staggerContainer, fadeUp, viewportConfig } from "@/lib/animations";

export default function WhyVolunteer() {
  return (
    <section id="why-volunteer" className="section-padding bg-[#f8fafc] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
            className="inline-block px-4 py-1.5 rounded-full bg-orange-100 text-warm-orange-dark text-xs sm:text-sm font-bold border border-orange-200 mb-4"
          >
            Why Volunteer With Us?
          </motion.span>
          <motion.h2
            variants={fadeUp}
            className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1a1a2e] mb-5 leading-tight"
          >
            Your Time Creates{" "}
            <span className="text-warm-orange">Lasting Change</span>
          </motion.h2>
          <motion.p
            variants={fadeUp}
            className="text-base sm:text-lg text-gray-600 font-body leading-relaxed max-w-2xl mx-auto"
          >
            Beyond the joy of service, volunteering with Shoe My Feet Foundation opens doors — to new skills, lifelong friendships, and the rare privilege of watching a child's life transform before your eyes.
          </motion.p>
        </motion.div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {WHY_VOLUNTEER_BENEFITS.map((benefit, index) => (
            <motion.div
              key={benefit.title}
              initial={{ opacity: 0, y: 40, scale: 0.96 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: index * 0.08, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ y: -8, scale: 1.02, transition: { type: "spring", stiffness: 300, damping: 20 } }}
              className={`relative group rounded-3xl p-7 benefit.bg border border-white hover:border-orange-200 shadow-sm hover:shadow-2xl transition-all duration-500 cursor-default overflow-hidden`}
            >
              {/* Hover glow */}
              <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-orange-50" />

              {/* Icon */}
              <motion.div
                className="relative z-10 w-14 h-14 rounded-2xl bg-white shadow-md flex items-center justify-center text-3xl mb-5 group-hover:shadow-lg transition-shadow duration-300"
                animate={{ rotate: [0, 4, -4, 0] }}
                transition={{ duration: 4 + index * 0.5, repeat: Infinity, ease: "easeInOut", delay: index * 0.2 }}
              >
                {benefit.icon}
              </motion.div>

              {/* Content */}
              <div className="relative z-10">
                <h3 className={`font-heading text-xl font-bold mb-3 ${benefit.color}`}>{benefit.title}</h3>
                <p className="font-body text-gray-600 text-sm sm:text-base leading-relaxed">{benefit.description}</p>
              </div>

              {/* Bottom accent bar */}
              <motion.div
                className={`absolute bottom-0 left-0 h-1 benefit.bg.replace("from-", "from-").replace("to-", "to-") rounded-b-3xl`}
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: index * 0.08 + 0.3, ease: [0.22, 1, 0.36, 1] }}
                style={{ originX: 0, width: "100%" }}
              />
            </motion.div>
          ))}
        </div>

        {/* Bottom quote strip */}
        <motion.div
          className="mt-16 rounded-3xl bg-[#09090b] p-8 sm:p-10 text-center relative overflow-hidden"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-0 right-0 w-64 h-64 rounded-full bg-[#f97316]/10 blur-[100px]" />
            <div className="absolute bottom-0 left-0 w-64 h-64 rounded-full bg-[#f97316]/8 blur-[100px]" />
          </div>
          <div className="relative z-10">
            <div className="text-4xl mb-4">❤️</div>
            <p className="font-heading text-xl sm:text-2xl lg:text-3xl font-bold text-white leading-relaxed max-w-3xl mx-auto">
              "Volunteers don't get paid — not because they're worthless, but because they're <span className="text-warm-orange">priceless</span>."
            </p>
            <p className="font-body text-orange-300 mt-4 text-sm font-semibold">— Sherry Anderson</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
