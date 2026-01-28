"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { StaggerContainer, StaggerItem } from "./Animations";

interface GalleryItem {
  id: string;
  title: string;
  description?: string;
  year?: string;
  dimensions?: string;
  materials?: string;
  image: string;
}

interface GalleryGridProps {
  items: GalleryItem[];
  columns?: 2 | 3 | 4;
  aspectRatio?: "square" | "portrait" | "landscape";
}

export function GalleryGrid({ items, columns = 3, aspectRatio = "square" }: GalleryGridProps) {
  const [selectedItem, setSelectedItem] = useState<GalleryItem | null>(null);

  const gridCols = {
    2: "md:grid-cols-2",
    3: "md:grid-cols-2 lg:grid-cols-3",
    4: "md:grid-cols-2 lg:grid-cols-4",
  };

  const aspectClasses = {
    square: "aspect-square",
    portrait: "aspect-[3/4]",
    landscape: "aspect-[4/3]",
  };

  return (
    <>
      <StaggerContainer className={`grid ${gridCols[columns]} gap-4`}>
        {items.map((item) => (
          <StaggerItem key={item.id}>
            <button
              onClick={() => setSelectedItem(item)}
              className="group w-full text-left"
            >
              <div className={`${aspectClasses[aspectRatio]} bg-card rounded-lg overflow-hidden border border-border group-hover:border-muted transition-colors`}>
                <div className="w-full h-full bg-gradient-to-br from-card to-card-hover flex items-center justify-center relative overflow-hidden">
                  <span className="text-muted text-sm">{item.title}</span>
                  {/* Hover overlay */}
                  <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/5 transition-colors" />
                </div>
              </div>
              {item.title && (
                <div className="mt-3">
                  <h3 className="text-sm font-medium group-hover:opacity-70 transition-opacity">
                    {item.title}
                  </h3>
                  {item.year && (
                    <p className="text-xs text-muted mt-1">{item.year}</p>
                  )}
                </div>
              )}
            </button>
          </StaggerItem>
        ))}
      </StaggerContainer>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedItem && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedItem(null)}
            className="fixed inset-0 z-50 bg-background/95 backdrop-blur-sm flex items-center justify-center p-4 md:p-8"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", duration: 0.5 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-5xl w-full bg-card rounded-lg border border-border overflow-hidden"
            >
              {/* Close button */}
              <button
                onClick={() => setSelectedItem(null)}
                className="absolute top-4 right-4 z-10 w-10 h-10 flex items-center justify-center rounded-full bg-background/80 hover:bg-background transition-colors"
              >
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>

              <div className="grid md:grid-cols-2">
                {/* Image */}
                <div className="aspect-square md:aspect-auto md:h-[600px] bg-background flex items-center justify-center">
                  <span className="text-muted">Full Image</span>
                </div>

                {/* Details */}
                <div className="p-8 flex flex-col">
                  <h2 className="text-2xl font-medium">{selectedItem.title}</h2>
                  {selectedItem.year && (
                    <p className="text-sm text-muted mt-1">{selectedItem.year}</p>
                  )}
                  {selectedItem.description && (
                    <p className="mt-6 text-muted leading-relaxed">
                      {selectedItem.description}
                    </p>
                  )}
                  <div className="mt-auto pt-8 space-y-3 text-sm">
                    {selectedItem.materials && (
                      <div className="flex justify-between py-2 border-t border-border">
                        <span className="text-muted">Materials</span>
                        <span>{selectedItem.materials}</span>
                      </div>
                    )}
                    {selectedItem.dimensions && (
                      <div className="flex justify-between py-2 border-t border-border">
                        <span className="text-muted">Dimensions</span>
                        <span>{selectedItem.dimensions}</span>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
