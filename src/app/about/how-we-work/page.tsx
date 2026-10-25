import type { Metadata } from "next";
import FastImage from "@/components/ui/FastImage";
import ScrollOverBg from "@/components/ui/scrollOverBg";

export const metadata: Metadata = {
  title: "The Need & Our Solution | Shoe My Feet Foundation",
  description:
    "Learn why access to well-fitting school shoes matters and how Shoe My Feet Foundation works with schools and communities to support children.",
};

const solutionPillars = [
  {
    number: "01",
    title: "Listen to children and communities",
    description:
      "We work with schools, families, and community leaders to understand where the need is greatest and how outreach can best serve children.",
    image: "/images/addressing.jpg",
    alt: "A community member speaking with children during an outreach",
  },
  {
    number: "02",
    title: "Put fit and comfort first",
    description:
      "Children receive shoes through a careful, personal process that gives them the chance to try on a pair and walk comfortably.",
    image: "/images/shoe_distribution.jpg",
    alt: "Shoes prepared for children at a school distribution",
  },
  {
    number: "03",
    title: "Show up where children learn",
    description:
      "School partnerships help us bring support directly to pupils and work with educators to make distribution welcoming and organized.",
    image: "/images/everychild-needs.jpeg",
    alt: "Children gathering at school during a Shoe My Feet Foundation visit",
  },
  {
    number: "04",
    title: "Make room for skills to grow",
    description:
      "Our shoemaking activities introduce young people to practical craft skills and the confidence that comes from learning by doing.",
    image: "/images/crafting6.jpeg",
    alt: "A young person learning practical shoemaking skills",
  },
];

export default function HowWeWorkPage() {
  return (
    <>
      <section className="bg-white px-5 pb-12 pt-36 sm:px-8 sm:pb-16 sm:pt-40">
        <figure className="relative mx-auto aspect-[24/9] w-full max-w-6xl overflow-hidden bg-white">
          <FastImage
            src="/images/how-we-work-footprint.png"
            alt="Schoolchildren at a Shoe My Feet Foundation event, framed by the foundation's footprint logo"
            fill
            priority
            className="how-we-work-float object-contain object-center"
            sizes="(max-width: 768px) 100vw, 1152px"
          />
        </figure>
      </section>

      <section
        id="need"
        className="scroll-mt-28 bg-white px-5 pb-16 sm:px-8 sm:pb-20"
      >
        <div className="mx-auto max-w-4xl text-center">
          <h1 className="font-heading text-3xl font-semibold text-[#1A3A6B] sm:text-4xl">
            The Need
          </h1>
          <p className="mx-auto mt-5 max-w-3xl text-base leading-7 text-[#565650] sm:text-lg sm:leading-8">
            For children who do not have reliable, well-fitting school shoes,
            the journey to class can mean walking over rough ground with feet
            exposed to cuts, discomfort, and infection. Missing footwear can
            also affect a child&apos;s confidence and sense of belonging at
            school, while the cost of replacing shoes can add pressure for
            families already making difficult choices.
          </p>
        </div>
      </section>

      <ScrollOverBg
        backgroundImage="/images/shoe_distribution.jpg"
        minHeight="min-h-[380px]"
        className="px-5 py-20 sm:px-8 sm:py-24"
        description={
          <>
            No child should have to choose between protecting their feet and
            showing up ready to learn.
          </>
        }
        descriptionClassName="mx-auto max-w-4xl font-heading text-2xl font-semibold leading-snug text-white sm:text-3xl"
      />
      <section
        id="solution"
        className="scroll-mt-28 bg-white px-5 py-16 sm:px-8 sm:py-24"
      >
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="font-heading text-3xl font-semibold text-[#1A3A6B] sm:text-4xl">
            Solution
          </h2>
          <p className="mx-auto mt-5 max-w-3xl text-base leading-7 text-[#565650] sm:text-lg sm:leading-8">
            We work alongside schools and communities to connect children with
            durable, well-fitting shoes and create opportunities to learn
            practical skills. By listening first and staying connected with
            local partners, we make each visit thoughtful, personal, and
            grounded in the needs of the children it serves.
          </p>
        </div>

        <div className="mx-auto mt-12 grid max-w-6xl gap-x-8 gap-y-12 sm:grid-cols-2 lg:mt-16">
          {solutionPillars.map((pillar) => (
            <article
              key={pillar.number}
              className="grid items-center gap-5 sm:grid-cols-[0.9fr_1.1fr] sm:gap-6"
            >
              <div className="relative aspect-[4/3] overflow-hidden bg-[#F3F4F6]">
                <FastImage
                  src={pillar.image}
                  alt={pillar.alt}
                  fill
                  className="object-cover"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 540px"
                />
              </div>
              <div>
                <h3 className="font-heading text-xl font-semibold leading-snug text-[#111827] sm:text-2xl">
                  {pillar.title}
                </h3>
                <p className="mt-3 text-sm leading-6 text-[#565650] sm:text-base sm:leading-7">
                  {pillar.description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <ScrollOverBg
        backgroundImage="/images/shoe_distribution.jpg"
        minHeight="min-h-[340px] sm:min-h-[400px]"
        className="px-5 py-14 sm:px-8 sm:py-16"
        overlayClassName="bg-black/65"
        title="Help a child take their next step"
        titleTag="h2"
        titleClassName="font-heading text-2xl font-semibold !text-white sm:text-3xl"
        description="Your support helps bring shoes, skills, and more opportunities within reach for children and communities."
        descriptionClassName="mx-auto mt-4 max-w-2xl text-base leading-7 text-white/85"
        href="/donate"
        linkLabel="Support the work"
        linkStyle="white"
        secondaryHref="/projects"
        secondaryLinkLabel="Explore our programs"
        secondaryLinkStyle="outline"
      />
    </>
  );
}
