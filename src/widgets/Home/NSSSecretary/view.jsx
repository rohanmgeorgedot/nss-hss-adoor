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
        <div className="mb-16 text-center" data-aos="fade-up">
          <div className="mb-4 inline-flex items-center gap-3 rounded-full bg-primary/10 px-4 py-2">
            <span className="h-2 w-2 rounded-full bg-primary" />
            <span className="text-sm font-semibold uppercase tracking-wider text-primary">
              NSS Leadership
            </span>
          </div>
          <h2 className="text-3xl font-bold text-gray-900 md:text-4xl lg:text-5xl">
            NSS <span className="text-primary">General Secretary</span>
          </h2>
        </div>

        {/* Content Card */}
        <div className="mx-auto max-w-5xl">
          <div 
            className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-gray-900 to-gray-800 p-8 md:p-12"
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            {/* Decorative Elements */}
            <div className="absolute right-0 top-0 h-64 w-64 rounded-full bg-primary/10 blur-3xl" />
            <div className="absolute -bottom-20 -left-20 h-64 w-64 rounded-full bg-primary/5 blur-3xl" />

            <div className="relative flex flex-col items-center gap-8 md:flex-row md:gap-12">
              {/* Image */}
              <div className="flex-shrink-0">
                <div className="relative">
                  <div className="absolute -inset-2 rounded-full bg-gradient-to-br from-primary to-orange-400 opacity-20 blur-lg" />
                  <div className="relative h-48 w-48 overflow-hidden rounded-full border-4 border-white/20 shadow-2xl md:h-56 md:w-56">
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
                <FaQuoteLeft className="mx-auto mb-4 text-3xl text-primary/40 md:mx-0" />
                
                <p className="mb-6 text-base leading-relaxed text-gray-300 md:text-lg">
                  Sri G Sukumaran Nair is the present General Secretary of the Nair Service Society (NSS), 
                  guiding the organization with visionary leadership and deep commitment to social reform. 
                  Under his stewardship, NSS continues to thrive as a beacon of educational and cultural 
                  empowerment. His dedication inspires institutions like ours to maintain the highest 
                  standards in values, service, and academic excellence.
                </p>

                <div className="inline-block rounded-xl bg-white/10 px-6 py-3 backdrop-blur-sm">
                  <h3 className="text-xl font-bold text-white md:text-2xl">
                    Sri. G Sukumaran Nair
                  </h3>
                  <p className="text-sm font-medium text-primary">
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
