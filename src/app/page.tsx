"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/Animations";

const featuredProjects = [
  {
    slug: "enterprise-design-system",
    title: "Enterprise Design System",
    description: "Building a unified design language for complex B2B workflows",
    category: "UX Design",
    image: "/images/projects/design-system.jpg",
  },
  {
    slug: "freight-booking-experience",
    title: "Freight Booking Experience",
    description: "Streamlining global logistics for e-commerce merchants",
    category: "Product Design",
    image: "/images/projects/freight.jpg",
  },
  {
    slug: "fitness-platform",
    title: "Fitness Platform",
    description: "A modular system for personalized workout programs",
    category: "UX Design",
    image: "/images/projects/fitness.jpg",
  },
];

const creativeWork = [
  {
    href: "/woodworking",
    title: "Woodworking",
    description: "Handcrafted furniture and objects",
    image: "/images/woodworking/featured.jpg",
  },
  {
    href: "/illustration",
    title: "Illustration",
    description: "Visual explorations and drawings",
    image: "/images/illustration/featured.jpg",
  },
  {
    href: "/photography",
    title: "Photography",
    description: "Moments captured through the lens",
    image: "/images/photography/featured.jpg",
  },
];

export default function Home() {
  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="min-h-[90vh] flex items-center">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-24">
          <FadeIn>
            <p className="text-muted text-sm font-medium tracking-wide uppercase mb-6">
              Principal Product Designer
            </p>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-medium tracking-tight leading-[1.1] max-w-4xl text-balance">
              Crafting intuitive experiences for high-impact technology
            </h1>
          </FadeIn>
          <FadeIn delay={0.2}>
            <p className="mt-8 text-lg md:text-xl text-muted max-w-2xl leading-relaxed">
              I help teams build enterprise tools that unlock productivity through
              thoughtful design and validation. Currently at Personio, previously
              at Flexport and Oracle.
            </p>
          </FadeIn>
          <FadeIn delay={0.3}>
            <div className="mt-12 flex flex-wrap gap-4">
              <Link
                href="/portfolio"
                className="inline-flex items-center justify-center h-12 px-8 bg-foreground text-background font-medium rounded-full hover:opacity-90 transition-opacity"
              >
                View Portfolio
              </Link>
              <Link
                href="/experiments"
                className="inline-flex items-center justify-center h-12 px-8 border border-border font-medium rounded-full hover:bg-card-hover transition-colors"
              >
                Experiments
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Featured Work */}
      <section className="py-24 border-t border-border">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <FadeIn>
            <div className="flex items-end justify-between mb-16">
              <div>
                <h2 className="text-3xl md:text-4xl font-medium tracking-tight">
                  Selected Work
                </h2>
                <p className="mt-4 text-muted max-w-xl">
                  Enterprise UX design focused on making complex systems accessible
                </p>
              </div>
              <Link
                href="/portfolio"
                className="hidden md:inline-flex text-sm font-medium underline-animated"
              >
                View all projects
              </Link>
            </div>
          </FadeIn>

          <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProjects.map((project) => (
              <StaggerItem key={project.slug}>
                <Link
                  href={`/portfolio/${project.slug}`}
                  className="group block"
                >
                  <div className="aspect-project bg-card rounded-lg overflow-hidden border border-border group-hover:border-muted transition-colors">
                    <div className="w-full h-full bg-gradient-to-br from-card to-card-hover flex items-center justify-center">
                      <span className="text-muted text-sm">Project Image</span>
                    </div>
                  </div>
                  <div className="mt-6">
                    <p className="text-xs text-muted uppercase tracking-wide mb-2">
                      {project.category}
                    </p>
                    <h3 className="text-xl font-medium group-hover:opacity-70 transition-opacity">
                      {project.title}
                    </h3>
                    <p className="mt-2 text-muted text-sm">
                      {project.description}
                    </p>
                  </div>
                </Link>
              </StaggerItem>
            ))}
          </StaggerContainer>

          <div className="mt-12 md:hidden">
            <Link
              href="/portfolio"
              className="text-sm font-medium underline-animated"
            >
              View all projects
            </Link>
          </div>
        </div>
      </section>

      {/* Creative Explorations */}
      <section className="py-24 border-t border-border bg-card">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <FadeIn>
            <div className="mb-16">
              <h2 className="text-3xl md:text-4xl font-medium tracking-tight">
                Creative Explorations
              </h2>
              <p className="mt-4 text-muted max-w-xl">
                Beyond screens — exploring craft, illustration, and photography
              </p>
            </div>
          </FadeIn>

          <StaggerContainer className="grid md:grid-cols-3 gap-8">
            {creativeWork.map((item) => (
              <StaggerItem key={item.href}>
                <Link href={item.href} className="group block">
                  <div className="aspect-square bg-background rounded-lg overflow-hidden border border-border group-hover:border-muted transition-colors">
                    <div className="w-full h-full bg-gradient-to-br from-background to-card-hover flex items-center justify-center">
                      <span className="text-muted text-sm">{item.title}</span>
                    </div>
                  </div>
                  <div className="mt-6">
                    <h3 className="text-xl font-medium group-hover:opacity-70 transition-opacity">
                      {item.title}
                    </h3>
                    <p className="mt-2 text-muted text-sm">
                      {item.description}
                    </p>
                  </div>
                </Link>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* About Teaser */}
      <section className="py-24 border-t border-border">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <FadeIn>
              <div>
                <h2 className="text-3xl md:text-4xl font-medium tracking-tight mb-6">
                  Thoughtful design, tangible impact
                </h2>
                <div className="space-y-4 text-muted">
                  <p>
                    With over a decade of experience in UX design, I&apos;ve helped
                    build products used by millions at companies like Personio,
                    Flexport, Oracle, and Autodesk.
                  </p>
                  <p>
                    I believe the best design emerges from deep understanding — of
                    users, business constraints, and the craft itself. Whether it&apos;s
                    a complex enterprise workflow or a handcrafted wooden object,
                    I approach every project with the same attention to detail.
                  </p>
                </div>
                <div className="mt-8 flex flex-wrap gap-6 text-sm">
                  <div>
                    <p className="font-medium text-foreground">Currently</p>
                    <p className="text-muted">Principal Designer at Personio</p>
                  </div>
                  <div>
                    <p className="font-medium text-foreground">Previously</p>
                    <p className="text-muted">Flexport, Oracle, Autodesk</p>
                  </div>
                </div>
              </div>
            </FadeIn>
            <FadeIn delay={0.2}>
              <div className="aspect-square bg-card rounded-lg border border-border flex items-center justify-center">
                <span className="text-muted text-sm">Photo</span>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Blog Preview */}
      <section className="py-24 border-t border-border bg-card">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <FadeIn>
            <div className="flex items-end justify-between mb-16">
              <div>
                <h2 className="text-3xl md:text-4xl font-medium tracking-tight">
                  Writing
                </h2>
                <p className="mt-4 text-muted max-w-xl">
                  Thoughts on design, craft, and building products
                </p>
              </div>
              <Link
                href="/blog"
                className="hidden md:inline-flex text-sm font-medium underline-animated"
              >
                View all posts
              </Link>
            </div>
          </FadeIn>

          <StaggerContainer className="grid md:grid-cols-2 gap-8">
            <StaggerItem>
              <Link href="/blog/design-systems-at-scale" className="group block p-6 bg-background rounded-lg border border-border hover:border-muted transition-colors">
                <p className="text-xs text-muted uppercase tracking-wide mb-3">
                  Design Systems
                </p>
                <h3 className="text-xl font-medium group-hover:opacity-70 transition-opacity">
                  Building Design Systems at Scale
                </h3>
                <p className="mt-3 text-muted text-sm line-clamp-2">
                  Lessons learned from creating and maintaining design systems
                  for enterprise products.
                </p>
                <p className="mt-4 text-xs text-muted">
                  January 2026
                </p>
              </Link>
            </StaggerItem>
            <StaggerItem>
              <Link href="/blog/craft-in-digital-age" className="group block p-6 bg-background rounded-lg border border-border hover:border-muted transition-colors">
                <p className="text-xs text-muted uppercase tracking-wide mb-3">
                  Craft
                </p>
                <h3 className="text-xl font-medium group-hover:opacity-70 transition-opacity">
                  Finding Craft in the Digital Age
                </h3>
                <p className="mt-3 text-muted text-sm line-clamp-2">
                  Why I started woodworking and what it taught me about
                  patience and intentional design.
                </p>
                <p className="mt-4 text-xs text-muted">
                  December 2025
                </p>
              </Link>
            </StaggerItem>
          </StaggerContainer>

          <div className="mt-12 md:hidden">
            <Link
              href="/blog"
              className="text-sm font-medium underline-animated"
            >
              View all posts
            </Link>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-24 border-t border-border">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <FadeIn>
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
          </FadeIn>
        </div>
      </section>
    </div>
  );
}
