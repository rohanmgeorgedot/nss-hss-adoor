"use client";

import React from "react";
import Image from "next/image";
import { FaQuoteLeft } from "react-icons/fa";

const NSSSecretary = () => {
  return (
    <section className="relative w-full overflow-hidden bg-white py-16 md:py-24 lg:py-28">
      {/* Background Decoration */}
      <div className="absolute left-0 top-1/2 h-96 w-96 -translate-y-1/2 rounded-full bg-orange-50 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-5 md:px-8 lg:px-16">
        {/* Section Header */}
        <div className="mb-10 text-center sm:mb-12 md:mb-16" data-aos="fade-up">
          <div className="mb-3 inline-flex items-center gap-2 rounded-full bg-primary/10 px-3 py-1.5 sm:mb-4 sm:gap-3 sm:px-4 sm:py-2">
            <span className="h-1.5 w-1.5 rounded-full bg-primary sm:h-2 sm:w-2" />
            <span className="text-xs font-semibold uppercase tracking-wider text-primary sm:text-sm">
              NSS Leadership
            </span>
          </div>
          <h2 className="text-2xl font-bold text-gray-900 sm:text-3xl md:text-4xl lg:text-5xl">
            NSS <span className="text-primary">General Secretary</span>
          </h2>
        </div>

        {/* Content Card */}
        <div className="mx-auto max-w-5xl">
          <div 
            className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-gray-900 to-gray-800 p-6 md:rounded-3xl md:p-8 lg:p-12"
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            {/* Decorative Elements */}
            <div className="absolute right-0 top-0 h-48 w-48 rounded-full bg-primary/10 blur-3xl md:h-64 md:w-64" />
            <div className="absolute -bottom-20 -left-20 h-48 w-48 rounded-full bg-primary/5 blur-3xl md:h-64 md:w-64" />

            <div className="relative flex flex-col items-center gap-6 md:flex-row md:gap-8 lg:gap-12">
              {/* Image */}
              <div className="flex-shrink-0">
                <div className="relative">
                  <div className="absolute -inset-2 rounded-full bg-gradient-to-br from-primary to-orange-400 opacity-20 blur-lg" />
                  <div className="relative h-40 w-40 overflow-hidden rounded-full border-4 border-white/20 shadow-2xl md:h-48 md:w-48 lg:h-56 lg:w-56">
                    <Image
                      src="/images/secretary.jpg"
                      alt="Sri. G Sukumaran Nair - NSS General Secretary"
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="flex-1 text-center md:text-left">
                <FaQuoteLeft className="mx-auto mb-3 text-2xl text-primary/40 md:mx-0 md:mb-4 md:text-3xl" />
                
                <p className="mb-4 text-sm leading-relaxed text-gray-300 md:mb-6 md:text-base lg:text-lg">
                  Sri G Sukumaran Nair is the present General Secretary of the Nair Service Society (NSS), 
                  guiding the organization with visionary leadership and deep commitment to social reform. 
                  Under his stewardship, NSS continues to thrive as a beacon of educational and cultural 
                  empowerment. His dedication inspires institutions like ours to maintain the highest 
                  standards in values, service, and academic excellence.
                </p>

                <div className="inline-block rounded-lg bg-white/10 px-4 py-2 backdrop-blur-sm md:rounded-xl md:px-6 md:py-3">
                  <h3 className="text-lg font-bold text-white md:text-xl lg:text-2xl">
                    Sri. G Sukumaran Nair
                  </h3>
                  <p className="text-xs font-medium text-primary md:text-sm">
                    General Secretary, Nair Service Society
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NSSSecretary;
