import React from "react";
// import Navbar from "./NavBar.tsx";
import Navbar from "./components/Navbar/index.jsx";
import Footer from "./components/Footer.js";
import HeroSection from "./components/HeroSection/index.js";
import WhyIntegral from "./components/WhyIntegral.js";
import Analytics from "./components/Analytics.js";
import Migrations from "./components/Migrations.js";
import Scraping from "./components/Scraping.js";
import DatabaseCreation from "./components/DatabaseCreation.js";
import Skills from "./components/Skills.js";
import CaseStudies from "./components/CaseStudies.js";
import Testimonials from "./components/Testimonials.js";
import Divider from "./components/Divider.js";
function HomePage() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <WhyIntegral />
      <div id="services">
        <Divider
          title="Our Services"
          subtitle="Arming your business with our expertise"
        />

        <Migrations />
        <Scraping />
        <DatabaseCreation />
        <Analytics />
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
