"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Heart } from "lucide-react";

interface BubblingHeartProps {
  size?: number;
  className?: string;
  rotation?: number;
}

export default function BubblingHeart({
  size = 16,
  className = "text-rose-500",
  rotation = 0,
}: BubblingHeartProps) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.span
      aria-hidden="true"
      className={`inline-flex ${className}`}
      animate={
        shouldReduceMotion
          ? { rotate: rotation }
          : { scale: [1, 1.12, 1], rotate: rotation }
      }
      transition={{ duration: 2.8, ease: "easeInOut", repeat: Infinity }}
    >
      <Heart size={size} fill="currentColor" />
    </motion.span>
  );
}
