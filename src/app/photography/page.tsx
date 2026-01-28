"use client";

import { useState } from "react";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/Animations";
import { GalleryGrid } from "@/components/GalleryGrid";

const categories = [
  { id: "all", label: "All" },
  { id: "street", label: "Street" },
  { id: "landscape", label: "Landscape" },
  { id: "architecture", label: "Architecture" },
  { id: "travel", label: "Travel" },
];

const photographyItems = [
  {
    id: "street-1",
    title: "Morning Commute",
    description: "Early morning light catches commuters on their way to work. The long shadows and golden hour create a sense of quiet anticipation.",
    year: "2025",
    category: "street",
    image: "/images/photography/street-1.jpg",
  },
  {
    id: "landscape-1",
    title: "Coastal Fog",
    description: "The Northern California coast shrouded in morning fog. The muted palette and soft light create an almost dreamlike atmosphere.",
    year: "2024",
    category: "landscape",
    image: "/images/photography/landscape-1.jpg",
  },
  {
    id: "architecture-1",
    title: "Geometric Light",
    description: "Late afternoon sun creates strong geometric patterns on a modernist building facade. The interplay of light and shadow reveals hidden structure.",
    year: "2024",
    category: "architecture",
    image: "/images/photography/architecture-1.jpg",
  },
  {
    id: "travel-1",
    title: "Tokyo Alley",
    description: "A quiet alley in Shimokitazawa, Tokyo. The layers of signage, plants, and weathered surfaces tell stories of decades of neighborhood life.",
    year: "2024",
    category: "travel",
    image: "/images/photography/travel-1.jpg",
  },
  {
    id: "street-2",
    title: "Rainy Reflection",
    description: "Pedestrians reflected in rain-slicked pavement. The doubled world creates an abstract quality in an otherwise ordinary scene.",
    year: "2024",
    category: "street",
    image: "/images/photography/street-2.jpg",
  },
  {
    id: "landscape-2",
    title: "Desert Minimalism",
    description: "Stark desert landscape reduced to essential forms. The simplicity of the composition emphasizes the vastness of the space.",
    year: "2023",
    category: "landscape",
    image: "/images/photography/landscape-2.jpg",
  },
  {
    id: "architecture-2",
    title: "Brutalist Study",
    description: "A study of concrete forms in brutalist architecture. The raw material and bold shapes create a powerful visual statement.",
    year: "2023",
    category: "architecture",
    image: "/images/photography/architecture-2.jpg",
  },
  {
    id: "travel-2",
    title: "Lisbon Morning",
    description: "First light on the hills of Lisbon. The warm Mediterranean light brings out the subtle colors of the traditional buildings.",
    year: "2023",
    category: "travel",
    image: "/images/photography/travel-2.jpg",
  },
  {
    id: "street-3",
    title: "Subway Scene",
    description: "A quiet moment on the subway. The artificial lighting creates a distinct mood that defines the urban underground experience.",
    year: "2023",
    category: "street",
    image: "/images/photography/street-3.jpg",
  },
  {
    id: "landscape-3",
    title: "Forest Light",
    description: "Beams of light pierce through the forest canopy. The interplay of light and shadow reveals the depth and density of the forest.",
    year: "2022",
    category: "landscape",
    image: "/images/photography/landscape-3.jpg",
  },
  {
    id: "architecture-3",
    title: "Spiral Staircase",
    description: "A spiral staircase photographed from below, creating an abstract pattern of curves and light. Architecture as graphic design.",
    year: "2022",
    category: "architecture",
    image: "/images/photography/architecture-3.jpg",
  },
  {
    id: "travel-3",
    title: "Copenhagen Color",
    description: "The colorful facades of Nyhavn reflected in still water. The symmetry and saturation create a almost painterly quality.",
    year: "2022",
    category: "travel",
    image: "/images/photography/travel-3.jpg",
  },
];

export default function PhotographyPage() {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredItems = activeCategory === "all"
    ? photographyItems
    : photographyItems.filter((item) => item.category === activeCategory);

  return (
    <div className="pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <FadeIn>
          <div className="max-w-3xl mb-16">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-medium tracking-tight">
              Photography
            </h1>
            <p className="mt-6 text-lg md:text-xl text-muted leading-relaxed">
              Photography is about seeing—training your eye to notice light,
              composition, and decisive moments. These images span street photography,
              landscapes, architecture, and travel, all shot with intention and
              patience.
            </p>
          </div>
        </FadeIn>

        {/* Category Filter */}
        <FadeIn>
          <div className="flex flex-wrap gap-2 mb-12">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-4 py-2 text-sm rounded-full border transition-colors ${
                  activeCategory === category.id
                    ? "bg-foreground text-background border-foreground"
                    : "border-border hover:border-muted"
                }`}
              >
                {category.label}
              </button>
            ))}
          </div>
        </FadeIn>

        {/* Gallery */}
        <GalleryGrid items={filteredItems} columns={3} aspectRatio="landscape" />

        {/* Gear Section */}
        <FadeIn>
          <section className="mt-24 grid md:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="text-2xl font-medium mb-6">Gear</h2>
              <p className="text-muted leading-relaxed mb-4">
                I shoot primarily with a Fujifilm X-T5 and a small kit of prime
                lenses (23mm, 35mm, 56mm). The camera&apos;s ergonomics and film
                simulations make it a joy to use. For travel, I often bring just
                the 35mm and let the constraint guide my seeing.
              </p>
              <p className="text-muted leading-relaxed">
                Post-processing is minimal—basic adjustments in Lightroom with
                an emphasis on maintaining the natural quality of light rather
                than heavy manipulation.
              </p>
            </div>
            <div>
              <h2 className="text-2xl font-medium mb-6">Approach</h2>
              <p className="text-muted leading-relaxed mb-4">
                I&apos;m drawn to quiet moments and the poetry of everyday scenes.
                Rather than dramatic gestures, I look for subtle beauty in light,
                geometry, and the unconscious choreography of public life.
              </p>
              <p className="text-muted leading-relaxed">
                The best photographs happen when I slow down, observe, and wait
                for the elements to align. It&apos;s a practice in patience and
                presence.
              </p>
            </div>
          </section>
        </FadeIn>
      </div>
    </div>
  );
}
