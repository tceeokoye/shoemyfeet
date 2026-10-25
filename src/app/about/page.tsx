import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import ScrollOverBg from "@/components/ui/scrollOverBg";
import RotatingValue from "@/components/about/RotatingValue";

export const metadata: Metadata = {
  title: "About Us | Shoe My Feet Foundation",
  description:
    "Meet the people, purpose, and community work behind Shoe My Feet Foundation.",
};

const team = [
  {
    name: "Philomena Nwajagu",
    role: "Founder & Executive Director",
    image: "/images/MrPhilo.jpeg",
  },
  { name: "Emmanuel Chukwu", role: "Head of Field Operations & Distribution" },
  { name: "Amina Bello", role: "Northern Region Outreach Lead" },
  { name: "David Okafor", role: "Lead Shoemaking & Skills Instructor" },
];

const waysToPartner = [
  {
    title: "Schools & communities",
    description:
      "Help us understand local needs and make school visits and shoe distributions work for each community.",
  },
  {
    title: "Corporate partners",
    description:
      "Work with us to support school shoes, outreach, and practical opportunities for children.",
  },
  {
    title: "Volunteers",
    description:
      "Bring your time and skills to community outreach and help children take confident steps.",
  },
  {
    title: "Donors",
    description:
      "Your support helps provide quality school shoes to children who need them most.",
  },
];

export default function AboutPage() {
  return (
    <>
      <ScrollOverBg
        backgroundImage="/images/keeping-children.jpg"
        backgroundPosition="bg-center"
        minHeight="h-[45vh] min-h-[300px] sm:h-[55vh] sm:min-h-[380px] lg:h-[65vh] lg:min-h-[480px]"
        className="px-5 py-0 sm:px-8"
        overlayClassName="bg-[#111827]/10"
      >
        <div className="mx-auto flex w-full justify-center">
          <h1 className="relative isolate inline-flex min-h-[44px] min-w-[280px] items-center justify-center px-8 py-2 text-center font-heading text-xs font-extrabold uppercase leading-none text-[#1A3A6B] sm:min-w-[300px] sm:text-sm">
            <span
              aria-hidden="true"
              className="absolute inset-0 -z-10 bg-[#F97316] [mask-image:url('/images/challenge-brush.svg')] [mask-position:center] [mask-repeat:no-repeat] [mask-size:100%_100%] [-webkit-mask-image:url('/images/challenge-brush.svg')] [-webkit-mask-position:center] [-webkit-mask-repeat:no-repeat] [-webkit-mask-size:100%_100%]"
            />
            Connect with Us
          </h1>
        </div>
      </ScrollOverBg>

      <section className="bg-white px-5 py-14 text-center sm:px-8 sm:py-20">
        <div className="mx-auto max-w-3xl">
          <p className="mx-auto max-w-2xl text-base leading-7 text-[#565650] sm:text-lg">
            Shoe My Feet Foundation works with schools and communities to provide
            quality school shoes, protect children&apos;s dignity, and help every
            child feel ready to learn.
          </p>
        </div>
      </section>

      <section className="grid lg:min-h-[300px] lg:grid-cols-3">
        <div className="relative min-h-[250px] bg-[#F3F4F6] sm:min-h-[320px]">
          <Image
            src="/images/IMG_9272-01.jpeg"
            alt="Children and community members gathered during an outreach visit"
            fill
            className="object-cover"
            sizes="(max-width: 1024px) 100vw, 33vw"
          />
        </div>

        <div className="flex flex-col justify-center bg-[#F97316] px-7 py-10 text-[#111827] sm:px-10 sm:py-12">
          <p className="text-sm font-bold uppercase tracking-[0.12em] text-[#142E56]">
            Our Values
          </p>
          <RotatingValue />
          <Link
            href="/about/mission"
            className="mt-5 inline-flex w-fit items-center gap-1 text-sm font-semibold text-[#142E56] transition-colors hover:text-[#111827]"
          >
            Read More <span aria-hidden="true">→</span>
          </Link>
        </div>

        <div className="flex flex-col justify-center bg-[#1A3A6B] px-7 py-10 text-white sm:px-10 sm:py-12">
          <p className="text-sm font-bold uppercase tracking-[0.12em] text-[#F97316]">
            History
          </p>
          <p className="mt-3 max-w-md text-sm leading-6 text-white/90">
            Founded on March 8, 2022, by Philomena Nwajagu, the Foundation
            began on International Women&apos;s Day with 100 pairs of school
            shoes. Family and friends soon added 150 more, reaching 250 children
            in its first outreach. It now organizes outreaches every school
            term.
          </p>
        </div>
      </section>

      <section className="bg-[#FAF9F6] px-5 py-14 sm:px-8 sm:py-20">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto mb-16 max-w-5xl text-center">
            <h2 className="relative isolate mx-auto inline-flex min-h-12 min-w-[250px] items-center justify-center px-8 py-2 font-heading text-xl font-extrabold uppercase leading-tight text-white sm:min-w-[330px] sm:text-2xl">
              <span
                aria-hidden="true"
                className="absolute inset-0 -z-10 bg-[#1A3A6B] [mask-image:url('/images/challenge-brush.svg')] [mask-position:center] [mask-repeat:no-repeat] [mask-size:100%_100%] [-webkit-mask-image:url('/images/challenge-brush.svg')] [-webkit-mask-position:center] [-webkit-mask-repeat:no-repeat] [-webkit-mask-size:100%_100%]"
              />
              Our Board
            </h2>
            <p className="mx-auto mt-12 max-w-5xl text-base leading-7 text-[#565650] sm:text-lg">
              Our Board provides leadership, accountability, and responsible
              stewardship as Shoe My Feet Foundation works with children and
              communities.
            </p>
          </div>
          <div className="grid gap-x-6 gap-y-12 sm:grid-cols-2 lg:grid-cols-4">
            {team.map((member) => (
              <article key={member.name} className="text-center">
                <div className="relative mx-auto size-24 overflow-hidden rounded-full bg-[#E8E7E2]">
                  {member.image ? (
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      className="object-cover"
                      sizes="96px"
                    />
                  ) : (
                    <span
                      aria-hidden="true"
                      className="flex size-full items-center justify-center font-heading text-xl font-bold text-[#1A3A6B]"
                    >
                      {member.name
                        .split(" ")
                        .map((part) => part[0])
                        .join("")}
                    </span>
                  )}
                </div>
                <h3 className="mt-5 font-heading text-lg font-bold text-[#1A3A6B]">
                  {member.name}
                </h3>
                <p className="mx-auto mt-2 max-w-[15rem] text-sm leading-6 text-[#565650]">
                  {member.role}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section
        id="team"
        className="scroll-mt-24 bg-[#FAF9F6] px-5 py-14 sm:px-8 sm:py-20"
      >
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto mb-16 max-w-5xl text-center">
            <h2 className="relative isolate mx-auto inline-flex min-h-12 min-w-[250px] items-center justify-center px-8 py-2 font-heading text-xl font-extrabold uppercase leading-tight text-white sm:min-w-[330px] sm:text-2xl">
              <span
                aria-hidden="true"
                className="absolute inset-0 -z-10 bg-[#1A3A6B] [mask-image:url('/images/challenge-brush.svg')] [mask-position:center] [mask-repeat:no-repeat] [mask-size:100%_100%] [-webkit-mask-image:url('/images/challenge-brush.svg')] [-webkit-mask-position:center] [-webkit-mask-repeat:no-repeat] [-webkit-mask-size:100%_100%]"
              />
              Our Team
            </h2>
            <p className="mx-auto mt-12 max-w-5xl text-base leading-7 text-[#565650] sm:text-lg">
              Our dedicated team brings experience, care, and commitment to
              Shoe My Feet Foundation&apos;s work with children and communities.
            </p>
          </div>
          <div className="grid gap-x-6 gap-y-12 sm:grid-cols-2 lg:grid-cols-4">
            {team.map((member) => (
              <article key={member.name} className="text-center">
                <div className="relative mx-auto size-24 overflow-hidden rounded-full bg-[#E8E7E2]">
                  {member.image ? (
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      className="object-cover"
                      sizes="96px"
                    />
                  ) : (
                    <span
                      aria-hidden="true"
                      className="flex size-full items-center justify-center font-heading text-xl font-bold text-[#1A3A6B]"
                    >
                      {member.name
                        .split(" ")
                        .map((part) => part[0])
                        .join("")}
                    </span>
                  )}
                </div>
                <h3 className="mt-5 font-heading text-lg font-bold text-[#1A3A6B]">
                  {member.name}
                </h3>
                <p className="mx-auto mt-2 max-w-[15rem] text-sm leading-6 text-[#565650]">
                  {member.role}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <ScrollOverBg
        backgroundImage="/images/IMG_9272-01.jpeg"
        backgroundPosition="bg-center"
        minHeight="min-h-65 sm:min-h-[300px]"
        className="px-5 py-14 sm:px-8 sm:py-16"
        overlayClassName="bg-[#111827]/70"
        title="Work With Us"
        titleTag="h2"
        titlebgImage="/images/challenge-brush.svg"
        titleClassName="mx-auto mb-4 inline-flex min-h-12 min-w-[250px] items-center justify-center px-8 py-2 font-heading text-xl font-extrabold uppercase leading-tight text-white sm:min-w-[330px] sm:text-2xl"
        description="Join passionate people helping children take confident steps. Email our volunteer team to learn about opportunities with Shoe My Feet Foundation."
        href="mailto:volunteer@shoemyfeet.org"
        linkLabel="volunteer@shoemyfeet.org"
        linkStyle="text"
      />

      <ScrollOverBg
        id="partner-with-us"
        backgroundImage="/images/keeping-children.jpg"
        backgroundPosition="bg-center"
        minHeight="min-h-[560px] sm:min-h-[600px]"
        className="scroll-mt-24 px-5 pt-14 pb-0 sm:px-8 sm:pt-16"
        overlayClassName="bg-[#111827]/80"
      >
        <div className="mx-auto max-w-6xl text-center pb-4">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.14em] text-[#F97316]">
            Partner with us
          </p>
          <h2 className="font-heading text-3xl font-bold leading-tight text-white sm:text-4xl">
            Help more children take their next step.
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-white/90 sm:text-lg">
            We believe lasting change grows through long-term partnerships with
            people and organisations who share our commitment to children.
          </p>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {waysToPartner.map((partner) => (
              <article
                key={partner.title}
                className="flex min-h-52 flex-col justify-center border border-white/80 bg-[#111827]/30 px-5 py-6 text-center backdrop-blur-[2px]"
              >
                <h3 className="font-heading text-lg font-bold text-[#F97316]">
                  {partner.title}
                </h3>
                <p className="mt-3 text-sm leading-6 text-white/95">
                  {partner.description}
                </p>
              </article>
            ))}
          </div>
          <Link
            href="/contact"
            className="mt-7 inline-flex items-center justify-center rounded-[10px] bg-[#F97316] px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#EA580C]"
          >
            Get in touch
          </Link>
        </div>
      </ScrollOverBg>
    </>
  );
}
