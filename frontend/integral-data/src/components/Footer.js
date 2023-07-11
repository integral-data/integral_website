import React from "react";
import {
  Box,
  Grid,
  Typography,
  Container,
} from "@mui/material";
import { IntegralRotatingLogo } from "./RotatingLogo";

const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{ backgroundColor: "black", color: "white", py: 2 }}
    >
      <Container maxWidth="xl">
        <Grid
          container
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          mb={1}
          height="40px"
        >
          <Grid item md={8} xs={8}>
            <Typography variant="h5" fontWeight={700}>
              Integral Data
            </Typography>
            <Typography variant="body2" color="inherit">
              &copy; {new Date().getFullYear()} Integral Data. All rights
              reserved.
            </Typography>
          </Grid>
          <Grid item md={4} xs={4} display="flex" justifyContent="flex-end">
            <IntegralRotatingLogo height="40px" width="40px" />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Footer;
