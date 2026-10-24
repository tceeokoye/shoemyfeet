import type { Metadata } from "next";
import Image from "@/components/ui/RealImage";
import TitleSplashBackground from "@/components/ui/TitleSplashBackground";
import { ArrowRightIcon } from "@/components/ui/Icons";
import { ReportDocumentLink } from "@/components/impact/ImpactReports";
import ScrollOverBg from "@/components/ui/scrollOverBg";

export const metadata: Metadata = {
  title: "Reports & Publications | Shoe My Feet Foundation",
  description:
    "Read the Shoe My Feet Foundation outreach report, including school visits, shoe distribution totals, and programme projections.",
};

const documentHref = "/SHOE%20MY%20FEET%20FOUNDATION%20BRIEF%20FOR%20WEBSITE.docx";

const visits = [
  { date: "08 Mar 2022", code: "KSMP-01", school: "Community Primary School", community: "Nkwo-Nike", activity: "Outreach", pairs: 250 },
  { date: "07 Jul 2022", code: "KSMP-02", school: "Central Primary School", community: "Obeagu Ugwuaji, Enugu South", activity: "Outreach", pairs: 170 },
  { date: "03 Mar 2023", code: "KSMP-03", school: "City Primary School", community: "Ngenevu, Enugu North", activity: "Outreach", pairs: 300 },
  { date: "08 Dec 2023", code: "KSMP-04", school: "Central Primary School", community: "Obeagu Ugwuaji, Enugu South", activity: "Outreach", pairs: 500 },
  { date: "10 Dec 2023", code: "KSMP-05", school: "Aria Road Primary School", community: "Enugu North", activity: "Outreach", pairs: 440 },
  { date: "12 Dec 2023", code: "KSMP-06", school: "City Primary School", community: "Ngenevu, Enugu North", activity: "Outreach", pairs: 440 },
  { date: "16 Dec 2023", code: "KSMP-07", school: "Iva Valley Primary School", community: "New Market", activity: "Outreach", pairs: 400 },
  { date: "05 Jun 2024", code: "KSMP-08", school: "Ngwo Primary School", community: "Ngwo", activity: "Outreach", pairs: 500 },
];

const totals = [
  ["3,000", "pairs of shoes distributed"],
  ["3,000", "pupils benefited"],
  ["8", "schools visited"],
  ["20", "volunteers participated"],
];

const projections = [
  { year: "2022", pairs: "3,000" },
  { year: "2024", pairs: "6,000" },
  { year: "2026", pairs: "12,000" },
  { year: "2028", pairs: "24,000" },
  { year: "2030", pairs: "48,000" },
  { year: "2032", pairs: null },
];

const publicationHighlights = [
  {
    title:
      "Sustainable Elimination of Schistosomiasis in Ethiopia - A Five-Year Follow Up Study",
  },
  {
    title:
      "Schistosomiasis Control in Ethiopia: The Role of Snail Mapping in Endemic Communities",
  },
  {
    title:
      "High Prevalence of Soil-Transmitted Helminths and Schistosomiasis Among Primary Schoolchildren in Southwest Ethiopia: The Need for Health Strategies Alongside Mass Drug Administration",
  },
  {
    title:
      "Childhood Intestinal Parasitic Infection and Sanitation Predictors in Rural Dembiya, Northwest Ethiopia",
  },
  {
    title:
      "Deworming School Children in Ethiopia: The Importance of a Comprehensive Approach",
  },
  {
    title:
      "Motivating School Communities Towards Behavior Change and Local Ownership: A Gamification Intervention to Prevent Trachoma at Primary Schools in Southern Ethiopia",
  },
  {
    title:
      "Seasonal and Spatial Dynamics of Freshwater Snails and Schistosomiasis in Mizan Aman, Southwest Ethiopia",
  },
];

export default function DistributionReportPage() {
  return (
    <>
      <ScrollOverBg
        backgroundImage="/images/shoe_distribution.jpg"
        minHeight="min-h-[520px] md:min-h-[600px]"
        className="px-5 py-24 sm:px-8 sm:py-28"
        eyebrow="Shoe My Feet Foundation · Accountability"
        title="Reports & Publications"
        titleTag="h1"
        titleClassName="font-heading text-4xl font-extrabold leading-tight text-white sm:text-5xl md:text-6xl"
        description="Explore reports from Shoe My Feet Foundation programmes and learn how our work is reaching children and school communities."
        descriptionClassName="mx-auto mt-6 max-w-2xl text-base leading-7 text-white/90 sm:text-lg"
        contentClassName="mx-auto max-w-4xl"
        overlayClassName="bg-[#111827]/65"
      />

      <section className="bg-[#F8F8F7] px-5 py-12 sm:px-8 sm:py-16">
        <div className="mx-auto max-w-6xl">
          <h2 className="font-heading text-2xl font-bold text-[#111827] sm:text-3xl">
            Project Reports
          </h2>
          <article className="mt-7 grid overflow-hidden border border-[#e7e5df] bg-white md:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)]">
            <a
              href={documentHref}
              target="_blank"
              rel="noreferrer"
              aria-label="Open the Shoe My Feet Outreach Report"
              className="relative block min-h-72 bg-[#F3F4F6] sm:min-h-96"
            >
              <Image
                src="/report.jpg"
                alt="Preview of the Shoe My Feet Outreach Report, including distribution highlights and timeline projections"
                fill
                priority
                className="object-contain p-4"
                sizes="(max-width: 768px) 100vw, 45vw"
              />
            </a>

            <div className="flex flex-col items-start justify-center p-6 sm:p-9 lg:p-12">
              <p className="text-sm font-semibold uppercase tracking-[0.1em] text-[#1A3A6B]">
                Outreach report · 2022–2024
              </p>
              <h3 className="mt-3 font-heading text-2xl font-bold leading-tight text-[#111827] sm:text-3xl">
                Shoe My Feet Outreach Report
              </h3>
              <p className="mt-4 text-base leading-7 text-[#565650]">
                A summary of our school outreach, shoe distributions, pupils
                reached, and the communities that took part. The report also
                includes the foundation&apos;s timeline projections.
              </p>

              <dl className="mt-6 grid w-full grid-cols-2 gap-x-5 gap-y-4 border-y border-[#e7e5df] py-5">
                {totals.map(([value, label]) => (
                  <div key={label}>
                    <dt className="font-heading text-2xl font-bold text-[#1A3A6B]">
                      {value}
                    </dt>
                    <dd className="mt-1 text-sm leading-5 text-[#565650]">
                      {label}
                    </dd>
                  </div>
                ))}
              </dl>

              <a
                href={documentHref}
                target="_blank"
                rel="noreferrer"
                className="mt-7 inline-flex items-center gap-2 rounded-md bg-[#1A3A6B] px-5 py-3 font-semibold text-white transition-colors hover:bg-[#142E56]"
              >
                View full report
                <ArrowRightIcon size={16} />
              </a>
            </div>
          </article>
        </div>
      </section>

      <section className="bg-[#F8F8F7] px-5 py-12 sm:px-8 sm:py-16">
        <div className="mx-auto max-w-6xl">
          <div className="mx-auto mb-10 max-w-3xl text-center">
            <div className="relative mx-auto flex min-h-[116px] max-w-[560px] items-center justify-center px-6 py-7 sm:min-h-[136px] sm:py-8">
              <TitleSplashBackground variant={2} light />
              <h2 className="relative z-10 font-heading text-2xl font-bold text-[#1A3A6B] sm:text-3xl">
                Publications
              </h2>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-x-3 gap-y-8 sm:grid-cols-3 lg:grid-cols-5">
            {publicationHighlights.map((publication) => (
              <ReportDocumentLink
                key={publication.title}
                title={publication.title}
                href={documentHref}
                external
              />
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white px-5 py-12 sm:px-8 sm:py-16">
        <div className="mx-auto max-w-6xl">
          <div className="max-w-3xl">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.12em] text-[#1A3A6B]">
              Outreach report · 2022–2024
            </p>
            <h2 className="font-heading text-2xl font-bold text-[#111827] sm:text-3xl">
              School distribution register
            </h2>
            <p className="mt-4 text-base leading-7 text-[#565650]">
              The report records eight school visits and 3,000 pairs of shoes
              distributed. The register below presents the reported visit
              details in a readable format.
            </p>
          </div>

          <div className="mt-7 overflow-x-auto border-y border-[#e7e5df]">
            <table className="w-full min-w-[820px] border-collapse text-left text-sm">
              <caption className="sr-only">
                School outreach visits and shoes distributed
              </caption>
              <thead className="bg-[#F8F8F7] text-xs uppercase tracking-[0.08em] text-[#4e4d47]">
                <tr>
                  <th scope="col" className="px-4 py-4 font-medium">Ref.</th>
                  <th scope="col" className="px-4 py-4 font-medium">Date</th>
                  <th scope="col" className="px-4 py-4 font-medium">Code</th>
                  <th scope="col" className="px-4 py-4 font-medium">School</th>
                  <th scope="col" className="px-4 py-4 font-medium">Community</th>
                  <th scope="col" className="px-4 py-4 font-medium">Activity</th>
                  <th scope="col" className="px-4 py-4 text-right font-medium">Pairs</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#e7e5df] text-[#3f3f3a]">
                {visits.map((visit, index) => (
                  <tr key={visit.code} className="odd:bg-white even:bg-[#FAFAF9]">
                    <th scope="row" className="px-4 py-4 font-medium text-[#77766f]">
                      {index + 1}
                    </th>
                    <td className="whitespace-nowrap px-4 py-4">{visit.date}</td>
                    <td className="px-4 py-4 font-medium">{visit.code}</td>
                    <td className="px-4 py-4">{visit.school}</td>
                    <td className="px-4 py-4">{visit.community}</td>
                    <td className="px-4 py-4">{visit.activity}</td>
                    <td className="px-4 py-4 text-right tabular-nums">
                      {visit.pairs.toLocaleString()}
                    </td>
                  </tr>
                ))}
              </tbody>
              <tfoot className="border-t-2 border-[#b8b4aa] bg-[#F8F8F7]">
                <tr>
                  <th
                    scope="row"
                    colSpan={6}
                    className="px-4 py-4 text-left font-medium text-[#34342f]"
                  >
                    Total pairs of shoes distributed to date
                  </th>
                  <td className="px-4 py-4 text-right font-heading text-lg font-bold tabular-nums text-[#111827]">
                    {visits.reduce((total, visit) => total + visit.pairs, 0).toLocaleString()}
                  </td>
                </tr>
              </tfoot>
            </table>
          </div>

          <div className="mt-14">
            <h2 className="font-heading text-2xl font-bold text-[#111827] sm:text-3xl">
              Timeline projections
            </h2>
            <p className="mt-3 max-w-3xl text-sm leading-6 text-[#565650]">
              The figures below are projections shown in the supplied report,
              not additional distribution totals. The document labels 2032 but
              does not show a corresponding figure.
            </p>
            <ol className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
              {projections.map((projection) => (
                <li
                  key={projection.year}
                  className="border-t-2 border-[#1A3A6B] bg-[#F8F8F7] px-4 py-4"
                >
                  <p className="text-sm font-semibold text-[#1A3A6B]">
                    {projection.year}
                  </p>
                  <p className="mt-2 font-heading text-xl font-bold text-[#111827]">
                    {projection.pairs ?? "—"}
                  </p>
                  <p className="mt-1 text-xs text-[#565650]">
                    {projection.pairs ? "pairs projected" : "no figure shown"}
                  </p>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>
    </>
  );
}
