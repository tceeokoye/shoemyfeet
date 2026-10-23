import type { Metadata } from "next";
import Link from "next/link";
import FastImage from "@/components/ui/FastImage";
import ProgramPageIntro from "@/components/programs/ProgramPageIntro";
import { ArrowRightIcon, CheckCircleIcon, HeartIcon } from "@/components/ui/Icons";

export const metadata: Metadata = {
  title: "School Shoe Distribution Initiative | Shoe My Feet Foundation",
  description:
    "Our flagship program providing durable, properly fitted school shoes directly to children across primary schools in Nigeria.",
};

const stats = [
  { value: "6,500+", label: "Pairs distributed to date" },
  { value: "100%", label: "Individual sizing & fitting rate" },
  { value: "18+", label: "Partner schools & communities" },
  { value: "+30%", label: "Average attendance increase" },
];

const distributionPhases = [
  {
    phase: "01",
    title: "Needs Assessment & Pupil Census",
    description:
      "Our field team collaborates with local school heads and teachers to conduct a quiet, dignified assessment. We record foot measurements, identify pupils without shoes or walking in heavily torn footwear, and verify local needs.",
  },
  {
    phase: "02",
    title: "Sourcing & Quality Procurement",
    description:
      "We source sturdy, durable leather school shoes built to withstand rough dirt paths and daily Nigerian classroom conditions. Every pair is inspected for sole thickness, stitching reinforcement, and comfort.",
  },
  {
    phase: "03",
    title: "Personalized Fitting Day",
    description:
      "Distribution day is a celebration of dignity. Rather than bulk handouts, volunteers sit with each child, fit new socks, ensure the shoes fit with room to grow, and tie their laces. Every child walks away feeling valued.",
  },
  {
    phase: "04",
    title: "Post-Distribution Monitoring",
    description:
      "We follow up with headteachers at 30, 90, and 180-day intervals to monitor attendance, pupil academic engagement, and footwear longevity. Feedback directly informs future distributions.",
  },
];

export default function ShoeDistributionPage() {
  return (
    <>
      <ProgramPageIntro
        eyebrow="Flagship Program · Shoe Distribution"
        title={
          <>
            A fitted pair of shoes for <span className="text-[#142E56]">every child.</span>
          </>
        }
        description="Our core initiative delivers durable, properly fitted school shoes directly into remote primary schools across Nigeria, protecting children's feet from infection and restoring dignity."
        image="/images/distribution.jpg"
        imageAlt="Shoe My Feet volunteers fitting school shoes on a child"
      >
        <Link href="/donate" className="btn-primary">
          Sponsor a Child&apos;s Shoes
        </Link>
        <Link
          href="/volunteer"
          className="inline-flex items-center gap-2 border-b border-[#1A3A6B] pb-1 text-sm font-medium text-[#1A3A6B] hover:text-[#142E56] transition-colors"
        >
          Join a Distribution Outreach <ArrowRightIcon size={16} />
        </Link>
      </ProgramPageIntro>

      {/* Key Numbers Banner */}
      <section className="bg-white border-b border-[#e7e5df] py-12 sm:py-16">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="grid grid-cols-2 gap-8 lg:grid-cols-4">
            {stats.map((s) => (
              <div key={s.label} className="border-l-2 border-[#1A3A6B] pl-5">
                <p className="font-heading text-3xl font-semibold text-[#111827] sm:text-4xl">
                  {s.value}
                </p>
                <p className="mt-1 text-sm text-[#65655e]">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Narrative Section */}
      <section className="bg-white py-16 sm:py-24">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 sm:px-8 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16 items-center">
          <div>
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.12em] text-[#1A3A6B]">
              Why It Matters
            </p>
            <h2 className="font-heading text-3xl font-medium leading-tight text-[#111827] sm:text-4xl">
              More than footwear — a foundation for safety and self-worth.
            </h2>
            <div className="mt-6 space-y-5 text-base leading-7 text-[#565650]">
              <p>
                Across underserved communities in Nigeria, millions of children trek 2 to 7 kilometers each day along unpaved dirt roads, broken glass, sharp gravel, and mud just to reach the nearest primary school.
              </p>
              <p>
                Walking barefoot exposes young feet to severe puncture wounds, soil-transmitted helminths, jigger fleas, and painful infections. Even worse, many public schools enforce strict uniform regulations, and children without shoes are often turned away or feel too ashamed to attend class.
              </p>
              <p>
                The Shoe Distribution Initiative tackles both health hazards and educational exclusion. By providing robust, school-compliant shoes, we remove one of the most stubborn hidden barriers to everyday primary education.
              </p>
            </div>
          </div>

          <div className="relative aspect-[4/3] overflow-hidden bg-[#F3F4F6] rounded-2xl shadow-sm">
            <FastImage
              src="/images/shoe_distribution.jpg"
              alt="School shoes lined up ready for distribution"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 45vw"
            />
          </div>
        </div>
      </section>

      {/* How the Distribution Process Operates */}
      <section className="bg-[#FFFFFF] py-16 sm:py-24 border-y border-[#e7e5df]">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="max-w-2xl mb-12 sm:mb-16">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.12em] text-[#1A3A6B]">
              Step-by-Step Rigor
            </p>
            <h2 className="font-heading text-3xl font-medium text-[#111827] sm:text-4xl">
              How our distribution operates
            </h2>
            <p className="mt-4 text-base text-[#565650]">
              We treat distribution as an act of service, accountability, and dignity. Every stage is planned to ensure children receive the right fit without stigma.
            </p>
          </div>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {distributionPhases.map((phase) => (
              <div
                key={phase.phase}
                className="bg-white p-7 rounded-2xl border border-[#e7e5df] shadow-sm flex flex-col justify-between"
              >
                <div>
                  <span className="font-heading text-sm font-bold text-[#1A3A6B] block mb-3">
                    {phase.phase}
                  </span>
                  <h3 className="font-heading text-xl font-medium text-[#111827] mb-3">
                    {phase.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-[#65655e]">
                    {phase.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action Banner */}
      <section className="bg-[#1A3A6B] py-16 text-white sm:py-20">
        <div className="mx-auto max-w-5xl px-5 text-center sm:px-8">
          <HeartIcon size={36} className="mx-auto mb-4 text-[#F97316]" />
          <h2 className="font-heading text-3xl font-medium sm:text-4xl">
            $15 (₦15,000) provides a child with a durable pair of school shoes & socks
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base text-white/80 leading-relaxed sm:text-lg">
            Your gift protects a child&apos;s feet from infection and gives them the confidence to walk proudly into class every single morning.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link
              href="/donate"
              className="rounded-xl bg-white px-7 py-3.5 text-base font-semibold text-[#1A3A6B] hover:bg-[#FFFFFF] transition-colors shadow-lg"
            >
              Donate Now
            </Link>
            <Link
              href="/programs"
              className="rounded-xl border border-white/40 px-7 py-3.5 text-base font-medium text-white hover:bg-white/10 transition-colors"
            >
              View All Programs
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
