import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Connection Calendar - Remember Everyone. Forget Nothing.",
  description:
    "Record a voice note after every conversation. AI extracts contacts, dates, and follow-ups. Your calendar does the rest. Join the waitlist.",
  keywords: [
    "relationship management",
    "voice notes",
    "AI calendar",
    "smart reminders",
    "personal CRM",
  ],
  openGraph: {
    title: "Connection Calendar - Remember Everyone. Forget Nothing.",
    description:
      "Record a voice note after every conversation. AI extracts contacts, dates, and follow-ups. Your calendar does the rest.",
    type: "website",
    locale: "en_US",
    siteName: "Connection Calendar",
  },
  twitter: {
    card: "summary_large_image",
    title: "Connection Calendar - Remember Everyone. Forget Nothing.",
    description:
      "Record a voice note after every conversation. AI extracts contacts, dates, and follow-ups. Your calendar does the rest.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="antialiased">{children}</body>
    </html>
  );
}
