"use client";

import { motion } from "framer-motion";
import { fadeUp, staggerContainer, viewportConfig } from "@/lib/animations";

const otherWays = [
  {
    title: "Donate Shoes",
    description: "Ask our team whether new or gently used shoes meet current programme needs and how to arrange a hand-off.",
    cta: "Ask About Shoe Donations",
    href: "/contact",
  },
  {
    title: "Sponsor a Community",
    description: "Talk with us about supporting an outreach and the needs of a community we work with.",
    cta: "Discuss Community Support",
    href: "/contact",
  },
  {
    title: "Sponsor a School",
    description: "Contact us to discuss school partnerships and ways to support children in a school community.",
    cta: "Discuss School Support",
    href: "/contact",
  },
  {
    title: "Corporate Giving",
    description: "Explore ways your company can support school footwear and the foundation's community programmes.",
    cta: "Explore a Partnership",
    href: "/contact",
  },
  {
    title: "Church & Community",
    description: "Bring your community together around a giving drive. Contact us to talk through needs and coordination.",
    cta: "Plan a Giving Drive",
    href: "/contact",
  },
  {
    title: "Legacy Giving",
    description: "If you are considering longer-term support, contact our team to discuss possible arrangements.",
    cta: "Discuss Long-Term Giving",
    href: "/contact",
  },
];

export default function OtherWaysToGive() {
  return (
    <section className="section-padding donate-other-ways relative z-0 bg-white" aria-label="Other ways to give">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={viewportConfig} className="text-center mb-14">
          <motion.span variants={fadeUp} className="text-sm font-semibold uppercase tracking-wide text-[#142E56] mb-4">
            Other Ways to Give
          </motion.span>
          <motion.h2 variants={fadeUp} className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-[#111827] mb-5">
            More Ways to{" "}
            <span className="text-[#1A3A6B]">Make a Difference</span>
          </motion.h2>
          <motion.p variants={fadeUp} className="text-gray-600 font-body text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
            If you would like to give shoes, support a school, or explore a partnership, contact our team to discuss what is currently needed.
          </motion.p>
        </motion.div>

        {/* Cards Grid */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {otherWays.map((way, index) => (
            <motion.div
              key={way.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.45, delay: index * 0.08 }}
              whileHover={{ y: -6 }}
              className="card-3d rounded-xl bg-white p-6 shadow-md"
            >
              <h3 className="font-heading font-bold text-xl text-[#111827] mb-2">{way.title}</h3>
              <p className="text-gray-600 font-body text-sm leading-relaxed mb-5">{way.description}</p>

              <a
                href={way.href}
                className="text-sm font-bold font-body text-[#1A3A6B] hover:underline"
              >
                {way.cta}
              </a>
            </motion.div>
          ))}
        </motion.div>

        {/* In-kind donation note */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          className="mt-10 rounded-xl bg-white p-6 shadow-md max-w-2xl mx-auto"
        >
          <div>
            <h4 className="font-heading font-bold text-[#1A3A6B] mb-1">Let&apos;s Find the Right Way to Help</h4>
            <p className="text-sm text-gray-600 font-body leading-relaxed">
              Contact us before arranging a gift so we can share current programme needs and the available ways to contribute.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
