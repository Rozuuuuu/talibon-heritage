"use client";

import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { AnimatedCounter } from "@/components/ui/AnimatedCounter";
import { STATS } from "@/lib/constants";

export function StatsSection() {
  return (
    <section className="w-full bg-paper-dim py-space-3xl">
      <div className="mx-auto max-w-[1440px] px-margin-mobile md:px-margin">
        <ScrollReveal className="mb-space-xl flex items-center justify-between pb-space-xl">
          <span className="font-label-caps text-label-caps uppercase tracking-[0.16em] text-ink-muted">
            02 / BY THE NUMBERS
          </span>
          <span className="font-serif-aside text-serif-aside italic text-ink-muted">
            Chronometric Index of the Parish
          </span>
        </ScrollReveal>

        <div className="grid grid-cols-1 gap-gutter sm:grid-cols-2 lg:grid-cols-4 lg:gap-0">
          {STATS.map((stat, i) => (
            <ScrollReveal
              key={stat.epoch}
              delay={0.1 * (i + 1)}
              className={
                i === 0
                  ? "group flex flex-col py-space-md lg:pr-space-xl"
                  : i === STATS.length - 1
                    ? "group flex flex-col py-space-md lg:pl-space-xl"
                    : "group flex flex-col py-space-md lg:px-space-xl"
              }
            >
              <span className="mb-space-xs font-label-caps text-[10px] uppercase tracking-[0.2em] text-ink-muted">
                {stat.epoch}
              </span>
              <AnimatedCounter
                target={stat.target}
                className="font-display-m text-display-m font-extrabold uppercase leading-none text-ink"
              />
              <span className="mt-space-sm font-serif-aside text-[20px] italic text-ink-muted transition-colors group-hover:text-ink">
                {stat.label}
              </span>
              <p className="mt-space-xs font-body-sm text-[13px] leading-normal text-ink-muted/80">
                {stat.description}
              </p>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}