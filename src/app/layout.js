import "@styles/globals.css";
import { Analytics } from "@vercel/analytics/react";
import AOSProvider from "@components/AOSProvider";
import LayoutWrapper from "@components/LayoutWrapper";

export const metadata = {
  title: "NSS HSS Adoor - Learn with Culture, Succeed with Values",
  description:
    "Official Website of NSS HSS Adoor - Established in 1934, providing quality education with cultural values in Kerala. School Code: 03030",
  keywords:
    "NSS HSS Adoor, NSS HSS Adoor, School in Adoor, Kerala School, Ezhamkulam, Higher Secondary Education, UDISE 32120100714, School Code 03030",
  manifest: "/manifest.json",
  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: "NSS HSS Adoor",
  },
  formatDetection: {
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://nsshssadoor.in",
    siteName: "NSS HSS Adoor",
    title: "NSS HSS Adoor - Learn with Culture, Succeed with Values",
    description: "Established in 1934, NSS HSS Adoor provides quality education with cultural values. School Code: 03030",
  },
};

export const viewport = {
  themeColor: "#FF7D29",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  viewportFit: "cover",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/images/logo.webp" type="image/webp" />
        <link rel="shortcut icon" href="/images/logo.webp" type="image/webp" />
        <link rel="apple-touch-icon" href="/images/logo.webp" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&family=Plus+Jakarta+Sans:ital,wght@0,200..800;1,200..800&display=swap" rel="stylesheet" />
      </head>
      <body className="antialiased bg-white">
        <Analytics />
        <AOSProvider>
          <LayoutWrapper>{children}</LayoutWrapper>
        </AOSProvider>
      </body>
    </html>
  );
}
