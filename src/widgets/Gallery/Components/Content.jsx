"use client";

import React, { useState } from "react";
import Image from "next/image";
import { FaTimes, FaChevronLeft, FaChevronRight, FaImages } from "react-icons/fa";

// Generate gallery images array
const galleryImages = Array.from({ length: 24 }, (_, i) => ({
  src: `/images/gallery/${i + 1}.webp`,
  alt: `NSS HSS Adoor Gallery Image ${i + 1}`,
}));

const Gallery = () => {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const openLightbox = (index) => {
    setCurrentIndex(index);
    setLightboxOpen(true);
    document.body.style.overflow = "hidden";
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
    document.body.style.overflow = "auto";
  };

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev === 0 ? galleryImages.length - 1 : prev - 1));
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev === galleryImages.length - 1 ? 0 : prev + 1));
  };

  // Handle keyboard navigation
  React.useEffect(() => {
    const handleKeyDown = (e) => {
      if (!lightboxOpen) return;
      if (e.key === "Escape") closeLightbox();
      if (e.key === "ArrowLeft") goToPrevious();
      if (e.key === "ArrowRight") goToNext();
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [lightboxOpen]);

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative min-h-[50vh] w-full overflow-hidden bg-gray-900 py-20 md:py-32">
        {/* Background with Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-pink-600 via-primary to-rose-600 opacity-90" />
        
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -left-20 top-1/4 h-96 w-96 rounded-full bg-white/10 blur-3xl animate-pulse" />
          <div className="absolute -right-20 bottom-1/4 h-80 w-80 rounded-full bg-white/5 blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
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
              className="mb-6 inline-flex items-center gap-3 rounded-full border border-white/30 bg-white/10 px-5 py-2.5 backdrop-blur-sm"
              data-aos="fade-up"
            >
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-white opacity-75"></span>
                <span className="relative inline-flex h-2 w-2 rounded-full bg-white"></span>
              </span>
              <span className="text-sm font-semibold text-white">
                📸 Memories & Moments
              </span>
            </div>

            <h1 
              className="mb-6 text-4xl font-extrabold leading-tight text-white md:text-5xl lg:text-6xl"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              Photo{" "}
              <span className="relative inline-block">
                <span className="relative z-10">Gallery</span>
                <svg className="absolute -bottom-2 left-0 w-full" viewBox="0 0 200 12" fill="none">
                  <path d="M2 10C50 4 150 4 198 10" stroke="white" strokeWidth="4" strokeLinecap="round" opacity="0.3"/>
                </svg>
              </span>
            </h1>
            <p 
              className="mx-auto max-w-2xl text-base leading-relaxed text-white/90 md:text-lg"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              Capturing moments of learning, growth, and celebration at NSS HSS Adoor
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


      {/* Gallery Grid */}
      <section className="py-12 md:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-5 md:px-8 lg:px-16">
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 lg:gap-4">
            {galleryImages.map((image, index) => (
              <div
                key={index}
                className="group relative aspect-square cursor-pointer overflow-hidden rounded-xl bg-gray-100"
                onClick={() => openLightbox(index)}
                data-aos="fade-up"
                data-aos-delay={(index % 8) * 50}
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                {/* Hover Overlay */}
                <div className="absolute inset-0 flex items-center justify-center bg-black/0 transition-all group-hover:bg-black/40">
                  <div className="scale-0 rounded-full bg-white p-3 transition-transform group-hover:scale-100">
                    <FaImages className="text-lg text-primary" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox Modal */}
      {lightboxOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/95">
          {/* Close Button */}
          <button
            onClick={closeLightbox}
            className="absolute right-4 top-4 z-50 cursor-pointer rounded-full bg-white/10 p-3 text-white transition-all hover:bg-white/20"
          >
            <FaTimes className="text-xl" />
          </button>

          {/* Previous Button */}
          <button
            onClick={goToPrevious}
            className="absolute left-4 top-1/2 z-50 -translate-y-1/2 cursor-pointer rounded-full bg-white/10 p-3 text-white transition-all hover:bg-white/20"
          >
            <FaChevronLeft className="text-xl" />
          </button>

          {/* Next Button */}
          <button
            onClick={goToNext}
            className="absolute right-4 top-1/2 z-50 -translate-y-1/2 cursor-pointer rounded-full bg-white/10 p-3 text-white transition-all hover:bg-white/20"
          >
            <FaChevronRight className="text-xl" />
          </button>

          {/* Image Container */}
          <div className="relative h-[80vh] w-[90vw] max-w-5xl">
            <Image
              src={galleryImages[currentIndex].src}
              alt={galleryImages[currentIndex].alt}
              fill
              className="object-contain"
            />
          </div>

          {/* Image Counter */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 rounded-full bg-white/10 px-4 py-2 text-sm text-white">
            {currentIndex + 1} / {galleryImages.length}
          </div>
        </div>
      )}

      {/* CTA Section */}
      <section className="bg-gray-50 py-12 md:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-5 md:px-8 lg:px-16 text-center">
          <h2 className="mb-4 text-2xl font-bold text-font-primary md:text-3xl">
            Want to See More?
          </h2>
          <p className="mx-auto mb-6 max-w-2xl text-base text-font-secondary">
            Follow us on social media for more updates and photos from school events.
          </p>
          <a href="/contact">
            <button className="cursor-pointer rounded-lg bg-primary px-8 py-4 text-sm font-semibold text-white transition-all hover:bg-primary-700 md:text-base">
              Contact Us
            </button>
          </a>
        </div>
      </section>
    </div>
  );
};

export default Gallery;
