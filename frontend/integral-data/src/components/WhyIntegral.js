import React from "react";
import { Box, Typography, Grid } from "@mui/material";
import MyImage from "../images/integral_transparent_icon.png";
import Coffee from "../images/code_and_coffee.jpeg";
import Image2 from "../images/problem.svg";
import ImageNerd from "../images/circuit_nerd.jpeg";
import ImageDash from "../images/dashboard.jpeg";
import ImageTeam from "../images/teamwork.jpeg";
import GradientText from "../components/GradientText.js";
import ServiceCard from "../components/ServiceCard.js";
import RotatingLogo from "../components/RotatingLogo.js";
import { useTheme } from "@mui/material";
import { tokens } from "../theme";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useMediaQuery } from "@mui/material";

function WhyIntegral() {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const isXs = useMediaQuery(theme.breakpoints.only("xs"));
  const isSm = useMediaQuery(theme.breakpoints.only("sm"));
  const isMd = useMediaQuery(theme.breakpoints.only("md"));
  const isLg = useMediaQuery(theme.breakpoints.only("lg"));
  const isXl = useMediaQuery(theme.breakpoints.only("xl"));

  const getContainerWidth = () => {
    // You can adjust these pixel values to better suit your needs
    if (isXs) return 300;
    if (isSm) return 400;
    if (isMd) return 900;
    if (isLg) return 1200;
    if (isXl) return 1400;
    return 300; // Default for xs and smaller
  };

  const isSmallScreen = useMediaQuery(theme.breakpoints.down("lg"));

  const settings = {
    infinite: true,
    dots: true,
    dotsClass: "slick-dots",
    speed: 700,
    slidesToShow: isSmallScreen ? 1 : 3, // Show 1 slide on small screens, 3 on larger ones
    rows: 1,
    slidesToScroll: 1,
    vertical: false,
    verticalSwiping: true,
  };

  return (
    <>
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
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Grid
            container
            alignSelf={"center"}
            maxWidth={"1600px"}
            sx={{
              display: "flex",
              justifyContent: { xs: "center", md: "space-between" }, // change here
              alignItems: { xs: "center", md: "flex-start" }, // change here
            }}
          >
            <Grid
              item
              md={6}
              xs={12}
              sx={{
                height: "350px",
                display: "flex",
                justifyContent: { xs: "center", md: "left" },
              }}
            >
              <RotatingLogo src={MyImage} alt="Rotating" />
            </Grid>
            <Grid
              item
              md={6}
              xs={12}
              sx={{
                alignSelf: "center",
                textAlign: { xs: "center", md: "right" }, // change here
              }}
            >
              <GradientText
                variant="h1"
                color1="#FE6B8B"
                color2="#FF8E53"
                text="Why Integral?"
              ></GradientText>
              <Typography variant="h4" color="white">
                Integral transforms complexity into clarity, providing the data
                expertise needed for smarter business decisions
              </Typography>
            </Grid>
          </Grid>
        </Grid>

        <Grid item md={12} sx={{ margin: "auto" }}>
          <Grid
            container
            md={12}
            p={5}
            width={getContainerWidth()}
            rowSpacing={0}
            sx={{
              display: "flex",
              justifyContent: {
                xs: "center",
                sm: "center",
                md: "space-between",
              }, // change here
              alignItems: {
                xs: "center",
                sm: "center",
                md: "flex-start",
              }, // change here

              margin: "auto",
            }}
          >
            <Grid
              item
              md={12}
              width={getContainerWidth()}
              sx={{
                justifyContent: {
                  xs: "center",
                  sm: "center",
                  md: "center",
                },
                alignItems: { xs: "center", sm: "center", md: "center" }, // change here
                margin: "auto",
              }}
            >
              <Box
                sx={{
                  width: getContainerWidth(),
                  maxWidth: "100%",
                  margin: "auto",
                  marginTop: "0px",
                }}
              >
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
                    title="Flexibility"
                    description="We cater to projects of any magnitude with adaptable pricing options. Your business needs are our top priority."
                    image={Image2}
                  />
                </Slider>
              </Box>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
}

export default WhyIntegral;
