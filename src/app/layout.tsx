import type { Metadata } from "next";
import { Inter, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";

// Inter carries prose; Plex Mono carries display type and metadata.
const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const plexMono = IBM_Plex_Mono({
  variable: "--font-plex-mono",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
});

// Update NEXT_PUBLIC_SITE_URL once the site is deployed (e.g. to its Vercel URL).
const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";
const title = "Prathamesh Kasar | Linux Systems and Networking";
const description =
  "Linux systems administration and networking. I run a self-hosted multi-service server, troubleshoot systems and networks, and hold the Google Cybersecurity Professional Certificate. Based in Pune, India.";

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
      className={`${inter.variable} ${plexMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-bg text-text">
        {children}
      </body>
    </html>
  );
}
