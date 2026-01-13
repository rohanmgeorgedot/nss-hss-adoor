"use client";

import React from "react";
import Image from "next/image";
import { FaUserTie, FaChalkboardTeacher, FaGraduationCap, FaAward } from "react-icons/fa";

const higherSecondaryStaff = [
  {
    name: "Smt. Resmi P",
    designation: "Principal",
    image: "/images/staff/resmitr1.webp",
    isPrincipal: true,
  },
  {
    name: "Smt. Swapna R Nair",
    designation: "HSST Senior Sel Gr Mathematics",
    image: "/images/staff/swapnatr.webp",
  },
  {
    name: "Smt. Ushadevi K R",
    designation: "HSST Senior Sel Gr Mathematics",
    image: "/images/staff/ushatr.webp",
  },
  {
    name: "Smt. Sree Subha G",
    designation: "HSST Senior Sel Gr History",
    image: "/images/staff/sreesubhatr.webp",
  },
  {
    name: "Sri. Girish Kumar G",
    designation: "HSST Senior Sel Gr Economics",
    image: "/images/staff/girishsir.webp",
  },
  {
    name: "Smt. Jyothilekshmi I",
    designation: "HSST Senior Sel Gr Political Science",
    image: "/images/staff/jyothitr.webp",
  },
  {
    name: "Smt. Manjusha S",
    designation: "HSST Senior Sel Gr Physics",
    image: "/images/staff/manjushatr.webp",
  },
  {
    name: "Smt. Lali R Pillai",
    designation: "HSST Senior Sel Gr Physics",
    image: "/images/staff/lalitr.webp",
  },
  {
    name: "Smt. Rugma S",
    designation: "HSST Senior Sel Gr Chemistry",
    image: "/images/staff/rugmatr.webp",
  },
  {
    name: "Sri. G Balachandran Nair",
    designation: "HSST Senior Sel Gr English",
    image: "/images/staff/balachandransir.webp",
  },
  {
    name: "Smt. Rekha Radhan G",
    designation: "HSST Senior Sel Gr Commerce",
    image: "/images/staff/rekhatr.webp",
  },
  {
    name: "Smt. Dhanya V P",
    designation: "HSST Senior Sel Gr Geography",
    image: "/images/staff/dhanyatr.webp",
  },
  {
    name: "Smt. Lekha R",
    designation: "HSST Senior Sel Gr English",
    image: "/images/staff/lekhatr.webp",
  },
  {
    name: "Smt. Maya G",
    designation: "HSST Senior Sel Gr Malayalam",
    image: "/images/staff/mayatr.webp",
  },
  {
    name: "Smt. Jayasree K R",
    designation: "HSST Senior HG Hindi",
    image: "/images/staff/jayasreetr.webp",
  },
  {
    name: "Smt. Seena T R",
    designation: "HSST Junior Sel Gr Chemistry",
    image: "/images/staff/seenatr.webp",
  },
  {
    name: "Sri. Ajish M",
    designation: "HSST Junior HG Computer Science",
    image: "/images/staff/ajishsir.webp",
  },
  {
    name: "Smt. Priya S",
    designation: "HSST Junior Sel Gr Zoology",
    image: "/images/staff/priyatr.webp",
  },
  {
    name: "Smt. Manju G",
    designation: "HSST Junior Sel Gr Economics",
    image: "/images/staff/manjutr.webp",
  },
  {
    name: "Sri. Anilaj B",
    designation: "HSST Junior HG Computer Science",
    image: "/images/staff/anilajsir.webp",
  },
  {
    name: "Smt. Remya C R",
    designation: "HSST Junior Commerce",
    image: "/images/staff/remyatr.webp",
  },
  {
    name: "Smt. Jyotsana J S",
    designation: "Lab Assistant HG",
    image: "/images/staff/jyotsanatr.webp",
  },
  {
    name: "Sri. Dileep Kumar S",
    designation: "Lab Assistant",
    image: "/images/staff/dileepsir.webp",
  },
];

export default function Content() {
  const principal = higherSecondaryStaff.find((staff) => staff.isPrincipal);
  const teachers = higherSecondaryStaff.filter((staff) => !staff.isPrincipal);

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative min-h-[50vh] w-full overflow-hidden bg-gray-900 py-20 md:py-32">
        {/* Background with Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-green-600 via-primary to-teal-600 opacity-90" />
        
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
                👨‍🏫 Expert Faculty Team
              </span>
            </div>

            <h1 
              className="mb-6 text-4xl font-extrabold leading-tight text-white md:text-5xl lg:text-6xl"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              Our{" "}
              <span className="relative inline-block">
                <span className="relative z-10">Staff</span>
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
              Meet our dedicated team of educators committed to nurturing young minds
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

      {/* Introduction */}
      <section className="py-12 md:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-5 md:px-8 lg:px-16">
          <div className="mx-auto max-w-3xl text-center" data-aos="fade-up">
            <p className="text-base leading-relaxed text-font-secondary md:text-lg">
              The teaching faculty of NSS HSS Adoor forms a tremendous task force comprising 
              of highly qualified and well-equipped educators. Every year, faculty improvement 
              programmes are arranged to keep teachers abreast of the latest developments in 
              education and technology. Our staff members function as a single unit to fulfill 
              the mission of our school.
            </p>
          </div>
        </div>
      </section>

      {/* Principal Section */}
      <section className="bg-gradient-to-b from-gray-50 to-white py-10 sm:py-12 md:py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-5 md:px-8 lg:px-16">
          <div className="mb-10 text-center" data-aos="fade-up">
            <div className="mb-4 inline-flex items-center justify-center gap-2">
              <span className="h-px w-8 bg-primary" />
              <span className="text-sm font-semibold uppercase tracking-wider text-primary">
                Leadership
              </span>
              <span className="h-px w-8 bg-primary" />
            </div>
            <h2 className="text-3xl font-bold text-font-primary md:text-4xl">
              Our <span className="text-primary">Principal</span>
            </h2>
          </div>

          <div className="flex justify-center" data-aos="fade-up">
            <div className="group relative max-w-md overflow-hidden rounded-3xl bg-white shadow-xl transition-all duration-500 hover:shadow-2xl">
              {/* Decorative gradient border */}
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-primary via-green-400 to-teal-500 opacity-0 transition-opacity duration-500 group-hover:opacity-100" style={{ padding: '3px' }}>
                <div className="h-full w-full rounded-3xl bg-white" />
              </div>
              
              <div className="relative">
                <div className="relative h-72 w-full overflow-hidden sm:h-80">
                  <Image
                    src={principal.image}
                    alt={principal.name}
                    fill
                    className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
                  />
                  {/* Gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  
                  {/* Badge */}
                  <div className="absolute top-4 right-4 flex items-center gap-2 rounded-full bg-white/90 px-3 py-1.5 backdrop-blur-sm">
                    <FaAward className="text-primary" />
                    <span className="text-xs font-semibold text-gray-700">Principal</span>
                  </div>
                </div>
                
                <div className="relative -mt-16 mx-4 mb-4 rounded-2xl bg-white p-6 text-center shadow-lg">
                  <h3 className="mb-2 text-lg sm:text-xl font-bold text-font-primary sm:text-2xl">{principal.name}</h3>
                  <p className="text-primary font-medium">{principal.designation}</p>
                  <div className="mt-4 flex items-center justify-center gap-2 text-sm text-font-secondary">
                    <FaGraduationCap className="text-primary" />
                    <span>NSS HSS Adoor</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Teaching Staff */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-5 md:px-8 lg:px-16">
          <div className="mb-8 sm:mb-10 md:mb-12 text-center" data-aos="fade-up">
            <div className="mb-4 inline-flex items-center justify-center gap-2">
              <span className="h-px w-8 bg-primary" />
              <span className="text-sm font-semibold uppercase tracking-wider text-primary">
                Higher Secondary
              </span>
              <span className="h-px w-8 bg-primary" />
            </div>
            <h2 className="text-3xl font-bold text-font-primary md:text-4xl">
              Teaching <span className="text-primary">Staff</span>
            </h2>
            <p className="mt-4 mx-auto max-w-2xl text-font-secondary">
              Our dedicated team of {teachers.length} educators bringing excellence to education
            </p>
          </div>

          <div className="grid gap-5 grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6">
            {teachers.map((staff, index) => (
              <div
                key={index}
                className="group relative overflow-hidden rounded-xl bg-white shadow-sm transition-all duration-300 hover:shadow-lg hover:-translate-y-1 border border-gray-100"
              >
                {/* Image Container */}
                <div className="relative aspect-[3/4] w-full overflow-hidden bg-gradient-to-b from-gray-100 to-gray-200">
                  <Image
                    src={staff.image}
                    alt={staff.name}
                    fill
                    sizes="(max-width: 640px) 50vw, (max-width: 768px) 33vw, (max-width: 1024px) 25vw, 16vw"
                    className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
                  />
                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                  
                  {/* Name on hover for mobile */}
                  <div className="absolute bottom-0 left-0 right-0 p-3 translate-y-full transition-transform duration-300 group-hover:translate-y-0">
                    <p className="text-xs text-white/90 text-center line-clamp-2">{staff.designation}</p>
                  </div>
                </div>
                
                {/* Content */}
                <div className="p-3 text-center bg-white">
                  <h3 className="text-xs font-semibold text-font-primary transition-colors group-hover:text-primary sm:text-sm leading-tight">
                    {staff.name}
                  </h3>
                  <p className="mt-1 text-[10px] text-font-secondary line-clamp-1 sm:text-xs">{staff.designation}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-gradient-to-r from-primary via-green-600 to-teal-600 py-12 md:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-5 md:px-8 lg:px-16">
          <div className="grid grid-cols-2 gap-6 md:grid-cols-4 md:gap-8">
            <div className="text-center p-4 rounded-2xl bg-white/10 backdrop-blur-sm">
              <FaUserTie className="mx-auto mb-2 sm:mb-3 text-2xl sm:text-3xl text-white md:text-4xl" />
              <p className="text-2xl font-bold text-white md:text-4xl">{higherSecondaryStaff.length}</p>
              <p className="text-[10px] sm:text-xs text-white/80 mt-0.5 sm:mt-1 sm:text-sm">HS Staff</p>
            </div>
            <div className="text-center p-4 rounded-2xl bg-white/10 backdrop-blur-sm">
              <FaChalkboardTeacher className="mx-auto mb-2 sm:mb-3 text-2xl sm:text-3xl text-white md:text-4xl" />
              <p className="text-2xl font-bold text-white md:text-4xl">50+</p>
              <p className="text-[10px] sm:text-xs text-white/80 mt-0.5 sm:mt-1 sm:text-sm">Total Faculty</p>
            </div>
            <div className="text-center p-4 rounded-2xl bg-white/10 backdrop-blur-sm">
              <FaGraduationCap className="mx-auto mb-2 sm:mb-3 text-2xl sm:text-3xl text-white md:text-4xl" />
              <p className="text-2xl font-bold text-white md:text-4xl">15+</p>
              <p className="text-[10px] sm:text-xs text-white/80 mt-0.5 sm:mt-1 sm:text-sm">Senior Teachers</p>
            </div>
            <div className="text-center p-4 rounded-2xl bg-white/10 backdrop-blur-sm">
              <FaAward className="mx-auto mb-2 sm:mb-3 text-2xl sm:text-3xl text-white md:text-4xl" />
              <p className="text-2xl font-bold text-white md:text-4xl">90+</p>
              <p className="text-[10px] sm:text-xs text-white/80 mt-0.5 sm:mt-1 sm:text-sm">Years Excellence</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-10 sm:py-12 md:py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-4 sm:px-5 md:px-8 lg:px-16 text-center">
          <h2 className="mb-3 sm:mb-4 text-xl sm:text-2xl font-bold text-font-primary md:text-3xl">
            Want to Join Our Team?
          </h2>
          <p className="mx-auto mb-6 sm:mb-8 max-w-2xl text-sm sm:text-base text-font-secondary md:text-lg">
            We are always looking for passionate educators to join our family.
          </p>
          <a href="/contact">
            <button className="cursor-pointer rounded-lg bg-primary px-6 py-3 sm:px-8 sm:py-4 text-sm font-semibold text-white transition-all hover:bg-primary-700 md:text-base">
              Contact Us
            </button>
          </a>
        </div>
      </section>
    </div>
  );
}
