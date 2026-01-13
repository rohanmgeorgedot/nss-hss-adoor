"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { FaArrowRight, FaGraduationCap, FaUsers, FaTrophy, FaPlay } from "react-icons/fa";

const Banner = () => {
  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-gray-900">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <Image
          src="/images/banner.webp"
          alt="NSS HSS Adoor Campus"
          fill
          className="object-cover opacity-30"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-900/95 to-gray-900/80" />
      </div>

      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -left-20 top-1/4 h-96 w-96 rounded-full bg-primary/20 blur-3xl animate-pulse" />
        <div className="absolute -right-20 bottom-1/4 h-80 w-80 rounded-full bg-orange-500/10 blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
        <div className="absolute left-1/2 top-1/2 h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/5 blur-3xl" />
      </div>

      {/* Grid Pattern */}
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: `linear-gradient(rgba(255,255,255,.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.1) 1px, transparent 1px)`,
        backgroundSize: '50px 50px'
      }} />

      {/* Main Content */}
      <div className="relative z-10 mx-auto flex min-h-screen max-w-7xl items-center px-4 py-24 sm:px-5 md:px-8 lg:px-16 lg:py-20">
        <div className="grid w-full gap-10 md:grid-cols-5 md:gap-8 lg:grid-cols-2 lg:gap-16 items-center">
          
          {/* Left Content */}
          <div className="text-center md:col-span-3 md:text-left lg:col-span-1">
            {/* Badge */}
            <div 
              className="mb-6 inline-flex items-center gap-3 rounded-full border border-primary/30 bg-primary/10 px-5 py-2.5 backdrop-blur-sm"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex h-2 w-2 rounded-full bg-primary"></span>
              </span>
              <span className="text-sm font-semibold text-white">
                🎓 Admissions Open 2026-27
              </span>
            </div>

            {/* School Name Tag */}
            <div 
              className="mb-4"
              data-aos="fade-up"
              data-aos-delay="150"
            >
              <span className="inline-block rounded-lg bg-white/5 px-4 py-1 text-xs font-bold uppercase tracking-widest text-primary backdrop-blur-sm">
                NSS HSS Adoor
              </span>
            </div>

            {/* Main Heading */}
            <h1 
              className="mb-6 text-3xl font-extrabold leading-[1.15] text-white sm:text-4xl md:text-5xl lg:text-6xl"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              Learn with{" "}
              <span className="relative inline-block">
                <span className="relative z-10 text-primary">Culture</span>
                <svg className="absolute -bottom-1 left-0 w-full" viewBox="0 0 200 12" fill="none">
                  <path d="M2 10C50 4 150 4 198 10" stroke="#FF7D29" strokeWidth="4" strokeLinecap="round" opacity="0.4"/>
                </svg>
              </span>
              <br />
              Succeed with{" "}
              <span className="text-primary">Values</span>
            </h1>

            {/* Description */}
            <p 
              className="mx-auto mb-8 max-w-xl text-sm leading-relaxed text-gray-400 md:mx-0 md:text-base lg:text-lg"
              data-aos="fade-up"
              data-aos-delay="300"
            >
              For over 90 years, we've been nurturing young minds with quality education 
              rooted in culture, discipline, and values. Join us in shaping a brighter future.
            </p>

            {/* CTA Buttons */}
            <div 
              className="mb-10 flex flex-col items-center gap-4 sm:flex-row md:justify-start"
              data-aos="fade-up"
              data-aos-delay="400"
            >
              <Link href="/about">
                <button className="group cursor-pointer flex w-full items-center justify-center gap-3 rounded-2xl bg-primary px-8 py-4 text-sm font-bold text-white shadow-2xl shadow-primary/30 transition-all hover:bg-primary-600 hover:shadow-primary/40 hover:-translate-y-1 sm:w-auto md:text-base">
                  Explore Our School
                  <FaArrowRight className="transition-transform group-hover:translate-x-1" />
                </button>
              </Link>
              <Link href="/gallery">
                <button className="group cursor-pointer flex w-full items-center justify-center gap-3 rounded-2xl border-2 border-white/20 bg-white/5 px-8 py-4 text-sm font-bold text-white backdrop-blur-sm transition-all hover:bg-white/10 hover:border-white/30 sm:w-auto md:text-base">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-white/10">
                    <FaPlay className="text-xs ml-0.5" />
                  </div>
                  View Gallery
                </button>
              </Link>
            </div>

            {/* Stats Row */}
            <div 
              className="grid grid-cols-3 gap-2 sm:gap-4 lg:gap-6"
              data-aos="fade-up"
              data-aos-delay="500"
            >
              <div className="group rounded-xl sm:rounded-2xl border border-white/10 bg-white/5 p-3 sm:p-4 text-center backdrop-blur-sm transition-all hover:bg-white/10 hover:border-white/20">
                <div className="mx-auto mb-1 sm:mb-2 flex h-8 w-8 sm:h-10 sm:w-10 items-center justify-center rounded-lg sm:rounded-xl bg-primary/20 text-primary transition-colors group-hover:bg-primary group-hover:text-white">
                  <FaGraduationCap className="text-sm sm:text-lg" />
                </div>
                <p className="text-xl font-bold text-white sm:text-2xl md:text-3xl">90<span className="text-primary">+</span></p>
                <p className="text-[10px] text-gray-500 sm:text-xs md:text-sm">Years</p>
              </div>
              <div className="group rounded-xl sm:rounded-2xl border border-white/10 bg-white/5 p-3 sm:p-4 text-center backdrop-blur-sm transition-all hover:bg-white/10 hover:border-white/20">
                <div className="mx-auto mb-1 sm:mb-2 flex h-8 w-8 sm:h-10 sm:w-10 items-center justify-center rounded-lg sm:rounded-xl bg-primary/20 text-primary transition-colors group-hover:bg-primary group-hover:text-white">
                  <FaUsers className="text-sm sm:text-lg" />
                </div>
                <p className="text-xl font-bold text-white sm:text-2xl md:text-3xl">1K<span className="text-primary">+</span></p>
                <p className="text-[10px] text-gray-500 sm:text-xs md:text-sm">Students</p>
              </div>
              <div className="group rounded-xl sm:rounded-2xl border border-white/10 bg-white/5 p-3 sm:p-4 text-center backdrop-blur-sm transition-all hover:bg-white/10 hover:border-white/20">
                <div className="mx-auto mb-1 sm:mb-2 flex h-8 w-8 sm:h-10 sm:w-10 items-center justify-center rounded-lg sm:rounded-xl bg-primary/20 text-primary transition-colors group-hover:bg-primary group-hover:text-white">
                  <FaTrophy className="text-sm sm:text-lg" />
                </div>
                <p className="text-xl font-bold text-white sm:text-2xl md:text-3xl">50<span className="text-primary">+</span></p>
                <p className="text-[10px] text-gray-500 sm:text-xs md:text-sm">Teachers</p>
              </div>
            </div>
          </div>

          {/* Right Content - Image Card */}
          <div 
            className="relative hidden md:col-span-2 md:block lg:col-span-1"
            data-aos="fade-left"
            data-aos-delay="300"
          >
            <div className="relative">
              {/* Main Image Card */}
              <div className="relative z-10 overflow-hidden rounded-2xl border-2 border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-2 shadow-2xl backdrop-blur-sm md:rounded-3xl lg:p-3">
                <div className="overflow-hidden rounded-xl md:rounded-2xl">
                  <Image
                    src="/images/about/1.webp"
                    alt="NSS HSS Adoor Students"
                    width={500}
                    height={600}
                    className="h-[320px] w-full object-cover md:h-[380px] lg:h-[450px]"
                  />
                </div>
                
                {/* Overlay Info Card */}
                <div className="absolute bottom-4 left-4 right-4 rounded-xl bg-white/95 p-3 shadow-xl backdrop-blur-sm md:bottom-6 md:left-6 md:right-6 md:p-4 lg:bottom-8 lg:left-8 lg:right-8 lg:rounded-2xl lg:p-5">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-[10px] font-semibold uppercase tracking-wider text-gray-500 md:text-xs">School Code</p>
                      <p className="text-lg font-bold text-gray-900 md:text-xl lg:text-2xl">03030</p>
                    </div>
                    <div className="h-8 w-px bg-gray-200 md:h-10 lg:h-12" />
                    <div>
                      <p className="text-[10px] font-semibold uppercase tracking-wider text-gray-500 md:text-xs">Since</p>
                      <p className="text-lg font-bold text-gray-900 md:text-xl lg:text-2xl">1934</p>
                    </div>
                    <div className="h-8 w-px bg-gray-200 md:h-10 lg:h-12" />
                    <div>
                      <p className="text-[10px] font-semibold uppercase tracking-wider text-gray-500 md:text-xs">UDISE</p>
                      <p className="text-sm font-bold text-gray-900 md:text-base lg:text-lg">32120100714</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Elements */}
              <div className="absolute -left-4 top-16 hidden rounded-xl border border-white/10 bg-gray-800/90 p-3 shadow-xl backdrop-blur-sm lg:-left-8 lg:top-20 lg:block lg:rounded-2xl lg:p-4">
                <div className="flex items-center gap-2 lg:gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-green-500/20 lg:h-12 lg:w-12 lg:rounded-xl">
                    <span className="text-base lg:text-xl">✓</span>
                  </div>
                  <div>
                    <p className="text-sm font-bold text-white lg:text-base">Kerala Board</p>
                    <p className="text-[10px] text-gray-400 lg:text-xs">State Syllabus</p>
                  </div>
                </div>
              </div>

              <div className="absolute -right-2 top-1/2 hidden rounded-xl border border-white/10 bg-gray-800/90 p-3 shadow-xl backdrop-blur-sm lg:-right-4 lg:block lg:rounded-2xl lg:p-4">
                <div className="flex items-center gap-2 lg:gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/20 lg:h-12 lg:w-12 lg:rounded-xl">
                    <span className="text-base lg:text-xl">🏆</span>
                  </div>
                  <div>
                    <p className="text-sm font-bold text-white lg:text-base">Top School</p>
                    <p className="text-[10px] text-gray-400 lg:text-xs">in Adoor</p>
                  </div>
                </div>
              </div>

              {/* Decorative Elements */}
              <div className="absolute -bottom-6 -left-6 h-24 w-24 rounded-full border-4 border-dashed border-primary/30" />
              <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-primary/10 blur-2xl" />
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Wave */}
      <div className="absolute bottom-0 left-0 right-0 z-10">
        <svg viewBox="0 0 1440 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
          <path d="M0 100L48 90C96 80 192 60 288 50C384 40 480 40 576 45C672 50 768 60 864 65C960 70 1056 70 1152 65C1248 60 1344 50 1392 45L1440 40V100H1392C1344 100 1248 100 1152 100C1056 100 960 100 864 100C768 100 672 100 576 100C480 100 384 100 288 100C192 100 96 100 48 100H0Z" fill="white"/>
        </svg>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-24 left-1/2 z-10 hidden -translate-x-1/2 animate-bounce md:block">
        <div className="flex h-12 w-7 items-start justify-center rounded-full border-2 border-white/30 p-1.5">
          <div className="h-2 w-1 rounded-full bg-white/60 animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default Banner;
