import ScrollOverBg from "@/components/ui/scrollOverBg";
import { SparklesIcon } from "@/components/ui/Icons";

interface AboutCTAProps {
  backgroundImage?: string;
  badge?: string;
  title?: string;
  description?: string;
  donateHref?: string;
  volunteerHref?: string;
}

export default function AboutCTA({
  backgroundImage = "/images/shoe_distribution.jpg",
  badge = "Make a Difference Today",
  title = "Together We Can Change a Child's Story",
  description = "Whether you donate $20 for a child's first pair of school shoes, volunteer at an outreach event, or partner as an organization — your involvement creates immediate, lifelong impact.",
  donateHref = "/donate",
  volunteerHref = "/volunteer",
}: AboutCTAProps) {
  return (
    <ScrollOverBg
      backgroundImage={backgroundImage}
      minHeight="min-h-[460px] sm:min-h-[520px]"
      className="px-5 py-20 sm:px-8 sm:py-24"
      overlayClassName="bg-[#111827]/75"
      badge={
        <>
          <SparklesIcon size={16} className="text-[#F97316]" />
          <span>{badge}</span>
        </>
      }
      title={title}
      titleTag="h2"
      titleClassName="font-heading text-3xl font-bold leading-tight text-white sm:text-4xl md:text-5xl"
      description={description}
      descriptionClassName="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-white/90 sm:text-lg"
      href={donateHref}
      linkLabel="Donate Now"
      linkStyle="button"
      secondaryHref={volunteerHref}
      secondaryLinkLabel="Become a Volunteer"
      secondaryLinkStyle="outline"
    />
  );
}
