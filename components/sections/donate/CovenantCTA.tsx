"use client";

import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { COVENANT_CTA } from "@/lib/donate-constants";

export function CovenantCTA() {
  return (
    <section className="border-t border-ink bg-ink px-6 py-24 text-paper">
      <div className="mx-auto flex max-w-[1440px] flex-col items-center text-center">
        <ScrollReveal>
          <span className="mb-4 block font-serif-aside text-base italic text-paper/70">
            {COVENANT_CTA.marker}
          </span>
          <h2 className="mx-auto mb-8 max-w-4xl font-display-m text-4xl uppercase leading-tight tracking-tighter sm:text-6xl lg:text-7xl">
            {COVENANT_CTA.headline}
          </h2>
          <p className="mx-auto mb-10 max-w-2xl text-sm leading-relaxed text-paper/70 sm:text-base">
            {COVENANT_CTA.body}
          </p>
          <a
            href="#donate-flow"
            className="inline-block rounded-full bg-paper px-8 py-3.5 font-display-m text-xs uppercase tracking-wider text-ink shadow-lg transition-all hover:bg-white active:scale-95"
          >
            {COVENANT_CTA.cta}
          </a>
        </ScrollReveal>
      </div>
    </section>
  );
}