import type { Metadata } from "next";
import Link from "next/link";
import ProgramPageIntro from "@/components/programs/ProgramPageIntro";
import FastImage from "@/components/ui/FastImage";
import { ArrowRightIcon } from "@/components/ui/Icons";

export const metadata: Metadata = {
  title: "Previous Projects | Shoe My Feet Foundation",
  description:
    "Explore the foundation's published distribution record, community stories, and outreach photo archive.",
};

const archiveItems = [
  {
    type: "Published report",
    title: "School distribution register",
    description:
      "Review the 2022–2024 school visit record, including the dates and pair counts documented in the foundation's distribution report.",
    href: "/about/report",
    linkLabel: "Read the distribution report",
    image: "/images/shoe_distribution.jpg",
    imageAlt: "School shoes prepared for distribution",
  },
  {
    type: "Community stories",
    title: "People behind the progress",
    description:
      "Read stories and reflections from the children, families, and communities at the heart of the foundation's work.",
    href: "/impact/stories",
    linkLabel: "Explore stories",
    image: "/images/happy-kids.jpeg",
    imageAlt: "Children smiling together at a community event",
  },
  {
    type: "Photo archive",
    title: "Outreach in pictures",
    description:
      "Browse photographs from foundation events and see how school and community visits come together.",
    href: "/gallery/events",
    linkLabel: "Browse event photos",
    image: "/images/IMG_9272-01.jpeg",
    imageAlt: "A moment from a Shoe My Feet Foundation event",
  },
];

export default function PreviousProjectsPage() {
  return (
    <>
      <ProgramPageIntro
        eyebrow="Our Projects · Archive"
        title="A record of the work, people, and progress."
        description="Explore published outreach records, community stories, and photographs from the foundation's work with schools and families."
        image="/images/shoe_distribution.jpg"
        imageAlt="Shoes prepared for a school distribution"
      >
        <Link href="/programs" className="btn-primary">
          Explore our programs
        </Link>
        <Link
          href="/impact/reports"
          className="inline-flex items-center gap-2 border-b border-[#1A3A6B] pb-1 text-sm font-medium text-[#1A3A6B] transition-colors hover:text-[#142E56]"
        >
          Reports and publications <ArrowRightIcon size={16} />
        </Link>
      </ProgramPageIntro>

      <section className="bg-white py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="mb-10 max-w-2xl sm:mb-14">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.12em] text-[#1A3A6B]">
              From the archive
            </p>
            <h2 className="font-heading text-3xl font-medium text-[#111827] sm:text-4xl">
              Explore the work through its records
            </h2>
            <p className="mt-4 text-base leading-7 text-[#565650]">
              Start with the published distribution report, then explore the stories and event photographs that add context to the work.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            {archiveItems.map((item) => (
              <article key={item.href} className="flex flex-col">
                <Link href={item.href} className="group">
                  <div className="relative mb-5 aspect-[4/3] overflow-hidden bg-[#F3F4F6]">
                    <FastImage
                      src={item.image}
                      alt={item.imageAlt}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
                  </div>
                  <p className="mb-2 text-xs font-semibold uppercase tracking-[0.12em] text-[#1A3A6B]">
                    {item.type}
                  </p>
                  <h3 className="font-heading text-2xl font-medium text-[#111827] transition-colors group-hover:text-[#1A3A6B]">
                    {item.title}
                  </h3>
                </Link>
                <p className="mt-3 flex-1 text-base leading-7 text-[#565650]">
                  {item.description}
                </p>
                <Link
                  href={item.href}
                  className="mt-4 inline-flex w-fit items-center gap-2 border-b border-[#1A3A6B] pb-1 text-sm font-medium text-[#1A3A6B] transition-colors hover:text-[#142E56]"
                >
                  {item.linkLabel} <ArrowRightIcon size={15} />
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
