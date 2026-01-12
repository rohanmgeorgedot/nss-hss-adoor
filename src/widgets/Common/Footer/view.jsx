"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { 
  FaFacebookF, 
  FaTwitter, 
  FaInstagram, 
  FaYoutube,
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaArrowRight,
  FaHeart,
  FaChevronRight
} from "react-icons/fa";

const quickLinks = [
  { title: "Home", link: "/" },
  { title: "About Us", link: "/about" },
  { title: "Academics", link: "/academics" },
  { title: "Non Academics", link: "/non-academics" },
  { title: "Staff", link: "/staff" },
  { title: "Gallery", link: "/gallery" },
  { title: "Contact", link: "/contact" },
];

const socialLinks = [
  { icon: FaFacebookF, link: "#", label: "Facebook", color: "hover:bg-blue-600" },
  { icon: FaTwitter, link: "#", label: "Twitter", color: "hover:bg-sky-500" },
  { icon: FaInstagram, link: "#", label: "Instagram", color: "hover:bg-pink-600" },
  { icon: FaYoutube, link: "#", label: "YouTube", color: "hover:bg-red-600" },
];

export default function Footer() {
  const pathname = usePathname();

  if (pathname.includes("admin")) {
    return null;
  }

  return (
    <footer className="relative overflow-hidden bg-gray-900">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      {/* Gradient Orbs */}
      <div className="absolute left-0 top-0 h-96 w-96 rounded-full bg-primary/10 blur-3xl" />
      <div className="absolute bottom-0 right-0 h-64 w-64 rounded-full bg-orange-500/5 blur-3xl" />

      {/* Main Footer */}
      <div className="relative z-10 mx-auto max-w-7xl px-5 py-12 md:px-8 md:py-20 lg:px-16">
        <div className="grid gap-10 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
          {/* Brand Column */}
          <div className="sm:col-span-2 lg:col-span-1">
            <Link href="/" className="mb-5 inline-flex items-center gap-3 group">
              <div className="relative">
                <div className="absolute -inset-1 rounded-full bg-primary/20 blur group-hover:bg-primary/30 transition-all" />
                <Image
                  src="/images/logo.webp"
                  alt="NSS HSS Adoor Logo"
                  width={48}
                  height={48}
                  className="relative h-12 w-12 rounded-full object-cover"
                />
              </div>
              <div>
                <p className="text-lg font-bold text-white">NSS HSS Adoor</p>
                <p className="text-xs text-gray-400">Est. 1934 | Code: 03030</p>
              </div>
            </Link>
            
            <p className="mb-5 text-sm leading-relaxed text-gray-400">
              Learn with Culture, Succeed with Values. Nurturing young minds and 
              building future leaders through quality education for over 90 years.
            </p>

            {/* Social Links */}
            <div className="flex gap-2">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.link}
                  aria-label={social.label}
                  className={`flex h-9 w-9 items-center justify-center rounded-lg bg-gray-800 text-gray-400 transition-all hover:text-white ${social.color}`}
                >
                  <social.icon className="text-sm" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="mb-4 text-sm font-bold uppercase tracking-wider text-white">
              Quick Links
            </h3>
            <ul className="grid grid-cols-2 gap-x-4 gap-y-2 sm:grid-cols-1 sm:gap-y-3">
              {quickLinks.map((item, index) => (
                <li key={index}>
                  <Link
                    href={item.link}
                    className="group flex items-center gap-1 text-sm text-gray-400 transition-all hover:text-white"
                  >
                    <FaChevronRight className="text-[10px] text-primary opacity-0 transition-all group-hover:opacity-100 -ml-3 group-hover:ml-0 hidden sm:block" />
                    <span>{item.title}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="mb-4 text-sm font-bold uppercase tracking-wider text-white">
              Contact Us
            </h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-lg bg-gray-800">
                  <FaMapMarkerAlt className="text-xs text-primary" />
                </div>
                <div>
                  <p className="text-xs text-gray-400 leading-relaxed">
                    Vadakadathucavu P.O, Ezhamkulam,
                    Adoor, Kerala - 691529
                  </p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-lg bg-gray-800">
                  <FaPhoneAlt className="text-xs text-primary" />
                </div>
                <div className="flex flex-wrap gap-x-3 gap-y-1">
                  <a href="tel:+918281821908" className="text-xs text-gray-400 hover:text-primary transition-colors">
                    +91 82818 21908
                  </a>
                  <a href="tel:+914734220908" className="text-xs text-gray-400 hover:text-primary transition-colors">
                    04734 220908
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-lg bg-gray-800">
                  <FaEnvelope className="text-xs text-primary" />
                </div>
                <a href="mailto:nsshssadoor@gmail.com" className="text-xs text-gray-400 hover:text-primary transition-colors break-all">
                  nsshssadoor@gmail.com
                </a>
              </li>
            </ul>
          </div>

          {/* Newsletter / School Info */}
          <div>
            <h3 className="mb-4 text-sm font-bold uppercase tracking-wider text-white">
              School Info
            </h3>
            
            <div className="grid grid-cols-2 gap-3 mb-4 sm:grid-cols-1">
              <div className="rounded-lg bg-gray-800/50 p-3">
                <p className="text-[10px] text-gray-500 uppercase tracking-wider mb-0.5">School Code</p>
                <p className="text-base font-bold text-white sm:text-lg">03030</p>
              </div>
              <div className="rounded-lg bg-gray-800/50 p-3">
                <p className="text-[10px] text-gray-500 uppercase tracking-wider mb-0.5">UDISE Code</p>
                <p className="text-sm font-bold text-white sm:text-base">32120100714</p>
              </div>
            </div>

            <Link href="/contact">
              <button className="group cursor-pointer flex w-full items-center justify-center gap-2 rounded-lg bg-primary px-4 py-2.5 text-sm font-semibold text-white transition-all hover:bg-primary-600">
                Contact Us
                <FaArrowRight className="transition-transform group-hover:translate-x-1 text-xs" />
              </button>
            </Link>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="relative z-10 border-t border-gray-800">
        <div className="mx-auto max-w-7xl px-5 py-4 md:px-8 md:py-6 lg:px-16">
          <div className="flex flex-col items-center justify-between gap-3 text-center md:flex-row md:text-left">
            <p className="text-xs text-gray-500 sm:text-sm">
              © {new Date().getFullYear()} NSS HSS Adoor. All rights reserved.
            </p>
            <p className="flex flex-wrap items-center justify-center gap-1 text-xs text-gray-500 sm:text-sm">
              <span className="flex items-center gap-1">
                Developed with <FaHeart className="text-red-500 animate-pulse" size={10} /> by
              </span>
              <a 
                href="https://github.com/rohanmgeorgedot" 
                target="_blank" 
                rel="noopener noreferrer"
                className="font-medium text-primary hover:underline transition-colors"
              >
                Rohan M George
              </a>
              <span className="hidden sm:inline">| CS, 2024–2026</span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
