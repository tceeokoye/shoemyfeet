import type { Metadata } from "next";
import Link from "next/link";
import FastImage from "@/components/ui/FastImage";
import ProgramPageIntro from "@/components/programs/ProgramPageIntro";
import { ArrowRightIcon, HeartIcon } from "@/components/ui/Icons";
import { UsersRound } from "lucide-react";

export const metadata: Metadata = {
  title: "Community Outreach | Shoe My Feet Foundation",
  description:
    "Grassroots outreach in remote villages and urban slums across Nigeria, combining shoe distribution with foot health and family engagement.",
};

const pillars = [
  {
    title: "Reaching the Unreached",
    description:
      "We travel beyond city centers into rural villages, riverine settlements, and impoverished urban slums where non-governmental support rarely arrives.",
  },
  {
    title: "Foot Hygiene & Health Education",
    description:
      "Alongside shoe distribution, volunteer healthcare workers teach children and caregivers proper foot washing, nail trimming, and early wound care to prevent soil parasites.",
  },
  {
    title: "Elders & Traditional Leaders",
    description:
      "We build authentic relationships with community chiefs, village elders, and religious leaders, securing local ownership and lasting trust.",
  },
  {
    title: "Celebration & Community Joy",
    description:
      "Outreach days are festive occasions with music, dancing, interactive games, and meals, creating joyful memories for children facing difficult daily lives.",
  },
];

const locations = [
  { state: "Enugu State", focus: "Rural Primary Schools & Farming Communities" },
  { state: "Kaduna State", focus: "Peri-Urban Settlements & Displaced Children" },
  { state: "Edo State", focus: "Border Communities & Riverine Settlements" },
];

export default function CommunityOutreachPage() {
  return (
    <>
      <ProgramPageIntro
        eyebrow="Grassroots Action · Community Outreach"
        title={
          <>
            Meeting families where <span className="text-[#142E56]">need is greatest.</span>
          </>
        }
        description="We journey into rural villages and urban slums to provide school shoes, preventative health education, and warm community solidarity across Nigeria."
        image="/images/community.jpg"
        imageAlt="Community members and children gathered for Shoe My Feet outreach"
      >
        <Link href="/volunteer" className="btn-primary">
          Volunteer for Next Outreach
        </Link>
        <Link
          href="/donate"
          className="inline-flex items-center gap-2 border-b border-[#1A3A6B] pb-1 text-sm font-medium text-[#1A3A6B] hover:text-[#142E56] transition-colors"
        >
          Sponsor an Outreach Drive <ArrowRightIcon size={16} />
        </Link>
      </ProgramPageIntro>

      {/* Narrative Section */}
      <section className="bg-white py-16 sm:py-24">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 sm:px-8 lg:grid-cols-2 lg:gap-16 items-center">
          <div>
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.12em] text-[#1A3A6B]">
              Beyond the School Gates
            </p>
            <h2 className="font-heading text-3xl font-medium leading-tight text-[#111827] sm:text-4xl">
              Bringing hope directly into village squares
            </h2>
            <div className="mt-6 space-y-5 text-base leading-7 text-[#565650]">
              <p>
                Not every child lacking shoes is currently enrolled in a school with an active partnership. In many communities, children work on small family farms, care for younger siblings, or wander barefoot through local markets.
              </p>
              <p>
                Our Community Outreach program takes aid straight to the grassroots. We coordinate with local community leaders, town criers, and church elders to invite families to a central community ground.
              </p>
              <p>
                Here, every child is welcomed with open arms. We inspect their feet for jiggers and infections, clean and disinfect cuts, provide clean socks, and fit them with brand new shoes. We also guide parents on how to keep children in school.
              </p>
            </div>
          </div>

          <div className="relative aspect-[4/3] overflow-hidden bg-[#F3F4F6] rounded-2xl shadow-sm">
            <FastImage
              src="/images/addressing.jpg"
              alt="Community gathering with parents and children listening to outreach leaders"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
        </div>
      </section>

      {/* 4 Pillars of Community Outreach */}
      <section className="bg-[#FFFFFF] py-16 sm:py-24 border-y border-[#e7e5df]">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="max-w-2xl mb-12 sm:mb-16">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.12em] text-[#1A3A6B]">
              Our Holistic Model
            </p>
            <h2 className="font-heading text-3xl font-medium text-[#111827] sm:text-4xl">
              How community outreaches work
            </h2>
            <p className="mt-4 text-base text-[#565650]">
              Shoe distribution is the entry point. Compassion, healthcare, and long-term connection are the lasting impact.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {pillars.map((p) => (
              <div
                key={p.title}
                className="bg-white p-7 rounded-2xl border border-[#e7e5df] shadow-sm flex flex-col justify-between"
              >
                <div>
                  <h3 className="font-heading text-lg font-medium text-[#111827] mb-3">
                    {p.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-[#65655e]">
                    {p.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Active Field Regions */}
          <div className="mt-14 bg-white p-8 sm:p-10 rounded-2xl border border-[#e7e5df]">
            <h3 className="font-heading text-2xl font-medium text-[#111827] mb-6">
              Active Outreach Regions
            </h3>
            <div className="grid gap-6 md:grid-cols-3">
              {locations.map((loc) => (
                <div key={loc.state} className="border-l-2 border-[#1A3A6B] pl-4">
                  <h4 className="font-heading text-lg font-medium text-[#111827]">{loc.state}</h4>
                  <p className="text-sm text-[#65655e] mt-1">{loc.focus}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#1A3A6B] py-16 text-white sm:py-20">
        <div className="mx-auto max-w-5xl px-5 text-center sm:px-8">
          <UsersRound size={38} className="mx-auto mb-4 text-[#F97316]" />
          <h2 className="font-heading text-3xl font-medium sm:text-4xl">
            Join our boots on the ground as a volunteer
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base text-white/80 leading-relaxed sm:text-lg">
            Whether helping with logistics, fitting shoes, or managing crowd flow, your presence lights up a child&apos;s world.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link
              href="/volunteer"
              className="rounded-xl bg-white px-7 py-3.5 text-base font-semibold text-[#1A3A6B] hover:bg-[#FFFFFF] transition-colors shadow-lg"
            >
              Sign Up as a Volunteer
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
