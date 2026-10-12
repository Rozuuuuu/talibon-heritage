"use client";

import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { CRADLE } from "@/lib/history-constants";

export function CradleSection() {
  return (
    <section className="relative w-full overflow-hidden bg-ink py-space-3xl text-paper md:py-space-4xl">
      <div className="mx-auto max-w-[1440px] px-margin-mobile md:px-margin">
        <ScrollReveal>
          {/* Marker */}
          <div className="mb-space-2xl flex items-center justify-between border-b border-paper/20 pb-space-sm">
            <span className="font-serif-aside text-serif-aside italic text-ink-faint">
              {CRADLE.markerLeft}
            </span>
            <span className="font-label-caps text-label-caps uppercase tracking-[0.16em] text-paper/60">
              {CRADLE.markerRight}
            </span>
          </div>

          {/* Monumental typography */}
          <div className="max-w-5xl">
            <h2 className="mb-space-2xl font-display-m text-display-m-mobile font-black uppercase leading-[1.05] tracking-tight text-paper md:text-display-m">
              {CRADLE.headline.map((line, i) => (
                <span key={line}>
                  {line}
                  {i < CRADLE.headline.length - 1 && <br />}
                </span>
              ))}
            </h2>

            {/* 4/8 split */}
            <div className="grid grid-cols-1 gap-gutter border-t border-paper/20 pt-space-xl md:grid-cols-12">
              <div className="md:col-span-4">
                <span className="font-label-caps text-label-caps uppercase tracking-[0.16em] text-paper/50">
                  {CRADLE.claimLabel}
                </span>
                <p className="mt-space-xs font-serif-aside text-[16px] italic text-paper/80">
                  {CRADLE.claimBody}
                </p>
              </div>
              <div className="md:col-span-8">
                <p className="font-body-md leading-relaxed text-paper/70 md:font-body-l md:text-body-l">
                  {CRADLE.body}
                </p>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}