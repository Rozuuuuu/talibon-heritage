"use client";

import { useMemo, useState } from "react";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { PAYMENT_CHANNELS, TIERS } from "@/lib/donate-constants";
import { clsx } from "clsx";

type Frequency = "once" | "monthly";

export function DonationFlow() {
  const [frequency, setFrequency] = useState<Frequency>("once");
  const [selectedTierId, setSelectedTierId] = useState<string>("tier-02");
  const [customAmount, setCustomAmount] = useState<string>("");
  const [paymentChannel, setPaymentChannel] = useState<string>("gcash");
  const [submitted, setSubmitted] = useState(false);

  const selectedTier = useMemo(
    () => TIERS.find((t) => t.id === selectedTierId) ?? null,
    [selectedTierId]
  );

  const customNumber = useMemo(() => {
    const n = parseInt(customAmount.replace(/[^0-9]/g, ""), 10);
    return Number.isFinite(n) && n > 0 ? n : null;
  }, [customAmount]);

  const displayAmount = customNumber ?? selectedTier?.amount ?? 0;
  const displayTierName = customNumber
    ? "Custom Offering"
    : selectedTier?.name ?? "—";
  const displayImpact = customNumber
    ? "Custom-Directed Allocation"
    : selectedTier?.impact ?? "—";

  const handleCustomInput = (value: string) => {
    const cleaned = value.replace(/[^0-9]/g, "");
    setCustomAmount(cleaned);
  };

  const handleSubmit = () => {
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <section
      id="donate-flow"
      className="mx-auto max-w-[1440px] px-margin-mobile py-16 md:px-margin md:py-20 lg:py-28"
    >
      {/* Header */}
      <ScrollReveal className="mb-10 flex flex-col justify-between gap-3 border-b border-line pb-6 md:mb-12 md:flex-row md:items-end md:gap-0">
        <div>
          <span className="mb-2 block font-label-caps text-xs uppercase text-ink-faint">
            02 // Contribution Channels
          </span>
          <h2 className="font-display-m text-2xl uppercase text-ink sm:text-3xl md:text-4xl">
            Select Your Stewardship Tier
          </h2>
        </div>
        <div className="font-serif-aside text-sm italic text-ink-muted md:mt-0 md:max-w-xs md:text-right">
          Every amount supports slaked-lime compounding & marine desalinization.
        </div>
      </ScrollReveal>

      <div className="grid grid-cols-1 gap-8 lg:grid-cols-12 lg:gap-10">
        {/* Left: Tiers */}
        <div className="space-y-6 md:space-y-8 lg:col-span-7">
          {/* Frequency toggle */}
          <div className="flex w-full max-w-sm items-center gap-2 border border-line bg-paper-dim p-1.5">
            <button
              type="button"
              onClick={() => setFrequency("once")}
              className={clsx(
                "flex-1 py-2.5 font-label-caps text-[11px] uppercase transition-all sm:py-2 sm:text-xs",
                frequency === "once"
                  ? "bg-ink text-paper"
                  : "text-ink-muted hover:text-ink"
              )}
            >
              One-Time Gift
            </button>
            <button
              type="button"
              onClick={() => setFrequency("monthly")}
              className={clsx(
                "flex-1 py-2.5 font-label-caps text-[11px] uppercase transition-all sm:py-2 sm:text-xs",
                frequency === "monthly"
                  ? "bg-ink text-paper"
                  : "text-ink-muted hover:text-ink"
              )}
            >
              Monthly Sustainer
            </button>
          </div>

          {/* Tier cards — stacked on mobile, horizontal on sm+ */}
          <div className="space-y-3">
            {TIERS.map((tier) => {
              const isSelected = !customNumber && tier.id === selectedTierId;
              return (
                <button
                  key={tier.id}
                  type="button"
                  onClick={() => {
                    setSelectedTierId(tier.id);
                    setCustomAmount("");
                  }}
                  className={clsx(
                    "flex w-full flex-col gap-4 border p-5 text-left transition-all duration-200 sm:flex-row sm:items-start sm:justify-between sm:gap-4 sm:p-6",
                    isSelected
                      ? "border-ink bg-ink text-paper shadow-sm"
                      : "border-line bg-paper text-ink hover:border-ink/60"
                  )}
                >
                  <div className="space-y-1 sm:max-w-md">
                    <div className="flex flex-wrap items-center gap-2 sm:gap-3">
                      <span
                        className={clsx(
                          "font-label-caps text-[10px] uppercase sm:text-xs",
                          isSelected ? "text-paper/60" : "text-ink-faint"
                        )}
                      >
                        {tier.label}
                      </span>
                      <h3
                        className={clsx(
                          "font-display-m text-base uppercase tracking-tight sm:text-lg",
                          isSelected ? "text-paper" : "text-ink"
                        )}
                      >
                        {tier.name}
                      </h3>
                    </div>
                    <p
                      className={clsx(
                        "text-xs",
                        isSelected ? "text-paper/80" : "text-ink-muted"
                      )}
                    >
                      {tier.description}
                    </p>
                  </div>
                  <div className="flex shrink-0 items-baseline gap-2 sm:flex-col sm:items-end sm:gap-0 sm:text-right">
                    <div
                      className={clsx(
                        "font-display-m text-xl uppercase sm:text-2xl",
                        isSelected ? "text-paper" : "text-ink"
                      )}
                    >
                      ₱{tier.amount.toLocaleString()}
                    </div>
                    <span
                      className={clsx(
                        "font-serif-aside text-xs italic",
                        isSelected ? "text-paper/70" : "text-ink-faint"
                      )}
                    >
                      ( {tier.usd} )
                    </span>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Custom amount */}
          <div className="border border-line bg-paper-dim p-5 sm:p-6">
            <label
              htmlFor="custom-amount"
              className="mb-2 block font-label-caps text-xs uppercase text-ink-muted"
            >
              Or Designate a Custom Offering (PHP)
            </label>
            <div className="flex items-center gap-3 sm:gap-4">
              <span className="font-display-m text-xl text-ink sm:text-2xl">
                ₱
              </span>
              <input
                id="custom-amount"
                type="text"
                inputMode="numeric"
                value={customAmount}
                onChange={(e) => handleCustomInput(e.target.value)}
                placeholder="Enter custom amount..."
                className="w-full border-b-2 border-ink bg-transparent py-2 font-display-m text-lg text-ink placeholder:font-body placeholder:text-sm placeholder:text-ink-faint focus:outline-none sm:text-xl"
              />
            </div>
          </div>
        </div>

        {/* Right: Ledger */}
        <div className="flex flex-col justify-between border border-line bg-paper-dim p-6 sm:p-8 md:p-10 lg:col-span-5">
          <div>
            <div className="mb-6 border-b border-line pb-4">
              <span className="block font-label-caps text-xs uppercase text-ink-faint">
                Dossier / Allocation
              </span>
              <h3 className="font-display-m text-xl uppercase text-ink sm:text-2xl">
                Contribution Ledger
              </h3>
            </div>

            <div className="mb-8 space-y-4 text-sm">
              <div className="flex items-start justify-between gap-3 border-b border-line/60 py-2">
                <span className="shrink-0 text-ink-muted">
                  Designated Program
                </span>
                <span className="text-right font-semibold text-ink">
                  {displayTierName}
                </span>
              </div>
              <div className="flex items-start justify-between gap-3 border-b border-line/60 py-2">
                <span className="shrink-0 text-ink-muted">Cadence</span>
                <span className="text-right font-label-caps text-xs uppercase text-ink">
                  {frequency === "once"
                    ? "One-Time Offering"
                    : "Monthly Sustainer"}
                </span>
              </div>
              <div className="flex items-start justify-between gap-3 border-b border-line/60 py-2">
                <span className="shrink-0 text-ink-muted">
                  Restoration Impact
                </span>
                <span className="text-right font-serif-aside text-sm italic text-ink">
                  {displayImpact}
                </span>
              </div>
              <div className="flex items-center justify-between gap-3 pt-4">
                <span className="font-label-caps text-xs uppercase text-ink">
                  Total Contribution
                </span>
                <span className="font-display-m text-2xl text-ink sm:text-3xl">
                  ₱{displayAmount.toLocaleString()}
                </span>
              </div>
            </div>

            {/* Payment channels */}
            <div className="mb-8 space-y-3">
              <span className="block font-label-caps text-[11px] uppercase text-ink-faint">
                Select Payment Conduit
              </span>
              <div className="grid grid-cols-1 gap-2 text-xs sm:grid-cols-2">
                {PAYMENT_CHANNELS.map((ch) => {
                  const isActive = paymentChannel === ch.id;
                  return (
                    <label
                      key={ch.id}
                      className={clsx(
                        "flex cursor-pointer items-center gap-2 border p-3 transition-colors",
                        isActive
                          ? "border-ink bg-paper"
                          : "border-line bg-paper hover:border-ink"
                      )}
                    >
                      <input
                        type="radio"
                        name="payment"
                        checked={isActive}
                        onChange={() => setPaymentChannel(ch.id)}
                        className="accent-ink"
                      />
                      <span className="font-semibold text-ink">{ch.label}</span>
                    </label>
                  );
                })}
              </div>
            </div>
          </div>

          <div>
            <button
              type="button"
              onClick={handleSubmit}
              disabled={displayAmount <= 0}
              className={clsx(
                "flex w-full items-center justify-center gap-2 rounded-full py-4 font-display-m text-xs uppercase tracking-wider shadow-md transition-all active:scale-[0.98] sm:text-sm",
                submitted
                  ? "bg-ink-muted text-paper"
                  : "bg-ink text-paper hover:bg-black",
                displayAmount <= 0 && "cursor-not-allowed opacity-50"
              )}
            >
              {submitted ? (
                <span>✓ OFFERING RECORDED</span>
              ) : (
                <>
                  <span>PROCEED TO CONSECRATION</span>
                  <span>↗</span>
                </>
              )}
            </button>
            <p className="mt-3 text-center font-serif-aside text-xs italic text-ink-faint">
              An official Tax-Exempt BIR donation voucher is issued via email
              instantly upon verification.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}