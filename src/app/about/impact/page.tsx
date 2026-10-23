import type { Metadata } from "next";
import Image from "@/components/ui/RealImage";
import Link from "next/link";
import AboutPageIntro from "@/components/about/AboutPageIntro";

export const metadata: Metadata = {
  title: "Our Impact | Shoe My Feet Foundation",
  description: "See the children, schools, and volunteers reached in Shoe My Feet Foundation’s 2022–2024 outreach report.",
};

const figures = [
  { value: "3,000", label: "pairs of shoes distributed" },
  { value: "3,000", label: "pupils reached" },
  { value: "8", label: "schools visited" },
  { value: "20", label: "volunteers involved" },
];

export default function AboutImpactPage() {
  return (
    <>
      <AboutPageIntro
        eyebrow="Impact · 2022–2024"
        title="One pair. A safer walk to school."
        description="The attached outreach report records 3,000 pairs distributed to 3,000 pupils across eight school visits, with 20 volunteers participating."
        image="/images/children_walking_school.jpg"
        imageAlt="Children walking together on their way to school"
      />
      <section className="bg-white py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="grid gap-8 border-y border-[#F3F4F6] py-10 sm:grid-cols-2 lg:grid-cols-4">
            {figures.map((figure) => (
              <div key={figure.label} className="border-l-2 border-[#F97316] pl-5">
                <p className="font-heading text-4xl font-medium text-[#111827] sm:text-5xl">{figure.value}</p>
                <p className="mt-2 max-w-[12rem] text-sm leading-6 text-[#65655e]">{figure.label}</p>
              </div>
            ))}
          </div>
          <div className="mt-14 grid items-center gap-10 lg:grid-cols-[1fr_1fr] lg:gap-16">
            <div>
              <p className="mb-3 text-sm font-semibold uppercase tracking-[0.12em] text-[#1A3A6B]">Beyond the count</p>
              <h2 className="font-heading text-3xl font-medium leading-tight text-[#111827] sm:text-4xl">A school visit is personal work.</h2>
              <p className="mt-5 max-w-xl text-base leading-7 text-[#565650]">
                Each distribution is an opportunity to meet children where they learn, prepare footwear for the visit, and make sure support reaches pupils directly. The figures are important because they represent real school communities, not just totals.
              </p>
              <Link href="/about/report" className="mt-7 inline-block border-b border-[#1A3A6B] pb-1 text-sm font-medium text-[#8f3710]">Read the school-by-school report</Link>
            </div>
            <div className="relative aspect-[4/3] overflow-hidden bg-[#F3F4F6]">
              <Image src="/images/distribution.jpg" alt="School shoe distribution reaching children directly" fill className="object-cover" sizes="(max-width: 1024px) 100vw, 50vw" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
