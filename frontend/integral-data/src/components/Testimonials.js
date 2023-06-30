import React from "react";
import { Box, Typography, Grid } from "@mui/material";
import Testimonial from "./Testimonial.js";
import GradientText from "./GradientText.js";
import { caseStudiesData } from "../data/caseStudiesData";
import { useTheme } from "@mui/material";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useMediaQuery } from "@mui/material";

function Testimonials() {
  const theme = useTheme();
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
    slidesToScroll: isSmallScreen ? 1 : 3,
    vertical: false,
    verticalSwiping: true,
  };

  return (
    <div id="case-studies">
      <Grid
        container
        xs={12}
        sm={12}
        md={12}
        display={"flex"}
        flexDirection={"row"}
        sx={{
          backgroundImage: theme.gradient,
          position: "relative",
        }}
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
              justifyContent: { xs: "center", md: "space-between" },
              alignItems: { xs: "center", md: "flex-start" },
              position: "relative",
              zIndex: 1,
            }}
          >
            <Grid
              item
              md={12}
              xs={8}
              sx={{
                alignSelf: "center",
                textAlign: { xs: "left", md: "left" }, // change here
              }}
            >
              <GradientText
                variant="h2"
                fontWeight={600}
                text="Client Testimonials"
              ></GradientText>
              <Typography variant="h4" color="white">
                Discover why clients love working with us. Our flexible and
                collaborative approach makes the data journey smooth and
                effortless. Hear directly from our satisfied partners as they
                endorse our expertise and exceptional service.
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
              },
              alignItems: {
                xs: "center",
                sm: "center",
                md: "flex-start",
              },

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
                }}
              >
                <Slider {...settings}>
                  {caseStudiesData.map((caseStudy) => (
                    <Grid container md={12} p={2}>
                      <Testimonial />
                    </Grid>
                  ))}
                </Slider>
              </Box>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}

export default Testimonials;
