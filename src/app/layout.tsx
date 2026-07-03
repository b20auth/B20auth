import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Providers } from "@/components/providers";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "B20auth — Permission Dashboard for B20 Tokens",
  description:
    "Manage roles, transfer policies, and compliance controls for B20 tokens on Base.",
  openGraph: {
    title: "B20auth",
    description: "Permission dashboard for B20 tokens on Base",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} min-h-screen bg-white font-sans antialiased text-zinc-900`}
      >
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
