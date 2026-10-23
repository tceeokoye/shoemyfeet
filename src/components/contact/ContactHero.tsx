import Link from "next/link";
import EditorialHero from "@/components/ui/EditorialHero";
import { ArrowRightIcon, MailIcon, MapPinIcon } from "@/components/ui/Icons";

const contactDetails = [
  { label: "Main office", value: "Enugu State, Nigeria" },
  { label: "General email", value: "hello@shoemyfeet.org", href: "mailto:hello@shoemyfeet.org" },
  { label: "Helpline", value: "+234 800 746 3693", href: "tel:+2348007463693" },
];

export default function ContactHero() {
  return (
    <>
      <EditorialHero
        eyebrow="Contact Shoe My Feet Foundation"
        title={<>Let&apos;s Make Every Step <span className="text-[#142E56]">Count Together</span></>}
        description="Whether you want to volunteer, donate, partner with us, request assistance, or simply learn more about our mission, we&apos;d love to hear from you. Every conversation is another opportunity to change a child&apos;s life."
        image="/images/volunteers.jpg"
        imageAlt="Shoe My Feet Foundation volunteers working together"
      >
        <a href="#contact-form" className="btn-primary inline-flex items-center gap-2">
          <MailIcon size={16} /> Send a Message
        </a>
        <a href="#location" className="inline-flex items-center gap-2 border-b border-[#1A3A6B] pb-1 text-sm font-medium text-[#1A3A6B]">
          <MapPinIcon size={16} /> View Our Location <ArrowRightIcon size={15} />
        </a>
      </EditorialHero>
      <section className="border-y border-[#F3F4F6] bg-white">
        <div className="mx-auto grid max-w-7xl gap-0 px-4 sm:grid-cols-3 sm:px-6 lg:px-8">
          {contactDetails.map((detail) => (
            <div key={detail.label} className="border-b border-[#F3F4F6] py-5 sm:border-b-0 sm:border-r sm:px-6 sm:py-7 last:border-0 first:sm:pl-0 last:sm:pr-0">
              <p className="text-xs font-medium uppercase tracking-[0.12em] text-[#142E56]">{detail.label}</p>
              {detail.href ? (
                <a href={detail.href} className="mt-1 inline-block text-base font-medium text-[#111827] hover:text-[#1A3A6B]">{detail.value}</a>
              ) : (
                <p className="mt-1 text-base font-medium text-[#111827]">{detail.value}</p>
              )}
            </div>
          ))}
        </div>
        <p className="mx-auto max-w-7xl px-4 pb-4 text-xs text-[#696558] sm:px-6 lg:px-8">
          Average response time: &lt; 4 hours · Monday–Friday, 8am–5pm WAT
        </p>
      </section>
    </>
  );
}