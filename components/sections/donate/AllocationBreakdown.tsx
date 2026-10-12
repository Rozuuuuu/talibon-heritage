"use client";

import { m } from "motion/react";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { ALLOCATIONS } from "@/lib/donate-constants";

export function AllocationBreakdown() {
  return (
    <section className="border-y border-line bg-paper-dim py-20">
      <div className="mx-auto max-w-[1440px] px-6">
        <ScrollReveal className="mb-12 flex flex-col justify-between border-b border-line pb-6 md:flex-row md:items-end">
          <div>
            <span className="mb-2 block font-label-caps text-xs uppercase text-ink-faint">
              03 // Stewardship Ledger
            </span>
            <h2 className="font-display-m text-3xl uppercase text-ink sm:text-4xl">
              Where Your Offering Goes
            </h2>
          </div>
          <div className="mt-4 font-serif-aside text-sm italic text-ink-muted md:mt-0">
            Audited semi-annually by the Diocesan Financial Commission & NHCP.
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-4">
          {ALLOCATIONS.map((alloc, i) => (
            <m.div
              key={alloc.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "0px 0px -40px 0px" }}
              transition={{
                duration: 0.75,
                ease: [0.16, 1, 0.3, 1],
                delay: 0.08 * i,
              }}
              className="border border-line bg-paper p-6"
            >
              <div className="mb-3 font-display-m text-4xl text-ink">
                {alloc.percentage}
              </div>
              <h4 className="mb-2 font-label-caps text-xs uppercase tracking-wider text-ink">
                {alloc.title}
              </h4>
              <p className="text-xs leading-relaxed text-ink-muted">
                {alloc.description}
              </p>
            </m.div>
          ))}
        </div>
      </div>
    </section>
  );
}