"use client";

import Link from "next/link";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/Animations";

const projects = [
  {
    slug: "enterprise-design-system",
    title: "Enterprise Design System",
    description: "Building a unified design language for complex B2B workflows across multiple product lines",
    category: "Design Systems",
    year: "2024",
    company: "Personio",
    featured: true,
  },
  {
    slug: "freight-booking-experience",
    title: "Freight Booking Experience",
    description: "Streamlining global logistics for e-commerce merchants through an intuitive Shopify integration",
    category: "Product Design",
    year: "2023",
    company: "Flexport",
    featured: true,
  },
  {
    slug: "fitness-platform",
    title: "Fitness Platform",
    description: "A modular system for personal trainers to create scalable, customizable workout programs",
    category: "UX Design",
    year: "2022",
    company: "Independent",
    featured: true,
  },
  {
    slug: "supply-chain-visibility",
    title: "Supply Chain Visibility",
    description: "Real-time tracking and analytics dashboard for global supply chain operations",
    category: "Data Visualization",
    year: "2022",
    company: "Flexport",
    featured: false,
  },
  {
    slug: "hr-onboarding-flow",
    title: "HR Onboarding Flow",
    description: "Redesigning the employee onboarding experience for enterprise HR teams",
    category: "UX Design",
    year: "2024",
    company: "Personio",
    featured: false,
  },
  {
    slug: "construction-collaboration",
    title: "Construction Collaboration Tool",
    description: "Cloud-based platform for construction teams to manage projects and documents",
    category: "Product Design",
    year: "2018",
    company: "Autodesk",
    featured: false,
  },
];

export default function PortfolioPage() {
  const featuredProjects = projects.filter((p) => p.featured);
  const otherProjects = projects.filter((p) => !p.featured);

  return (
    <div className="pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <FadeIn>
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-medium tracking-tight">
              UX Portfolio
            </h1>
            <p className="mt-6 text-lg md:text-xl text-muted leading-relaxed">
              A collection of product design work spanning enterprise tools,
              design systems, and consumer applications. Each project represents
              a commitment to understanding users and delivering measurable impact.
            </p>
          </div>
        </FadeIn>

        {/* Featured Projects */}
        <section className="mt-24">
          <FadeIn>
            <h2 className="text-sm font-medium text-muted uppercase tracking-wide mb-12">
              Featured Projects
            </h2>
          </FadeIn>

          <StaggerContainer className="space-y-16">
            {featuredProjects.map((project, index) => (
              <StaggerItem key={project.slug}>
                <Link
                  href={`/portfolio/${project.slug}`}
                  className="group grid lg:grid-cols-2 gap-8 lg:gap-16 items-center"
                >
                  {/* Image */}
                  <div className={`aspect-project bg-card rounded-lg overflow-hidden border border-border group-hover:border-muted transition-colors ${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                    <div className="w-full h-full bg-gradient-to-br from-card to-card-hover flex items-center justify-center">
                      <span className="text-muted text-sm">Project Image</span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className={index % 2 === 1 ? 'lg:order-1' : ''}>
                    <div className="flex items-center gap-3 text-xs text-muted uppercase tracking-wide mb-4">
                      <span>{project.company}</span>
                      <span className="w-1 h-1 rounded-full bg-muted" />
                      <span>{project.year}</span>
                    </div>
                    <h3 className="text-2xl md:text-3xl font-medium group-hover:opacity-70 transition-opacity">
                      {project.title}
                    </h3>
                    <p className="mt-4 text-muted leading-relaxed">
                      {project.description}
                    </p>
                    <div className="mt-6">
                      <span className="text-sm font-medium underline-animated">
                        View case study
                      </span>
                    </div>
                  </div>
                </Link>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </section>

        {/* Other Projects */}
        <section className="mt-32">
          <FadeIn>
            <h2 className="text-sm font-medium text-muted uppercase tracking-wide mb-12">
              More Work
            </h2>
          </FadeIn>

          <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {otherProjects.map((project) => (
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
                    <div className="flex items-center gap-3 text-xs text-muted uppercase tracking-wide mb-2">
                      <span>{project.company}</span>
                      <span className="w-1 h-1 rounded-full bg-muted" />
                      <span>{project.year}</span>
                    </div>
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
        </section>
      </div>
    </div>
  );
}
