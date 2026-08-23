import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  display: "swap",
});

// Update NEXT_PUBLIC_SITE_URL once the site is deployed (e.g. to its Vercel URL).
const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";
const title = "Prathamesh Kasar — Linux Systems Administrator";
const description =
  "Computer Engineering graduate with hands-on Linux system administration experience: self-hosted server infrastructure, network troubleshooting, monitoring, and automation.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title,
  description,
  keywords: [
    "Linux System Administrator",
    "Server Monitoring",
    "Network Administration",
    "IT Support",
    "Self-Hosting",
    "Prathamesh Kasar",
  ],
  authors: [{ name: "Prathamesh Kasar" }],
  openGraph: {
    title,
    description,
    url: siteUrl,
    siteName: "Prathamesh Kasar",
    type: "website",
  },
  twitter: {
    card: "summary",
    title,
    description,
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${jetbrainsMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-bg text-text">
        {children}
      </body>
    </html>
  );
}
