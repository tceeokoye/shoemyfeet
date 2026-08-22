"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { fadeUp, staggerContainer, viewportConfig } from "@/lib/animations";
import { MailIcon, MapPinIcon, HeartIcon, ArrowRightIcon } from "@/components/ui/Icons";

const footerLinks = {
  Organization: [
    { label: "Home", href: "/" },
    { label: "About Us", href: "/about" },
    { label: "Our Impact", href: "/impact" },
    { label: "Photo Gallery", href: "/gallery" },
  ],
  Programs: [
    { label: "Shoe Distribution", href: "/programs" },
    { label: "Child Shoemaking", href: "/programs" },
    { label: "Community Outreach", href: "/programs" },
  ],
  "Get Involved": [
    { label: "Donate Now", href: "/donate" },
    { label: "Become a Volunteer", href: "/volunteer" },
    { label: "Contact Us", href: "/contact" },
    { label: "Blog & News", href: "/blog" },
  ],
};

/* ── Modern White & Black Foot Logo for Footer ── */
function FooterLogo() {
  return (
    <Link href="/" className="flex items-center gap-3 group">
      <div className="w-12 h-12 rounded-2xl bg-black flex items-center justify-center flex-shrink-0 border-2 border-white/20 shadow-lg group-hover:scale-105 transition-transform duration-300">
        <svg viewBox="0 0 44 44" className="w-8 h-8 fill-white drop-shadow-md">
          <path d="M10 28c0 0 3-8 11-8s11 3.5 15 3.5 6-1.5 8-1.5c1.5 0 2.5 1 2.5 3v2H10v-5z" />
          <path d="M9 30h28v3c0 2-1.5 3.5-3.5 3.5H12.5C10.5 36.5 9 35 9 33v-3z" fill="#f97316" />
          <circle cx="12" cy="17" r="2.5" />
          <circle cx="18" cy="15" r="2.8" />
          <circle cx="24" cy="15" r="2.8" />
          <circle cx="30" cy="17" r="2.5" />
        </svg>
      </div>
      <div className="leading-none">
        <span className="block font-heading font-extrabold text-xl text-white tracking-tight group-hover:text-[#f97316] transition-colors">
          Shoe My Feet
        </span>
        <span className="block font-heading text-[11px] font-bold tracking-widest uppercase text-[#f97316] mt-0.5">
          Foundation
        </span>
      </div>
    </Link>
  );
}

export default function Footer() {
  return (
    <footer className="bg-[#09090b] text-white relative overflow-hidden border-t border-white/10">
      {/* Ambient Orbs */}
      <div className="absolute top-0 left-0 w-96 h-96 rounded-full bg-orange-500/5 -translate-x-1/2 -translate-y-1/2 pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-80 h-80 rounded-full bg-black/5 translate-x-1/2 translate-y-1/2 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Top Section */}
        <div className="pt-16 pb-12 border-b border-white/10">
          <div className="grid md:grid-cols-2 lg:grid-cols-12 gap-10">

            {/* Brand Column */}
            <div className="lg:col-span-4">
              <motion.div
                variants={staggerContainer}
                initial="hidden"
                whileInView="visible"
                viewport={viewportConfig}
              >
                <motion.div variants={fadeUp} className="mb-5">
                  <FooterLogo />
                </motion.div>

                <motion.p variants={fadeUp} className="font-body text-sm text-neutral-200/80 leading-relaxed mb-6 max-w-xs">
                  Restoring dignity, protecting health, and promoting quality education for
                  underserved Nigerian children through school shoes and empowerment programmes.
                </motion.p>

                <motion.div variants={fadeUp} className="flex flex-col gap-2.5 text-xs text-neutral-300 font-body mb-7">
                  <a href="mailto:hello@shoemyfeet.org" className="flex items-center gap-2 hover:text-[#f97316] transition-colors">
                    <MailIcon size={14} className="text-[#f97316]" />
                    hello@shoemyfeet.org
                  </a>
                  <div className="flex items-center gap-2">
                    <MapPinIcon size={14} className="text-[#f97316]" />
                    Nigeria — Enugu, Kaduna, Edo
                  </div>
                </motion.div>

                <motion.div variants={fadeUp}>
                  <Link href="/donate" className="btn-orange text-xs py-2.5 px-5 rounded-full inline-flex items-center gap-1.5 shadow-lg">
                    <span>Quick Donate</span>
                    <ArrowRightIcon size={12} />
                  </Link>
                </motion.div>
              </motion.div>
            </div>

            {/* Link Columns */}
            <div className="lg:col-span-8 grid sm:grid-cols-3 gap-8">
              {Object.entries(footerLinks).map(([cat, links]) => (
                <motion.div
                  key={cat}
                  variants={staggerContainer}
                  initial="hidden"
                  whileInView="visible"
                  viewport={viewportConfig}
                >
                  <motion.h4 variants={fadeUp} className="font-heading font-bold text-white text-base uppercase tracking-wider mb-5">
                    {cat}
                  </motion.h4>
                  <ul className="flex flex-col gap-3">
                    {links.map((l) => (
                      <motion.li key={l.label} variants={fadeUp}>
                        <Link
                          href={l.href}
                          className="font-body text-sm text-neutral-200/70 hover:text-white transition-colors hover:translate-x-1 inline-block"
                        >
                          {l.label}
                        </Link>
                      </motion.li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>

          </div>
        </div>

        {/* SDG Goals Strip */}
        <div className="py-5 border-b border-white/10 flex flex-wrap items-center gap-3 text-xs font-body text-neutral-300">
          <span className="font-bold text-white tracking-wider uppercase text-xs font-heading">Aligned With:</span>
          {["SDG 1 — No Poverty", "SDG 3 — Good Health", "SDG 4 — Quality Education", "SDG 10 — Reduced Inequalities"].map((s) => (
            <span key={s} className="px-3 py-1 rounded-full bg-white/10 border border-white/15 text-neutral-200">
              {s}
            </span>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="py-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-neutral-300/80 font-body">
          <div className="flex items-center gap-1">
            <span>© 2026 Shoe My Feet Foundation. Crafted with</span>
            <HeartIcon size={12} className="fill-[#f97316] text-[#f97316] mx-0.5" />
            <span>in Nigeria.</span>
          </div>
          <div className="flex gap-4">
            <Link href="/" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="/" className="hover:text-white transition-colors">Terms of Use</Link>
            <span className="text-amber-400 font-bold">CAC Registered NGO</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
