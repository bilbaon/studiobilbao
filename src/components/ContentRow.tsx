"use client";

import { useRef, useState, useEffect } from "react";
import Link from "next/link";
import { motion } from "framer-motion";

interface ContentRowProps {
  title: string;
  href?: string;
  children: React.ReactNode;
}

export function ContentRow({ title, href, children }: ContentRowProps) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const checkScroll = () => {
    if (!scrollRef.current) return;
    const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
    setCanScrollLeft(scrollLeft > 0);
    setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);
  };

  useEffect(() => {
    checkScroll();
    const el = scrollRef.current;
    if (el) {
      el.addEventListener("scroll", checkScroll);
      window.addEventListener("resize", checkScroll);
      return () => {
        el.removeEventListener("scroll", checkScroll);
        window.removeEventListener("resize", checkScroll);
      };
    }
  }, []);

  const scroll = (direction: "left" | "right") => {
    if (!scrollRef.current) return;
    const cardWidth = 320;
    const scrollAmount = cardWidth * 3;
    scrollRef.current.scrollBy({
      left: direction === "left" ? -scrollAmount : scrollAmount,
      behavior: "smooth",
    });
  };

  return (
    <section className="relative group/row">
      {/* Header */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 mb-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <h2 className="text-xl md:text-2xl font-medium">{title}</h2>
            {href && (
              <Link
                href={href}
                className="text-sm text-muted hover:text-foreground transition-colors opacity-0 group-hover/row:opacity-100"
              >
                View all →
              </Link>
            )}
          </div>
        </div>
      </div>

      {/* Scroll container */}
      <div className="relative">
        {/* Left scroll button */}
        <button
          onClick={() => scroll("left")}
          className={`absolute left-2 top-1/2 -translate-y-1/2 z-10 w-10 h-10 flex items-center justify-center rounded-full bg-background/90 backdrop-blur-sm border border-border shadow-lg transition-all duration-200 ${
            canScrollLeft
              ? "opacity-0 group-hover/row:opacity-100"
              : "opacity-0 pointer-events-none"
          }`}
          aria-label="Scroll left"
        >
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>

        {/* Right scroll button */}
        <button
          onClick={() => scroll("right")}
          className={`absolute right-2 top-1/2 -translate-y-1/2 z-10 w-10 h-10 flex items-center justify-center rounded-full bg-background/90 backdrop-blur-sm border border-border shadow-lg transition-all duration-200 ${
            canScrollRight
              ? "opacity-0 group-hover/row:opacity-100"
              : "opacity-0 pointer-events-none"
          }`}
          aria-label="Scroll right"
        >
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>

        {/* Left gradient fade */}
        <div
          className={`absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-background to-transparent z-[1] pointer-events-none transition-opacity duration-200 ${
            canScrollLeft ? "opacity-100" : "opacity-0"
          }`}
        />

        {/* Right gradient fade */}
        <div
          className={`absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-background to-transparent z-[1] pointer-events-none transition-opacity duration-200 ${
            canScrollRight ? "opacity-100" : "opacity-0"
          }`}
        />

        {/* Scrollable content */}
        <div
          ref={scrollRef}
          className="flex gap-4 overflow-x-auto scrollbar-hide px-6 lg:px-8 pb-4"
          style={{
            scrollbarWidth: "none",
            msOverflowStyle: "none",
          }}
        >
          {children}
        </div>
      </div>
    </section>
  );
}

// Hide scrollbar utility
const scrollbarHideStyles = `
  .scrollbar-hide::-webkit-scrollbar {
    display: none;
  }
`;

if (typeof document !== "undefined") {
  const style = document.createElement("style");
  style.textContent = scrollbarHideStyles;
  document.head.appendChild(style);
}
