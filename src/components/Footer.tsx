"use client";

import Link from "next/link";
import { Bird, Camera, Play } from "lucide-react";
import type { FormEvent } from "react";

const siteMapLinks = [
  { label: "Home", href: "/" },
  { label: "Our Work", href: "/projects" },
  { label: "Our Projects", href: "/gallery" },
  { label: "Our Impact", href: "/impact" },
  { label: "Connect With Us", href: "/contact" },
];

const policyLinks = [
  { label: "Terms of Use", href: "/contact?subject=Terms%20of%20Use" },
  { label: "Privacy Policy", href: "/contact?subject=Privacy%20Policy" },
];

const socialLinks = [
  { label: "Facebook", href: "https://facebook.com", mark: "f" },
  { label: "Instagram", href: "https://instagram.com", icon: Camera },
  { label: "YouTube", href: "https://youtube.com", icon: Play },
  { label: "Twitter", href: "https://twitter.com", icon: Bird },
  { label: "LinkedIn", href: "https://linkedin.com", mark: "in" },
];

function handlePartnerSubmit(event: FormEvent<HTMLFormElement>) {
  event.preventDefault();
  const formData = new FormData(event.currentTarget);
  const name = String(formData.get("name") ?? "").trim();
  const email = String(formData.get("email") ?? "").trim();
  const subject = String(formData.get("subject") ?? "").trim() || "Partnership inquiry";
  const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}`);

  window.location.href = `mailto:hello@shoemyfeet.org?subject=${encodeURIComponent(subject)}&body=${body}`;
}

export default function Footer({ compactTop = false }: { compactTop?: boolean }) {
  return (
    <footer className="text-[#333]">
      <div
        className={`bg-[#FFFFFF] px-6 pb-12 sm:px-10 sm:pb-14 lg:px-8 lg:pb-12 ${
          compactTop ? "pt-8 sm:pt-10 lg:pt-12" : "pt-12 sm:pt-14 lg:pt-12"
        }`}
        style={{
          backgroundImage:
            "repeating-linear-gradient(0deg, transparent 0, rgba(26, 58, 107, 0.018) 1px, transparent 3px), repeating-linear-gradient(90deg, transparent 0, rgba(26, 58, 107, 0.014) 1px, transparent 3px)",
        }}
      >
        <div className="mx-auto grid max-w-6xl gap-x-10 gap-y-12 md:grid-cols-2 lg:grid-cols-[1fr_0.9fr_1.8fr_2.8fr] lg:gap-x-12">
          <section aria-labelledby="footer-site-map">
            <h2 id="footer-site-map" className="mb-5 text-base font-bold text-[#1A3A6B]">
              Site Map
            </h2>
            <ul className="space-y-4">
              {siteMapLinks.map(({ label, href }) => (
                <li key={label}>
                  <Link
                    href={href}
                    className="text-sm text-[#555] transition-colors hover:text-[#1A3A6B]"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </section>

          <section aria-labelledby="footer-policies">
            <h2 id="footer-policies" className="mb-5 text-base font-bold text-[#1A3A6B]">
              Policies
            </h2>
            <ul className="space-y-4">
              {policyLinks.map(({ label, href }) => (
                <li key={label}>
                  <Link
                    href={href}
                    className="text-sm text-[#555] transition-colors hover:text-[#1A3A6B]"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </section>

          <section aria-labelledby="footer-contact">
            <h2 id="footer-contact" className="mb-5 text-base font-bold text-[#1A3A6B]">
              Contact Us
            </h2>
            <a
              href="mailto:hello@shoemyfeet.org"
              className="text-sm text-[#555] transition-colors hover:text-[#1A3A6B]"
            >
              hello@shoemyfeet.org
            </a>
            <h3 className="mb-4 mt-10 text-xl font-bold text-[#1A3A6B]">Follow us</h3>
            <ul className="flex items-center gap-6">
              {socialLinks.map(({ label, href, icon: Icon, mark }) => (
                <li key={label}>
                  <a
                    href={href}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={label}
                    className="flex h-5 w-5 items-center justify-center text-[#1A3A6B] transition-transform hover:scale-110"
                  >
                    {Icon ? (
                      <Icon aria-hidden="true" size={14} fill={label === "YouTube" ? "currentColor" : "none"} />
                    ) : (
                      <span className="text-sm font-extrabold leading-none">{mark}</span>
                    )}
                  </a>
                </li>
              ))}
            </ul>
          </section>

          <section aria-labelledby="footer-partner">
            <h2
              id="footer-partner"
              className="mb-5 text-base font-bold uppercase text-[#1A3A6B]"
            >
              Become a partner of change
            </h2>
            <form className="space-y-2.5" onSubmit={handlePartnerSubmit}>
              <label className="sr-only" htmlFor="footer-name">
                Name
              </label>
              <input
                id="footer-name"
                name="name"
                type="text"
                placeholder="Name*"
                autoComplete="name"
                required
                className="h-12 w-full rounded-[10px] border border-[#d8d8d4] bg-transparent px-4 font-body text-sm text-[#333] outline-none transition placeholder:text-[#aaa] focus:border-[#1A3A6B] focus:ring-1 focus:ring-[#1A3A6B]"
              />
              <label className="sr-only" htmlFor="footer-email">
                Email
              </label>
              <input
                id="footer-email"
                name="email"
                type="email"
                placeholder="Email*"
                autoComplete="email"
                required
                className="h-12 w-full rounded-[10px] border border-[#d8d8d4] bg-transparent px-4 font-body text-sm text-[#333] outline-none transition placeholder:text-[#aaa] focus:border-[#1A3A6B] focus:ring-1 focus:ring-[#1A3A6B]"
              />
              <label className="sr-only" htmlFor="footer-subject">
                Subject
              </label>
              <input
                id="footer-subject"
                name="subject"
                type="text"
                placeholder="Subject"
                className="h-12 w-full rounded-[10px] border border-[#d8d8d4] bg-transparent px-4 font-body text-sm text-[#333] outline-none transition placeholder:text-[#aaa] focus:border-[#1A3A6B] focus:ring-1 focus:ring-[#1A3A6B]"
              />
              <button
                type="submit"
                className="mt-1 h-10 rounded-[10px] bg-[#F97316] px-5 font-body text-sm font-semibold text-white transition-colors hover:bg-[#EA580C] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1A3A6B]"
              >
                Send
              </button>
              <p className="sr-only">Submitting opens your email app with a draft addressed to our team.</p>
            </form>
          </section>
        </div>
      </div>

      <div className="bg-white px-4 py-3 text-center text-sm font-semibold text-[#1A3A6B]">
        © Shoe My Feet Foundation 2026
      </div>
    </footer>
  );
}
