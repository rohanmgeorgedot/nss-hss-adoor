"use client";

import React from "react";
import Image from "next/image";
import { FaFlask, FaBook, FaChartLine, FaGraduationCap, FaCheckCircle } from "react-icons/fa";

const streams = [
  {
    icon: FaFlask,
    title: "Science Stream",
    code: "01 & 05",
    description: "For students aspiring to pursue careers in Engineering, Medicine, Research, and Technology.",
    subjects: {
      compulsory: ["English", "Mathematics", "Physics", "Chemistry"],
      optional: ["Biology", "Computer Science"],
    },
    careers: ["Engineering", "Medicine", "Research", "IT & Software", "Architecture"],
    color: "bg-blue-500",
  },
  {
    icon: FaBook,
    title: "Humanities Stream",
    code: "28",
    description: "For students interested in Arts, Literature, Social Sciences, and Public Services.",
    subjects: {
      compulsory: ["History", "Economics", "English", "Second Language", "Sanskrit (Shastra/Sahithya)"],
      optional: ["Physical Education", "General Studies"],
    },
    careers: ["Civil Services", "Law", "Journalism", "Teaching", "Social Work"],
    color: "bg-purple-500",
  },
  {
    icon: FaChartLine,
    title: "Commerce Stream",
    code: "39",
    description: "For students aiming for careers in Business, Finance, Accounting, and Management.",
    subjects: {
      compulsory: ["English", "Business Studies", "Accountancy", "Economics", "Second Language"],
      optional: ["Computer Application"],
    },
    careers: ["Chartered Accountancy", "Banking", "Business Management", "Finance", "Entrepreneurship"],
    color: "bg-green-500",
  },
];

const facilities = [
  "Well-equipped Science Laboratories",
  "Computer Lab with Internet Access",
  "Library with Extensive Collection",
  "Smart Classrooms",
  "Experienced Faculty Members",
  "Regular Assessments & Feedback",
];

export default function Content() {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative min-h-[50vh] w-full overflow-hidden bg-gray-900 py-20 md:py-32">
        {/* Background with Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600 via-primary to-purple-600 opacity-90" />
        
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
                🎓 Excellence in Education
              </span>
            </div>

            <h1 
              className="mb-6 text-4xl font-extrabold leading-tight text-white md:text-5xl lg:text-6xl"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              Academic{" "}
              <span className="relative inline-block">
                <span className="relative z-10">Programs</span>
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
              Comprehensive education designed to nurture intellectual growth and prepare students for successful futures.
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
      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-5 md:px-8 lg:px-16">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
            {/* Image */}
            <div className="relative" data-aos="fade-right">
              <div className="overflow-hidden rounded-2xl shadow-xl">
                <Image
                  src="/images/gallery/1.webp"
                  alt="Students in Classroom"
                  width={600}
                  height={400}
                  className="h-auto w-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 -z-10 h-full w-full rounded-2xl bg-primary/20"></div>
            </div>

            {/* Content */}
            <div data-aos="fade-left">
              <div className="mb-4 inline-flex items-center gap-2">
                <span className="h-px w-8 bg-primary" />
                <span className="text-sm font-semibold uppercase tracking-wider text-primary">
                  Our Curriculum
                </span>
              </div>

              <h2 className="mb-6 text-3xl font-bold text-font-primary md:text-4xl">
                Empowering Students Through <span className="text-primary">Quality Education</span>
              </h2>

              <p className="mb-4 text-base leading-relaxed text-font-secondary md:text-lg">
                NSS HSS Adoor offers a comprehensive curriculum aligned with 
                the Kerala State Board of Education. Our academic programs are designed to provide 
                students with a strong foundation in their chosen fields while developing critical 
                thinking and problem-solving skills.
              </p>

              <p className="mb-6 text-base leading-relaxed text-font-secondary md:text-lg">
                We offer three major streams at the Higher Secondary level - Science, Humanities, 
                and Commerce - each tailored to prepare students for diverse career paths and 
                higher education opportunities.
              </p>

              {/* Highlights */}
              <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                {facilities.slice(0, 4).map((item, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <FaCheckCircle className="text-primary flex-shrink-0" />
                    <span className="text-sm text-font-secondary md:text-base">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Streams Section */}
      <section className="bg-gray-50 py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-5 md:px-8 lg:px-16">
          <div className="mb-12 text-center" data-aos="fade-up">
            <div className="mb-4 inline-flex items-center justify-center gap-2">
              <span className="h-px w-8 bg-primary" />
              <span className="text-sm font-semibold uppercase tracking-wider text-primary">
                Higher Secondary
              </span>
              <span className="h-px w-8 bg-primary" />
            </div>
            <h2 className="mb-4 text-3xl font-bold text-font-primary md:text-4xl">
              Streams <span className="text-primary">Offered</span>
            </h2>
            <p className="mx-auto max-w-2xl text-base text-font-secondary md:text-lg">
              Choose from our three comprehensive streams designed to match your interests and career goals.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {streams.map((stream, index) => (
              <div
                key={index}
                className="group overflow-hidden rounded-2xl bg-white shadow-sm transition-all hover:shadow-lg"
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                {/* Header */}
                <div className={`${stream.color} p-6 text-white`}>
                  <div className="mb-4 flex items-center justify-between">
                    <stream.icon className="text-3xl" />
                    <span className="rounded-full bg-white/20 px-3 py-1 text-sm font-medium">
                      Code: {stream.code}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold">{stream.title}</h3>
                </div>

                {/* Content */}
                <div className="p-6">
                  <p className="mb-4 text-sm text-font-secondary">{stream.description}</p>

                  {/* Subjects */}
                  <div className="mb-4">
                    <h4 className="mb-2 text-sm font-semibold text-font-primary">Core Subjects:</h4>
                    <div className="flex flex-wrap gap-2">
                      {stream.subjects.compulsory.map((subject, idx) => (
                        <span
                          key={idx}
                          className="rounded-full bg-gray-100 px-3 py-1 text-xs text-font-secondary"
                        >
                          {subject}
                        </span>
                      ))}
                    </div>
                  </div>

                  {stream.subjects.optional.length > 0 && (
                    <div className="mb-4">
                      <h4 className="mb-2 text-sm font-semibold text-font-primary">Optional:</h4>
                      <div className="flex flex-wrap gap-2">
                        {stream.subjects.optional.map((subject, idx) => (
                          <span
                            key={idx}
                            className="rounded-full bg-primary/10 px-3 py-1 text-xs text-primary"
                          >
                            {subject}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Career Options */}
                  <div>
                    <h4 className="mb-2 text-sm font-semibold text-font-primary">Career Paths:</h4>
                    <p className="text-xs text-font-secondary">{stream.careers.join(" • ")}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* High School Section */}
      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-5 md:px-8 lg:px-16">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
            {/* Content */}
            <div data-aos="fade-right">
              <div className="mb-4 inline-flex items-center gap-2">
                <span className="h-px w-8 bg-primary" />
                <span className="text-sm font-semibold uppercase tracking-wider text-primary">
                  Classes 8-10
                </span>
              </div>

              <h2 className="mb-6 text-3xl font-bold text-font-primary md:text-4xl">
                High School <span className="text-primary">Education</span>
              </h2>

              <p className="mb-4 text-base leading-relaxed text-font-secondary md:text-lg">
                Our High School program (Classes 8-10) follows the Kerala State Board curriculum, 
                providing a strong foundation in core subjects including Languages, Mathematics, 
                Science, and Social Studies.
              </p>

              <p className="mb-6 text-base leading-relaxed text-font-secondary md:text-lg">
                We focus on building fundamental concepts and skills that prepare students for 
                higher secondary education and beyond, with emphasis on both theoretical knowledge 
                and practical application.
              </p>

              <div className="rounded-2xl bg-gray-50 p-6">
                <h4 className="mb-4 font-semibold text-font-primary">Key Subjects:</h4>
                <div className="grid grid-cols-2 gap-3">
                  {["English", "Malayalam", "Hindi", "Mathematics", "Science", "Social Science", "IT", "Physical Education"].map((subject, index) => (
                    <div key={index} className="flex items-center gap-2">
                      <FaGraduationCap className="text-primary text-sm" />
                      <span className="text-sm text-font-secondary">{subject}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Image */}
            <div className="relative" data-aos="fade-left">
              <div className="overflow-hidden rounded-2xl shadow-xl">
                <Image
                  src="/images/gallery/2.webp"
                  alt="High School Students"
                  width={600}
                  height={400}
                  className="h-auto w-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 -z-10 h-full w-full rounded-2xl bg-primary/20"></div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-5 md:px-8 lg:px-16 text-center">
          <h2 className="mb-4 text-2xl font-bold text-white md:text-3xl lg:text-4xl">
            Ready to Begin Your Academic Journey?
          </h2>
          <p className="mx-auto mb-8 max-w-2xl text-base text-white/80 md:text-lg">
            Join NSS HSS Adoor and be part of a legacy of academic excellence.
          </p>
          <a href="/contact">
            <button className="cursor-pointer rounded-lg bg-white px-8 py-4 text-sm font-semibold text-primary transition-all hover:bg-gray-100 md:text-base">
              Contact Us for Admissions
            </button>
          </a>
        </div>
      </section>
    </div>
  );
}
