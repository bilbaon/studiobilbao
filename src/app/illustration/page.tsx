"use client";

import { FadeIn } from "@/components/Animations";
import { GalleryGrid } from "@/components/GalleryGrid";

const illustrationItems = [
  {
    id: "botanical-series",
    title: "Botanical Studies",
    description: "A series of detailed botanical illustrations exploring the structure and beauty of common houseplants. Created with fine-liner pens and watercolor washes.",
    year: "2025",
    materials: "Pen & Watercolor",
    image: "/images/illustration/botanical.jpg",
  },
  {
    id: "urban-sketches",
    title: "Urban Sketches",
    description: "Quick observational sketches from cafes, parks, and street corners. These drawings capture moments of everyday life with economy of line.",
    year: "2024",
    materials: "Ink on Paper",
    image: "/images/illustration/urban.jpg",
  },
  {
    id: "portrait-series",
    title: "Portrait Series",
    description: "Character studies exploring different techniques for capturing personality and mood through simplified forms.",
    year: "2024",
    materials: "Digital",
    image: "/images/illustration/portraits.jpg",
  },
  {
    id: "architecture-drawings",
    title: "Architecture Drawings",
    description: "Detailed line drawings of interesting buildings and architectural details. Focus on perspective and the interplay of light and shadow.",
    year: "2024",
    materials: "Pen on Paper",
    image: "/images/illustration/architecture.jpg",
  },
  {
    id: "nature-journal",
    title: "Nature Journal",
    description: "Field sketches from hiking trips, documenting plants, insects, and landscapes encountered along the way.",
    year: "2023",
    materials: "Mixed Media",
    image: "/images/illustration/nature.jpg",
  },
  {
    id: "abstract-forms",
    title: "Abstract Forms",
    description: "Explorations in shape, color, and composition. These pieces emerge from intuition rather than observation.",
    year: "2023",
    materials: "Gouache on Paper",
    image: "/images/illustration/abstract.jpg",
  },
  {
    id: "editorial-work",
    title: "Editorial Illustrations",
    description: "Commissioned illustrations for various publications, translating complex ideas into visual narratives.",
    year: "2023",
    materials: "Digital",
    image: "/images/illustration/editorial.jpg",
  },
  {
    id: "sketchbook-pages",
    title: "Sketchbook Pages",
    description: "Selections from daily sketchbook practice. These unpolished drawings represent thinking on paper.",
    year: "Ongoing",
    materials: "Various",
    image: "/images/illustration/sketchbook.jpg",
  },
  {
    id: "typography-explorations",
    title: "Typography Explorations",
    description: "Hand-lettering and typographic experiments, exploring the boundary between illustration and type design.",
    year: "2022",
    materials: "Pen & Digital",
    image: "/images/illustration/typography.jpg",
  },
];

export default function IllustrationPage() {
  return (
    <div className="pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <FadeIn>
          <div className="max-w-3xl mb-16">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-medium tracking-tight">
              Illustration
            </h1>
            <p className="mt-6 text-lg md:text-xl text-muted leading-relaxed">
              Drawing is thinking made visible. These illustrations span personal
              explorations and commissioned work, united by a love of line and
              observation. Most begin as rough sketches in cheap notebooks before
              evolving into finished pieces.
            </p>
          </div>
        </FadeIn>

        {/* Gallery */}
        <GalleryGrid items={illustrationItems} columns={3} aspectRatio="portrait" />

        {/* Process Section */}
        <FadeIn>
          <section className="mt-24 grid md:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="text-2xl font-medium mb-6">Tools</h2>
              <p className="text-muted leading-relaxed">
                My toolkit is intentionally simple: a few good pens (Micron and
                Rotring), a basic watercolor set, and stacks of inexpensive
                sketchbooks. For digital work, I use Procreate on iPad, which
                allows me to maintain the gestural quality of traditional drawing.
              </p>
            </div>
            <div>
              <h2 className="text-2xl font-medium mb-6">Practice</h2>
              <p className="text-muted leading-relaxed">
                I try to draw something every day, even if it&apos;s just a few
                minutes of sketching. The goal isn&apos;t to create finished pieces
                but to stay in practice and maintain visual curiosity. The best
                drawings often come from this low-pressure daily habit.
              </p>
            </div>
          </section>
        </FadeIn>
      </div>
    </div>
  );
}
