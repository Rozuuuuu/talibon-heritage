"use client";

import { m } from "motion/react";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { PRACTICAL_INFO } from "@/lib/visit-constants";

export function PracticalInfoSection() {
  return (
    <section className="w-full border-t border-line bg-paper py-space-4xl">
      <div className="mx-auto max-w-[1440px] px-margin-mobile md:px-margin">
        <ScrollReveal className="mb-space-2xl flex items-center justify-between border-b border-line pb-space-lg">
          <span className="font-label-caps text-label-caps uppercase tracking-[0.16em] text-ink">
            {PRACTICAL_INFO.section}
          </span>
          <span className="font-serif-aside text-serif-aside italic text-ink-muted">
            {PRACTICAL_INFO.right}
          </span>
        </ScrollReveal>

        <div className="grid grid-cols-1 items-stretch gap-gutter lg:grid-cols-12">
          {/* Left: data rows */}
          <div className="flex flex-col justify-between lg:col-span-5">
            <div className="divide-y divide-line border-y border-line">
              {PRACTICAL_INFO.rows.map((row, i) => (
                <m.div
                  key={row.label}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "0px 0px -40px 0px" }}
                  transition={{
                    duration: 0.75,
                    ease: [0.16, 1, 0.3, 1],
                    delay: 0.08 * i,
                  }}
                  className="-mx-space-sm flex flex-col gap-space-xs border-l-2 border-l-transparent px-space-sm py-space-lg transition-all duration-300 hover:border-l-ink hover:bg-paper-dim/60 hover:pl-space-md"
                >
                  <span className="font-label-caps text-label-caps uppercase tracking-[0.16em] text-ink-faint">
                    {row.label}
                  </span>

                  {"primaryLines" in row && row.primaryLines ? (
                    <div className="flex flex-col gap-1 text-ink">
                      {row.primaryLines.map((line) => (
                        <span key={line.prefix} className="font-body-md text-body-md">
                          <span className="font-semibold">{line.prefix}</span>
                          {line.value}
                        </span>
                      ))}
                    </div>
                  ) : (
                    <span className="font-body-md text-body-md font-semibold text-ink">
                      {row.primary}
                    </span>
                  )}

                  <span
                    className={
                      "small" in row && row.small
                        ? "font-body-sm text-body-sm text-ink-muted"
                        : "font-serif-aside text-[15px] italic text-ink-muted"
                    }
                  >
                    {row.secondary}
                  </span>
                </m.div>
              ))}
            </div>

            <ScrollReveal className="mt-space-xl border border-line bg-paper-dim p-space-md transition-transform duration-300 hover:-translate-y-0.5">
              <span className="mb-1 block font-label-caps text-[10px] uppercase tracking-widest text-ink">
                {PRACTICAL_INFO.archivalNoteLabel}
              </span>
              <p className="font-body-sm text-body-sm text-ink-muted">
                {PRACTICAL_INFO.archivalNote}
              </p>
            </ScrollReveal>
          </div>

          {/* Right: framed plate */}
          <ScrollReveal
            className="mt-space-xl flex flex-col justify-between lg:col-span-7 lg:mt-0"
          >
            <div className="group relative flex h-full min-h-[460px] w-full flex-col justify-between border border-line bg-paper-deep p-space-sm">
              <div className="relative w-full flex-1 overflow-hidden">
                <img
                  src={PRACTICAL_INFO.plate.src}
                  alt={PRACTICAL_INFO.plate.alt}
                  className="h-full w-full object-cover grayscale contrast-125 transition-transform duration-1000 ease-out group-hover:scale-105"
                />
              </div>
              <div className="flex items-center justify-between bg-paper-deep pt-space-sm text-ink-muted">
                <span className="font-label-caps text-[10px] uppercase tracking-widest">
                  {PRACTICAL_INFO.plate.caption}
                </span>
                <span className="font-serif-aside text-[14px] italic">
                  {PRACTICAL_INFO.plate.material}
                </span>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}