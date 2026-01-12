"use client";

import React from "react";
import Image from "next/image";
import { FaQuoteRight } from "react-icons/fa";

const Founder = () => {
  return (
    <section className="relative w-full overflow-hidden bg-gray-50 py-16 md:py-24 lg:py-28">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM12 86c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm28-65c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm23-11c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-6 60c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm29 22c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zM32 63c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm57-13c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-9-21c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM60 91c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM35 41c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM12 60c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2z' fill='%23000000' fill-opacity='1' fill-rule='evenodd'/%3E%3C/svg%3E")`,
        }} />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-5 md:px-8 lg:px-16">
        {/* Section Header */}
        <div className="mb-16 text-center" data-aos="fade-up">
          <div className="mb-4 inline-flex items-center gap-3 rounded-full bg-primary/10 px-4 py-2">
            <span className="h-2 w-2 rounded-full bg-primary" />
            <span className="text-sm font-semibold uppercase tracking-wider text-primary">
              Our Legacy
            </span>
          </div>
          <h2 className="text-3xl font-bold text-gray-900 md:text-4xl lg:text-5xl">
            Our <span className="text-primary">Founder</span>
          </h2>
        </div>

        {/* Content */}
        <div className="grid gap-12 lg:grid-cols-5 lg:gap-16 items-center">
          {/* Image */}
          <div 
            className="lg:col-span-2 flex justify-center"
            data-aos="fade-right"
            data-aos-duration="1000"
          >
            <div className="relative">
              {/* Frame */}
              <div className="absolute -inset-4 rounded-3xl bg-gradient-to-br from-primary/20 to-orange-200/20" />
              <div className="absolute -inset-4 rounded-3xl border-2 border-primary/10" />
              
              {/* Image */}
              <div className="relative overflow-hidden rounded-2xl shadow-2xl">
                <Image
                  src="/images/founder.webp"
                  alt="Sri Mannathu Padmanabhan - Founder of NSS"
                  width={350}
                  height={450}
                  className="h-auto w-full max-w-[300px] object-cover md:max-w-[350px]"
                />
              </div>

              {/* Name Badge */}
              <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 rounded-full bg-white px-6 py-2 shadow-lg">
                <p className="text-sm font-bold text-gray-900">1878 - 1970</p>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="lg:col-span-3" data-aos="fade-left" data-aos-duration="1000">
            <h3 className="mb-2 text-2xl font-bold text-gray-900 md:text-3xl lg:text-4xl">
              Sri Mannathu Padmanabhan
            </h3>
            <p className="mb-6 text-lg font-semibold text-primary">
              Founder, Nair Service Society (NSS)
            </p>

            <div className="relative mb-6 rounded-2xl bg-white p-6 shadow-lg">
              <FaQuoteRight className="absolute right-4 top-4 text-3xl text-primary/10" />
              <p className="text-base leading-relaxed text-gray-600 md:text-lg">
                Sri Mannathu Padmanabhan was a visionary social reformer and the founder of the 
                Nair Service Society (NSS) in 1914. His life was dedicated to the upliftment 
                of society through education, social reform, and community service.
              </p>
            </div>

            <div className="space-y-4 text-gray-600">
              <p className="leading-relaxed">
                He believed that education was the key to social transformation. Under his 
                leadership, NSS established numerous educational institutions across Kerala, 
                including NSS HSS Adoor, to provide quality education 
                rooted in values and culture.
              </p>
              <p className="leading-relaxed">
                His motto <span className="font-semibold text-primary">"Service to humanity is service to God"</span> continues 
                to inspire our institution in its mission to nurture young minds with knowledge, 
                discipline, and moral values.
              </p>
            </div>

            {/* Achievements */}
            <div className="mt-8 grid grid-cols-3 gap-4">
              <div className="rounded-xl bg-white p-4 text-center shadow-md">
                <p className="text-2xl font-bold text-primary">1914</p>
                <p className="text-xs text-gray-500">Founded NSS</p>
              </div>
              <div className="rounded-xl bg-white p-4 text-center shadow-md">
                <p className="text-2xl font-bold text-primary">100+</p>
                <p className="text-xs text-gray-500">Schools Started</p>
              </div>
              <div className="rounded-xl bg-white p-4 text-center shadow-md">
                <p className="text-2xl font-bold text-primary">∞</p>
                <p className="text-xs text-gray-500">Lives Changed</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Founder;
