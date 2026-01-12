"use client";

import React from "react";
import Banner from "./Banner";
import About from "./About";
import Founder from "./Founder";
import NSSSecretary from "./NSSSecretary";
import ManagerMessage from "./ManagerMessage";
import Features from "./Features";
import Stats from "./Stats";
import Team from "./Team";
import GallerySection from "./GallerySection";
import News from "./News";
import CTA from "./CTA";

export default function HomePage() {
  return (
    <main className="overflow-hidden">
      <Banner />
      <About />
      <Founder />
      <NSSSecretary />
      <ManagerMessage />
      <Features />
      <Stats />
      <Team />
      <GallerySection />
      <News />
      <CTA />
    </main>
  );
}
