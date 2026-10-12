"use client";

import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { BOOK_TOUR } from "@/lib/visit-constants";

export function BookTourSection() {
  return (
    <section
      id="bookTourBtn"
      className="group/ink-section relative w-full overflow-hidden bg-ink py-space-5xl text-paper"
    >
      {/* Ambient glow */}
      <div className="pointer-events-none absolute -top-40 right-10 h-96 w-96 rounded-full bg-paper/5 blur-3xl" />

      <div className="relative z-10 mx-auto max-w-[1440px] px-margin-mobile md:px-margin">
        <ScrollReveal className="mb-space-3xl flex items-center justify-between border-b border-ink-muted/40 pb-space-lg">
          <span className="font-serif-aside text-serif-aside italic text-paper-dim">
            {BOOK_TOUR.marker}
          </span>
          <span className="font-label-caps text-label-caps uppercase tracking-[0.16em] text-paper-dim">
            {BOOK_TOUR.tag}
          </span>
        </ScrollReveal>

        <div className="grid grid-cols-1 items-end gap-gutter lg:grid-cols-12">
          <ScrollReveal className="lg:col-span-8">
            <h2 className="mb-space-xl font-display-l text-display-l uppercase leading-[0.92] tracking-tight text-paper transition-all duration-700">
              {BOOK_TOUR.headline.map((line, i) => (
                <span key={line}>
                  {line}
                  {i < BOOK_TOUR.headline.length - 1 && <br />}
                </span>
              ))}
            </h2>
            <p className="max-w-2xl font-body-l text-body-l leading-relaxed text-paper-dim/80">
              {BOOK_TOUR.body}
            </p>
          </ScrollReveal>

          <ScrollReveal
            delay={0.1}
            className="mt-space-2xl flex flex-col items-start justify-end lg:col-span-4 lg:mt-0 lg:items-end"
          >
            <div className="flex w-full flex-col items-start gap-space-md lg:items-end">
              <a
                href="#"
                className="inline-flex h-[52px] items-center justify-center rounded-full bg-paper px-space-xl font-label-caps text-label-caps uppercase tracking-[0.16em] text-ink shadow-lg transition-all duration-300 hover:scale-105 hover:bg-white hover:shadow-[0_0_30px_rgba(237,232,222,0.35)] active:scale-95"
              >
                {BOOK_TOUR.cta}
              </a>
              <span className="font-serif-aside text-[15px] italic text-paper-dim/60">
                {BOOK_TOUR.ctaFootnote}
              </span>
            </div>
          </ScrollReveal>
        </div>

        {/* Secondary spec banner */}
        <div className="mt-space-4xl grid grid-cols-1 gap-gutter border-t border-ink-muted/30 pt-space-xl text-paper-dim sm:grid-cols-2 md:grid-cols-4">
          {BOOK_TOUR.specs.map((spec, i) => (
            <ScrollReveal key={spec.label} delay={0.08 * i}>
              <span className="mb-1 block font-label-caps text-[10px] uppercase tracking-widest text-paper-dim/50">
                {spec.label}
              </span>
              <span className="font-body-md text-body-md font-semibold text-paper">
                {spec.value}
              </span>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}