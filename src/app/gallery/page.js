import Gallery from '@widgets/Gallery'
import React from 'react'

export const metadata = {
  title: "Gallery | NSS HSS Adoor",
  description: "Explore the vibrant gallery of NSS HSS Adoor. Discover memorable moments from school events, cultural activities, sports, and much more.",
  keywords: "gallery, NSS HSS, Adoor, Kerala, school events, cultural activities, sports, student life, photo gallery",
  openGraph: {
    title: "Gallery | NSS HSS Adoor",
    description: "View the stunning gallery showcasing the best moments at NSS HSS Adoor. A visual representation of the school's academic, cultural, and sports activities.",
    url: "https://nsshssadoor.in/gallery",
    siteName: "NSS HSS Adoor",
    images: [
      {
        url: "https://nsshssadoor.in/images/banner.webp",
        width: 1200,
        height: 630,
        alt: "Gallery of NSS HSS Adoor"
      }
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Gallery | NSS HSS Adoor",
    description: "Check out the gallery of NSS HSS Adoor and relive the best moments from our events and activities.",
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
      <Gallery />
    </main>
  )
}
