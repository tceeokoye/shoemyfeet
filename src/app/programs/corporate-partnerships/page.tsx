import type { Metadata } from "next";
import ProjectDetailPage from "@/components/programs/ProjectDetailPage";
import { PROJECT_DETAILS } from "@/lib/projectDetails";

const project = PROJECT_DETAILS["corporate-partnerships"];

export const metadata: Metadata = project.metadata;

export default function CorporatePartnershipsPage() {
  return <ProjectDetailPage project={project} />;
}
