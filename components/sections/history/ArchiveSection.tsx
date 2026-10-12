"use client";

import { m } from "motion/react";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { ARCHIVE } from "@/lib/history-constants";

export function ArchiveSection() {
  return (
    <section id="archive" className="w-full bg-paper">
      <div className="mx-auto max-w-[1440px] px-margin-mobile py-space-3xl md:px-margin md:py-space-4xl">
        <SectionHeader
          index="04 / ARCHIVE"
          right="Historical Documentation & Primary Sources"
          className="flex items-center justify-between border-b border-line pb-space-sm mb-space-xl"
        />

        <div className="divide-y divide-line border-t border-line">
          {ARCHIVE.items.map((item, i) => (
            <m.a
              key={item.title}
              href={item.href}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "0px 0px -40px 0px" }}
              transition={{
                duration: 0.75,
                ease: [0.16, 1, 0.3, 1],
                delay: 0.1 * (i + 1),
              }}
              className="group flex flex-col justify-between gap-space-sm px-space-xs py-space-lg transition-colors hover:bg-paper-dim/60 md:flex-row md:items-center"
            >
              <div className="md:w-1/2">
                <span className="font-headline-sm text-[18px] font-bold uppercase tracking-tight text-ink group-hover:underline md:text-[22px]">
                  {item.title}
                </span>
              </div>
              <div className="md:w-1/3">
                <span className="font-serif-aside text-serif-aside italic text-ink-muted">
                  {item.source}
                </span>
              </div>
              <div className="flex items-center justify-end md:w-auto">
                <span className="font-label-caps text-label-caps text-ink transition-transform duration-200 group-hover:translate-x-1.5">
                  →
                </span>
              </div>
            </m.a>
          ))}
        </div>

        <ScrollReveal className="mt-space-2xl flex flex-col items-start justify-between border-t border-line pt-space-md text-ink-muted sm:flex-row sm:items-center">
          <span className="font-body-sm text-body-sm">
            {ARCHIVE.footnoteLeft}
          </span>
          <span className="mt-space-xs font-serif-aside text-[15px] italic text-ink sm:mt-0">
            {ARCHIVE.footnoteRight}
          </span>
        </ScrollReveal>
      </div>
    </section>
  );
}