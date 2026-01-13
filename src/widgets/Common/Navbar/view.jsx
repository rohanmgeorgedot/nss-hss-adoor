"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { HiMenuAlt3, HiX } from "react-icons/hi";
import { FaPhoneAlt, FaEnvelope, FaHome, FaInfoCircle, FaGraduationCap, FaTheaterMasks, FaUsers, FaImages, FaPhoneAlt as FaContact, FaChevronRight, FaMobileAlt } from "react-icons/fa";

const navItems = [
  { title: "Home", link: "/", icon: FaHome },
  { title: "About", link: "/about", icon: FaInfoCircle },
  { title: "Academics", link: "/academics", icon: FaGraduationCap },
  { title: "Non Academics", link: "/non-academics", icon: FaTheaterMasks },
  { title: "Staff", link: "/staff", icon: FaUsers },
  { title: "Gallery", link: "/gallery", icon: FaImages },
  { title: "Contact", link: "/contact", icon: FaContact },
  { title: "Get App", link: "/app", icon: FaMobileAlt },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    // Check initial scroll position
    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  if (pathname.includes("admin")) {
    return null;
  }

  const isHomePage = pathname === "/";

  return (
    <>
      {/* Fixed Navbar Container */}
      <header className="fixed left-0 right-0 top-0 z-50">
        {/* Top Bar - Desktop Only */}
        <div className={`hidden lg:block transition-all duration-300 ${
          scrolled ? 'bg-gray-900' : isHomePage ? 'bg-gray-900/80 backdrop-blur-sm' : 'bg-gray-900'
        }`}>
          <div className="mx-auto max-w-7xl px-5 md:px-8 lg:px-16">
            <div className="flex items-center justify-between py-2 text-sm">
              <div className="flex items-center gap-6">
                <a href="tel:+918281821908" className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors">
                  <FaPhoneAlt className="text-xs text-primary" />
                  <span>+91 82818 21908</span>
                </a>
                <a href="mailto:nsshssadoor@gmail.com" className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors">
                  <FaEnvelope className="text-xs text-primary" />
                  <span>nsshssadoor@gmail.com</span>
                </a>
              </div>
              <div className="text-gray-400">
                <span>School Code: <strong className="text-white">03030</strong></span>
                <span className="mx-3">|</span>
                <span>Est. <strong className="text-white">1934</strong></span>
              </div>
            </div>
          </div>
        </div>

        {/* Main Navbar */}
        <nav className={`transition-all duration-300 ${
          scrolled 
            ? "bg-white shadow-lg" 
            : isHomePage 
              ? "bg-white/10 backdrop-blur-md" 
              : "bg-white shadow-lg"
        }`}>
          <div className="mx-auto max-w-7xl px-4 sm:px-5 md:px-8 lg:px-16">
            <div className="flex h-16 items-center justify-between md:h-18 lg:h-20">
              {/* Logo */}
              <Link href="/" className="flex items-center gap-2 sm:gap-3">
                <Image
                  src="/images/logo.webp"
                  alt="NSS HSS Adoor Logo"
                  width={48}
                  height={48}
                  className="h-10 w-10 rounded-full object-cover sm:h-11 sm:w-11 md:h-12 md:w-12"
                />
                <div className={scrolled || !isHomePage ? "text-gray-900" : "text-white"}>
                  <p className="text-sm font-bold sm:text-base md:text-lg">NSS HSS Adoor</p>
                  <p className={`text-xs hidden sm:block ${scrolled || !isHomePage ? 'text-gray-500' : 'text-gray-300'}`}>
                    Est. 1934
                  </p>
                </div>
              </Link>

              {/* Desktop Navigation */}
              <div className="hidden lg:flex items-center gap-1">
                {navItems.map((item) => (
                  <Link
                    key={item.title}
                    href={item.link}
                    className={`relative px-3 py-2 text-sm font-medium transition-all rounded-lg xl:px-4 ${
                      pathname === item.link
                        ? "text-primary bg-primary/10"
                        : scrolled || !isHomePage
                          ? "text-gray-600 hover:text-primary hover:bg-gray-100"
                          : "text-white/90 hover:text-white hover:bg-white/10"
                    }`}
                  >
                    {item.title}
                  </Link>
                ))}
              </div>

              {/* Desktop CTA */}
              <div className="hidden lg:block">
                <Link href="/contact">
                  <button className="cursor-pointer rounded-xl bg-primary px-5 py-2.5 text-sm font-semibold text-white shadow-lg shadow-primary/25 transition-all hover:bg-primary-600 hover:shadow-primary/40 hover:-translate-y-0.5 xl:px-6">
                    Enquire Now
                  </button>
                </Link>
              </div>

              {/* Mobile & Tablet Menu Button */}
              <button
                onClick={() => setIsOpen(!isOpen)}
                className={`rounded-xl p-2.5 lg:hidden transition-all ${
                  scrolled || !isHomePage
                    ? "bg-gray-100 text-gray-900 hover:bg-gray-200" 
                    : "bg-white/10 text-white hover:bg-white/20"
                }`}
                aria-label="Toggle menu"
              >
                {isOpen ? <HiX className="h-6 w-6" /> : <HiMenuAlt3 className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </nav>
      </header>

      {/* Full Screen Mobile & Tablet Menu */}
      <div
        className={`fixed inset-0 z-50 lg:hidden transition-visibility duration-300 ${
          isOpen ? "visible" : "invisible pointer-events-none delay-300"
        }`}
      >
        {/* Menu Content - Full screen solid background */}
        <div 
          className={`flex h-full flex-col bg-gray-900 transition-all duration-300 ease-out ${
            isOpen ? "opacity-100 translate-x-0" : "opacity-100 -translate-x-full"
          }`}
        >
          {/* Header */}
          <div className="flex items-center justify-between p-4 border-b border-white/10">
            <div className="flex items-center gap-3">
              <Image
                src="/images/logo.webp"
                alt="NSS HSS Adoor"
                width={44}
                height={44}
                className="h-11 w-11 rounded-full object-cover"
              />
              <div>
                <p className="text-base font-bold text-white">NSS HSS Adoor</p>
                <p className="text-xs text-gray-400">Est. 1934</p>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white active:bg-white/20"
              aria-label="Close menu"
            >
              <HiX className="h-5 w-5" />
            </button>
          </div>

          {/* Nav Items */}
          <div className="flex-1 overflow-y-auto py-4">
            <nav className="space-y-1 px-3">
              {navItems.map((item) => {
                const isActive = pathname === item.link;
                const Icon = item.icon;
                return (
                  <Link
                    key={item.title}
                    href={item.link}
                    onClick={() => setIsOpen(false)}
                    className={`flex items-center gap-3 rounded-xl px-4 py-3.5 active:scale-[0.98] ${
                      isActive
                        ? "bg-primary text-white"
                        : "text-gray-300 active:bg-white/10"
                    }`}
                  >
                    <Icon className={`text-lg ${isActive ? "text-white" : "text-primary"}`} />
                    <span className="flex-1 text-sm font-semibold">{item.title}</span>
                    <FaChevronRight className={`text-xs ${isActive ? "text-white/70" : "text-gray-500"}`} />
                  </Link>
                );
              })}
            </nav>
          </div>

          {/* Footer */}
          <div className="border-t border-white/10 p-4 space-y-3">
            {/* Contact Row */}
            <div className="flex gap-2">
              <a 
                href="tel:+918281821908" 
                className="flex-1 flex items-center justify-center gap-2 rounded-lg bg-white/5 p-2.5 text-white active:bg-white/10"
              >
                <FaPhoneAlt className="text-sm text-green-400" />
                <span className="text-xs font-medium">Call</span>
              </a>
              <a 
                href="mailto:nsshssadoor@gmail.com" 
                className="flex-1 flex items-center justify-center gap-2 rounded-lg bg-white/5 p-2.5 text-white active:bg-white/10"
              >
                <FaEnvelope className="text-sm text-blue-400" />
                <span className="text-xs font-medium">Email</span>
              </a>
            </div>
            
            {/* CTA Button */}
            <Link href="/contact" onClick={() => setIsOpen(false)} className="block">
              <button className="w-full cursor-pointer rounded-xl bg-primary py-3 text-sm font-bold text-white active:bg-primary-600">
                Enquire Now
              </button>
            </Link>
          </div>
        </div>
      </div>

      {/* Spacer for fixed navbar */}
      <div className={`${isHomePage ? '' : 'h-16 md:h-18 lg:h-[calc(36px+80px)]'}`} />
    </>
  );
}
