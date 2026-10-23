import type { Metadata } from "next";
import Link from "next/link";
import ImpactPageIntro from "@/components/impact/ImpactPageIntro";
import ImpactStories from "@/components/impact/ImpactStories";
import ImpactTestimonials from "@/components/impact/ImpactTestimonials";
import { ArrowRightIcon, HeartIcon } from "@/components/ui/Icons";

export const metadata: Metadata = {
  title: "Stories of Change | Shoe My Feet Foundation",
  description:
    "Heartfelt reflections and personal journeys from children, teachers, and youths empowered by Shoe My Feet Foundation across Nigeria.",
};

export default function ImpactStoriesPage() {
  return (
    <>
      <ImpactPageIntro
        eyebrow="Human Stories · Evidence of Change"
        title={
          <>
            Voices and journeys <span className="text-[#142E56]">from the field.</span>
          </>
        }
        description="Behind every statistic is a young child who can now walk to school without cuts, a parent relieved of financial despair, or a youth running their own small shoemaking trade."
        image="/images/happy-kids.jpeg"
        imageAlt="Schoolchildren smiling happily with their new school shoes"
      >
        <Link href="/donate" className="btn-primary">
          Change a Child&apos;s Story
        </Link>
        <Link
          href="/impact"
          className="inline-flex items-center gap-2 border-b border-[#1A3A6B] pb-1 text-sm font-medium text-[#1A3A6B] hover:text-[#142E56] transition-colors"
        >
          View All Impact Areas <ArrowRightIcon size={16} />
        </Link>
      </ImpactPageIntro>

      {/* Narrative Context Section */}
      <section className="bg-white py-12 sm:py-16 border-b border-[#e7e5df]">
        <div className="mx-auto max-w-4xl px-5 text-center sm:px-8">
          <p className="text-sm font-semibold uppercase tracking-[0.14em] text-[#1A3A6B] mb-3">
            Real People, Lasting Dignity
          </p>
          <h2 className="font-heading text-3xl font-medium text-[#111827] sm:text-4xl">
            A shoe changes how a child sees themselves
          </h2>
          <p className="mt-5 text-base sm:text-lg leading-relaxed text-[#565650]">
            When a child receives a properly fitted pair of school shoes, the immediate relief is physical — no more gravel cuts, infections, or thorns. But the deeper transformation is psychological: the restoration of dignity, the confidence to participate in class, and the pride of belonging with peers.
          </p>
        </div>
      </section>

      {/* Interactive Beneficiary Stories */}
      <ImpactStories />

      {/* Community & Educator Testimonials */}
      <ImpactTestimonials />

      {/* CTA */}
      <section className="bg-[#1A3A6B] py-16 text-white sm:py-20">
        <div className="mx-auto max-w-5xl px-5 text-center sm:px-8">
          <HeartIcon size={38} className="mx-auto mb-4 text-[#F97316]" />
          <h2 className="font-heading text-3xl font-medium sm:text-4xl">
            Be part of the next child&apos;s transformation
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base text-white/80 leading-relaxed sm:text-lg">
            $15 (₦15,000) funds a fitted pair of school shoes, socks, and foot hygiene education for an underserved primary pupil.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link
              href="/donate"
              className="rounded-xl bg-white px-7 py-3.5 text-base font-semibold text-[#1A3A6B] hover:bg-[#FFFFFF] transition-colors shadow-lg"
            >
              Donate a Pair Today
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
