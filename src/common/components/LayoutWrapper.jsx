"use client";

import { usePathname } from "next/navigation";
import Navbar from "@widgets/Common/Navbar";
import Footer from "@widgets/Common/Footer";
import Bottombar from "@widgets/Common/Bottombar";

export default function LayoutWrapper({ children }) {
  const pathname = usePathname();
  
  // Hide navbar, footer, and bottombar for /app routes
  const isAppRoute = pathname?.startsWith("/app");

  if (isAppRoute) {
    return <>{children}</>;
  }

  return (
    <>
      <Navbar />
      {children}
      <Footer />
      <Bottombar />
    </>
  );
}
