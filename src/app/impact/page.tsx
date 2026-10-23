import type { Metadata } from "next";
import Link from "next/link";
import EditorialHero from "@/components/ui/EditorialHero";
import FastImage from "@/components/ui/FastImage";
import ImpactNumbers from "@/components/impact/ImpactNumbers";

export const metadata: Metadata = {
  title: "Our Impact | Shoe My Feet Foundation",
  description:
    "Explore the measurable impact of Shoe My Feet Foundation: personal transformation stories, verified statistics, outreach maps, and transparency reports across Nigeria.",
  keywords: [
    "Shoe My Feet Foundation impact",
    "charity impact report Nigeria",
    "shoe distribution statistics",
    "student transformation stories",
    "education charity impact",
  ],
  openGraph: {
    title: "Our Impact | Shoe My Feet Foundation",
    description:
      "Every pair of shoes is more than footwear — it is health protected, dignity restored, and an open door to education.",
    url: "https://shoemyfeet.org/impact",
    siteName: "Shoe My Feet Foundation",
    type: "website",
  },
};

const impactPages = [
  {
    title: "Stories of Change",
    description: "Read stories from the children and communities we serve.",
    href: "/impact/stories",
    image: "/images/happy-kids.jpeg",
    alt: "Smiling schoolchildren wearing new school shoes",
    label: "Human Stories",
  },
  {
    title: "By the Numbers",
    description: "See our reach, progress, and results across Nigeria.",
    href: "/impact/numbers",
    image: "/images/shoe_distribution.jpg",
    alt: "Organized inventory of school shoes ready for distribution",
    label: "Data & Metrics",
  },
  {
    title: "Our Timeline & Milestones",
    description: "Follow the milestones that have shaped our work.",
    href: "/impact/timeline",
    image: "/images/founder.jpg",
    alt: "Shoe My Feet founder engaging with community members",
    label: "Our Journey",
  },
  {
    title: "Geographic Reach & Map",
    description: "Explore the communities and states we have reached.",
    href: "/impact/map",
    image: "/images/addressing.jpg",
    alt: "Community outreach gathering in a rural village square",
    label: "Locations & Reach",
  },
  {
    title: "Audits & Impact Reports",
    description: "View our reports and learn how we stay accountable.",
    href: "/impact/reports",
    image: "/images/distribution.jpg",
    alt: "Documented distribution taking place at a primary school",
    label: "Transparency & Audits",
  },
  {
    title: "Future Goals & Vision",
    description: "See what we are working toward next.",
    href: "/impact/goals",
    image: "/images/children_walking_school.jpg",
    alt: "Children walking forward together towards school",
    label: "Future Roadmap",
  },
];

export default function ImpactPage() {
  return (
    <>
      {/* Editorial Hero */}
      <EditorialHero
        eyebrow="Shoe My Feet Foundation · Impact"
        title={
          <>
            Every step creates a <span className="text-[#142E56]">lasting change.</span>
          </>
        }
        description="Shoes protect children’s health, restore confidence, and help them stay in school."
        image="/images/children_walking_school.jpg"
        imageAlt="School children walking proudly to school wearing their new shoes"
      >
        <Link href="#explore-impact" className="btn-primary">
          Explore Impact Areas
        </Link>
        <Link
          href="/donate"
          className="inline-flex items-center gap-2 border-b border-[#1A3A6B] pb-1 text-sm font-medium text-[#1A3A6B] hover:text-[#142E56] transition-colors"
        >
          Support Our Mission
        </Link>
      </EditorialHero>

      {/* Impact Collections Grid */}
      <section id="explore-impact" className="bg-[#FFFFFF] py-16 sm:py-20 scroll-mt-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="mb-10 sm:mb-12">
            <div>
              <p className="mb-3 text-sm font-semibold uppercase tracking-[0.12em] text-[#142E56]">
                Our Impact
              </p>
              <h2 className="font-heading text-3xl font-semibold text-[#111827] sm:text-4xl">
                Explore what we do
              </h2>
            </div>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {impactPages.map((page) => (
              <Link
                key={page.href}
                href={page.href}
                className="group block overflow-hidden rounded-xl bg-white shadow-sm transition-shadow hover:shadow-md"
              >
                <div className="relative aspect-[4/3] overflow-hidden bg-[#F3F4F6]">
                  <FastImage
                    src={page.image}
                    alt={page.alt}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-[1.02]"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                </div>
                <div className="p-5">
                  <p className="mb-2 text-xs font-semibold uppercase tracking-[0.12em] text-[#142E56]">
                    {page.label}
                  </p>
                  <h3 className="font-heading text-xl font-semibold text-[#111827] group-hover:text-[#1A3A6B] transition-colors">
                    {page.title}
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-[#696558]">
                    {page.description}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Quantitative Numbers Banner */}
      <ImpactNumbers />

    </>
  );
}
