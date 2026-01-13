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
        <div className="mb-10 text-center sm:mb-12 md:mb-16" data-aos="fade-up">
          <div className="mb-3 inline-flex items-center gap-2 rounded-full bg-primary/10 px-3 py-1.5 sm:mb-4 sm:gap-3 sm:px-4 sm:py-2">
            <span className="h-1.5 w-1.5 rounded-full bg-primary sm:h-2 sm:w-2" />
            <span className="text-xs font-semibold uppercase tracking-wider text-primary sm:text-sm">
              Leadership
            </span>
          </div>
          <h2 className="text-2xl font-bold text-gray-900 sm:text-3xl md:text-4xl lg:text-5xl">
            Manager's <span className="text-primary">Message</span>
          </h2>
        </div>

        {/* Content */}
        <div className="mx-auto max-w-4xl">
          <div 
            className="relative rounded-2xl bg-white p-6 shadow-xl md:rounded-3xl md:p-8 lg:p-12"
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            {/* Quote Marks */}
            <FaQuoteLeft className="absolute left-4 top-4 text-3xl text-primary/10 md:left-8 md:top-8 md:text-5xl lg:left-10 lg:top-10 lg:text-6xl" />
            <FaQuoteRight className="absolute bottom-4 right-4 text-3xl text-primary/10 md:bottom-8 md:right-8 md:text-5xl lg:bottom-10 lg:right-10 lg:text-6xl" />

            <div className="relative flex flex-col items-center gap-6 text-center md:gap-8">
              {/* Avatar */}
              <div className="relative">
                <div className="flex h-24 w-24 items-center justify-center rounded-full bg-gradient-to-br from-primary to-orange-400 shadow-lg md:h-32 md:w-32 lg:h-40 lg:w-40">
                  <span className="text-4xl font-bold text-white md:text-5xl lg:text-6xl">A</span>
                </div>
                <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 rounded-full bg-gray-900 px-3 py-0.5 md:px-4 md:py-1">
                  <p className="text-[10px] font-medium text-white md:text-xs">Manager</p>
                </div>
              </div>

              {/* Message */}
              <div className="max-w-2xl">
                <p className="mb-6 text-sm leading-relaxed text-gray-600 md:mb-8 md:text-base lg:text-xl">
                  NSS HSS Adoor has always stood as a beacon of discipline, culture, and educational 
                  excellence. As the manager, I am proud to support a team of dedicated educators and 
                  visionary leaders who work tirelessly for the upliftment of our students. Let us 
                  continue to grow together and uphold the values that make this institution truly remarkable.
                </p>

                {/* Name */}
                <div className="inline-block">
                  <h3 className="text-lg font-bold text-gray-900 md:text-xl lg:text-2xl">Adv. T. G. Jayakumar</h3>
                  <p className="text-sm font-medium text-primary md:text-base">Manager, NSS HSS Adoor</p>
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
