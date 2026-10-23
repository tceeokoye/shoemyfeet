"use client";

import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/home/HeroSection";
import ImpactSection from "@/components/home/ImpactSection";
import OurStoryPreview from "@/components/home/OurStoryPreview";
import WhyShoesMatter from "@/components/home/WhyShoesMatter";
import SolutionSection from "@/components/home/SolutionSection";
import PartnerCTA from "@/components/home/PartnerCTA";
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
      <Navbar />
      <main>
        {/* 1. Image-led introduction */}
        <HeroSection />

        {/* 2. Impact at a glance */}
        <ImpactSection />

        {/* 3. The challenge and why shoes matter */}
        <WhyShoesMatter />

        {/* 4. The solution */}
        <SolutionSection />

        {/* 5. Mission and origin story */}
        <OurStoryPreview />

        {/* 6. Become a partner */}
        <PartnerCTA />

        {/* 7. How we respond */}
        {/* <ProgramsPreview /> */}

        {/* 8. Stories and moments from the field */}
        {/* <GalleryPreview /> */}

        {/* 9. Get involved, give, and stay connected */}
        {/* <VolunteerCTA /> */}
      </main>
      <Footer />
    </>
  );
}
