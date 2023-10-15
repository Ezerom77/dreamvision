import Navbar from "@/components/Navbar";
import "./globals.css";
import type { Metadata } from "next";
import Footer from "@/components/Footer";
import { Analytics } from "@vercel/analytics/react";

export const metadata: Metadata = {
  title: "DreamVisions",
  description: "AI-Powered Virtual Memory Creation",
  other: {
    "theme-color": "#0d1117",
    "color-scheme": "dark only",
    "twitter:card": "summary_large_image",
    "twitter:creator": "@ezerom77",
    "twitter:title": "DreamVisions",
    "twitter:description": "AI-Powered Virtual Memory Creation",
    // "twitter:image": "/images/og.png",
    // "og:image": "/images/og.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-black-100 font-poppins">
        <Navbar />
        {children}
        <Analytics />
        <Footer />
      </body>
    </html>
  );
}
