import Academics from '@widgets/Academics'
import React from 'react'

export const metadata = {
  title: "Academics | NSS HSS Adoor",
  description: "Explore the academic offerings at NSS HSS Adoor, including courses, subjects, and educational programs designed to foster student growth and excellence.",
  keywords: "academics, NSS HSS, Adoor, Kerala, education, courses, academic programs, high school education, higher secondary education",
  openGraph: {
    title: "Academics | NSS HSS Adoor",
    description: "Discover the academic programs and courses offered at NSS HSS Adoor, designed to nurture the intellectual and personal growth of students.",
    url: "https://nsshssadoor.in/academics",
    siteName: "NSS HSS Adoor",
    images: [
      {
        url: "https://nsshssadoor.in/images/banner.webp",
        width: 1200,
        height: 630,
        alt: "Academics at NSS HSS Adoor"
      }
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Academics | NSS HSS Adoor",
    description: "Learn about the academic programs offered at NSS HSS Adoor, tailored to provide quality education.",
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
      <Academics />
    </main>
  )
}
