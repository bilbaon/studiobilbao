import type { Metadata } from "next";
import "./globals.css";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: "Nathan Bilbao | UX Designer & Creative",
  description: "Principal Product Designer crafting intuitive experiences for high-impact technology. Exploring the intersection of design, craft, and creativity.",
  keywords: ["UX Design", "Product Design", "Portfolio", "Nathan Bilbao", "Design", "Creative"],
  authors: [{ name: "Nathan Bilbao" }],
  openGraph: {
    title: "Nathan Bilbao | UX Designer & Creative",
    description: "Principal Product Designer crafting intuitive experiences for high-impact technology.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="font-sans antialiased">
        <Navigation />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
