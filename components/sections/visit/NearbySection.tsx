"use client";

import { m } from "motion/react";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { NEARBY } from "@/lib/visit-constants";

export function NearbySection() {
  return (
    <section className="w-full border-t border-line bg-paper py-space-4xl">
      <div className="mx-auto max-w-[1440px] px-margin-mobile md:px-margin">
        <ScrollReveal className="mb-space-2xl flex items-center justify-between border-b border-line pb-space-lg">
          <span className="font-label-caps text-label-caps uppercase tracking-[0.16em] text-ink">
            {NEARBY.section}
          </span>
          <span className="font-serif-aside text-serif-aside italic text-ink-muted">
            {NEARBY.right}
          </span>
        </ScrollReveal>

        <ScrollReveal className="mb-space-2xl max-w-2xl">
          <h2 className="font-display-m text-display-m uppercase leading-[0.98] tracking-tight text-ink">
            {NEARBY.headline.map((line, i) => (
              <span key={line}>
                {line}
                {i < NEARBY.headline.length - 1 && <br />}
              </span>
            ))}
          </h2>
        </ScrollReveal>

        <div className="grid grid-cols-1 gap-gutter md:grid-cols-3">
          {NEARBY.cards.map((card, i) => (
            <m.div
              key={card.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "0px 0px -40px 0px" }}
              transition={{
                duration: 0.75,
                ease: [0.16, 1, 0.3, 1],
                delay: 0.08 * i,
              }}
              className="group flex flex-col justify-between border border-line bg-paper transition-all duration-300 hover:-translate-y-1.5 hover:bg-paper-dim hover:shadow-xl"
            >
              <div>
                <div className="relative aspect-[4/3] overflow-hidden border-b border-line bg-paper-deep">
                  <img
                    src={card.image}
                    alt={card.alt}
                    className="h-full w-full object-cover grayscale contrast-125 transition-all duration-700 ease-out group-hover:scale-105 group-hover:contrast-100"
                  />
                  <div className="pointer-events-none absolute inset-0 bg-ink/0 transition-colors duration-300 group-hover:bg-ink/5" />
                </div>
                <div className="p-space-lg">
                  <span className="mb-space-xs block font-label-caps text-label-caps uppercase tracking-[0.16em] text-ink-faint transition-colors duration-200 group-hover:text-ink">
                    {card.eyebrow}
                  </span>
                  <h3 className="mb-space-xs font-headline-sm text-[20px] font-bold uppercase tracking-tight text-ink transition-transform duration-200 group-hover:translate-x-0.5">
                    {card.title}
                  </h3>
                  <p className="font-body-sm text-body-sm leading-relaxed text-ink-muted">
                    {card.body}
                  </p>
                </div>
              </div>
              <div className="flex items-center justify-between p-space-lg pt-0">
                <span className="font-serif-aside text-[14px] italic text-ink">
                  {card.footerLeft}
                </span>
                <span className="inline-flex items-center gap-1 font-label-caps text-label-caps uppercase text-ink transition-transform duration-200 group-hover:translate-x-1">
                  {card.footerRight} ↗
                </span>
              </div>
            </m.div>
          ))}
        </div>
      </div>
    </section>
  );
}