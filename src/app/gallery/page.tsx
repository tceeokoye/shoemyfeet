import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import GalleryPageClient from "@/components/gallery/GalleryPageClient";

export const metadata: Metadata = {
  title: "Media Gallery | Shoe My Feet Foundation",
  description:
    "Explore high-quality photos, documentaries, and videos capturing shoe distribution events, school visits, volunteer activities, and child shoemaking empowerment across Nigeria.",
  keywords: [
    "Shoe My Feet Foundation gallery",
    "shoe distribution photos Nigeria",
    "charity video documentary Enugu Kaduna Edo",
    "NGO media gallery Nigeria",
    "children school shoes photos",
    "children's empowerment shoemaking photos",
  ],
  openGraph: {
    title: "Media Gallery | Shoe My Feet Foundation",
    description:
      "Every moment tells a story. Explore our journey through photos and videos capturing outreach events, school visits, and life-changing shoe distributions.",
    url: "https://shoemyfeet.org/gallery",
    siteName: "Shoe My Feet Foundation",
    type: "website",
  },
};

export default function GalleryPage() {
  return (
    <>
      <Navbar />
      <GalleryPageClient/>
      <Footer />
    </>
  );
}
