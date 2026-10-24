import type { Metadata } from "next";
import ProjectDetailPage from "@/components/programs/ProjectDetailPage";
import { PROJECT_DETAILS } from "@/lib/projectDetails";

const project = PROJECT_DETAILS["kids-shoemaking"];

export const metadata: Metadata = project.metadata;

export default function KidsShoemakingPage() {
  return <ProjectDetailPage project={project} />;
}
