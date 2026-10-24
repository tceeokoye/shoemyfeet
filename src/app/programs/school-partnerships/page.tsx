import type { Metadata } from "next";
import ProjectDetailPage from "@/components/programs/ProjectDetailPage";
import { PROJECT_DETAILS } from "@/lib/projectDetails";

const project = PROJECT_DETAILS["school-partnerships"];

export const metadata: Metadata = project.metadata;

export default function SchoolPartnershipsPage() {
  return <ProjectDetailPage project={project} />;
}
