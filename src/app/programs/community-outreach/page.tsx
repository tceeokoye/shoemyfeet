import type { Metadata } from "next";
import ProjectDetailPage from "@/components/programs/ProjectDetailPage";
import { PROJECT_DETAILS } from "@/lib/projectDetails";

const project = PROJECT_DETAILS["community-outreach"];

export const metadata: Metadata = project.metadata;

export default function CommunityOutreachPage() {
  return <ProjectDetailPage project={project} />;
}
