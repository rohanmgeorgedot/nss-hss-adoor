"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import AOS from "aos";
import "aos/dist/aos.css";

export default function AOSProvider({ children }) {
  const pathname = usePathname();

  useEffect(() => {
    // Initialize AOS after a small delay to ensure content is rendered first
    const timer = setTimeout(() => {
      AOS.init({
        once: true,
        disable: window.innerWidth < 768,
        duration: 600,
        easing: "ease-out",
        offset: 20,
        mirror: false,
        anchorPlacement: "top-bottom",
      });
      
      // Add aos-ready class to enable animations only after AOS is initialized
      document.documentElement.classList.add("aos-ready");
    }, 50);
    
    return () => clearTimeout(timer);
  }, []);

  // Refresh AOS on route changes
  useEffect(() => {
    // Scroll to top on route change
    window.scrollTo({ top: 0, behavior: 'instant' });
    
    // Refresh AOS for new page content
    const timer = setTimeout(() => {
      AOS.refreshHard();
    }, 50);
    
    return () => clearTimeout(timer);
  }, [pathname]);

  return <>{children}</>;
}
