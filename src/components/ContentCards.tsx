"use client";

import Link from "next/link";
import { motion } from "framer-motion";

interface BaseCardProps {
  href: string;
  image?: string;
  gradient?: string;
}

// UX Case Study Card - Wider format for detailed work
interface CaseStudyCardProps extends BaseCardProps {
  title: string;
  company: string;
  year: string;
  category: string;
}

export function CaseStudyCard({
  title,
  company,
  year,
  category,
  href,
  image,
  gradient = "bg-gradient-to-br from-zinc-800 to-zinc-900"
}: CaseStudyCardProps) {
  return (
    <Link href={href} className="block flex-shrink-0 group">
      <motion.div
        whileHover={{ scale: 1.02, y: -4 }}
        transition={{ duration: 0.2 }}
        className="relative w-[400px] aspect-[16/10] rounded-lg overflow-hidden"
      >
        {/* Background */}
        <div className={`absolute inset-0 ${gradient}`} />
        {image && (
          <div
            className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
            style={{ backgroundImage: `url(${image})` }}
          />
        )}

        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

        {/* Content */}
        <div className="absolute inset-0 p-6 flex flex-col justify-end">
          <div className="flex items-center gap-2 text-xs text-white/70 mb-2">
            <span>{company}</span>
            <span className="w-1 h-1 rounded-full bg-white/50" />
            <span>{year}</span>
          </div>
          <h3 className="text-xl font-medium text-white mb-1 line-clamp-2">
            {title}
          </h3>
          <span className="text-sm text-white/60">{category}</span>
        </div>

        {/* Hover border effect */}
        <div className="absolute inset-0 rounded-lg border-2 border-transparent group-hover:border-white/20 transition-colors" />
      </motion.div>
    </Link>
  );
}

// Experiment Card - Square format for creative projects
interface ExperimentCardProps extends BaseCardProps {
  title: string;
  category: string;
  tags?: string[];
}

export function ExperimentCard({
  title,
  category,
  tags = [],
  href,
  image,
  gradient = "bg-gradient-to-br from-violet-600 to-indigo-900"
}: ExperimentCardProps) {
  return (
    <Link href={href} className="block flex-shrink-0 group">
      <motion.div
        whileHover={{ scale: 1.05 }}
        transition={{ duration: 0.2 }}
        className="relative w-[280px] aspect-square rounded-lg overflow-hidden"
      >
        {/* Background */}
        <div className={`absolute inset-0 ${gradient}`} />
        {image && (
          <div
            className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
            style={{ backgroundImage: `url(${image})` }}
          />
        )}

        {/* Animated pattern overlay */}
        <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_50%_50%,_rgba(255,255,255,0.2)_1px,_transparent_1px)] bg-[length:20px_20px]" />

        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />

        {/* Content */}
        <div className="absolute inset-0 p-5 flex flex-col justify-between">
          <span className="self-start px-2 py-1 text-xs font-medium text-white/90 bg-white/10 backdrop-blur-sm rounded">
            {category}
          </span>
          <div>
            <h3 className="text-lg font-medium text-white mb-2">
              {title}
            </h3>
            {tags.length > 0 && (
              <div className="flex flex-wrap gap-1">
                {tags.slice(0, 3).map((tag) => (
                  <span key={tag} className="text-xs text-white/50">
                    {tag}
                  </span>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Play-like indicator */}
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
          <div className="w-14 h-14 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
            <svg className="w-6 h-6 text-white ml-1" fill="currentColor" viewBox="0 0 24 24">
              <path d="M8 5v14l11-7z" />
            </svg>
          </div>
        </div>
      </motion.div>
    </Link>
  );
}

// Gallery Card - For visual work (woodworking, illustration, photography)
interface GalleryCardProps extends BaseCardProps {
  title: string;
  subtitle?: string;
  aspectRatio?: "square" | "portrait" | "landscape";
}

export function GalleryCard({
  title,
  subtitle,
  href,
  image,
  gradient = "bg-gradient-to-br from-amber-700 to-stone-900",
  aspectRatio = "portrait"
}: GalleryCardProps) {
  const aspectClasses = {
    square: "aspect-square w-[240px]",
    portrait: "aspect-[3/4] w-[220px]",
    landscape: "aspect-[4/3] w-[300px]"
  };

  return (
    <Link href={href} className="block flex-shrink-0 group">
      <motion.div
        whileHover={{ scale: 1.03 }}
        transition={{ duration: 0.2 }}
        className={`relative ${aspectClasses[aspectRatio]} rounded-lg overflow-hidden`}
      >
        {/* Background */}
        <div className={`absolute inset-0 ${gradient}`} />
        {image && (
          <div
            className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
            style={{ backgroundImage: `url(${image})` }}
          />
        )}

        {/* Overlay - subtle on hover */}
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors duration-300" />

        {/* Content - appears on hover */}
        <div className="absolute inset-0 p-4 flex flex-col justify-end opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <h3 className="text-base font-medium text-white">
            {title}
          </h3>
          {subtitle && (
            <p className="text-sm text-white/70 mt-1">
              {subtitle}
            </p>
          )}
        </div>

        {/* Corner accent */}
        <div className="absolute top-3 right-3 w-8 h-8 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
          <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
          </svg>
        </div>
      </motion.div>
    </Link>
  );
}

// Blog Post Card
interface BlogCardProps extends BaseCardProps {
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  category: string;
}

export function BlogCard({
  title,
  excerpt,
  date,
  readTime,
  category,
  href,
  image,
  gradient = "bg-gradient-to-br from-slate-700 to-slate-900"
}: BlogCardProps) {
  return (
    <Link href={href} className="block flex-shrink-0 group">
      <motion.div
        whileHover={{ y: -4 }}
        transition={{ duration: 0.2 }}
        className="w-[320px] rounded-lg overflow-hidden bg-card border border-border hover:border-muted transition-colors"
      >
        {/* Image */}
        <div className="relative aspect-[16/9] overflow-hidden">
          <div className={`absolute inset-0 ${gradient}`} />
          {image && (
            <div
              className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
              style={{ backgroundImage: `url(${image})` }}
            />
          )}
          <span className="absolute top-3 left-3 px-2 py-1 text-xs font-medium bg-background/90 backdrop-blur-sm rounded">
            {category}
          </span>
        </div>

        {/* Content */}
        <div className="p-5">
          <h3 className="text-base font-medium mb-2 line-clamp-2 group-hover:text-accent transition-colors">
            {title}
          </h3>
          <p className="text-sm text-muted line-clamp-2 mb-4">
            {excerpt}
          </p>
          <div className="flex items-center gap-2 text-xs text-muted">
            <span>{date}</span>
            <span className="w-1 h-1 rounded-full bg-muted" />
            <span>{readTime}</span>
          </div>
        </div>
      </motion.div>
    </Link>
  );
}

// Featured/Large Card - For highlighting specific items
interface FeaturedCardProps extends BaseCardProps {
  title: string;
  subtitle: string;
  description: string;
  badge?: string;
}

export function FeaturedCard({
  title,
  subtitle,
  description,
  badge,
  href,
  image,
  gradient = "bg-gradient-to-br from-zinc-800 to-zinc-950"
}: FeaturedCardProps) {
  return (
    <Link href={href} className="block flex-shrink-0 group">
      <motion.div
        whileHover={{ scale: 1.01 }}
        transition={{ duration: 0.3 }}
        className="relative w-[600px] aspect-[16/9] rounded-xl overflow-hidden"
      >
        {/* Background */}
        <div className={`absolute inset-0 ${gradient}`} />
        {image && (
          <div
            className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
            style={{ backgroundImage: `url(${image})` }}
          />
        )}

        {/* Overlays */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/30 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />

        {/* Content */}
        <div className="absolute inset-0 p-8 flex flex-col justify-end">
          {badge && (
            <span className="self-start px-3 py-1 text-xs font-medium text-white bg-white/20 backdrop-blur-sm rounded-full mb-4">
              {badge}
            </span>
          )}
          <p className="text-sm text-white/70 mb-2">{subtitle}</p>
          <h3 className="text-2xl md:text-3xl font-medium text-white mb-3">
            {title}
          </h3>
          <p className="text-white/70 max-w-md line-clamp-2">
            {description}
          </p>
        </div>

        {/* Hover border */}
        <div className="absolute inset-0 rounded-xl border-2 border-transparent group-hover:border-white/30 transition-colors" />
      </motion.div>
    </Link>
  );
}
