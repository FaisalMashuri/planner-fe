import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  description:
    "PlannerPro membantu kamu dengan mudah merencanakan tugas harian, mingguan, dan bulanan.",
  keywords:
    "planner, budget planner, finance tracking, finance planner, goal planner, travel planner, task management, daily planner, weekly planner, monthly planner, productivity, schedule",
  openGraph: {
    title: "PlannerPro | Your Ultimate Planning Solution",
    description:
      "PlannerPro membantu kamu merencanakan tugas harian, mingguan, dan bulanan dengan mudah.",
    url: "https://plannerpro.com",
    siteName: "PlannerPro",
    images: [
      {
        url: "https://plannerpro.com/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "PlannerPro Open Graph Image",
      },
    ],
    type: "website",
  },

  // Twitter Card Metadata
  twitter: {
    card: "summary_large_image",
    title: "PlannerPro | Your Ultimate Planning Solution",
    description:
      "PlannerPro helps you organize your daily, weekly, and monthly tasks easily.",
    images: ["https://plannerpro.com/images/twitter-image.jpg"],
  },

  // Tambahan metadata untuk SEO lebih baik
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://plannerpro.com",
    languages: {
      "en-US": "https://plannerpro.com/en",
      "id-ID": "https://plannerpro.com/id",
    },
  },
  icons: {
    icon: [
      { url: "/icon.svg" },
    ],
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
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
