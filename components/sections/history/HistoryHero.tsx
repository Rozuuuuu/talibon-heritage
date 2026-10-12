"use client";

import { m } from "motion/react";
import { HISTORY_HERO } from "@/lib/history-constants";

export function HistoryHero() {
  const { meta, figure, cta, editorial, display } = HISTORY_HERO;

  return (
    <section className="relative w-full overflow-hidden border-b border-line bg-paper">
      <div className="relative flex min-h-[640px] w-full flex-col justify-between lg:min-h-[720px]">
        {/* ============ Metadata Bar ============ */}
        <div className="relative z-20 mx-auto flex w-full max-w-[1440px] items-center justify-between border-b border-line px-margin-mobile pb-4 pt-6 md:px-margin md:pt-8">
          <div className="flex items-center gap-3">
            <span className="font-label-caps text-label-caps uppercase tracking-[0.16em] text-ink">
              {meta.section}
            </span>
            <span className="font-mono text-xs text-ink-muted">
              {meta.divider}
            </span>
            <span className="hidden font-label-caps text-label-caps uppercase text-ink-muted sm:inline">
              {meta.diocese}
            </span>
          </div>
          <div className="flex items-center gap-2">
            <span className="font-serif-aside text-serif-aside italic text-ink">
              {meta.epoch}
            </span>
            <span className="text-xs text-ink-faint">{"\\\\"}</span>
          </div>
        </div>

        {/* ============ Split Area ============ */}
        <div className="relative grid w-full flex-grow grid-cols-1 lg:grid-cols-12">
          {/* Left: Archival photo column */}
          <div className="group relative flex min-h-[420px] flex-col justify-end overflow-hidden lg:col-span-6 lg:min-h-full">
            <m.img
              initial={{ scale: 1.05, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
              src={figure.image}
              alt={figure.alt}
              className="absolute inset-0 h-full w-full object-cover object-top grayscale contrast-125 transition-transform duration-1000 ease-out group-hover:scale-[1.035]"
            />
            {/* Warm paper gradient */}
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-transparent via-paper/40 to-paper" />
            <div className="pointer-events-none absolute inset-0 bg-paper/20 mix-blend-multiply" />

            {/* Meta + CTA overlaying bottom of photo */}
            <div className="relative z-20 flex flex-col items-start justify-between gap-4 bg-gradient-to-t from-paper via-paper/90 to-transparent p-margin-mobile pt-12 sm:flex-row sm:items-center md:p-margin">
              <div className="flex flex-col">
                <span className="font-label-caps text-label-caps uppercase tracking-[0.16em] text-ink">
                  {figure.label}
                </span>
                <span className="font-serif-aside text-xs italic text-ink-muted">
                  {figure.caption}
                </span>
              </div>
              <a
                href="#archive"
                className="group/cta inline-flex items-center gap-2 rounded-full border border-ink bg-ink px-5 py-2.5 font-label-caps text-label-caps uppercase tracking-[0.14em] text-paper shadow-sm transition-all hover:scale-105 hover:bg-ink-muted active:scale-95"
              >
                <span>{cta}</span>
                <span className="text-sm leading-none transition-transform group-hover/cta:translate-x-0.5">
                  ↗
                </span>
              </a>
            </div>
          </div>

          {/* Right: Editorial narrative */}
          <m.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.75,
              ease: [0.16, 1, 0.3, 1],
              delay: 0.2,
            }}
            className="relative z-10 flex flex-col justify-between border-t border-line bg-paper p-margin-mobile md:p-margin lg:col-span-6 lg:border-l lg:border-t-0"
          >
            <div className="max-w-xl space-y-6 pt-4 lg:pt-8">
              <div className="flex items-center gap-2">
                <span className="font-serif-aside text-serif-aside italic text-ink-muted">
                  {editorial.eyebrowA}
                </span>
                <span className="font-mono text-xs text-ink-faint">
                  {editorial.divider}
                </span>
                <span className="font-label-caps text-label-caps uppercase tracking-widest text-ink">
                  {editorial.eyebrowB}
                </span>
              </div>
              <h2 className="font-display-m text-display-m-mobile font-black uppercase tracking-tight text-ink md:text-[40px] md:leading-[44px]">
                {editorial.headline}
              </h2>
              <p className="font-body-md leading-relaxed text-ink-muted">
                {editorial.body}
              </p>
            </div>

            <div className="mt-8 grid grid-cols-2 gap-4 border-t border-line pt-8">
              {editorial.specs.map((spec) => (
                <div key={spec.label}>
                  <span className="block font-label-caps text-label-caps uppercase text-ink-faint">
                    {spec.label}
                  </span>
                  <span className="font-serif-aside text-[17px] italic leading-tight text-ink">
                    {spec.value}
                  </span>
                </div>
              ))}
            </div>
          </m.div>
        </div>

        {/* ============ Display Typography Layer ============ */}
        <div className="relative z-20 w-full overflow-hidden border-t border-line bg-paper/95 py-4 md:py-6">
          <div className="relative mx-auto flex max-w-[1440px] flex-col items-center justify-center px-margin-mobile text-center md:px-margin">
            {/* Line 1 */}
            <div className="group/badge relative inline-flex items-center justify-center">
              <span
                className="font-display-l text-display-l-mobile font-black uppercase leading-none tracking-tighter text-ink md:text-[88px] lg:text-[108px]"
                style={{
                  textShadow:
                    "0 0 16px rgba(254,249,239,0.9), 0 0 32px rgba(254,249,239,0.8)",
                }}
              >
                {display.line1}
              </span>
              <div className="absolute -right-8 -top-2 hidden h-7 w-7 cursor-pointer items-center justify-center rounded-full border border-ink bg-paper shadow-sm transition-transform duration-500 hover:rotate-90 hover:scale-115 sm:flex md:-right-12 md:-top-4 md:h-9 md:w-9">
                <span className="text-xs font-bold leading-none text-ink md:text-sm">
                  {display.star}
                </span>
              </div>
            </div>

            {/* Overlapping pill badge */}
            <div className="-my-2 z-30 inline-flex cursor-pointer items-center gap-2 rounded-full border border-ink bg-paper px-4 py-1 shadow-sm transition-transform hover:scale-105 hover:bg-paper-dim/40 md:-my-3">
              <span className="h-1.5 w-1.5 rounded-full bg-ink" />
              <span className="font-label-caps text-label-caps font-semibold uppercase tracking-[0.18em] text-ink">
                {display.badge}
              </span>
              <span className="h-1.5 w-1.5 rounded-full bg-ink" />
            </div>

            {/* Line 2 with inset image */}
            <div className="relative mt-1 inline-flex flex-wrap items-center justify-center gap-2 md:gap-4">
              <span
                className="font-display-l text-display-l-mobile font-black uppercase leading-none tracking-tighter text-ink md:text-[88px] lg:text-[108px]"
                style={{
                  textShadow:
                    "0 0 16px rgba(254,249,239,0.9), 0 0 32px rgba(254,249,239,0.8)",
                }}
              >
                {display.line2Left}
              </span>
              <div className="group/frame my-auto inline-block h-[36px] w-[110px] overflow-hidden rounded-sm border border-ink bg-paper-dim shadow-sm transition-transform duration-300 hover:scale-105 md:h-[58px] md:w-[160px]">
                <img
                  src={display.insetImage}
                  alt={display.insetAlt}
                  className="h-full w-full object-cover grayscale contrast-125 transition-transform duration-500 group-hover/frame:scale-110"
                />
              </div>
              <span
                className="font-display-l text-display-l-mobile font-black uppercase leading-none tracking-tighter text-ink md:text-[88px] lg:text-[108px]"
                style={{
                  textShadow:
                    "0 0 16px rgba(254,249,239,0.9), 0 0 32px rgba(254,249,239,0.8)",
                }}
              >
                {display.line2Right}
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}