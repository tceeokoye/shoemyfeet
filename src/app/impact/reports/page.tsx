import type { Metadata } from "next";
import ImpactReports from "@/components/impact/ImpactReports";
import ScrollOverBg from "@/components/ui/scrollOverBg";

export const metadata: Metadata = {
  title: "Reports & Publications | Shoe My Feet Foundation",
  description:
    "Explore Shoe My Feet Foundation project reports, publications, and programme resources.",
};

export default function ImpactReportsPage() {
  return (
    <>
      <ScrollOverBg
        backgroundImage="/images/shoe_distribution.jpg"
        minHeight="min-h-[520px] md:min-h-[600px]"
        className="px-5 py-24 sm:px-8 sm:py-28"
        contentClassName="mx-auto max-w-4xl"
        overlayClassName="bg-[#111827]/65"
        title="Reports & Publications"
        titleTag="h1"
        titleClassName="font-heading text-4xl font-extrabold leading-tight text-white sm:text-5xl md:text-6xl"
        description="Read the reports, programme resources, and stories that document our work with children, schools, and communities."
        descriptionClassName="mx-auto mt-6 max-w-2xl text-base leading-7 text-white/90 sm:text-lg"
        href="#project-reports"
        linkLabel="Browse reports"
        linkStyle="white"
        secondaryHref="#publications"
        secondaryLinkLabel="Explore publications"
        secondaryLinkStyle="outline"
      />

      <ImpactReports />
    </>
  );
}
