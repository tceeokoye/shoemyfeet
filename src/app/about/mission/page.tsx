import type { Metadata } from "next";
import Image from "@/components/ui/RealImage";
import AboutPageIntro from "@/components/about/AboutPageIntro";
import ScrollOverBg from "@/components/ui/scrollOverBg";

export const metadata: Metadata = {
  title: "Mission & Values | Shoe My Feet Foundation",
  description: "The purpose and values guiding Shoe My Feet Foundation’s work with children and communities.",
};

const values = [
  ["Compassion", "We meet children with care and empathy, while respecting each child’s individual needs."],
  ["Dignity", "We treat every child as valuable and make support personal, respectful, and inclusive."],
  ["Integrity", "We aim to be accountable to the communities we serve and the people who support the work."],
  ["Community", "We work alongside teachers, parents, and local leaders because lasting change is shared work."],
  ["Hope", "We believe every child should be able to imagine and pursue a future with possibility."],
  ["Excellence", "We pay attention to fit, durability, and responsible stewardship in every distribution."],
];

export default function MissionPage() {
  return (
    <>
      <AboutPageIntro
        eyebrow="Mission & Values"
        title="Safe steps. Equal belonging. Room to grow."
        description="We provide quality school shoes that protect children’s health, restore dignity, and help them pursue education without a footwear barrier."
        image="/images/community.jpg"
        imageAlt="Children and community members together at a foundation outreach"
      />
      <section className="bg-white py-16 sm:py-24">
        <div className="mx-auto grid max-w-7xl gap-14 px-5 sm:px-8 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
          <div className="max-w-md">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.12em] text-[#1A3A6B]">Our vision</p>
            <h2 className="font-heading text-3xl font-medium leading-tight text-[#111827] sm:text-4xl">
              No child held back because they lack proper footwear.
            </h2>
            <p className="mt-5 text-base leading-7 text-[#565650]">
              We want every child to feel safe, included, and ready to take part in school and community life.
            </p>
            <div className="relative mt-9 aspect-[4/3] overflow-hidden bg-[#F3F4F6]">
              <Image src="/images/children_walking_school.webp" alt="Children walking together to school" fill className="object-cover" sizes="(max-width: 1024px) 100vw, 35vw" />
            </div>
          </div>
          <div>
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.12em] text-[#1A3A6B]">What guides us</p>
            <div className="divide-y divide-[#e7e5df] border-y border-[#e7e5df]">
              {values.map(([title, description], index) => (
                <article key={title} className="grid gap-2 py-5 sm:grid-cols-[4rem_1fr] sm:gap-5">
                  <span className="font-heading text-sm font-medium text-[#1A3A6B]">0{index + 1}</span>
                  <div>
                    <h3 className="font-heading text-xl font-medium text-[#111827]">{title}</h3>
                    <p className="mt-1 text-base leading-7 text-[#565650]">{description}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <ScrollOverBg
        backgroundImage="/images/shoe_distribution.jpg"
        minHeight="min-h-[420px] sm:min-h-[480px]"
        className="px-5 py-20 sm:px-8"
        overlayClassName="bg-[#111827]/75"
        eyebrow="Mission & Vision"
        title="Walk With Us Toward a Fairer Future"
        titleTag="h2"
        titleClassName="font-heading text-3xl font-bold leading-tight text-white sm:text-4xl md:text-5xl"
        description="Every pair of shoes is a step toward safety, education, and equal belonging for a child."
        descriptionClassName="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-white/90 sm:text-lg"
        href="/donate"
        linkLabel="Donate Now"
        linkStyle="button"
        secondaryHref="/volunteer"
        secondaryLinkLabel="Become a Volunteer"
        secondaryLinkStyle="outline"
      />
    </>
  );
}
