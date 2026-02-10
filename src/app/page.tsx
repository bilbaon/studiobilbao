"use client";

import { HeroCarousel } from "@/components/HeroCarousel";
import { ContentRow } from "@/components/ContentRow";
import {
  CaseStudyCard,
  ExperimentCard,
  GalleryCard,
  BlogCard,
} from "@/components/ContentCards";

// Hero slides - Featured case studies
const heroSlides = [
  {
    id: "personio-design-system",
    title: "Scaling Design at Personio",
    subtitle: "Enterprise Design System",
    description: "Building a unified design language that enables 200+ designers and engineers to ship consistent, accessible experiences across HR workflows.",
    category: "Case Study",
    href: "/portfolio/enterprise-design-system",
    gradient: "bg-gradient-to-br from-indigo-900 via-purple-900 to-slate-900",
  },
  {
    id: "flexport-booking",
    title: "Freight Booking Experience",
    subtitle: "Flexport",
    description: "Streamlining global logistics for e-commerce merchants. Reducing booking time from hours to minutes through intelligent automation.",
    category: "Case Study",
    href: "/portfolio/freight-booking-experience",
    gradient: "bg-gradient-to-br from-emerald-900 via-teal-900 to-slate-900",
  },
  {
    id: "generative-patterns",
    title: "Generative Patterns",
    subtitle: "Creative Coding Experiment",
    description: "Exploring algorithmic art through code-driven visual systems. Mathematical beauty translated into infinite variations.",
    category: "Experiment",
    href: "/experiments/generative-patterns",
    gradient: "bg-gradient-to-br from-rose-900 via-pink-900 to-slate-900",
  },
];

// UX Case Studies
const caseStudies = [
  {
    slug: "enterprise-design-system",
    title: "Enterprise Design System",
    company: "Personio",
    year: "2024",
    category: "Design Systems",
    gradient: "bg-gradient-to-br from-indigo-800 to-slate-900",
  },
  {
    slug: "freight-booking-experience",
    title: "Freight Booking Experience",
    company: "Flexport",
    year: "2023",
    category: "Product Design",
    gradient: "bg-gradient-to-br from-emerald-800 to-slate-900",
  },
  {
    slug: "fitness-platform",
    title: "Fitness Platform",
    company: "Independent",
    year: "2023",
    category: "UX Design",
    gradient: "bg-gradient-to-br from-orange-800 to-slate-900",
  },
  {
    slug: "hr-analytics",
    title: "HR Analytics Dashboard",
    company: "Personio",
    year: "2024",
    category: "Data Visualization",
    gradient: "bg-gradient-to-br from-cyan-800 to-slate-900",
  },
  {
    slug: "developer-portal",
    title: "Developer Portal",
    company: "Oracle",
    year: "2022",
    category: "Developer Experience",
    gradient: "bg-gradient-to-br from-red-800 to-slate-900",
  },
];

// Experiments
const experiments = [
  {
    slug: "generative-patterns",
    title: "Generative Patterns",
    category: "Creative Coding",
    tags: ["p5.js", "Algorithms", "Art"],
    gradient: "bg-gradient-to-br from-violet-600 to-indigo-900",
  },
  {
    slug: "micro-interactions",
    title: "Micro-interaction Library",
    category: "Motion Design",
    tags: ["Framer Motion", "React"],
    gradient: "bg-gradient-to-br from-pink-600 to-rose-900",
  },
  {
    slug: "data-sonification",
    title: "Data Sonification",
    category: "Sound Design",
    tags: ["Web Audio", "Data Viz"],
    gradient: "bg-gradient-to-br from-amber-600 to-orange-900",
  },
  {
    slug: "typography-explorer",
    title: "Variable Font Explorer",
    category: "Typography",
    tags: ["Variable Fonts", "CSS"],
    gradient: "bg-gradient-to-br from-teal-600 to-cyan-900",
  },
];

// Woodworking
const woodworkingItems = [
  {
    id: "walnut-desk",
    title: "Walnut Writing Desk",
    subtitle: "Furniture",
    gradient: "bg-gradient-to-br from-amber-800 to-stone-900",
  },
  {
    id: "cherry-cabinet",
    title: "Cherry Media Cabinet",
    subtitle: "Furniture",
    gradient: "bg-gradient-to-br from-rose-900 to-stone-900",
  },
  {
    id: "oak-bookshelf",
    title: "Oak Floating Shelves",
    subtitle: "Shelving",
    gradient: "bg-gradient-to-br from-yellow-800 to-stone-900",
  },
  {
    id: "maple-cutting-board",
    title: "Maple Cutting Board",
    subtitle: "Kitchen",
    gradient: "bg-gradient-to-br from-orange-800 to-stone-900",
  },
  {
    id: "ash-stool",
    title: "Ash Bar Stool",
    subtitle: "Seating",
    gradient: "bg-gradient-to-br from-stone-700 to-stone-900",
  },
];

// Illustration
const illustrationItems = [
  {
    id: "botanical-series",
    title: "Botanical Series",
    subtitle: "Ink & Watercolor",
    gradient: "bg-gradient-to-br from-green-700 to-emerald-900",
  },
  {
    id: "urban-sketches",
    title: "Urban Sketches",
    subtitle: "Pen & Ink",
    gradient: "bg-gradient-to-br from-slate-600 to-zinc-900",
  },
  {
    id: "portrait-studies",
    title: "Portrait Studies",
    subtitle: "Charcoal",
    gradient: "bg-gradient-to-br from-stone-600 to-neutral-900",
  },
  {
    id: "abstract-forms",
    title: "Abstract Forms",
    subtitle: "Digital",
    gradient: "bg-gradient-to-br from-purple-700 to-violet-900",
  },
];

// Photography
const photographyItems = [
  {
    id: "street-tokyo",
    title: "Tokyo Streets",
    subtitle: "Street Photography",
    gradient: "bg-gradient-to-br from-red-800 to-slate-900",
  },
  {
    id: "landscape-california",
    title: "California Coast",
    subtitle: "Landscape",
    gradient: "bg-gradient-to-br from-blue-700 to-cyan-900",
  },
  {
    id: "architecture-brutalism",
    title: "Brutalist Forms",
    subtitle: "Architecture",
    gradient: "bg-gradient-to-br from-gray-600 to-zinc-900",
  },
  {
    id: "travel-lisbon",
    title: "Lisbon Light",
    subtitle: "Travel",
    gradient: "bg-gradient-to-br from-amber-600 to-orange-900",
  },
  {
    id: "street-nyc",
    title: "NYC Underground",
    subtitle: "Street Photography",
    gradient: "bg-gradient-to-br from-zinc-700 to-slate-900",
  },
];

// Blog posts
const blogPosts = [
  {
    slug: "design-systems-at-scale",
    title: "Building Design Systems at Scale",
    excerpt: "Lessons learned from creating and maintaining design systems for enterprise products.",
    date: "Jan 2026",
    readTime: "8 min",
    category: "Design",
    gradient: "bg-gradient-to-br from-indigo-700 to-slate-800",
  },
  {
    slug: "craft-in-digital-age",
    title: "Finding Craft in the Digital Age",
    excerpt: "Why I started woodworking and what it taught me about patience and intentional design.",
    date: "Dec 2025",
    readTime: "6 min",
    category: "Craft",
    gradient: "bg-gradient-to-br from-amber-700 to-stone-800",
  },
  {
    slug: "prototyping-with-code",
    title: "Prototyping with Code",
    excerpt: "How learning to code transformed my design process and improved collaboration.",
    date: "Nov 2025",
    readTime: "5 min",
    category: "Process",
    gradient: "bg-gradient-to-br from-emerald-700 to-slate-800",
  },
  {
    slug: "ux-research-remote",
    title: "Remote UX Research That Works",
    excerpt: "Strategies for conducting effective user research in distributed teams.",
    date: "Oct 2025",
    readTime: "7 min",
    category: "Research",
    gradient: "bg-gradient-to-br from-violet-700 to-slate-800",
  },
];

export default function Home() {
  return (
    <div className="-mt-16">
      {/* Hero Carousel */}
      <HeroCarousel slides={heroSlides} autoAdvance interval={8000} />

      {/* Content Rows */}
      <div className="py-12 space-y-12">
        {/* UX Case Studies */}
        <ContentRow title="UX Case Studies" href="/portfolio">
          {caseStudies.map((study) => (
            <CaseStudyCard
              key={study.slug}
              href={`/portfolio/${study.slug}`}
              title={study.title}
              company={study.company}
              year={study.year}
              category={study.category}
              gradient={study.gradient}
            />
          ))}
        </ContentRow>

        {/* Experiments */}
        <ContentRow title="Experiments" href="/experiments">
          {experiments.map((exp) => (
            <ExperimentCard
              key={exp.slug}
              href={`/experiments/${exp.slug}`}
              title={exp.title}
              category={exp.category}
              tags={exp.tags}
              gradient={exp.gradient}
            />
          ))}
        </ContentRow>

        {/* Woodworking */}
        <ContentRow title="Woodworking" href="/woodworking">
          {woodworkingItems.map((item) => (
            <GalleryCard
              key={item.id}
              href={`/woodworking#${item.id}`}
              title={item.title}
              subtitle={item.subtitle}
              gradient={item.gradient}
              aspectRatio="portrait"
            />
          ))}
        </ContentRow>

        {/* Illustration */}
        <ContentRow title="Illustration" href="/illustration">
          {illustrationItems.map((item) => (
            <GalleryCard
              key={item.id}
              href={`/illustration#${item.id}`}
              title={item.title}
              subtitle={item.subtitle}
              gradient={item.gradient}
              aspectRatio="square"
            />
          ))}
        </ContentRow>

        {/* Photography */}
        <ContentRow title="Photography" href="/photography">
          {photographyItems.map((item) => (
            <GalleryCard
              key={item.id}
              href={`/photography#${item.id}`}
              title={item.title}
              subtitle={item.subtitle}
              gradient={item.gradient}
              aspectRatio="landscape"
            />
          ))}
        </ContentRow>

        {/* Blog / Writing */}
        <ContentRow title="Writing" href="/blog">
          {blogPosts.map((post) => (
            <BlogCard
              key={post.slug}
              href={`/blog/${post.slug}`}
              title={post.title}
              excerpt={post.excerpt}
              date={post.date}
              readTime={post.readTime}
              category={post.category}
              gradient={post.gradient}
            />
          ))}
        </ContentRow>
      </div>

      {/* Footer CTA */}
      <section className="py-24 border-t border-border">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-medium tracking-tight">
            Let&apos;s work together
          </h2>
          <p className="mt-4 text-muted max-w-md mx-auto">
            I&apos;m always interested in hearing about new projects and opportunities.
          </p>
          <div className="mt-8">
            <a
              href="mailto:hello@nathanbilbao.com"
              className="inline-flex items-center justify-center h-12 px-8 bg-foreground text-background font-medium rounded-full hover:opacity-90 transition-opacity"
            >
              Get in touch
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
