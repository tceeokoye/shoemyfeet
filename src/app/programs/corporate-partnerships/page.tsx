import type { Metadata } from "next";
import Link from "next/link";
import FastImage from "@/components/ui/FastImage";
import ProgramPageIntro from "@/components/programs/ProgramPageIntro";
import { ArrowRightIcon, CheckCircleIcon } from "@/components/ui/Icons";
import { Building2 } from "lucide-react";

export const metadata: Metadata = {
  title: "Corporate Partnerships & CSR | Shoe My Feet Foundation",
  description:
    "Partner with Shoe My Feet Foundation through corporate social responsibility sponsorships, employee volunteering, and matching donations in Nigeria.",
};

const partnershipModels = [
  {
    title: "Adopt-a-School Sponsorship",
    description:
      "Fully sponsor an entire primary school (200 - 600 pupils) with brand-new school shoes, socks, and foot hygiene packs, documented with a dedicated impact report and media package.",
  },
  {
    title: "Corporate Matching Gifts",
    description:
      "Double your employees' generosity by establishing a 1:1 or 2:1 corporate matching gift fund, multiplying the total number of children equipped.",
  },
  {
    title: "Employee Volunteer Days",
    description:
      "Engage your executive and operational staff in hands-on field volunteer outreach — sorting shoes, sizing pupils, and experiencing firsthand the direct smiles and community impact.",
  },
  {
    title: "In-Kind Logistics & Supply Support",
    description:
      "Support our supply chain through transport, warehousing, shoe production materials, or leathercraft tools for our vocational workshops.",
  },
];

const deliverables = [
  "Comprehensive ESG & Impact Report with verified pupil counts and school GPS data",
  "Professional high-definition photo and 4K documentary video package for company channels",
  "Co-branding on distribution day backdrops, banners, and digital announcements",
  "Official Corporate Affairs Commission (CAC) trustee receipts for tax and audit compliance",
];

export default function CorporatePartnershipsPage() {
  return (
    <>
      <ProgramPageIntro
        eyebrow="Business & CSR · Corporate Partnerships"
        title={
          <>
            Purpose-driven partnerships with <span className="text-[#142E56]">measurable impact.</span>
          </>
        }
        description="Partner with Shoe My Feet Foundation to achieve your corporate social responsibility goals through transparent, verified community initiatives that change children's lives."
        image="/images/volunteers.jpg"
        imageAlt="Corporate team and foundation volunteers celebrating an outreach event"
      >
        <Link href="/contact" className="btn-primary">
          Connect with Partnerships Desk
        </Link>
        <Link
          href="/donate"
          className="inline-flex items-center gap-2 border-b border-[#1A3A6B] pb-1 text-sm font-medium text-[#1A3A6B] hover:text-[#142E56] transition-colors"
        >
          Corporate Giving Options <ArrowRightIcon size={16} />
        </Link>
      </ProgramPageIntro>

      {/* Narrative Section */}
      <section className="bg-white py-16 sm:py-24">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 sm:px-8 lg:grid-cols-2 lg:gap-16 items-center">
          <div>
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.12em] text-[#1A3A6B]">
              Strategic CSR
            </p>
            <h2 className="font-heading text-3xl font-medium leading-tight text-[#111827] sm:text-4xl">
              Turn corporate goodwill into tangible human transformation
            </h2>
            <div className="mt-6 space-y-5 text-base leading-7 text-[#565650]">
              <p>
                Modern corporations understand that impactful CSR is not just about writing checks — it is about measurable, sustainable social investment that aligns with United Nations Sustainable Development Goals (SDG 1: No Poverty, SDG 3: Good Health, SDG 4: Quality Education).
              </p>
              <p>
                Shoe My Feet Foundation works with leading Nigerian enterprises, banks, tech companies, and multinational corporations to design tailored CSR initiatives that reflect their core values.
              </p>
              <p>
                Whether sponsoring 500 pairs of shoes for a rural school district or organizing an unforgettable employee volunteer day, we handle full field logistics, school coordination, and verifiable reporting from end to end.
              </p>
            </div>
          </div>

          <div className="relative aspect-[4/3] overflow-hidden bg-[#F3F4F6] rounded-2xl shadow-sm">
            <FastImage
              src="/images/happy-kids.jpeg"
              alt="School children smiling happily with their new school shoes"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
        </div>
      </section>

      {/* 4 Partnership Models */}
      <section className="bg-[#FFFFFF] py-16 sm:py-24 border-y border-[#e7e5df]">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="max-w-2xl mb-12 sm:mb-16">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.12em] text-[#1A3A6B]">
              Collaboration Pathways
            </p>
            <h2 className="font-heading text-3xl font-medium text-[#111827] sm:text-4xl">
              How companies partner with us
            </h2>
            <p className="mt-4 text-base text-[#565650]">
              Flexible engagement options customized for your company size, CSR budget, and staff engagement goals.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {partnershipModels.map((m) => (
              <div
                key={m.title}
                className="bg-white p-8 rounded-2xl border border-[#e7e5df] shadow-sm flex flex-col justify-between"
              >
                <div>
                  <h3 className="font-heading text-xl font-medium text-[#111827] mb-3">
                    {m.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-[#65655e]">
                    {m.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Partner Deliverables */}
          <div className="mt-14 bg-white p-8 sm:p-10 rounded-2xl border border-[#e7e5df]">
            <h3 className="font-heading text-2xl font-medium text-[#111827] mb-6">
              What We Deliver to Corporate Partners
            </h3>
            <div className="grid gap-4 sm:grid-cols-2">
              {deliverables.map((d) => (
                <div key={d} className="flex items-start gap-3">
                  <span className="w-2 h-2 rounded-full bg-[#1A3A6B] mt-2 flex-shrink-0" />
                  <p className="text-base text-[#565650]">{d}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#1A3A6B] py-16 text-white sm:py-20">
        <div className="mx-auto max-w-5xl px-5 text-center sm:px-8">
          <Building2 size={40} className="mx-auto mb-4 text-[#F97316]" />
          <h2 className="font-heading text-3xl font-medium sm:text-4xl">
            Ready to design your organization&apos;s CSR initiative?
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base text-white/80 leading-relaxed sm:text-lg">
            Reach out to our partnerships team today for our Corporate Partnership Deck, budget tiers, and case studies.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link
              href="/contact"
              className="rounded-xl bg-white px-7 py-3.5 text-base font-semibold text-[#1A3A6B] hover:bg-[#FFFFFF] transition-colors shadow-lg"
            >
              Contact Corporate Desk
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
