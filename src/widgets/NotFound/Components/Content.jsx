"use client";

import React from "react";
import Link from "next/link";
import { FaHome, FaArrowLeft, FaSearch } from "react-icons/fa";

export default function Content() {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative min-h-screen w-full overflow-hidden bg-gray-900 flex items-center justify-center">
        {/* Background with Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-gray-800 via-primary/80 to-orange-600 opacity-90" />
        
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -left-20 top-1/4 h-96 w-96 rounded-full bg-white/10 blur-3xl animate-pulse" />
          <div className="absolute -right-20 bottom-1/4 h-80 w-80 rounded-full bg-white/5 blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-[600px] w-[600px] rounded-full bg-primary/10 blur-3xl" />
        </div>

        {/* Grid Pattern */}
        <div className="absolute inset-0 opacity-[0.03]" style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.1) 1px, transparent 1px)`,
          backgroundSize: '50px 50px'
        }} />

        <div className="relative z-10 mx-auto max-w-3xl px-5 md:px-8 lg:px-16 py-20">
          <div className="text-center">
            {/* 404 Number */}
            <div className="mb-6 relative">
              <h1 className="text-[120px] md:text-[180px] lg:text-[220px] font-black text-white/10 leading-none select-none">
                404
              </h1>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="flex items-center gap-4">
                  <div className="h-16 w-16 md:h-20 md:w-20 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center border border-white/20">
                    <FaSearch className="text-2xl md:text-3xl text-white/80" />
                  </div>
                </div>
              </div>
            </div>

            {/* Badge */}
            <div className="mb-6 inline-flex items-center gap-3 rounded-full border border-white/30 bg-white/10 px-5 py-2.5 backdrop-blur-sm">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-red-400 opacity-75"></span>
                <span className="relative inline-flex h-2 w-2 rounded-full bg-red-400"></span>
              </span>
              <span className="text-sm font-semibold text-white">
                Page Not Found
              </span>
            </div>

            <h2 className="mb-4 text-2xl md:text-3xl lg:text-4xl font-bold text-white">
              Oops! Lost in Space
            </h2>
            
            <p className="mx-auto max-w-lg text-base leading-relaxed text-white/70 md:text-lg mb-10">
              The page you're looking for doesn't exist or has been moved. 
              Don't worry, let's get you back on track!
            </p>

            
            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/">
                <button className="w-full sm:w-auto cursor-pointer flex items-center justify-center gap-3 rounded-2xl bg-white px-8 py-4 text-base font-semibold text-primary shadow-xl transition-all active:scale-[0.98] hover:bg-gray-100 hover:shadow-2xl">
                  <FaHome className="text-lg" />
                  Back to Home
                </button>
              </Link>
              <button 
                onClick={() => window.history.back()}
                className="w-full sm:w-auto cursor-pointer flex items-center justify-center gap-3 rounded-2xl border-2 border-white/30 bg-white/10 backdrop-blur-sm px-8 py-4 text-base font-semibold text-white transition-all active:scale-[0.98] hover:bg-white/20"
              >
                <FaArrowLeft />
                Go Back
              </button>
            </div>

            {/* Quick Links */}
            <div className="mt-12 pt-8 border-t border-white/10">
              <p className="text-sm text-white/50 mb-4">Or try these popular pages:</p>
              <div className="flex flex-wrap justify-center gap-3">
                {[
                  { name: "About", href: "/about" },
                  { name: "Academics", href: "/academics" },
                  { name: "Gallery", href: "/gallery" },
                  { name: "Contact", href: "/contact" },
                ].map((link) => (
                  <Link 
                    key={link.name}
                    href={link.href}
                    className="px-4 py-2 rounded-full bg-white/5 border border-white/10 text-sm text-white/70 hover:bg-white/10 hover:text-white transition-all"
                  >
                    {link.name}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
