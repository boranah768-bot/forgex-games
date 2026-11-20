import type { Metadata } from "next";
import Script from "next/script";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

export const metadata: Metadata = {
  title: "FORGEX Games | Play Beyond Limits",
  description:
    "Discover exciting games from FORGEX Games. Explore our collection and download Android games.",
  icons: {
    icon: "/logo.jpeg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <Script
          async
          strategy="beforeInteractive"
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-3045313955408293"
          crossOrigin="anonymous"
        />
      </head>
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  );
}