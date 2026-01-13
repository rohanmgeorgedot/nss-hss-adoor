import React from "react";
import NonAcademics from "@widgets/NonAcademics";

export const metadata = {
  title: "Non Academics | NSS HSS Adoor",
  description:
    "Explore the non-academic activities at NSS HSS Adoor - NSS, Scouts & Guides, Sports, Arts, Cultural Programs, and more.",
  keywords: "NSS HSS Adoor Non Academics, Sports, Arts, Cultural Activities, NSS Unit, Scouts and Guides, Sasthrolsavam",
  openGraph: {
    title: "Non Academics | NSS HSS Adoor",
    description: "Explore the non-academic activities at NSS HSS Adoor - NSS, Scouts & Guides, Sports, Arts, Cultural Programs, and more.",
    url: "https://nsshssadoor.in/non-academics",
    siteName: "NSS HSS Adoor",
    images: [
      {
        url: "https://nsshssadoor.in/images/banner.webp",
        width: 1200,
        height: 630,
        alt: "Non-Academic Activities at NSS HSS Adoor"
      }
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Non Academics | NSS HSS Adoor",
    description: "Explore the non-academic activities at NSS HSS Adoor - NSS, Scouts & Guides, Sports, Arts, Cultural Programs, and more.",
    images: ["https://nsshssadoor.in/images/banner.webp"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function NonAcademicsPage() {
  return (
    <main className="overflow-hidden">
      <NonAcademics />
    </main>
  );
}
