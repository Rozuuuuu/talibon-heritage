"use client";

import { m, type Variants } from "motion/react";
import { clsx } from "clsx";

const variants: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: (delay: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.75,
      ease: [0.16, 1, 0.3, 1],
      delay,
    },
  }),
};

type SupportedTag = "div" | "section" | "article" | "span" | "blockquote";

interface ScrollRevealProps {
  children: React.ReactNode;
  delay?: number;
  className?: string;
  as?: SupportedTag;
}

export function ScrollReveal({
  children,
  delay = 0,
  className,
  as = "div",
}: ScrollRevealProps) {
  const Component = m[as] as typeof m.div;

  return (
    <Component
      className={clsx("reveal-init", className)}
      variants={variants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "0px 0px -40px 0px" }}
      custom={delay}
    >
      {children}
    </Component>
  );
}