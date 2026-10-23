import Link from "next/link";
import EditorialHero from "@/components/ui/EditorialHero";
import { ArrowRightIcon } from "@/components/ui/Icons";

export default function ProgramsHero() {
  return (
    <EditorialHero
      eyebrow="Our programs"
      title={<>Changing Lives, <span className="text-[#142E56]">One Step</span> at a Time</>}
      description="Discover the programs through which Shoe My Feet Foundation brings hope, dignity, and opportunity to children by providing proper footwear and community support."
      image="/images/distribution.jpg"
      imageAlt="Volunteers distributing shoes to children in a community"
    >
      <Link href="/donate" className="btn-primary">Support Our Programs</Link>
      <Link href="/volunteer" className="inline-flex items-center gap-2 border-b border-[#1A3A6B] pb-1 text-sm font-medium text-[#1A3A6B]">
        Become a Volunteer <ArrowRightIcon size={16} />
      </Link>
    </EditorialHero>
  );
}
