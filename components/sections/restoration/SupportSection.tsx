"use client";

import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { SUPPORT } from "@/lib/restoration-constants";

export function SupportSection() {
  return (
    <section
      id="support"
      className="w-full bg-ink py-space-4xl text-paper"
    >
      <div className="mx-auto max-w-[1440px] px-margin-mobile md:px-margin">
        <ScrollReveal className="mb-space-2xl pb-space-md">
          <span className="font-serif-aside text-serif-aside italic text-paper/70">
            {SUPPORT.marker}
          </span>
        </ScrollReveal>

        <div className="grid grid-cols-1 items-end gap-gutter lg:grid-cols-12">
          {/* Left: manifesto */}
          <ScrollReveal
            delay={0.1}
            className="lg:col-span-8"
          >
            <h2 className="mb-space-xl font-display-m text-display-m uppercase tracking-tight text-paper">
              {SUPPORT.headline.map((line, i) => (
                <span key={line}>
                  {line}
                  {i < SUPPORT.headline.length - 1 && <br />}
                </span>
              ))}
            </h2>
            <p className="mb-space-2xl max-w-2xl font-body-l text-body-l leading-relaxed text-paper/70">
              {SUPPORT.body}
            </p>
            <div className="flex flex-col items-start gap-space-lg sm:flex-row sm:items-center">
              <a
                href="/donate"
                className="inline-flex h-[52px] items-center justify-center rounded-full bg-paper px-space-2xl font-label-caps text-label-caps uppercase tracking-[0.16em] text-ink shadow-md transition-all hover:scale-105 hover:bg-paper-dim active:scale-95"
              >
                {SUPPORT.primaryCta}
              </a>
              <a
                href="#"
                className="group inline-flex items-center gap-space-xs font-label-caps text-label-caps uppercase tracking-[0.16em] text-paper/80 transition-all hover:text-paper hover:underline"
              >
                <span>{SUPPORT.secondaryCta}</span>
                <span className="transition-transform group-hover:translate-x-1">
                  →
                </span>
              </a>
            </div>
          </ScrollReveal>

          {/* Right: fiscal integrity card */}
          <ScrollReveal
            delay={0.2}
            className="mt-space-2xl pt-space-lg lg:col-span-4 lg:mt-0"
          >
            <div className="flex flex-col gap-space-sm rounded border border-paper/10 bg-surface-container-highest/5 p-space-lg">
              <span className="font-label-caps text-label-caps uppercase tracking-[0.16em] text-paper-dim">
                {SUPPORT.fiscalLabel}
              </span>
              <p className="font-serif-aside text-serif-aside italic text-paper/60">
                {SUPPORT.fiscalBody}
              </p>
              <div className="mt-space-md font-label-caps text-[10px] uppercase tracking-widest text-paper/40">
                {SUPPORT.fiscalCode}
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}