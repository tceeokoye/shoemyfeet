import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ProgramsHero from "@/components/programs/ProgramsHero";
import ProgramsOverview from "@/components/programs/ProgramsOverview";
import FeaturedPrograms from "@/components/programs/FeaturedPrograms";
import ProgramImpact from "@/components/programs/ProgramImpact";
import HowProgramsWork from "@/components/programs/HowProgramsWork";
import ProgramSuccessStories from "@/components/programs/ProgramSuccessStories";
import ProgramGallery from "@/components/programs/ProgramGallery";
import GetInvolved from "@/components/programs/GetInvolved";
import ProgramFAQ from "@/components/programs/ProgramFAQ";
import ProgramsCTA from "@/components/programs/ProgramsCTA";

export const metadata = {
  title: "Our Programs | Shoe My Feet Foundation",
  description:
    "Explore Shoe My Feet Foundation's programs: Shoe Distribution, Back-to-School Campaigns, Community Outreach, School Partnerships, Volunteer Programs, and Corporate Partnerships across Nigeria.",
};

export default function ProgramsPage() {
  return (
    <>
      <Navbar />
      <main>
        <ProgramsHero />
        <ProgramsOverview />
        <FeaturedPrograms />
        <ProgramImpact />
        <HowProgramsWork />
        <ProgramSuccessStories />
        <ProgramGallery />
        <GetInvolved />
        <ProgramFAQ />
        <ProgramsCTA />
      </main>
      <Footer />
    </>
  );
}
