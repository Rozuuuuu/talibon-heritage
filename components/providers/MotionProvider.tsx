"use client";

import { LazyMotion, domAnimation, MotionConfig } from "motion/react";

interface MotionProviderProps {
  children: React.ReactNode;
}

/**
 * Global Motion configuration provider.
 *
 * - `LazyMotion` + `domAnimation` ships only ~15kb of the animation
 *   feature set (vs. ~34kb for the full bundle). All animated
 *   components must use `m.*` (not `motion.*`) — `strict` enforces this.
 * - `MotionConfig` gives every Motion child a consistent spring feel.
 * - `reducedMotion="user"` honors the OS `prefers-reduced-motion` flag.
 */
export function MotionProvider({ children }: MotionProviderProps) {
  return (
    <MotionConfig
      reducedMotion="user"
      transition={{
        type: "spring",
        stiffness: 260,
        damping: 24,
        mass: 0.9,
      }}
    >
      <LazyMotion features={domAnimation} strict>
        {children}
      </LazyMotion>
    </MotionConfig>
  );
}