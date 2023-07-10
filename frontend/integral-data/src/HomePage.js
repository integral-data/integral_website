import React from "react";
import Navbar from "./components/Navbar/index.jsx";
import Footer from "./components/Footer.js";
import HeroSection from "./components/HeroSection/index.js";
import WhyIntegral from "./components/WhyIntegral.js";
import Analytics from "./components/Analytics.js";
import Migrations from "./components/Migrations.js";
import Scraping from "./components/Scraping.js";
import DatabaseCreation from "./components/DatabaseCreation.js";
import DataCleansing from "./components/DataCleansing.js";
import Skills from "./components/Skills.js";
import CaseStudies from "./components/CaseStudies.js";
import OurServices from "./components/OurServices.js";
// import Testimonials from "./components/Testimonials.js";
function HomePage() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <WhyIntegral />
      <div id="services">
        <OurServices />
        <Migrations />
        <Analytics />
        <DataCleansing />
        <DatabaseCreation />
        <Scraping />
      </div>
      <div id="expertise">
        <Skills />
      </div>
      {/* <div id="testimonials">
        <Testimonials />
      </div> */}
      <div id="case-studies">
        <CaseStudies />
      </div>
      <Footer />
    </>
  );
}

export default HomePage;
