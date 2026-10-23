import type { Metadata } from "next";
import Link from "next/link";
import AboutPageIntro from "@/components/about/AboutPageIntro";
import { ArrowRightIcon } from "@/components/ui/Icons";

export const metadata: Metadata = {
  title: "Careers | Shoe My Feet Foundation",
  description:
    "Learn how to connect with Shoe My Feet Foundation about employment, internships, and opportunities to support its community work.",
};

const waysToContribute = [
  {
    title: "Community outreach",
    description:
      "Support event preparation and help make school and community visits welcoming for children and families.",
    href: "/volunteer",
    linkLabel: "Explore volunteering",
  },
  {
    title: "Skills and learning",
    description:
      "Bring your interest in practical learning and youth development to the foundation's shoemaking activities.",
    href: "/programs/kids-shoemaking",
    linkLabel: "Explore skills programs",
  },
  {
    title: "Professional experience",
    description:
      "Get in touch to ask about employment, internship, or project-based opportunities related to the foundation's work.",
    href: "/contact",
    linkLabel: "Contact the team",
  },
];

export default function CareersPage() {
  return (
    <>
      <AboutPageIntro
        eyebrow="Connect with Us · Careers"
        title="Bring your skills to work that matters."
        description="People with many kinds of experience help make community-led work possible. Explore ways to contribute or contact us about future opportunities."
        image="/images/everymoment.jpeg"
        imageAlt="A Shoe My Feet Foundation community moment"
      />

      <section className="bg-white py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="mb-10 max-w-2xl sm:mb-14">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.12em] text-[#1A3A6B]">
              Work with us
            </p>
            <h2 className="font-heading text-3xl font-medium text-[#111827] sm:text-4xl">
              Find a way to take part
            </h2>
            <p className="mt-4 text-base leading-7 text-[#565650]">
              Whether you are looking to volunteer, share a specialist skill, or ask about a role, start with the area that best fits your interests.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {waysToContribute.map((way) => (
              <article
                key={way.title}
                className="flex flex-col border-t-2 border-[#1A3A6B] bg-[#FFFFFF] p-7 sm:p-8"
              >
                <h3 className="font-heading text-2xl font-medium text-[#111827]">
                  {way.title}
                </h3>
                <p className="mt-3 flex-1 text-base leading-7 text-[#565650]">
                  {way.description}
                </p>
                <Link
                  href={way.href}
                  className="mt-6 inline-flex w-fit items-center gap-2 border-b border-[#1A3A6B] pb-1 text-sm font-medium text-[#1A3A6B] transition-colors hover:text-[#142E56]"
                >
                  {way.linkLabel} <ArrowRightIcon size={15} />
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
