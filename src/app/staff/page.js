import Staff from '@widgets/Staff'
import React from 'react'

export const metadata = {
  title: "Staff Details | NSS HSS Adoor",
  description: "Meet the dedicated staff members of NSS HSS Adoor, including teachers, administrative staff, and support staff who contribute to the school's academic excellence.",
  keywords: "staff details, NSS HSS, Adoor, Kerala, teaching staff, administrative staff, school faculty, NSS Adoor team",
  openGraph: {
    title: "Staff Details | NSS HSS Adoor",
    description: "Get to know the talented staff members at NSS HSS Adoor, from academic instructors to administrative personnel.",
    url: "https://nsshssadoor.in/staff",
    siteName: "NSS HSS Adoor",
    images: [
      {
        url: "https://nsshssadoor.in/images/banner.webp",
        width: 1200,
        height: 630,
        alt: "Staff Members at NSS HSS Adoor"
      }
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Staff Details | NSS HSS Adoor",
    description: "Explore the staff details at NSS HSS Adoor and learn about the team of dedicated professionals working to support student success.",
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
      <Staff/>
    </main>
  )
}
