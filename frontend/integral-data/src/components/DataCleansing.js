import React from "react";
import { Box, Typography, Grid, Link } from "@mui/material";
import cleaning from "../images/data_cleaning.png";
import { useTheme } from "@mui/material";
import { useMediaQuery } from "@mui/material";
import { CheckCircle } from "@mui/icons-material";
import { Link as RouterLink } from "react-router-dom";

function DataCleansing() {
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
            md={12}
            m={0}
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
                    Data Cleansing
                  </Typography>
                  {isSmallScreen && (
                    <img
                      src={cleaning}
                      alt="Migration"
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
                  We are experts at cleaning data no matter how complex or messy
                  your data may be.
                </Typography>

                <Typography variant="h4" color="#fbf7f5" mt={2}>
                  Benefits of data cleansing:
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
                      Clean data is essential to drive smart decisions.
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
                      Millions of rows of data? Thousands of columns? We can
                      help.
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
                      Restructuring data can often lead to key insights. We are
                      experts in data structure.
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
                      Bring data scattered across tables & platforms together.
                    </Typography>
                  </Box>
                </Box>
                <Typography variant="h6" color="#fbf7f5" mt={2}>
                  See our data cleansing case study&nbsp;
                  <Link
                    component={RouterLink}
                    to="/case_study_v2/3"
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
                  backgroundImage: `url(${cleaning})`,
                  backgroundSize: "contain",
                  backgroundPosition: "center",
                  backgroundRepeat: "no-repeat",
                }}
              ></Grid>
            )}
          </Grid>
        </Box>
      </Grid>
    </>
  );
}

export default DataCleansing;
