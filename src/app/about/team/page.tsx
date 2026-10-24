import type { Metadata } from "next";
import AboutPageIntro from "@/components/about/AboutPageIntro";
import MeetTeam from "@/components/about/MeetTeam";
import ScrollOverBg from "@/components/ui/scrollOverBg";

export const metadata: Metadata = {
  title: "Our Team | Shoe My Feet Foundation",
  description: "Meet the people and volunteers working with communities across Nigeria.",
};

export default function TeamPage() {
  return (
    <>
      <AboutPageIntro
        eyebrow="Our Team"
        title="People who show up for children."
        description="Our outreach is made possible by a committed team of leaders, field workers, skills instructors, and volunteers working alongside local communities."
        image="/images/volunteers.jpg"
        imageAlt="Shoe My Feet Foundation volunteers working together"
      />
      <MeetTeam />
      <ScrollOverBg
        backgroundImage="/images/volunteers.jpg"
        minHeight="min-h-[420px] sm:min-h-[480px]"
        className="px-5 py-20 sm:px-8"
        overlayClassName="bg-[#111827]/75"
        eyebrow="Get Involved · Community"
        title="Be Part of the People Who Show Up"
        titleTag="h2"
        titleClassName="font-heading text-3xl font-bold leading-tight text-white sm:text-4xl md:text-5xl"
        description="Join over 200 volunteers across Nigeria dedicating their time, skills, and empathy to give children safe steps and dignity."
        descriptionClassName="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-white/90 sm:text-lg"
        href="/volunteer"
        linkLabel="Become a Volunteer"
        linkStyle="button"
        secondaryHref="/about/careers"
        secondaryLinkLabel="Work With Us"
        secondaryLinkStyle="outline"
      />
    </>
  );
}
