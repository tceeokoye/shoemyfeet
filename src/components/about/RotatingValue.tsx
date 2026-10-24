"use client";

import { useEffect, useState } from "react";

const values = ["Integrity", "Hope", "Dignity", "Compassion", "Community"];

export default function RotatingValue() {
  const [valueIndex, setValueIndex] = useState(0);
  const [displayedValue, setDisplayedValue] = useState(values[0][0]);
  const [isDeleting, setIsDeleting] = useState(false);
  const currentValue = `${values[valueIndex]}.`;

  useEffect(() => {
    let delay: number;

    if (!isDeleting && displayedValue === currentValue) {
      delay = window.setTimeout(() => setIsDeleting(true), 1000);
    } else if (isDeleting && displayedValue.length === 0) {
      delay = window.setTimeout(() => {
        setValueIndex((index) => (index + 1) % values.length);
        setIsDeleting(false);
      }, 100);
    } else {
      delay = window.setTimeout(() => {
        setDisplayedValue((value) =>
          isDeleting
            ? value.slice(0, -1)
            : currentValue.slice(0, value.length + 1),
        );
      }, isDeleting ? 65 : 110);
    }

    return () => window.clearTimeout(delay);
  }, [currentValue, displayedValue, isDeleting]);

  return (
    <h2
      aria-label="Our values include integrity, hope, dignity, compassion, and community"
      className="mt-3 min-h-[1.2em] font-heading text-3xl font-extrabold leading-tight text-[#111827] sm:text-4xl"
    >
      <span aria-hidden="true">{displayedValue}</span>
    </h2>
  );
}
