"use client";

import { FadeIn } from "@/components/Animations";
import { GalleryGrid } from "@/components/GalleryGrid";

const woodworkingItems = [
  {
    id: "walnut-desk",
    title: "Walnut Writing Desk",
    description: "A minimalist desk designed for focused work. The clean lines and floating appearance create a sense of calm while the walnut provides warmth. Hand-cut joinery throughout with a natural oil finish.",
    year: "2025",
    materials: "Black Walnut, Brass",
    dimensions: "60\" × 30\" × 30\"",
    image: "/images/woodworking/walnut-desk.jpg",
  },
  {
    id: "maple-bench",
    title: "Maple Entry Bench",
    description: "A versatile bench for the entryway, with a slatted design that allows for airflow and a lower shelf for shoe storage. The maple was sourced locally and finished with a water-based poly for durability.",
    year: "2024",
    materials: "Hard Maple",
    dimensions: "48\" × 16\" × 18\"",
    image: "/images/woodworking/maple-bench.jpg",
  },
  {
    id: "cherry-shelf",
    title: "Cherry Floating Shelves",
    description: "A set of three floating shelves with hidden mounting hardware. The cherry will darken beautifully over time with exposure to light.",
    year: "2024",
    materials: "Cherry",
    dimensions: "36\" × 10\" × 2\" (each)",
    image: "/images/woodworking/cherry-shelf.jpg",
  },
  {
    id: "oak-stool",
    title: "White Oak Shop Stool",
    description: "A sturdy shop stool inspired by Danish design. The three-legged design ensures stability on uneven surfaces, and the sculpted seat provides comfort for long work sessions.",
    year: "2024",
    materials: "White Oak",
    dimensions: "14\" diameter × 24\" h",
    image: "/images/woodworking/oak-stool.jpg",
  },
  {
    id: "cutting-boards",
    title: "End-Grain Cutting Boards",
    description: "A collection of end-grain cutting boards made from offcuts. Each board is unique, combining different species for visual interest while maintaining a cohesive design language.",
    year: "2023",
    materials: "Walnut, Maple, Cherry",
    dimensions: "Various sizes",
    image: "/images/woodworking/cutting-boards.jpg",
  },
  {
    id: "tool-cabinet",
    title: "Wall-Hung Tool Cabinet",
    description: "A traditional tool cabinet with modern proportions. French cleats allow for easy mounting and removal. Interior layout customized for my specific tool collection.",
    year: "2023",
    materials: "Birch Plywood, White Oak",
    dimensions: "36\" × 24\" × 6\"",
    image: "/images/woodworking/tool-cabinet.jpg",
  },
  {
    id: "jewelry-box",
    title: "Jewelry Box",
    description: "A small jewelry box with hand-cut dovetails and a sliding tray. The lid features a subtle curve that catches light and invites touch.",
    year: "2023",
    materials: "Walnut, Cedar lining",
    dimensions: "10\" × 6\" × 4\"",
    image: "/images/woodworking/jewelry-box.jpg",
  },
  {
    id: "bookends",
    title: "Geometric Bookends",
    description: "A pair of bookends exploring the intersection of simple geometry and natural material. Weighted with steel plates hidden in the base.",
    year: "2022",
    materials: "White Oak, Steel",
    dimensions: "6\" × 4\" × 6\" (each)",
    image: "/images/woodworking/bookends.jpg",
  },
];

export default function WoodworkingPage() {
  return (
    <div className="pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <FadeIn>
          <div className="max-w-3xl mb-16">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-medium tracking-tight">
              Woodworking
            </h1>
            <p className="mt-6 text-lg md:text-xl text-muted leading-relaxed">
              Working with wood is a meditation on patience and precision. Each piece
              begins as a rough board and transforms through careful planning and
              deliberate execution. There&apos;s no undo button—only learning to work
              with the material, not against it.
            </p>
          </div>
        </FadeIn>

        {/* Gallery */}
        <GalleryGrid items={woodworkingItems} columns={3} aspectRatio="square" />

        {/* About Section */}
        <FadeIn>
          <section className="mt-24 grid md:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="text-2xl font-medium mb-6">The Shop</h2>
              <p className="text-muted leading-relaxed">
                I work out of a small garage shop equipped with a mix of hand and
                power tools. My approach leans toward hand tools for joinery and
                detail work, with power tools for dimensioning and rough work.
                The constraints of the space have taught me to be intentional
                about tool selection and workflow.
              </p>
            </div>
            <div>
              <h2 className="text-2xl font-medium mb-6">Philosophy</h2>
              <p className="text-muted leading-relaxed">
                I&apos;m drawn to functional objects that will be used daily—furniture,
                tools, and accessories that earn their place through utility and
                beauty. I try to design pieces that will age gracefully, developing
                patina and character over years of use.
              </p>
            </div>
          </section>
        </FadeIn>
      </div>
    </div>
  );
}
