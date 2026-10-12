"use client";

import { useState } from "react";
import { m } from "motion/react";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { TransitMap } from "./TransitMap";
import { TRANSIT } from "@/lib/visit-constants";

export function HowToGetHere() {
  const [activePath, setActivePath] = useState<string | null>(null);

  return (
    <section className="w-full border-t border-line bg-paper-dim py-space-4xl">
      <div className="mx-auto max-w-[1440px] px-margin-mobile md:px-margin">
        <ScrollReveal className="mb-space-2xl flex items-center justify-between border-b border-line pb-space-lg">
          <span className="font-label-caps text-label-caps uppercase tracking-[0.16em] text-ink">
            {TRANSIT.section}
          </span>
          <span className="font-serif-aside text-serif-aside italic text-ink-muted">
            {TRANSIT.right}
          </span>
        </ScrollReveal>

        <ScrollReveal className="mb-space-2xl max-w-3xl">
          <h2 className="font-display-m text-display-m uppercase leading-[0.98] tracking-tight text-ink">
            {TRANSIT.headline.map((line, i) => (
              <span key={line}>
                {line}
                {i < TRANSIT.headline.length - 1 && <br />}
              </span>
            ))}
          </h2>
        </ScrollReveal>

        {/* Route cards */}
        <div className="grid grid-cols-1 divide-y divide-line border-b border-t border-line bg-paper md:grid-cols-3 md:divide-x md:divide-y-0">
          {TRANSIT.routes.map((route, i) => (
            <m.div
              key={route.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "0px 0px -40px 0px" }}
              transition={{
                duration: 0.75,
                ease: [0.16, 1, 0.3, 1],
                delay: 0.08 * i,
              }}
              onMouseEnter={() => setActivePath(route.pathId)}
              onMouseLeave={() => setActivePath(null)}
              className="group flex flex-col justify-between p-space-xl transition-all duration-300 hover:bg-paper-dim/40"
              data-route={route.id}
            >
              <div>
                <span className="mb-space-md block font-display-m text-display-m font-bold text-ink-muted/50 transition-transform duration-300 group-hover:translate-x-1 group-hover:text-ink">
                  {route.number}
                </span>
                <span className="mb-space-xs block font-label-caps text-label-caps uppercase tracking-[0.16em] text-ink-faint">
                  {route.eyebrow}
                </span>
                <h3 className="mb-space-sm font-headline-sm text-[22px] font-bold uppercase tracking-tight text-ink group-hover:underline">
                  {route.title}
                </h3>
                <p className="mb-space-md font-body-md text-body-md text-ink-muted">
                  {route.body}
                </p>
              </div>
              <div className="flex items-center justify-between border-t border-line/60 pt-space-md">
                <span className="font-serif-aside text-serif-aside italic text-ink">
                  {route.footerLeft}
                </span>
                <span className="font-label-caps text-[10px] font-semibold text-ink-faint transition-colors group-hover:text-ink">
                  {route.footerRight}
                </span>
              </div>
            </m.div>
          ))}
        </div>

        {/* Map */}
        <ScrollReveal className="mt-space-2xl">
          <TransitMap activePath={activePath} />
        </ScrollReveal>
      </div>
    </section>
  );
}