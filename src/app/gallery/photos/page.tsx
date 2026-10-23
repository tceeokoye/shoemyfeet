import type { Metadata } from "next";
import GalleryPageClient from "@/components/gallery/GalleryPageClient";

export const metadata: Metadata = {
  title: "Photos | Shoe My Feet Foundation Gallery",
  description: "Browse photographs from Shoe My Feet Foundation school visits, shoe distributions, and community outreach.",
};

export default function GalleryPhotosPage() {
  return <GalleryPageClient collection="photos" />;
}
