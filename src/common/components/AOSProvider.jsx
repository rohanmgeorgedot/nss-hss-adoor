"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import AOS from "aos";
import "aos/dist/aos.css";

export default function AOSProvider({ children }) {
  const pathname = usePathname();

  useEffect(() => {
    AOS.init({
      once: false, // Allow animations to replay on navigation
      disable: false, // Enable on all devices
      duration: 600,
      easing: "ease-out-cubic",
      offset: 30, // Smaller offset for mobile
      throttleDelay: 99,
      mirror: false, // Don't animate out when scrolling past
    });
  }, []);

  // Refresh AOS when route changes
  useEffect(() => {
    // Small delay to ensure DOM is ready after navigation
    const timer = setTimeout(() => {
      AOS.refresh();
    }, 100);

    return () => clearTimeout(timer);
  }, [pathname]);

  return <>{children}</>;
}
