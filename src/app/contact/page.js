import Contact from '@widgets/Contact'
import React from 'react'

export const metadata = {
  title: "Contact Us | NSS HSS Adoor",
  description: "Get in touch with NSS HSS Adoor for inquiries, feedback, and support. We are here to assist you.",
  keywords: "contact, NSS HSS, Adoor, Kerala, school contact, inquiries, feedback, support, education",
  openGraph: {
    title: "Contact Us | NSS HSS Adoor",
    description: "Reach out to NSS HSS Adoor for any inquiries or support. Our team is here to help with your academic needs.",
    url: "https://nsshssadoor.in/contact", // Updated with your domain
    site_name: "NSS HSS Adoor",
    images: [
      {
        url: "https://nsshssadoor.in/images/contact-banner.jpg", // Replace with actual contact page image URL
        width: 1200,
        height: 630,
        alt: "Contact NSS HSS Adoor"
      }
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    site: "@nsshssadoor", // Replace with your actual Twitter handle
    title: "Contact Us | NSS HSS Adoor",
    description: "Contact NSS HSS Adoor for any questions, support, or information related to our programs.",
    image: "https://nsshssadoor.in/images/contact-banner.jpg", // Replace with actual image URL
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function Page() {
  return (
    <main className="overflow-hidden">
      <Contact />
    </main>
  )
}
