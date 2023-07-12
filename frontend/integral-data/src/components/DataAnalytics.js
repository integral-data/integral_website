import React, { useState } from "react";
import { Box, Typography, Grid, Link } from "@mui/material";
import scrape from "../images/scrape_transparent.png";
import { useTheme } from "@mui/material";
import { useMediaQuery } from "@mui/material";
import { CheckCircle } from "@mui/icons-material";
import { Link as RouterLink } from "react-router-dom";
import GradientText from "./GradientText";
import { Button } from "./ButtonElements";
import { tokens } from "../theme";
import { ArrowForward, ArrowRight } from "@mui/icons-material";
import ScrollOrRouteLink from "./ScrollOrRouteLink";
import { ButtonIntegral } from "./ButtonElements";

function Scraping() {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("md"));

  const [hover, setHover] = useState(false);

  const onHover = () => {
    setHover(!hover);
  };
  const colors = tokens(theme.palette.mode);

  return (
    <>
      <Grid
        container
        xs={12}
        sm={12}
        md={12}
        sx={{
          background: `linear-gradient(145deg, rgba(9,29,85,1) 0.2%, rgba(0,0,0,1) 100.2%)`,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Box maxWidth="1600px" width="100%" margin="auto">
          <Grid
            container
            alignSelf={"center"}
            maxWidth={"1600px"}
            md={12}
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              maxWidth: "1600px",
            }}
          >
            <Grid item md={8} sm={12} xs={12}>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "left",
                  p: 5,
                }}
              >
                <Box sx={{ display: "flex", alignItems: "center" }}>
                  <Typography variant="h2" fontWeight={600} color="white">
                    Data Analytics
                  </Typography>
                  {isSmallScreen && (
                    <img
                      src={scrape}
                      alt="Dashboard"
                      height="40px"
                      style={{ marginLeft: "15px" }}
                    />
                  )}
                </Box>
                <Box
                  sx={{
                    borderBottom: `4px solid white`,
                    width: "100px",
                    my: 2,
                  }}
                />
                <Typography variant="h4" color="#fbf7f5">
                Unlock the power of your data through our wide-ranging analytics services.
                </Typography>

                <Typography variant="h4" color="#fbf7f5" mt={2}>
                  Benefits of Data Analytics:
                </Typography>
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    mt: 1,
                  }}
                >
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      color: "#fbf7f5",
                      mt: 1,
                    }}
                  >
                    <CheckCircle sx={{ fontSize: 22, mr: 1 }} />
                    <Typography variant="h5">
                    Uncover hidden patterns and insights in your data to fuel strategic business decisions.
                    </Typography>
                  </Box>
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      color: "#fbf7f5",
                      mt: 1,
                    }}
                  >
                    <CheckCircle sx={{ fontSize: 22, mr: 1 }} />
                    <Typography variant="h5">
                    Use analytics to optimize your operations, streamline processes, and improve productivity.
                    </Typography>
                  </Box>
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      color: "#fbf7f5",
                      mt: 1,
                    }}
                  >
                    <CheckCircle sx={{ fontSize: 22, mr: 1 }} />
                    <Typography variant="h5">
                      Streamline data-driven decision-making processes
                    </Typography>
                  </Box>
                </Box>
                <Typography variant="h6" color="#fbf7f5" mt={2}>
                  See our data analytics case study&nbsp;
                  <Link
                    component={RouterLink}
                    to="/case_study_v2/10"
                    color="inherit"
                  >
                    here
                  </Link>
                  .
                </Typography>
              </Box>

              




            </Grid>
            {!isSmallScreen && (
              <Grid
                item
                md={4}
                sm={12}
                xs={12}
                sx={{
                  height: isSmallScreen ? "200px" : "200px",
                  backgroundImage: `url(${scrape})`,
                  backgroundSize: "contain",
                  backgroundPosition: "left",
                  backgroundRepeat: "no-repeat",
                }}
              ></Grid>
            )}
          </Grid>
          <Box textAlign="center" mt={"60px"} mb={"60px"}>
                  <GradientText
                    variant="h4"
                    color1={colors.blueAccent[100]}
                    color2={colors.blueAccent[100]}
                    text="Don't see exactly what you are looking for? No problem - please reach out to us and we'll see if we can assist you."
                  />
                <Box
                display="flex"
                justifyContent="center"
                alignItems="center"
                style={{ paddingTop: "30px" }}
              >

               <ScrollOrRouteLink to="contact-us"> 
                <ButtonIntegral
                  // to="/#contact-us"
                  onMouseEnter={onHover}
                  onMouseLeave={onHover}
                  primary="true"
                  dark="true"
                  smooth={true}
                  duration={500}
                  spy={true}
                  exact="true"
                  offset={-80}
                  sx={{ maxWidth: "200px" }}
                  text="Contact Us"
                >
                </ButtonIntegral>
                </ScrollOrRouteLink>
                
              </Box>
              </Box>
        </Box>
      </Grid>
    </>
  );
}

export default Scraping;
