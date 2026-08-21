"use client";

import { useEffect } from "react";
import PageLoader from "@/components/PageLoader";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/home/HeroSection";
import ImpactSection from "@/components/home/ImpactSection";
import OurStoryPreview from "@/components/home/OurStoryPreview";
import WhyShoesMatter from "@/components/home/WhyShoesMatter";
import ProgramsPreview from "@/components/home/ProgramsPreview";
import GalleryPreview from "@/components/home/GalleryPreview";
import VolunteerCTA from "@/components/home/VolunteerCTA";
import Footer from "@/components/Footer";

export default function Home() {
  // Smooth scroll with Lenis
  useEffect(() => {
    let lenis: { raf: (t: number) => void; destroy: () => void } | null = null;
    let rafId: number;

    async function initLenis() {
      try {
        const { default: Lenis } = await import("lenis");
        lenis = new Lenis({
          duration: 1.2,
          easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
          orientation: "vertical",
          smoothWheel: true,
          wheelMultiplier: 1,
          touchMultiplier: 2,
        });

        function raf(time: number) {
          lenis?.raf(time);
          rafId = requestAnimationFrame(raf);
        }
        rafId = requestAnimationFrame(raf);
      } catch (e) {
        console.warn("Lenis smooth scroll could not be initialized", e);
      }
    }

    initLenis();
    return () => {
      cancelAnimationFrame(rafId);
      lenis?.destroy();
    };
  }, []);

  return (
    <>
      <PageLoader />
      <Navbar />
      <main>
        {/* 1. Hero — full-screen editorial with slideshow */}
        <HeroSection />

        {/* 2. Impact counter strip */}
        <ImpactSection />

        {/* 3. Our Story — founder + milestones */}
        <OurStoryPreview />

        {/* 4. Why Shoes Matter — 4 benefit cards */}
        <WhyShoesMatter />

        {/* 5. Programs — 3 program cards */}
        <ProgramsPreview />

        {/* 6. Gallery + testimonial */}
        <GalleryPreview />

        {/* 7. Volunteer CTA + Donate + Newsletter (unified) */}
        <VolunteerCTA />
      </main>
      <Footer />
    </>
  );
}
