"use client";

import Image from "next/image";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { QUOTE } from "@/lib/constants";

export function QuoteSection() {
  return (
    <section className="w-full bg-paper py-space-4xl">
      <div className="mx-auto max-w-[1440px] px-margin-mobile md:px-margin">
        <div className="grid grid-cols-1 items-center gap-gutter lg:grid-cols-12">
          {/* Statement */}
          <ScrollReveal className="flex flex-col gap-space-lg pr-0 lg:col-span-9 lg:pr-space-2xl">
            <span className="font-label-caps text-label-caps uppercase tracking-[0.16em] text-ink-muted">
              {QUOTE.eyebrow}
            </span>
            <blockquote className="font-display-m text-display-m font-bold uppercase leading-tight tracking-tight text-ink">
              &ldquo;{QUOTE.body}&rdquo;
            </blockquote>
            <div className="flex flex-col gap-0.5 pt-space-xs">
              <cite className="font-serif-aside text-[20px] font-normal not-italic text-ink">
                — {QUOTE.attribution}
              </cite>
              <span className="font-label-caps text-label-caps uppercase tracking-[0.16em] text-ink-muted">
                {QUOTE.role}
              </span>
            </div>
          </ScrollReveal>

          {/* Portrait */}
          <ScrollReveal
            delay={0.2}
            className="mt-space-xl flex justify-start lg:col-span-3 lg:mt-0 lg:justify-end"
          >
            <div className="group w-48 bg-paper-dim p-space-xs shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
              <div className="aspect-square w-full overflow-hidden bg-paper-deep">
                <Image
                  src={QUOTE.portrait}
                  alt={QUOTE.portraitAlt}
                  width={192}
                  height={192}
                  className="h-full w-full object-cover contrast-125 grayscale transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="pt-space-xs text-center">
                <p className="font-serif-aside text-[12px] italic text-ink-muted">
                  {QUOTE.portraitCaption}
                </p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}