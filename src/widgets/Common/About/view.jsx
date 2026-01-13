"use client";

import Image from "next/image";
import React from "react";
import { FaCheckCircle, FaHistory, FaGraduationCap, FaUsers, FaTrophy } from "react-icons/fa";

const highlights = [
  "Established in 1934",
  "Affiliated to Kerala State Board",
  "School Code: 03030",
  "UDISE Code: 32120100714",
];

const milestones = [
  {
    year: "1934",
    title: "Foundation",
    description: "School established by the Nair Service Society with a vision to provide quality education.",
  },
  {
    year: "1958",
    title: "High School",
    description: "Upgraded to High School status, expanding educational opportunities for the region.",
  },
  {
    year: "2000",
    title: "Higher Secondary",
    description: "Elevated to Higher Secondary School, offering Plus One and Plus Two courses.",
  },
  {
    year: "Present",
    title: "Continuing Legacy",
    description: "Over 90 years of excellence, nurturing thousands of successful alumni.",
  },
];

const stats = [
  { icon: FaHistory, value: "90+", label: "Years of Excellence" },
  { icon: FaGraduationCap, value: "1000+", label: "Students" },
  { icon: FaUsers, value: "50+", label: "Expert Teachers" },
  { icon: FaTrophy, value: "100+", label: "Achievements" },
];

export default function About() {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative min-h-[40vh] sm:min-h-[45vh] md:min-h-[50vh] w-full overflow-hidden bg-gray-900 py-16 sm:py-20 md:py-28 lg:py-32">
        {/* Background with Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary-600 to-orange-600 opacity-90" />
        
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -left-20 top-1/4 h-64 w-64 sm:h-80 sm:w-80 md:h-96 md:w-96 rounded-full bg-white/10 blur-3xl animate-pulse" />
          <div className="absolute -right-20 bottom-1/4 h-56 w-56 sm:h-64 sm:w-64 md:h-80 md:w-80 rounded-full bg-white/5 blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
        </div>

        {/* Grid Pattern */}
        <div className="absolute inset-0 opacity-[0.03]" style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.1) 1px, transparent 1px)`,
          backgroundSize: '50px 50px'
        }} />

        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-5 md:px-8 lg:px-16">
          <div className="text-center">
            {/* Badge */}
            <div 
              className="mb-4 sm:mb-6 inline-flex items-center gap-2 sm:gap-3 rounded-full border border-white/30 bg-white/10 px-3 py-1.5 sm:px-5 sm:py-2.5 backdrop-blur-sm"
              data-aos="fade-up"
            >
              <span className="relative flex h-1.5 w-1.5 sm:h-2 sm:w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-white opacity-75"></span>
                <span className="relative inline-flex h-1.5 w-1.5 sm:h-2 sm:w-2 rounded-full bg-white"></span>
              </span>
              <span className="text-xs sm:text-sm font-semibold text-white">
                Since 1934 - 90+ Years of Excellence
              </span>
            </div>

            <h1 
              className="mb-4 sm:mb-6 text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-extrabold leading-tight text-white"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              About Our{" "}
              <span className="relative inline-block">
                <span className="relative z-10">School</span>
                <svg className="absolute -bottom-1 sm:-bottom-2 left-0 w-full" viewBox="0 0 200 12" fill="none">
                  <path d="M2 10C50 4 150 4 198 10" stroke="white" strokeWidth="4" strokeLinecap="round" opacity="0.3"/>
                </svg>
              </span>
            </h1>
            <p 
              className="mx-auto max-w-2xl text-sm sm:text-base leading-relaxed text-white/90 md:text-lg"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              Learn with Culture, Succeed with Values - Nurturing young minds since 1934
            </p>
          </div>
        </div>

        {/* Bottom Wave */}
        <div className="absolute bottom-0 left-0 right-0 z-10">
          <svg viewBox="0 0 1440 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
            <path d="M0 100L48 90C96 80 192 60 288 50C384 40 480 40 576 45C672 50 768 60 864 65C960 70 1056 70 1152 65C1248 60 1344 50 1392 45L1440 40V100H1392C1344 100 1248 100 1152 100C1056 100 960 100 864 100C768 100 672 100 576 100C480 100 384 100 288 100C192 100 96 100 48 100H0Z" fill="white"/>
          </svg>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12 sm:py-16 md:py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-5 md:px-8 lg:px-16">
          <div className="grid gap-8 sm:gap-10 md:grid-cols-5 md:gap-8 lg:grid-cols-2 lg:gap-16 items-center">
            {/* Image Grid */}
            <div className="relative md:col-span-2 lg:col-span-1" data-aos="fade-right">
              <div className="grid grid-cols-2 gap-2 sm:gap-3 md:gap-4">
                <div className="space-y-2 sm:space-y-3 md:space-y-4">
                  <div className="overflow-hidden rounded-xl sm:rounded-2xl">
                    <Image
                      src="/images/about/1.webp"
                      alt="NSS HSS Adoor Campus"
                      width={300}
                      height={400}
                      className="h-36 sm:h-44 md:h-56 lg:h-64 w-full object-cover transition-transform duration-500 hover:scale-105"
                    />
                  </div>
                  <div className="overflow-hidden rounded-xl sm:rounded-2xl">
                    <Image
                      src="/images/about/2.webp"
                      alt="School Activities"
                      width={300}
                      height={250}
                      className="h-28 sm:h-32 md:h-40 lg:h-48 w-full object-cover transition-transform duration-500 hover:scale-105"
                    />
                  </div>
                </div>
                <div className="mt-6 sm:mt-8 space-y-2 sm:space-y-3 md:space-y-4">
                  <div className="overflow-hidden rounded-xl sm:rounded-2xl">
                    <Image
                      src="/images/about/3.webp"
                      alt="Students Learning"
                      width={300}
                      height={250}
                      className="h-28 sm:h-32 md:h-40 lg:h-48 w-full object-cover transition-transform duration-500 hover:scale-105"
                    />
                  </div>
                  <div className="overflow-hidden rounded-xl sm:rounded-2xl">
                    <Image
                      src="/images/about/4.webp"
                      alt="Cultural Programs"
                      width={300}
                      height={400}
                      className="h-36 sm:h-44 md:h-56 lg:h-64 w-full object-cover transition-transform duration-500 hover:scale-105"
                    />
                  </div>
                </div>
              </div>

              {/* Experience Badge */}
              <div className="absolute -bottom-4 -right-2 sm:-bottom-6 sm:-right-4 rounded-xl sm:rounded-2xl bg-primary p-3 sm:p-4 md:p-5 lg:p-6 text-white shadow-xl">
                <p className="text-2xl sm:text-3xl md:text-3xl lg:text-4xl font-bold">90+</p>
                <p className="text-[10px] sm:text-xs md:text-sm">
                  Years of
                  <br />
                  Excellence
                </p>
              </div>
            </div>

            {/* Content */}
            <div className="md:col-span-3 lg:col-span-1" data-aos="fade-left">
              <div className="mb-3 sm:mb-4 inline-flex items-center gap-2">
                <span className="h-px w-6 sm:w-8 bg-primary" />
                <span className="text-xs sm:text-sm font-semibold uppercase tracking-wider text-primary">
                  Our Story
                </span>
              </div>

              <h2 className="mb-4 sm:mb-6 text-2xl sm:text-3xl font-bold text-font-primary md:text-3xl lg:text-4xl">
                A Legacy of <span className="text-primary">Academic Excellence</span>
              </h2>

              <p className="mb-3 sm:mb-4 text-sm sm:text-base leading-relaxed text-font-secondary md:text-base lg:text-lg">
                NSS HSS Adoor, situated in the serene Ezhamkulam region, 
                boasts a distinguished legacy that dates back to 1934. Established under the 
                visionary guidance of the Nair Service Society, our institution has been a 
                cornerstone of quality education in Kerala.
              </p>

              <p className="mb-4 sm:mb-6 text-sm sm:text-base leading-relaxed text-font-secondary md:text-base lg:text-lg">
                With the blessings and support of Sri Mannathu Padmanabhan, the founder of NSS, 
                our school has grown from humble beginnings to become one of the most respected 
                educational institutions in the region, producing notable alumni in various fields.
              </p>

              {/* Highlights */}
              <div className="mb-4 sm:mb-6 grid grid-cols-1 gap-2 sm:gap-3 sm:grid-cols-2">
                {highlights.map((item, index) => (
                  <div key={index} className="flex items-center gap-2 sm:gap-3">
                    <FaCheckCircle className="text-primary flex-shrink-0 text-sm sm:text-base" />
                    <span className="text-xs sm:text-sm text-font-secondary md:text-base">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-gray-50 py-12 sm:py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-5 md:px-8 lg:px-16">
          <div className="grid grid-cols-2 gap-4 sm:gap-6 md:grid-cols-4 md:gap-8">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="text-center"
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <div className="mx-auto mb-2 sm:mb-4 flex h-12 w-12 sm:h-14 sm:w-14 md:h-16 md:w-16 items-center justify-center rounded-full bg-primary/10">
                  <stat.icon className="text-lg sm:text-xl md:text-2xl text-primary" />
                </div>
                <p className="text-xl sm:text-2xl font-bold text-font-primary md:text-3xl">{stat.value}</p>
                <p className="text-xs sm:text-sm text-font-secondary">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* History Timeline */}
      <section className="py-12 sm:py-16 md:py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-5 md:px-8 lg:px-16">
          <div className="mb-8 sm:mb-10 md:mb-12 text-center" data-aos="fade-up">
            <div className="mb-3 sm:mb-4 inline-flex items-center justify-center gap-2">
              <span className="h-px w-6 sm:w-8 bg-primary" />
              <span className="text-xs sm:text-sm font-semibold uppercase tracking-wider text-primary">
                Our Journey
              </span>
              <span className="h-px w-6 sm:w-8 bg-primary" />
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-font-primary md:text-4xl">
              Milestones & <span className="text-primary">Achievements</span>
            </h2>
          </div>

          <div className="grid gap-4 sm:gap-6 grid-cols-2 lg:grid-cols-4">
            {milestones.map((milestone, index) => (
              <div
                key={index}
                className="rounded-xl sm:rounded-2xl bg-white p-4 sm:p-5 md:p-6 shadow-sm transition-all hover:shadow-lg"
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <div className="mb-3 sm:mb-4 inline-flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-full bg-primary text-white">
                  <span className="text-xs sm:text-sm font-bold">{milestone.year}</span>
                </div>
                <h3 className="mb-1 sm:mb-2 text-sm sm:text-base md:text-lg font-bold text-font-primary">{milestone.title}</h3>
                <p className="text-xs sm:text-sm text-font-secondary">{milestone.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="bg-primary py-12 sm:py-16 md:py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-5 md:px-8 lg:px-16">
          <div className="grid gap-4 sm:gap-6 md:gap-8 md:grid-cols-2">
            {/* Vision */}
            <div
              className="rounded-xl sm:rounded-2xl bg-white/10 p-5 sm:p-6 backdrop-blur-sm md:p-8"
              data-aos="fade-right"
            >
              <h3 className="mb-3 sm:mb-4 text-xl sm:text-2xl font-bold text-white">Our Vision</h3>
              <p className="text-sm sm:text-base leading-relaxed text-white/90">
                To be a center of excellence in education that nurtures intellectually 
                competent, morally upright, and socially responsible citizens who contribute 
                positively to society while preserving our rich cultural heritage.
              </p>
            </div>

            {/* Mission */}
            <div
              className="rounded-xl sm:rounded-2xl bg-white/10 p-5 sm:p-6 backdrop-blur-sm md:p-8"
              data-aos="fade-left"
            >
              <h3 className="mb-3 sm:mb-4 text-xl sm:text-2xl font-bold text-white">Our Mission</h3>
              <p className="text-sm sm:text-base leading-relaxed text-white/90">
                To provide holistic education that combines academic excellence with 
                character building, fostering creativity, critical thinking, and lifelong 
                learning skills in a nurturing and inclusive environment.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Notable Alumni */}
      <section className="py-12 sm:py-16 md:py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-5 md:px-8 lg:px-16">
          <div className="mb-8 sm:mb-10 md:mb-12 text-center" data-aos="fade-up">
            <div className="mb-3 sm:mb-4 inline-flex items-center justify-center gap-2">
              <span className="h-px w-6 sm:w-8 bg-primary" />
              <span className="text-xs sm:text-sm font-semibold uppercase tracking-wider text-primary">
                Pride of Our School
              </span>
              <span className="h-px w-6 sm:w-8 bg-primary" />
            </div>
            <h2 className="mb-3 sm:mb-4 text-2xl sm:text-3xl font-bold text-font-primary md:text-4xl">
              Notable <span className="text-primary">Alumni</span>
            </h2>
            <p className="mx-auto max-w-2xl text-sm sm:text-base text-font-secondary md:text-lg">
              Our school has produced many distinguished individuals who have made 
              significant contributions to various fields.
            </p>
          </div>

          <div className="rounded-xl sm:rounded-2xl bg-gray-50 p-4 sm:p-6 md:p-8" data-aos="fade-up">
            <p className="text-center text-sm sm:text-base leading-relaxed text-font-secondary md:text-lg">
              Notable alumni include renowned scholars, distinguished authors, and many 
              prominent figures in social, cultural, and educational fields. The legacy 
              of excellence continues as our alumni make their mark across various 
              professions and contribute to the betterment of society.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
