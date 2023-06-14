import React, { useRef } from "react";
import { Grid } from '@mui/material';
import Navbar from "./NavBar.tsx";
import Footer from "./Footer";
import HeroSection from "./components/HeroSection/index.js";
import WhyIntegral from "./components/WhyIntegral.js";
import Analytics from "./components/Analytics.js";
import Migrations from "./components/Migrations.js";
import Scraping from "./components/Scraping.js";
import DatabaseCreation from "./components/DatabaseCreation.js";

function HomePage() {
  const servicesRef = useRef(null);
  const whyIntegralRef = useRef(null);

  React.useEffect(() => {
    const hash = window.location.hash;
    if (hash === "#services" && servicesRef.current) {
      servicesRef.current.scrollIntoView({ behavior: 'smooth' });
    } else if (hash === "#why_integral" && whyIntegralRef.current) {
      whyIntegralRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, []);

  return (
    <>
      <Navbar />
      <HeroSection />
      <div ref={whyIntegralRef}>
        <Grid container>
          <WhyIntegral />
        </Grid>
      </div>
      <div ref={servicesRef}>
        <Grid container>
          <Migrations />
        </Grid>
      </div>
      <Scraping />
      <DatabaseCreation />
      <Analytics />
      <Footer />
    </>
  );
}

export default HomePage;
