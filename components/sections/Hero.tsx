"use client";

import Image from "next/image";
import { m } from "motion/react";
import { HERO, HERO_META } from "@/lib/constants";

export function Hero() {
  return (
    <section className="relative mx-auto w-full overflow-hidden pt-space-md pb-space-3xl md:pt-space-lg">
      {/* ============ Metadata Bar ============ */}
      <m.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
        className="relative z-30 mb-space-md grid grid-cols-2 items-center gap-gutter border-b border-line/40 px-margin-mobile pb-space-md md:grid-cols-12 md:px-margin"
      >
        <div className="col-span-1 flex items-center gap-space-xs md:col-span-5">
          <span className="font-serif-aside text-serif-aside italic text-ink-muted">
            {HERO_META.epoch}
          </span>
        </div>
        <div className="hidden justify-start md:col-span-4 md:flex">
          <span className="font-label-caps text-label-caps uppercase tracking-[0.16em] text-ink-muted">
            {HERO_META.monograph}
          </span>
        </div>
        <div className="col-span-1 flex items-center justify-end gap-space-sm md:col-span-3">
          <span className="font-label-caps text-label-caps uppercase tracking-[0.16em] text-ink">
            {HERO_META.archive}
          </span>
          <span className="inline-block h-1.5 w-1.5 animate-pulse rounded-full bg-ink" />
        </div>
      </m.div>

      {/* ============ Hero Composition ============ */}
      <div className="relative min-h-[620px] w-full sm:min-h-[680px] lg:min-h-[820px]">
        {/* Left cathedral image */}
        <m.div
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          className="pointer-events-none absolute bottom-0 left-0 top-0 z-10 w-full select-none overflow-hidden md:w-1/2"
        >
          <div className="relative h-full w-full">
            <Image
              src={HERO.backgroundImage}
              alt={HERO.backgroundAlt}
              fill
              priority
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover object-top contrast-125 grayscale transition-transform duration-1000 ease-out hover:scale-105"
            />
            <div
              className="absolute inset-0"
              style={{
                background:
                  "linear-gradient(to bottom, #EDE8DE 0%, rgba(237,232,222,0.9) 8%, rgba(237,232,222,0) 24%, rgba(22,19,15,0.18) 100%)",
              }}
            />
            <div className="absolute inset-0 hidden border-r border-line/40 md:block" />
          </div>
        </m.div>

        {/* Bottom-left CTA — full width on mobile, pill on sm+ */}
        <m.a
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1], delay: 0.4 }}
          href="/history"
          className="group absolute bottom-3 left-3 right-3 z-30 inline-flex items-center justify-center gap-space-xs rounded-full border border-ink bg-ink px-space-md py-3 font-label-caps text-[10px] uppercase tracking-[0.14em] text-paper shadow-md transition-all duration-250 hover:bg-paper hover:text-ink sm:bottom-4 sm:left-4 sm:right-auto sm:px-space-lg sm:py-2.5 sm:text-[11px] md:text-label-caps"
        >
          <span className="material-symbols-outlined text-[15px] transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5">
            north_east
          </span>
          <span>JOURNEY THROUGH OUR PROJECTS</span>
        </m.a>

        {/* ============ Typography Layer ============ */}
        <m.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1], delay: 0.15 }}
          className="relative z-20 w-full px-margin-mobile pt-2 md:px-margin"
        >
          {/* Line 1: ANCIENT STONE */}
          <div className="flex w-full items-center justify-between">
            <h1 className="fluid-display-xl hero-text-halo select-none font-display-xl font-black uppercase text-ink">
              ANCIENT STONE
            </h1>
            <div className="group hidden h-20 w-20 shrink-0 cursor-pointer items-center justify-center rounded-full bg-ink text-paper shadow-sm transition-transform duration-500 hover:rotate-45 md:flex lg:h-28 lg:w-28">
              <svg
                className="h-10 w-10 fill-current transition-transform duration-300 group-hover:scale-110 lg:h-14 lg:w-14"
                viewBox="0 0 24 24"
                aria-hidden
              >
                <path d="M12 2C12 7.52 7.52 12 2 12C7.52 12 12 16.48 12 22C12 16.48 16.48 12 22 12C16.48 12 12 7.52 12 2Z" />
              </svg>
            </div>
          </div>

          {/* Middle CTA */}
          <div className="relative z-30 -my-2 flex justify-center sm:-my-4 md:-my-6 lg:-my-8">
            <a
              href="#restoration"
              className="inline-flex items-center gap-space-xs rounded-full border border-ink bg-paper px-space-md py-1.5 font-label-caps text-[10px] uppercase tracking-[0.14em] text-ink shadow-sm transition-all duration-250 hover:bg-ink hover:text-paper hover:shadow-md sm:px-space-xl sm:py-2 sm:text-label-caps"
            >
              GET FREE CONSULTATION
            </a>
          </div>

          {/* Line 2: LIVING [image] BUILD */}
          <div className="mt-1 flex w-full items-baseline justify-between gap-2 sm:mt-2">
            <span className="fluid-display-xl hero-text-halo select-none font-display-xl font-black uppercase text-ink">
              LIVING
            </span>
            <div className="group mx-2 hidden shrink-0 overflow-hidden border-2 border-ink bg-paper-deep shadow-sm md:inline-flex lg:mx-4">
              <Image
                src={HERO.insetImage}
                alt={HERO.insetAlt}
                width={192}
                height={96}
                className="h-16 w-32 object-cover contrast-125 grayscale transition-transform duration-500 group-hover:scale-105 group-hover:contrast-130 lg:h-24 lg:w-48"
              />
            </div>
            <span className="fluid-display-xl hero-text-halo select-none font-display-xl font-black uppercase text-ink">
              BUILD
            </span>
          </div>
        </m.div>

        {/* ============ Lower Hero Grid ============ */}
        <div className="relative z-20 mt-6 grid grid-cols-1 items-start px-margin-mobile sm:mt-10 md:mt-14 md:grid-cols-12 md:px-margin lg:mt-16">
          <div className="pointer-events-none hidden min-h-[340px] md:col-span-6 md:block lg:min-h-[420px]" />

          <m.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "0px 0px -40px 0px" }}
            transition={{
              duration: 0.75,
              ease: [0.16, 1, 0.3, 1],
              delay: 0.2,
            }}
            className="col-span-1 flex flex-col justify-between pt-6 md:col-span-6 md:min-h-[420px] md:pl-space-xl md:pt-10 lg:pl-space-2xl"
          >
            <div className="flex flex-col items-start space-y-space-md">
              <div className="font-serif-aside text-[16px] italic text-ink-muted md:text-[18px]">
                {HERO.eyebrow}
              </div>
              <h2 className="max-w-xl font-headline-sm text-[24px] font-black uppercase leading-[1.08] tracking-tight text-ink sm:text-[32px] md:text-[38px] lg:text-[44px]">
                {HERO.headline}
              </h2>
            </div>

            <div className="mt-space-xl flex flex-col items-end pt-space-lg text-right md:mt-auto md:pt-space-xl">
              <div className="mb-2 select-none font-label-caps text-[12px] tracking-[0.2em] text-ink-muted">
                //
              </div>
              <p className="max-w-sm font-label-caps text-[11px] uppercase leading-relaxed tracking-[0.14em] text-ink-muted md:text-[12px]">
                {HERO.footnote}
              </p>
              <div className="mt-2 select-none font-label-caps text-[12px] tracking-[0.2em] text-ink-muted">
                \\\\
              </div>
            </div>
          </m.div>
        </div>
      </div>
    </section>
  );
}