"use client";

import React from "react";
import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";

const ManagerMessage = () => {
  return (
    <section className="relative w-full overflow-hidden bg-gray-50 py-16 md:py-24 lg:py-28">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-white to-gray-100" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-5 md:px-8 lg:px-16">
        {/* Section Header */}
        <div className="mb-16 text-center" data-aos="fade-up">
          <div className="mb-4 inline-flex items-center gap-3 rounded-full bg-primary/10 px-4 py-2">
            <span className="h-2 w-2 rounded-full bg-primary" />
            <span className="text-sm font-semibold uppercase tracking-wider text-primary">
              Leadership
            </span>
          </div>
          <h2 className="text-3xl font-bold text-gray-900 md:text-4xl lg:text-5xl">
            Manager's <span className="text-primary">Message</span>
          </h2>
        </div>

        {/* Content */}
        <div className="mx-auto max-w-4xl">
          <div 
            className="relative rounded-3xl bg-white p-8 shadow-xl md:p-12"
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            {/* Quote Marks */}
            <FaQuoteLeft className="absolute left-6 top-6 text-4xl text-primary/10 md:left-10 md:top-10 md:text-6xl" />
            <FaQuoteRight className="absolute bottom-6 right-6 text-4xl text-primary/10 md:bottom-10 md:right-10 md:text-6xl" />

            <div className="relative flex flex-col items-center gap-8 text-center">
              {/* Avatar */}
              <div className="relative">
                <div className="flex h-32 w-32 items-center justify-center rounded-full bg-gradient-to-br from-primary to-orange-400 shadow-lg md:h-40 md:w-40">
                  <span className="text-5xl font-bold text-white md:text-6xl">A</span>
                </div>
                <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 rounded-full bg-gray-900 px-4 py-1">
                  <p className="text-xs font-medium text-white">Manager</p>
                </div>
              </div>

              {/* Message */}
              <div className="max-w-2xl">
                <p className="mb-8 text-lg leading-relaxed text-gray-600 md:text-xl">
                  NSS HSS Adoor has always stood as a beacon of discipline, culture, and educational 
                  excellence. As the manager, I am proud to support a team of dedicated educators and 
                  visionary leaders who work tirelessly for the upliftment of our students. Let us 
                  continue to grow together and uphold the values that make this institution truly remarkable.
                </p>

                {/* Name */}
                <div className="inline-block">
                  <h3 className="text-2xl font-bold text-gray-900">Adv. T. G. Jayakumar</h3>
                  <p className="text-base font-medium text-primary">Manager, NSS HSS Adoor</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ManagerMessage;
