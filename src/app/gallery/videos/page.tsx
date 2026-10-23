import type { Metadata } from "next";
import GalleryPageClient from "@/components/gallery/GalleryPageClient";

export const metadata: Metadata = {
  title: "Videos | Shoe My Feet Foundation Gallery",
  description: "Watch outreach documentaries, beneficiary stories, and community videos from Shoe My Feet Foundation.",
};

export default function GalleryVideosPage() {
  return <GalleryPageClient collection="videos" />;
}
