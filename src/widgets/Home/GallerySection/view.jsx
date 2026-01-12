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
        <div className="mb-12 flex flex-col items-center justify-between gap-6 md:flex-row" data-aos="fade-up">
          <div className="text-center md:text-left">
            <div className="mb-4 inline-flex items-center gap-3 rounded-full bg-primary/10 px-4 py-2">
              <span className="h-2 w-2 rounded-full bg-primary" />
              <span className="text-sm font-semibold uppercase tracking-wider text-primary">
                Gallery
              </span>
            </div>
            <h2 className="text-3xl font-bold text-gray-900 md:text-4xl lg:text-5xl">
              Capturing <span className="text-primary">Moments</span>
            </h2>
          </div>
          <Link href="/gallery">
            <button className="group cursor-pointer inline-flex items-center gap-2 rounded-xl bg-gray-900 px-6 py-3 text-sm font-semibold text-white transition-all hover:bg-gray-800">
              View All Photos
              <FaArrowRight className="transition-transform group-hover:translate-x-1" />
            </button>
          </Link>
        </div>

        {/* Gallery Grid - Masonry Style */}
        <div className="grid grid-cols-2 gap-4 md:grid-cols-4 md:gap-6">
          {/* Large Left Image */}
          <div 
            className="col-span-2 row-span-2"
            data-aos="fade-up"
          >
            <div className="group relative h-full min-h-[300px] overflow-hidden rounded-3xl md:min-h-[400px]">
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
              className="group relative aspect-square overflow-hidden rounded-2xl"
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
              className="group relative aspect-square overflow-hidden rounded-2xl"
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
              className={`group relative overflow-hidden rounded-2xl ${index === 0 ? 'col-span-2 aspect-[2/1]' : 'aspect-square'}`}
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
