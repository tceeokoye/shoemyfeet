import Link from "next/link";
import ProjectDetailHero from "@/components/programs/ProjectDetailHero";
import ProjectImageCarousel from "@/components/programs/ProjectImageCarousel";
import ProjectStats from "@/components/programs/ProjectStats";
import { ArrowRightIcon } from "@/components/ui/Icons";
import type { ProjectDetails } from "@/lib/projectDetails";

export default function ProjectDetailPage({ project }: { project: ProjectDetails }) {
  return (
    <>
      <ProjectDetailHero
        title={
          <>
            {project.title}{" "}
            <span className="text-[#F97316]">{project.titleAccent}</span>
          </>
        }
        projectDetails={project.projectDetails}
        image={project.heroImage}
        imageAlt={project.heroImageAlt}
      />

      <ProjectStats stats={project.stats} />

      <section className="bg-white px-5 py-12 sm:px-8 sm:py-16">
        <div className="mx-auto max-w-3xl">
          <div className="space-y-5 text-sm leading-6 text-[#565650] sm:text-base sm:leading-7">
            {project.description.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>

          <div className="mt-8 text-center">
            <Link href="/projects" className="btn-primary rounded-xl">
              Back to Projects
              <ArrowRightIcon size={16} />
            </Link>
          </div>
        </div>
      </section>

      <ProjectImageCarousel photos={project.photos} />
    </>
  );
}
