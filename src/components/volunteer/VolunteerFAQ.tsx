import Link from "next/link";
import { FAQ_ITEMS } from "@/lib/volunteerData";

export default function VolunteerFAQ() {
  return (
    <section id="volunteer-faq" className="bg-[#FFFFFF] py-16 sm:py-20">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <p className="mb-3 text-xs font-medium uppercase tracking-[0.16em] text-[#142E56]">
            Good to know
          </p>
          <h2 className="font-heading text-3xl font-medium leading-tight text-[#111827] sm:text-4xl">
            Common questions
          </h2>
        </div>

        <div className="divide-y divide-[#F3F4F6] border-y border-[#F3F4F6]">
          {FAQ_ITEMS.map((item) => (
            <details key={item.id} className="group py-5">
              <summary className="cursor-pointer list-none pr-6 font-heading text-base font-medium text-[#111827] marker:hidden">
                {item.question}
              </summary>
              <p className="mt-3 max-w-2xl text-sm leading-relaxed text-[#696558]">
                {item.answer}
              </p>
            </details>
          ))}
        </div>

        <p className="mt-6 text-sm text-[#696558]">
          Still have a question?{" "}
          <Link
            href="/contact"
            className="font-medium text-[#1A3A6B] underline underline-offset-4"
          >
            Contact our team
          </Link>
          .
        </p>
      </div>
    </section>
  );
}
