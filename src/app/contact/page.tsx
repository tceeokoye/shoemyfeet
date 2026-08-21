import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ContactHero from "@/components/contact/ContactHero";
import ContactInfoCards from "@/components/contact/ContactInfoCards";
import ContactFormSection from "@/components/contact/ContactFormSection";
import LiveSupportOptions from "@/components/contact/LiveSupportOptions";
import FindUsLocation from "@/components/contact/FindUsLocation";
import RegionalContacts from "@/components/contact/RegionalContacts";
import EmergencySupportCards from "@/components/contact/EmergencySupportCards";
import MeetTeamContacts from "@/components/contact/MeetTeamContacts";
import VisitOfficeSection from "@/components/contact/VisitOfficeSection";
import SocialMediaConnect from "@/components/contact/SocialMediaConnect";
import ContactFAQ from "@/components/contact/ContactFAQ";
import ContactNewsletter from "@/components/contact/ContactNewsletter";
import ContactFinalCTA from "@/components/contact/ContactFinalCTA";

export const metadata: Metadata = {
  title: "Contact Us | Shoe My Feet Foundation — Let's Make Every Step Count Together",
  description:
    "Get in touch with Shoe My Feet Foundation in Nigeria. Contact our head office in Enugu, regional coordinators in Kaduna, Benin City, and Lagos, or send us a message online. We're here to help!",
  keywords: [
    "contact Shoe My Feet Foundation",
    "Enugu NGO contact",
    "nonprofit contact Nigeria",
    "charity office Enugu",
    "volunteer contact Nigeria",
    "donation helpline Nigeria",
    "school shoes partnership",
    "corporate CSR contact Nigeria",
  ],
  openGraph: {
    title: "Contact Us | Shoe My Feet Foundation",
    description:
      "Whether you want to volunteer, donate, partner with us, or request assistance for a school or community, we'd love to hear from you.",
    url: "https://shoemyfeet.org/contact",
    type: "website",
    images: [
      {
        url: "/images/contact-og.jpg",
        width: 1200,
        height: 630,
        alt: "Shoe My Feet Foundation office and volunteers in Enugu",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact Us | Shoe My Feet Foundation",
    description: "Every conversation is another opportunity to change a child's life. Connect with us today.",
    images: ["/images/contact-og.jpg"],
  },
};

// JSON-LD Structured Data
const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://shoemyfeet.org" },
    { "@type": "ListItem", position: 2, name: "Contact Us", item: "https://shoemyfeet.org/contact" },
  ],
};

const contactPageSchema = {
  "@context": "https://schema.org",
  "@type": "ContactPage",
  name: "Contact Shoe My Feet Foundation",
  description: "Contact information, office location, regional coordinators, and enquiry form for Shoe My Feet Foundation in Nigeria.",
  mainEntity: {
    "@type": "NGO",
    name: "Shoe My Feet Foundation",
    url: "https://shoemyfeet.org",
    telephone: "+2348007463693",
    email: "hello@shoemyfeet.org",
    address: {
      "@type": "PostalAddress",
      streetAddress: "No. 14 Independence Layout, Plot 8",
      addressLocality: "Enugu",
      addressRegion: "Enugu State",
      addressCountry: "NG",
    },
    openingHours: "Mo-Fr 08:00-17:00, Sa 09:00-14:00",
  },
};

export default function ContactPage() {
  return (
    <>
      {/* JSON-LD Schemas */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(contactPageSchema) }}
      />

      <Navbar />
      <main>
        {/* 1. Hero Section */}
        <ContactHero />

        {/* 2. Contact Information Cards */}
        <ContactInfoCards />

        {/* 3. Multi-Step Contact Form */}
        <ContactFormSection />

        {/* 4. Live Support Options */}
        <LiveSupportOptions />

        {/* 5. Find Us (Location Map & Directions) */}
        <FindUsLocation />

        {/* 6. Regional Contacts */}
        <RegionalContacts />

        {/* 7. Emergency & Support Information */}
        <EmergencySupportCards />

        {/* 8. Meet Our Team Contacts */}
        <MeetTeamContacts />

        {/* 9. Visit Our Office */}
        <VisitOfficeSection />

        {/* 10. Social Media Connect */}
        <SocialMediaConnect />

        {/* 11. Frequently Asked Questions */}
        <ContactFAQ />

        {/* 12. Newsletter Invitation */}
        <ContactNewsletter />

        {/* 13. Final Call to Action */}
        <ContactFinalCTA />
      </main>
      <Footer />
    </>
  );
}
