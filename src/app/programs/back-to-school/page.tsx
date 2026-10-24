import type { Metadata } from "next";
import ProjectDetailPage from "@/components/programs/ProjectDetailPage";
import { PROJECT_DETAILS } from "@/lib/projectDetails";

const project = PROJECT_DETAILS["back-to-school"];

export const metadata: Metadata = project.metadata;

export default function BackToSchoolPage() {
  return <ProjectDetailPage project={project} />;
}
