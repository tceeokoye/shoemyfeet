import type { Metadata } from "next";
import Link from "next/link";
import ScrollOverBg from "@/components/ui/scrollOverBg";
import { IMPACT_STATS } from "@/lib/constants";
import { PROJECT_DETAILS } from "@/lib/projectDetails";

export const metadata: Metadata = {
  title: "Our Impact | Shoe My Feet Foundation",
  description:
    "Explore the measurable impact of Shoe My Feet Foundation: personal transformation stories, verified statistics, outreach maps, and transparency reports across Nigeria.",
  keywords: [
    "Shoe My Feet Foundation impact",
    "charity impact report Nigeria",
    "shoe distribution statistics",
    "student transformation stories",
    "education charity impact",
  ],
  openGraph: {
    title: "Our Impact | Shoe My Feet Foundation",
    description:
      "Every pair of shoes is more than footwear — it is health protected, dignity restored, and an open door to education.",
    url: "https://shoemyfeet.org/impact",
    siteName: "Shoe My Feet Foundation",
    type: "website",
  },
};

const shoeDistributionStats = PROJECT_DETAILS["shoe-distribution"].stats;

const communityStats = [IMPACT_STATS[3], IMPACT_STATS[2]];

function MetricPanel({
  description,
  metrics,
  toolsHref,
}: {
  description: string;
  metrics: { value: number; prefix?: string; suffix?: string; label: string }[];
  toolsHref: string;
}) {
  return (
    <section className="bg-white px-5 py-14 text-center sm:px-8 sm:py-16 lg:py-20">
      <div className="mx-auto max-w-4xl">
        <p className="mx-auto max-w-3xl text-sm leading-6 text-[#565650] sm:text-base sm:leading-7">
          {description}
        </p>

        <dl className="mx-auto mt-9 flex flex-wrap justify-center gap-x-12 gap-y-8">
          {metrics.map((metric) => (
            <div
              key={metric.label}
              className="flex min-w-32 max-w-52 flex-col items-center"
            >
              <dt className="order-2 mt-2 font-body text-xs leading-5 text-[#565650] sm:text-sm">
                {metric.label}
              </dt>
              <dd className="order-1 font-heading text-3xl font-bold text-[#1A3A6B] sm:text-4xl">
                {metric.prefix}
                {metric.value.toLocaleString()}
                {metric.suffix}
              </dd>
            </div>
          ))}
        </dl>

        <Link href={toolsHref} className="btn-primary mt-8">
          See Our Tools
        </Link>
      </div>
    </section>
  );
}

function SchoolImpactPanel() {
  return (
    <section className="bg-white px-5 py-14 text-center sm:px-8 sm:py-16 lg:py-20">
      <div className="mx-auto max-w-5xl">
        <h2 className="relative mx-auto flex min-h-[56px] w-full max-w-[390px] items-center justify-center px-8 py-3 font-heading text-lg font-extrabold uppercase text-white sm:min-h-[68px] sm:text-xl">
          <span
            aria-hidden="true"
            className="absolute inset-0 bg-center bg-no-repeat [background-size:100%_100%]"
            style={{ backgroundImage: "url('/images/challenge-brush.svg')" }}
          />
          <span className="relative">In Schools</span>
        </h2>

        <p className="mx-auto mt-8 max-w-3xl text-sm leading-6 text-[#565650] sm:text-base sm:leading-7">
          We work with school communities to identify children who need
          well-fitting footwear. Each distribution helps protect pupils’ feet,
          support attendance, and give children confidence to learn and grow.
        </p>

        <dl className="mx-auto mt-14 grid max-w-5xl grid-cols-2 gap-x-6 gap-y-9 sm:mt-20 sm:grid-cols-4 sm:gap-x-8">
          {shoeDistributionStats.map((metric) => (
            <div key={metric.label} className="text-left">
              <dd className="font-body text-3xl font-light leading-none text-[#1A3A6B] sm:text-4xl lg:text-[42px]">
                {metric.prefix}
                {metric.value.toLocaleString()}
                {metric.suffix}
              </dd>
              <dt className="mt-3 font-body text-xs leading-5 text-[#565650] sm:text-sm">
                {metric.label}
              </dt>
            </div>
          ))}
        </dl>

        <Link
          href="/about/tools#school-partnerships"
          className="btn-primary mt-16 sm:mt-20"
        >
          See Our Tools
        </Link>
      </div>
    </section>
  );
}

function PolicyImpactPanel() {
  const metrics = [
    { value: 3, label: "States reached across Nigeria" },
    { value: 18, suffix: "+", label: "Schools and communities reached" },
    { value: 6500, suffix: "+", label: "Pairs of school shoes distributed" },
  ];

  return (
    <section className="bg-white px-5 py-14 text-center sm:px-8 sm:py-16 lg:py-20">
      <div className="mx-auto max-w-5xl">
        <p className="mx-auto max-w-3xl text-sm leading-6 text-[#565650] sm:text-base sm:leading-7">
          We work with schools, communities, and stakeholders to support
          children’s wellbeing and access to education. Our approach is guided
          by dignity, safeguarding, and transparent reporting as our work
          reaches more communities across Nigeria.
        </p>

        <dl className="mx-auto mt-14 grid max-w-3xl grid-cols-3 gap-x-5 sm:mt-20 sm:gap-x-12">
          {metrics.map((metric) => (
            <div key={metric.label} className="text-center">
              <dd className="font-body text-3xl font-light leading-none text-[#1A3A6B] sm:text-4xl lg:text-[42px]">
                {metric.value.toLocaleString()}
                {metric.suffix}
              </dd>
              <dt className="mt-3 font-body text-xs leading-5 text-[#1A3A6B] sm:text-sm">
                {metric.label}
              </dt>
            </div>
          ))}
        </dl>

        <Link
          href="/about/tools#impact-and-reports"
          className="btn-primary mt-16 sm:mt-20"
        >
          See Our Tools
        </Link>
      </div>
    </section>
  );
}

function ImpactBanner({
  title,
  image,
  imageAlt,
  video,
  id,
  titleTag = "h2",
}: {
  title: string;
  image: string;
  imageAlt: string;
  video?: string;
  id?: string;
  titleTag?: "h1" | "h2";
}) {
  return (
    <ScrollOverBg
      id={id}
      backgroundImage={image}
      backgroundVideo={video}
      ariaLabel={imageAlt}
      minHeight={
        video
          ? "h-[45vh] min-h-[300px] sm:h-[55vh] sm:min-h-[380px] lg:h-[65vh] lg:min-h-[480px]"
          : "h-52 sm:h-60 lg:h-64"
      }
      className="px-5 py-8 sm:px-8 sm:py-10"
      overlayClassName="bg-[#111827]/45"
      title={title}
      titleTag={titleTag}
      titleClassName="relative inline-flex min-h-12 min-w-[280px] items-center justify-center px-8 py-3 font-heading text-xl font-extrabold uppercase tracking-wide text-white sm:min-h-14 sm:min-w-[360px] sm:text-2xl"
      titlebgImage="/images/challenge-brush.svg"
    />
  );
}

export default function ImpactPage() {
  const fittingStat = shoeDistributionStats[1];

  return (
    <>
      <ImpactBanner
        title="Our Impact"
        titleTag="h1"
        image="/images/everychild.jpg"
        imageAlt="Children taking part in a Shoe My Feet Foundation outreach"
        video="/videos/My-Intro.mp4"
      />

      <MetricPanel
        description="Every pair of school shoes is individually sized and fitted, helping protect children’s feet, support school attendance, and restore confidence."
        metrics={[fittingStat]}
        toolsHref="/about/tools#school-partnerships"
      />

      <ImpactBanner
        id="impact-reach"
        title="Our Reach"
        image="/images/shoe_distribution.jpg"
        imageAlt="School shoes prepared for a Shoe My Feet Foundation distribution"
        video="/videos/My-Intro.mp4"
      />

      <SchoolImpactPanel />

      <ImpactBanner
        title="In Communities"
        image="/images/happy-kids.jpeg"
        imageAlt="Children and community members gathered during an outreach"
      />

      <MetricPanel
        description="Community outreach brings families, volunteers, and local partners together to support children’s wellbeing and access to education."
        metrics={communityStats}
        toolsHref="/about/tools#school-community-engagement"
      />

      <ImpactBanner
        title="In Policy"
        image="/images/everychild.jpg"
        imageAlt="Schoolchildren and foundation volunteers at an outreach"
      />

      <PolicyImpactPanel />
    </>
  );
}
