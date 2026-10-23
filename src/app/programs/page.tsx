import type { Metadata } from "next";
import Link from "next/link";
import EditorialHero from "@/components/ui/EditorialHero";
import FastImage from "@/components/ui/FastImage";
import ProgramsOverview from "@/components/programs/ProgramsOverview";
import HowProgramsWork from "@/components/programs/HowProgramsWork";
import ProgramSuccessStories from "@/components/programs/ProgramSuccessStories";
import ProgramFAQ from "@/components/programs/ProgramFAQ";
import ProgramsCTA from "@/components/programs/ProgramsCTA";
import { ArrowRightIcon } from "@/components/ui/Icons";

export const metadata: Metadata = {
  title: "Our Programs | Shoe My Feet Foundation",
  description:
    "Explore Shoe My Feet Foundation's core initiatives: School Shoe Distribution, Back-to-School Campaigns, Kids Shoemaking & Skills, Community Outreach, School Partnerships, and Corporate CSR across Nigeria.",
  keywords: [
    "Shoe My Feet Foundation programs",
    "shoe distribution Nigeria",
    "back to school campaign NGO",
    "kids shoemaking training",
    "school partnership charity",
    "corporate CSR Nigeria",
  ],
  openGraph: {
    title: "Our Programs | Shoe My Feet Foundation",
    description:
      "Changing lives, one step at a time. Discover the targeted programs delivering footwear, dignity, and craft skills to children across Nigeria.",
    url: "https://shoemyfeet.org/programs",
    siteName: "Shoe My Feet Foundation",
    type: "website",
  },
};

const programPages = [
  {
    title: "Shoe Distribution Initiative",
    description:
      "Our flagship program identifying vulnerable pupils and fitting them with durable, high-quality school shoes with dignity.",
    href: "/programs/shoe-distribution",
    image: "/images/distribution.jpg",
    alt: "Children receiving fitted school shoes during outreach",
    label: "Core Flagship Program",
  },
  {
    title: "Back-to-School Campaign",
    description:
      "Termly campaigns equipping underserved children with shoes and essentials before school begins, removing resumption barriers.",
    href: "/programs/back-to-school",
    image: "/images/children_walking_school.jpg",
    alt: "Children walking together happily to school",
    label: "Seasonal Initiative",
  },
  {
    title: "Kids Shoemaking & Skills",
    description:
      "Hands-on footwear crafting workshops training 137+ children and youths in shoemaking, tool handling, and entrepreneurship.",
    href: "/programs/kids-shoemaking",
    image: "/images/crafting6.jpeg",
    alt: "Young people learning shoemaking craft at the workshop",
    label: "Empowerment & Craftsmanship",
  },
  {
    title: "Community Outreach",
    description:
      "Grassroots missions in remote villages and urban slums combining shoe donations with foot health, hygiene, and family support.",
    href: "/programs/community-outreach",
    image: "/images/community.jpg",
    alt: "Community gathering for shoe distribution and health education",
    label: "Grassroots Action",
  },
  {
    title: "School Partnership Program",
    description:
      "Direct institutional collaborations with 50+ public schools to identify children in need and track attendance improvements.",
    href: "/programs/school-partnerships",
    image: "/images/gallery5.jpg",
    alt: "School distribution in collaboration with educators",
    label: "Institutional Collaboration",
  },
  {
    title: "Corporate Partnerships & CSR",
    description:
      "Transparent corporate social responsibility programs, employee volunteer drives, matching gifts, and co-branded outreach.",
    href: "/programs/corporate-partnerships",
    image: "/images/volunteers.jpg",
    alt: "Corporate and community volunteers collaborating on outreach",
    label: "Business & CSR",
  },
];

export default function ProgramsPage() {
  return (
    <>
      {/* Editorial Hero */}
      <EditorialHero
        eyebrow="Shoe My Feet Foundation · Programs"
        title={
          <>
            Changing lives, <span className="text-[#142E56]">one step</span> at a time.
          </>
        }
        description="Discover the initiatives through which we restore dignity, protect health, and keep children learning by providing school shoes, vocational skills, and community support across Nigeria."
        image="/images/distribution.jpg"
        imageAlt="Children receiving school shoes at a foundation distribution"
      >
        <Link href="#explore-programs" className="btn-primary">
          Explore Programs
        </Link>
        <Link
          href="/donate"
          className="inline-flex items-center gap-2 border-b border-[#1A3A6B] pb-1 text-sm font-medium text-[#1A3A6B] hover:text-[#142E56] transition-colors"
        >
          Support Our Work <ArrowRightIcon size={16} />
        </Link>
      </EditorialHero>

      {/* Program Grid Section */}
      <section id="explore-programs" className="bg-white py-16 sm:py-24 scroll-mt-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="mb-10 flex flex-wrap items-end justify-between gap-5 sm:mb-14">
            <div>
              <p className="mb-3 text-sm font-semibold uppercase tracking-[0.12em] text-[#1A3A6B]">
                Targeted Initiatives
              </p>
              <h2 className="font-heading text-3xl font-semibold text-[#111827] sm:text-4xl">
                Our Core Programs
              </h2>
            </div>
            <p className="max-w-md text-base leading-7 text-[#565650]">
              Select any program below to explore how it operates, its verified impact, and how you can get involved.
            </p>
          </div>

          <div className="grid gap-x-8 gap-y-12 md:grid-cols-2 lg:grid-cols-3">
            {programPages.map((program) => (
              <Link key={program.href} href={program.href} className="group block">
                <div className="relative mb-5 aspect-[4/3] overflow-hidden bg-[#F3F4F6] rounded-xl">
                  <FastImage
                    src={program.image}
                    alt={program.alt}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                </div>
                <p className="mb-2 text-xs font-semibold uppercase tracking-[0.12em] text-[#1A3A6B]">
                  {program.label}
                </p>
                <h3 className="font-heading text-2xl font-medium text-[#111827] group-hover:text-[#1A3A6B] transition-colors">
                  {program.title}
                </h3>
                <p className="mt-2 text-base leading-7 text-[#565650]">
                  {program.description}
                </p>
                <span className="mt-4 inline-flex items-center gap-1.5 border-b border-[#1A3A6B] pb-1 text-sm font-medium text-[#1A3A6B] group-hover:translate-x-0.5 transition-transform">
                  Explore program <ArrowRightIcon size={14} />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Pillars / Strategic Approach */}
      <ProgramsOverview />

      {/* How Programs Work Workflow */}
      <HowProgramsWork />

      {/* Success Stories */}
      <ProgramSuccessStories />

      {/* FAQs */}
      <ProgramFAQ />

      {/* Final Call to Action */}
      <ProgramsCTA />
    </>
  );
}
