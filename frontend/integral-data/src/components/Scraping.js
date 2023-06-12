import React from "react";
import { Box, Typography, Grid, Link } from "@mui/material";
import GradientText from "../components/GradientText.js";
import migration from "../images/scrape_transparent.png";
import { useTheme } from "@mui/material";
import { tokens } from "../theme";
import { useMediaQuery } from "@mui/material";
import { CheckCircle } from "@mui/icons-material";

function Scraping() {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <>
      <Grid
        container
        xs={12}
        sm={12}
        md={12}
        sx={{
          background: `linear-gradient(145deg, #780206, #061161)`,
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
            m={5}
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              maxWidth: "1600px",
            }}
          >
            <Grid
              item
              md={4}
              sm={12}
              xs={12}
              sx={{
                height: isSmallScreen ? "200px" : "200px",
                backgroundImage: `url(${migration})`,
                backgroundSize: "contain",
                backgroundPosition: "left",
                backgroundRepeat: "no-repeat",
              }}
            ></Grid>
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
                <Typography variant="h2" fontWeight={600} color="white">
                  Web Scraping
                </Typography>
                <Box
                  sx={{
                    borderBottom: `4px solid white`,
                    width: "100px",
                    my: 2,
                  }}
                />
                <Typography variant="h4" color="#fbf7f5">
                  Unlock valuable data and automate processes through web
                  scraping.
                </Typography>

                <Typography variant="h4" color="#fbf7f5" mt={2}>
                  Benefits of Web Scraping:
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
                      Eliminate manual data entry and repetitive tasks
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
                      Access and extract data from various websites and online
                      sources
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
                      Gather competitive intelligence and market insights
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
                  See our web scraping case study&nbsp;
                  <Link href="#" color="inherit">
                    here
                  </Link>
                  .
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Grid>
    </>
  );
}

export default Scraping;
