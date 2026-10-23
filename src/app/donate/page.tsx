import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import DonateHero from "@/components/donate/DonateHero";
import OtherWaysToGive from "@/components/donate/OtherWaysToGive";
import DonateFAQ from "@/components/donate/DonateFAQ";

export const metadata: Metadata = {
  title: "Donate | Shoe My Feet Foundation — Every Step Changes a Life",
  description:
    "Support Shoe My Feet Foundation's work providing school shoes and community programmes for children in Nigeria. Contact our team to arrange a donation.",
  keywords: [
    "donate Nigeria nonprofit",
    "shoe charity donation",
    "children charity Nigeria",
    "donate shoes Nigeria",
    "Shoe My Feet Foundation donation",
    "support Nigerian children",
    "school shoes donation",
    "corporate CSR Nigeria",
    "Paystack donation NGO",
    "online charity giving Nigeria",
  ],
  openGraph: {
    title: "Donate | Shoe My Feet Foundation — Every Step Changes a Life",
    description:
      "Support school shoes and community programmes for children in Nigeria. Contact our team to arrange your gift.",
    url: "https://shoemyfeet.org/donate",
    type: "website",
    images: [
      {
        url: "/images/everychild-needs.jpeg",
        width: 1200,
        height: 630,
        alt: "Children receiving shoes from Shoe My Feet Foundation volunteers",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Donate | Shoe My Feet Foundation",
    description: "Support school shoes and community programmes for children in Nigeria.",
    images: ["/images/everychild-needs.jpeg"],
  },
};

// JSON-LD Schemas
const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://shoemyfeet.org" },
    { "@type": "ListItem", position: 2, name: "Donate", item: "https://shoemyfeet.org/donate" },
  ],
};

const donateActionSchema = {
  "@context": "https://schema.org",
  "@type": "DonateAction",
  name: "Donate to Shoe My Feet Foundation",
  description:
    "Support Shoe My Feet Foundation's work providing school shoes and community programmes for children in Nigeria.",
  agent: {
    "@type": "NGO",
    name: "Shoe My Feet Foundation",
    url: "https://shoemyfeet.org",
    description: "A Nigerian nonprofit restoring dignity and improving education access through school shoes.",
    address: {
      "@type": "PostalAddress",
      addressCountry: "NG",
      addressRegion: "Enugu",
    },
  },
  recipient: {
    "@type": "NGO",
    name: "Shoe My Feet Foundation",
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Can I donate online?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Online payment is not currently available. Please contact Shoe My Feet Foundation to arrange a donation. Selecting an amount on this page does not process a payment.",
      },
    },
    {
      "@type": "Question",
      name: "How are donations used?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Donations support the foundation's work providing school shoes and delivering community programmes. Contact the team for more information about current needs.",
      },
    },
    {
      "@type": "Question",
      name: "Can I donate shoes or arrange monthly giving?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Please contact the team to discuss shoe donations or recurring giving and confirm current arrangements.",
      },
    },
  ],
};

export default function DonatePage() {
  return (
    <>
      {/* JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(donateActionSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <Navbar />
      <main>
        <DonateHero />
        <OtherWaysToGive />
        <DonateFAQ />
      </main>
      <Footer />
    </>
  );
}
