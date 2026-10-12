"use client";

import { m } from "motion/react";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { PHASES } from "@/lib/restoration-constants";

export function PhasesSection() {
  return (
    <section className="w-full bg-paper py-space-4xl">
      <div className="mx-auto max-w-[1440px] px-margin-mobile md:px-margin">
        <ScrollReveal className="mb-space-xl flex items-center justify-between pb-space-md">
          <span className="font-label-caps text-label-caps uppercase tracking-[0.16em] text-ink">
            {PHASES.section}
          </span>
          <span className="font-serif-aside text-serif-aside italic text-ink-muted">
            {PHASES.right}
          </span>
        </ScrollReveal>

        <ScrollReveal delay={0.1} className="mb-space-3xl">
          <h2 className="max-w-3xl font-display-m text-display-m uppercase tracking-tight text-ink">
            {PHASES.headline}
          </h2>
        </ScrollReveal>

        <div className="grid grid-cols-1 gap-px bg-line md:grid-cols-2">
          {PHASES.items.map((phase, i) => (
            <m.div
              key={phase.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "0px 0px -40px 0px" }}
              transition={{
                duration: 0.75,
                ease: [0.16, 1, 0.3, 1],
                delay: 0.1 * i,
              }}
              className="group flex flex-col justify-between bg-paper p-space-lg transition-all duration-300 hover:-translate-y-1 hover:bg-paper-dim hover:shadow-xl"
            >
              <div>
                <div className="mb-space-md flex items-start justify-between">
                  <span className="font-label-caps text-label-caps uppercase text-ink-muted transition-colors group-hover:text-ink">
                    {phase.phase}
                  </span>
                  <span className="material-symbols-outlined text-ink transition-transform duration-300 ease-out group-hover:-translate-y-1.5 group-hover:translate-x-1.5">
                    north_east
                  </span>
                </div>
                <div className="mb-space-md aspect-[4/3] w-full overflow-hidden bg-paper-deep">
                  <img
                    src={phase.image}
                    alt={phase.alt}
                    className="h-full w-full object-cover grayscale contrast-125 transition-transform duration-700 ease-out group-hover:scale-105 group-hover:contrast-110"
                  />
                </div>
                <h3 className="mb-space-xs font-headline-sm text-headline-sm uppercase text-ink">
                  {phase.title}
                </h3>
              </div>
              <p className="mt-space-sm font-serif-aside text-serif-aside italic text-ink-muted transition-colors group-hover:text-ink">
                {phase.caption}
              </p>
            </m.div>
          ))}
        </div>
      </div>
    </section>
  );
}