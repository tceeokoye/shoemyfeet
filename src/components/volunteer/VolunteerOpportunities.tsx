import Link from "next/link";
import { VOLUNTEER_ROLES } from "@/lib/volunteerData";

export default function VolunteerOpportunities() {
  return (
    <section id="volunteer-opportunities" className="bg-white py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mb-8 max-w-2xl">
          <p className="mb-3 text-xs font-medium uppercase tracking-[0.16em] text-[#142E56]">
            Ways to help
          </p>
          <h2 className="font-heading text-3xl font-medium leading-tight text-[#111827] sm:text-4xl">
            Find a role that fits
          </h2>
          <p className="mt-3 text-base leading-relaxed text-[#696558]">
            Volunteer in the field, support local schools, or help us organize
            donations and events.
          </p>
        </div>

        <div className="grid gap-x-10 md:grid-cols-2">
          {VOLUNTEER_ROLES.slice(0, 4).map((role) => (
            <article key={role.id} className="border-t border-[#F3F4F6] py-5">
              <div className="mb-2 flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                <h3 className="font-heading text-lg font-medium text-[#111827]">
                  {role.title}
                </h3>
                <span className="text-xs text-[#696558]">{role.commitment}</span>
              </div>
              <p className="text-sm leading-relaxed text-[#696558]">
                {role.description}
              </p>
            </article>
          ))}
        </div>

        <p className="mt-5 text-sm text-[#696558]">
          Looking for another way to contribute?{" "}
          <Link
            href="#volunteer-form"
            className="font-medium text-[#1A3A6B] underline underline-offset-4"
          >
            Browse all roles in the application
          </Link>
          .
        </p>
      </div>
    </section>
  );
}
