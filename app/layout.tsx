import type { Metadata } from "next";
import { Fraunces, JetBrains_Mono } from "next/font/google";
import { Nav } from "@/components/Nav";
import "./globals.css";

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains",
  weight: ["500"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "David Andrew Furniture — Furniture Services at 20% Flat",
  description: "Send us a space. A costed plan comes back — every supplier, freight line, and customs charge shown, our 20% flat fee on the last line.",
  keywords: ["furniture procurement", "furniture services", "interior design furniture", "furniture sourcing", "commercial furniture", "residential furniture", "furniture from China", "furniture from Foshan"],
  authors: [{ name: "David Andrew Furniture" }],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://davidandrewfurniture.com",
    siteName: "David Andrew Furniture",
    title: "David Andrew Furniture — Furniture Services at 20% Flat",
    description: "Send us a space. A costed plan comes back — every supplier, freight line, and customs charge shown, our 20% flat fee on the last line.",
  },
  twitter: {
    card: "summary_large_image",
    title: "David Andrew Furniture — Furniture Services at 20% Flat",
    description: "Send us a space. A costed plan comes back — every supplier, freight line, and customs charge shown, our 20% flat fee on the last line.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${fraunces.variable} ${jetbrainsMono.variable}`}>
      <body>
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-6 focus:py-3 focus:bg-ink focus:text-background"
          style={{ borderRadius: 'var(--radius-interactive)' }}
        >
          Skip to main content
        </a>
        <Nav />
        <div id="main-content">{children}</div>
      </body>
    </html>
  );
}
