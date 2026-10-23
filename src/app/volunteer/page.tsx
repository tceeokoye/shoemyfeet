import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import VolunteerHero from "@/components/volunteer/VolunteerHero";
import VolunteerOpportunities from "@/components/volunteer/VolunteerOpportunities";
import VolunteerFAQ from "@/components/volunteer/VolunteerFAQ";
import VolunteerRegistrationForm from "@/components/volunteer/VolunteerRegistrationForm";

export const metadata: Metadata = {
  title: "Volunteer | Shoe My Feet Foundation — Be the Reason a Child Walks With Confidence",
  description:
    "Join hundreds of passionate volunteers and help put shoes on the feet of children across Nigeria. Explore volunteer roles, apply online, and make a lasting impact with Shoe My Feet Foundation.",
  keywords: [
    "volunteer Nigeria", "NGO volunteers", "shoe charity volunteers",
    "community service Nigeria", "nonprofit volunteer opportunities",
    "Shoe My Feet Foundation volunteer", "children charity volunteer",
  ],
  openGraph: {
    title: "Volunteer | Shoe My Feet Foundation",
    description:
      "Be the reason a child walks with confidence. Volunteer with Shoe My Feet Foundation and change lives across Nigeria.",
    url: "https://shoemyfeet.org/volunteer",
    type: "website",
    images: [
      {
        url: "/images/volunteers.jpg",
        width: 1200,
        height: 630,
        alt: "Volunteers working with Shoe My Feet Foundation",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Volunteer | Shoe My Feet Foundation",
    description: "Be the reason a child walks with confidence. Join our volunteer team today.",
    images: ["/images/volunteers.jpg"],
  },
};

// JSON-LD BreadcrumbList Schema
const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://shoemyfeet.org" },
    { "@type": "ListItem", position: 2, name: "Volunteer", item: "https://shoemyfeet.org/volunteer" },
  ],
};

// JSON-LD VolunteerAction Schema
const volunteerSchema = {
  "@context": "https://schema.org",
  "@type": "VolunteerAction",
  name: "Volunteer with Shoe My Feet Foundation",
  description:
    "Join Shoe My Feet Foundation as a volunteer to help distribute shoes, support outreach events, and make a lasting difference in the lives of children across Nigeria.",
  location: {
    "@type": "Place",
    name: "Nigeria",
    address: { "@type": "PostalAddress", addressCountry: "NG" },
  },
  organizer: {
    "@type": "NGO",
    name: "Shoe My Feet Foundation",
    url: "https://shoemyfeet.org",
  },
};

export default function VolunteerPage() {
  return (
    <>
      {/* JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(volunteerSchema) }}
      />

      <Navbar />
      <main>
        <VolunteerHero />
        <VolunteerOpportunities />
        <VolunteerRegistrationForm />
        <VolunteerFAQ />
      </main>
      <Footer />
    </>
  );
}
