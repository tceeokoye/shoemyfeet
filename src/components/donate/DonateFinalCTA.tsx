"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { fadeUp, staggerContainer, viewportConfig } from "@/lib/animations";

export default function DonateFinalCTA() {
  return (
    <section className="section-padding bg-[#FFFFFF]" aria-label="Final call to action">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          className="rounded-xl bg-white p-8 shadow-md flex flex-col items-center gap-8 sm:p-12"
        >
          <motion.h2 variants={fadeUp} className="font-heading text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold leading-[1.1] text-[#111827]">
            Together, Every Step Becomes{" "}
            <span className="text-[#142E56]">a Brighter Future</span>
          </motion.h2>

          <motion.p variants={fadeUp} className="text-gray-600 font-body text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
            Every contribution — no matter the size — helps place hope on a child&apos;s feet. Join thousands of compassionate supporters who are transforming lives one pair of shoes at a time.
          </motion.p>

          {/* Stats */}
          <motion.div variants={fadeUp} className="grid grid-cols-2 sm:grid-cols-4 gap-4 w-full max-w-2xl">
            {[
              { value: "6,500+", label: "Shoes Given" },
              { value: "4,200+", label: "Children Helped" },
              { value: "38+", label: "Communities" },
              { value: "10,000+", label: "Donors" },
            ].map((stat) => (
              <div key={stat.label} className="rounded-lg bg-white p-4 text-center shadow-sm">
                <div className="font-heading font-bold text-2xl text-[#111827]">{stat.value}</div>
                <div className="text-xs text-gray-500 font-body mt-1">{stat.label}</div>
              </div>
            ))}
          </motion.div>

          {/* CTA Buttons */}
          <motion.div variants={fadeUp} className="flex flex-col sm:flex-row gap-4 justify-center w-full max-w-xl">
            <Link href="#donate-widget" className="btn-primary text-base py-4 px-8 flex-1 justify-center rounded-[10px]">
              Donate Now
            </Link>
            <Link href="/volunteer" className="btn-primary text-base py-4 px-8 flex-1 justify-center font-bold font-body flex items-center gap-2 rounded-[10px]">
              Sponsor a Child
            </Link>
            <Link href="/contact" className="btn-secondary text-base py-4 px-8 flex-1 justify-center font-bold font-body flex items-center gap-2 rounded-[10px]">
              Contact Our Team
            </Link>
          </motion.div>

          {/* Security note */}
          <motion.p variants={fadeUp} className="text-xs text-gray-500 font-body">
            All donations are SSL-encrypted and securely processed. CAC Registered Nonprofit.
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}
