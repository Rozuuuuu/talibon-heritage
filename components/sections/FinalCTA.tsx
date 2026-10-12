"use client";

import Image from "next/image";
import { m } from "motion/react";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { FINAL_CTA } from "@/lib/constants";

export function FinalCTA() {
  return (
    <section className="w-full bg-paper py-space-4xl md:py-space-5xl">
      <div className="mx-auto max-w-[1440px] px-margin-mobile md:px-margin">
        <div className="relative grid grid-cols-1 items-end gap-gutter lg:grid-cols-12">
          {/* Main inscription */}
          <ScrollReveal className="flex flex-col items-start space-y-space-xl lg:col-span-8">
            <span className="font-label-caps text-label-caps uppercase tracking-[0.16em] text-ink-muted">
              {FINAL_CTA.eyebrow}
            </span>
            <h2 className="font-display-l text-display-l font-black uppercase leading-none tracking-[-0.03em] text-ink">
              {FINAL_CTA.headlineLines.map((line, i) => (
                <span key={line}>
                  {line}
                  {i < FINAL_CTA.headlineLines.length - 1 && <br />}
                </span>
              ))}
            </h2>

            <div className="flex flex-col items-start gap-space-lg pt-space-md sm:flex-row sm:items-center">
              <m.a
                href="/donate"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="group inline-flex h-[52px] items-center justify-center gap-space-sm rounded-full border border-ink bg-ink px-space-2xl font-label-caps text-label-caps uppercase tracking-[0.16em] text-paper shadow-md transition-colors duration-250 hover:bg-paper hover:text-ink"
              >
                <span>{FINAL_CTA.cta}</span>
                <span className="material-symbols-outlined text-[18px] transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5">
                  north_east
                </span>
              </m.a>
              <span className="max-w-xs font-serif-aside text-serif-aside italic text-ink-muted">
                {FINAL_CTA.footnote}
              </span>
            </div>
          </ScrollReveal>

          {/* Relic stamp */}
          <ScrollReveal
            delay={0.2}
            className="mt-space-2xl flex justify-start lg:col-span-4 lg:mt-0 lg:justify-end"
          >
            <m.div
              whileHover={{ rotate: 0, scale: 1.05 }}
              initial={{ rotate: 3 }}
              className="relative max-w-xs cursor-pointer bg-paper p-space-sm shadow-[0_12px_24px_-4px_rgba(22,19,15,0.12)] transition-all duration-500"
            >
              <div className="h-56 w-48 overflow-hidden bg-paper-dim">
                <Image
                  src={FINAL_CTA.relicImage}
                  alt={FINAL_CTA.relicAlt}
                  width={192}
                  height={224}
                  className="h-full w-full object-cover contrast-125 grayscale transition-transform duration-700 hover:scale-110"
                />
              </div>
              <div className="flex items-center justify-between pt-space-xs font-label-caps text-[9px] uppercase tracking-widest text-ink-muted">
                <span>{FINAL_CTA.relicLocation}</span>
                <span>{FINAL_CTA.relicIndex}</span>
              </div>
            </m.div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}