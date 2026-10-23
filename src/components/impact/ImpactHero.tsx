import EditorialHero from "@/components/ui/EditorialHero";
import Link from "next/link";
import { ArrowRightIcon } from "@/components/ui/Icons";

export default function ImpactHero() {
  return (
    <EditorialHero
      eyebrow="Our impact"
      title={<>Every Step Creates a <span className="text-[#142E56]">Lasting Impact</span></>}
      description="Every pair of shoes represents more than footwear — it represents confidence, opportunity, better health, and a brighter future. Explore how Shoe My Feet Foundation is transforming lives, one child and one community at a time."
      image="/images/children_walking_school.jpg"
      imageAlt="Children walking proudly to school wearing their new shoes"
    >
      <a href="#impact-numbers" className="btn-primary">View Our Impact</a>
      <Link href="/volunteer" className="inline-flex items-center gap-2 border-b border-[#1A3A6B] pb-1 text-sm font-medium text-[#1A3A6B]">
        Join the Mission <ArrowRightIcon size={16} />
      </Link>
    </EditorialHero>
  );
}
