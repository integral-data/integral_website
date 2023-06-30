import React from "react";
import { Box, Grid, Typography, Avatar, Link } from "@mui/material";
import google_logo from "../images/logo_google.png";
import logo_linkedin from "../images/logo_linkedin.png";
import google_headshot from "../images/google_headshot.png";
import quote from "../images/quote.png";
const Testimonial = () => {
  const testimonials = [
    {
      id: 1,
      logo: google_logo,
      quote:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed hendrerit, urna in fermentum lobortis, sapien lorem pharetra mi, vel congue arcu dolor non nibh.",
      avatar: google_headshot,
      name: "John Doe",
      title: "CEO, Company XYZ",
      linkedin: "https://www.linkedin.com/in/johndoe",
    },
    // Add more testimonials here
  ];

  return (
    <Grid
      sx={{
        background: "white",
        borderRadius: "10px",
        boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.9)",
      }}
      p={2}
    >
      {testimonials.map((testimonial) => (
        <Grid key={testimonial.id} mb={4}>
          <Grid alignItems="center" mb={2}>
            <Grid item md={12} mb={3}>
              <img
                src={testimonial.logo}
                alt="Company Logo"
                width={60}
                height={60}
              />
            </Grid>
            <Grid ml={2} mb={1}>
              <img src={quote} alt="Quote" width={20} height={20} />
            </Grid>
            <Typography variant="body1" ml={2}>
              {testimonial.quote}
            </Typography>
          </Grid>
          <Grid display="flex" alignItems="center">
            <Avatar
              src={testimonial.avatar}
              alt="Person Avatar"
              sx={{ height: "70px", width: "70px" }}
            />
            <Box ml={2}>
              <Grid container alignItems="center">
                <Typography variant="h4">{testimonial.name}</Typography>
                {testimonial.linkedin && (
                  <Link
                    href={testimonial.linkedin}
                    target="_blank"
                    rel="noopener"
                  >
                    <Avatar
                      src={logo_linkedin}
                      alt="LinkedIn Avatar"
                      sx={{ height: "20px", width: "20px", ml: 1 }}
                    />
                  </Link>
                )}
              </Grid>
              <Typography variant="subtitle2">{testimonial.title}</Typography>
            </Box>
          </Grid>
        </Grid>
      ))}
    </Grid>
  );
};

export default Testimonial;
