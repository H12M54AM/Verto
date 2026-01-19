/**
 * Verto - Daily Logic Puzzle
 * Copyright (C) 2026 Mutabie Canada Inc.
 * * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU Affero General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 */

import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
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
  title: 'Verto | Daily Hamiltonian Path Logic Puzzle',
  description: 'Solve the daily Verto challenge. Connect nodes sequentially to complete a Hamiltonian path. A minimalist, high-performance logic game by Mutabie Canada Inc.',
  keywords: [
    "Verto",
    "Hamiltonian path",
    "logic puzzle",
    "grid puzzle",
    "one-line puzzle",
    "brain game",
    "daily puzzle",
    "minimalist game",
    "Mutabie Canada Inc.",
    "daily logic game",
    "Next.js puzzle"
  ],
  authors: [{ name: 'Mutabie Canada Inc.' }],
  openGraph: {
    title: 'Verto - One Path. Every Node.',
    description: 'Can you fill the grid? Play the daily Verto logic puzzle.',
    url: 'https://verto.mutabie.ca',
    siteName: 'Verto Puzzle',
    locale: 'en_CA',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Verto Daily Puzzle',
    description: 'The ultimate Hamiltonian path challenge.',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen flex flex-col`}
      >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
