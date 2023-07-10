import React from "react";
import { Box, Typography, Grid } from "@mui/material";
import Coffee from "../images/code_and_coffee.jpeg";
import ImageNerd from "../images/circuit_nerd.jpeg";
import ImageDash from "../images/dashboard.jpeg";
import ImageTeam from "../images/teamwork.jpeg";
import ImageStock from "../images/stock_ticker.png"
import ImageAdapt from "../images/adaptable.jpg"
import ImageIndustry from "../images/cross-industry.jpg"
import GradientText from "../components/GradientText.js";
import ServiceCard from "../components/ServiceCard.js";
import { IntegralRotatingLogo } from "./RotatingLogo";
import { useTheme } from "@mui/material";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useMediaQuery } from "@mui/material";

function WhyIntegral() {
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
    slidesToScroll: 1,
    vertical: false,
    verticalSwiping: true,
  };

  return (
    <div id="why-integral">
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
              md={8}
              xs={12}
              sx={{
                alignSelf: "center",
                textAlign: { xs: "left", md: "left" }, // change here
              }}
            >
              <GradientText
                variant="h1"
                color1="rgba(245,177,97,1)"
                color2="rgba(236,54,110,1)"
                fontWeight={600}
                text="Why Integral?"
              ></GradientText>
              <Typography variant="h4" color="white">
                Integral transforms complexity into clarity, providing the data
                expertise needed for smarter business decisions
              </Typography>
            </Grid>
            <Grid
              item
              md={4}
              xs={4}
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "right",
                maxHeight: "100%",
              }}
            >
              <Box
                sx={{
                  width: "100%",
                  maxWidth: "100%",
                  height: "100%",
                  maxHeight: "100%",
                  display: "flex",
                  justifyContent: { xs: "center", md: "right" },

                  alignItems: "center",
                }}
              >
                <IntegralRotatingLogo />
              </Box>
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
                    title="Fortune 500 Experience"
                    description="Our team brings first-hand experience of deploying robust, production-grade models within globally recognized Fortune 500 institutions. With us, you get proven methodologies and practices that have been tried and tested in challenging real-world scenarios."
                    image={ImageStock}
                  />

                <ServiceCard
                    title="Cross-Sector Expertise"
                    description="Our diverse experience spans digital marketing to banking, credit cards, wealth management, auto loans, anti-money laundering, fraud detection, talent acquisition, health sharing, and fantasy sports. This broad experience equips us with a unique understanding and adaptability, ensuring that we deliver tailored and effective solutions no matter the industry or challenge."

                    image={ImageIndustry}
                  />
                  <ServiceCard
                    title="Long-Standing Industry Veterans"
                    description="The Integral team brings an unparalleled depth of expertise to your business, averaging 10+ years of data-centric experience per consultant. This deep expertise allows us not only to understand your needs, but also to anticipate them. With our team, you're choosing reliable, efficient, and high-quality solutions, delivered by proven professionals who have spent years honing their skills."
                    image={Coffee}
                  />

                  <ServiceCard
                    title="Cost-Effective Solutions"
                    description="By choosing Integral, not only do you reduce the overheads of an internal analytics team, but you also gain immediate access to experienced consultants committed to tackling and resolving your business challenges, providing you with an unparalleled competitive edge."
                    image={ImageDash}
                  />

                  <ServiceCard
                    title="Uncompromised Quality"
                    description="Our emphasis on quality is more than a promise; it's a commitment backed by years of profound data expertise. We don't just deliver solutions; we provide value by producing accurate, superior solutions that generate meaningful outcomes. With us, you have a trusted partner who is dedicated to your business's success."
                    image={ImageNerd}
                  />

                  <ServiceCard
                    title="Building Partnerships"
                    description="We are not merely data experts and programmers; we consider ourselves partners, fully committed to helping you understand your business landscape and empowering you to make strategic, data-driven decisions."
                    image={ImageTeam}
                  />

                  <ServiceCard
                    title="Flexibility"
                    description="We cater to projects of any magnitude with adaptable pricing options. Your business needs are our top priority. We can help you solve small data analytics problems or tackle large projects like data migrations or building a reporting suite."
                    image={ImageAdapt}
                  />
                </Slider>
              </Box>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}

export default WhyIntegral;
