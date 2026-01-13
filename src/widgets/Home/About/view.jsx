"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { FaCheckCircle, FaArrowRight, FaQuoteLeft } from "react-icons/fa";

const highlights = [
  "State-of-the-art Infrastructure",
  "Experienced Faculty Members",
  "Holistic Development Programs",
  "Safe & Nurturing Environment",
];

const About = () => {
  return (
    <section className="relative w-full overflow-hidden bg-white py-16 md:py-24 lg:py-28">
      {/* Background Decoration */}
      <div className="absolute right-0 top-0 h-96 w-96 rounded-full bg-primary/5 blur-3xl" />
      <div className="absolute -left-20 bottom-0 h-64 w-64 rounded-full bg-orange-100/50 blur-2xl" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-5 md:px-8 lg:px-16">
        <div className="grid gap-10 md:grid-cols-5 md:gap-8 lg:grid-cols-2 lg:gap-20 items-center">
          {/* Image Grid */}
          <div 
            className="relative order-2 md:col-span-2 lg:order-1 lg:col-span-1"
            data-aos="fade-right"
            data-aos-duration="1000"
          >
            <div className="relative">
              {/* Main Image */}
              <div className="relative z-10 overflow-hidden rounded-2xl shadow-2xl md:rounded-3xl">
                <Image
                  src="/images/about/1.webp"
                  alt="Students learning at NSS HSS Adoor"
                  width={500}
                  height={600}
                  className="h-[350px] w-full object-cover md:h-[400px] lg:h-[500px]"
                />
              </div>

              {/* Secondary Image - Floating */}
              <div className="absolute -bottom-4 -right-2 z-20 overflow-hidden rounded-lg border-2 border-white shadow-xl sm:-bottom-6 sm:-right-4 sm:rounded-xl sm:border-4 md:rounded-2xl lg:-bottom-8 lg:-right-12">
                <Image
                  src="/images/about/2.webp"
                  alt="School activities"
                  width={200}
                  height={200}
                  className="h-20 w-20 object-cover sm:h-28 sm:w-28 md:h-36 md:w-36 lg:h-48 lg:w-48"
                />
              </div>

              {/* Experience Badge */}
              <div className="absolute -left-2 top-6 z-20 rounded-xl bg-primary p-3 text-white shadow-xl md:-left-4 md:top-8 md:rounded-2xl md:p-4 lg:-left-8 lg:p-5">
                <p className="text-2xl font-bold md:text-3xl lg:text-4xl">90+</p>
                <p className="text-xs font-medium opacity-90 md:text-sm">Years of<br />Excellence</p>
              </div>

              {/* Decorative Elements */}
              <div className="absolute -bottom-4 -left-4 h-full w-full rounded-3xl border-2 border-dashed border-primary/20" />
            </div>
          </div>

          {/* Content */}
          <div className="order-1 md:col-span-3 lg:order-2 lg:col-span-1" data-aos="fade-left" data-aos-duration="1000">
            {/* Section Label */}
            <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-primary/10 px-3 py-1.5 sm:mb-6 sm:gap-3 sm:px-4 sm:py-2">
              <span className="h-1.5 w-1.5 rounded-full bg-primary sm:h-2 sm:w-2" />
              <span className="text-xs font-semibold uppercase tracking-wider text-primary sm:text-sm">
                About Us
              </span>
            </div>

            {/* Heading */}
            <h2 className="mb-4 text-2xl font-bold leading-tight text-gray-900 sm:mb-6 sm:text-3xl md:text-4xl lg:text-5xl">
              A Legacy of{" "}
              <span className="relative">
                <span className="relative z-10 text-primary">Academic Excellence</span>
                <svg className="absolute -bottom-1 left-0 w-full" viewBox="0 0 200 8" fill="none">
                  <path d="M2 6C50 2 150 2 198 6" stroke="#FF7D29" strokeWidth="3" strokeLinecap="round" opacity="0.3"/>
                </svg>
              </span>
            </h2>

            {/* Description */}
            <p className="mb-4 text-sm leading-relaxed text-gray-600 sm:mb-6 sm:text-base md:text-lg">
              Established in 1934, NSS HSS Adoor has been a beacon of 
              quality education in Kerala for over nine decades. Rooted in the values of 
              the Nair Service Society, we blend academic excellence with cultural heritage.
            </p>

            {/* Quote */}
            <div className="mb-6 rounded-xl bg-gray-50 p-4 md:mb-8 md:rounded-2xl md:p-6">
              <FaQuoteLeft className="mb-2 text-xl text-primary/30 md:mb-3 md:text-2xl" />
              <p className="text-sm italic text-gray-700 md:text-base">
                "Our motto 'Learn with Culture, Succeed with Values' reflects our commitment 
                to nurturing not just academically brilliant students, but well-rounded 
                individuals who contribute positively to society."
              </p>
            </div>

            {/* Highlights */}
            <div className="mb-6 grid grid-cols-1 gap-2 sm:grid-cols-2 sm:gap-3 md:mb-8">
              {highlights.map((item, index) => (
                <div 
                  key={index} 
                  className="flex items-center gap-2 rounded-lg bg-white p-2.5 shadow-sm transition-all hover:shadow-md sm:gap-3 sm:p-3"
                >
                  <div className="flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-full bg-green-100 sm:h-8 sm:w-8">
                    <FaCheckCircle className="text-sm text-green-600 sm:text-base" />
                  </div>
                  <span className="text-xs font-medium text-gray-700 sm:text-sm">{item}</span>
                </div>
              ))}
            </div>

            {/* CTA */}
            <Link href="/about">
              <button className="group cursor-pointer inline-flex items-center gap-2 rounded-lg bg-gray-900 px-6 py-3 text-sm font-semibold text-white transition-all hover:bg-gray-800 sm:rounded-xl sm:px-8 sm:py-4 md:text-base">
                Learn More About Us
                <FaArrowRight className="transition-transform group-hover:translate-x-1" />
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
