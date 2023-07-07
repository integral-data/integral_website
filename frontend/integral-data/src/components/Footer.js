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
          height="60px"
        >
          <Grid item md={4}>
            <Typography variant="h5" fontWeight={700}>
              Integral Data
            </Typography>
            <Typography variant="body2" color="inherit">
              &copy; {new Date().getFullYear()} Integral Data. All rights
              reserved.
            </Typography>
          </Grid>
          <Grid item md={4} xs={12}></Grid>
          <IntegralRotatingLogo height="40px" width="40px" />
        </Grid>
        {/* <Box display="flex" justifyContent="space-between">
          <Box>
            <Typography variant="body1" fontWeight={600}>
              Company
            </Typography>

            <Typography variant="body2">
              <ScrollLink
                to="contact-section"
                spy={true}
                smooth={true}
                duration={500}
                offset={-60}
                color="inherit"
                underline="none"
                activeClass="active"
              >
                Contact
              </ScrollLink>
            </Typography>
          </Box>
          <Box>
            <Typography variant="body1" fontWeight={600}>
              Resources
            </Typography>
            <Typography variant="body2">
              <ScrollOrRouteLink
                to="expertise"
                color="inherit"
                underline="none"
                activeClass="active"
              >
                Skills
              </ScrollOrRouteLink>
            </Typography>

            <Typography variant="body2">
              <ScrollOrRouteLink
                to="testimonials"
                color="inherit"
                underline="none"
                activeClass="active"
              >
                Testimonials
              </ScrollOrRouteLink>
            </Typography>

            <Typography variant="body2">
              <ScrollOrRouteLink
                to="case-studies"
                color="inherit"
                underline="none"
                activeClass="active"
              >
                Case Studies
              </ScrollOrRouteLink>
            </Typography>
          </Box>
        </Box> */}
      </Container>
    </Box>
  );
};

export default Footer;