"use client";

import { useRef } from "react";
import { useMotionValue, useSpring, useTransform, MotionValue } from "framer-motion";

interface ParallaxLayer {
  x: MotionValue<number>;
  y: MotionValue<number>;
}

export function useMouseParallax(strength: number = 20) {
  const containerRef = useRef<HTMLElement>(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springX = useSpring(mouseX, { stiffness: 50, damping: 20 });
  const springY = useSpring(mouseY, { stiffness: 50, damping: 20 });

  const layer1: ParallaxLayer = {
    x: useTransform(springX, [-0.5, 0.5], [-strength, strength]),
    y: useTransform(springY, [-0.5, 0.5], [-strength, strength]),
  };

  const layer2: ParallaxLayer = {
    x: useTransform(springX, [-0.5, 0.5], [strength * 0.7, -strength * 0.7]),
    y: useTransform(springY, [-0.5, 0.5], [strength * 0.7, -strength * 0.7]),
  };

  const layer3: ParallaxLayer = {
    x: useTransform(springX, [-0.5, 0.5], [-strength * 0.4, strength * 0.4]),
    y: useTransform(springY, [-0.5, 0.5], [-strength * 0.4, strength * 0.4]),
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    mouseX.set((e.clientX - rect.left) / rect.width - 0.5);
    mouseY.set((e.clientY - rect.top) / rect.height - 0.5);
  };

  return { containerRef, handleMouseMove, layer1, layer2, layer3 };
}
