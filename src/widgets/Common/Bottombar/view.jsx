"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FaHome, FaInfoCircle, FaImages, FaPhoneAlt, FaGraduationCap } from "react-icons/fa";

const bottomNavItems = [
  { icon: FaHome, title: "Home", link: "/" },
  { icon: FaInfoCircle, title: "About", link: "/about" },
  { icon: FaGraduationCap, title: "Academics", link: "/academics" },
  { icon: FaImages, title: "Gallery", link: "/gallery" },
  { icon: FaPhoneAlt, title: "Contact", link: "/contact" },
];

export default function Bottombar() {
  const pathname = usePathname();

  if (pathname.includes("admin")) {
    return null;
  }

  return (
    <>
      {/* Mobile Bottom Navigation - Native App Style */}
      <nav className="fixed bottom-0 left-0 right-0 z-40 lg:hidden">
        {/* Glass Background */}
        <div className="absolute inset-0 bg-white/80 backdrop-blur-xl border-t border-gray-200/50 shadow-[0_-8px_32px_rgba(0,0,0,0.12)]" />
        
        {/* Safe Area Background for iOS */}
        <div className="absolute bottom-0 left-0 right-0 h-[env(safe-area-inset-bottom)] bg-white/80" />
        
        {/* Navigation Items */}
        <div className="relative mx-auto max-w-lg px-2">
          <div className="flex items-end justify-around py-1.5 pb-[max(0.5rem,env(safe-area-inset-bottom))]">
            {bottomNavItems.map((item, index) => {
              const isActive = pathname === item.link;
              const Icon = item.icon;
              
              return (
                <Link
                  key={index}
                  href={item.link}
                  className="relative flex flex-col items-center justify-center min-w-[56px] py-1 group active:scale-95 transition-transform"
                >
                  {/* Icon Container */}
                  <div className={`relative flex h-10 w-10 items-center justify-center rounded-xl transition-all duration-300 ${
                    isActive 
                      ? 'bg-gradient-to-br from-primary to-green-500 text-white shadow-md shadow-primary/30 -translate-y-1' 
                      : 'text-gray-400 group-active:bg-gray-100'
                  }`}>
                    <Icon className={`transition-all duration-300 ${isActive ? 'text-base' : 'text-sm'}`} />
                    
                    {/* Glow Effect for Active */}
                    {isActive && (
                      <div className="absolute inset-0 rounded-xl bg-primary/20 blur-md -z-10" />
                    )}
                  </div>
                  
                  {/* Label */}
                  <span className={`mt-0.5 text-[10px] font-medium transition-all duration-300 ${
                    isActive ? 'text-primary font-semibold' : 'text-gray-400'
                  }`}>
                    {item.title}
                  </span>
                </Link>
              );
            })}
          </div>
        </div>
      </nav>
      
      {/* Spacer to prevent content from being hidden - accounts for safe area */}
      <div className="h-20 lg:hidden" />
    </>
  );
}
