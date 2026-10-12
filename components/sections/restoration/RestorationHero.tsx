"use client";

import { m } from "motion/react";
import { RESTORATION_HERO } from "@/lib/restoration-constants";

export function RestorationHero() {
  const { meta, image, cta, prologue, footnotes, display } = RESTORATION_HERO;

  return (
    <section className="relative w-full overflow-hidden border-b border-line bg-paper">
      {/* Split layout */}
      <div className="relative grid min-h-[620px] grid-cols-1 items-stretch border-b border-line lg:min-h-[700px] lg:grid-cols-12">
        {/* Left: Archival photo */}
        <div className="group relative flex min-h-[460px] w-full flex-col justify-end overflow-hidden border-b border-line bg-paper-deep lg:col-span-6 lg:min-h-full lg:border-b-0 lg:border-r">
          <img
            src={image.src}
            alt={image.alt}
            className="absolute inset-0 h-full w-full scale-100 object-cover brightness-95 contrast-125 grayscale transition-transform duration-1000 ease-out group-hover:scale-[1.03]"
          />
          <div
            className="pointer-events-none absolute inset-0"
            style={{
              background:
                "linear-gradient(to top, #EDE8DE 0%, rgba(237,232,222,0.3) 50%, rgba(237,232,222,0.8) 100%)",
              mixBlendMode: "multiply",
            }}
          />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-paper via-transparent to-black/60" />

          {/* Bottom-anchored badges + CTA */}
          <div className="relative z-10 flex flex-col justify-between gap-space-md p-space-lg sm:flex-row sm:items-end lg:p-space-xl">
            <div className="flex flex-col gap-space-xs text-paper">
              <span className="font-label-caps text-label-caps uppercase tracking-[0.16em] text-paper-dim">
                {image.plateLabel}
              </span>
              <span className="font-serif-aside text-[14px] italic text-paper/80">
                {image.plateCaption}
              </span>
            </div>
            <a
              href="#support"
              className="group/btn inline-flex h-[44px] items-center gap-space-xs rounded-full bg-ink px-space-lg font-label-caps text-label-caps uppercase tracking-[0.1em] text-paper shadow-md transition-all hover:scale-[1.03] hover:bg-paper hover:text-ink active:scale-[0.98]"
            >
              <span className="transition-transform group-hover/btn:translate-x-0.5">
                {cta}
              </span>
            </a>
          </div>
        </div>

        {/* Right: Editorial narrative */}
        <div className="relative z-10 flex flex-col justify-between bg-paper p-space-lg md:p-space-xl lg:col-span-6 lg:p-space-2xl">
          <div>
            {/* Section header row */}
            <div className="mb-space-xl flex items-center justify-between border-b border-line pb-space-md">
              <div className="flex items-center gap-space-sm">
                <span className="font-label-caps text-label-caps uppercase tracking-[0.16em] text-ink">
                  {meta.section}
                </span>
                <span className="font-label-caps text-[11px] text-ink-muted">
                  {meta.divider}
                </span>
              </div>
              <span className="font-serif-aside text-serif-aside italic text-ink">
                {meta.epoch}
              </span>
            </div>

            {/* Prologue block */}
            <div className="mb-space-xl">
              <span className="mb-space-sm block font-label-caps text-label-caps uppercase tracking-[0.16em] text-ink-faint">
                {prologue.label}
              </span>
              <h2 className="mb-space-lg font-display-m text-[28px] font-extrabold uppercase leading-[1.08] tracking-tight text-ink md:text-[38px] lg:text-[44px]">
                {prologue.headline}
              </h2>
              <p className="font-body-md leading-relaxed text-ink-muted md:font-body-l md:text-body-l">
                {prologue.body}
              </p>
            </div>
          </div>

          {/* Footnotes */}
          <div className="flex flex-col items-start justify-between gap-space-md border-t border-line pt-space-xl sm:flex-row sm:items-center">
            <div>
              <span className="mb-space-xs block font-label-caps text-label-caps uppercase tracking-[0.16em] text-ink-faint">
                {footnotes.leftLabel}
              </span>
              <span className="font-serif-aside text-serif-aside italic text-ink">
                {footnotes.leftValue}
              </span>
            </div>
            <div>
              <span className="mb-space-xs block font-label-caps text-label-caps uppercase tracking-[0.16em] text-ink-faint">
                {footnotes.rightLabel}
              </span>
              <span className="font-serif-aside text-serif-aside italic text-ink">
                {footnotes.rightValue}
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Display typography banner */}
      <div className="relative mx-auto max-w-[1440px] select-none px-margin-mobile pb-space-3xl pt-space-2xl md:px-margin">
        {/* Line 1 */}
        <div className="relative z-10 flex flex-wrap items-center justify-between gap-space-md">
          <div className="font-display-l text-[56px] font-black uppercase leading-none tracking-tight text-ink sm:text-[80px] md:text-[110px] lg:text-[136px]">
            {display.line1}
          </div>
          <div className="flex h-12 w-12 cursor-pointer items-center justify-center self-center rounded-full border border-ink text-ink shadow-sm transition-all duration-700 hover:rotate-180 hover:bg-ink hover:text-paper md:h-16 md:w-16">
            <span className="select-none font-serif-aside text-[26px] leading-none md:text-[34px]">
              {display.star}
            </span>
          </div>
        </div>

        {/* Center pill */}
        <div className="relative z-20 -my-3 flex justify-center sm:-my-5">
          <div className="inline-flex cursor-default items-center gap-space-xs rounded-full border border-ink bg-paper px-space-lg py-1.5 font-label-caps text-label-caps uppercase tracking-[0.16em] text-ink shadow-sm transition-all duration-300 hover:scale-105 hover:bg-ink hover:text-paper">
            {display.badge}
          </div>
        </div>

        {/* Line 2 with inset image */}
        <div className="relative z-10 flex flex-wrap items-center justify-start gap-space-md pt-space-xs md:gap-space-lg">
          <span className="font-display-l text-[56px] font-black uppercase leading-none tracking-tight text-ink sm:text-[80px] md:text-[110px] lg:text-[136px]">
            {display.line2Left}
          </span>
          <div className="group mx-1 h-[44px] w-[120px] flex-shrink-0 cursor-pointer self-center overflow-hidden rounded border border-ink bg-paper-deep shadow-sm transition-all hover:border-ink hover:shadow-md sm:mx-2 sm:h-[64px] sm:w-[150px] md:h-[84px] md:w-[180px]">
            <img
              src={display.insetImage}
              alt={display.insetAlt}
              className="h-full w-full object-cover grayscale contrast-125 transition-all duration-500 group-hover:scale-110 group-hover:grayscale-0"
            />
          </div>
          <span className="font-display-l text-[56px] font-black uppercase leading-none tracking-tight text-ink sm:text-[80px] md:text-[110px] lg:text-[136px]">
            {display.line2Right}
          </span>
        </div>
      </div>
    </section>
  );
}