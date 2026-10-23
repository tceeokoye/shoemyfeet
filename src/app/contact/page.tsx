import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Contact Us | Shoe My Feet Foundation",
  description: "Get in touch with Shoe My Feet Foundation. Reach us by phone, email, or through our simple contact form.",
};

export default function ContactPage() {
  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-[#FFFFFF] pt-28 pb-16 text-[#111827] sm:pt-32">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="overflow-hidden rounded-[32px] border border-[#F3F4F6] bg-white shadow-[0_20px_60px_rgba(17, 17, 17,0.08)]">
            <div className="grid lg:grid-cols-[0.92fr_1.08fr]">
              <aside className="bg-[#111827] px-6 py-8 text-white sm:px-8 lg:px-10 lg:py-12">
                <span className="inline-flex rounded-full border border-white/20 bg-white/5 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-[#F97316]">
                  Contact
                </span>

                <h1 className="mt-6 text-4xl font-semibold tracking-tight text-white sm:text-5xl">
                  Let&apos;s talk.
                </h1>

                <p className="mt-4 max-w-md text-sm leading-7 text-[#F3F4F6] sm:text-base">
                  We&apos;re happy to hear from you about partnerships, donations, volunteering, and community support.
                </p>

                <div className="mt-8 space-y-4">
                  <a
                    href="https://shoemyfeet.org"
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center justify-between gap-4 rounded-2xl border border-white/12 bg-white/5 px-4 py-3 transition hover:bg-white/10"
                  >
                    <div>
                      <p className="text-xs uppercase tracking-[0.18em] text-[#F97316]">Website</p>
                      <p className="mt-1 text-base font-medium text-white">shoemyfeet.org</p>
                    </div>
                    <span aria-hidden="true" className="text-2xl text-[#F97316]">→</span>
                  </a>

                  <a
                    href="tel:+2348007463693"
                    className="flex items-center justify-between gap-4 rounded-2xl border border-white/12 bg-white/5 px-4 py-3 transition hover:bg-white/10"
                  >
                    <div>
                      <p className="text-xs uppercase tracking-[0.18em] text-[#F97316]">Phone</p>
                      <p className="mt-1 text-base font-medium text-white">+234 800 746 3693</p>
                    </div>
                    <span aria-hidden="true" className="text-2xl text-[#F97316]">☎</span>
                  </a>

                  <a
                    href="mailto:hello@shoemyfeet.org"
                    className="flex items-center justify-between gap-4 rounded-2xl border border-white/12 bg-white/5 px-4 py-3 transition hover:bg-white/10"
                  >
                    <div>
                      <p className="text-xs uppercase tracking-[0.18em] text-[#F97316]">Email</p>
                      <p className="mt-1 text-base font-medium text-white">hello@shoemyfeet.org</p>
                    </div>
                    <span aria-hidden="true" className="text-2xl text-[#F97316]">✉</span>
                  </a>
                </div>
              </aside>

              <section className="px-6 py-8 sm:px-8 lg:px-10 lg:py-12">
                <div className="mb-8">
                  <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#a8741b]">Send a message</p>
                  <h2 className="mt-2 text-3xl font-semibold tracking-tight text-[#111827] sm:text-4xl">
                    We&apos;d love to hear from you.
                  </h2>
                </div>

                <form className="space-y-5">
                  <div className="grid gap-5 sm:grid-cols-2">
                    <label className="block">
                      <span className="mb-2 block text-sm font-medium text-[#111827]">Full name</span>
                      <input
                        type="text"
                        placeholder="Your name"
                        className="w-full rounded-2xl border border-[#d4dcd4] bg-[#f9f9f9] px-4 py-3 text-base text-[#111827] outline-none transition focus:border-[#1A3A6B] focus:bg-white"
                      />
                    </label>

                    <label className="block">
                      <span className="mb-2 block text-sm font-medium text-[#111827]">Email address</span>
                      <input
                        type="email"
                        placeholder="you@example.com"
                        className="w-full rounded-2xl border border-[#d4dcd4] bg-[#f9f9f9] px-4 py-3 text-base text-[#111827] outline-none transition focus:border-[#1A3A6B] focus:bg-white"
                      />
                    </label>
                  </div>

                  <label className="block">
                    <span className="mb-2 block text-sm font-medium text-[#111827]">Phone number</span>
                    <input
                      type="tel"
                      placeholder="+234 800 000 0000"
                      className="w-full rounded-2xl border border-[#d4dcd4] bg-[#f9f9f9] px-4 py-3 text-base text-[#111827] outline-none transition focus:border-[#1A3A6B] focus:bg-white"
                    />
                  </label>

                  <label className="block">
                    <span className="mb-2 block text-sm font-medium text-[#111827]">Message</span>
                    <textarea
                      rows={5}
                      placeholder="How can we help?"
                      className="w-full rounded-2xl border border-[#d4dcd4] bg-[#f9f9f9] px-4 py-3 text-base text-[#111827] outline-none transition focus:border-[#1A3A6B] focus:bg-white"
                    />
                  </label>

                  <button
                    type="submit"
                    className="inline-flex items-center justify-center rounded-full bg-[#1A3A6B] px-6 py-3 text-base font-semibold text-white transition hover:bg-[#142E56]"
                  >
                    Send message
                  </button>
                </form>
              </section>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}
