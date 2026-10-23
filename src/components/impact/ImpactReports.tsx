import Link from "next/link";

const documentHref = "/SHOE%20MY%20FEET%20FOUNDATION%20BRIEF%20FOR%20WEBSITE.docx";

const projectReports = [
  {
    title: "Shoe My Feet Outreach Report 2022–2024",
    href: documentHref,
    external: true,
  },
];

const publications = [
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

export function ReportDocumentLink({
  title,
  href,
  external,
}: {
  title: string;
  href: string;
  external?: boolean;
}) {
  return (
    <a
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noreferrer" : undefined}
      aria-label={`Open ${title}`}
      className="group flex flex-col items-center px-2 py-3 text-center"
    >
      <svg
        viewBox="0 0 32 38"
        className="h-9 w-8 shrink-0 text-[#1A3A6B] transition-transform duration-200 group-hover:-translate-y-1"
        fill="none"
        aria-hidden="true"
      >
        <path
          d="M5 1.5h14l8 8V34a2.5 2.5 0 0 1-2.5 2.5h-17A2.5 2.5 0 0 1 5 34V1.5Z"
          fill="currentColor"
        />
        <path d="M19 1.5v8h8" fill="white" fillOpacity=".9" />
        <path
          d="M19 1.5v8h8M10 17h11M10 21h8"
          stroke="white"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.5"
        />
        <path
          d="M12 29c2-5 4-8 6-9 1-1 2 0 1 1-2 3-6 7-9 8-1 0-1-1 0-1 4-1 9-1 12 0"
          stroke="white"
          strokeLinecap="round"
          strokeWidth="1.5"
        />
      </svg>
      <span className="mt-3 max-w-[14rem] text-sm leading-5 text-[#111827] group-hover:underline group-focus-visible:underline">
        {title}
      </span>
    </a>
  );
}

export default function ImpactReports() {
  return (
    <>
      <section className="bg-white px-5 py-14 sm:px-8 sm:py-20">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-12 md:grid-cols-2 md:gap-10">
            <section id="project-reports" aria-labelledby="project-reports-heading">
              <h2
                id="project-reports-heading"
                className="mb-8 text-center font-heading text-2xl font-bold text-[#1A3A6B] sm:text-3xl"
              >
                Project Reports
              </h2>
              <div className="grid grid-cols-2 gap-x-2 gap-y-7 sm:grid-cols-3">
                {projectReports.map((report) => (
                  <ReportDocumentLink key={report.title} {...report} />
                ))}
              </div>
            </section>

            <section id="annual-reports" aria-labelledby="annual-reports-heading">
              <h2
                id="annual-reports-heading"
                className="mb-8 text-center font-heading text-2xl font-bold text-[#F97316] sm:text-3xl"
              >
                Annual Reports
              </h2>
              <p className="mx-auto max-w-sm border-l-2 border-[#F97316] px-5 py-3 text-center text-sm leading-6 text-[#565650]">
                Annual reports will be listed here when they are available.
              </p>
            </section>
          </div>

          <div className="mt-10 border-t border-[#e7e5df] pt-6 text-center">
            <Link
              href="/about/report"
              className="inline-flex items-center gap-2 text-sm font-semibold text-[#1A3A6B] transition-colors hover:text-[#142E56] hover:underline"
            >
              View the school-by-school distribution register
              <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
      </section>

      <section
        id="publications"
        aria-labelledby="publications-heading"
        className="bg-[#F8F8F7] px-5 py-16 sm:px-8 sm:py-20"
      >
        <div className="mx-auto max-w-6xl">
          <div className="mx-auto mb-10 max-w-2xl text-center sm:mb-14">
            <h2
              id="publications-heading"
              className="font-heading text-3xl font-bold text-[#1A3A6B] sm:text-4xl"
            >
              Publications
            </h2>
          </div>

          <div className="grid grid-cols-2 gap-x-3 gap-y-8 sm:grid-cols-3 lg:grid-cols-5">
            {publications.map((publication) => (
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
    </>
  );
}
