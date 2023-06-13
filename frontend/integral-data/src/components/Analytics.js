import React from "react";
import { Box, Typography, Grid, Link } from "@mui/material";
import dashboard from "../images/dashboard_transparent.png";
import { useTheme } from "@mui/material";
import { useMediaQuery } from "@mui/material";
import { CheckCircle } from "@mui/icons-material";

function Analytics() {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <>
      <Grid
        container
        xs={12}
        sm={12}
        md={12}
        sx={{
          background: `linear-gradient(145deg, #CB356B, #BD3F32)`,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Box maxWidth="1600px" width="100%" margin="auto">
          <Grid
            container
            alignSelf={"center"}
            md={12}
            m={0}
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              maxWidth: "1600px",
            }}
          >
            {!isSmallScreen && (
              <Grid
                item
                md={4}
                sm={12}
                xs={12}
                sx={{
                  height: isSmallScreen ? "200px" : "200px",
                  backgroundImage: `url(${dashboard})`,
                  backgroundSize: "contain",
                  backgroundPosition: "left",
                  backgroundRepeat: "no-repeat",
                }}
              ></Grid>
            )}

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
                    Analytics
                  </Typography>
                  {isSmallScreen && (
                    <img
                      src={dashboard}
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
                  Make sense of your data, visualize insights, and design
                  impactful metrics and KPIs. Build interactive dashboards that
                  empower data-driven decision-making.
                </Typography>

                <Typography variant="h4" color="#fbf7f5" mt={2}>
                  Our Analytics Offering:
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
                    <Typography
                      variant="h5"
                      sx={{ alignSelf: "center", marginTop: "5px" }}
                    >
                      Advanced data analysis and modeling
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
                    <Typography
                      variant="h5"
                      sx={{ alignSelf: "center", marginTop: "5px" }}
                    >
                      Customized metric and KPI design
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
                    <Typography
                      variant="h5"
                      sx={{ alignSelf: "center", marginTop: "5px" }}
                    >
                      Interactive dashboard development
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
                    <CheckCircle
                      sx={{ fontSize: 22, mr: 1, alignSelf: "center" }}
                    />
                    <Typography
                      variant="h5"
                      sx={{ alignSelf: "center", marginTop: "5px" }}
                    >
                      Data visualization and storytelling
                    </Typography>
                  </Box>
                </Box>

                <Typography variant="h6" color="#fbf7f5" mt={2}>
                  See our analytics case study&nbsp;
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

export default Analytics;
