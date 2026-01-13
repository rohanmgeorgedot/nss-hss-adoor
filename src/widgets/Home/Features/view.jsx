"use client";

import React from "react";
import { 
  FaBook, 
  FaFlask, 
  FaLaptop, 
  FaFutbol, 
  FaMusic, 
  FaBus 
} from "react-icons/fa";

const features = [
  {
    icon: FaBook,
    title: "Modern Library",
    description: "Extensive collection of books, journals, and digital resources for comprehensive learning.",
    color: "from-blue-500 to-blue-600",
  },
  {
    icon: FaFlask,
    title: "Science Labs",
    description: "Well-equipped Physics, Chemistry, and Biology laboratories for hands-on experiments.",
    color: "from-green-500 to-green-600",
  },
  {
    icon: FaLaptop,
    title: "Smart Classrooms",
    description: "Technology-enabled classrooms with interactive boards and modern teaching aids.",
    color: "from-purple-500 to-purple-600",
  },
  {
    icon: FaFutbol,
    title: "Sports Facilities",
    description: "Spacious playgrounds and courts for various indoor and outdoor sports activities.",
    color: "from-orange-500 to-orange-600",
  },
  {
    icon: FaMusic,
    title: "Arts & Culture",
    description: "Dedicated spaces for music, dance, and artistic expression to nurture creativity.",
    color: "from-pink-500 to-pink-600",
  },
  {
    icon: FaBus,
    title: "Transport",
    description: "Safe and reliable transportation covering all major routes and localities.",
    color: "from-cyan-500 to-cyan-600",
  },
];

const Features = () => {
  return (
    <section className="relative w-full overflow-hidden bg-white py-16 md:py-24 lg:py-28">
      {/* Background Decoration */}
      <div className="absolute right-0 top-20 h-72 w-72 rounded-full bg-primary/5 blur-3xl" />
      <div className="absolute bottom-20 left-0 h-72 w-72 rounded-full bg-orange-100/50 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-5 md:px-8 lg:px-16">
        {/* Section Header */}
        <div className="mb-10 text-center sm:mb-12 md:mb-16" data-aos="fade-up">
          <div className="mb-3 inline-flex items-center gap-2 rounded-full bg-primary/10 px-3 py-1.5 sm:mb-4 sm:gap-3 sm:px-4 sm:py-2">
            <span className="h-1.5 w-1.5 rounded-full bg-primary sm:h-2 sm:w-2" />
            <span className="text-xs font-semibold uppercase tracking-wider text-primary sm:text-sm">
              Our Facilities
            </span>
          </div>
          <h2 className="mb-3 text-2xl font-bold text-gray-900 sm:mb-4 sm:text-3xl md:text-4xl lg:text-5xl">
            World-Class <span className="text-primary">Infrastructure</span>
          </h2>
          <p className="mx-auto max-w-2xl text-sm text-gray-600 sm:text-base md:text-lg">
            We provide state-of-the-art facilities to ensure the best learning 
            environment for our students.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid gap-4 sm:grid-cols-2 sm:gap-5 md:grid-cols-2 md:gap-6 lg:grid-cols-3">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-xl bg-white p-5 shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl sm:rounded-2xl sm:p-6 md:p-6 lg:p-8"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              {/* Background Gradient on Hover */}
              <div className={`absolute inset-0 bg-gradient-to-br ${feature.color} opacity-0 transition-opacity duration-300 group-hover:opacity-100`} />

              {/* Content */}
              <div className="relative z-10">
                {/* Icon */}
                <div className={`mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br ${feature.color} text-white shadow-lg sm:mb-5 sm:h-14 sm:w-14 md:mb-6 md:h-16 md:w-16 md:rounded-2xl`}>
                  <feature.icon className="text-xl sm:text-2xl" />
                </div>

                {/* Text */}
                <h3 className="mb-2 text-lg font-bold text-gray-900 transition-colors group-hover:text-white sm:mb-3 sm:text-xl">
                  {feature.title}
                </h3>
                <p className="text-xs leading-relaxed text-gray-600 transition-colors group-hover:text-white/90 sm:text-sm md:text-base">
                  {feature.description}
                </p>
              </div>

              {/* Decorative Circle */}
              <div className={`absolute -bottom-10 -right-10 h-24 w-24 rounded-full bg-gradient-to-br ${feature.color} opacity-10 transition-all group-hover:opacity-20 sm:h-32 sm:w-32`} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
