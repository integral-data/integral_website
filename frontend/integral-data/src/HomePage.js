import React from "react";
import Navbar from "./NavBar.tsx";
import Footer from "./Footer";
import HeroSection from "./components/HeroSection/index.js";
import WhyIntegral from "./components/WhyIntegral.js";
import Analytics from "./components/Analytics.js";
import Migrations from "./components/Migrations.js";
import Scraping from "./components/Scraping.js";
import DatabaseCreation from "./components/DatabaseCreation.js";
import Skills from "./components/Skills.js";

function HomePage() {

  return (
    <>
      <Navbar />
      <HeroSection />
      <WhyIntegral />
      <Migrations />
      <Scraping />
      <DatabaseCreation />
      <Analytics />
      <Skills />
      <Footer />
    </>
  );
}

export default HomePage;
