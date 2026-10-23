import type { Metadata } from "next";
import Link from "next/link";
import ImpactReports from "@/components/impact/ImpactReports";

export const metadata: Metadata = {
  title: "Reports & Publications | Shoe My Feet Foundation",
  description:
    "Explore Shoe My Feet Foundation project reports, publications, and programme resources.",
};

export default function ImpactReportsPage() {
  return (
    <>
      <section
        className="relative isolate flex min-h-[520px] items-center justify-center overflow-hidden bg-[#17140f] bg-cover bg-center bg-scroll px-5 py-24 text-center text-white md:min-h-[600px] md:bg-fixed sm:px-8 sm:py-28"
        style={{ backgroundImage: "url('/images/shoe_distribution.jpg')" }}
      >
        <div aria-hidden="true" className="absolute inset-0 z-0 bg-[#111827]/65" />
        <div className="relative z-10 mx-auto max-w-4xl">
          <h1 className="font-heading text-4xl font-extrabold leading-tight text-white sm:text-5xl md:text-6xl">
            Reports &amp; Publications
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-white/90 sm:text-lg">
            Read the reports, programme resources, and stories that document
            our work with children, schools, and communities.
          </p>

          <div className="mt-9 flex flex-wrap justify-center gap-3">
            <Link
              href="#project-reports"
              className="rounded-md bg-[#1A3A6B] px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#142E56]"
            >
              Browse reports
            </Link>
            <Link
              href="#publications"
              className="rounded-md border border-white/70 bg-white/10 px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-white/20"
            >
              Explore publications
            </Link>
          </div>
        </div>
      </section>

      <ImpactReports />
    </>
  );
}
