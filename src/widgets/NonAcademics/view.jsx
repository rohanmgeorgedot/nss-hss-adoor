"use client";

import React, { useState } from "react";
import Image from "next/image";
import { FaUsers, FaCampground, FaFlask, FaRunning, FaTheaterMasks, FaBriefcase, FaHeart } from "react-icons/fa";

const activities = [
  {
    id: "nss",
    icon: FaUsers,
    title: "NSS (National Service Scheme)",
    description: "NSS unit at our school promotes social service and community development. Students participate in various activities like blood donation camps, cleanliness drives, tree plantation, and awareness programs. NSS instills a sense of social responsibility and selfless service among students.",
    images: ["/images/gallery/1.webp", "/images/gallery/2.webp"],
    highlights: ["Community Service", "Blood Donation Camps", "Environmental Awareness", "Social Responsibility"],
  },
  {
    id: "scouts",
    icon: FaCampground,
    title: "Scouts and Guides",
    description: "The Scouts and Guides movement at our school develops leadership, teamwork, and outdoor skills. Students learn camping, first aid, and survival skills while building character and discipline through various activities and jamborees.",
    images: ["/images/gallery/5.webp"],
    highlights: ["Leadership Training", "Camping Skills", "First Aid", "Character Building"],
  },
  {
    id: "sasthrolsavam",
    icon: FaFlask,
    title: "Sasthrolsavam",
    description: "Our students actively participate in Sasthrolsavam (Science Festival), showcasing their scientific talents through experiments, models, and presentations. This platform encourages scientific thinking and innovation among students.",
    images: ["/images/gallery/3.webp"],
    highlights: ["Science Projects", "Working Models", "Scientific Presentations", "Innovation"],
  },
  {
    id: "sports",
    icon: FaRunning,
    title: "Sports and Games",
    description: "We believe in the holistic development of students through sports and physical activities. Our school provides excellent facilities for various sports including athletics, football, volleyball, cricket, and indoor games.",
    images: ["/images/gallery/4.webp"],
    highlights: ["Athletics", "Team Sports", "Indoor Games", "Physical Fitness"],
  },
  {
    id: "arts",
    icon: FaTheaterMasks,
    title: "Arts and Cultural Activities",
    description: "Our vibrant arts and cultural programs nurture creativity and artistic expression. Students participate in dance, music, drama, and various art forms, representing the school in competitions and cultural festivals.",
    images: [
      "/images/gallery/6.webp",
      "/images/gallery/7.webp",
      "/images/gallery/11.webp",
      "/images/gallery/12.webp",
      "/images/gallery/13.webp",
      "/images/gallery/14.webp",
      "/images/gallery/15.webp",
      "/images/gallery/16.webp",
    ],
    highlights: ["Dance", "Music", "Drama", "Art Forms", "Cultural Festivals"],
  },
  {
    id: "career",
    icon: FaBriefcase,
    title: "Career Guidance",
    description: "Our career guidance program helps students make informed decisions about their future. We organize workshops, seminars, and counseling sessions to guide students in choosing the right career path based on their interests and abilities.",
    images: ["/images/gallery/8.webp", "/images/gallery/9.webp", "/images/gallery/10.webp"],
    highlights: ["Career Counseling", "Workshops", "Industry Visits", "Higher Education Guidance"],
  },
  {
    id: "sauhrida",
    icon: FaHeart,
    title: "Sauhrida Club",
    description: "Sauhrida Club focuses on the emotional wellbeing and mental health of students. The club organizes activities that promote peer support, stress management, and positive relationships among students.",
    images: ["/images/gallery/16.webp"],
    highlights: ["Peer Support", "Mental Wellness", "Counseling", "Positive Environment"],
  },
];

export default function NonAcademics() {
  const [activeTab, setActiveTab] = useState("nss");
  const activeActivity = activities.find((a) => a.id === activeTab);

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative min-h-[50vh] w-full overflow-hidden bg-gray-900 py-20 md:py-32">
        {/* Background with Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-violet-600 via-primary to-fuchsia-600 opacity-90" />
        
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -left-20 top-1/4 h-96 w-96 rounded-full bg-white/10 blur-3xl animate-pulse" />
          <div className="absolute -right-20 bottom-1/4 h-80 w-80 rounded-full bg-white/5 blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
        </div>

        {/* Grid Pattern */}
        <div className="absolute inset-0 opacity-[0.03]" style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.1) 1px, transparent 1px)`,
          backgroundSize: '50px 50px'
        }} />

        <div className="relative z-10 mx-auto max-w-7xl px-5 md:px-8 lg:px-16">
          <div className="text-center">
            {/* Badge */}
            <div 
              className="mb-6 inline-flex items-center gap-3 rounded-full border border-white/30 bg-white/10 px-5 py-2.5 backdrop-blur-sm"
              data-aos="fade-up"
            >
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-white opacity-75"></span>
                <span className="relative inline-flex h-2 w-2 rounded-full bg-white"></span>
              </span>
              <span className="text-sm font-semibold text-white">
                🎭 Beyond The Classroom
              </span>
            </div>

            <h1 
              className="mb-6 text-4xl font-extrabold leading-tight text-white md:text-5xl lg:text-6xl"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              Non-Academic{" "}
              <span className="relative inline-block">
                <span className="relative z-10">Activities</span>
                <svg className="absolute -bottom-2 left-0 w-full" viewBox="0 0 200 12" fill="none">
                  <path d="M2 10C50 4 150 4 198 10" stroke="white" strokeWidth="4" strokeLinecap="round" opacity="0.3"/>
                </svg>
              </span>
            </h1>
            <p 
              className="mx-auto max-w-2xl text-base leading-relaxed text-white/90 md:text-lg"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              Beyond academics, we nurture talents and build character through diverse activities
            </p>
          </div>
        </div>

        {/* Bottom Wave */}
        <div className="absolute bottom-0 left-0 right-0 z-10">
          <svg viewBox="0 0 1440 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
            <path d="M0 100L48 90C96 80 192 60 288 50C384 40 480 40 576 45C672 50 768 60 864 65C960 70 1056 70 1152 65C1248 60 1344 50 1392 45L1440 40V100H1392C1344 100 1248 100 1152 100C1056 100 960 100 864 100C768 100 672 100 576 100C480 100 384 100 288 100C192 100 96 100 48 100H0Z" fill="white"/>
          </svg>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-12 md:py-16">
        <div className="mx-auto max-w-7xl px-5 md:px-8 lg:px-16">
          <div className="text-center" data-aos="fade-up">
            <p className="mx-auto max-w-3xl text-base leading-relaxed text-font-secondary md:text-lg">
              At NSS HSS Adoor, we believe in the holistic development of students. 
              Our diverse range of non-academic activities helps students discover their passions, 
              develop life skills, and grow into well-rounded individuals.
            </p>
          </div>
        </div>
      </section>

      {/* Activities Grid - Quick Overview */}
      <section className="bg-gray-50 py-12 md:py-16">
        <div className="mx-auto max-w-7xl px-5 md:px-8 lg:px-16">
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7">
            {activities.map((activity) => (
              <button
                key={activity.id}
                onClick={() => setActiveTab(activity.id)}
                className={`cursor-pointer flex flex-col items-center gap-2 rounded-xl p-4 transition-all ${
                  activeTab === activity.id
                    ? "bg-primary text-white shadow-lg"
                    : "bg-white text-font-primary hover:bg-primary/10"
                }`}
              >
                <activity.icon className="text-2xl" />
                <span className="text-xs font-medium text-center leading-tight">{activity.title.split(" ")[0]}</span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Active Activity Detail */}
      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-5 md:px-8 lg:px-16">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-start">
            {/* Content */}
            <div key={activeActivity.id} className="transition-opacity duration-300">
              <div className="mb-4 inline-flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                  <activeActivity.icon className="text-xl text-primary" />
                </div>
                <h2 className="text-2xl font-bold text-font-primary md:text-3xl">
                  {activeActivity.title}
                </h2>
              </div>

              <p className="mb-6 text-base leading-relaxed text-font-secondary md:text-lg">
                {activeActivity.description}
              </p>

              {/* Highlights */}
              <div className="mb-6">
                <h3 className="mb-3 text-sm font-semibold uppercase tracking-wider text-primary">
                  Key Highlights
                </h3>
                <div className="flex flex-wrap gap-2">
                  {activeActivity.highlights.map((highlight, index) => (
                    <span
                      key={index}
                      className="rounded-full bg-primary/10 px-4 py-2 text-sm font-medium text-primary"
                    >
                      {highlight}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Images */}
            <div key={`images-${activeActivity.id}`} className="transition-opacity duration-300">
              {activeActivity.images.length === 1 ? (
                <div className="overflow-hidden rounded-2xl shadow-xl">
                  <Image
                    src={activeActivity.images[0]}
                    alt={activeActivity.title}
                    width={600}
                    height={400}
                    className="h-auto w-full object-cover"
                  />
                </div>
              ) : activeActivity.images.length === 2 ? (
                <div className="grid grid-cols-2 gap-4">
                  {activeActivity.images.map((img, index) => (
                    <div key={index} className="overflow-hidden rounded-2xl shadow-lg">
                      <Image
                        src={img}
                        alt={`${activeActivity.title} ${index + 1}`}
                        width={300}
                        height={300}
                        className="h-48 w-full object-cover md:h-64"
                      />
                    </div>
                  ))}
                </div>
              ) : activeActivity.images.length === 3 ? (
                <div className="grid grid-cols-2 gap-4">
                  <div className="overflow-hidden rounded-2xl shadow-lg">
                    <Image
                      src={activeActivity.images[0]}
                      alt={`${activeActivity.title} 1`}
                      width={300}
                      height={400}
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <div className="space-y-4">
                    {activeActivity.images.slice(1).map((img, index) => (
                      <div key={index} className="overflow-hidden rounded-2xl shadow-lg">
                        <Image
                          src={img}
                          alt={`${activeActivity.title} ${index + 2}`}
                          width={300}
                          height={200}
                          className="h-32 w-full object-cover md:h-40"
                        />
                      </div>
                    ))}
                  </div>
                </div>
              ) : (
                <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4">
                  {activeActivity.images.slice(0, 8).map((img, index) => (
                    <div key={index} className="overflow-hidden rounded-xl shadow-lg">
                      <Image
                        src={img}
                        alt={`${activeActivity.title} ${index + 1}`}
                        width={200}
                        height={200}
                        className="h-32 w-full object-cover transition-transform hover:scale-105 md:h-40"
                      />
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* All Activities Overview */}
      <section className="bg-gray-50 py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-5 md:px-8 lg:px-16">
          <div className="mb-12 text-center" data-aos="fade-up">
            <div className="mb-4 inline-flex items-center justify-center gap-2">
              <span className="h-px w-8 bg-primary" />
              <span className="text-sm font-semibold uppercase tracking-wider text-primary">
                Our Programs
              </span>
              <span className="h-px w-8 bg-primary" />
            </div>
            <h2 className="text-3xl font-bold text-font-primary md:text-4xl">
              All <span className="text-primary">Activities</span>
            </h2>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {activities.map((activity, index) => (
              <div
                key={activity.id}
                className="group overflow-hidden rounded-2xl bg-white shadow-sm transition-all hover:shadow-lg"
                data-aos="fade-up"
                data-aos-delay={index * 50}
              >
                {/* Image */}
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={activity.images[0]}
                    alt={activity.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="text-lg font-bold text-white">{activity.title}</h3>
                  </div>
                </div>

                {/* Content */}
                <div className="p-5">
                  <p className="mb-4 text-sm text-font-secondary line-clamp-2">
                    {activity.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {activity.highlights.slice(0, 3).map((highlight, idx) => (
                      <span
                        key={idx}
                        className="rounded-full bg-gray-100 px-3 py-1 text-xs text-font-secondary"
                      >
                        {highlight}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-5 md:px-8 lg:px-16 text-center">
          <h2 className="mb-4 text-2xl font-bold text-white md:text-3xl lg:text-4xl">
            Discover Your Passion
          </h2>
          <p className="mx-auto mb-8 max-w-2xl text-base text-white/80 md:text-lg">
            Join NSS HSS Adoor and explore a world of opportunities beyond academics.
          </p>
          <a href="/contact">
            <button className="cursor-pointer rounded-lg bg-white px-8 py-4 text-sm font-semibold text-primary transition-all hover:bg-gray-100 md:text-base">
              Contact Us
            </button>
          </a>
        </div>
      </section>
    </div>
  );
}
