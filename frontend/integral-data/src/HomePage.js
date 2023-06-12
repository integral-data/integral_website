import React from "react";
import Navbar from "./NavBar.tsx";
import Footer from "./Footer";
import HeroSection from "./components/HeroSection/index.js";
import { useTheme } from "@mui/material";
import WhyIntegral from "./components/WhyIntegral.js";
import Analytics from "./components/Analytics.js";
import Migrations from "./components/Migrations.js";
import Scraping from "./components/Scraping.js";
import DatabaseCreation from "./components/DatabaseCreation.js";

function HomePage() {
  const theme = useTheme();

  return (
    <>
      <Navbar />
      <HeroSection />
      <WhyIntegral />
      <Migrations />
      <Scraping />
      <DatabaseCreation />
      <Analytics />
      <Footer />
    </>
  );
}

export default HomePage;
