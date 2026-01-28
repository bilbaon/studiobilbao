"use client";

import Link from "next/link";
import { useState } from "react";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/Animations";

const categories = [
  { id: "all", label: "All" },
  { id: "design", label: "Design" },
  { id: "craft", label: "Craft" },
  { id: "career", label: "Career" },
  { id: "process", label: "Process" },
];

const posts = [
  {
    slug: "design-systems-at-scale",
    title: "Building Design Systems at Scale",
    excerpt: "Lessons learned from creating and maintaining design systems for enterprise products. What works, what doesn't, and how to get organizational buy-in.",
    category: "design",
    date: "January 15, 2026",
    readTime: "8 min read",
    featured: true,
  },
  {
    slug: "craft-in-digital-age",
    title: "Finding Craft in the Digital Age",
    excerpt: "Why I started woodworking and what it taught me about patience, intentional design, and the value of physical making in a digital world.",
    category: "craft",
    date: "December 28, 2025",
    readTime: "6 min read",
    featured: true,
  },
  {
    slug: "enterprise-ux-lessons",
    title: "10 Things I Learned Designing Enterprise Software",
    excerpt: "Enterprise UX is a different beast. Here are the hard-won lessons from a decade of designing complex B2B products.",
    category: "design",
    date: "November 12, 2025",
    readTime: "12 min read",
    featured: false,
  },
  {
    slug: "junior-to-senior",
    title: "The Path from Junior to Senior Designer",
    excerpt: "What actually changes as you grow in your design career, and the skills that matter most at each stage.",
    category: "career",
    date: "October 5, 2025",
    readTime: "10 min read",
    featured: false,
  },
  {
    slug: "design-critique-guide",
    title: "A Better Way to Run Design Critiques",
    excerpt: "Design critiques often waste time or hurt feelings. Here's a framework for making them productive and psychologically safe.",
    category: "process",
    date: "September 18, 2025",
    readTime: "7 min read",
    featured: false,
  },
  {
    slug: "learning-woodworking",
    title: "Learning to Work with My Hands",
    excerpt: "Notes on the first year of woodworking: tools acquired, mistakes made, and why starting is the hardest part.",
    category: "craft",
    date: "August 22, 2025",
    readTime: "5 min read",
    featured: false,
  },
  {
    slug: "figma-to-code",
    title: "Bridging Design and Development",
    excerpt: "How to create designs that translate well to code, and build better relationships with your engineering partners.",
    category: "process",
    date: "July 10, 2025",
    readTime: "9 min read",
    featured: false,
  },
  {
    slug: "side-projects",
    title: "Why Side Projects Matter",
    excerpt: "The case for maintaining creative projects outside of your day job, and how to actually find time for them.",
    category: "career",
    date: "June 5, 2025",
    readTime: "6 min read",
    featured: false,
  },
];

export default function BlogPage() {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredPosts = activeCategory === "all"
    ? posts
    : posts.filter((post) => post.category === activeCategory);

  const featuredPosts = posts.filter((post) => post.featured);

  return (
    <div className="pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <FadeIn>
          <div className="max-w-3xl mb-16">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-medium tracking-tight">
              Blog
            </h1>
            <p className="mt-6 text-lg md:text-xl text-muted leading-relaxed">
              Thoughts on design, craft, career, and the creative process.
              Writing helps me think through problems and share what I&apos;ve learned
              along the way.
            </p>
          </div>
        </FadeIn>

        {/* Featured Posts */}
        <section className="mb-24">
          <FadeIn>
            <h2 className="text-sm font-medium text-muted uppercase tracking-wide mb-8">
              Featured
            </h2>
          </FadeIn>

          <StaggerContainer className="grid md:grid-cols-2 gap-8">
            {featuredPosts.map((post) => (
              <StaggerItem key={post.slug}>
                <Link
                  href={`/blog/${post.slug}`}
                  className="group block p-8 bg-card rounded-lg border border-border hover:border-muted transition-colors h-full"
                >
                  <p className="text-xs text-muted uppercase tracking-wide mb-4">
                    {categories.find((c) => c.id === post.category)?.label}
                  </p>
                  <h2 className="text-2xl font-medium group-hover:opacity-70 transition-opacity">
                    {post.title}
                  </h2>
                  <p className="mt-4 text-muted leading-relaxed">
                    {post.excerpt}
                  </p>
                  <div className="mt-6 flex items-center gap-3 text-sm text-muted">
                    <span>{post.date}</span>
                    <span className="w-1 h-1 rounded-full bg-muted" />
                    <span>{post.readTime}</span>
                  </div>
                </Link>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </section>

        {/* All Posts */}
        <section>
          <FadeIn>
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
              <h2 className="text-sm font-medium text-muted uppercase tracking-wide">
                All Posts
              </h2>

              {/* Category Filter */}
              <div className="flex flex-wrap gap-2">
                {categories.map((category) => (
                  <button
                    key={category.id}
                    onClick={() => setActiveCategory(category.id)}
                    className={`px-3 py-1.5 text-xs rounded-full border transition-colors ${
                      activeCategory === category.id
                        ? "bg-foreground text-background border-foreground"
                        : "border-border hover:border-muted"
                    }`}
                  >
                    {category.label}
                  </button>
                ))}
              </div>
            </div>
          </FadeIn>

          <StaggerContainer className="space-y-1">
            {filteredPosts.map((post) => (
              <StaggerItem key={post.slug}>
                <Link
                  href={`/blog/${post.slug}`}
                  className="group flex flex-col md:flex-row md:items-center justify-between gap-2 py-6 border-b border-border hover:bg-card/50 transition-colors -mx-4 px-4 rounded-lg"
                >
                  <div className="flex-1">
                    <h3 className="text-lg font-medium group-hover:opacity-70 transition-opacity">
                      {post.title}
                    </h3>
                    <p className="mt-1 text-sm text-muted line-clamp-1 md:max-w-xl">
                      {post.excerpt}
                    </p>
                  </div>
                  <div className="flex items-center gap-4 text-sm text-muted shrink-0">
                    <span className="hidden md:inline">
                      {categories.find((c) => c.id === post.category)?.label}
                    </span>
                    <span className="hidden md:inline w-1 h-1 rounded-full bg-muted" />
                    <span>{post.date}</span>
                  </div>
                </Link>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </section>

        {/* Newsletter */}
        <FadeIn>
          <section className="mt-24 p-12 bg-card rounded-lg border border-border text-center">
            <h2 className="text-2xl font-medium mb-4">
              Subscribe to updates
            </h2>
            <p className="text-muted max-w-md mx-auto mb-8">
              Get notified when I publish new articles. No spam, unsubscribe anytime.
            </p>
            <form className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                type="email"
                placeholder="your@email.com"
                className="flex-1 h-12 px-4 bg-background border border-border rounded-full focus:outline-none focus:border-muted"
              />
              <button
                type="submit"
                className="h-12 px-8 bg-foreground text-background font-medium rounded-full hover:opacity-90 transition-opacity"
              >
                Subscribe
              </button>
            </form>
          </section>
        </FadeIn>
      </div>
    </div>
  );
}
