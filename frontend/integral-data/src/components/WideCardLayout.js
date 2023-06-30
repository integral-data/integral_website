import React from "react";
import {
  Grid,
  Typography,
  Stack,
  Box,
} from "@mui/material";

const CustomGrid = ({ headerText, subText, imgSrc, imgPosition }) => {

  return (
    <Box sx={{ maxWidth: "1700px", margin: "0 auto" }}>
      <Grid item md={12} xs={12}>
        <Grid
          container
          md={12}
          spacing={2}
          direction={imgPosition === "right" ? "row" : "row-reverse"}
          justifyContent="space-between"
          alignItems="center" // Align items vertically
        >
          <Grid item xs={12} md={6} justifyContent="center">
            <Typography
              component="h3"
              variant="h4"
              align="center"
              color="white"
              gutterBottom
            >
              {headerText}
            </Typography>
            <Typography variant="h7" align="center" color="white" paragraph>
              {subText}
            </Typography>
            <Stack
              sx={{ pt: 4 }}
              direction="row"
              spacing={2}
              justifyContent="center"
            ></Stack>
          </Grid>
          <Grid item xs={12} md={6} justifyContent="center">
            <Box
              component="img"
              sx={{
                width: { xs: "50%", sm: "40%", md: "60%" },
                mx: "auto",
                maxWidth: "100%",
                borderRadius: "15px", // Make the image circular
                objectFit: "cover",
              }}
              alt="Image description"
              src={imgSrc}
            />
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
};

export default CustomGrid;
