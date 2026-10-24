import ScrollOverBg from "@/components/ui/scrollOverBg";

interface ToolsResourceBannerProps {
  title: string;
  image: string;
  imageAlt: string;
}

export default function ToolsResourceBanner({
  title,
  image,
  imageAlt,
}: ToolsResourceBannerProps) {
  return (
    <ScrollOverBg
      backgroundImage={image}
      ariaLabel={imageAlt}
      minHeight="h-80 sm:h-96 lg:h-[30rem]"
      className="px-5 py-12 sm:px-8 sm:py-16"
      title={title}
      titleClassName="relative inline-flex min-h-[128px] max-w-full items-center justify-center px-8 py-7 text-center font-heading text-xl font-bold uppercase leading-tight tracking-wide text-white sm:min-h-[144px] sm:px-14 sm:py-8 sm:text-2xl"
      titlebgImage="/images/tools-title-splash.svg"
      overlayClassName="bg-black/35"
    />
  );
}
