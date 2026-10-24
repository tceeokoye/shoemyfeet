import type { Metadata } from "next";
import Image from "@/components/ui/RealImage";
import AboutPageIntro from "@/components/about/AboutPageIntro";
import ScrollOverBg from "@/components/ui/scrollOverBg";

export const metadata: Metadata = {
  title: "Our Story | Shoe My Feet Foundation",
  description: "How Shoe My Feet Foundation began with a first fitting of 100 pairs of school shoes.",
};

export default function OurStoryPage() {
  return (
    <>
      <AboutPageIntro
        eyebrow="Our Story"
        title="One first step became a promise to more children."
        description="On International Women’s Day in March 2022, Philomena Nwajagu saw how something as basic as school shoes could shape a child’s safety, confidence, and ability to belong."
        image="/images/founder.jpg"
        imageAlt="Shoe My Feet Foundation founder taking part in community outreach"
      />
      <section className="bg-white py-16 sm:py-24">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 sm:px-8 lg:grid-cols-[1fr_0.85fr] lg:gap-20">
          <article className="max-w-2xl space-y-6 text-lg leading-8 text-[#565650]">
            <p>
              Across Nigerian communities, children were walking long distances to school barefoot. Their feet faced cuts, infections, and rough roads; some pupils also felt excluded when they could not meet school dress requirements.
            </p>
            <p>
              Philomena used her personal savings and support from family to purchase and personally fit the first 100 pairs of school shoes. The work began with a simple belief: every child should be able to arrive at school safely and with dignity.
            </p>
            <p>
              That first effort grew into school outreach, community partnerships, and practical skills programmes. The foundation continues to listen to schools and families so support reaches children in ways that make sense for their daily lives.
            </p>
            <p className="border-l-2 border-[#F97316] pl-5 font-heading text-2xl font-medium leading-snug text-[#111827]">
              The aim has stayed constant: safe, confident school days for every child.
            </p>
          </article>
          <figure>
            <div className="relative aspect-[4/5] overflow-hidden bg-[#F3F4F6]">
              <Image
                src="/images/community.jpg"
                alt="The foundation's founder meeting with children during outreach"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 40vw"
              />
            </div>
            <figcaption className="mt-3 text-sm text-[#6c6c64]">The work starts by showing up and listening.</figcaption>
          </figure>
        </div>
      </section>

      <ScrollOverBg
        backgroundImage="/images/happy-kids.jpeg"
        minHeight="min-h-[420px] sm:min-h-[480px]"
        className="px-5 py-20 sm:px-8"
        overlayClassName="bg-[#111827]/75"
        eyebrow="Our Story · Next Steps"
        title="Help write the next chapter of our story"
        titleTag="h2"
        titleClassName="font-heading text-3xl font-bold leading-tight text-white sm:text-4xl md:text-5xl"
        description="Join us in bringing footwear, dignity, and real hope to more schoolchildren across Nigeria."
        descriptionClassName="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-white/90 sm:text-lg"
        href="/donate"
        linkLabel="Support Our Work"
        linkStyle="button"
        secondaryHref="/about/how-we-work"
        secondaryLinkLabel="How We Work"
        secondaryLinkStyle="outline"
      />
    </>
  );
}
