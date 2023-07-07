import React from "react";
import { Box, Typography, Grid, Link } from "@mui/material";
import migration from "../images/database_transparent.png";
import { useTheme } from "@mui/material";
import { useMediaQuery } from "@mui/material";
import { CheckCircle } from "@mui/icons-material";
import { Link as RouterLink } from 'react-router-dom';

function DatabaseCreation() {
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
          background: theme.homeGradient1,
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
                    Database Creation
                  </Typography>
                  {isSmallScreen && (
                    <img
                      src={migration}
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
                  Empower your data management with custom database solutions.
                </Typography>

                <Typography variant="h4" color="#fbf7f5" mt={2}>
                  Benefits of Database Creation:
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
                      Centralize and organize your data in a scalable and
                      reliable manner
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
                      Improve data accessibility and retrieval for efficient
                      decision-making
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
                      Tailor-made solutions to fit your specific business needs
                      and processes
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
                      Enhance data security and integrity with robust database
                      systems
                    </Typography>
                  </Box>
                </Box>

                <Typography variant="h6" color="#fbf7f5" mt={2}>
  See our custom database case study&nbsp;
  <Link component={RouterLink} to="/case_study_v2/17" color="inherit">
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

export default DatabaseCreation;
