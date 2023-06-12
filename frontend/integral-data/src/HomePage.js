import React from "react";
import { Box, Typography, Button, Container, Grid } from "@mui/material";
import Navbar from "./NavBar.tsx";
import Footer from "./Footer";
import { useNavigate } from "react-router-dom";
import { styled, keyframes } from "@mui/system";
import MyImage from "./images/integral_transparent_icon.png";
import Coffee from "./images/code_and_coffee.jpeg";
import Image2 from "./images/problem.svg";
import ImageCode from "./images/code_and_coffee.jpeg";
import DataMigration from "./images/data_migration.png";
import ImageNerd from "./images/circuit_nerd.jpeg";
import ImageDash from "./images/dashboard.jpeg";
import ImageTeam from "./images/teamwork.jpeg";
import HeroSection from "./components/HeroSection/index.js";
import { color_blue, color_grey } from "./constants";
import { useTheme } from "@mui/material";
import { tokens } from "./theme";
import ServiceCard from "./components/ServiceCard.js";
import SectionDivider from "./components/SectionDivider.js";
import CustomGrid from "./components/WideCardLayout.js";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,
  vertical: false,
  verticalSwiping: false,
};

const RotatingImage = styled("img")(({ theme }) => ({
  animation: `${rotate} 25s linear infinite`,
  maxWidth: "100%",
  maxHeight: "100%",
  scale: 0.1,
}));

const GradientText = styled(Typography)(({ theme }) => ({
  color: "#FE6B8B", // fallback color for unsupported browsers
  background: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
  WebkitBackgroundClip: "text",
  WebkitTextFillColor: "transparent",
  "@supports (-webkit-background-clip: text)": {
    color: "transparent",
  },
}));

function HomePage() {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const navigate = useNavigate();

  return (
    <>
      <Navbar />
      <HeroSection />
      <Grid
        container
        xs={12}
        sm={12}
        md={12}
        display={"flex"}
        flexDirection={"row"}
        sx={{
          background: "linear-gradient(to right, #8a2387, #e94057, #f27121);",
          background: "black",
        }}
        // sx={{ background: theme.gradient }}
      >
        <Grid
          item
          md={12}
          p={5}
          mr={5}
          sx={{ display: "flex", justifyContent: "center" }}
        >
          <Grid
            container
            alignSelf={"center"}
            maxWidth={"1600px"}
            sx={{ display: "flex", justifyContent: "space-between" }}
          >
            <Grid item md={4} sx={{ height: "300px" }}>
              <RotatingImage src={MyImage} alt="Rotating" />
            </Grid>
            <Grid item md={8} sx={{ alignSelf: "center" }}>
              <GradientText
                variant="h1"
                textAlign={"right"}
                color="white"
                fontWeight={600}
              >
                Why Integral?
              </GradientText>
              <Typography variant="h4" textAlign={"right"} color="white">
                Quite simply, because we dem boyz.
              </Typography>
            </Grid>
          </Grid>
        </Grid>

        <Grid item md={12} p={8} alignSelf={"center"}>
          <Grid container justifyContent="center">
            <Grid item sx={{ maxWidth: "1600px" }}>
              <Slider {...settings}>
                <ServiceCard
                  title="Seasoned Expertise"
                  description="Integral's team comprises seasoned professionals, averaging over a decade of data-centric experience to the table."
                  image={Coffee}
                />

                <ServiceCard
                  title="Cost-effective Solutions"
                  description="An internal analytics team can be a significant expense. By choosing Integral, you save on overheads while increasing your business agility and staying competitive."
                  image={ImageDash}
                />

                <ServiceCard
                  title="Uncompromised Quality"
                  description="Quality is our guiding principle. Our seasoned expertise guarantees top-tier, accurate solutions that make a real difference."
                  image={ImageNerd}
                />

                <ServiceCard
                  title="Building Partnerships"
                  description="We are more than just data experts & programmers. We are your partners, invested in your understanding of your business landscape, facilitating you to make strategic, data-driven decisions."
                  image={ImageTeam}
                />

                <ServiceCard
                  title="Flexibility to Meet Your Needs"
                  description="We cater to projects of any magnitude with adaptable pricing options. Your business needs are our top priority."
                  image={Image2}
                />
              </Slider>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Container
        maxWidth={false}
        sx={{ paddingTop: "4rem", height: "100vh", position: "relative" }}
      >
        <Grid
          container
          spacing={2}
          sx={{
            xs: { paddingLeft: "1rem", paddingRight: "1rem" },
            sm: { paddingLeft: "4rem", paddingRight: "4rem" },
            alignItems: "center",
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <Grid item md={12}>
            <Typography variant="h1" textAlign={"left"}>
              What We Do
            </Typography>
          </Grid>
          <Grid item md={12}>
            <CustomGrid
              headerText="Data Migrations"
              subText="Seamlessly transition your data between systems with our expertise in migrations."
              imgSrc={DataMigration}
            />

            <CustomGrid
              headerText="BI Dashboards"
              subText="Gain deep insights from your data with visually impactful dashboards & insightful metrics."
              imgSrc={Image2}
              imgPosition="right"
            />

            <CustomGrid
              headerText="Web Scraping"
              subText="Efficiently extract data from websites to unlock valuable information."
              imgSrc={Image2}
            />

            <CustomGrid
              headerText="Database Creation"
              subText="Experience tailored database solutions built from the ground up for your business."
              imgSrc={Image2}
              imgPosition="right"
            />
          </Grid>
        </Grid>
      </Container>
      <Footer />
    </>
  );
}

export default HomePage;
