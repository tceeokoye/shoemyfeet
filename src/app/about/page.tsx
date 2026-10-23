import type { Metadata } from "next";
import Image from "@/components/ui/RealImage";
import Link from "next/link";
import EditorialHero from "@/components/ui/EditorialHero";

export const metadata: Metadata = {
  title: "About Us | Shoe My Feet Foundation",
  description:
    "Meet the people, purpose, and community work behind Shoe My Feet Foundation.",
};

const pages = [
  {
    title: "Our Story",
    description: "How a founder's first 100 pairs became a wider commitment to children's dignity.",
    href: "/about/story",
    image: "/images/founder.jpg",
    alt: "Shoe My Feet Foundation founder at a community outreach event",
    label: "The beginning",
  },
  {
    title: "Mission & Values",
    description: "The commitments that guide how we support children and work with communities.",
    href: "/about/mission",
    image: "/images/community.jpg",
    alt: "Children and community members gathered during outreach",
    label: "What guides us",
  },
  {
    title: "How We Work",
    description: "From listening to schools to careful fitting and follow-up with families.",
    href: "/about/how-we-work",
    image: "/images/distribution.jpg",
    alt: "School shoe distribution taking place in a local community",
    label: "Our approach",
  },
  {
    title: "Our Team",
    description: "Meet the people and volunteers who bring the work into communities.",
    href: "/about/team",
    image: "/images/volunteers.jpg",
    alt: "Foundation volunteers working together",
    label: "The people",
  },
  {
    title: "Impact",
    description: "A clear view of who is reached and what a fitted pair of shoes can change.",
    href: "/about/impact",
    image: "/images/children_walking_school.jpg",
    alt: "Schoolchildren walking together on their way to school",
    label: "The difference",
  },
  {
    title: "Distribution Report",
    description: "Review the eight school visits and the 3,000 pairs recorded in the attached report.",
    href: "/about/report",
    image: "/images/shoe_distribution.jpg",
    alt: "Shoes prepared for distribution to schoolchildren",
    label: "2022-2024 report",
  },
];

export default function AboutPage() {
  return (
    <>
      <EditorialHero
        eyebrow="Shoe My Feet Foundation · About us"
        title={<>Every child deserves to walk with <span className="text-[#142E56]">dignity.</span></>}
        description="We work with schools and communities to help children take their next steps with confidence."
        image="/images/hero.jpg"
        imageAlt="Children from the communities served by Shoe My Feet Foundation"
      />

      <section className="bg-white py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="mb-10 flex flex-wrap items-end justify-between gap-5 sm:mb-14">
            <div>
              <p className="mb-3 text-sm font-semibold uppercase tracking-[0.12em] text-[#1A3A6B]">Get to know us</p>
              <h2 className="font-heading text-3xl font-semibold text-[#111827] sm:text-4xl">The work behind every pair</h2>
            </div>
            <p className="max-w-md text-base leading-7 text-[#565650]">
              Explore our story, our approach, the people involved, and the progress recorded in our outreach reports.
            </p>
          </div>

          <div className="grid gap-x-8 gap-y-12 md:grid-cols-2 lg:grid-cols-3">
            {pages.map((page) => (
              <Link key={page.href} href={page.href} className="group block">
                <div className="relative mb-5 aspect-[4/3] overflow-hidden bg-[#F3F4F6]">
                  <Image
                    src={page.image}
                    alt={page.alt}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                </div>
                <p className="mb-2 text-xs font-semibold uppercase tracking-[0.12em] text-[#1A3A6B]">{page.label}</p>
                <h3 className="font-heading text-2xl font-medium text-[#111827] group-hover:text-[#1A3A6B]">{page.title}</h3>
                <p className="mt-2 text-base leading-7 text-[#565650]">{page.description}</p>
                <span className="mt-4 inline-block border-b border-[#1A3A6B] pb-1 text-sm font-medium text-[#8f3710]">Explore {page.title}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
