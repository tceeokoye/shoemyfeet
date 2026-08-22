import type { Metadata } from "next";
import "./globals.css";

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
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Quicksand:wght@300;400;500;600;700&family=Fredoka:wght@400;500;600;700&family=Nunito:wght@400;600;700;800;900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="font-sans antialiased bg-white [overflow-x:clip]">
        {children}
      </body>
    </html>
  );
}
