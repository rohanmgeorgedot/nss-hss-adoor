"use client";

import React from "react";
import Link from "next/link";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaArrowRight } from "react-icons/fa";

const CTA = () => {
  return (
    <section className="relative w-full overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900" />
      
      {/* Pattern Overlay */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      {/* Gradient Orbs */}
      <div className="absolute left-0 top-0 h-96 w-96 rounded-full bg-primary/20 blur-3xl" />
      <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-orange-500/10 blur-3xl" />

      {/* Content */}
      <div className="relative z-10 py-16 md:py-24 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-5 md:px-8 lg:px-16">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
            {/* Left Content */}
            <div data-aos="fade-right">
              <div className="mb-6 inline-flex items-center gap-3 rounded-full border border-primary/30 bg-primary/10 px-4 py-2">
                <span className="h-2 w-2 rounded-full bg-primary animate-pulse" />
                <span className="text-sm font-medium text-white/90">
                  Admissions Open 2026-27
                </span>
              </div>

              <h2 className="mb-6 text-3xl font-bold leading-tight text-white md:text-4xl lg:text-5xl">
                Begin Your Child's Journey to{" "}
                <span className="text-primary">Success</span>
              </h2>

              <p className="mb-8 text-base text-gray-400 md:text-lg">
                Give your child the gift of quality education and a bright future. 
                Join NSS HSS Adoor and be part of a legacy of 
                academic excellence spanning over 90 years.
              </p>
              
              <div className="flex flex-col gap-4 sm:flex-row">
                <Link href="/contact">
                  <button className="group cursor-pointer flex w-full items-center justify-center gap-2 rounded-xl bg-primary px-8 py-4 text-sm font-semibold text-white shadow-lg shadow-primary/25 transition-all hover:bg-primary-600 hover:shadow-xl sm:w-auto md:text-base">
                    Apply Now
                    <FaArrowRight className="transition-transform group-hover:translate-x-1" />
                  </button>
                </Link>
                <Link href="/about">
                  <button className="cursor-pointer flex w-full items-center justify-center gap-2 rounded-xl border border-gray-700 bg-white/5 px-8 py-4 text-sm font-semibold text-white backdrop-blur-sm transition-all hover:bg-white/10 sm:w-auto md:text-base">
                    Learn More
                  </button>
                </Link>
              </div>
            </div>

            {/* Right Content - Contact Card */}
            <div 
              className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-primary to-orange-500 p-6 shadow-2xl md:p-8"
              data-aos="fade-left"
            >
              {/* Background Pattern */}
              <div className="absolute inset-0 opacity-10">
                <div className="absolute inset-0" style={{
                  backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
                }} />
              </div>

              {/* Glow Effect */}
              <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-white/20 blur-3xl" />
              <div className="absolute -bottom-10 -left-10 h-40 w-40 rounded-full bg-orange-300/20 blur-3xl" />

              <div className="relative z-10">
                <h3 className="mb-6 text-xl font-bold text-white md:text-2xl">
                  Get in Touch
                </h3>

                <div className="space-y-5">
                  {/* Phone */}
                  <div className="flex items-start gap-4">
                    <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-white/20 backdrop-blur-sm">
                      <FaPhoneAlt className="text-lg text-white" />
                    </div>
                    <div>
                      <p className="text-xs font-medium uppercase tracking-wider text-white/70">Call Us</p>
                      <a 
                        href="tel:+918281821908" 
                        className="text-base font-semibold text-white hover:underline md:text-lg"
                      >
                        +91 82818 21908
                      </a>
                      <br className="sm:hidden" />
                      <span className="text-white/50 mx-2 hidden sm:inline">|</span>
                      <a 
                        href="tel:+914734220908" 
                        className="text-base font-semibold text-white hover:underline md:text-lg"
                      >
                        04734 220908
                      </a>
                    </div>
                  </div>

                  {/* Email */}
                  <div className="flex items-start gap-4">
                    <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-white/20 backdrop-blur-sm">
                      <FaEnvelope className="text-lg text-white" />
                    </div>
                    <div>
                      <p className="text-xs font-medium uppercase tracking-wider text-white/70">Email Us</p>
                      <a 
                        href="mailto:nsshssadoor@gmail.com" 
                        className="text-base font-semibold text-white hover:underline md:text-lg break-all"
                      >
                        nsshssadoor@gmail.com
                      </a>
                    </div>
                  </div>

                  {/* Address */}
                  <div className="flex items-start gap-4">
                    <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-white/20 backdrop-blur-sm">
                      <FaMapMarkerAlt className="text-lg text-white" />
                    </div>
                    <div>
                      <p className="text-xs font-medium uppercase tracking-wider text-white/70">Visit Us</p>
                      <p className="text-base font-semibold text-white md:text-lg">
                        Vadakadathucavu P.O, Ezhamkulam
                      </p>
                      <p className="text-sm text-white/80">Adoor, Kerala - 691529</p>
                    </div>
                  </div>
                </div>

                {/* Quick Info */}
                <div className="mt-6 grid grid-cols-3 gap-3 rounded-2xl bg-white/10 p-4 backdrop-blur-sm">
                  <div className="text-center">
                    <p className="text-xl font-bold text-white md:text-2xl">03030</p>
                    <p className="text-xs text-white/70">School Code</p>
                  </div>
                  <div className="text-center border-l border-r border-white/20">
                    <p className="text-xl font-bold text-white md:text-2xl">1934</p>
                    <p className="text-xs text-white/70">Established</p>
                  </div>
                  <div className="text-center">
                    <p className="text-xl font-bold text-white md:text-2xl">90+</p>
                    <p className="text-xs text-white/70">Years</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
