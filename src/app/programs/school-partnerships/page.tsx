import type { Metadata } from "next";
import Link from "next/link";
import FastImage from "@/components/ui/FastImage";
import ProgramPageIntro from "@/components/programs/ProgramPageIntro";
import { ArrowRightIcon } from "@/components/ui/Icons";
import { School } from "lucide-react";

export const metadata: Metadata = {
  title: "School Partnership Program | Shoe My Feet Foundation",
  description:
    "Collaborating with public primary and secondary schools across Nigeria to identify vulnerable pupils and deliver footwear support.",
};

const partnershipSteps = [
  {
    step: "01",
    title: "School Nomination & Application",
    description:
      "Public primary school principals, teachers, or community members submit a simple partnership request detailing school enrollment and estimated footwear needs.",
  },
  {
    step: "02",
    title: "On-Site Verification & Sizing",
    description:
      "A foundation representative visits the school premises, meets the headteacher and class teachers, and compiles an exact sizing roster of pupils needing footwear.",
  },
  {
    step: "03",
    title: "Distribution Day Assembly",
    description:
      "We stage a joyful school assembly where every identified child receives fitted shoes, new socks, and words of encouragement in front of their peers.",
  },
  {
    step: "04",
    title: "Quarterly Attendance Reporting",
    description:
      "Partner schools report back on pupil attendance, class participation, and punctuality, helping us document long-term educational impact.",
  },
];

const criteria = [
  "Government-run or community-supported non-fee primary schools",
  "Schools located in rural, peri-urban, or economically disadvantaged areas",
  "Willingness of headteachers and teachers to assist with sizing and follow-up data",
  "Commitment to non-discriminatory distribution based strictly on need",
];

export default function SchoolPartnershipsPage() {
  return (
    <>
      <ProgramPageIntro
        eyebrow="Institutional Collaboration · School Partnerships"
        title={
          <>
            Partnering with educators to <span className="text-[#142E56]">keep children in class.</span>
          </>
        }
        description="We collaborate directly with primary school headteachers and PTAs to identify children who need shoes most, turning schools into centers of dignity and academic readiness."
        image="/images/gallery5.jpg"
        imageAlt="School children in uniform standing with teachers and foundation team"
      >
        <Link href="/contact" className="btn-primary">
          Nominate a School
        </Link>
        <Link
          href="/about/report"
          className="inline-flex items-center gap-2 border-b border-[#1A3A6B] pb-1 text-sm font-medium text-[#1A3A6B] hover:text-[#142E56] transition-colors"
        >
          Read School Reports <ArrowRightIcon size={16} />
        </Link>
      </ProgramPageIntro>

      {/* Narrative Section */}
      <section className="bg-white py-16 sm:py-24">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 sm:px-8 lg:grid-cols-2 lg:gap-16 items-center">
          <div className="relative aspect-[4/3] overflow-hidden bg-[#F3F4F6] rounded-2xl shadow-sm order-2 lg:order-1">
            <FastImage
              src="/images/keeping-children.jpg"
              alt="School assembly with children wearing new school shoes"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>

          <div className="order-1 lg:order-2">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.12em] text-[#1A3A6B]">
              Teachers Are Trusted Allies
            </p>
            <h2 className="font-heading text-3xl font-medium leading-tight text-[#111827] sm:text-4xl">
              Why school partnerships deliver the deepest results
            </h2>
            <div className="mt-6 space-y-5 text-base leading-7 text-[#565650]">
              <p>
                No one understands the daily challenges of students better than classroom teachers and headmistresses. They know which child walks miles with bleeding soles, which pupil stays away whenever it rains, and which family cannot afford uniform footwear.
              </p>
              <p>
                By establishing formal partnerships with public schools, we avoid favoritism and guarantee that aid reaches the pupils in greatest distress.
              </p>
              <p>
                Our partner schools act as trusted hubs for distribution, sizing, health talks, and continuous impact monitoring. Together, we ensure every child feels proud to stand in the morning assembly line.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How Partnerships Work */}
      <section className="bg-[#FFFFFF] py-16 sm:py-24 border-y border-[#e7e5df]">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="max-w-2xl mb-12 sm:mb-16">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.12em] text-[#1A3A6B]">
              The Collaboration Process
            </p>
            <h2 className="font-heading text-3xl font-medium text-[#111827] sm:text-4xl">
              From school request to distribution day
            </h2>
            <p className="mt-4 text-base text-[#565650]">
              A four-step collaborative pathway designed to minimize administrative burden on teachers while maximizing pupil impact.
            </p>
          </div>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {partnershipSteps.map((p) => (
              <div
                key={p.step}
                className="bg-white p-7 rounded-2xl border border-[#e7e5df] shadow-sm flex flex-col justify-between"
              >
                <div>
                  <span className="font-heading text-sm font-bold text-[#1A3A6B] block mb-3">
                    {p.step}
                  </span>
                  <h3 className="font-heading text-xl font-medium text-[#111827] mb-3">
                    {p.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-[#65655e]">
                    {p.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Eligibility Criteria */}
          <div className="mt-14 bg-white p-8 sm:p-10 rounded-2xl border border-[#e7e5df]">
            <h3 className="font-heading text-2xl font-medium text-[#111827] mb-6">
              Criteria for School Partnership
            </h3>
            <div className="grid gap-4 sm:grid-cols-2">
              {criteria.map((c) => (
                <div key={c} className="flex items-start gap-3">
                  <span className="w-2 h-2 rounded-full bg-[#1A3A6B] mt-2 flex-shrink-0" />
                  <p className="text-base text-[#565650]">{c}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#1A3A6B] py-16 text-white sm:py-20">
        <div className="mx-auto max-w-5xl px-5 text-center sm:px-8">
          <School size={40} className="mx-auto mb-4 text-[#F97316]" />
          <h2 className="font-heading text-3xl font-medium sm:text-4xl">
            Are you a school administrator or teacher?
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base text-white/80 leading-relaxed sm:text-lg">
            Connect with our schools desk to nominate your primary school or discuss bringing a shoe distribution to your pupils.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link
              href="/contact"
              className="rounded-xl bg-white px-7 py-3.5 text-base font-semibold text-[#1A3A6B] hover:bg-[#FFFFFF] transition-colors shadow-lg"
            >
              Contact Schools Desk
            </Link>
            <Link
              href="/programs"
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
