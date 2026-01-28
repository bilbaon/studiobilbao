"use client";

import Link from "next/link";
import { useParams } from "next/navigation";
import { FadeIn, FadeInUp } from "@/components/Animations";

const postsData: Record<string, {
  title: string;
  excerpt: string;
  category: string;
  date: string;
  readTime: string;
  content: { type: "paragraph" | "heading" | "list" | "quote"; text: string | string[] }[];
}> = {
  "design-systems-at-scale": {
    title: "Building Design Systems at Scale",
    excerpt: "Lessons learned from creating and maintaining design systems for enterprise products.",
    category: "Design",
    date: "January 15, 2026",
    readTime: "8 min read",
    content: [
      {
        type: "paragraph",
        text: "After spending the last two years building and scaling a design system at Personio, I've learned that the technical challenges are often the easy part. The real work is organizational—getting buy-in, managing contributions, and maintaining momentum over time.",
      },
      {
        type: "heading",
        text: "Start with the problem, not the solution",
      },
      {
        type: "paragraph",
        text: "It's tempting to dive straight into building components. But without understanding why inconsistency exists in the first place, you're likely to repeat the same patterns. We spent our first month doing nothing but research: auditing existing patterns, interviewing designers and engineers, and mapping the organizational dynamics that led to fragmentation.",
      },
      {
        type: "paragraph",
        text: "What we found was revealing. Inconsistency wasn't usually the result of carelessness or poor communication. It emerged from reasonable decisions made in isolation—teams moving fast, working around constraints, and solving immediate problems without visibility into what other teams were doing.",
      },
      {
        type: "heading",
        text: "Build trust before building components",
      },
      {
        type: "paragraph",
        text: "A design system is only as good as its adoption, and adoption depends on trust. Teams need to believe that using the system will make their work better, not just more constrained. This trust has to be earned through demonstrated value, not mandated through policy.",
      },
      {
        type: "list",
        text: [
          "Start with components teams are already struggling with",
          "Prioritize quality and documentation over quantity",
          "Be responsive to feedback and contribution requests",
          "Show impact through metrics teams care about",
        ],
      },
      {
        type: "heading",
        text: "The governance challenge",
      },
      {
        type: "paragraph",
        text: "As the system grows, governance becomes critical. Who decides what goes into the system? How do teams contribute? What happens when the system doesn't meet a team's needs? These questions need clear answers, or you'll end up with either a system that stagnates or one that becomes a dumping ground for every one-off pattern.",
      },
      {
        type: "paragraph",
        text: "We settled on a contribution model with three tiers: core components owned by the system team, extended components contributed by product teams with system team review, and local components that live in product codebases but follow system conventions.",
      },
      {
        type: "quote",
        text: "A design system is a product, and its users are the designers and developers who build with it. Like any product, it needs ongoing investment, not just initial creation.",
      },
      {
        type: "heading",
        text: "Measuring success",
      },
      {
        type: "paragraph",
        text: "How do you know if your design system is working? We track several metrics: adoption rate across product areas, time savings in design and development, consistency scores from periodic audits, and satisfaction surveys from internal users. But the most important signal is qualitative—are teams reaching for the system first, or working around it?",
      },
      {
        type: "paragraph",
        text: "Two years in, our system is the foundation for all new feature development. But the work isn't done. Design systems are living products that require ongoing investment. The moment you stop evolving, you start becoming legacy.",
      },
    ],
  },
  "craft-in-digital-age": {
    title: "Finding Craft in the Digital Age",
    excerpt: "Why I started woodworking and what it taught me about patience and intentional design.",
    category: "Craft",
    date: "December 28, 2025",
    readTime: "6 min read",
    content: [
      {
        type: "paragraph",
        text: "I spend my days pushing pixels. Every artifact of my professional work exists only as light on screens—infinitely reproducible, easily changed, fundamentally impermanent. After fifteen years of digital design, I found myself craving something different: work that exists in physical space, that can be touched, that shows the marks of its making.",
      },
      {
        type: "paragraph",
        text: "So I started woodworking. Not because I had any particular aptitude for it, but because I wanted to learn what it felt like to make things with my hands again.",
      },
      {
        type: "heading",
        text: "No undo button",
      },
      {
        type: "paragraph",
        text: "The first thing you learn in woodworking is that mistakes are permanent. Cut a board too short, and it's too short forever. There's no command-Z, no version history, no 'let me try that again.' This constraint, which initially felt frustrating, turned out to be liberating. It forced me to slow down, to measure twice (or three times), to think before acting.",
      },
      {
        type: "paragraph",
        text: "In digital design, the ease of iteration can become a crutch. Why think carefully when you can just try something and fix it later? Woodworking reminded me that there's value in the upfront investment of careful thought.",
      },
      {
        type: "heading",
        text: "Working with the material",
      },
      {
        type: "paragraph",
        text: "Wood has grain, movement, personality. Every board is different, and the craft is partly about learning to read these characteristics and work with them rather than against them. You can't force wood to do what you want; you can only guide it toward what it's capable of.",
      },
      {
        type: "quote",
        text: "Good design, whether digital or physical, requires understanding and respecting the materials you're working with. Fight the medium, and it shows.",
      },
      {
        type: "paragraph",
        text: "This lesson translates directly to digital design. Every platform, every technology, every design system has its own grain. The best digital products feel native to their medium, not forced into it.",
      },
      {
        type: "heading",
        text: "The value of slowness",
      },
      {
        type: "paragraph",
        text: "A simple wooden box takes me a full weekend to make. A complex piece of furniture might take months. This pace felt impossibly slow at first—in my day job, I ship features in hours, not months. But I've come to appreciate this slowness as a feature, not a bug.",
      },
      {
        type: "paragraph",
        text: "There's something meditative about sustained attention on a single object. Every decision—the joinery, the proportions, the finish—gets the time it deserves. The result is work that feels considered in a way that fast work rarely does.",
      },
      {
        type: "heading",
        text: "Back to the screen",
      },
      {
        type: "paragraph",
        text: "I still spend most of my working hours designing digital products. But my woodworking practice has changed how I approach that work. I'm more patient, more willing to think before acting, more attentive to the details that distinguish good work from great work.",
      },
      {
        type: "paragraph",
        text: "The digital and physical crafts inform each other. The discipline of wood makes me a better digital designer, and the speed of digital iteration helps me prototype woodworking ideas before committing to expensive materials. They're different media, but the underlying sensibility—attention, intention, craft—is the same.",
      },
    ],
  },
};

export default function BlogPostPage() {
  const params = useParams();
  const slug = params.slug as string;
  const post = postsData[slug];

  if (!post) {
    return (
      <div className="pt-32 pb-24">
        <div className="max-w-3xl mx-auto px-6 lg:px-8 text-center">
          <h1 className="text-2xl font-medium">Post not found</h1>
          <p className="mt-4 text-muted">
            This article doesn&apos;t exist or has been moved.
          </p>
          <Link
            href="/blog"
            className="mt-8 inline-flex items-center text-sm font-medium underline-animated"
          >
            ← Back to blog
          </Link>
        </div>
      </div>
    );
  }

  return (
    <article className="pt-32 pb-24">
      <div className="max-w-3xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <FadeIn>
          <Link
            href="/blog"
            className="inline-flex items-center text-sm text-muted hover:text-foreground transition-colors mb-8"
          >
            ← Back to blog
          </Link>
        </FadeIn>

        <FadeIn delay={0.1}>
          <header className="mb-16">
            <p className="text-sm text-muted uppercase tracking-wide mb-4">
              {post.category}
            </p>
            <h1 className="text-4xl md:text-5xl font-medium tracking-tight leading-tight">
              {post.title}
            </h1>
            <p className="mt-6 text-xl text-muted">
              {post.excerpt}
            </p>
            <div className="mt-8 flex items-center gap-4 text-sm text-muted">
              <span>{post.date}</span>
              <span className="w-1 h-1 rounded-full bg-muted" />
              <span>{post.readTime}</span>
            </div>
          </header>
        </FadeIn>

        {/* Content */}
        <FadeInUp>
          <div className="prose-content">
            {post.content.map((block, index) => {
              switch (block.type) {
                case "heading":
                  return (
                    <h2 key={index} className="text-2xl font-medium mt-12 mb-6">
                      {block.text as string}
                    </h2>
                  );
                case "paragraph":
                  return (
                    <p key={index} className="text-muted leading-relaxed mb-6">
                      {block.text as string}
                    </p>
                  );
                case "list":
                  return (
                    <ul key={index} className="my-6 space-y-3">
                      {(block.text as string[]).map((item, i) => (
                        <li key={i} className="flex gap-3 text-muted">
                          <span className="text-foreground">•</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  );
                case "quote":
                  return (
                    <blockquote
                      key={index}
                      className="my-8 pl-6 border-l-2 border-border text-lg italic text-muted"
                    >
                      {block.text as string}
                    </blockquote>
                  );
                default:
                  return null;
              }
            })}
          </div>
        </FadeInUp>

        {/* Footer */}
        <FadeInUp>
          <footer className="mt-16 pt-8 border-t border-border">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
              <div>
                <p className="text-sm text-muted mb-2">Written by</p>
                <p className="font-medium">Nathan Bilbao</p>
              </div>
              <div className="flex gap-4">
                <a
                  href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(post.title)}&url=${encodeURIComponent(`https://nathanbilbao.com/blog/${slug}`)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-muted hover:text-foreground transition-colors"
                >
                  Share on Twitter
                </a>
                <a
                  href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(`https://nathanbilbao.com/blog/${slug}`)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-muted hover:text-foreground transition-colors"
                >
                  Share on LinkedIn
                </a>
              </div>
            </div>
          </footer>
        </FadeInUp>

        {/* Navigation */}
        <FadeInUp>
          <div className="mt-12 pt-8 border-t border-border">
            <Link
              href="/blog"
              className="inline-flex items-center text-sm font-medium underline-animated"
            >
              ← View all posts
            </Link>
          </div>
        </FadeInUp>
      </div>
    </article>
  );
}
