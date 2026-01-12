"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { FaCalendarAlt, FaArrowRight } from "react-icons/fa";

const newsItems = [
  {
    title: "Admissions Open 2026-27",
    date: "January 2026",
    category: "Admission",
    image: "/images/gallery/17.webp",
    excerpt: "Admissions are now open for the academic year 2026-27. Apply now for classes from LKG to Plus Two.",
    featured: true,
  },
  {
    title: "Annual Day Celebration",
    date: "Coming Soon",
    category: "Event",
    image: "/images/gallery/16.webp",
    excerpt: "Join us for our grand Annual Day celebration featuring cultural performances, awards ceremony, and more.",
    featured: false,
  },
  {
    title: "NSS Day Celebrations",
    date: "September 24",
    category: "NSS",
    image: "/images/gallery/2.webp",
    excerpt: "NSS Day was celebrated with various community service activities and awareness programs.",
    featured: false,
  },
];

const News = () => {
  return (
    <section className="relative w-full overflow-hidden bg-gray-50 py-16 md:py-24 lg:py-28">
      {/* Background Decoration */}
      <div className="absolute right-0 top-20 h-72 w-72 rounded-full bg-primary/5 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-5 md:px-8 lg:px-16">
        {/* Section Header */}
        <div className="mb-16 text-center" data-aos="fade-up">
          <div className="mb-4 inline-flex items-center gap-3 rounded-full bg-primary/10 px-4 py-2">
            <span className="h-2 w-2 rounded-full bg-primary" />
            <span className="text-sm font-semibold uppercase tracking-wider text-primary">
              Latest Updates
            </span>
          </div>
          <h2 className="mb-4 text-3xl font-bold text-gray-900 md:text-4xl lg:text-5xl">
            News & <span className="text-primary">Events</span>
          </h2>
          <p className="mx-auto max-w-2xl text-base text-gray-600 md:text-lg">
            Stay updated with the latest happenings, announcements, and achievements.
          </p>
        </div>

        {/* News Grid */}
        <div className="grid gap-8 lg:grid-cols-2">
          {/* Featured News */}
          <div
            className="group relative overflow-hidden rounded-3xl bg-white shadow-lg transition-all hover:shadow-2xl"
            data-aos="fade-right"
          >
            <div className="relative h-64 overflow-hidden md:h-80">
              <Image
                src={newsItems[0].image}
                alt={newsItems[0].title}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              
              {/* Category Badge */}
              <div className="absolute left-4 top-4">
                <span className="rounded-full bg-primary px-4 py-1.5 text-xs font-bold text-white shadow-lg">
                  {newsItems[0].category}
                </span>
              </div>

              {/* Content on Image */}
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <div className="mb-3 flex items-center gap-2 text-white/80">
                  <FaCalendarAlt className="text-primary" />
                  <span className="text-sm">{newsItems[0].date}</span>
                </div>
                <h3 className="mb-2 text-2xl font-bold text-white md:text-3xl">
                  {newsItems[0].title}
                </h3>
                <p className="text-sm text-white/80 md:text-base">
                  {newsItems[0].excerpt}
                </p>
              </div>
            </div>
          </div>

          {/* Other News */}
          <div className="flex flex-col gap-6">
            {newsItems.slice(1).map((item, index) => (
              <div
                key={index}
                className="group flex overflow-hidden rounded-2xl bg-white shadow-lg transition-all hover:shadow-xl"
                data-aos="fade-left"
                data-aos-delay={index * 100}
              >
                {/* Image */}
                <div className="relative h-auto w-32 flex-shrink-0 overflow-hidden sm:w-40 md:w-48">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>

                {/* Content */}
                <div className="flex flex-1 flex-col justify-center p-4 md:p-6">
                  <div className="mb-2 flex items-center gap-3">
                    <span className="rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
                      {item.category}
                    </span>
                    <span className="flex items-center gap-1 text-xs text-gray-500">
                      <FaCalendarAlt className="text-primary/60" />
                      {item.date}
                    </span>
                  </div>
                  <h3 className="mb-2 text-lg font-bold text-gray-900 transition-colors group-hover:text-primary md:text-xl">
                    {item.title}
                  </h3>
                  <p className="text-sm text-gray-600 line-clamp-2">
                    {item.excerpt}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default News;
