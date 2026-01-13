"use client";

import React, { useState } from "react";
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaClock, FaPaperPlane } from "react-icons/fa";
import Link from "next/link";

export default function Content() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // School email address
    const schoolEmail = "nsshssadoor@gmail.com";
    
    // Build email subject
    const emailSubject = `[${formData.subject.toUpperCase()}] Contact Form: ${formData.name}`;
    
    // Build email body with form details
    const emailBody = `
Name: ${formData.name}
Email: ${formData.email}
Phone: ${formData.phone || "Not provided"}
Subject: ${formData.subject}

Message:
${formData.message}

---
Sent from NSS HSS Adoor Website Contact Form
    `.trim();
    
    // Create mailto link with encoded parameters
    const mailtoLink = `mailto:${schoolEmail}?subject=${encodeURIComponent(emailSubject)}&body=${encodeURIComponent(emailBody)}`;
    
    // Open email client
    window.location.href = mailtoLink;
    
    // Show success message
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      setFormData({ name: "", email: "", phone: "", subject: "", message: "" });
      
      // Reset success message after 5 seconds
      setTimeout(() => setSubmitted(false), 5000);
    }, 500);
  };

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative min-h-[50vh] w-full overflow-hidden bg-gray-900 py-20 md:py-32">
        {/* Background with Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-600 via-primary to-blue-600 opacity-90" />
        
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

        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-5 md:px-8 lg:px-16">
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
                📞 Get In Touch
              </span>
            </div>

            <h1 
              className="mb-6 text-4xl font-extrabold leading-tight text-white md:text-5xl lg:text-6xl"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              Contact{" "}
              <span className="relative inline-block">
                <span className="relative z-10">Us</span>
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
              Get in touch with us for admissions, queries, or any other information
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

      {/* Contact Info Cards */}
      <section className="py-12 md:py-16 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-5 md:px-8 lg:px-16">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {/* Address */}
            <div className="rounded-xl sm:rounded-2xl bg-white p-4 sm:p-5 md:p-6 shadow-sm text-center" data-aos="fade-up">
              <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-primary/10">
                <FaMapMarkerAlt className="text-xl text-primary" />
              </div>
              <h3 className="mb-2 font-semibold text-font-primary">Address</h3>
              <p className="text-xs sm:text-sm text-font-secondary">
                Vadakadathucavu P.O, Ezhamkulam<br />
                Adoor, Kerala - 691529
              </p>
            </div>

            {/* Phone */}
            <div className="rounded-xl sm:rounded-2xl bg-white p-4 sm:p-5 md:p-6 shadow-sm text-center" data-aos="fade-up" data-aos-delay="100">
              <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-primary/10">
                <FaPhone className="text-xl text-primary" />
              </div>
              <h3 className="mb-2 font-semibold text-font-primary">Phone</h3>
              <p className="text-xs sm:text-sm text-font-secondary">
                <Link href="tel:+918281821908" className="hover:text-primary">+91 82818 21908</Link><br />
                <Link href="tel:+914734220908" className="hover:text-primary">04734 220908</Link>
              </p>
            </div>

            {/* Email */}
            <div className="rounded-xl sm:rounded-2xl bg-white p-4 sm:p-5 md:p-6 shadow-sm text-center" data-aos="fade-up" data-aos-delay="200">
              <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-primary/10">
                <FaEnvelope className="text-xl text-primary" />
              </div>
              <h3 className="mb-2 font-semibold text-font-primary">Email</h3>
              <p className="text-xs sm:text-sm text-font-secondary">
                <Link href="mailto:nsshssadoor@gmail.com" className="hover:text-primary">
                  nsshssadoor@gmail.com
                </Link>
              </p>
            </div>

            {/* Working Hours */}
            <div className="rounded-xl sm:rounded-2xl bg-white p-4 sm:p-5 md:p-6 shadow-sm text-center" data-aos="fade-up" data-aos-delay="300">
              <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-primary/10">
                <FaClock className="text-xl text-primary" />
              </div>
              <h3 className="mb-2 font-semibold text-font-primary">Office Hours</h3>
              <p className="text-xs sm:text-sm text-font-secondary">
                Mon - Fri: 9:00 AM - 5:00 PM
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Map and Form Section */}
      <section className="py-12 md:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-5 md:px-8 lg:px-16">
          <div className="grid gap-8 lg:grid-cols-2 lg:gap-12">
            {/* Map */}
            <div data-aos="fade-right">
              <div className="mb-6">
                <div className="mb-4 inline-flex items-center gap-2">
                  <span className="h-px w-8 bg-primary" />
                  <span className="text-sm font-semibold uppercase tracking-wider text-primary">
                    Location
                  </span>
                </div>
                <h2 className="text-2xl font-bold text-font-primary md:text-3xl">
                  Find Us on <span className="text-primary">Map</span>
                </h2>
              </div>
              <div className="overflow-hidden rounded-2xl shadow-lg">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d9858.202877895512!2d76.749005!3d9.138405!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b061210d6abfe61%3A0xf27d1ae396da2c0d!2sNSS%20HSS%20Adoor!5e1!3m2!1sen!2sin!4v1768142415206!5m2!1sen!2sin"
                  width="100%"
                  height="400"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="w-full"
                ></iframe>
              </div>
            </div>

            {/* Contact Form */}
            <div data-aos="fade-left">
              <div className="mb-6">
                <div className="mb-4 inline-flex items-center gap-2">
                  <span className="h-px w-8 bg-primary" />
                  <span className="text-sm font-semibold uppercase tracking-wider text-primary">
                    Get in Touch
                  </span>
                </div>
                <h2 className="text-2xl font-bold text-font-primary md:text-3xl">
                  Send Us a <span className="text-primary">Message</span>
                </h2>
              </div>

              {submitted ? (
                <div className="rounded-2xl bg-green-50 p-8 text-center">
                  <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-green-100">
                    <FaPaperPlane className="text-2xl text-green-600" />
                  </div>
                  <h3 className="mb-2 text-xl font-bold text-green-800">Email Client Opened!</h3>
                  <p className="text-green-700">Please click "Send" in your email application to complete sending your message. We will get back to you soon.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid gap-4 sm:grid-cols-2">
                    <div>
                      <label htmlFor="name" className="mb-2 block text-sm font-medium text-font-primary">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full rounded-lg border border-gray-200 px-4 py-3 text-sm outline-none transition-all focus:border-primary focus:ring-2 focus:ring-primary/20"
                        placeholder="Your name"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="mb-2 block text-sm font-medium text-font-primary">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full rounded-lg border border-gray-200 px-4 py-3 text-sm outline-none transition-all focus:border-primary focus:ring-2 focus:ring-primary/20"
                        placeholder="your@email.com"
                      />
                    </div>
                  </div>

                  <div className="grid gap-4 sm:grid-cols-2">
                    <div>
                      <label htmlFor="phone" className="mb-2 block text-sm font-medium text-font-primary">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full rounded-lg border border-gray-200 px-4 py-3 text-sm outline-none transition-all focus:border-primary focus:ring-2 focus:ring-primary/20"
                        placeholder="+91 XXXXX XXXXX"
                      />
                    </div>
                    <div>
                      <label htmlFor="subject" className="mb-2 block text-sm font-medium text-font-primary">
                        Subject *
                      </label>
                      <select
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        required
                        className="w-full rounded-lg border border-gray-200 px-4 py-3 text-sm outline-none transition-all focus:border-primary focus:ring-2 focus:ring-primary/20"
                      >
                        <option value="">Select a subject</option>
                        <option value="admission">Admission Enquiry</option>
                        <option value="general">General Enquiry</option>
                        <option value="feedback">Feedback</option>
                        <option value="complaint">Complaint</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="message" className="mb-2 block text-sm font-medium text-font-primary">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      className="w-full rounded-lg border border-gray-200 px-4 py-3 text-sm outline-none transition-all focus:border-primary focus:ring-2 focus:ring-primary/20 resize-none"
                      placeholder="Write your message here..."
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="cursor-pointer flex w-full items-center justify-center gap-2 rounded-lg bg-primary px-6 py-4 text-sm font-semibold text-white transition-all hover:bg-primary-700 disabled:opacity-50 disabled:cursor-not-allowed md:text-base"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="h-5 w-5 animate-spin rounded-full border-2 border-white border-t-transparent"></div>
                        Sending...
                      </>
                    ) : (
                      <>
                        <FaPaperPlane />
                        Send Message
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* School Info */}
      <section className="bg-primary py-12 md:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-5 md:px-8 lg:px-16">
          <div className="grid gap-8 text-center md:grid-cols-3">
            <div data-aos="fade-up">
              <h3 className="mb-2 text-lg font-bold text-white">School Code</h3>
              <p className="text-3xl font-bold text-white/90">03030</p>
            </div>
            <div data-aos="fade-up" data-aos-delay="100">
              <h3 className="mb-2 text-lg font-bold text-white">UDISE Code</h3>
              <p className="text-2xl font-bold text-white/90">32120100714</p>
            </div>
            <div data-aos="fade-up" data-aos-delay="200">
              <h3 className="mb-2 text-lg font-bold text-white">Established</h3>
              <p className="text-3xl font-bold text-white/90">1934</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
