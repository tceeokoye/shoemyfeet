import type { Metadata } from "next";
import Link from "next/link";
import FastImage from "@/components/ui/FastImage";
import TitleSplashBackground from "@/components/ui/TitleSplashBackground";
import { ArrowRightIcon } from "@/components/ui/Icons";

export const metadata: Metadata = {
  title: "Tools & Resources | Shoe My Feet Foundation",
  description:
    "Explore Shoe My Feet Foundation programs, ways to participate, and impact resources for children, schools, volunteers, and partners.",
};

const resourceSections = [
  {
    id: "school-partnerships",
    title: "School Shoe Distribution",
    titleShape: 1,
    image: "/images/shoe_distribution.jpg",
    imageAlt: "Schoolchildren gathered with the Shoe My Feet Foundation team",
    introduction:
      "Our flagship programme connects children in underserved communities with durable school shoes. We work with schools to identify need, register pupils, support careful shoe fitting, and make each distribution a welcoming experience for children.",
    resources: [
      {
        title: "School Partnership Program",
        description:
          "See how school leaders and our team identify pupils who need footwear and coordinate a thoughtful school visit.",
        href: "/projects/school-partnerships",
      },
      {
        title: "Shoe Distribution",
        description:
          "Learn about the fitting, school registration, and community participation that shape our distributions.",
        href: "/projects/shoe-distribution",
      },
      {
        title: "Back-to-School Campaign",
        description:
          "Find out how footwear support helps children start the school term ready to learn.",
        href: "/projects/back-to-school",
      },
    ],
  },
  {
    id: "shoemaking-skills",
    title: "Shoemaking Skills & Youth Empowerment",
    titleShape: 2,
    image: "/images/crafting7.jpeg",
    imageAlt: "Young people learning practical shoemaking skills",
    introduction:
      "Launched in 2024, our shoemaking programme equips young people with practical footwear-production and entrepreneurship skills. Participants learn to make school shoes, use shoemaking tools, and develop skills they can share with others.",
    resources: [
      {
        title: "Kids Shoemaking & Skills",
        description:
          "Explore hands-on shoemaking activities that introduce young people to footwear production and practical craft.",
        href: "/projects/kids-shoemaking",
      },
      {
        title: "Corporate Partnerships",
        description:
          "Partner with us to support shoe distributions, skills training, and opportunities for young people.",
        href: "/projects/corporate-partnerships",
      },
      {
        title: "Volunteer With Us",
        description:
          "Contribute your time and experience to programme preparation, training, or community events.",
        href: "/volunteer",
      },
    ],
  },
  {
    id: "school-community-engagement",
    title: "School & Community Engagement",
    titleShape: 3,
    image: "/images/addressing.jpg",
    imageAlt: "Foundation team member engaging with a community audience",
    introduction:
      "Lasting support starts with listening. We work alongside school administrators, teachers, parents, community leaders, and volunteers so outreach reflects local needs and promotes school attendance, dignity, and child wellbeing.",
    resources: [
      {
        title: "Community Outreach",
        description:
          "Learn how we bring footwear support and community participation together through local outreach.",
        href: "/projects/community-outreach",
      },
      {
        title: "Volunteer With Us",
        description:
          "Find ways to help prepare for school visits and make community events welcoming for children.",
        href: "/volunteer",
      },
      {
        title: "School Partnership Program",
        description:
          "Learn how educators and school communities help us understand and respond to pupils' needs.",
        href: "/projects/school-partnerships",
      },
    ],
  },
  {
    id: "impact-and-reports",
    title: "Impact & Learning",
    titleShape: 4,
    image: "/images/happy-kids.jpeg",
    imageAlt: "Children smiling together at a foundation community event",
    introduction:
      "Our approach combines immediate support for children with long-term community empowerment. We share programme updates and stories to show the work underway, learn from each outreach, and build stronger, more self-reliant communities.",
    resources: [
      {
        title: "Impact Reports",
        description:
          "Review programme reporting and learn how we document the reach of our work.",
        href: "/impact/reports",
      },
      {
        title: "Stories of Change",
        description:
          "Read about the children, schools, and communities at the heart of our programmes.",
        href: "/impact/stories",
      },
      {
        title: "Distribution Report",
        description:
          "Explore the recorded school visits and shoe distributions in our report.",
        href: "/about/report",
      },
    ],
  },
] as const;

export default function ToolsPage() {
  return (
    <>
      <section className="bg-white px-5 pb-4 pt-36 sm:px-8 sm:pb-6 sm:pt-40">
        <figure className="relative mx-auto aspect-[24/9] w-full max-w-6xl overflow-hidden bg-white">
          <FastImage
            src="/images/tools-footprint.png"
            alt="Schoolchildren at a Shoe My Feet Foundation event, framed by the foundation’s footprint logo"
            fill
            priority
            className="how-we-work-float object-contain object-center"
            sizes="(max-width: 768px) 100vw, 1152px"
          />
        </figure>
      </section>

      <section className="bg-white px-5 pb-12 pt-4 text-center sm:px-8 sm:pb-16">
        <div className="mx-auto max-w-4xl">
          <h1 className="font-heading text-3xl font-bold text-[#1A3A6B] sm:text-4xl">
            Tools & Resources
          </h1>
          <p className="mx-auto mt-5 max-w-3xl text-base leading-7 text-[#565650] sm:text-lg sm:leading-8">
            We combine school shoe distributions with shoemaking skills and
            community partnerships. Explore how we support children today,
            create opportunities for young people, and work with local
            communities for lasting change.
          </p>
        </div>
      </section>

      {resourceSections.map((section) => (
        <section key={section.id} id={section.id} className="scroll-mt-24">
          <div
            role="img"
            aria-label={section.imageAlt}
            className="relative h-80 overflow-hidden bg-[#1A3A6B] bg-cover bg-center bg-fixed sm:h-96 lg:h-[30rem]"
            style={{ backgroundImage: `url('${section.image}')` }}
          >
            <div aria-hidden="true" className="absolute inset-0 bg-black/35" />
            <div className="absolute inset-x-5 top-1/2 flex -translate-y-1/2 justify-center sm:inset-x-8">
              <h2 className="relative isolate inline-flex min-h-[128px] max-w-full items-center justify-center px-8 py-7 text-center font-heading text-xl font-bold uppercase leading-tight tracking-wide text-white sm:min-h-[144px] sm:px-14 sm:py-8 sm:text-2xl">
                <TitleSplashBackground variant={section.titleShape} />
                <span className="relative z-10">{section.title}</span>
              </h2>
            </div>
          </div>

          <div className="bg-white px-5 py-12 sm:px-8 sm:py-16">
            <div className="mx-auto max-w-5xl">
              <p className="mx-auto mb-10 max-w-3xl text-center text-base leading-7 text-[#565650] sm:mb-12 sm:text-lg sm:leading-8">
                {section.introduction}
              </p>
              <div className="grid gap-x-12 gap-y-3 md:grid-cols-2">
                {section.resources.map((resource) => (
                  <Link
                    key={resource.href}
                    href={resource.href}
                    className="group flex items-start justify-between gap-5 border-b border-[#e7e5df] py-5 transition-colors hover:border-[#1A3A6B]"
                  >
                    <span>
                      <span className="block font-heading text-xl font-semibold text-[#1A3A6B] transition-colors group-hover:text-[#F97316]">
                        {resource.title}
                      </span>
                      <span className="mt-2 block text-sm leading-6 text-[#565650] sm:text-base">
                        {resource.description}
                      </span>
                    </span>
                    <ArrowRightIcon
                      size={18}
                      className="mt-1 shrink-0 text-[#1A3A6B] transition-transform group-hover:translate-x-1"
                    />
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </section>
      ))}
    </>
  );
}
