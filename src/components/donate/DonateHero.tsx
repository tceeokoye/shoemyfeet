import Image from "next/image";
import DonationOptions from "@/components/donate/DonationOptions";

export default function DonateHero() {
  return (
    <section
      aria-label="Support Shoe My Feet Foundation"
      className="relative isolate z-10 min-h-[100svh] overflow-visible bg-[#102d20] text-white md:z-auto md:overflow-hidden"
    >
      <div aria-hidden="true" className="absolute inset-0 z-0 overflow-hidden">
        <Image
          src="/images/everychild.jpg"
          alt=""
          fill
          priority
          className="animate-cinematography object-cover"
          sizes="100vw"
        />
      </div>
      <div
        aria-hidden="true"
        className="absolute inset-0 z-0 bg-linear-to-r from-black/65 via-black/45 to-black/25"
      />

      <div className="relative z-10 mx-auto grid min-h-[100svh] max-w-7xl items-center gap-10 px-4 pb-12 pt-28 sm:px-6 sm:pt-32 md:grid-cols-[minmax(0,1fr)_20rem] md:gap-6 lg:grid-cols-[minmax(0,1fr)_27rem] lg:gap-14 lg:px-8 lg:py-28">
        <div className="donate-hero-copy max-w-2xl pl-10 sm:pl-12 md:pl-0">
          <p className="mb-5 text-xs font-semibold uppercase tracking-[0.2em] text-[#F97316] sm:text-sm">
            Every step counts
          </p>
          <h1
            className="font-heading text-4xl font-semibold leading-[1.08] sm:text-5xl lg:text-6xl"
            style={{ color: "#ffffff" }}
          >
            Help a child take their{" "}
            <span className="text-[#F97316]">next step.</span>
          </h1>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-white/90 sm:text-lg">
            Your support helps Shoe My Feet Foundation provide school shoes and
            deliver community programmes for children across Nigeria.
          </p>
          <p className="mt-5 text-sm font-medium text-white/80 sm:text-base">
            Choose a gift amount to get started. You can contact our team to
            arrange your donation.
          </p>
        </div>

        <div className="donate-hero-form">
          <DonationOptions />
        </div>
      </div>
    </section>
  );
}
