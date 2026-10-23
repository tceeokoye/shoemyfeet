import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, ArrowUpRight, FileText } from "lucide-react";

const documentHref = "/SHOE%20MY%20FEET%20FOUNDATION%20BRIEF%20FOR%20WEBSITE.docx";

export const metadata: Metadata = {
  title: "Shoe My Feet Outreach Report | Shoe My Feet Foundation",
  description: "Open the Shoe My Feet Foundation 2022–2024 outreach report in its document format.",
};

export default function OutreachReportDocumentPage() {
  return (
    <main className="bg-[#f4f4f1] px-5 py-20 sm:px-8">
      <div className="mx-auto max-w-4xl">
        <div className="mb-8 flex items-center justify-between gap-4">
          <Link
            href="/impact/reports"
            className="inline-flex items-center gap-2 rounded-md border border-[#1A3A6B]/20 bg-white px-3 py-2 text-sm font-medium text-[#1A3A6B] transition-colors hover:border-[#1A3A6B]/40 hover:bg-[#F8F8F7]"
          >
            <ArrowLeft size={18} aria-hidden="true" />
            <span>Back to reports</span>
          </Link>

          <a
            href={documentHref}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-md bg-[#1A3A6B] px-4 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-[#142E56]"
          >
            <FileText size={16} aria-hidden="true" />
            Open document
            <ArrowUpRight size={16} aria-hidden="true" />
          </a>
        </div>

        <section className="overflow-hidden rounded-2xl border border-[#e7e5df] bg-white shadow-sm">
          <div className="border-b border-[#e7e5df] bg-[#F8F8F7] px-6 py-5 sm:px-8">
            <p className="text-xs font-semibold uppercase tracking-[0.12em] text-[#565650]">
              Outreach report · 2022–2024
            </p>
            <h1 className="mt-2 font-heading text-2xl font-bold text-[#1A3A6B] sm:text-3xl">
              Shoe My Feet Outreach Report
            </h1>
          </div>

          <div className="flex flex-col gap-8 p-6 sm:p-8">
            <div className="rounded-xl border border-dashed border-[#1A3A6B]/35 bg-[#F8F8F7] p-8 text-center">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-[#F8D77A] text-[#1A3A6B]">
                <FileText size={28} aria-hidden="true" />
              </div>
              <p className="mt-6 text-lg font-semibold text-[#111827]">
                This report is available as a normal document file.
              </p>
              <p className="mt-2 text-sm leading-6 text-[#565650]">
                Use the action above to open the report in a new tab in its original document format.
              </p>
              <a
                href={documentHref}
                target="_blank"
                rel="noreferrer"
                className="mt-6 inline-flex items-center gap-2 rounded-md bg-[#F97316] px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#EA580C]"
              >
                Open report document
                <ArrowUpRight size={16} aria-hidden="true" />
              </a>
            </div>

            <p className="text-sm leading-7 text-[#565650]">
              The Foundation&apos;s outreach report captures the school visits,
              distribution totals, and community outreach milestones documented
              throughout the 2022–2024 programme period.
            </p>
          </div>
        </section>
      </div>
    </main>
  );
}
