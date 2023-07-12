import React from "react";
import Navbar from "./components/Navbar/index.jsx";
import Footer from "./components/Footer.js";
import HeroSection from "./components/HeroSection/index.js";
import WhyIntegral from "./components/WhyIntegral.js";
import DataViz from "./components/DataViz.js";
import Migrations from "./components/DataMigrations.js";
import Scraping from "./components/DataAnalytics.js";
import DatabaseCreation from "./components/DatabaseCreation.js";
import DataCleansing from "./components/DataCleansing.js";
import Skills from "./components/Expertise.js";
import CaseStudies from "./components/CaseStudies.js";
import OurServices from "./components/OurServices.js";
import ContactComponent from "./components/Contact.js";
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
        <DataViz />
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
      <div id="contact-us">
      <ContactComponent/>
      </div>
      <Footer />
    </>
  );
}

export default HomePage;
