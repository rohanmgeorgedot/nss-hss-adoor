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
          <div className="mb-16 text-center" data-aos="fade-up">
            <h2 className="mb-4 text-3xl font-bold text-white md:text-4xl lg:text-5xl">
              Our Achievements in Numbers
            </h2>
            <p className="mx-auto max-w-2xl text-base text-white/80 md:text-lg">
              A glimpse of our journey and the milestones we have achieved together.
            </p>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 gap-6 md:gap-8 lg:grid-cols-4">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="group text-center"
                data-aos="zoom-in"
                data-aos-delay={index * 100}
              >
                <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-2xl bg-white/10 backdrop-blur-sm transition-all group-hover:bg-white/20 group-hover:scale-110 md:h-24 md:w-24">
                  <stat.icon className="text-3xl text-white md:text-4xl" />
                </div>
                <p className="mb-2 text-4xl font-bold text-white md:text-5xl lg:text-6xl">
                  {stat.value}<span className="text-white/70">{stat.suffix}</span>
                </p>
                <p className="text-base font-medium text-white/80 md:text-lg">
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
