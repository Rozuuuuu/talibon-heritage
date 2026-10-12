"use client";

import { m } from "motion/react";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { ARCHITECTURE } from "@/lib/history-constants";

export function ArchitectureSection() {
  return (
    <section className="w-full border-b border-line bg-paper">
      <div className="mx-auto max-w-[1440px] px-margin-mobile py-space-3xl md:px-margin md:py-space-4xl">
        <SectionHeader
          index="03 / ARCHITECTURE"
          right="Stylistic Composition & Masonry Analysis"
          className="flex items-center justify-between border-b border-line pb-space-sm mb-space-2xl"
        />

        <div className="grid grid-cols-1 gap-gutter lg:grid-cols-12">
          {/* Left: Analysis */}
          <ScrollReveal className="flex flex-col justify-between lg:col-span-5">
            <div>
              <h3 className="mb-space-md font-headline-sm text-headline-sm font-bold uppercase tracking-tight text-ink">
                {ARCHITECTURE.headline}
              </h3>
              <p className="mb-space-xl font-body-md text-body-md leading-relaxed text-ink-muted">
                {ARCHITECTURE.body}
              </p>

              <div className="divide-y divide-line border-t border-line">
                {ARCHITECTURE.parameters.map((param) => (
                  <div
                    key={param.label}
                    className="flex items-center justify-between px-1 py-space-md transition-colors hover:bg-paper-dim/40"
                  >
                    <span className="font-label-caps text-label-caps uppercase text-ink">
                      {param.label}
                    </span>
                    <span className="font-serif-aside text-serif-aside italic text-ink-muted">
                      {param.value}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-space-xl border-t border-line pt-space-lg">
              <span className="mb-space-xs block font-label-caps text-label-caps uppercase text-ink-faint">
                {ARCHITECTURE.referenceLabel}
              </span>
              <span className="font-serif-aside text-serif-aside italic text-ink">
                {ARCHITECTURE.referenceValue}
              </span>
            </div>
          </ScrollReveal>

          {/* Right: 2x2 plate grid */}
          <div className="grid grid-cols-1 gap-px border border-line bg-line sm:grid-cols-2 lg:col-span-7">
            {ARCHITECTURE.plates.map((plate, i) => (
              <m.div
                key={plate.key}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "0px 0px -40px 0px" }}
                transition={{
                  duration: 0.75,
                  ease: [0.16, 1, 0.3, 1],
                  delay: 0.1 * (i + 1),
                }}
                className="group flex flex-col bg-paper p-space-sm"
              >
                <div className="relative mb-space-xs aspect-square w-full overflow-hidden border border-line bg-paper-dim">
                  <img
                    src={plate.image}
                    alt={plate.alt}
                    className="h-full w-full object-cover grayscale contrast-125 transition-transform duration-700 ease-[cubic-bezier(0.2,0.8,0.2,1)] group-hover:scale-[1.045] group-hover:contrast-[130%] group-hover:grayscale-[90%]"
                  />
                </div>
                <div className="flex items-center justify-between pt-space-xs">
                  <span className="font-label-caps text-label-caps text-ink transition-all group-hover:font-bold">
                    {plate.key}
                  </span>
                  <span className="font-serif-aside text-[14px] italic text-ink-muted">
                    {plate.caption}
                  </span>
                </div>
              </m.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}