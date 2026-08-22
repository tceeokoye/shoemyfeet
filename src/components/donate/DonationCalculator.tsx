"use client";

import { useState, useEffect } from "react";
import { motion, useSpring, useTransform, animate } from "framer-motion";
import { fadeUp, staggerContainer, viewportConfig } from "@/lib/animations";

function AnimatedNumber({ value, prefix = "", suffix = "" }: { value: number; prefix?: string; suffix?: string }) {
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    const controls = animate(display, value, {
      duration: 0.8,
      ease: "easeOut",
      onUpdate: (v) => setDisplay(Math.round(v)),
    });
    return () => controls.stop();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [value]);

  return (
    <span className="font-heading font-bold text-warm-orange-dark tabular-nums">
      {prefix}{display.toLocaleString("en-NG")}{suffix}
    </span>
  );
}

export default function DonationCalculator() {
  const [amount, setAmount] = useState(25000);

  const shoePrice = 5000;
  const childrenPerShoe = 1;
  const communityThreshold = 50000;

  const children = Math.floor((amount / shoePrice) * childrenPerShoe);
  const shoes = Math.floor(amount / shoePrice);
  const communities = parseFloat((amount / communityThreshold).toFixed(2));
  const outreachPct = Math.min(Math.round((amount / 500000) * 100), 100);

  const presets = [5000, 10000, 25000, 50000, 100000, 250000];

  return (
    <section id="impact-calculator" className="section-padding bg-[#2563eb] relative overflow-hidden" aria-label="Donation impact calculator">
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-10 right-10 w-72 h-72 rounded-full opacity-8 blur-3xl bg-[#2563eb]" />
        <div className="absolute bottom-10 left-10 w-64 h-64 rounded-full opacity-8 blur-3xl bg-[#2563eb]" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={viewportConfig} className="text-center mb-12">
          <motion.span variants={fadeUp} className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-amber-100 border border-amber-200 text-amber-700 font-bold text-sm mb-4">
            🧮 Impact Calculator
          </motion.span>
          <motion.h2 variants={fadeUp} className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1a1a2e] mb-5">
            See Exactly{" "}
            <span className="text-warm-orange">What You Give</span>
          </motion.h2>
          <motion.p variants={fadeUp} className="text-gray-600 font-body text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
            Move the slider to see in real time exactly how many children, shoes, and communities your donation will impact.
          </motion.p>
        </motion.div>

        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          className="bg-white rounded-4xl shadow-2xl shadow-blue-900/8 border border-gray-100 p-6 sm:p-10"
        >
          {/* Slider + Amount Display */}
          <div className="mb-8">
            <div className="flex items-center justify-between mb-4">
              <span className="text-sm text-gray-500 font-body font-medium">₦1,000</span>
              <div className="text-center">
                <div className="font-heading font-bold text-3xl sm:text-4xl text-[#1a1a2e]">
                  ₦{amount.toLocaleString("en-NG")}
                </div>
                <div className="text-xs text-gray-400 font-body mt-1">Your donation amount</div>
              </div>
              <span className="text-sm text-gray-500 font-body font-medium">₦500,000</span>
            </div>

            {/* Custom range slider */}
            <div className="relative">
              <input
                type="range"
                min={1000}
                max={500000}
                step={1000}
                value={amount}
                onChange={(e) => setAmount(Number(e.target.value))}
                className="w-full h-3 rounded-full appearance-none cursor-pointer"
                style={{
                  background: "#2563eb",
                }}
              />
            </div>

            {/* Quick preset buttons */}
            <div className="flex flex-wrap gap-2 mt-4 justify-center">
              {presets.map((p) => (
                <button
                  key={p}
                  onClick={() => setAmount(p)}
                  className={`px-3 py-1.5 rounded-full text-xs font-bold font-body border transition-all cursor-pointer ${
                    amount === p
                      ? "bg-warm-orange text-white border-warm-orange shadow-sm"
                      : "bg-gray-50 text-gray-600 border-gray-200 hover:border-orange-200"
                  }`}
                >
                  ₦{p >= 1000 ? `${p / 1000}k` : p}
                </button>
              ))}
            </div>
          </div>

          {/* Impact Cards */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {[
              {
                icon: "👧",
                label: "Children Helped",
                value: children,
                suffix: "",
                color: "bg-[#f97316]",
                bg: "bg-orange-50",
                border: "border-orange-100",
              },
              {
                icon: "👟",
                label: "Pairs of Shoes",
                value: shoes,
                suffix: "",
                color: "bg-[#2563eb]",
                bg: "bg-blue-50",
                border: "border-blue-100",
              },
              {
                icon: "🏘️",
                label: "Communities",
                value: communities,
                suffix: communities < 1 ? " partial" : "",
                color: "bg-[#15803d]",
                bg: "bg-[#15803d]",
                border: "border-green-100",
              },
              {
                icon: "📊",
                label: "Outreach Funded",
                value: outreachPct,
                suffix: "%",
                color: "bg-[#2563eb]",
                bg: "bg-purple-50",
                border: "border-purple-100",
              },
            ].map((stat, i) => (
              <motion.div
                key={stat.label}
                layout
                className={`rounded-2xl p-4 text-center border ${stat.border} stat.bg`}
              >
                <div className={`w-12 h-12 rounded-2xl stat.color flex items-center justify-center text-xl mx-auto mb-3 shadow-md`}>
                  {stat.icon}
                </div>
                <div className="font-heading text-2xl sm:text-3xl font-bold text-[#1a1a2e]">
                  <AnimatedNumber value={typeof stat.value === "number" ? Math.round(stat.value * 100) / 100 : stat.value} suffix={stat.suffix} />
                </div>
                <div className="text-xs text-slate-800 font-body font-bold mt-1">{stat.label}</div>
              </motion.div>
            ))}
          </div>

          {/* Impact Statement */}
          <motion.div
            layout
            className="mt-6 p-4 rounded-2xl bg-[#2563eb] border border-blue-100 text-center"
          >
            <p className="text-sm text-gray-700 font-body leading-relaxed">
              Your donation of{" "}
              <strong className="text-royal-blue">₦{amount.toLocaleString("en-NG")}</strong>{" "}
              will provide{" "}
              <strong className="text-warm-orange-dark">{shoes} pair{shoes !== 1 ? "s" : ""} of shoes</strong>{" "}
              to{" "}
              <strong className="text-forest-green">{children} child{children !== 1 ? "ren" : ""}</strong>{" "}
              across Nigerian communities. 🙏
            </p>
          </motion.div>

          <div className="mt-6 text-center">
            <a href="#donate-widget" className="btn-orange text-base">
              Donate ₦{amount.toLocaleString("en-NG")} Now
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
