import React from "react";
import { Box, Typography, Grid, Link } from "@mui/material";
import migration from "../images/migration_transparent.png";
import { useTheme } from "@mui/material";
import { useMediaQuery } from "@mui/material";
import { CheckCircle } from "@mui/icons-material";
import { Link as RouterLink } from 'react-router-dom';

function Migrations() {
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
                    Data Migrations
                  </Typography>
                  {isSmallScreen && (
                    <img
                      src={migration}
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
                  Seamlessly transition your data between systems with our
                  expertise in migrations.
                </Typography>

                <Typography variant="h4" color="#fbf7f5" mt={2}>
                  Our Migration Process:
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
                      Comprehensive data exploration of your data in existing platform
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
                      Analysis of the new platform's architecture 
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
                      Thorough data cleaning, transformation, formatting, and loading 
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
                      Verification and validation to ensure data accuracy and integrity 
                    </Typography>
                  </Box>
                </Box>
                <Typography variant="h6" color="#fbf7f5" mt={2}>
  See our data migration case study&nbsp;
  <Link component={RouterLink} to="/case_study_v2/1" color="inherit">
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
                  backgroundImage: `url(${migration})`,
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

export default Migrations;
