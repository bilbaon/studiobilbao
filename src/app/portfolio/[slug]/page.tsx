"use client";

import Link from "next/link";
import { useParams } from "next/navigation";
import { FadeIn, FadeInUp } from "@/components/Animations";

// This would typically come from a CMS or data file
const projectsData: Record<string, {
  title: string;
  description: string;
  company: string;
  year: string;
  role: string;
  duration: string;
  team: string;
  overview: string;
  challenge: string;
  approach: string[];
  outcome: string;
  metrics: { label: string; value: string }[];
  sections: { title: string; content: string; image?: boolean }[];
}> = {
  "enterprise-design-system": {
    title: "Enterprise Design System",
    description: "Building a unified design language for complex B2B workflows",
    company: "Personio",
    year: "2024",
    role: "Principal Designer, Design Systems Lead",
    duration: "18 months (ongoing)",
    team: "2 designers, 4 engineers, 1 PM",
    overview: "Personio's product suite had grown organically over years, resulting in inconsistent user experiences across different modules. The design system initiative aimed to create a unified foundation that would improve consistency, accelerate development, and enhance the overall user experience.",
    challenge: "With over 50 distinct product areas and multiple teams working independently, the challenge was not just creating components, but establishing governance, adoption strategies, and a cultural shift toward systematic thinking.",
    approach: [
      "Conducted a comprehensive audit of existing patterns across all product areas",
      "Interviewed 20+ designers and engineers to understand pain points and workflows",
      "Established a core team with representatives from different product areas",
      "Created a phased rollout plan prioritizing high-impact, frequently-used components",
      "Built documentation and tooling to support self-service adoption",
    ],
    outcome: "The design system is now the foundation for all new feature development at Personio, with over 80% adoption across product teams.",
    metrics: [
      { label: "Design-to-dev time reduction", value: "40%" },
      { label: "Component adoption rate", value: "80%" },
      { label: "Design consistency score", value: "94%" },
      { label: "Developer satisfaction", value: "+35 NPS" },
    ],
    sections: [
      {
        title: "Research & Discovery",
        content: "The project began with extensive research to understand the current state of design across the organization. We mapped every unique pattern, documented inconsistencies, and identified the root causes of fragmentation. This research phase was crucial in building the case for investment and prioritizing our roadmap.",
        image: true,
      },
      {
        title: "Component Architecture",
        content: "We designed a flexible component architecture that could accommodate the complexity of enterprise HR software. This included building atomic components that could be composed into more complex patterns, with clear APIs for customization without breaking consistency.",
        image: true,
      },
      {
        title: "Documentation & Tooling",
        content: "A design system is only as good as its documentation. We created comprehensive guidelines for usage, accessibility requirements, and code examples. The tooling included Figma libraries with auto-updating components and a React component library with full TypeScript support.",
        image: true,
      },
      {
        title: "Governance & Adoption",
        content: "We established a contribution model where teams could propose new components or modifications through a review process. Regular office hours and training sessions helped teams adopt the system and contribute back to it.",
        image: true,
      },
    ],
  },
  "freight-booking-experience": {
    title: "Freight Booking Experience",
    description: "Streamlining global logistics for e-commerce merchants",
    company: "Flexport",
    year: "2023",
    role: "Senior UX Designer",
    duration: "8 months",
    team: "1 designer, 3 engineers, 1 PM",
    overview: "Flexport's mission is to make global trade easier. The Shopify app project aimed to bring freight booking capabilities directly into the merchant workflow, eliminating the need for separate systems and reducing friction in the shipping process.",
    challenge: "E-commerce merchants needed to book freight shipments but found the process intimidating and complex. The existing flow required navigating multiple systems and understanding logistics jargon that was foreign to most merchants.",
    approach: [
      "Conducted user research with 15 Shopify merchants of varying sizes",
      "Mapped the existing freight booking journey and identified key pain points",
      "Created a progressive disclosure model that revealed complexity only when needed",
      "Designed an instant quote feature that reduced decision anxiety",
      "Built a tracking interface that integrated with the Shopify dashboard",
    ],
    outcome: "The app launched to positive reception, significantly reducing the barrier to entry for merchants new to freight shipping.",
    metrics: [
      { label: "Booking completion rate", value: "+65%" },
      { label: "Time to first booking", value: "-50%" },
      { label: "Customer support tickets", value: "-40%" },
      { label: "App store rating", value: "4.8/5" },
    ],
    sections: [
      {
        title: "User Research",
        content: "We interviewed merchants ranging from small Shopify stores to larger operations managing hundreds of SKUs. The key insight was that merchants didn't want to become logistics experts—they wanted to ship their products reliably and affordably without learning a new domain.",
        image: true,
      },
      {
        title: "Simplifying Complexity",
        content: "The freight industry is full of specialized terminology and complex pricing structures. We designed an interface that abstracted away this complexity, presenting merchants with clear options and recommendations based on their specific needs.",
        image: true,
      },
      {
        title: "Instant Quotes",
        content: "The instant quote feature was a game-changer. Instead of waiting hours or days for a freight quote, merchants could see pricing immediately. We achieved this through intelligent defaults and partnerships with carriers who could provide real-time rates.",
        image: true,
      },
    ],
  },
  "fitness-platform": {
    title: "Fitness Platform",
    description: "A modular system for personalized workout programs",
    company: "Independent",
    year: "2022",
    role: "Product Designer",
    duration: "6 months",
    team: "1 designer, 2 engineers",
    overview: "Personal trainers and physical therapists needed a way to create, manage, and distribute customized workout programs to their clients. The platform provided a modular system for building programs from a library of exercises.",
    challenge: "Existing solutions were either too simple (just video libraries) or too complex (requiring significant training to use). We needed to find the sweet spot that gave professionals flexibility while remaining approachable.",
    approach: [
      "Interviewed 12 personal trainers and 5 physical therapists",
      "Analyzed competing products to identify market gaps",
      "Designed a block-based program builder inspired by Notion and Figma",
      "Created a client-facing app optimized for gym use (large touch targets, offline support)",
      "Built progress tracking that integrated with wearables",
    ],
    outcome: "The platform gained traction among boutique fitness studios and independent trainers, with strong retention among active users.",
    metrics: [
      { label: "Program creation time", value: "-60%" },
      { label: "Client adherence rate", value: "+45%" },
      { label: "Trainer retention", value: "85%" },
      { label: "Weekly active users", value: "2,500+" },
    ],
    sections: [
      {
        title: "Understanding the Workflow",
        content: "Trainers often created programs on paper or in spreadsheets, then manually communicated them to clients. The process was time-consuming and error-prone. We observed trainers in their natural environment to understand the nuances of their workflow.",
        image: true,
      },
      {
        title: "Modular Design System",
        content: "The block-based approach allowed trainers to create exercises once and reuse them across programs. Programs could be templated and customized per client, saving hours of repetitive work while maintaining personalization.",
        image: true,
      },
      {
        title: "Client Experience",
        content: "The client app was designed for the gym environment—large buttons, clear visuals, and the ability to work offline. Video demonstrations could be downloaded ahead of time, and progress synced when connectivity returned.",
        image: true,
      },
    ],
  },
};

export default function CaseStudyPage() {
  const params = useParams();
  const slug = params.slug as string;
  const project = projectsData[slug];

  if (!project) {
    return (
      <div className="pt-32 pb-24">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h1 className="text-2xl font-medium">Project not found</h1>
          <p className="mt-4 text-muted">
            This case study doesn&apos;t exist or has been moved.
          </p>
          <Link
            href="/portfolio"
            className="mt-8 inline-flex items-center text-sm font-medium underline-animated"
          >
            ← Back to portfolio
          </Link>
        </div>
      </div>
    );
  }

  return (
    <article className="pt-32 pb-24">
      {/* Hero */}
      <header className="max-w-4xl mx-auto px-6 lg:px-8">
        <FadeIn>
          <Link
            href="/portfolio"
            className="inline-flex items-center text-sm text-muted hover:text-foreground transition-colors mb-8"
          >
            ← Back to portfolio
          </Link>
        </FadeIn>

        <FadeIn delay={0.1}>
          <div className="flex items-center gap-3 text-sm text-muted mb-4">
            <span>{project.company}</span>
            <span className="w-1 h-1 rounded-full bg-muted" />
            <span>{project.year}</span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-medium tracking-tight">
            {project.title}
          </h1>
          <p className="mt-6 text-xl text-muted leading-relaxed">
            {project.description}
          </p>
        </FadeIn>

        {/* Hero Image */}
        <FadeIn delay={0.2}>
          <div className="mt-16 aspect-video bg-card rounded-lg border border-border flex items-center justify-center">
            <span className="text-muted">Hero Image</span>
          </div>
        </FadeIn>

        {/* Project Details */}
        <FadeIn delay={0.3}>
          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 py-8 border-y border-border">
            <div>
              <p className="text-xs text-muted uppercase tracking-wide mb-2">Role</p>
              <p className="text-sm">{project.role}</p>
            </div>
            <div>
              <p className="text-xs text-muted uppercase tracking-wide mb-2">Duration</p>
              <p className="text-sm">{project.duration}</p>
            </div>
            <div>
              <p className="text-xs text-muted uppercase tracking-wide mb-2">Team</p>
              <p className="text-sm">{project.team}</p>
            </div>
            <div>
              <p className="text-xs text-muted uppercase tracking-wide mb-2">Company</p>
              <p className="text-sm">{project.company}</p>
            </div>
          </div>
        </FadeIn>
      </header>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-6 lg:px-8 mt-16">
        {/* Overview */}
        <FadeInUp>
          <section className="prose-section">
            <h2 className="text-2xl font-medium mb-6">Overview</h2>
            <p className="text-muted leading-relaxed">{project.overview}</p>
          </section>
        </FadeInUp>

        {/* Challenge */}
        <FadeInUp>
          <section className="mt-16">
            <h2 className="text-2xl font-medium mb-6">The Challenge</h2>
            <p className="text-muted leading-relaxed">{project.challenge}</p>
          </section>
        </FadeInUp>

        {/* Approach */}
        <FadeInUp>
          <section className="mt-16">
            <h2 className="text-2xl font-medium mb-6">Approach</h2>
            <ul className="space-y-4">
              {project.approach.map((item, index) => (
                <li key={index} className="flex gap-4 text-muted">
                  <span className="text-foreground font-mono text-sm">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </section>
        </FadeInUp>

        {/* Process Sections */}
        {project.sections.map((section, index) => (
          <FadeInUp key={index}>
            <section className="mt-24">
              <h2 className="text-2xl font-medium mb-6">{section.title}</h2>
              <p className="text-muted leading-relaxed mb-8">{section.content}</p>
              {section.image && (
                <div className="aspect-video bg-card rounded-lg border border-border flex items-center justify-center">
                  <span className="text-muted">Image: {section.title}</span>
                </div>
              )}
            </section>
          </FadeInUp>
        ))}

        {/* Outcome */}
        <FadeInUp>
          <section className="mt-24">
            <h2 className="text-2xl font-medium mb-6">Outcome</h2>
            <p className="text-muted leading-relaxed mb-8">{project.outcome}</p>

            {/* Metrics */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-8">
              {project.metrics.map((metric, index) => (
                <div key={index} className="p-6 bg-card rounded-lg border border-border">
                  <p className="text-3xl font-medium">{metric.value}</p>
                  <p className="mt-2 text-sm text-muted">{metric.label}</p>
                </div>
              ))}
            </div>
          </section>
        </FadeInUp>

        {/* Navigation */}
        <FadeInUp>
          <div className="mt-24 pt-8 border-t border-border">
            <Link
              href="/portfolio"
              className="inline-flex items-center text-sm font-medium underline-animated"
            >
              ← View all projects
            </Link>
          </div>
        </FadeInUp>
      </div>
    </article>
  );
}
