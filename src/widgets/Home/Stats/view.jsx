"use client";

import React from "react";
import { FaUserGraduate, FaChalkboardTeacher, FaTrophy, FaSchool } from "react-icons/fa";

const stats = [
  {
    icon: FaSchool,
    value: "1934",
    label: "Established",
    suffix: "",
  },
  {
    icon: FaUserGraduate,
    value: "1000",
    label: "Students",
    suffix: "+",
  },
  {
    icon: FaChalkboardTeacher,
    value: "50",
    label: "Teachers",
    suffix: "+",
  },
  {
    icon: FaTrophy,
    value: "100",
    label: "Awards",
    suffix: "+",
  },
];

const Stats = () => {
  return (
    <section className="relative w-full overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-fixed"
        style={{ backgroundImage: `url('/images/gallery/9.webp')` }}
      />
      
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/90 to-orange-600/90" />

      {/* Pattern Overlay */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      {/* Content */}
      <div className="relative z-10 py-16 md:py-24 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-5 md:px-8 lg:px-16">
          {/* Header */}
          <div className="mb-10 text-center sm:mb-12 md:mb-16" data-aos="fade-up">
            <h2 className="mb-3 text-2xl font-bold text-white sm:mb-4 sm:text-3xl md:text-4xl lg:text-5xl">
              Our Achievements in Numbers
            </h2>
            <p className="mx-auto max-w-2xl text-sm text-white/80 sm:text-base md:text-lg">
              A glimpse of our journey and the milestones we have achieved together.
            </p>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 gap-4 sm:gap-6 md:grid-cols-4 md:gap-6 lg:gap-8">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="group text-center"
                data-aos="zoom-in"
                data-aos-delay={index * 100}
              >
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-xl bg-white/10 backdrop-blur-sm transition-all group-hover:bg-white/20 group-hover:scale-110 sm:mb-6 sm:h-20 sm:w-20 sm:rounded-2xl md:h-20 md:w-20 lg:h-24 lg:w-24">
                  <stat.icon className="text-2xl text-white sm:text-3xl md:text-3xl lg:text-4xl" />
                </div>
                <p className="mb-1 text-3xl font-bold text-white sm:mb-2 sm:text-4xl md:text-4xl lg:text-6xl">
                  {stat.value}<span className="text-white/70">{stat.suffix}</span>
                </p>
                <p className="text-sm font-medium text-white/80 sm:text-base md:text-base lg:text-lg">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Stats;
