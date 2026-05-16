import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ChatWidget from "@/components/ChatWidget";
import BackToTop from "@/components/BackToTop";
import JsonLd from "@/components/JsonLd";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: "Vortex Global | Smart Logistics, Shipment Tracking & Supply Chain Solutions",
    template: "%s | Vortex Global"
  },
  description: "Vortex Global provides world-class logistics, real-time shipment tracking, and international shipping solutions. Track your cargo, manage supply chains, and optimize global trade with our advanced telemetry platform.",
  keywords: [
    "logistics tracking", 
    "vortex global", 
    "shipment tracking", 
    "global shipping", 
    "package tracker",
    "international logistics",
    "supply chain management",
    "freight forwarding",
    "real-time telemetry",
    "cargo tracking",
    "vortex logistics",
    "smart shipping",
    "global trade optimization",
    "tracking number lookup",
    "enterprise logistics solutions"
  ],
  authors: [{ name: "Vortex Global Support" }],
  creator: "Vortex Global",
  publisher: "Vortex Global Logistics",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Vortex Global | Smart Logistics & Real-Time Tracking",
    description: "Vortex Global provides world-class logistics, real-time shipment tracking, and international shipping solutions worldwide.",
    url: "https://globalvortexlogistics.com",
    siteName: "Vortex Global",
    images: [
      {
        url: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=1200",
        width: 1200,
        height: 630,
        alt: "Vortex Global Logistics - Global Shipping Solutions",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Vortex Global | Smart Logistics & Real-Time Tracking",
    description: "Your trusted partner in global shipping. Reliable, fast, and transparent logistics solutions worldwide.",
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
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-background text-foreground shrink-0`}>
        <JsonLd />
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
