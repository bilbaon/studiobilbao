"use client";

import { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

interface HeroSlide {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  category: string;
  href: string;
  image?: string;
  gradient: string;
}

interface HeroCarouselProps {
  slides: HeroSlide[];
  autoAdvance?: boolean;
  interval?: number;
}

export function HeroCarousel({
  slides,
  autoAdvance = true,
  interval = 6000
}: HeroCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const goToSlide = useCallback((index: number) => {
    setDirection(index > currentIndex ? 1 : -1);
    setCurrentIndex(index);
  }, [currentIndex]);

  const nextSlide = useCallback(() => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % slides.length);
  }, [slides.length]);

  const prevSlide = useCallback(() => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev - 1 + slides.length) % slides.length);
  }, [slides.length]);

  useEffect(() => {
    if (!autoAdvance) return;
    const timer = setInterval(nextSlide, interval);
    return () => clearInterval(timer);
  }, [autoAdvance, interval, nextSlide]);

  const currentSlide = slides[currentIndex];

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? "100%" : "-100%",
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      x: direction < 0 ? "100%" : "-100%",
      opacity: 0,
    }),
  };

  return (
    <div className="relative h-[85vh] min-h-[600px] max-h-[900px] overflow-hidden">
      {/* Background */}
      <AnimatePresence initial={false} custom={direction} mode="wait">
        <motion.div
          key={currentIndex}
          custom={direction}
          variants={slideVariants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{ duration: 0.6, ease: [0.32, 0.72, 0, 1] }}
          className="absolute inset-0"
        >
          <div
            className={`absolute inset-0 ${currentSlide.gradient}`}
          />
          {currentSlide.image && (
            <div
              className="absolute inset-0 bg-cover bg-center opacity-30"
              style={{ backgroundImage: `url(${currentSlide.image})` }}
            />
          )}
        </motion.div>
      </AnimatePresence>

      {/* Gradient overlays */}
      <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-r from-background/80 via-transparent to-transparent" />

      {/* Content */}
      <div className="relative h-full max-w-7xl mx-auto px-6 lg:px-8 flex items-end pb-24">
        <AnimatePresence initial={false} mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="max-w-2xl"
          >
            <span className="inline-block px-3 py-1 text-xs font-medium uppercase tracking-wider bg-white/10 backdrop-blur-sm rounded-full mb-4">
              {currentSlide.category}
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-medium tracking-tight leading-tight mb-4">
              {currentSlide.title}
            </h1>
            <p className="text-lg md:text-xl text-muted mb-2">
              {currentSlide.subtitle}
            </p>
            <p className="text-muted leading-relaxed mb-8 line-clamp-3">
              {currentSlide.description}
            </p>
            <div className="flex items-center gap-4">
              <Link
                href={currentSlide.href}
                className="inline-flex items-center justify-center h-12 px-8 bg-foreground text-background font-medium rounded-full hover:opacity-90 transition-opacity"
              >
                View Project
              </Link>
              <Link
                href={currentSlide.href}
                className="inline-flex items-center justify-center h-12 px-8 border border-border rounded-full hover:bg-card transition-colors"
              >
                Learn More
              </Link>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Navigation arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 flex items-center justify-center rounded-full bg-background/50 backdrop-blur-sm border border-border hover:bg-background/80 transition-colors"
        aria-label="Previous slide"
      >
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 flex items-center justify-center rounded-full bg-background/50 backdrop-blur-sm border border-border hover:bg-background/80 transition-colors"
        aria-label="Next slide"
      >
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>

      {/* Slide indicators */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex items-center gap-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`h-1 rounded-full transition-all duration-300 ${
              index === currentIndex
                ? "w-8 bg-foreground"
                : "w-2 bg-foreground/30 hover:bg-foreground/50"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Progress bar */}
      {autoAdvance && (
        <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-border">
          <motion.div
            key={currentIndex}
            className="h-full bg-foreground"
            initial={{ width: "0%" }}
            animate={{ width: "100%" }}
            transition={{ duration: interval / 1000, ease: "linear" }}
          />
        </div>
      )}
    </div>
  );
}
