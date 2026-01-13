"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { HiHome, HiInformationCircle, HiPhotograph, HiPhone, HiDeviceMobile } from "react-icons/hi";

const bottomNavItems = [
  { icon: HiHome, title: "Home", link: "/" },
  { icon: HiInformationCircle, title: "About", link: "/about" },
  { icon: HiPhotograph, title: "Gallery", link: "/gallery" },
  { icon: HiPhone, title: "Contact", link: "/contact" },
  { icon: HiDeviceMobile, title: "App", link: "/app" },
];

export default function Bottombar() {
  const pathname = usePathname();

  if (pathname.includes("admin")) {
    return null;
  }

  return (
    <>
      {/* Mobile & Tablet Bottom Navigation */}
      <nav className="fixed bottom-0 left-0 right-0 z-40 lg:hidden bg-white border-t border-gray-200">
        {/* Safe Area Padding for iOS */}
        <div className="pb-[env(safe-area-inset-bottom)]">
          <div className="flex items-center justify-around h-14 max-w-lg mx-auto">
            {bottomNavItems.map((item, index) => {
              const isActive = pathname === item.link;
              const Icon = item.icon;
              
              return (
                <Link
                  key={index}
                  href={item.link}
                  className={`flex flex-col items-center justify-center flex-1 h-full active:opacity-70 ${
                    isActive ? 'text-primary' : 'text-gray-400'
                  }`}
                >
                  <Icon className={isActive ? 'text-[22px]' : 'text-xl'} />
                  <span className={`mt-0.5 text-[10px] ${isActive ? 'font-semibold' : 'font-medium'}`}>
                    {item.title}
                  </span>
                </Link>
              );
            })}
          </div>
        </div>
      </nav>
      
      {/* Spacer */}
      <div className="h-14 lg:hidden" style={{ paddingBottom: 'env(safe-area-inset-bottom)' }} />
    </>
  );
}
