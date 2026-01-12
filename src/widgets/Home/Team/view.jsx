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
        <div className="mb-16 text-center" data-aos="fade-up">
          <div className="mb-4 inline-flex items-center gap-3 rounded-full bg-primary/10 px-4 py-2">
            <span className="h-2 w-2 rounded-full bg-primary" />
            <span className="text-sm font-semibold uppercase tracking-wider text-primary">
              Leadership
            </span>
          </div>
          <h2 className="mb-4 text-3xl font-bold text-gray-900 md:text-4xl lg:text-5xl">
            Messages from Our <span className="text-primary">Leaders</span>
          </h2>
          <p className="mx-auto max-w-2xl text-base text-gray-600 md:text-lg">
            Guidance and vision from our experienced leadership team.
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid gap-8 md:grid-cols-2">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-3xl bg-white p-6 shadow-lg transition-all hover:shadow-2xl md:p-8"
              data-aos="fade-up"
              data-aos-delay={index * 150}
            >
              {/* Decorative Background */}
              <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-primary/5 transition-all group-hover:bg-primary/10" />

              <div className="relative flex flex-col items-center gap-6 md:flex-row md:items-start">
                {/* Image */}
                <div className="flex-shrink-0">
                  <div className="relative">
                    <div className="absolute -inset-1 rounded-full bg-gradient-to-br from-primary to-orange-400 opacity-20 blur" />
                    <div className="relative h-28 w-28 overflow-hidden rounded-full border-4 border-white shadow-xl sm:h-32 sm:w-32 md:h-36 md:w-36">
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
                  <FaQuoteLeft className="mx-auto mb-3 text-2xl text-primary/20 md:mx-0" />
                  <p className="mb-4 text-sm leading-relaxed text-gray-600 md:text-base">
                    "{member.message}"
                  </p>
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 md:text-xl">
                      {member.name}
                    </h3>
                    <p className="text-sm font-medium text-primary">
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
