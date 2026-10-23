import type { Metadata } from "next";
import Link from "next/link";
import ImpactPageIntro from "@/components/impact/ImpactPageIntro";
import ImpactNumbers from "@/components/impact/ImpactNumbers";
import FastImage from "@/components/ui/FastImage";
import { ArrowRightIcon } from "@/components/ui/Icons";

export const metadata: Metadata = {
  title: "Our Reach | Shoe My Feet Foundation",
  description:
    "See how Shoe My Feet Foundation reaches school communities, young people, and families through footwear and shoemaking programs.",
};

const reachAreas = [
  {
    title: "Schools",
    description:
      "We work with school communities to identify children who need well-fitting footwear and make distribution part of a welcoming school experience.",
    href: "/projects/school-partnerships",
    linkLabel: "Explore school partnerships",
    image: "/images/shoe_distribution.jpg",
    imageAlt: "School shoes prepared for a community distribution",
  },
  {
    title: "Skills and opportunity",
    description:
      "Our shoemaking activities introduce young people to practical craft skills and create space to learn by making.",
    href: "/projects/kids-shoemaking",
    linkLabel: "Explore skills programs",
    image: "/images/crafting6.jpeg",
    imageAlt: "A young person learning shoemaking skills",
  },
  {
    title: "Communities",
    description:
      "Community outreach brings families, local partners, and volunteers together around children’s wellbeing and access to education.",
    href: "/projects/community-outreach",
    linkLabel: "Explore community outreach",
    image: "/images/happy-kids.jpeg",
    imageAlt: "Children smiling together at a community event",
  },
];

export default function ImpactReachPage() {
  return (
    <>
      <ImpactPageIntro
        eyebrow="Our Impact · Our Reach"
        title={
          <>
            Reaching children through <span className="text-[#142E56]">community action.</span>
          </>
        }
        description="Our work connects school shoe distributions, practical skills, and local partnerships. Explore who we reach and where our programs are active."
        image="/images/addressing.jpg"
        imageAlt="The foundation team speaking with community members"
      >
        <Link href="/impact/map" className="btn-primary">
          Explore Our Geographic Reach
        </Link>
        <Link
          href="/impact/reports"
          className="inline-flex items-center gap-2 border-b border-[#1A3A6B] pb-1 text-sm font-medium text-[#1A3A6B] transition-colors hover:text-[#142E56]"
        >
          Read our reports <ArrowRightIcon size={16} />
        </Link>
      </ImpactPageIntro>

      <ImpactNumbers />

      <section className="border-y border-[#e7e5df] bg-white py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="mb-10 max-w-2xl sm:mb-14">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.12em] text-[#1A3A6B]">
              Where the work happens
            </p>
            <h2 className="font-heading text-3xl font-medium text-[#111827] sm:text-4xl">
              A local approach, across different settings
            </h2>
            <p className="mt-4 text-base leading-7 text-[#565650]">
              Each program responds to the people it serves, with schools and community partners helping shape how support is delivered.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            {reachAreas.map((area) => (
              <article key={area.title} className="flex flex-col">
                <div className="relative mb-5 aspect-[4/3] overflow-hidden bg-[#F3F4F6]">
                  <FastImage
                    src={area.image}
                    alt={area.imageAlt}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                </div>
                <h3 className="font-heading text-2xl font-medium text-[#111827]">
                  {area.title}
                </h3>
                <p className="mt-3 flex-1 text-base leading-7 text-[#565650]">
                  {area.description}
                </p>
                <Link
                  href={area.href}
                  className="mt-5 inline-flex w-fit items-center gap-2 border-b border-[#1A3A6B] pb-1 text-sm font-medium text-[#1A3A6B] transition-colors hover:text-[#142E56]"
                >
                  {area.linkLabel} <ArrowRightIcon size={15} />
                </Link>
              </article>
            ))}
          </div>

          <div className="mt-14 flex flex-wrap items-center justify-between gap-5 border-t border-[#e7e5df] pt-8">
            <p className="max-w-2xl text-base leading-7 text-[#565650]">
              See the locations represented in our current geographic overview.
            </p>
            <Link href="/impact/map" className="btn-primary">
              View the map
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
