import type { Metadata } from "next";
import Link from "next/link";
import ImpactPageIntro from "@/components/impact/ImpactPageIntro";
import ImpactTimeline from "@/components/impact/ImpactTimeline";
import { ArrowRightIcon, HeartIcon } from "@/components/ui/Icons";

export const metadata: Metadata = {
  title: "Our Timeline & Milestones | Shoe My Feet Foundation",
  description:
    "Explore Shoe My Feet Foundation's journey from our first 100 pairs in 2022 to nationwide school partnerships and shoemaking academies.",
};

export default function ImpactTimelinePage() {
  return (
    <>
      <ImpactPageIntro
        eyebrow="Our Journey · Growth Over Time"
        title={
          <>
            A growing movement for <span className="text-[#142E56]">children&apos;s dignity.</span>
          </>
        }
        description="From a single act of kindness on International Women's Day in 2022 to a multi-state foundation touching thousands of lives, discover the milestones that have defined our journey."
        image="/images/founder.jpg"
        imageAlt="Shoe My Feet Foundation founder speaking with schoolchildren"
      >
        <Link href="/about/story" className="btn-primary">
          Read Founder&apos;s Story
        </Link>
        <Link
          href="/donate"
          className="inline-flex items-center gap-2 border-b border-[#1A3A6B] pb-1 text-sm font-medium text-[#1A3A6B] hover:text-[#142E56] transition-colors"
        >
          Support Our Next Chapter <ArrowRightIcon size={16} />
        </Link>
      </ImpactPageIntro>

      {/* Narrative Section */}
      <section className="bg-white py-12 sm:py-16 border-b border-[#e7e5df]">
        <div className="mx-auto max-w-4xl px-5 text-center sm:px-8">
          <p className="text-sm font-semibold uppercase tracking-[0.14em] text-[#1A3A6B] mb-3">
            Milestones of Hope
          </p>
          <h2 className="font-heading text-3xl font-medium text-[#111827] sm:text-4xl">
            Every year has brought more children into the fold
          </h2>
          <p className="mt-5 text-base sm:text-lg leading-relaxed text-[#565650]">
            What started as personal concern for barefoot pupils on village roads has blossomed into an institutional effort spanning school assessments, mobile foot health clinics, and hands-on craftsmanship education.
          </p>
        </div>
      </section>

      {/* The Timeline Component */}
      <ImpactTimeline />

      {/* CTA */}
      <section className="bg-[#1A3A6B] py-16 text-white sm:py-20">
        <div className="mx-auto max-w-5xl px-5 text-center sm:px-8">
          <HeartIcon size={38} className="mx-auto mb-4 text-[#F97316]" />
          <h2 className="font-heading text-3xl font-medium sm:text-4xl">
            Help write our next milestone
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base text-white/80 leading-relaxed sm:text-lg">
            Join hands with us as we expand into five new states and work toward our goal of 10,000 pairs distributed annually.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link
              href="/donate"
              className="rounded-xl bg-white px-7 py-3.5 text-base font-semibold text-[#1A3A6B] hover:bg-[#FFFFFF] transition-colors shadow-lg"
            >
              Partner With Us
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
