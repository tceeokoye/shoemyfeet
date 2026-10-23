import type { Metadata } from "next";
import GalleryPageClient from "@/components/gallery/GalleryPageClient";

export const metadata: Metadata = {
  title: "Events | Shoe My Feet Foundation Gallery",
  description: "Explore Shoe My Feet Foundation event albums and follow outreach work across communities over time.",
};

export default function GalleryEventsPage() {
  return <GalleryPageClient collection="events" />;
}
