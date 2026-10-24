import ScrollOverBg from "@/components/ui/scrollOverBg";

interface ProjectShowcasePanelProps {
  title: string;
  description: string;
  href: string;
  image: string;
  alt: string;
}

export default function ProjectShowcasePanel({
  title,
  description,
  href,
  image,
  alt,
}: ProjectShowcasePanelProps) {
  return (
    <ScrollOverBg
      as="article"
      backgroundImage={image}
      ariaLabel={alt}
      minHeight="min-h-[380px] sm:min-h-[440px] lg:min-h-[500px]"
      className="px-5 py-20 sm:px-8"
      title={title}
      titleTag="h2"
      titleClassName="font-heading text-2xl font-extrabold uppercase leading-tight tracking-[0.12em] text-white sm:text-3xl md:text-4xl"
      description={description}
      descriptionClassName="mx-auto mt-4 max-w-2xl text-sm leading-6 text-white/90 sm:text-base sm:leading-7"
      href={href}
      linkLabel="View Project"
      linkStyle="button"
      overlayClassName="bg-gradient-to-b from-[#111827]/45 via-[#111827]/35 to-[#111827]/55"
    />
  );
}
