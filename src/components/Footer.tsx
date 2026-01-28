import Link from "next/link";

const footerLinks = {
  work: [
    { href: "/portfolio", label: "UX Portfolio" },
    { href: "/experiments", label: "Experiments" },
  ],
  creative: [
    { href: "/woodworking", label: "Woodworking" },
    { href: "/illustration", label: "Illustration" },
    { href: "/photography", label: "Photography" },
  ],
  connect: [
    { href: "https://linkedin.com/in/nathanbilbao", label: "LinkedIn", external: true },
    { href: "https://twitter.com", label: "Twitter", external: true },
    { href: "mailto:hello@nathanbilbao.com", label: "Email", external: true },
  ],
};

export function Footer() {
  return (
    <footer className="border-t border-border bg-background">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <Link href="/" className="text-lg font-medium tracking-tight">
              Nathan Bilbao
            </Link>
            <p className="mt-4 text-sm text-muted max-w-xs">
              Principal Product Designer crafting intuitive experiences for high-impact technology.
            </p>
          </div>

          {/* Work */}
          <div>
            <h4 className="text-sm font-medium mb-4">Work</h4>
            <ul className="space-y-3">
              {footerLinks.work.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted hover:text-foreground transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Creative */}
          <div>
            <h4 className="text-sm font-medium mb-4">Creative</h4>
            <ul className="space-y-3">
              {footerLinks.creative.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted hover:text-foreground transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h4 className="text-sm font-medium mb-4">Connect</h4>
            <ul className="space-y-3">
              {footerLinks.connect.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    target={link.external ? "_blank" : undefined}
                    rel={link.external ? "noopener noreferrer" : undefined}
                    className="text-sm text-muted hover:text-foreground transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-16 pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted">
            © {new Date().getFullYear()} Nathan Bilbao. All rights reserved.
          </p>
          <p className="text-sm text-muted">
            Designed & built with care
          </p>
        </div>
      </div>
    </footer>
  );
}
