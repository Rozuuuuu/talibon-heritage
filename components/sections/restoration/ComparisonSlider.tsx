"use client";

import { useRef, useState, useCallback } from "react";
import { m, useMotionValue, useTransform } from "motion/react";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { COMPARISON } from "@/lib/restoration-constants";

export function ComparisonSlider() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const position = useMotionValue(50);
  const clipWidth = useTransform(position, (p) => `${p}%`);
  const clipLeft = useTransform(position, (p) => `${p}%`);

  const updateFromClientX = useCallback(
    (clientX: number) => {
      const el = containerRef.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const x = Math.max(0, Math.min(clientX - rect.left, rect.width));
      const pct = (x / rect.width) * 100;
      position.set(pct);
    },
    [position]
  );

  const handlePointerDown = (e: React.PointerEvent<HTMLDivElement>) => {
    setIsDragging(true);
    e.currentTarget.setPointerCapture(e.pointerId);
    updateFromClientX(e.clientX);
  };

  const handlePointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    if (!isDragging) return;
    updateFromClientX(e.clientX);
  };

  const handlePointerUp = (e: React.PointerEvent<HTMLDivElement>) => {
    setIsDragging(false);
    if (e.currentTarget.hasPointerCapture(e.pointerId)) {
      e.currentTarget.releasePointerCapture(e.pointerId);
    }
  };

  const handleHover = (e: React.PointerEvent<HTMLDivElement>) => {
    if (isDragging) return;
    if (e.pointerType !== "mouse") return;
    updateFromClientX(e.clientX);
  };

  return (
    <section className="w-full bg-paper-dim py-space-4xl">
      <div className="mx-auto max-w-[1440px] px-margin-mobile md:px-margin">
        {/* Header */}
        <ScrollReveal className="mb-space-2xl flex flex-col items-start justify-between gap-2 pb-space-md sm:flex-row sm:items-center">
          <div className="flex flex-wrap items-center gap-space-sm">
            <span className="font-label-caps text-label-caps uppercase tracking-[0.16em] text-ink">
              {COMPARISON.section}
            </span>
            <span className="hidden font-label-caps text-[11px] text-ink-muted sm:inline">
              {COMPARISON.hint}
            </span>
          </div>
          <span className="font-serif-aside text-sm italic text-ink-muted sm:text-serif-aside">
            {COMPARISON.right}
          </span>
        </ScrollReveal>

        {/* Slider */}
        <ScrollReveal
          delay={0.1}
          className="w-full select-none border border-line bg-paper-deep shadow-md"
        >
          <div
            ref={containerRef}
            onPointerDown={handlePointerDown}
            onPointerMove={handlePointerMove}
            onPointerUp={handlePointerUp}
            onPointerCancel={handlePointerUp}
            onPointerLeave={handlePointerUp}
            onMouseMove={handleHover}
            className="relative overflow-hidden"
            style={{ touchAction: "none" }}
          >
            {/* AFTER (base layer) */}
            <div className="flex w-full flex-col bg-paper-dim p-space-sm sm:p-space-md">
              <div className="mb-space-sm flex items-center justify-between gap-2 pb-space-sm">
                <span className="font-serif-aside text-sm italic text-ink sm:text-serif-aside">
                  {COMPARISON.after.year}
                </span>
                <span className="text-right font-label-caps text-[10px] uppercase text-ink-muted sm:text-label-caps">
                  {COMPARISON.after.state}
                </span>
              </div>
              <div className="relative aspect-[4/5] w-full overflow-hidden bg-paper-deep sm:aspect-[3/4] md:aspect-[16/9]">
                <img
                  src={COMPARISON.after.image}
                  alt={COMPARISON.after.alt}
                  draggable={false}
                  className="h-full w-full object-cover grayscale contrast-125"
                />
              </div>
              <div className="flex flex-col gap-1 pt-space-sm text-ink-muted sm:flex-row sm:items-baseline sm:justify-between sm:pt-space-md">
                <span className="font-label-caps text-[10px] uppercase sm:text-label-caps">
                  {COMPARISON.after.integrity}
                </span>
                <span className="font-serif-aside text-[12px] italic sm:text-[14px]">
                  {COMPARISON.after.archive}
                </span>
              </div>
            </div>

            {/* BEFORE (clipped overlay) */}
            <m.div
              style={{ width: clipWidth }}
              className="absolute bottom-0 left-0 top-0 overflow-hidden border-r border-ink bg-paper-dim"
            >
              <div className="flex w-full min-w-[100vw] flex-col p-space-sm sm:p-space-md">
                <div className="mb-space-sm flex items-center justify-between gap-2 pb-space-sm">
                  <span className="font-serif-aside text-sm italic text-ink sm:text-serif-aside">
                    {COMPARISON.before.year}
                  </span>
                  <span className="text-right font-label-caps text-[10px] uppercase text-ink-muted sm:text-label-caps">
                    {COMPARISON.before.state}
                  </span>
                </div>
                <div className="relative aspect-[4/5] w-full overflow-hidden bg-paper-deep sm:aspect-[3/4] md:aspect-[16/9]">
                  <img
                    src={COMPARISON.before.image}
                    alt={COMPARISON.before.alt}
                    draggable={false}
                    className="h-full w-full object-cover grayscale contrast-125"
                  />
                </div>
                <div className="flex flex-col gap-1 pt-space-sm text-ink-muted sm:flex-row sm:items-baseline sm:justify-between sm:pt-space-md">
                  <span className="font-label-caps text-[10px] uppercase sm:text-label-caps">
                    {COMPARISON.before.integrity}
                  </span>
                  <span className="font-serif-aside text-[12px] italic sm:text-[14px]">
                    {COMPARISON.before.archive}
                  </span>
                </div>
              </div>
            </m.div>

            {/* Divider handle — larger on mobile for thumb access */}
            <m.div
              style={{ left: clipLeft }}
              className="absolute bottom-0 top-0 z-20 w-0.5 -translate-x-1/2 cursor-ew-resize bg-ink"
            >
              <div className="absolute left-1/2 top-1/2 flex h-11 w-11 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border-[1.5px] border-ink bg-paper shadow-[0_4px_12px_rgba(22,19,15,0.25)] md:h-9 md:w-9">
                <span className="material-symbols-outlined select-none text-[20px] text-ink md:text-[18px]">
                  swap_horiz
                </span>
              </div>
            </m.div>
          </div>
        </ScrollReveal>

        {/* Methodology note */}
        <ScrollReveal
          delay={0.2}
          className="mt-space-xl grid grid-cols-1 gap-gutter text-ink md:grid-cols-12"
        >
          <div className="md:col-span-4">
            <span className="font-label-caps text-label-caps uppercase tracking-[0.16em] text-ink-muted">
              {COMPARISON.methodologyLabel}
            </span>
          </div>
          <div className="md:col-span-8">
            <p className="font-body-md text-body-md leading-relaxed text-ink-muted">
              {COMPARISON.methodology}
            </p>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}