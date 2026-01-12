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

              {/* Mobile Menu Button */}
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

      {/* Full Screen Mobile Menu */}
      <div
        className={`fixed inset-0 z-50 lg:hidden transition-all duration-500 ${
          isOpen ? "visible" : "invisible"
        }`}
      >
        {/* Background Overlay with Gradient */}
        <div 
          className={`absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-900 to-primary/20 transition-opacity duration-500 ${
            isOpen ? "opacity-100" : "opacity-0"
          }`}
          onClick={() => setIsOpen(false)}
        />
        
        {/* Animated Background Elements */}
        <div className={`absolute inset-0 overflow-hidden transition-opacity duration-700 ${isOpen ? "opacity-100" : "opacity-0"}`}>
          <div className="absolute -left-20 top-1/4 h-64 w-64 rounded-full bg-primary/20 blur-3xl animate-pulse" />
          <div className="absolute -right-20 bottom-1/3 h-80 w-80 rounded-full bg-orange-500/10 blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
        </div>

        {/* Menu Content */}
        <div 
          className={`relative z-10 flex h-full flex-col transition-all duration-500 ${
            isOpen ? "translate-y-0 opacity-100" : "-translate-y-8 opacity-0"
          }`}
        >
          {/* Header */}
          <div className="flex items-center justify-between p-5 pt-6">
            <div className="flex items-center gap-3">
              <div className="relative">
                <div className="absolute -inset-1 rounded-full bg-primary/30 blur" />
                <Image
                  src="/images/logo.webp"
                  alt="NSS HSS Adoor"
                  width={48}
                  height={48}
                  className="relative h-12 w-12 rounded-full object-cover ring-2 ring-white/20"
                />
              </div>
              <div>
                <p className="text-lg font-bold text-white">NSS HSS Adoor</p>
                <p className="text-xs text-gray-400">Est. 1934 | School Code: 03030</p>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-white backdrop-blur-sm transition-all active:scale-95 hover:bg-white/20"
              aria-label="Close menu"
            >
              <HiX className="h-6 w-6" />
            </button>
          </div>

          {/* Nav Items */}
          <div className="flex-1 overflow-y-auto px-5 py-6">
            <nav className="space-y-2">
              {navItems.map((item, index) => {
                const isActive = pathname === item.link;
                const Icon = item.icon;
                return (
                  <Link
                    key={item.title}
                    href={item.link}
                    onClick={() => setIsOpen(false)}
                    className={`group flex items-center gap-4 rounded-2xl px-4 py-4 transition-all duration-300 active:scale-[0.98] ${
                      isActive
                        ? "bg-primary text-white shadow-lg shadow-primary/30"
                        : "text-gray-300 hover:bg-white/10 active:bg-white/5"
                    }`}
                    style={{ 
                      transitionDelay: isOpen ? `${index * 50}ms` : '0ms',
                      transform: isOpen ? 'translateX(0)' : 'translateX(-20px)',
                      opacity: isOpen ? 1 : 0
                    }}
                  >
                    <div className={`flex h-11 w-11 items-center justify-center rounded-xl transition-all ${
                      isActive 
                        ? "bg-white/20" 
                        : "bg-white/5 group-hover:bg-white/10"
                    }`}>
                      <Icon className={`text-lg ${isActive ? "text-white" : "text-primary"}`} />
                    </div>
                    <span className="flex-1 text-base font-semibold">{item.title}</span>
                    <FaChevronRight className={`text-sm transition-transform ${
                      isActive ? "text-white/70" : "text-gray-500 group-hover:translate-x-1"
                    }`} />
                  </Link>
                );
              })}
            </nav>
          </div>

          {/* Footer */}
          <div className="border-t border-white/10 p-5 pb-8">
            {/* Contact Info */}
            <div className="mb-4 grid grid-cols-2 gap-2">
              <a 
                href="tel:+918281821908" 
                className="flex items-center gap-2 rounded-xl bg-white/5 p-2.5 text-gray-300 transition-all active:scale-[0.98] hover:bg-white/10"
              >
                <div className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-lg bg-green-500/20">
                  <FaPhoneAlt className="text-sm text-green-400" />
                </div>
                <div className="min-w-0">
                  <p className="text-[10px] text-gray-500">Call Us</p>
                  <p className="text-xs font-medium text-white">82818 21908</p>
                </div>
              </a>
              <a 
                href="mailto:nsshssadoor@gmail.com" 
                className="flex items-center gap-2 rounded-xl bg-white/5 p-2.5 text-gray-300 transition-all active:scale-[0.98] hover:bg-white/10"
              >
                <div className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-lg bg-blue-500/20">
                  <FaEnvelope className="text-sm text-blue-400" />
                </div>
                <div className="min-w-0">
                  <p className="text-[10px] text-gray-500">Email Us</p>
                  <p className="text-xs font-medium text-white truncate">nsshssadoor</p>
                </div>
              </a>
            </div>
            
            {/* CTA Button */}
            <Link href="/contact" onClick={() => setIsOpen(false)}>
              <button className="w-full cursor-pointer rounded-xl bg-gradient-to-r from-primary to-green-500 py-3.5 text-sm font-bold text-white shadow-lg shadow-primary/30 transition-all active:scale-[0.98] hover:shadow-primary/50">
                Enquire Now
              </button>
            </Link>
          </div>
        </div>
      </div>

      {/* Spacer for fixed navbar */}
      <div className={`${isHomePage ? '' : 'h-16 md:h-18 lg:h-[calc(40px+80px)]'}`} />
    </>
  );
}
