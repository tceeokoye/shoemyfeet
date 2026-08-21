"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { HeartIcon, MenuIcon, CloseIcon } from "@/components/ui/Icons";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Programs", href: "/programs" },
  { label: "Impact", href: "/impact" },
  { label: "Gallery", href: "/gallery" },
  { label: "Contact", href: "/contact" },
];

/* ── Modern White & Black Foot Logo Design ── */
function LogoMark({ scrolled = false }: { scrolled?: boolean }) {
  return (
    <Link href="/" className="flex items-center gap-3 group shrink-0">
      {/* Black & White Foot Icon Badge */}
      <div className="w-11 h-11 rounded-2xl bg-black flex items-center justify-center shadow-lg group-hover:scale-105 transition-transform duration-300 border-2 border-white/20">
        <svg viewBox="0 0 44 44" className="w-7 h-7 fill-white drop-shadow-md">
          {/* Sole & Footprint silhouette */}
          <path d="M10 28c0 0 3-8 11-8s11 3.5 15 3.5 6-1.5 8-1.5c1.5 0 2.5 1 2.5 3v2H10v-5z" />
          <path d="M9 30h28v3c0 2-1.5 3.5-3.5 3.5H12.5C10.5 36.5 9 35 9 33v-3z" fill="#f97316" />
          {/* Toes details */}
          <circle cx="12" cy="17" r="2.5" />
          <circle cx="18" cy="15" r="2.8" />
          <circle cx="24" cy="15" r="2.8" />
          <circle cx="30" cy="17" r="2.5" />
        </svg>
      </div>

      {/* High-Contrast Wordmark - Always ultra readable */}
      <div className="leading-none">
        <span className="block font-heading text-xl font-extrabold tracking-tight text-white group-hover:text-[#f97316] transition-colors drop-shadow-md">
          Shoe My Feet
        </span>
        <span className="block font-heading text-[11px] font-bold tracking-widest uppercase text-[#f97316] mt-0.5">
          Foundation
        </span>
      </div>
    </Link>
  );
}

export default function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setIsOpen(false), [pathname]);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <>
      {/* ── Modern Floating Header ── */}
      <div className="fixed top-0 left-0 right-0 z-50 flex justify-center pt-3 sm:pt-4 px-3 sm:px-4 pointer-events-none">
        <motion.nav
          className={`pointer-events-auto w-full max-w-6xl rounded-2xl sm:rounded-3xl transition-all duration-500 ${
            scrolled
              ? "bg-[#0b1933]/95 backdrop-blur-2xl shadow-2xl shadow-black/40 border border-white/15"
              : "bg-[#0f2347]/90 backdrop-blur-xl border border-white/10 shadow-xl shadow-black/25"
          }`}
          initial={{ y: -80, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="flex items-center justify-between px-4 sm:px-6 py-3">
            {/* Logo */}
            <LogoMark scrolled={scrolled} />

            {/* Desktop Nav Links */}
            <div className="hidden lg:flex items-center gap-1">
              {navLinks.map((link) => {
                const active = isActive(link.href);
                return (
                  <Link
                    key={link.label}
                    href={link.href}
                    className={`relative px-4 py-2 text-base font-bold rounded-xl transition-all duration-200 font-heading ${
                      active
                        ? "text-[#f97316] bg-white/10"
                        : "text-white/90 hover:text-white hover:bg-white/10"
                    }`}
                  >
                    {link.label}
                    {active && (
                      <motion.span
                        layoutId="nav-active-pill"
                        className="absolute bottom-1 left-3 right-3 h-[3px] rounded-full bg-[#f97316]"
                        transition={{ type: "spring", stiffness: 380, damping: 30 }}
                      />
                    )}
                  </Link>
                );
              })}
            </div>

            {/* Desktop CTA Donate */}
            <div className="hidden lg:flex items-center gap-3">
              <Link
                href="/volunteer"
                className="text-sm font-extrabold text-white/80 hover:text-white transition-colors font-heading px-3 py-2"
              >
                Volunteer
              </Link>
              <Link
                href="/donate"
                className="btn-orange text-sm font-extrabold py-2.5 px-5 shadow-lg shadow-orange-600/30"
              >
                <HeartIcon size={16} className="fill-white text-white" />
                <span>Donate Now</span>
              </Link>
            </div>

            {/* Mobile Toggle */}
            <button
              className="lg:hidden p-2.5 rounded-xl bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer border border-white/15"
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle menu"
            >
              {isOpen ? <CloseIcon size={22} /> : <MenuIcon size={22} />}
            </button>
          </div>
        </motion.nav>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed inset-0 z-40 bg-[#0b1933] text-white flex flex-col"
            initial={{ opacity: 0, y: "-100%" }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: "-100%" }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="flex items-center justify-between px-6 pt-6 pb-4 border-b border-white/10">
              <LogoMark />
              <button
                className="p-2.5 rounded-xl bg-white/10 text-white"
                onClick={() => setIsOpen(false)}
              >
                <CloseIcon size={22} />
              </button>
            </div>

            <nav className="flex flex-col px-6 py-8 gap-2 flex-1 overflow-y-auto">
              {navLinks.map((link, i) => {
                const active = isActive(link.href);
                return (
                  <motion.div
                    key={link.label}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.05 }}
                  >
                    <Link
                      href={link.href}
                      onClick={() => setIsOpen(false)}
                      className={`flex items-center justify-between px-5 py-4 rounded-2xl text-xl font-bold font-heading transition-all ${
                        active
                          ? "bg-[#f97316] text-white shadow-lg"
                          : "text-white/80 hover:text-white hover:bg-white/10"
                      }`}
                    >
                      <span>{link.label}</span>
                      {active && <span className="w-2.5 h-2.5 rounded-full bg-white animate-pulse" />}
                    </Link>
                  </motion.div>
                );
              })}
              <div className="pt-4 border-t border-white/10 mt-2">
                <Link
                  href="/volunteer"
                  onClick={() => setIsOpen(false)}
                  className="flex items-center justify-between px-5 py-4 rounded-2xl text-xl font-bold font-heading text-white/80 hover:text-white hover:bg-white/10"
                >
                  Volunteer
                </Link>
              </div>
            </nav>

            <div className="p-6 border-t border-white/10 bg-[#0f2347]">
              <Link
                href="/donate"
                onClick={() => setIsOpen(false)}
                className="w-full btn-orange justify-center py-4 text-lg shadow-xl"
              >
                <HeartIcon size={20} className="fill-white" />
                <span>Donate Now</span>
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
