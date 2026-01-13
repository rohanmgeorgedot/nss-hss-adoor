"use client";

import React from "react";
import Image from "next/image";
import { FaQuoteLeft } from "react-icons/fa";

const teamMembers = [
  {
    name: "Smt. Resmi P",
    position: "Principal, NSS HSS Adoor",
    image: "/images/principal.webp",
    message: "At NSS HSS Adoor, we believe in nurturing students with strong values and cultural roots while preparing them for a successful future. Our commitment to excellence in education has been unwavering since 1934.",
  },
  {
    name: "Headmistress",
    position: "NSS HSS Adoor",
    image: null,
    message: "We strive to create an environment where every student can discover their potential and grow into responsible citizens who contribute positively to society.",
  },
];

const Team = () => {
  return (
    <section className="relative w-full overflow-hidden bg-gray-50 py-16 md:py-24 lg:py-28">
      {/* Background Decoration */}
      <div className="absolute left-0 top-0 h-96 w-96 rounded-full bg-primary/5 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-5 md:px-8 lg:px-16">
        {/* Section Header */}
        <div className="mb-10 text-center sm:mb-12 md:mb-16" data-aos="fade-up">
          <div className="mb-3 inline-flex items-center gap-2 rounded-full bg-primary/10 px-3 py-1.5 sm:mb-4 sm:gap-3 sm:px-4 sm:py-2">
            <span className="h-1.5 w-1.5 rounded-full bg-primary sm:h-2 sm:w-2" />
            <span className="text-xs font-semibold uppercase tracking-wider text-primary sm:text-sm">
              Leadership
            </span>
          </div>
          <h2 className="mb-3 text-2xl font-bold text-gray-900 sm:mb-4 sm:text-3xl md:text-4xl lg:text-5xl">
            Messages from Our <span className="text-primary">Leaders</span>
          </h2>
          <p className="mx-auto max-w-2xl text-sm text-gray-600 sm:text-base md:text-lg">
            Guidance and vision from our experienced leadership team.
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid gap-6 md:grid-cols-2 md:gap-8">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-2xl bg-white p-5 shadow-lg transition-all hover:shadow-2xl md:rounded-3xl md:p-6 lg:p-8"
              data-aos="fade-up"
              data-aos-delay={index * 150}
            >
              {/* Decorative Background */}
              <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-primary/5 transition-all group-hover:bg-primary/10 md:h-40 md:w-40" />

              <div className="relative flex flex-col items-center gap-4 md:flex-row md:items-start md:gap-5 lg:gap-6">
                {/* Image */}
                <div className="flex-shrink-0">
                  <div className="relative">
                    <div className="absolute -inset-1 rounded-full bg-gradient-to-br from-primary to-orange-400 opacity-20 blur" />
                    <div className="relative h-24 w-24 overflow-hidden rounded-full border-4 border-white shadow-xl sm:h-28 sm:w-28 md:h-32 md:w-32 lg:h-36 lg:w-36">
                      {member.image ? (
                        <Image
                          src={member.image}
                          alt={member.name}
                          fill
                          className="object-cover"
                        />
                      ) : (
                        <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-primary to-orange-400">
                          <span className="text-4xl font-bold text-white md:text-5xl">
                            {member.name.charAt(0)}
                          </span>
                        </div>
                      )}
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1 text-center md:text-left">
                  <FaQuoteLeft className="mx-auto mb-2 text-xl text-primary/20 md:mx-0 md:mb-3 md:text-2xl" />
                  <p className="mb-3 text-xs leading-relaxed text-gray-600 md:mb-4 md:text-sm lg:text-base">
                    "{member.message}"
                  </p>
                  <div>
                    <h3 className="text-base font-bold text-gray-900 md:text-lg lg:text-xl">
                      {member.name}
                    </h3>
                    <p className="text-xs font-medium text-primary md:text-sm">
                      {member.position}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
