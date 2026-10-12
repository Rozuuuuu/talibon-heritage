"use client";

import { m } from "motion/react";
import {
  FOOTER_COLUMNS,
  FOOTER_TAGLINE,
  SITE,
  SOCIALS,
} from "@/lib/constants";

export function Footer() {
  return (
    <footer className="w-full bg-ink text-paper">
      <div className="mx-auto max-w-[1440px] px-margin-mobile pb-space-2xl pt-space-3xl md:px-margin">
        <m.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "0px 0px -40px 0px" }}
          transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
          className="grid grid-cols-1 gap-gutter border-b border-ink-muted/40 pb-space-2xl sm:grid-cols-2 lg:grid-cols-4"
        >
          {/* Brand column — spans both columns on sm to give it breathing room */}
          <div className="flex flex-col gap-space-sm sm:col-span-2 lg:col-span-1 lg:pr-space-md">
            <span className="font-headline-sm text-[22px] font-bold uppercase leading-tight tracking-tight text-paper">
              {SITE.name}
            </span>
            <span className="font-serif-aside text-[14px] italic leading-tight text-paper-dim">
              {SITE.tagline}
            </span>
            <p className="mt-space-sm font-body-sm text-body-sm leading-relaxed text-paper-dim">
              {FOOTER_TAGLINE}
            </p>
            <p className="mt-space-sm font-serif-aside text-[15px] italic text-paper-dim">
              {SITE.location}
            </p>
          </div>

          {/* Link columns */}
          {FOOTER_COLUMNS.map((col) => (
            <div key={col.title} className="flex flex-col gap-space-sm">
              <span className="mb-space-xs font-label-caps text-label-caps uppercase tracking-[0.16em] text-paper-dim">
                {col.title}
              </span>
              {col.links.map((link) => (
                <a
                  key={link}
                  href="#"
                  className="font-body-sm text-body-sm text-paper/80 transition-all hover:translate-x-0.5 hover:text-paper"
                >
                  {link}
                </a>
              ))}
            </div>
          ))}
        </m.div>

        {/* Bottom bar */}
        <div className="flex flex-col items-start justify-between gap-space-md pt-space-lg font-label-caps text-label-caps uppercase tracking-[0.16em] text-paper-dim sm:flex-row sm:items-center">
          <span>
            © {SITE.year} {SITE.altName.toUpperCase()}
          </span>
          <div className="flex flex-wrap items-center gap-space-lg">
            {SOCIALS.map((social, i) => (
              <span key={social} className="flex items-center gap-space-lg">
                <a
                  href="#"
                  className="transition-all hover:text-paper hover:underline"
                >
                  {social}
                </a>
                {i < SOCIALS.length - 1 && (
                  <span className="text-ink-muted">/</span>
                )}
              </span>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}