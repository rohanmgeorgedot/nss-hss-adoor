"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { FaArrowRight, FaCamera } from "react-icons/fa";
import { getGalleryImages } from "@lib/supabase";

// Shuffle array randomly
const shuffleArray = (array) => {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
};

const GallerySection = () => {
  const [galleryImages, setGalleryImages] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetch images from Supabase on mount
  useEffect(() => {
    const fetchImages = async () => {
      try {
        const { data, error } = await getGalleryImages();
        
        if (!error && data && data.length > 0) {
          // Shuffle and take up to 8 random images
          const shuffled = shuffleArray(data);
          setGalleryImages(shuffled.slice(0, 8));
        }
      } catch (err) {
        console.error("Error fetching gallery images:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchImages();
  }, []);

  // Don't render section if no images and not loading
  if (!loading && galleryImages.length === 0) {
    return null;
  }

  // Dynamic grid item classes based on index and total count
  const getGridItemClass = (index, total) => {
    // For very few images, use simple grid
    if (total <= 4) {
      return "aspect-square";
    }
    
    // For 5-8 images, create varied layout
    if (index === 0) {
      return "col-span-2 row-span-2 aspect-square";
    }
    if (total >= 6 && index === 5) {
      return "col-span-2 aspect-[2/1]";
    }
    return "aspect-square";
  };

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

        {/* Gallery Grid */}
        {loading ? (
          <div className="flex items-center justify-center py-20">
            <div className="h-10 w-10 animate-spin rounded-full border-4 border-primary border-t-transparent" />
          </div>
        ) : (
          <div className={`grid gap-3 md:gap-4 lg:gap-5 ${
            galleryImages.length <= 4 
              ? 'grid-cols-2 md:grid-cols-4' 
              : 'grid-cols-2 md:grid-cols-4'
          }`}>
            {galleryImages.map((image, index) => (
              <div
                key={image.name || index}
                className={`group relative overflow-hidden rounded-xl md:rounded-2xl ${getGridItemClass(index, galleryImages.length)}`}
                data-aos="fade-up"
                data-aos-delay={index * 50}
              >
                <Image
                  src={image.src}
                  alt={image.alt || `Gallery image ${index + 1}`}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                  unoptimized
                  sizes="(max-width: 768px) 50vw, 25vw"
                />
                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                
                {/* First image badge */}
                {index === 0 && (
                  <div className="absolute bottom-3 left-3 md:bottom-4 md:left-4 flex items-center gap-2 rounded-full bg-white/20 px-3 py-1.5 md:px-4 md:py-2 opacity-0 backdrop-blur-sm transition-all group-hover:opacity-100">
                    <FaCamera className="text-white text-sm" />
                    <span className="text-xs md:text-sm font-medium text-white">School Events</span>
                  </div>
                )}
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default GallerySection;
