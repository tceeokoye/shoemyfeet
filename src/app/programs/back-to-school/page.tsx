import type { Metadata } from "next";
import Link from "next/link";
import FastImage from "@/components/ui/FastImage";
import ProgramPageIntro from "@/components/programs/ProgramPageIntro";
import { ArrowRightIcon, GraduationCapIcon } from "@/components/ui/Icons";

export const metadata: Metadata = {
  title: "Back-to-School Campaign | Shoe My Feet Foundation",
  description:
    "Equipping underserved pupils with school shoes and essentials before each academic term across Nigeria.",
};

const terms = [
  {
    name: "Term 1 (September - December)",
    focus: "New Academic Session Launch",
    description:
      "Our largest campaign of the year, providing first-year pupils and returning students with durable shoes as they enter new classes and schools.",
  },
  {
    name: "Term 2 (January - April)",
    focus: "Mid-Year Replacement & Retention",
    description:
      "Targeting children whose footwear broke down during the harmattan season, preventing dropout spikes between terms.",
  },
  {
    name: "Term 3 (April - July)",
    focus: "Examination & Promotion Preparation",
    description:
      "Ensuring children remain equipped and motivated as they sit for critical promotion and state examinations.",
  },
];

const benefits = [
  "Prevents pupils from being sent home for uniform/shoe code non-compliance",
  "Boosts classroom attendance by an average of 34% within the first month",
  "Shields parents and guardians from distressing financial pressure at term start",
  "Promotes equal dignity — no child feels singled out or ashamed among peers",
];

export default function BackToSchoolPage() {
  return (
    <>
      <ProgramPageIntro
        eyebrow="Seasonal Campaign · Back-to-School"
        title={
          <>
            Starting the school term with <span className="text-[#142E56]">confidence.</span>
          </>
        }
        description="Every academic session, we equip vulnerable pupils with school shoes before resumption so no child is turned away or held back by a lack of basic footwear."
        image="/images/children_walking_school.jpg"
        imageAlt="Schoolchildren walking proudly together on resumption day"
      >
        <Link href="/donate" className="btn-primary">
          Sponsor a Back-to-School Pack
        </Link>
        <Link
          href="/contact"
          className="inline-flex items-center gap-2 border-b border-[#1A3A6B] pb-1 text-sm font-medium text-[#1A3A6B] hover:text-[#142E56] transition-colors"
        >
          Partner as a School <ArrowRightIcon size={16} />
        </Link>
      </ProgramPageIntro>

      {/* Narrative Section */}
      <section className="bg-white py-16 sm:py-24">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 sm:px-8 lg:grid-cols-2 lg:gap-16 items-center">
          <div className="relative aspect-[4/3] overflow-hidden bg-[#F3F4F6] rounded-2xl shadow-sm order-2 lg:order-1">
            <FastImage
              src="/images/keeping-children.jpg"
              alt="Pupils in uniforms learning together in class"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>

          <div className="order-1 lg:order-2">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.12em] text-[#1A3A6B]">
              The Resumption Barrier
            </p>
            <h2 className="font-heading text-3xl font-medium leading-tight text-[#111827] sm:text-4xl">
              Why back-to-school timing is critical
            </h2>
            <div className="mt-6 space-y-5 text-base leading-7 text-[#565650]">
              <p>
                In many public schools across Nigeria, resumption day brings anxiety for economically disadvantaged families. School administrations enforce strict uniform regulations requiring closed-toe black or brown shoes.
              </p>
              <p>
                Parents already burdened by textbook fees and PTA levies frequently struggle to afford shoes. Consequently, children are often turned away at the school gate or stay home altogether out of humiliation.
              </p>
              <p>
                Our Back-to-School Campaign steps in weeks before each school term commences. By coordinating directly with headteachers and parent-teacher associations, we ensure footwear is in pupils&apos; hands on day one.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Term Calendar */}
      <section className="bg-[#FFFFFF] py-16 sm:py-24 border-y border-[#e7e5df]">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="max-w-2xl mb-12 sm:mb-16">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.12em] text-[#1A3A6B]">
              Academic Calendar
            </p>
            <h2 className="font-heading text-3xl font-medium text-[#111827] sm:text-4xl">
              Campaign milestones across the school year
            </h2>
            <p className="mt-4 text-base text-[#565650]">
              We run synchronized distributions aligned with the national primary school calendar.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            {terms.map((term, idx) => (
              <div
                key={term.name}
                className="bg-white p-8 rounded-2xl border border-[#e7e5df] shadow-sm flex flex-col justify-between"
              >
                <div>
                  <span className="inline-block px-3 py-1 bg-[#F3F4F6] text-[#1A3A6B] text-xs font-semibold rounded-full mb-4">
                    Phase {idx + 1}
                  </span>
                  <h3 className="font-heading text-xl font-medium text-[#111827] mb-2">
                    {term.name}
                  </h3>
                  <p className="text-xs font-semibold uppercase tracking-wider text-[#1A3A6B] mb-4">
                    {term.focus}
                  </p>
                  <p className="text-sm leading-relaxed text-[#65655e]">
                    {term.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Key Impact Points */}
          <div className="mt-14 bg-white p-8 sm:p-10 rounded-2xl border border-[#e7e5df]">
            <h3 className="font-heading text-2xl font-medium text-[#111827] mb-6">
              Measurable Outcomes of the Campaign
            </h3>
            <div className="grid gap-4 sm:grid-cols-2">
              {benefits.map((b) => (
                <div key={b} className="flex items-start gap-3">
                  <span className="w-2 h-2 rounded-full bg-[#1A3A6B] mt-2 flex-shrink-0" />
                  <p className="text-base text-[#565650]">{b}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Banner */}
      <section className="bg-[#1A3A6B] py-16 text-white sm:py-20">
        <div className="mx-auto max-w-5xl px-5 text-center sm:px-8">
          <GraduationCapIcon size={40} className="mx-auto mb-4 text-[#F97316]" />
          <h2 className="font-heading text-3xl font-medium sm:text-4xl">
            Help a child resume school equipped for success
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base text-white/80 leading-relaxed sm:text-lg">
            Every contribution directly funds a school-compliant pair of shoes and fresh socks for children ready to learn.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link
              href="/donate"
              className="rounded-xl bg-white px-7 py-3.5 text-base font-semibold text-[#1A3A6B] hover:bg-[#FFFFFF] transition-colors shadow-lg"
            >
              Sponsor Now
            </Link>
            <Link
              href="/projects"
              className="rounded-xl border border-white/40 px-7 py-3.5 text-base font-medium text-white hover:bg-white/10 transition-colors"
            >
              Back to Programs
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
