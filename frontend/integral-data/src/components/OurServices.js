import React from "react";
import { Box, Grid } from "@mui/material";
import GradientText from "./GradientText";
import services from "../images/services.png";
import { useTheme } from "@mui/material";
import { useMediaQuery } from "@mui/material";
import { tokens } from "../theme";

function OurServices() {
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
          background: "black",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "300px",
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
                <Box textAlign="left">
                  <GradientText
                    variant="h1"
                    color1="rgba(245,177,97,1)"
                    color2="rgba(236,54,110,1)"
                    fontWeight={600}
                    text="Our Services"
                  />
                  <GradientText
                    variant="h4"
                    color1={colors.blueAccent[100]}
                    color2={colors.blueAccent[400]}
                    text="Arming your business with our expertise."
                  />
                </Box>
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
                  backgroundImage: `url(${services})`,
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

export default OurServices;
