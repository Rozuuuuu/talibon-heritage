"use client";

import { useEffect, useRef } from "react";
import {
  animate,
  m,
  useInView,
  useMotionValue,
  useTransform,
} from "motion/react";

interface AnimatedCounterProps {
  target: number;
  duration?: number;
  className?: string;
}

export function AnimatedCounter({
  target,
  duration = 1.6,
  className,
}: AnimatedCounterProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.4 });
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => Math.round(latest).toString());

  useEffect(() => {
    if (!isInView) return;
    const controls = animate(count, target, {
      duration,
      ease: [0.16, 1, 0.3, 1],
    });
    return () => controls.stop();
  }, [isInView, count, target, duration]);

  return (
    <m.span ref={ref} className={className}>
      {rounded}
    </m.span>
  );
}