import React from "react";
import { Box, Typography, Grid } from "@mui/material";
import GradientText from "./GradientText.js";
import CaseStudyCard from "./CaseStudyCard.js";
import { caseStudiesData } from "../data/caseStudiesData";
import { useTheme } from "@mui/material";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useMediaQuery } from "@mui/material";

function CaseStudies() {
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
          background: theme.homeGradient2,
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
                text="Success Stories"
              ></GradientText>
              <Typography variant="h4" color="white">
                Explore our success stories, showcasing Integral's exceptional
                work with clients from various industries. From healthcare to
                finance and retail, we've tackled diverse data challenges with
                expertise. Get inspired by our past accomplishments and discover
                how we can empower your business with data-driven solutions.
                We're always eager to embark on new projects that drive
                innovation and growth.
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
                      <Grid item md={12} key={caseStudy.id}>
                        <CaseStudyCard study={caseStudy} />
                      </Grid>
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

export default CaseStudies;