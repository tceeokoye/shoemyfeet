import { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AboutHero from "@/components/about/AboutHero";
import OurStory from "@/components/about/OurStory";
import MissionVision from "@/components/about/MissionVision";
import CoreValues from "@/components/about/CoreValues";
import WhyShoesMatterAbout from "@/components/about/WhyShoesMatterAbout";
import ImpactStats from "@/components/about/ImpactStats";
import MeetTeam from "@/components/about/MeetTeam";
import HowWeWork from "@/components/about/HowWeWork";
import PartnersSupporters from "@/components/about/PartnersSupporters";
import Testimonials from "@/components/about/Testimonials";
import AboutCTA from "@/components/about/AboutCTA";

export const metadata: Metadata = {
  title: "About Us | Shoe My Feet Foundation",
  description:
    "Learn about Shoe My Feet Foundation, our story, mission, core values, leadership team, and how we provide school shoes to restore dignity and confidence for children across Nigeria.",
};

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white text-[#1a1a2e] flex flex-col font-sans selection:bg-[#fbbf24] selection:text-royal-blue">
      {/* Global Navbar */}
      <Navbar />

      {/* Main Content Sections */}
      <main className="flex-grow">
        {/* 1. Hero Section */}
        <AboutHero />

        {/* 2. Our Story */}
        <OurStory />

        {/* 3. Mission & Vision */}
        <MissionVision />

        {/* 4. Our Core Values */}
        <CoreValues />

        {/* 5. Why Shoes Matter */}
        <WhyShoesMatterAbout />

        {/* 6. Our Impact (Animated Counters) */}
        <ImpactStats />

        {/* 7. Meet Our Team */}
        <MeetTeam />

        {/* 8. How We Work (4-Step Timeline) */}
        <HowWeWork />

        {/* 9. Partners & Supporters (Continuous Marquee) */}
        <PartnersSupporters />

        {/* 10. Testimonials Carousel */}
        <Testimonials />

        {/* 11. Call to Action */}
        <AboutCTA />
      </main>

      {/* Global Footer */}
      <Footer />
    </div>
  );
}
