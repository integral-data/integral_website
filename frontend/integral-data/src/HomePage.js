import React from "react";
import { Container, Grid } from "@mui/material";
import Navbar from "./NavBar.tsx";
import Footer from "./Footer";

import Image2 from "./images/problem.svg";
import DataMigration from "./images/data_migration.png";
import HeroSection from "./components/HeroSection/index.js";
import GradientText from "./components/GradientText.js";
import { useTheme } from "@mui/material";
import { tokens } from "./theme";
import CustomGrid from "./components/WideCardLayout.js";
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
      <Analytics />
      <Migrations />
      <Scraping />
      <DatabaseCreation />

      <Footer />
    </>
  );
}

export default HomePage;
