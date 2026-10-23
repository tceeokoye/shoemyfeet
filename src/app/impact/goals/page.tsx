import type { Metadata } from "next";
import Link from "next/link";
import ImpactPageIntro from "@/components/impact/ImpactPageIntro";
import ImpactGoals from "@/components/impact/ImpactGoals";
import { ArrowRightIcon, SparklesIcon } from "@/components/ui/Icons";

export const metadata: Metadata = {
  title: "Future Goals & Vision | Shoe My Feet Foundation Impact",
  description:
    "Explore Shoe My Feet Foundation's strategic roadmap for 2025–2027: distributing 10,000 pairs annually, partnering with 50+ schools, and expanding nationwide.",
};

const strategicPillars = [
  {
    target: "10,000 Pairs Annually",
    timeframe: "Target: 2027",
    description:
      "Doubling our operational distribution capacity by establishing regional fulfillment hubs and expanding community outreach teams.",
  },
  {
    target: "50+ School Partnerships",
    timeframe: "Target: 2026",
    description:
      "Formalizing institutional relationships with public schools across 5 Nigerian geopolitical zones to institutionalize footwear support.",
  },
  {
    target: "500 Youth Shoemakers",
    timeframe: "Target: 2026",
    description:
      "Scaling the Kids Shoemaking & Skills Academy into accredited community workshops that foster local craftsmanship and micro-enterprise.",
  },
  {
    target: "5 New Operational States",
    timeframe: "Target: 2027",
    description:
      "Establishing volunteer chapters and outreach networks in Lagos, Abuja (FCT), Rivers, Anambra, and Ogun states.",
  },
];

export default function ImpactGoalsPage() {
  return (
    <>
      <ImpactPageIntro
        eyebrow="Future Roadmap · Strategic Vision 2027"
        title={
          <>
            Scaling our footprint to <span className="text-[#142E56]">10,000 children.</span>
          </>
        }
        description="We are proud of what we have achieved so far, but millions of Nigerian children still walk to school barefoot. Discover our bold strategic roadmap to expand our reach over the next three years."
        image="/images/children_walking_school.jpg"
        imageAlt="Schoolchildren walking into the future with optimism and energy"
      >
        <Link href="/donate" className="btn-primary">
          Invest in Our Expansion
        </Link>
        <Link
          href="/contact"
          className="inline-flex items-center gap-2 border-b border-[#1A3A6B] pb-1 text-sm font-medium text-[#1A3A6B] hover:text-[#142E56] transition-colors"
        >
          Corporate CSR Inquiries <ArrowRightIcon size={16} />
        </Link>
      </ImpactPageIntro>

      {/* Strategic Overview Grid */}
      <section className="bg-white py-16 sm:py-24 border-b border-[#e7e5df]">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="max-w-2xl mb-12 sm:mb-16">
            <p className="text-sm font-semibold uppercase tracking-[0.12em] text-[#1A3A6B] mb-3">
              Strategic Blueprint
            </p>
            <h2 className="font-heading text-3xl font-medium text-[#111827] sm:text-4xl">
              Where we are headed next
            </h2>
            <p className="mt-4 text-base text-[#565650]">
              Our three-year strategic plan focuses on scaling grassroots reach, deepening local vocational skills, and securing sustainable corporate funding.
            </p>
          </div>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {strategicPillars.map((p) => (
              <div
                key={p.target}
                className="bg-[#FFFFFF] p-7 rounded-2xl border border-[#e7e5df] shadow-sm flex flex-col justify-between"
              >
                <div>
                  <span className="inline-block px-3 py-1 bg-[#F3F4F6] text-[#1A3A6B] text-xs font-semibold rounded-full mb-3">
                    {p.timeframe}
                  </span>
                  <h3 className="font-heading text-xl font-medium text-[#111827] mb-2">
                    {p.target}
                  </h3>
                  <p className="text-sm text-[#65655e] leading-relaxed">
                    {p.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Full Goals Component with Progress Bars */}
      <ImpactGoals />

      {/* CTA */}
      <section className="bg-[#1A3A6B] py-16 text-white sm:py-20">
        <div className="mx-auto max-w-5xl px-5 text-center sm:px-8">
          <SparklesIcon size={38} className="mx-auto mb-4 text-[#F97316]" />
          <h2 className="font-heading text-3xl font-medium sm:text-4xl">
            Help us turn these goals into reality
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base text-white/80 leading-relaxed sm:text-lg">
            Whether through an individual monthly pledge or a corporate sponsorship grant, your partnership propels us toward a Nigeria where no child walks barefoot.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link
              href="/donate"
              className="rounded-xl bg-white px-7 py-3.5 text-base font-semibold text-[#1A3A6B] hover:bg-[#FFFFFF] transition-colors shadow-lg"
            >
              Support the Vision
            </Link>
            <Link
              href="/impact"
              className="rounded-xl border border-white/40 px-7 py-3.5 text-base font-medium text-white hover:bg-white/10 transition-colors"
            >
              Back to Impact Overview
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
