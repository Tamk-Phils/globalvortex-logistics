import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ChatWidget from "@/components/ChatWidget";
import BackToTop from "@/components/BackToTop";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: "Les Track | Smart Logistics & Real-Time Tracking",
    template: "%s | Les Track"
  },
  description: "Simple, fast, and reliable shipment tracking. Track your assets across the globe with Les Track.",
  keywords: ["logistics tracking", "les track", "shipment tracking", "global shipping", "package tracker"],
  authors: [{ name: "Les Track Support" }],
  creator: "Les Track",
  publisher: "Les Track Logistics",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://lestrack.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Les Track | Smart Logistics & Real-Time Tracking",
    description: "Your trusted partner in global shipping. Providing reliable, fast, and transparent logistics solutions worldwide.",
    url: "https://lestrack.com",
    siteName: "Les Track",
    images: [
      {
        url: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=1200",
        width: 1200,
        height: 630,
        alt: "Les Track Logistics",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Les Track | Smart Logistics & Real-Time Tracking",
    description: "Your trusted partner in global shipping. Providing reliable, fast, and transparent logistics solutions worldwide.",
    images: ["https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=1200"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  other: {
    "Content-Security-Policy": "upgrade-insecure-requests",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-background text-foreground shrink-0`}>
        <div className="min-h-screen flex flex-col relative overflow-x-hidden">
          {/* Subtle Light Glow Effect */}
          <div className="fixed inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(0,112,243,0.02)_0%,transparent_50%)] pointer-events-none z-0" />
          
          <Header />
          <main className="flex-1 relative z-10">
            {children}
          </main>
          <Footer />
          <ChatWidget />
          <BackToTop />
        </div>
      </body>
    </html>
  );
}
