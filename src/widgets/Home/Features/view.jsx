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
        <div className="mb-16 text-center" data-aos="fade-up">
          <div className="mb-4 inline-flex items-center gap-3 rounded-full bg-primary/10 px-4 py-2">
            <span className="h-2 w-2 rounded-full bg-primary" />
            <span className="text-sm font-semibold uppercase tracking-wider text-primary">
              Our Facilities
            </span>
          </div>
          <h2 className="mb-4 text-3xl font-bold text-gray-900 md:text-4xl lg:text-5xl">
            World-Class <span className="text-primary">Infrastructure</span>
          </h2>
          <p className="mx-auto max-w-2xl text-base text-gray-600 md:text-lg">
            We provide state-of-the-art facilities to ensure the best learning 
            environment for our students.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-2xl bg-white p-6 shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl md:p-8"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              {/* Background Gradient on Hover */}
              <div className={`absolute inset-0 bg-gradient-to-br ${feature.color} opacity-0 transition-opacity duration-300 group-hover:opacity-100`} />

              {/* Content */}
              <div className="relative z-10">
                {/* Icon */}
                <div className={`mb-6 inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br ${feature.color} text-white shadow-lg`}>
                  <feature.icon className="text-2xl" />
                </div>

                {/* Text */}
                <h3 className="mb-3 text-xl font-bold text-gray-900 transition-colors group-hover:text-white">
                  {feature.title}
                </h3>
                <p className="text-sm leading-relaxed text-gray-600 transition-colors group-hover:text-white/90 md:text-base">
                  {feature.description}
                </p>
              </div>

              {/* Decorative Circle */}
              <div className={`absolute -bottom-10 -right-10 h-32 w-32 rounded-full bg-gradient-to-br ${feature.color} opacity-10 transition-all group-hover:opacity-20`} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
