import type { Metadata } from "next";
import Link from "next/link";
import ImpactPageIntro from "@/components/impact/ImpactPageIntro";
import ImpactMap from "@/components/impact/ImpactMap";
import { ArrowRightIcon, MapPinIcon } from "@/components/ui/Icons";

export const metadata: Metadata = {
  title: "Geographic Reach & Map | Shoe My Feet Foundation",
  description:
    "Explore the regional footprint and partner schools of Shoe My Feet Foundation across Enugu, Kaduna, and Edo states in Nigeria.",
};

const regions = [
  {
    state: "Enugu State",
    zone: "South-East Nigeria",
    description:
      "Our birthplace and regional headquarters. We actively partner with public primary schools in Enugu East, Nkanu, Udi, and surrounding agricultural villages, alongside hosting our flagship Shoemaking Academy.",
    stats: "3,800+ pairs · 11 partner schools",
  },
  {
    state: "Kaduna State",
    zone: "North-West Nigeria",
    description:
      "Targeting peri-urban settlements and communities affected by displacement. We work alongside inter-faith educational coalitions and village heads to support vulnerable boys and girls.",
    stats: "1,700+ pairs · 4 partner schools",
  },
  {
    state: "Edo State",
    zone: "South-South Nigeria",
    description:
      "Providing durable footwear to riverine settlements and peri-urban schools where unpaved terrain and mud create severe walking hazards for young pupils during the rainy season.",
    stats: "1,000+ pairs · 3 partner schools",
  },
];

export default function ImpactMapPage() {
  return (
    <>
      <ImpactPageIntro
        eyebrow="Geographic Footprint · Where We Work"
        title={
          <>
            Mapping our presence <span className="text-[#142E56]">across Nigeria.</span>
          </>
        }
        description="We focus on primary schools and rural communities where the need for footwear is acute and external non-profit assistance is scarce. Explore our active operational hubs."
        image="/images/addressing.jpg"
        imageAlt="Shoe My Feet team engaging with parents and community elders"
      >
        <Link href="/volunteer" className="btn-primary">
          Volunteer in Your State
        </Link>
        <Link
          href="/contact"
          className="inline-flex items-center gap-2 border-b border-[#1A3A6B] pb-1 text-sm font-medium text-[#1A3A6B] hover:text-[#142E56] transition-colors"
        >
          Nominate a Community <ArrowRightIcon size={16} />
        </Link>
      </ImpactPageIntro>

      {/* Regional Overviews */}
      <section className="bg-white py-16 sm:py-24 border-b border-[#e7e5df]">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="max-w-2xl mb-12 sm:mb-16">
            <p className="text-sm font-semibold uppercase tracking-[0.12em] text-[#1A3A6B] mb-3">
              Operational Hubs
            </p>
            <h2 className="font-heading text-3xl font-medium text-[#111827] sm:text-4xl">
              Active states & community clusters
            </h2>
            <p className="mt-4 text-base text-[#565650]">
              Every distribution location is selected through ground-level needs assessments and headteacher consultations.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            {regions.map((r) => (
              <div
                key={r.state}
                className="bg-[#FFFFFF] p-8 rounded-2xl border border-[#e7e5df] shadow-sm flex flex-col justify-between"
              >
                <div>
                  <span className="inline-block px-3 py-1 bg-[#F3F4F6] text-[#1A3A6B] text-xs font-semibold rounded-full mb-3">
                    {r.zone}
                  </span>
                  <h3 className="font-heading text-2xl font-medium text-[#111827] mb-2">
                    {r.state}
                  </h3>
                  <p className="text-sm text-[#65655e] leading-relaxed mb-6">
                    {r.description}
                  </p>
                </div>
                <div className="border-t border-[#e7e5df] pt-4">
                  <span className="text-xs font-bold uppercase tracking-wider text-[#1A3A6B]">
                    {r.stats}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Interactive Map Component */}
      <ImpactMap />

      {/* CTA */}
      <section className="bg-[#1A3A6B] py-16 text-white sm:py-20">
        <div className="mx-auto max-w-5xl px-5 text-center sm:px-8">
          <MapPinIcon size={38} className="mx-auto mb-4 text-[#F97316]" />
          <h2 className="font-heading text-3xl font-medium sm:text-4xl">
            Bring Shoe My Feet to your local community
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base text-white/80 leading-relaxed sm:text-lg">
            Do you know a primary school in Nigeria where children walk miles without proper shoes? Partner with us to bring an outreach to their doorstep.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link
              href="/contact"
              className="rounded-xl bg-white px-7 py-3.5 text-base font-semibold text-[#1A3A6B] hover:bg-[#FFFFFF] transition-colors shadow-lg"
            >
              Contact Field Operations
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
