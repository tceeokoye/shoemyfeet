import type { ReactNode } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function GalleryLayout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen bg-white text-[#111827] flex flex-col font-sans">
      <Navbar />
      <main className="flex-grow">{children}</main>
      <Footer />
    </div>
  );
}
