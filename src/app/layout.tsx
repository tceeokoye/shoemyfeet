import type { Metadata } from "next";
import { DM_Sans, Nunito } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import BubblingHeart from "@/components/ui/BubblingHeart";

const nunito = Nunito({
  subsets: ["latin"],
  weight: ["700", "800"],
  variable: "--font-nunito",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-dm-sans",
});

export const metadata: Metadata = {
  title: "Shoe My Feet Foundation | Every Step Changes a Life",
  description:
    "Shoe My Feet Foundation is a Nigerian nonprofit restoring dignity and improving access to education by providing school shoes to underserved children while empowering kids through shoemaking skills.",
  keywords: [
    "Nigerian nonprofit",
    "school shoes",
    "children education",
    "shoe distribution Nigeria",
    "children's empowerment",
    "shoemaking skills",
    "Enugu NGO",
    "charity Nigeria",
  ],
  authors: [{ name: "Shoe My Feet Foundation" }],
  openGraph: {
    title: "Shoe My Feet Foundation | Every Step Changes a Life",
    description:
      "Restoring dignity, protecting health, and improving education access for Nigerian children through school shoes and children's empowerment.",
    url: "https://shoemyfeet.org",
    siteName: "Shoe My Feet Foundation",
    type: "website",
    locale: "en_NG",
  },
  twitter: {
    card: "summary_large_image",
    title: "Shoe My Feet Foundation",
    description:
      "Every child deserves to walk into their future with confidence. Help us restore dignity and improve education for Nigerian children.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${nunito.variable} ${dmSans.variable} scroll-smooth`}>
      <body className="font-sans antialiased relative bg-white [overflow-x:clip]">
        <Link
          aria-label="Donate to Shoe My Feet Foundation"
          className="donate-button-pulse donate-button-pulse--vertical fixed left-0 top-40 z-50 text-sm font-semibold gap-2 flex h-fit py-3 w-12 flex-col items-center justify-between rounded-r-md bg-[#F97316] text-white shadow-md transition-colors hover:bg-[#EA580C] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#F97316]"
          href="/donate"
        >
          <span className="rotate-180 [writing-mode:vertical-rl] text-sm font-semibold tracking-wide text-white">
            Donate
          </span>
          <BubblingHeart size={17} className="text-white" rotation={-90} />
        </Link>
        {children}
      </body>
    </html>
  );
}
