import type { Metadata } from "next";
import AboutPageIntro from "@/components/about/AboutPageIntro";
import MeetTeam from "@/components/about/MeetTeam";

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
    </>
  );
}
