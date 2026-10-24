import type { Metadata } from "next";
import { notFound } from "next/navigation";
import ProjectDetailPage from "@/components/programs/ProjectDetailPage";
import {
  getProjectDetails,
  PROJECT_DETAILS_BY_SLUG,
} from "@/lib/projectDetails";

export function generateStaticParams() {
  return Object.keys(PROJECT_DETAILS_BY_SLUG).map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectDetails(slug);

  return project?.metadata ?? { title: "Project Not Found | Shoe My Feet Foundation" };
}

export default async function ProjectSlugPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = getProjectDetails(slug);

  if (!project) notFound();

  return <ProjectDetailPage project={project} />;
}
