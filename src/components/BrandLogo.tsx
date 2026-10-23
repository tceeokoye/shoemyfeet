import Image from "@/components/ui/RealImage";
import Link from "next/link";

type BrandLogoProps = {
  size?: "navbar" | "footer";
};

export default function BrandLogo({ size = "navbar" }: BrandLogoProps) {
  const isFooter = size === "footer";

  return (
    <Link href="/" className="flex items-center gap-3 group shrink-0">
      <Image
        src="/brand-mark.svg"
        alt=""
        width={isFooter ? 48 : 44}
        height={isFooter ? 48 : 44}
        className="shrink-0 transition-transform duration-300 group-hover:scale-105"
      />
      <span className="leading-none">
        <span
          className={`font-brand block font-bold tracking-tight text-white transition-colors group-hover:text-[#1A3A6B] ${
            isFooter ? "text-xl" : "text-lg sm:text-xl"
          }`}
        >
          Shoe My Feet
        </span>
        <span className="font-brand mt-0.5 block text-[11px] font-semibold uppercase tracking-[0.18em] text-[#1A3A6B]">
          Foundation
        </span>
      </span>
    </Link>
  );
}
