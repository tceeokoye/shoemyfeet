"use client";

import { useState } from "react";
import Link from "next/link";

type Frequency = "one-time" | "monthly";

const amounts = [5000, 10000, 25000, 50000, 100000];

export default function DonationOptions({
  embedded = false,
}: {
  embedded?: boolean;
}) {
  const [frequency, setFrequency] = useState<Frequency>("one-time");
  const [selectedAmount, setSelectedAmount] = useState<number | null>(10000);
  const [customAmount, setCustomAmount] = useState("");
  const isCustom = selectedAmount === null;
  const displayAmount = isCustom
    ? Number.parseInt(customAmount, 10) || 0
    : selectedAmount;

  const formatAmount = (amount: number) =>
    `₦${amount.toLocaleString("en-NG")}`;

  return (
    <div
      id="donate-widget"
      className={`relative z-20 w-full rounded-2xl bg-white p-5 text-[#111827] shadow-2xl ring-1 ring-black/10 sm:p-7 ${
        embedded
          ? ""
          : "max-md:-mx-4 max-md:w-[calc(100%+2rem)] max-md:translate-y-36 max-md:rounded-none sm:max-md:-mx-6 sm:max-md:w-[calc(100%+3rem)]"
      }`}
    >
      <h2 className="font-heading text-2xl font-semibold text-[#1A3A6B]">
        Choose your gift
      </h2>
      <p className="mt-1 text-sm text-gray-600">
        Select a giving frequency and amount.
      </p>

      <div
        aria-label="Donation frequency"
        className="mt-5 grid grid-cols-2 gap-2 rounded-lg bg-[#FFFFFF] p-1"
      >
        {(["one-time", "monthly"] as const).map((option) => (
          <button
            key={option}
            type="button"
            aria-pressed={frequency === option}
            onClick={() => setFrequency(option)}
            className={`rounded-md px-3 py-2.5 text-sm font-semibold transition-colors ${
              frequency === option
                ? "bg-[#1A3A6B] text-white shadow-sm"
                : "text-[#1A3A6B] hover:bg-white"
            }`}
          >
            {option === "one-time" ? "One-time" : "Monthly"}
          </button>
        ))}
      </div>

      <fieldset className="mt-5">
        <legend className="mb-3 text-sm font-semibold text-[#303030]">
          Choose an amount
        </legend>
        <div className="grid grid-cols-3 gap-2">
          {amounts.map((amount) => {
            const selected = selectedAmount === amount;

            return (
              <button
                key={amount}
                type="button"
                aria-pressed={selected}
                onClick={() => {
                  setSelectedAmount(amount);
                  setCustomAmount("");
                }}
                className={`rounded-lg border px-2 py-3 text-sm font-semibold transition-colors ${
                  selected
                    ? "border-[#1A3A6B] bg-[#F3F4F6] text-[#1A3A6B]"
                    : "border-gray-200 text-[#303030] hover:border-[#1A3A6B]"
                }`}
              >
                {formatAmount(amount)}
              </button>
            );
          })}
          <button
            type="button"
            aria-pressed={isCustom}
            onClick={() => setSelectedAmount(null)}
            className={`rounded-lg border px-2 py-3 text-sm font-semibold transition-colors ${
              isCustom
                ? "border-[#1A3A6B] bg-[#F3F4F6] text-[#1A3A6B]"
                : "border-gray-200 text-[#303030] hover:border-[#1A3A6B]"
            }`}
          >
            Custom
          </button>
        </div>
      </fieldset>

      {isCustom && (
        <label className="mt-4 block text-sm font-medium text-[#303030]">
          Enter amount in naira
          <div className="mt-1 flex items-center rounded-lg border border-gray-300 focus-within:border-[#1A3A6B] focus-within:ring-2 focus-within:ring-[#1A3A6B]/20">
            <span className="pl-3 text-gray-500">₦</span>
            <input
              aria-label="Custom donation amount in naira"
              className="w-full rounded-lg bg-transparent px-3 py-3 text-[#111827] outline-none"
              inputMode="numeric"
              min="1"
              onChange={(event) =>
                setCustomAmount(event.currentTarget.value.replace(/\D/g, ""))
              }
              placeholder="Enter an amount"
              type="text"
              value={customAmount}
            />
          </div>
        </label>
      )}

      <div
        aria-live="polite"
        className="mt-5 rounded-lg bg-[#FFFFFF] p-4"
      >
        <p className="text-xs font-medium uppercase tracking-wide text-gray-500">
          Your {frequency} gift
        </p>
        <p className="mt-1 font-heading text-2xl font-semibold text-[#1A3A6B]">
          {formatAmount(displayAmount)}
        </p>
      </div>

      <div className="mt-4 rounded-lg border border-[#F3F4F6] p-3 text-sm leading-relaxed text-gray-600">
        Online payment is not available yet. Contact our team to arrange your
        gift. Choosing an amount here does not process a donation.
      </div>

      <Link
        className={`btn-primary mt-4 w-full justify-center py-3.5 ${
          displayAmount <= 0 ? "pointer-events-none opacity-50" : ""
        }`}
        href="/contact"
        aria-disabled={displayAmount <= 0}
        tabIndex={displayAmount <= 0 ? -1 : undefined}
      >
        Contact us to give
      </Link>
    </div>
  );
}
