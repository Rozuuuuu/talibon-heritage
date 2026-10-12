"use client";

import { m } from "motion/react";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { STORM, STORM_FACTS } from "@/lib/restoration-constants";

export function StormSection() {
  return (
    <section className="w-full bg-paper py-space-4xl">
      <div className="mx-auto max-w-[1440px] px-margin-mobile md:px-margin">
        <ScrollReveal className="mb-space-2xl pb-space-md">
          <span className="font-label-caps text-label-caps uppercase tracking-[0.16em] text-ink">
            {STORM.section}
          </span>
        </ScrollReveal>

        <div className="grid grid-cols-1 items-stretch gap-gutter lg:grid-cols-12">
          {/* Left: Numbered factsheet */}
          <div className="flex flex-col justify-between lg:col-span-7">
            <div className="flex flex-col divide-y divide-line/40">
              {STORM_FACTS.map((fact, i) => (
                <m.div
                  key={fact.index}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "0px 0px -40px 0px" }}
                  transition={{
                    duration: 0.75,
                    ease: [0.16, 1, 0.3, 1],
                    delay: 0.1 * (i + 1),
                  }}
                  className="group flex cursor-default flex-col justify-between gap-space-sm rounded border-t border-line/40 px-space-sm py-space-xl transition-all duration-300 hover:translate-x-1.5 hover:bg-paper-dim/80 sm:flex-row sm:items-baseline"
                >
                  <div className="flex items-baseline gap-space-lg">
                    <span className="font-label-caps text-label-caps uppercase text-ink-muted transition-colors group-hover:text-ink">
                      {fact.index}
                    </span>
                    <span className="font-headline-sm text-headline-sm uppercase text-ink">
                      {fact.label}
                    </span>
                  </div>
                  <span className="font-serif-aside text-serif-aside italic text-ink-muted transition-colors group-hover:text-ink sm:text-right">
                    {fact.value}
                  </span>
                </m.div>
              ))}
            </div>

            <ScrollReveal delay={0.5} className="mt-space-2xl pt-space-md">
              <p className="max-w-xl font-body-md text-body-md text-ink-muted">
                {STORM.summary}
              </p>
            </ScrollReveal>
          </div>

          {/* Right: Damaged belfry image */}
          <ScrollReveal
            delay={0.2}
            className="mt-space-xl flex flex-col lg:col-span-5 lg:mt-0"
          >
            <div className="group relative h-full min-h-[500px] w-full overflow-hidden bg-paper-deep">
              <img
                src={STORM.image.src}
                alt={STORM.image.alt}
                className="h-full w-full object-cover grayscale contrast-125 transition-transform duration-700 ease-out group-hover:scale-105 group-hover:contrast-150"
              />
              <div className="absolute right-space-md top-space-md border border-line/60 bg-paper px-space-md py-space-xs font-label-caps text-label-caps uppercase tracking-[0.16em] text-ink shadow-sm transition-transform group-hover:scale-105">
                {STORM.image.plate}
              </div>
            </div>
            <div className="flex items-center justify-between py-space-sm text-ink-muted">
              <span className="font-label-caps text-label-caps uppercase tracking-[0.16em]">
                {STORM.image.caption}
              </span>
              <span className="font-serif-aside text-[13px] italic">
                {STORM.image.timestamp}
              </span>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}