import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ImpactHero from "@/components/impact/ImpactHero";
import ImpactNumbers from "@/components/impact/ImpactNumbers";
import ImpactTimeline from "@/components/impact/ImpactTimeline";
import ImpactStories from "@/components/impact/ImpactStories";
import ImpactMap from "@/components/impact/ImpactMap";
import ImpactGallery from "@/components/impact/ImpactGallery";
import ImpactTestimonials from "@/components/impact/ImpactTestimonials";
import ImpactOutcomes from "@/components/impact/ImpactOutcomes";
import ImpactReports from "@/components/impact/ImpactReports";
import ImpactGoals from "@/components/impact/ImpactGoals";
import ImpactCTA from "@/components/impact/ImpactCTA";

export const metadata = {
  title: "Our Impact | Shoe My Feet Foundation",
  description:
    "Discover the measurable difference Shoe My Feet Foundation has made in the lives of children, families, schools, and communities across Nigeria. Explore impact stories, statistics, gallery, and more.",
};

export default function ImpactPage() {
  return (
    <>
      <Navbar />
      <main>
        <ImpactHero />
        <ImpactNumbers />
        <ImpactTimeline />
        <ImpactStories />
        <ImpactMap />
        <ImpactGallery />
        <ImpactTestimonials />
        <ImpactOutcomes />
        <ImpactReports />
        <ImpactGoals />
        <ImpactCTA />
      </main>
      <Footer />
    </>
  );
}
