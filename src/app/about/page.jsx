import About from '@widgets/Common/About'
import React from 'react'

export const metadata = {
  title: "About Us | NSS HSS Adoor",
  description: "Learn more about NSS HSS Adoor, its history, legacy, and educational contributions to the region. Established in 1934, providing quality education with cultural values. School Code: 03030",
  keywords: "NSS HSS, Adoor, Kerala, education, history, academic excellence, NSS, Ezhamkulam, School Code 03030",
  openGraph: {
    title: "About Us | NSS HSS Adoor",
    description: "Discover the history and legacy of NSS HSS Adoor, Kerala. Learn with Culture, Succeed with Values since 1934.",
    url: "https://nsshssadoor.in/about",
    siteName: "NSS HSS Adoor",
    images: [
      {
        url: "https://nsshssadoor.in/images/banner.webp",
        width: 1200,
        height: 630,
        alt: "About NSS HSS Adoor"
      }
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "About Us | NSS HSS Adoor",
    description: "Discover the history and legacy of NSS HSS Adoor, Kerala. Learn with Culture, Succeed with Values since 1934.",
    images: ["https://nsshssadoor.in/images/banner.webp"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function Page() {
  return (
    <main className="overflow-hidden">
      <About />
    </main>
  );
}
