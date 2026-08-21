"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function PageLoader() {
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => {
            setLoading(false);
            window.dispatchEvent(new Event("page-loader-complete"));
          }, 250);
          return 100;
        }
        return prev + 4;
      });
    }, 30);
    return () => clearInterval(interval);
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          className="fixed inset-0 z-[100] bg-[#081c13] flex flex-col items-center justify-center select-none pointer-events-none"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          {/* Logo mark */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col items-center mb-12"
          >
            {/* Shoe icon */}
            <div className="w-16 h-16 rounded-2xl bg-[#d97706] flex items-center justify-center shadow-xl mb-5">
              <svg viewBox="0 0 40 40" className="w-10 h-10" fill="none">
                <path
                  d="M5 22c1-4 4-7 8-7 3 0 5.5 2 8 2.5 2 .4 4-.5 5.5-.5 2 0 3.5 1.2 3.5 3v1.5H5V22z"
                  fill="white"
                />
                <path
                  d="M5 23.5h25v2.5c0 1.1-.9 2-2 2H7c-1.1 0-2-.9-2-2v-2.5z"
                  fill="white"
                  opacity="0.85"
                />
              </svg>
            </div>

            <h1 className="font-heading font-bold text-2xl text-white tracking-tight">
              Shoe My Feet
            </h1>
            <p className="text-[11px] text-[#d97706] font-body font-semibold tracking-widest uppercase mt-1">
              Foundation
            </p>
          </motion.div>

          {/* Progress bar */}
          <div className="w-48">
            <div className="h-0.5 bg-white/10 rounded-full overflow-hidden">
              <motion.div
                className="h-full bg-[#d97706] rounded-full origin-left"
                style={{ scaleX: progress / 100 }}
                transition={{ duration: 0.1 }}
              />
            </div>
            <p className="text-center text-[11px] text-white/40 font-body mt-3 tracking-wider">
              Every step changes a life
            </p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
