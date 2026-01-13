"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { FaArrowRight, FaCamera } from "react-icons/fa";

const galleryImages = [
  "/images/gallery/1.webp",
  "/images/gallery/2.webp",
  "/images/gallery/3.webp",
  "/images/gallery/4.webp",
  "/images/gallery/5.webp",
  "/images/gallery/6.webp",
  "/images/gallery/7.webp",
  "/images/gallery/8.webp",
];

const GallerySection = () => {
  return (
    <section className="relative w-full overflow-hidden bg-white py-16 md:py-24 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-5 md:px-8 lg:px-16">
        {/* Header */}
        <div className="mb-8 flex flex-col items-center justify-between gap-4 md:mb-10 md:flex-row md:gap-6 lg:mb-12" data-aos="fade-up">
          <div className="text-center md:text-left">
            <div className="mb-3 inline-flex items-center gap-2 rounded-full bg-primary/10 px-3 py-1.5 sm:mb-4 sm:gap-3 sm:px-4 sm:py-2">
              <span className="h-1.5 w-1.5 rounded-full bg-primary sm:h-2 sm:w-2" />
              <span className="text-xs font-semibold uppercase tracking-wider text-primary sm:text-sm">
                Gallery
              </span>
            </div>
            <h2 className="text-2xl font-bold text-gray-900 sm:text-3xl md:text-4xl lg:text-5xl">
              Capturing <span className="text-primary">Moments</span>
            </h2>
          </div>
          <Link href="/gallery">
            <button className="group cursor-pointer inline-flex items-center gap-2 rounded-lg bg-gray-900 px-4 py-2.5 text-xs font-semibold text-white transition-all hover:bg-gray-800 sm:rounded-xl sm:px-6 sm:py-3 sm:text-sm">
              View All Photos
              <FaArrowRight className="transition-transform group-hover:translate-x-1" />
            </button>
          </Link>
        </div>

        {/* Gallery Grid - Masonry Style */}
        <div className="grid grid-cols-2 gap-3 md:grid-cols-4 md:gap-4 lg:gap-6">
          {/* Large Left Image */}
          <div 
            className="col-span-2 row-span-2"
            data-aos="fade-up"
          >
            <div className="group relative h-full min-h-[280px] overflow-hidden rounded-2xl md:min-h-[350px] md:rounded-3xl lg:min-h-[400px]">
              <Image
                src={galleryImages[0]}
                alt="Gallery image 1"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
              <div className="absolute bottom-4 left-4 flex items-center gap-2 rounded-full bg-white/20 px-4 py-2 opacity-0 backdrop-blur-sm transition-all group-hover:opacity-100">
                <FaCamera className="text-white" />
                <span className="text-sm font-medium text-white">School Events</span>
              </div>
            </div>
          </div>

          {/* Top Right Images */}
          {galleryImages.slice(1, 3).map((image, index) => (
            <div 
              key={index}
              className="group relative aspect-square overflow-hidden rounded-xl md:rounded-2xl"
              data-aos="fade-up"
              data-aos-delay={(index + 1) * 100}
            >
              <Image
                src={image}
                alt={`Gallery image ${index + 2}`}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/0 transition-all group-hover:bg-black/30" />
            </div>
          ))}

          {/* Bottom Right Images */}
          {galleryImages.slice(3, 5).map((image, index) => (
            <div 
              key={index}
              className="group relative aspect-square overflow-hidden rounded-xl md:rounded-2xl"
              data-aos="fade-up"
              data-aos-delay={(index + 3) * 100}
            >
              <Image
                src={image}
                alt={`Gallery image ${index + 4}`}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/0 transition-all group-hover:bg-black/30" />
            </div>
          ))}

          {/* Bottom Row */}
          {galleryImages.slice(5, 8).map((image, index) => (
            <div 
              key={index}
              className={`group relative overflow-hidden rounded-xl md:rounded-2xl ${index === 0 ? 'col-span-2 aspect-[2/1]' : 'aspect-square'}`}
              data-aos="fade-up"
              data-aos-delay={(index + 5) * 100}
            >
              <Image
                src={image}
                alt={`Gallery image ${index + 6}`}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/0 transition-all group-hover:bg-black/30" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
