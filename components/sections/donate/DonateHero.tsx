"use client";

import { m } from "motion/react";
import { DONATE_HERO } from "@/lib/donate-constants";

export function DonateHero() {
  const { image, cta, meta, editorial, stats, display } = DONATE_HERO;

  return (
    <section className="relative w-full overflow-hidden border-b border-line bg-paper">
      {/* Split hero */}
      <div className="relative flex min-h-[580px] w-full flex-col lg:min-h-[640px] lg:flex-row">
        {/* Left: Photograph */}
        <div className="group relative flex min-h-[380px] w-full flex-col justify-end overflow-hidden bg-paper-deep md:w-1/2 lg:min-h-full">
          <m.img
            initial={{ scale: 1.05, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            src={image.src}
            alt={image.alt}
            className="absolute inset-0 h-full w-full object-cover grayscale contrast-110 sepia-[12%]"
          />
          {/* Top fade to paper */}
          <div className="pointer-events-none absolute inset-x-0 top-0 h-44 bg-gradient-to-b from-paper via-paper/40 to-transparent" />
          {/* Bottom dark shadow */}
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink/60 via-transparent to-transparent" />

          {/* Plate + CTA */}
          <div className="relative z-10 flex flex-col items-start justify-between gap-4 p-6 sm:flex-row sm:items-center md:p-8">
            <div className="border border-paper/20 bg-ink/80 px-3.5 py-1.5 font-label-caps text-[10px] uppercase text-paper backdrop-blur-sm">
              {image.plate}
            </div>
            <a
              href="#donate-flow"
              className="rounded-full bg-paper px-5 py-2.5 text-xs font-bold tracking-wider text-ink shadow-md transition-all hover:bg-white hover:shadow-lg"
            >
              ↗ {cta}
            </a>
          </div>
        </div>

        {/* Right: Editorial */}
        <m.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
          className="flex w-full flex-col justify-between border-line bg-paper p-8 md:w-1/2 md:p-14 lg:p-16"
        >
          {/* Meta bar */}
          <div className="flex items-center justify-between border-b border-line pb-4">
            <span className="font-label-caps text-xs uppercase text-ink-faint">
              {meta.section}
            </span>
            <span className="font-serif-aside text-sm italic text-ink-muted">
              {meta.epoch}
            </span>
          </div>

          {/* Manifesto */}
          <div className="my-8">
            <span className="mb-3 block font-label-caps text-[11px] uppercase tracking-widest text-ink-faint">
              {editorial.eyebrow}
            </span>
            <h2 className="mb-6 font-display-m text-2xl uppercase leading-[1.05] text-ink lg:text-3xl">
              {editorial.headline}
            </h2>
            <p className="mb-4 text-sm leading-relaxed text-ink-muted lg:text-base">
              {editorial.body}
            </p>
            <p className="font-serif-aside text-xs italic text-ink-faint lg:text-sm">
              {editorial.footnote}
            </p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 gap-6 border-t border-line pt-6">
            {stats.map((stat) => (
              <div key={stat.label}>
                <span className="block font-label-caps text-[10px] uppercase text-ink-faint">
                  {stat.label}
                </span>
                <span className="font-serif-aside text-base italic text-ink">
                  {stat.value}
                </span>
              </div>
            ))}
          </div>
        </m.div>
      </div>

      {/* Display banner */}
      <div className="relative w-full border-t border-line bg-paper px-6 pb-10 pt-8 md:px-12">
        <div className="mx-auto max-w-[1440px]">
          {/* Line 1 */}
          <div className="flex items-baseline justify-between">
            <h1
              className="font-display-xl text-5xl uppercase tracking-tighter text-ink sm:text-7xl lg:text-9xl"
              style={{
                textShadow:
                  "0 0 16px rgba(237, 232, 222, 0.95), 0 0 32px rgba(237, 232, 222, 0.7)",
              }}
            >
              {display.line1}
            </h1>
            <div className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-full bg-ink text-paper transition-transform duration-700 hover:rotate-90 lg:h-14 lg:w-14">
              <svg
                width="22"
                height="22"
                viewBox="0 0 24 24"
                fill="currentColor"
                aria-hidden
              >
                <path d="M12 0L14.5 9.5L24 12L14.5 14.5L12 24L9.5 14.5L0 12L9.5 9.5L12 0Z" />
              </svg>
            </div>
          </div>

          {/* Overlapping pill */}
          <div className="my-2 flex items-center sm:-my-3">
            <div className="inline-flex items-center gap-2 rounded-full border border-ink bg-paper px-4 py-1.5 font-label-caps text-[11px] uppercase text-ink shadow-sm transition-colors hover:bg-ink hover:text-paper">
              <span>{display.badge}</span>
              <span>{display.badgeStar}</span>
            </div>
          </div>

          {/* Line 2 with inset image */}
          <div className="flex flex-wrap items-center gap-4 sm:gap-6 lg:flex-nowrap">
            <span
              className="font-display-xl text-5xl uppercase tracking-tighter text-ink sm:text-7xl lg:text-9xl"
              style={{
                textShadow:
                  "0 0 16px rgba(237, 232, 222, 0.95), 0 0 32px rgba(237, 232, 222, 0.7)",
              }}
            >
              {display.line2Left}
            </span>
            <div className="h-14 w-24 shrink-0 overflow-hidden border border-ink bg-white shadow-md sm:h-20 sm:w-36 lg:h-24 lg:w-44">
              <img
                src={display.insetImage}
                alt={display.insetAlt}
                className="h-full w-full object-cover grayscale contrast-110 sepia-[12%] transition-transform duration-500 hover:scale-105"
              />
            </div>
            <span
              className="font-display-xl text-5xl uppercase tracking-tighter text-ink sm:text-7xl lg:text-9xl"
              style={{
                textShadow:
                  "0 0 16px rgba(237, 232, 222, 0.95), 0 0 32px rgba(237, 232, 222, 0.7)",
              }}
            >
              {display.line2Right}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}