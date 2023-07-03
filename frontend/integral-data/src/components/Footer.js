import React from "react";
import { Box, Typography, Link, Container, IconButton } from "@mui/material";
import { IntegralRotatingLogo } from "./RotatingLogo";

const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{ backgroundColor: "black", color: "white", py: 6 }}
    >
      <Container maxWidth="xl">
        <Box
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          mb={3}
        >
          <Box>
            <Typography variant="h2" fontWeight={700}>
              Integral Data
            </Typography>
          </Box>
          <IntegralRotatingLogo size="small" />
        </Box>
        <Box display="flex" justifyContent="space-between">
          <Box>
            <Typography variant="h5" fontWeight={600}>
              Company
            </Typography>
            <Link href="/about" color="inherit" underline="none">
              <Typography variant="body1">About Us</Typography>
            </Link>

            <Link href="/contact" color="inherit" underline="none">
              <Typography variant="body1">Contact</Typography>
            </Link>
          </Box>
          <Box>
            <Typography variant="h5" fontWeight={600}>
              Resources
            </Typography>
            <Link href="/skills" color="inherit" underline="none">
              <Typography variant="body1">Skills</Typography>
            </Link>

            <Link href="/testimonials" color="inherit" underline="none">
              <Typography variant="body1">Testimonials</Typography>
            </Link>

            <Link href="/support" color="inherit" underline="none">
              <Typography variant="body1">Case Studies</Typography>
            </Link>
          </Box>
        </Box>
        <Box mt={3}>
          <Typography variant="body2" color="inherit">
            &copy; {new Date().getFullYear()} Integral Data. All rights
            reserved.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
