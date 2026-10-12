"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { m, AnimatePresence } from "motion/react";
import { clsx } from "clsx";
import { NAV_LINKS, SITE } from "@/lib/constants";

export function Header() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);

  // Close menu when route changes
  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  // Lock body scroll when menu is open
  useEffect(() => {
    if (mobileOpen) {
      const prev = document.body.style.overflow;
      document.body.style.overflow = "hidden";
      return () => {
        document.body.style.overflow = prev;
      };
    }
  }, [mobileOpen]);

  return (
    <m.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className="fixed left-0 right-0 top-0 z-50 border-b border-line bg-paper/95 backdrop-blur-sm"
    >
      <div className="mx-auto flex h-[72px] max-w-[1440px] items-center justify-between px-margin-mobile md:px-margin">
        {/* Brand */}
        <Link href="/" className="group flex flex-col">
          <span className="font-headline-sm text-[18px] font-bold uppercase leading-tight tracking-tight text-ink transition-colors group-hover:text-ink-muted sm:text-[20px]">
            {SITE.name}
          </span>
          <span className="font-serif-aside text-[11px] italic leading-none text-ink-muted sm:text-[13px]">
            {SITE.tagline}
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden h-[72px] items-center gap-space-xl md:flex">
          {NAV_LINKS.map((link) => {
            const isActive =
              link.href === "/"
                ? pathname === "/"
                : pathname?.startsWith(link.href);
            return (
              <Link
                key={link.label}
                href={link.href}
                aria-current={isActive ? "page" : undefined}
                className={clsx(
                  "border-b pb-0.5 font-label-caps text-label-caps uppercase tracking-[0.1em] transition-colors",
                  isActive
                    ? "border-ink font-semibold text-ink"
                    : "border-transparent text-ink-muted hover:border-ink hover:text-ink"
                )}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        {/* Desktop Actions */}
        <div className="hidden items-center gap-space-md md:flex">
          <Link
            href="/donate"
            className="inline-flex h-[44px] items-center justify-center gap-1 rounded-full border border-ink bg-ink px-space-lg font-label-caps text-label-caps uppercase tracking-[0.1em] text-paper transition-all duration-200 hover:bg-paper hover:text-ink hover:shadow-md"
          >
            DONATE <span aria-hidden>↗</span>
          </Link>
          <button
            type="button"
            aria-label="Account"
            className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-on-primary transition-transform duration-200 hover:scale-105"
          >
            <span
              className="material-symbols-outlined"
              style={{ fontSize: "18px" }}
              aria-hidden
            >
              person
            </span>
          </button>
        </div>

        {/* Mobile Toggle */}
        <button
          type="button"
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
          aria-expanded={mobileOpen}
          aria-controls="mobile-menu"
          onClick={() => setMobileOpen((v) => !v)}
          className="flex h-10 w-10 items-center justify-center rounded-full border border-line text-ink md:hidden"
        >
          <span
            className="material-symbols-outlined"
            style={{ fontSize: "20px" }}
            aria-hidden
          >
            {mobileOpen ? "close" : "menu"}
          </span>
        </button>
      </div>

      {/* Mobile Menu Panel */}
      <AnimatePresence>
        {mobileOpen && (
          <m.nav
            id="mobile-menu"
            key="mobile-menu"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="overflow-hidden border-t border-line bg-paper md:hidden"
          >
            <div className="flex flex-col px-margin-mobile py-space-lg">
              {NAV_LINKS.map((link) => {
                const isActive =
                  link.href === "/"
                    ? pathname === "/"
                    : pathname?.startsWith(link.href);
                return (
                  <Link
                    key={link.label}
                    href={link.href}
                    aria-current={isActive ? "page" : undefined}
                    className={clsx(
                      "border-b border-line/60 py-space-md font-label-caps text-[13px] uppercase tracking-[0.14em] transition-colors",
                      isActive ? "text-ink font-semibold" : "text-ink-muted"
                    )}
                  >
                    {link.label}
                  </Link>
                );
              })}
              <Link
                href="/donate"
                className="mt-space-lg inline-flex h-[48px] items-center justify-center gap-2 rounded-full border border-ink bg-ink font-label-caps text-label-caps uppercase tracking-[0.14em] text-paper"
              >
                DONATE <span aria-hidden>↗</span>
              </Link>
            </div>
          </m.nav>
        )}
      </AnimatePresence>
    </m.header>
  );
}