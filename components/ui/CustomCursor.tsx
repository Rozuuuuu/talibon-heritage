"use client";

import { useEffect, useState } from "react";
import { m, useMotionValue, useSpring } from "motion/react";

export function CustomCursor() {
  const [enabled, setEnabled] = useState(false);
  const [isHovering, setIsHovering] = useState(false);
  const [isDown, setIsDown] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  const penX = useSpring(mouseX, { damping: 20, stiffness: 300 });
  const penY = useSpring(mouseY, { damping: 20, stiffness: 300 });
  const dotX = useSpring(mouseX, { damping: 30, stiffness: 200 });
  const dotY = useSpring(mouseY, { damping: 30, stiffness: 200 });

  // Only enable on devices with a fine pointer + hover capability.
  // This excludes iPhones, touch-only iPads, and Android phones.
  useEffect(() => {
    if (typeof window === "undefined") return;
    const query = window.matchMedia("(hover: hover) and (pointer: fine)");
    const update = () => setEnabled(query.matches);
    update();
    query.addEventListener("change", update);
    return () => query.removeEventListener("change", update);
  }, []);

  useEffect(() => {
    if (!enabled) return;

    const move = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
      if (!isVisible) setIsVisible(true);
    };
    const down = () => setIsDown(true);
    const up = () => setIsDown(false);
    const leave = () => setIsVisible(false);

    window.addEventListener("mousemove", move);
    window.addEventListener("mousedown", down);
    window.addEventListener("mouseup", up);
    document.addEventListener("mouseleave", leave);

    return () => {
      window.removeEventListener("mousemove", move);
      window.removeEventListener("mousedown", down);
      window.removeEventListener("mouseup", up);
      document.removeEventListener("mouseleave", leave);
    };
  }, [enabled, isVisible, mouseX, mouseY]);

  useEffect(() => {
    if (!enabled) return;

    const enter = () => setIsHovering(true);
    const leave = () => setIsHovering(false);
    const els = document.querySelectorAll(
      'a, button, [role="button"], input, select, textarea, [data-cursor-hover]'
    );
    els.forEach((el) => {
      el.addEventListener("mouseenter", enter);
      el.addEventListener("mouseleave", leave);
    });
    return () => {
      els.forEach((el) => {
        el.removeEventListener("mouseenter", enter);
        el.removeEventListener("mouseleave", leave);
      });
    };
  }, [enabled]);

  // Render nothing until we know for sure the device has a cursor.
  // Prevents a flash of the custom cursor on touch devices during hydration.
  if (!enabled) return null;

  return (
    <>
      <m.div
        aria-hidden
        className="pointer-events-none fixed left-0 top-0 z-[9999] hidden md:block"
        style={{ x: penX, y: penY, opacity: isVisible ? 1 : 0 }}
        animate={{
          rotate: isHovering ? -14 : 0,
          scale: isDown ? 0.92 : isHovering ? 1.18 : 1,
        }}
        transition={{ type: "spring", damping: 18, stiffness: 260 }}
      >
        <svg
          width="34"
          height="34"
          viewBox="0 0 34 34"
          fill="none"
          className="drop-shadow-sm"
        >
          <path d="M4 30L8.5 24L10 25.5L4 30Z" fill="#16130F" />
          <path
            d="M4 30L6.5 27"
            stroke="#EDE8DE"
            strokeWidth="0.75"
            strokeLinecap="round"
          />
          <path
            d="M7.8 24.5C9.5 21 13 14 26 4C28 17 21 21 9.5 25.2L7.8 24.5Z"
            fill="#16130F"
          />
          <path
            d="M8.5 24.8C13 19 19 12 26 4"
            stroke="#EDE8DE"
            strokeWidth="0.8"
            strokeLinecap="round"
          />
          <path
            d="M12 21C13.8 21.8 16.2 21.5 17.5 21.2"
            stroke="#EDE8DE"
            strokeWidth="0.6"
            strokeLinecap="round"
          />
          <path
            d="M15 17C17.2 17.6 20.2 17 21.8 16.4"
            stroke="#EDE8DE"
            strokeWidth="0.6"
            strokeLinecap="round"
          />
          <path
            d="M18.5 12.8C20.8 13.2 23.5 12.5 25 11.5"
            stroke="#EDE8DE"
            strokeWidth="0.6"
            strokeLinecap="round"
          />
        </svg>
      </m.div>

      <m.div
        aria-hidden
        className="pointer-events-none fixed left-0 top-0 z-[9998] hidden h-1.5 w-1.5 rounded-full bg-ink md:block"
        style={{
          x: dotX,
          y: dotY,
          opacity: isVisible ? (isHovering ? 0.15 : 0.35) : 0,
        }}
        animate={{ scale: isHovering ? 2.25 : 1 }}
        transition={{ type: "spring", damping: 25, stiffness: 400 }}
      />
    </>
  );
}