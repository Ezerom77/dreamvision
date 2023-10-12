import "./globals.css";
import type { Metadata } from "next";

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
      <body className="min-h-screen bg-black-100 font-poppins">{children}</body>
    </html>
  );
}
