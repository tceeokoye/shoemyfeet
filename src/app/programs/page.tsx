import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import ProjectShowcasePanel from "@/components/programs/ProjectShowcasePanel";
import TitleSplashBackground from "@/components/ui/TitleSplashBackground";
import { ArrowRightIcon } from "@/components/ui/Icons";

export const metadata: Metadata = {
  title: "Our Projects | Shoe My Feet Foundation",
  description:
    "Explore Shoe My Feet Foundation's core initiatives: School Shoe Distribution, Back-to-School Campaigns, Kids Shoemaking & Skills, Community Outreach, School Partnerships, and Corporate CSR across Nigeria.",
  keywords: [
    "Shoe My Feet Foundation projects",
    "shoe distribution Nigeria",
    "back to school campaign NGO",
    "kids shoemaking training",
    "school partnership charity",
    "corporate CSR Nigeria",
  ],
  openGraph: {
    title: "Our Projects | Shoe My Feet Foundation",
    description:
      "Explore Shoe My Feet Foundation projects supporting children, schools, and communities across Nigeria.",
    url: "https://shoemyfeet.org/projects",
    siteName: "Shoe My Feet Foundation",
    type: "website",
  },
};

const programPages = [
  {
    title: "Shoe Distribution Initiative",
    description:
      "Providing durable school shoes to children so they can learn, play, and move with comfort and confidence.",
    href: "/projects/shoe-distribution",
    image: "/images/shoe_distribution.jpg",
    alt: "Children receiving fitted school shoes during outreach",
  },
  {
    title: "Back-to-School Campaign",
    description:
      "Helping children begin each school term prepared with footwear and the essentials they need to learn.",
    href: "/projects/back-to-school",
    image: "/images/everychild.jpg",
    alt: "Schoolchildren standing together at a school outreach event",
  },
  {
    title: "Kids Shoemaking & Skills",
    description:
      "Hands-on shoemaking and entrepreneurship skills that help young people build confidence and future opportunities.",
    href: "/projects/kids-shoemaking",
    image: "/images/crafting6.jpeg",
    alt: "Young people learning shoemaking craft at the workshop",
  },
  {
    title: "Community Outreach",
    description:
      "Working alongside communities to provide shoes, share foot-health guidance, and support children and families.",
    href: "/projects/community-outreach",
    image: "/images/IMG_9272-01.jpeg",
    alt: "Children and volunteers together during a foundation outreach",
  },
  {
    title: "School Partnership Program",
    description:
      "Partnering with schools to identify needs, coordinate distributions, and follow each programme's impact.",
    href: "/projects/school-partnerships",
    image: "/images/happy-kids.jpeg",
    alt: "Schoolchildren with a volunteer during a school visit",
  },
  {
    title: "Corporate Partnerships & CSR",
    description:
      "Building practical partnerships that bring organisations and volunteers together to support children.",
    href: "/projects/corporate-partnerships",
    image: "/images/keeping-children.jpg",
    alt: "Children taking part in a community support programme",
  },
];

export default function ProjectsPage() {
  return (
    <>
      <section className="bg-white px-5 pb-8  text-center sm:px-8  sm:pt-32">
        <div className="relative mx-auto flex min-h-[116px] max-w-[704px] items-center justify-center px-5 py-7 sm:min-h-[136px] sm:py-8">
          <TitleSplashBackground variant={1} />
          <h1 className="relative z-10 font-heading text-3xl font-extrabold uppercase text-white sm:text-4xl">
            Our Projects
          </h1>
        </div>
      </section>

      <section id="explore-projects" aria-label="Our projects" className="scroll-mt-24">
        {programPages.map((program) => (
          <ProjectShowcasePanel key={program.href} {...program} />
        ))}
      </section>

      <section className="bg-white px-5 py-10 text-center sm:px-8 sm:py-14">
        <Link
          href="/projects/previous-projects"
          className="group inline-flex items-center gap-3 rounded-[10px] bg-[#F97316] px-7 py-3.5 text-base font-semibold text-white shadow-lg transition-colors hover:bg-[#EA580C] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#1A3A6B] sm:text-lg"
        >
          Previous Projects
          <ArrowRightIcon
            aria-hidden="true"
            className="transition-transform group-hover:translate-x-1"
            size={18}
          />
        </Link>
      </section>

      <section
        id="partners"
        aria-labelledby="partners-heading"
        className="bg-white px-5 pb-4 pt-8 sm:px-8 "
      >
        <div className="mx-auto max-w-6xl  text-center">
          <div className="relative mx-auto flex min-h-[116px] max-w-6xl items-center justify-center px-6 py-7 sm:min-h-[136px] sm:py-8">
            <TitleSplashBackground variant={2} />
            <h2
              id="partners-heading"
              className="relative z-10 font-heading text-2xl font-extrabold uppercase text-white sm:text-3xl"
            >
              Our Partners
            </h2>
          </div>
          <p className="mx-auto mt-5 max-w-6xl text-sm leading-6 text-[#565650] sm:text-base">
            We are grateful for the support of our partners. Their commitment
            helps us equip children with shoes and create opportunities through
            practical skills and community outreach.
          </p>
          <div
            aria-label="Our partner organizations"
            className="mx-auto mt-8 flex max-w-6xl flex-wrap items-center justify-start gap-x-8 gap-y-6"
          >
            <Image
              src="/pertnerLogos/cac.jpeg"
              alt="Corporate Affairs Commission"
              width={204}
              height={201}
              className="h-24 w-24 object-contain sm:h-28 sm:w-28"
              sizes="(max-width: 640px) 96px, 112px"
            />
            <Image
              src="/pertnerLogos/kidpreneurplace.png"
              alt="Kidpreneur Place"
              width={609}
              height={155}
              className="h-14 w-40 object-contain sm:h-16 sm:w-48"
              sizes="(max-width: 640px) 160px, 192px"
            />
          </div>
          <figure className="relative mx-auto mt-24 aspect-[2/1] w-full max-w-6xl overflow-hidden">
            <Image
              src="/images/placeholder.png"
              alt="Schoolchildren and a Shoe My Feet Foundation team member at a community project"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 768px"
            />
          </figure>
        </div>
      </section>

    </>
  );
}
