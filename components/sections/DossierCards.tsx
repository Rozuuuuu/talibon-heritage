"use client";

import Image from "next/image";
import { m } from "motion/react";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { DOSSIER_CARDS } from "@/lib/constants";

export function DossierCards() {
  return (
    <section className="w-full bg-paper py-space-4xl">
      <div className="mx-auto max-w-[1440px] px-margin-mobile md:px-margin">
        {/* Section Header */}
        <ScrollReveal className="mb-space-2xl flex flex-col gap-space-md md:flex-row md:items-end md:justify-between">
          <div className="flex flex-col gap-space-xs">
            <span className="font-label-caps text-label-caps uppercase tracking-[0.16em] text-ink-muted">
              01 / EXPLORE
            </span>
            <h2 className="font-display-m text-display-m uppercase tracking-tight text-ink">
              Three ways to know the cathedral.
            </h2>
          </div>
          <p className="max-w-sm font-serif-aside text-serif-aside italic text-ink-muted">
            A tripartite portal into the ecclesiastical architecture, human
            resilience, and sacred rites of Talibon.
          </p>
        </ScrollReveal>

        {/* Grid */}
        <div className="grid grid-cols-1 gap-gutter md:grid-cols-3">
          {DOSSIER_CARDS.map((card, i) => (
            <m.article
              key={card.title}
              id={card.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "0px 0px -40px 0px" }}
              transition={{
                duration: 0.75,
                ease: [0.16, 1, 0.3, 1],
                delay: 0.1 * (i + 1),
              }}
              className="group flex flex-col justify-between border border-transparent bg-paper p-space-lg transition-[transform,box-shadow] duration-350 hover:-translate-y-1 hover:border-line/60 hover:shadow-[0_16px_32px_-8px_rgba(22,19,15,0.08)]"
            >
              <div>
                <div className="relative mb-space-lg aspect-[4/3] w-full overflow-hidden bg-paper-deep">
                  <Image
                    src={card.image}
                    alt={card.alt}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover contrast-125 grayscale transition-transform duration-700 group-hover:scale-[1.035] group-hover:contrast-[135%]"
                  />
                  <span className="absolute left-2 top-2 bg-ink px-2 py-0.5 font-label-caps text-[9px] tracking-widest text-paper">
                    {card.dossier}
                  </span>
                </div>
                <span className="font-label-caps text-[10px] uppercase tracking-widest text-ink-muted">
                  {card.label}
                </span>
                <h3 className="mb-space-xs mt-1 font-headline-sm text-headline-sm font-bold uppercase tracking-tight text-ink">
                  {card.title}
                </h3>
                <p className="font-body-md text-body-md leading-relaxed text-ink-muted">
                  {card.description}
                </p>
              </div>

              <div className="mt-space-md flex items-center justify-between pt-space-lg">
                <a
                  href="#"
                  className="flex items-center gap-1 font-label-caps text-label-caps uppercase tracking-[0.16em] text-ink transition-all group-hover:gap-2"
                >
                  <span>READ MORE</span>
                  <span className="transition-transform group-hover:translate-x-1">
                    →
                  </span>
                </a>
                <span className="font-serif-aside text-serif-aside italic text-ink-muted">
                  {card.period}
                </span>
              </div>
            </m.article>
          ))}
        </div>
      </div>
    </section>
  );
}