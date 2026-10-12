"use client";

import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { DEPOSITORIES } from "@/lib/donate-constants";

export function DepositoryDetails() {
  return (
    <section className="mx-auto max-w-[1440px] px-6 py-20">
      <ScrollReveal className="mb-8 flex items-center justify-between border-b border-line pb-4">
        <div>
          <span className="block font-label-caps text-xs uppercase text-ink-faint">
            04 // Direct Institutional Accounts
          </span>
          <h3 className="font-display-m text-2xl uppercase text-ink">
            Direct Depository Details
          </h3>
        </div>
        <span className="hidden font-serif-aside text-sm italic text-ink-faint md:inline">
          For corporate grants & foundation transfers
        </span>
      </ScrollReveal>

      <div className="divide-y divide-line border border-line">
        {DEPOSITORIES.map((dep) => (
          <div
            key={dep.bank}
            className="flex flex-col justify-between gap-4 bg-paper p-6 md:flex-row md:items-center"
          >
            <div>
              <span className="block font-label-caps text-xs uppercase text-ink-faint">
                {dep.bank}
              </span>
              <div className="font-display-m text-lg text-ink">
                {dep.accountName}
              </div>
              <span className="text-xs text-ink-muted">{dep.branch}</span>
            </div>
            <div className="text-left md:text-right">
              <div className="font-label-caps text-base font-bold text-ink">
                {dep.accountNumber}
              </div>
              <span className="font-serif-aside text-xs italic text-ink-faint">
                {dep.swift}
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}