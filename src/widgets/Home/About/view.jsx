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
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-20 items-center">
          {/* Image Grid */}
          <div 
            className="relative order-2 lg:order-1"
            data-aos="fade-right"
            data-aos-duration="1000"
          >
            <div className="relative">
              {/* Main Image */}
              <div className="relative z-10 overflow-hidden rounded-3xl shadow-2xl">
                <Image
                  src="/images/about/1.webp"
                  alt="Students learning at NSS HSS Adoor"
                  width={500}
                  height={600}
                  className="h-[400px] w-full object-cover md:h-[500px]"
                />
              </div>

              {/* Secondary Image - Floating */}
              <div className="absolute -bottom-8 -right-8 z-20 hidden overflow-hidden rounded-2xl border-4 border-white shadow-xl md:block lg:-right-12">
                <Image
                  src="/images/about/2.webp"
                  alt="School activities"
                  width={200}
                  height={200}
                  className="h-40 w-40 object-cover lg:h-48 lg:w-48"
                />
              </div>

              {/* Experience Badge */}
              <div className="absolute -left-4 top-8 z-20 rounded-2xl bg-primary p-5 text-white shadow-xl md:-left-8">
                <p className="text-4xl font-bold">90+</p>
                <p className="text-sm font-medium opacity-90">Years of<br />Excellence</p>
              </div>

              {/* Decorative Elements */}
              <div className="absolute -bottom-4 -left-4 h-full w-full rounded-3xl border-2 border-dashed border-primary/20" />
            </div>
          </div>

          {/* Content */}
          <div className="order-1 lg:order-2" data-aos="fade-left" data-aos-duration="1000">
            {/* Section Label */}
            <div className="mb-6 inline-flex items-center gap-3 rounded-full bg-primary/10 px-4 py-2">
              <span className="h-2 w-2 rounded-full bg-primary" />
              <span className="text-sm font-semibold uppercase tracking-wider text-primary">
                About Us
              </span>
            </div>

            {/* Heading */}
            <h2 className="mb-6 text-3xl font-bold leading-tight text-gray-900 md:text-4xl lg:text-5xl">
              A Legacy of{" "}
              <span className="relative">
                <span className="relative z-10 text-primary">Academic Excellence</span>
                <svg className="absolute -bottom-1 left-0 w-full" viewBox="0 0 200 8" fill="none">
                  <path d="M2 6C50 2 150 2 198 6" stroke="#FF7D29" strokeWidth="3" strokeLinecap="round" opacity="0.3"/>
                </svg>
              </span>
            </h2>

            {/* Description */}
            <p className="mb-6 text-base leading-relaxed text-gray-600 md:text-lg">
              Established in 1934, NSS HSS Adoor has been a beacon of 
              quality education in Kerala for over nine decades. Rooted in the values of 
              the Nair Service Society, we blend academic excellence with cultural heritage.
            </p>

            {/* Quote */}
            <div className="mb-8 rounded-2xl bg-gray-50 p-6">
              <FaQuoteLeft className="mb-3 text-2xl text-primary/30" />
              <p className="text-base italic text-gray-700">
                "Our motto 'Learn with Culture, Succeed with Values' reflects our commitment 
                to nurturing not just academically brilliant students, but well-rounded 
                individuals who contribute positively to society."
              </p>
            </div>

            {/* Highlights */}
            <div className="mb-8 grid grid-cols-1 gap-3 sm:grid-cols-2">
              {highlights.map((item, index) => (
                <div 
                  key={index} 
                  className="flex items-center gap-3 rounded-lg bg-white p-3 shadow-sm transition-all hover:shadow-md"
                >
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-green-100">
                    <FaCheckCircle className="text-green-600" />
                  </div>
                  <span className="text-sm font-medium text-gray-700">{item}</span>
                </div>
              ))}
            </div>

            {/* CTA */}
            <Link href="/about">
              <button className="group cursor-pointer inline-flex items-center gap-2 rounded-xl bg-gray-900 px-8 py-4 text-sm font-semibold text-white transition-all hover:bg-gray-800 md:text-base">
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
