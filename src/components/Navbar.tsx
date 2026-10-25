"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";

import { MenuIcon, CloseIcon } from "@/components/ui/Icons";
import Image from "@/components/ui/RealImage";
import BubblingHeart from "@/components/ui/BubblingHeart";

const impactLinks = [
  { label: "Our Impact", href: "/impact" },
  { label: "Our Reach", href: "/impact#impact-reach" },
  { label: "Blog & News", href: "/blog" },
];

const aboutLinks = [
  { label: "Need & Solution", href: "/about/how-we-work" },
  { label: "Our Tools", href: "/about/tools" },
  { label: "Reports and Publications", href: "/impact/reports" },
];

const projectsLinks = [
  { label: "Projects", href: "/projects" },
  { label: "Previous Projects", href: "/projects/previous-projects" },
  { label: "Our Partners", href: "/projects#partners" },
];

const connectLinks = [
  { label: "About Us", href: "/about" },
  { label: "Our Team", href: "/about#team" },
  { label: "Careers", href: "/about#partner-with-us" },
];

const desktopDropdowns = [
  { id: "work", label: "Our Work", href: "/about/how-we-work", links: aboutLinks },
  { id: "projects", label: "Our Projects", href: "/projects", links: projectsLinks },
  { id: "impact", label: "Our Impact", href: "/impact", links: impactLinks },
  { id: "connect", label: "Connect with Us", href: "/contact", links: connectLinks },
];

export default function Navbar({
  variant = "floating",
}: {
  variant?: "floating" | "flat";
}) {
  const pathname = usePathname();
  const isFlat = variant === "flat";
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const isActive = (href: string) => {
    const path = href.split("#")[0];
    return path === "/" ? pathname === "/" : pathname.startsWith(path);
  };

  return (
    <>
      {/* ── Modern Floating Header ── */}
      <div
        className={`fixed top-0 left-0 right-0 z-40 flex justify-center pointer-events-none ${
          isFlat ? "" : "pt-3 px-3 sm:pt-4 sm:px-4"
        }`}
      >
        <motion.nav
          className={`pointer-events-auto w-full transition-all duration-500 ${
            isFlat
              ? "max-w-none border-x-0 border-t-0 rounded-none bg-[#FFFFFF] border-b border-black/10 shadow-none"
              : `max-w-7xl rounded-2xl ${
                  scrolled
                    ? "bg-[#FFFFFF] shadow-lg shadow-black/10 border border-black/10"
                    : "bg-[#FFFFFF] border border-black/10 shadow-lg shadow-black/10"
                }`
          }`}
          initial={{ y: -80, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          <div
            className={`flex items-center justify-between px-4 sm:px-6 ${
              isFlat ? "py-2" : "py-3"
            }`}
          >
            <Link
              href="/"
              aria-label="Shoe My Feet Foundation home"
              className="shrink-0 rounded focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#1A3A6B]"
            >
              <Image
                src="/shoe-my-fit-logo.png"
                alt=""
                height={48}
                width={48}
                priority
                className={`w-8 object-contain ${
                  isFlat ? "h-8 md:h-10 md:w-10" : "h-8 md:h-12 md:w-12"
                }`}
              />
            </Link>

            {/* Desktop Nav Links */}
            <div className="hidden flex-1 items-center justify-evenly gap-1 mx-auto max-w-[760px] lg:flex">
              {desktopDropdowns.map((dropdown) => {
                const isDropdownOpen = activeDropdown === dropdown.id;

                return (
                  <div
                    key={dropdown.id}
                    className="relative"
                    onMouseEnter={() => setActiveDropdown(dropdown.id)}
                    onMouseLeave={(event) => {
                      if (!event.currentTarget.contains(document.activeElement)) {
                        setActiveDropdown(null);
                      }
                    }}
                    onBlur={(event) => {
                      if (
                        !(event.relatedTarget instanceof Node) ||
                        !event.currentTarget.contains(event.relatedTarget)
                      ) {
                        setActiveDropdown(null);
                      }
                    }}
                  >
                    <button
                      type="button"
                      aria-expanded={isDropdownOpen}
                      aria-controls={
                        isDropdownOpen
                          ? `nav-dropdown-${dropdown.id}`
                          : undefined
                      }
                      onClick={() => setActiveDropdown(dropdown.id)}
                      onFocus={() => setActiveDropdown(dropdown.id)}
                      className={`flex cursor-pointer items-center gap-2 rounded-xl px-4 py-2 text-base font-semibold font-heading transition-colors ${
                        dropdown.links.some((link) => isActive(link.href))
                          ? "text-[#1A3A6B]"
                          : "text-[#111827] hover:text-[#1A3A6B]"
                      }`}
                    >
                      {dropdown.label}
                      <span
                        aria-hidden="true"
                        className={`mt-[-3px] size-1.5 rotate-45 border-b border-r border-current transition-transform ${
                          isDropdownOpen ? "mt-1 rotate-[225deg]" : ""
                        }`}
                      />
                    </button>
                    <AnimatePresence>
                      {isDropdownOpen && (
                        <motion.div
                          id={`nav-dropdown-${dropdown.id}`}
                          className="absolute left-0 top-full z-50 w-max min-w-56 pt-3"
                          initial={{ opacity: 0, y: 8, scale: 0.98 }}
                          animate={{ opacity: 1, y: 0, scale: 1 }}
                          exit={{ opacity: 0, y: 6, scale: 0.98 }}
                          transition={{ duration: 0.18, ease: [0.16, 1, 0.3, 1] }}
                        >
                          <div className="overflow-hidden rounded-xl border border-black/10 bg-[#FFFFFF] py-2 shadow-xl shadow-black/10">
                            {dropdown.links.map((link) => (
                              <Link
                                key={link.href}
                                href={link.href}
                                onClick={() => setActiveDropdown(null)}
                                className={`block px-4 py-2.5 text-sm font-semibold transition-colors ${
                                  pathname === link.href
                                    ? "bg-[#F3F4F6] text-[#1A3A6B]"
                                    : "text-[#343434] hover:bg-black/5 hover:text-[#1A3A6B]"
                                }`}
                              >
                                {link.label}
                              </Link>
                            ))}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })}
            </div>

            {/* Desktop CTA Donate */}
            <div className="hidden lg:flex items-center">
              <Link
                href="/donate"
                onClick={() => setActiveDropdown(null)}
                className="donate-button-pulse donate-button-pulse--horizontal btn-primary text-sm font-semibold py-2.5 px-5 shadow-lg shadow-[#1A3A6B]/20"
              >
                <span>Donate Now</span>
                <BubblingHeart size={17} className="text-white"/>
              </Link>
            </div>

            {/* Mobile Toggle */}
            <button
              className="lg:hidden  text-[#111827] transition-colors cursor-pointer"
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle menu"
            >
              {isOpen ? <CloseIcon size={32} /> : <MenuIcon size={32} />}
            </button>
          </div>
        </motion.nav>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed inset-0 z-40 bg-[#FFFFFF] text-[#111827] flex flex-col"
            initial={{ opacity: 0, y: "-100%" }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: "-100%" }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="flex items-center justify-between px-6 pt-6 pb-4 border-b border-black/10">
              <Link
                href="/"
                aria-label="Shoe My Feet Foundation home"
                onClick={() => setIsOpen(false)}
                className="rounded focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#1A3A6B]"
              >
                <Image
                  src="/shoe-my-fit-logo.png"
                  alt=""
                  height={48}
                  width={48}
                  className="object-contain"
                />
              </Link>
              <button
                aria-label="Close menu"
                className="p-2.5 rounded-xl bg-black/5 text-[#111827]"
                onClick={() => setIsOpen(false)}
              >
                <CloseIcon size={22} />
              </button>
            </div>

            <nav className="flex flex-col px-6 py-8 gap-2 flex-1 overflow-y-auto">
              {desktopDropdowns.map((dropdown) => (
                <details key={dropdown.id} className="group">
                  <summary className="flex cursor-pointer list-none items-center justify-between px-5 py-4 text-xl font-semibold font-heading text-[#343434] hover:bg-black/5">
                    {dropdown.label}
                    <span
                      aria-hidden="true"
                      className="mr-1 size-2 rotate-45 border-b-2 border-r-2 border-current transition-transform group-open:rotate-[225deg]"
                    />
                  </summary>
                  <div className="ml-4 border-l border-black/10 py-1 pl-3">
                    {dropdown.links.map((link) => (
                      <Link
                        key={link.href}
                        href={link.href}
                        onClick={() => setIsOpen(false)}
                        className={`block rounded-xl px-4 py-3 font-semibold transition-colors ${
                          isActive(link.href)
                            ? "text-[#1A3A6B]"
                            : "text-[#555] hover:text-[#1A3A6B]"
                        }`}
                      >
                        {link.label}
                      </Link>
                    ))}
                  </div>
                </details>
              ))}
            </nav>

            <div className="p-6 border-t rounded-sm border-black/10 bg-[#FFFFFF]">
              <Link
                href="/donate"
                onClick={() => setIsOpen(false)}
                className="donate-button-pulse donate-button-pulse--horizontal w-full btn-primary justify-center py-4 text-lg shadow-xl"
              >
                <span>Donate Now</span>
                <BubblingHeart size={17} className="text-white"  />
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
