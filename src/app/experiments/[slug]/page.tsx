"use client";

import Link from "next/link";
import { useParams } from "next/navigation";
import { FadeIn, FadeInUp } from "@/components/Animations";

const experimentsData: Record<string, {
  title: string;
  description: string;
  category: string;
  year: string;
  tags: string[];
  overview: string;
  process: string;
  learnings: string[];
  links?: { label: string; url: string }[];
}> = {
  "generative-patterns": {
    title: "Generative Patterns",
    description: "Exploring algorithmic art through code-driven visual systems",
    category: "Creative Coding",
    year: "2025",
    tags: ["p5.js", "Generative Art", "Algorithms"],
    overview: "This project explores the creation of visual patterns through code, using algorithms to generate unique, ever-evolving artwork. Drawing inspiration from nature, mathematics, and traditional textile patterns, each piece is created through a set of rules that produce infinite variations.",
    process: "I started by studying natural patterns—the branching of trees, the spirals of shells, the tessellation of honeycombs. These observations informed the algorithms I developed in p5.js. The project evolved through many iterations, with each version building on discoveries from the previous one.",
    learnings: [
      "Simple rules can produce remarkably complex results",
      "Randomness needs constraints to feel intentional",
      "The best generative art balances predictability with surprise",
      "Code can be a medium for artistic expression",
    ],
    links: [
      { label: "View live demo", url: "#" },
      { label: "Source code on GitHub", url: "#" },
    ],
  },
  "micro-interactions": {
    title: "Micro-interaction Library",
    description: "A collection of delightful UI animations and transitions",
    category: "Motion Design",
    year: "2025",
    tags: ["Framer Motion", "CSS", "React"],
    overview: "A curated collection of micro-interactions designed to add polish and delight to user interfaces. Each animation is purposeful, providing feedback and improving the sense of direct manipulation in digital products.",
    process: "The library started as a personal collection of animations I'd created for various projects. I refined and documented each one, ensuring they were accessible, performant, and easy to implement. The focus was on interactions that feel natural and enhance usability.",
    learnings: [
      "Timing is everything—milliseconds matter",
      "Easing curves dramatically affect perceived quality",
      "Performance should never be sacrificed for aesthetics",
      "The best animations go unnoticed",
    ],
    links: [
      { label: "View component library", url: "#" },
      { label: "Source code on GitHub", url: "#" },
    ],
  },
  "data-sonification": {
    title: "Data Sonification",
    description: "Turning climate data into musical compositions",
    category: "Sound Design",
    year: "2024",
    tags: ["Web Audio API", "Data Viz", "Music"],
    overview: "This experiment transforms climate data into sound, creating an auditory experience of environmental change. Temperature, precipitation, and CO2 levels are mapped to musical parameters, creating compositions that tell the story of our changing planet.",
    process: "Working with publicly available climate datasets, I developed a system that maps data points to musical notes, rhythms, and timbres. The Web Audio API provided the tools for real-time sound synthesis, allowing users to 'listen' to decades of climate data.",
    learnings: [
      "Sound can communicate patterns that visuals miss",
      "Data sonification requires careful parameter mapping",
      "Emotional response to music can increase engagement with data",
      "Multi-sensory experiences create deeper understanding",
    ],
    links: [
      { label: "Listen to the composition", url: "#" },
      { label: "Read the methodology", url: "#" },
    ],
  },
};

export default function ExperimentPage() {
  const params = useParams();
  const slug = params.slug as string;
  const experiment = experimentsData[slug];

  if (!experiment) {
    return (
      <div className="pt-32 pb-24">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h1 className="text-2xl font-medium">Experiment not found</h1>
          <p className="mt-4 text-muted">
            This experiment doesn&apos;t exist or has been moved.
          </p>
          <Link
            href="/experiments"
            className="mt-8 inline-flex items-center text-sm font-medium underline-animated"
          >
            ← Back to experiments
          </Link>
        </div>
      </div>
    );
  }

  return (
    <article className="pt-32 pb-24">
      <div className="max-w-4xl mx-auto px-6 lg:px-8">
        <FadeIn>
          <Link
            href="/experiments"
            className="inline-flex items-center text-sm text-muted hover:text-foreground transition-colors mb-8"
          >
            ← Back to experiments
          </Link>
        </FadeIn>

        <FadeIn delay={0.1}>
          <div className="flex items-center gap-3 text-sm text-muted mb-4">
            <span>{experiment.category}</span>
            <span className="w-1 h-1 rounded-full bg-muted" />
            <span>{experiment.year}</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-medium tracking-tight">
            {experiment.title}
          </h1>
          <p className="mt-4 text-xl text-muted">
            {experiment.description}
          </p>
        </FadeIn>

        {/* Tags */}
        <FadeIn delay={0.2}>
          <div className="mt-8 flex flex-wrap gap-2">
            {experiment.tags.map((tag) => (
              <span
                key={tag}
                className="text-sm px-3 py-1 bg-card rounded-full border border-border"
              >
                {tag}
              </span>
            ))}
          </div>
        </FadeIn>

        {/* Interactive Preview */}
        <FadeIn delay={0.3}>
          <div className="mt-16 aspect-video bg-card rounded-lg border border-border flex items-center justify-center">
            <span className="text-muted">Interactive Preview</span>
          </div>
        </FadeIn>

        {/* Content */}
        <FadeInUp>
          <section className="mt-16">
            <h2 className="text-2xl font-medium mb-6">Overview</h2>
            <p className="text-muted leading-relaxed">{experiment.overview}</p>
          </section>
        </FadeInUp>

        <FadeInUp>
          <section className="mt-16">
            <h2 className="text-2xl font-medium mb-6">Process</h2>
            <p className="text-muted leading-relaxed">{experiment.process}</p>
          </section>
        </FadeInUp>

        {/* Gallery */}
        <FadeInUp>
          <section className="mt-16">
            <h2 className="text-2xl font-medium mb-6">Gallery</h2>
            <div className="grid grid-cols-2 gap-4">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="aspect-square bg-card rounded-lg border border-border flex items-center justify-center">
                  <span className="text-muted text-sm">Image {i}</span>
                </div>
              ))}
            </div>
          </section>
        </FadeInUp>

        <FadeInUp>
          <section className="mt-16">
            <h2 className="text-2xl font-medium mb-6">What I Learned</h2>
            <ul className="space-y-4">
              {experiment.learnings.map((learning, index) => (
                <li key={index} className="flex gap-4 text-muted">
                  <span className="text-foreground font-mono text-sm">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span>{learning}</span>
                </li>
              ))}
            </ul>
          </section>
        </FadeInUp>

        {experiment.links && (
          <FadeInUp>
            <section className="mt-16">
              <h2 className="text-2xl font-medium mb-6">Links</h2>
              <div className="flex flex-wrap gap-4">
                {experiment.links.map((link) => (
                  <a
                    key={link.label}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center h-10 px-6 border border-border rounded-full hover:bg-card-hover transition-colors text-sm"
                  >
                    {link.label} →
                  </a>
                ))}
              </div>
            </section>
          </FadeInUp>
        )}

        <FadeInUp>
          <div className="mt-24 pt-8 border-t border-border">
            <Link
              href="/experiments"
              className="inline-flex items-center text-sm font-medium underline-animated"
            >
              ← View all experiments
            </Link>
          </div>
        </FadeInUp>
      </div>
    </article>
  );
}
