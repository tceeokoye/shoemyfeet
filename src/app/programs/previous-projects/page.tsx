import type { Metadata } from "next";
import { ProjectsPageContent } from "../page";

export const metadata: Metadata = {
  title: "Previous Projects | Shoe My Feet Foundation",
  description:
    "Explore Shoe My Feet Foundation's projects supporting children, schools, and communities across Nigeria.",
};

export default function PreviousProjectsPage() {
  return (
    <ProjectsPageContent
      heading="Previous Projects"
      previousProjectsHref="/projects"
      previousProjectsLabel="Back to Our Projects"
      showPartners={false}
    />
  );
}
