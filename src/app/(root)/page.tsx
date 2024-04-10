import Features from "@/sections/home/Features";
import Footer from "@/sections/home/Footer";
import Hero from "@/sections/home/Hero";
import React from "react";

export default function HomePage() {
  return (
    <React.Fragment>
      <Hero />
      <Features />
      <Footer />
    </React.Fragment>
  );
}
