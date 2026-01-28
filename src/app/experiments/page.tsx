"use client";

import Link from "next/link";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/Animations";

const experiments = [
  {
    slug: "generative-patterns",
    title: "Generative Patterns",
    description: "Exploring algorithmic art through code-driven visual systems",
    category: "Creative Coding",
    year: "2025",
    tags: ["p5.js", "Generative Art", "Algorithms"],
  },
  {
    slug: "micro-interactions",
    title: "Micro-interaction Library",
    description: "A collection of delightful UI animations and transitions",
    category: "Motion Design",
    year: "2025",
    tags: ["Framer Motion", "CSS", "React"],
  },
  {
    slug: "data-sonification",
    title: "Data Sonification",
    description: "Turning climate data into musical compositions",
    category: "Sound Design",
    year: "2024",
    tags: ["Web Audio API", "Data Viz", "Music"],
  },
  {
    slug: "spatial-interfaces",
    title: "Spatial Interface Concepts",
    description: "Exploring 3D interfaces for spatial computing",
    category: "Prototyping",
    year: "2024",
    tags: ["Three.js", "WebXR", "Spatial Design"],
  },
  {
    slug: "typography-experiments",
    title: "Variable Typography",
    description: "Dynamic type systems that respond to user interaction",
    category: "Typography",
    year: "2024",
    tags: ["Variable Fonts", "Animation", "Web"],
  },
  {
    slug: "ai-design-tools",
    title: "AI-Assisted Design Tools",
    description: "Prototypes exploring the future of human-AI collaboration in design",
    category: "AI/ML",
    year: "2025",
    tags: ["Machine Learning", "Design Tools", "LLMs"],
  },
];

export default function ExperimentsPage() {
  return (
    <div className="pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <FadeIn>
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-medium tracking-tight">
              Experiments
            </h1>
            <p className="mt-6 text-lg md:text-xl text-muted leading-relaxed">
              A playground for exploring ideas, learning new technologies, and
              pushing creative boundaries. These projects exist at the intersection
              of design, code, and curiosity.
            </p>
          </div>
        </FadeIn>

        {/* Experiments Grid */}
        <section className="mt-24">
          <StaggerContainer className="grid md:grid-cols-2 gap-8">
            {experiments.map((experiment) => (
              <StaggerItem key={experiment.slug}>
                <Link
                  href={`/experiments/${experiment.slug}`}
                  className="group block p-8 bg-card rounded-lg border border-border hover:border-muted transition-colors"
                >
                  {/* Preview Area */}
                  <div className="aspect-video bg-background rounded-lg border border-border mb-6 flex items-center justify-center overflow-hidden">
                    <div className="w-full h-full bg-gradient-to-br from-background to-card-hover flex items-center justify-center">
                      <span className="text-muted text-sm">Interactive Preview</span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex items-center gap-3 text-xs text-muted uppercase tracking-wide mb-3">
                    <span>{experiment.category}</span>
                    <span className="w-1 h-1 rounded-full bg-muted" />
                    <span>{experiment.year}</span>
                  </div>
                  <h2 className="text-xl font-medium group-hover:opacity-70 transition-opacity">
                    {experiment.title}
                  </h2>
                  <p className="mt-2 text-muted text-sm">
                    {experiment.description}
                  </p>

                  {/* Tags */}
                  <div className="mt-4 flex flex-wrap gap-2">
                    {experiment.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs px-2 py-1 bg-background rounded-full text-muted"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </Link>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </section>

        {/* Call to Action */}
        <FadeIn>
          <section className="mt-24 p-12 bg-card rounded-lg border border-border text-center">
            <h2 className="text-2xl font-medium mb-4">
              Interested in collaborating?
            </h2>
            <p className="text-muted max-w-md mx-auto mb-8">
              I&apos;m always looking for interesting projects and experiments to
              collaborate on. Let&apos;s build something together.
            </p>
            <a
              href="mailto:hello@nathanbilbao.com"
              className="inline-flex items-center justify-center h-12 px-8 bg-foreground text-background font-medium rounded-full hover:opacity-90 transition-opacity"
            >
              Get in touch
            </a>
          </section>
        </FadeIn>
      </div>
    </div>
  );
}
