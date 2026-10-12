"use client";

import { m, type Variants } from "motion/react";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { TIMELINE } from "@/lib/history-constants";

const entryVariants: Variants = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.75, ease: [0.16, 1, 0.3, 1] },
  },
};

const nodeVariants: Variants = {
  hidden: {
    scale: 1,
    boxShadow: "0 0 0 0 rgba(22,19,15,0)",
    backgroundColor: "#16130F",
  },
  visible: {
    scale: 1.15,
    boxShadow:
      "0 0 0 5px rgba(22,19,15,0.15), 0 0 14px rgba(22,19,15,0.3)",
    backgroundColor: "#16130F",
    transition: {
      duration: 0.5,
      ease: [0.34, 1.56, 0.64, 1],
    },
  },
};

export function TimelineSection() {
  return (
    <section className="w-full border-b border-line bg-paper">
      <div className="mx-auto max-w-[1440px] px-margin-mobile py-space-3xl md:px-margin md:py-space-4xl">
        <SectionHeader
          index="02 / TIMELINE"
          right="Chronological Annals ( 1521 – 2024 )"
        />

        <div className="relative space-y-space-3xl border-l border-line pl-6 md:pl-12">
          {TIMELINE.map((entry) => (
            <m.div
              key={entry.year}
              variants={entryVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "0px 0px -60px 0px" }}
              className="group relative"
            >
              {/* Timeline node */}
              <m.span
                variants={nodeVariants}
                className="absolute -left-[31px] top-4 h-3 w-3 bg-ink md:-left-[55px]"
              />

              <div className="grid grid-cols-1 items-baseline gap-space-md lg:grid-cols-12 lg:gap-gutter">
                <div className="lg:col-span-3">
                  <span className="block font-display-m font-black tracking-tight text-ink transition-transform duration-300 group-hover:translate-x-1 md:text-[72px] md:leading-[68px]">
                    {entry.year}
                  </span>
                </div>
                <div className="border-t border-line pt-space-xs lg:col-span-9 lg:border-t-0 lg:pt-0">
                  <h2 className="mb-space-xs font-headline-sm text-[20px] font-bold uppercase tracking-tight text-ink md:text-headline-sm">
                    {entry.title}
                  </h2>
                  <p className="max-w-3xl font-body-md text-body-md leading-relaxed text-ink-muted">
                    {entry.body}
                  </p>
                </div>
              </div>
            </m.div>
          ))}
        </div>
      </div>
    </section>
  );
}