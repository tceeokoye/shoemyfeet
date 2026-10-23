import type { Metadata } from "next";
import Link from "next/link";
import ImpactPageIntro from "@/components/impact/ImpactPageIntro";
import ImpactNumbers from "@/components/impact/ImpactNumbers";
import ImpactOutcomes from "@/components/impact/ImpactOutcomes";
import { ArrowRightIcon, SparklesIcon } from "@/components/ui/Icons";

export const metadata: Metadata = {
  title: "By the Numbers | Shoe My Feet Foundation Impact",
  description:
    "Verified data, key statistics, and measurable outcomes from Shoe My Feet Foundation distributions across Nigeria.",
};

const keyMetrics = [
  {
    number: "6,500+",
    label: "Pairs of School Shoes",
    detail: "Hand-delivered and personally fitted for underserved primary school pupils.",
  },
  {
    number: "18+",
    label: "School Communities",
    detail: "Active public primary schools partnered with across 3 Nigerian states.",
  },
  {
    number: "137+",
    label: "Youth Trained in Shoemaking",
    detail: "Apprentices equipped with hands-on shoemaking, tooling, and business skills.",
  },
  {
    number: "+34%",
    label: "Classroom Attendance Surge",
    detail: "Documented average increase in weekly school attendance post-distribution.",
  },
  {
    number: "100%",
    label: "Individual Fitting Rate",
    detail: "Zero bulk dumping — every child is measured, tried on, and given room to grow.",
  },
  {
    number: "3",
    label: "States Reached",
    detail: "Grassroots outreach footprints in Enugu, Kaduna, and Edo states.",
  },
];

export default function ImpactNumbersPage() {
  return (
    <>
      <ImpactPageIntro
        eyebrow="Data & Metrics · Quantitative Proof"
        title={
          <>
            Measuring our work <span className="text-[#142E56]">by the numbers.</span>
          </>
        }
        description="We believe in rigorous accountability. Every donation is translated into verifiable counts of children fitted, school days gained, and communities empowered."
        image="/images/shoe_distribution.jpg"
        imageAlt="Rows of organized school shoes prepared for distribution"
      >
        <Link href="/donate" className="btn-primary">
          Help Us Reach More Children
        </Link>
        <Link
          href="/impact/reports"
          className="inline-flex items-center gap-2 border-b border-[#1A3A6B] pb-1 text-sm font-medium text-[#1A3A6B] hover:text-[#142E56] transition-colors"
        >
          View Audit Reports <ArrowRightIcon size={16} />
        </Link>
      </ImpactPageIntro>

      {/* Primary Metrics Grid */}
      <section className="bg-white py-16 sm:py-24 border-b border-[#e7e5df]">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="max-w-2xl mb-12 sm:mb-16">
            <p className="text-sm font-semibold uppercase tracking-[0.12em] text-[#1A3A6B] mb-3">
              Verified Statistics
            </p>
            <h2 className="font-heading text-3xl font-medium text-[#111827] sm:text-4xl">
              Key indicators of progress
            </h2>
            <p className="mt-4 text-base text-[#565650]">
              Data compiled from field distribution registers, headteacher attendance logs, and workshop records from 2022 to date.
            </p>
          </div>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {keyMetrics.map((m) => (
              <div
                key={m.label}
                className="bg-[#FFFFFF] p-8 rounded-2xl border border-[#e7e5df] shadow-sm flex flex-col justify-between"
              >
                <div>
                  <p className="font-heading text-4xl font-bold text-[#1A3A6B] mb-2 sm:text-5xl">
                    {m.number}
                  </p>
                  <h3 className="font-heading text-lg font-medium text-[#111827] mb-2">
                    {m.label}
                  </h3>
                  <p className="text-sm text-[#65655e] leading-relaxed">
                    {m.detail}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Visual Infographic Numbers */}
      <ImpactNumbers />

      {/* Outcomes & Impact Categories */}
      <ImpactOutcomes />

      {/* CTA */}
      <section className="bg-[#1A3A6B] py-16 text-white sm:py-20">
        <div className="mx-auto max-w-5xl px-5 text-center sm:px-8">
          <SparklesIcon size={38} className="mx-auto mb-4 text-[#F97316]" />
          <h2 className="font-heading text-3xl font-medium sm:text-4xl">
            Help us reach 10,000 children by 2027
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base text-white/80 leading-relaxed sm:text-lg">
            Every dollar or naira donated directly moves these numbers forward and brings another fitted pair of shoes to a child in need.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link
              href="/donate"
              className="rounded-xl bg-white px-7 py-3.5 text-base font-semibold text-[#1A3A6B] hover:bg-[#FFFFFF] transition-colors shadow-lg"
            >
              Donate Now
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
