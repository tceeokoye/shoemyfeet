import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import DonateHero from "@/components/donate/DonateHero";
import WhyDonate from "@/components/donate/WhyDonate";
import DonateWidget from "@/components/donate/DonateWidget";
import OtherWaysToGive from "@/components/donate/OtherWaysToGive";
import DonationCalculator from "@/components/donate/DonationCalculator";
import FundAllocation from "@/components/donate/FundAllocation";
import DonorSuccessStories from "@/components/donate/DonorSuccessStories";
import DonorWall from "@/components/donate/DonorWall";
import CorporatePartnerships from "@/components/donate/CorporatePartnerships";
import DonateFAQ from "@/components/donate/DonateFAQ";
import DonorTestimonials from "@/components/donate/DonorTestimonials";
import TransparencySection from "@/components/donate/TransparencySection";
import DonateFinalCTA from "@/components/donate/DonateFinalCTA";

export const metadata: Metadata = {
  title: "Donate | Shoe My Feet Foundation — Every Step Changes a Life",
  description:
    "Support Shoe My Feet Foundation by donating today. Your contribution provides shoes, restores dignity, and keeps Nigerian children in school. Donate online securely via Paystack, Flutterwave, or PayPal.",
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
      "Your donation provides shoes, restores dignity, and keeps Nigerian children in school. Give securely online today.",
    url: "https://shoemyfeet.org/donate",
    type: "website",
    images: [
      {
        url: "/images/donate-og.jpg",
        width: 1200,
        height: 630,
        alt: "Children receiving shoes from Shoe My Feet Foundation volunteers",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Donate | Shoe My Feet Foundation",
    description: "Your donation puts hope on a child's feet. Give today and transform a life forever.",
    images: ["/images/donate-og.jpg"],
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
    "Support Shoe My Feet Foundation by donating to provide school shoes for underprivileged Nigerian children, improving school attendance, foot health, and dignity.",
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
      name: "Is my donation to Shoe My Feet Foundation secure?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. All donations are processed through SSL-encrypted payment gateways including Paystack, Flutterwave, Stripe, and PayPal. Your financial information is never stored on our servers.",
      },
    },
    {
      "@type": "Question",
      name: "How does Shoe My Feet Foundation use donations?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "55% goes to shoe procurement, 15% to transportation, 12% to community outreach, 8% to volunteer support, 5% to education materials, and 5% to administration. We publish annual financial reports.",
      },
    },
    {
      "@type": "Question",
      name: "Can I donate shoes instead of money?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. We accept new or gently used shoes in good condition. Contact us to arrange a drop-off or collection.",
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
        {/* 1. Hero — Full-bleed with animated footprints */}
        <DonateHero />

        {/* 2. Why Your Donation Matters — 6 animated cards */}
        <WhyDonate />

        {/* 3. Make a Donation — Premium 3-step donation widget */}
        <DonateWidget />

        {/* 4. Other Ways to Give — 6 action cards */}
        <OtherWaysToGive />

        {/* 5. Impact Calculator — Interactive slider with live counters */}
        <DonationCalculator />

        {/* 6. Where Your Money Goes — Animated infographic on dark bg */}
        <FundAllocation />

        {/* 7. Success Stories — Transformation story cards */}
        <DonorSuccessStories />

        {/* 8. Donor Wall — Supporter recognition and recent donations */}
        <DonorWall />

        {/* 9. Corporate Partnerships — CSR packages and benefits */}
        <CorporatePartnerships />

        {/* 10. Donor Testimonials — Animated testimonial carousel */}
        <DonorTestimonials />

        {/* 11. Transparency & Accountability — Reports and certifications */}
        <TransparencySection />

        {/* 12. FAQ — Animated accordion */}
        <DonateFAQ />

        {/* 13. Final CTA — Dark section with footprint trail */}
        <DonateFinalCTA />
      </main>
      <Footer />
    </>
  );
}
