import DonationOptions from "@/components/donate/DonationOptions";

export default function PartnerCTA() {
  return (
    <section
      aria-labelledby="partner-heading"
      className="bg-white px-4 py-16 text-center sm:px-6 sm:py-20 lg:px-8"
    >
      <div className="mx-auto max-w-3xl">
        <h2
          id="partner-heading"
          className="mx-auto max-w-3xl font-heading text-3xl font-extrabold uppercase leading-tight text-[#1A3A6B] sm:text-4xl lg:text-5xl"
        >
          Become a Partner of Change Today
        </h2>
        <p className="mt-7 text-base leading-relaxed text-[#F97316] sm:text-lg">
          Give a child the comfort, confidence, and support to take their next
          step.
        </p>
        <div className="mx-auto mt-7 max-w-110 text-left">
          <DonationOptions embedded />
        </div>
      </div>
    </section>
  );
}
