import React from "react";
import { Box, Typography, Grid } from "@mui/material";
import GradientText from "./GradientText";
import { useTheme } from "@mui/material";
import { useMediaQuery } from "@mui/material";
import { tokens } from "../theme";

function Divider({ title, subtitle, id }) {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
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

  return (
    <div id={id}>
      <Box
        sx={{
          background:
            "linear-gradient(69.9deg, rgb(76, 79, 106) 3.2%, rgb(118, 124, 163) 97.6%)",
          color: "white",
          py: 5,
        }}
      >
        <Grid container justifyContent="center">
          <Grid item xs={12} md={getContainerWidth()}>
            <Box textAlign="center" mx={2}>
              <GradientText
                variant="h1"
                color1="rgba(245,177,97,1)"
                color2="rgba(236,54,110,1)"
                fontWeight={600}
                text={title}
              />
              <Typography variant="h4">{subtitle}</Typography>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
}

export default Divider;
