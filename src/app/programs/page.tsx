import type { Metadata } from "next";
import Link from "next/link";
import FastImage from "@/components/ui/FastImage";
import ProgramsOverview from "@/components/programs/ProgramsOverview";
import HowProgramsWork from "@/components/programs/HowProgramsWork";
import ProgramSuccessStories from "@/components/programs/ProgramSuccessStories";
import ProgramFAQ from "@/components/programs/ProgramFAQ";
import ProgramsCTA from "@/components/programs/ProgramsCTA";

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
      "Providing durable school shoes to children so they can learn, play, and move with comfort and confidence.",
    href: "/programs/shoe-distribution",
    image: "/images/shoe_distribution.jpg",
    alt: "Children receiving fitted school shoes during outreach",
  },
  {
    title: "Back-to-School Campaign",
    description:
      "Helping children begin each school term prepared with footwear and the essentials they need to learn.",
    href: "/programs/back-to-school",
    image: "/images/everychild.jpg",
    alt: "Schoolchildren standing together at a school outreach event",
  },
  {
    title: "Kids Shoemaking & Skills",
    description:
      "Hands-on shoemaking and entrepreneurship skills that help young people build confidence and future opportunities.",
    href: "/programs/kids-shoemaking",
    image: "/images/crafting6.jpeg",
    alt: "Young people learning shoemaking craft at the workshop",
  },
  {
    title: "Community Outreach",
    description:
      "Working alongside communities to provide shoes, share foot-health guidance, and support children and families.",
    href: "/programs/community-outreach",
    image: "/images/IMG_9272-01.jpeg",
    alt: "Children and volunteers together during a foundation outreach",
  },
  {
    title: "School Partnership Program",
    description:
      "Partnering with schools to identify needs, coordinate distributions, and follow each programme's impact.",
    href: "/programs/school-partnerships",
    image: "/images/happy-kids.jpeg",
    alt: "Schoolchildren with a volunteer during a school visit",
  },
  {
    title: "Corporate Partnerships & CSR",
    description:
      "Building practical partnerships that bring organisations and volunteers together to support children.",
    href: "/programs/corporate-partnerships",
    image: "/images/keeping-children.jpg",
    alt: "Children taking part in a community support programme",
  },
];

export default function ProgramsPage() {
  return (
    <>
      <section className="bg-white px-5 pb-8 pt-28 text-center sm:px-8 sm:pb-10 sm:pt-32">
        <div className="relative mx-auto flex min-h-[84px] max-w-[704px] items-center justify-center px-5 py-5 sm:min-h-[104px]">
          <span
            aria-hidden="true"
            className="absolute inset-0 bg-[length:100%_100%] bg-center bg-no-repeat"
            style={{ backgroundImage: "url('/images/challenge-brush.svg')" }}
          />
          <h1 className="relative font-heading text-3xl font-extrabold uppercase text-white sm:text-4xl">
            Our Projects
          </h1>
        </div>
      </section>

      <section id="explore-programs" aria-label="Our projects" className="scroll-mt-24">
        {programPages.map((program) => (
          <article
            key={program.href}
            className="relative isolate flex min-h-[380px] items-center justify-center overflow-hidden bg-[#111827] px-5 py-20 text-center text-white sm:min-h-[440px] sm:px-8 lg:min-h-[500px]"
          >
            <div className="absolute inset-0 z-0">
              <FastImage
                src={program.image}
                alt={program.alt}
                fill
                className="object-cover"
                sizes="100vw"
              />
            </div>
            <div
              aria-hidden="true"
              className="absolute inset-0 z-10 bg-gradient-to-b from-[#111827]/65 via-[#111827]/55 to-[#111827]/75"
            />
            <div className="relative z-20 mx-auto max-w-3xl">
              <h2 className="font-heading text-2xl font-extrabold uppercase leading-tight tracking-[0.12em] text-white sm:text-3xl md:text-4xl">
                {program.title}
              </h2>
              <p className="mx-auto mt-4 max-w-2xl text-sm leading-6 text-white/90 sm:text-base sm:leading-7">
                {program.description}
              </p>
              <Link
                href={program.href}
                className="mt-8 inline-flex min-w-40 items-center justify-center rounded-full bg-[#F8D77A] px-7 py-3.5 text-sm font-semibold text-[#1A3A6B] transition-colors hover:bg-[#F97316] hover:text-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
              >
                View Project
              </Link>
            </div>
          </article>
        ))}
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
