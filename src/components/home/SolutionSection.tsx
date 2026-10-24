import ScrollOverBg from "@/components/ui/scrollOverBg";

export default function SolutionSection() {
  return (
    <ScrollOverBg
      backgroundImage="/images/shoe_distribution.jpg"
      minHeight="min-h-[520px]"
      className="px-4 sm:px-6 lg:px-8"
      title="The Solution"
      titleClassName="mb-7 font-heading text-3xl font-semibold leading-tight text-[#F97316] sm:text-4xl"
      description="We provide school shoes to children who need them, helping protect their feet and making it easier to attend school with comfort and confidence."
      descriptionClassName="mx-auto max-w-2xl text-base leading-relaxed sm:text-lg"
      href="/projects"
      linkLabel="Read More"
    />
  );
}
