import Link from "next/link";
import EditorialHero from "@/components/ui/EditorialHero";

export default function VolunteerHero() {
  return (
    <EditorialHero
      eyebrow="Volunteer with us"
      title={<>Help children <span className="text-[#142E56]">walk with confidence.</span></>}
      description="Give your time or skills to help children get the shoes they need to learn, play, and thrive."
      image="/images/volunteers.jpg"
      imageAlt="Volunteers working together for Shoe My Feet Foundation"
    >
      <Link href="#volunteer-form" className="btn-primary">Become a Volunteer</Link>
      <Link
        href="#volunteer-opportunities"
        className="text-sm font-medium text-[#1A3A6B] underline underline-offset-4"
      >
        Explore opportunities
      </Link>
    </EditorialHero>
  );
}