import type { Metadata } from "next";
import Header from "@/components/layout/Header";
import Navigation from "@/components/layout/Navigation";
import CTABar from "@/components/layout/CTABar";
import Footer from "@/components/layout/Footer";
import "@/styles/globals.css";

export const metadata: Metadata = {
  title: "Beaumont Development Guide | Apex Real Estate Services",
  description:
    "Comprehensive Beaumont, CA commercial development guide with market intelligence, entitlement process, zoning data, deal analyzer, and AI assistant. CoStar Q1 2026 data.",
  openGraph: {
    title: "Beaumont Development Guide",
    description:
      "Market intelligence, entitlement roadmap, and AI code assistant for Beaumont commercial real estate.",
    url: "https://beaumont-guide.vercel.app",
    siteName: "Apex Real Estate Services",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="font-sans text-slate-900">
        <Header />
        <Navigation />
        <main className="mx-auto max-w-content px-4 py-6">{children}</main>
        <CTABar />
        <Footer />
      </body>
    </html>
  );
}
