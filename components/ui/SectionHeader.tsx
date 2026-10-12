"use client";

import { ScrollReveal } from "@/components/ui/ScrollReveal";

interface SectionHeaderProps {
  index: string;
  right?: string;
  className?: string;
}

export function SectionHeader({ index, right, className }: SectionHeaderProps) {
  return (
    <ScrollReveal
      className={
        className ??
        "flex items-center justify-between border-b border-line pb-space-sm mb-space-3xl"
      }
    >
      <span className="font-label-caps text-label-caps uppercase tracking-[0.16em] text-ink">
        {index}
      </span>
      {right && (
        <span className="font-serif-aside text-serif-aside italic text-ink-muted">
          {right}
        </span>
      )}
    </ScrollReveal>
  );
}