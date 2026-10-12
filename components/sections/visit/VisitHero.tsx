"use client";

import { m } from "motion/react";
import { VISIT_HERO } from "@/lib/visit-constants";

export function VisitHero() {
  const { image, cta, meta, editorial, specs, display } = VISIT_HERO;

  return (
    <section className="relative w-full overflow-hidden border-b border-line bg-paper">
      {/* Split hero */}
      <div className="relative grid min-h-[640px] w-full grid-cols-1 items-stretch lg:min-h-[740px] lg:grid-cols-12">
        {/* Left: Full-bleed photograph */}
        <div className="group relative h-[400px] w-full min-h-[420px] overflow-hidden border-b border-line bg-paper-deep lg:col-span-6 lg:h-auto lg:border-b-0 lg:border-r">
          <m.img
            initial={{ scale: 1.05, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            src={image.src}
            alt={image.alt}
            className="h-full w-full object-cover grayscale contrast-125 transition-transform duration-1000 ease-out group-hover:scale-105"
          />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-transparent via-[#EDE8DE]/20 to-[#EDE8DE]" />
          <div className="pointer-events-none absolute inset-0 bg-ink/10 mix-blend-multiply" />

          {/* Plate tag */}
          <div className="absolute left-space-md top-space-md border border-line bg-paper/90 px-space-sm py-0.5 backdrop-blur-sm transition-transform duration-300 group-hover:-translate-y-0.5">
            <span className="font-label-caps text-[10px] uppercase tracking-widest text-ink">
              {image.plate}
            </span>
          </div>

          {/* CTA pill */}
          <div className="absolute bottom-space-xl left-space-md z-20 lg:left-space-xl">
            <a
              href="#bookTourBtn"
              className="group/cta inline-flex h-[48px] items-center justify-center gap-space-xs rounded-full border border-ink bg-ink px-space-lg font-label-caps text-label-caps uppercase tracking-[0.16em] text-paper shadow-lg transition-all duration-300 hover:-translate-y-0.5 hover:bg-paper hover:text-ink hover:shadow-xl active:translate-y-0"
            >
              <span className="inline-block transition-transform duration-200 group-hover/cta:rotate-45">
                ↗
              </span>
              {cta}
            </a>
          </div>
        </div>

        {/* Right: Editorial */}
        <m.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.75,
            ease: [0.16, 1, 0.3, 1],
            delay: 0.2,
          }}
          className="relative z-10 flex flex-col justify-between bg-paper p-space-lg md:p-space-xl lg:col-span-6 lg:p-space-2xl"
        >
          {/* Meta bar */}
          <div className="mb-space-xl flex items-center justify-between border-b border-line pb-space-md">
            <span className="font-label-caps text-label-caps uppercase tracking-[0.16em] text-ink">
              {meta.section}
            </span>
            <span className="font-serif-aside text-serif-aside italic text-ink-muted">
              {meta.epoch}
            </span>
          </div>

          {/* Body */}
          <div className="my-auto py-space-lg">
            <div className="mb-space-sm inline-block">
              <span className="font-label-caps text-[11px] uppercase tracking-[0.2em] text-ink-faint">
                {editorial.eyebrow}
              </span>
            </div>
            <h2 className="mb-space-lg font-headline-sm text-[26px] font-bold uppercase leading-[1.05] tracking-tight text-ink md:text-[34px]">
              {editorial.headline}
            </h2>
            <p className="mb-space-md font-body-md text-body-md leading-relaxed text-ink-muted">
              {editorial.body}
            </p>
            <p className="font-serif-aside text-body-sm italic leading-normal text-ink-faint">
              {editorial.footnote}
            </p>
          </div>

          {/* Spec grid */}
          <div className="mt-space-lg grid grid-cols-2 gap-space-md border-t border-line pt-space-lg">
            {specs.map((spec) => (
              <div
                key={spec.label}
                className="transition-colors duration-200 hover:text-ink"
              >
                <span className="mb-space-xs block font-label-caps text-label-caps uppercase text-ink-faint">
                  {spec.label}
                </span>
                <span className="font-serif-aside text-serif-aside italic text-ink">
                  {spec.value}
                </span>
              </div>
            ))}
          </div>
        </m.div>
      </div>

      {/* Display banner */}
      <div className="relative w-full border-t border-line bg-paper px-margin-mobile pb-space-2xl pt-space-xl md:px-margin">
        <div className="mx-auto max-w-[1440px]">
          {/* Line 1 */}
          <div className="group relative flex flex-wrap items-center justify-between gap-space-md">
            <h1 className="select-none font-display-l text-[48px] font-black uppercase leading-[0.88] tracking-tight text-ink transition-transform duration-500 ease-out hover:translate-x-1 sm:text-[72px] md:text-[100px] lg:text-[132px]">
              {display.line1}
            </h1>
            <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full border border-ink bg-paper transition-transform duration-700 ease-out hover:rotate-180 hover:bg-ink hover:text-paper md:h-14 md:w-14">
              <span className="select-none font-serif-aside text-[20px] leading-none transition-colors duration-200 md:text-[26px]">
                {display.star}
              </span>
            </div>
          </div>

          {/* Overlapping pill */}
          <div className="relative z-20 my-space-xs flex justify-center md:justify-start md:pl-space-3xl">
            <div className="inline-flex cursor-default items-center gap-space-xs rounded-full border border-ink bg-paper px-space-md py-1 font-label-caps text-[10px] uppercase tracking-[0.16em] text-ink shadow-sm transition-all duration-300 hover:scale-105 hover:bg-ink hover:text-paper md:text-[11px]">
              <span>{display.badge}</span>
              <span
                className="inline-block animate-spin text-[12px]"
                style={{ animationDuration: "9s" }}
              >
                {display.badgeStar}
              </span>
            </div>
          </div>

          {/* Line 2 with inset image */}
          <div className="group relative z-10 flex flex-wrap items-baseline gap-x-space-md gap-y-space-xs">
            <span className="select-none font-display-l text-[48px] font-black uppercase leading-[0.88] tracking-tight text-ink transition-transform duration-500 ease-out hover:translate-x-1 sm:text-[72px] md:text-[100px] lg:text-[132px]">
              {display.line2Left}
            </span>
            <div className="group/photo relative mx-1 my-auto inline-block h-[38px] w-[110px] overflow-hidden border border-ink bg-paper-deep align-middle shadow-sm transition-transform duration-300 hover:scale-105 sm:h-[54px] sm:w-[150px] md:h-[68px] md:w-[175px]">
              <img
                src={display.insetImage}
                alt={display.insetAlt}
                className="h-full w-full object-cover grayscale contrast-125 transition-transform duration-700 group-hover/photo:scale-110"
              />
              <div className="absolute bottom-0 right-0 bg-ink px-1 font-label-caps text-[8px] uppercase tracking-widest text-paper transition-colors group-hover/photo:bg-paper group-hover/photo:text-ink">
                {display.insetTag}
              </div>
            </div>
            <span className="select-none font-display-l text-[48px] font-black uppercase leading-[0.88] tracking-tight text-ink transition-transform duration-500 ease-out hover:translate-x-1 sm:text-[72px] md:text-[100px] lg:text-[132px]">
              {display.line2Right}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}