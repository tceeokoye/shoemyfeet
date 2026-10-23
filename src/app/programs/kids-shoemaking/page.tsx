import type { Metadata } from "next";
import Link from "next/link";
import FastImage from "@/components/ui/FastImage";
import ProgramPageIntro from "@/components/programs/ProgramPageIntro";
import { ArrowRightIcon, SparklesIcon } from "@/components/ui/Icons";

export const metadata: Metadata = {
  title: "Kids Shoemaking & Vocational Skills | Shoe My Feet Foundation",
  description:
    "Empowering youth through hands-on shoemaking craftsmanship, tool training, and entrepreneurship in Nigeria.",
};

const stats = [
  { value: "137+", label: "Youth & children trained" },
  { value: "6 Weeks", label: "Practical cohort curriculum" },
  { value: "100%", label: "Toolkits provided free" },
  { value: "12", label: "Cohort graduate peer-mentors" },
];

const modules = [
  {
    number: "01",
    title: "Foot Anatomy & Pattern Drafting",
    description:
      "Students learn how to measure foot proportions accurately and draft 2D paper patterns for classic school shoe styles, oxfords, and sandals.",
  },
  {
    number: "02",
    title: "Material Selection & Hand Cutting",
    description:
      "Trainees discover how to inspect leather grades, synthetic alternatives, lining materials, and safely use cutting shears and skiving blades.",
  },
  {
    number: "03",
    title: "Upper Assembly & Stitching",
    description:
      "Apprentices practice hand-stitching techniques and operate manual sewing machines to assemble durable, neatly finished shoe uppers.",
  },
  {
    number: "04",
    title: "Lasting, Soling & Finishing",
    description:
      "Pulling uppers over wooden and plastic lasts, applying strong adhesives, bonding durable rubber soles, and polishing the final product.",
  },
  {
    number: "05",
    title: "Pricing & Micro-Business Basics",
    description:
      "Beyond technical craft, youth learn costing, calculating material margins, customer care, and how to start a small shoe repair or making business.",
  },
];

export default function KidsShoemakingPage() {
  return (
    <>
      <ProgramPageIntro
        eyebrow="Empowerment & Craftsmanship · Shoemaking"
        title={
          <>
            From shoe recipients to <span className="text-[#142E56]">skilled creators.</span>
          </>
        }
        description="Launched in 2024, our shoemaking workshop trains young people in practical footwear production, design, and micro-entrepreneurship — building sustainable livelihoods from the ground up."
        image="/images/crafting7.jpeg"
        imageAlt="A young trainee in the shoemaking workshop carefully assembling leather footwear"
      >
        <Link href="/donate" className="btn-primary">
          Sponsor an Apprentice Toolkit
        </Link>
        <Link
          href="/gallery/photos"
          className="inline-flex items-center gap-2 border-b border-[#1A3A6B] pb-1 text-sm font-medium text-[#1A3A6B] hover:text-[#142E56] transition-colors"
        >
          View Workshop Gallery <ArrowRightIcon size={16} />
        </Link>
      </ProgramPageIntro>

      {/* Stats */}
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
        <div className="mx-auto grid max-w-7xl gap-12 px-5 sm:px-8 lg:grid-cols-2 lg:gap-16 items-center">
          <div>
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.12em] text-[#1A3A6B]">
              Sustainable Craftsmanship
            </p>
            <h2 className="font-heading text-3xl font-medium leading-tight text-[#111827] sm:text-4xl">
              Transforming dependence into self-reliance
            </h2>
            <div className="mt-6 space-y-5 text-base leading-7 text-[#565650]">
              <p>
                While donating imported shoes provides immediate relief, we asked ourselves: how do we empower communities to produce durable footwear locally and create jobs for future generations?
              </p>
              <p>
                In early 2024, Shoe My Feet Foundation established the Kids & Youth Shoemaking Academy. The workshop provides free vocational apprenticeships to teenage boys and girls from underserved backgrounds.
              </p>
              <p>
                Trainees work under experienced master shoemakers, mastering every step from raw hide to completed school shoes. Graduates not only create shoes for themselves and siblings, but also gain the self-belief and technical skills to earn income.
              </p>
            </div>
          </div>

          <div className="relative aspect-[4/3] overflow-hidden bg-[#F3F4F6] rounded-2xl shadow-sm">
            <FastImage
              src="/images/crafting1.jpeg"
              alt="Hands of an apprentice cutting pattern leather in the shoemaking workshop"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
        </div>
      </section>

      {/* Workshop Modules */}
      <section className="bg-[#FFFFFF] py-16 sm:py-24 border-y border-[#e7e5df]">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="max-w-2xl mb-12 sm:mb-16">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.12em] text-[#1A3A6B]">
              Curriculum & Skillsets
            </p>
            <h2 className="font-heading text-3xl font-medium text-[#111827] sm:text-4xl">
              What apprentices learn in our workshops
            </h2>
            <p className="mt-4 text-base text-[#565650]">
              Our six-week practical curriculum takes learners from complete beginners to producing market-ready shoes.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {modules.map((m) => (
              <div
                key={m.number}
                className="bg-white p-7 rounded-2xl border border-[#e7e5df] shadow-sm flex flex-col justify-between"
              >
                <div>
                  <span className="font-heading text-xs font-bold text-[#1A3A6B] uppercase tracking-wider block mb-2">
                    Module {m.number}
                  </span>
                  <h3 className="font-heading text-lg font-medium text-[#111827] mb-3">
                    {m.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-[#65655e]">
                    {m.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#1A3A6B] py-16 text-white sm:py-20">
        <div className="mx-auto max-w-5xl px-5 text-center sm:px-8">
          <SparklesIcon size={38} className="mx-auto mb-4 text-[#F97316]" />
          <h2 className="font-heading text-3xl font-medium sm:text-4xl">
            Sponsor an apprentice toolkit & workshop training
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base text-white/80 leading-relaxed sm:text-lg">
            $50 (₦50,000) provides an apprentice with their complete starter tool kit: cutting shears, lasting pliers, measuring tapes, and leather materials.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link
              href="/donate"
              className="rounded-xl bg-white px-7 py-3.5 text-base font-semibold text-[#1A3A6B] hover:bg-[#FFFFFF] transition-colors shadow-lg"
            >
              Support an Apprentice
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
