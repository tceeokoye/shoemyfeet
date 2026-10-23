"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";

const revealSelector =
  "main > section, main > article, main section article, main section figure";

export default function ScrollReveal() {
  const pathname = usePathname();

  useEffect(() => {
    const targets = document.querySelectorAll<HTMLElement>(revealSelector);
    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    if (reducedMotion || !("IntersectionObserver" in window)) return;

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;
          entry.target.setAttribute("data-scroll-reveal", "visible");
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.08, rootMargin: "0px 0px -40px 0px" },
    );

    for (const target of targets) {
      target.setAttribute("data-scroll-reveal", "pending");
      observer.observe(target);
    }

    return () => observer.disconnect();
  }, [pathname]);

  return null;
}
