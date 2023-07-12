import React from "react";
import { Grid, Typography, Box, List, ListItem } from "@mui/material";
import { useTheme } from "@mui/material";
import { tokens } from "../theme";
import GradientText from "./GradientText";
import { useMediaQuery } from "@mui/material";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Skills() {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("lg"));
  const sections = [
    {
      title: "Coding Languages",
      description:
        "We work with a wide variety of programming languages and frameworks.",
      skills: ["Python", "JavaScript", "React", "SQL", "VBA", "Django","Flask"],
    },
    {
      title: "Visualization Software",
      description: "We can leverage a variety of tools to visualize your data.",
      skills: [
        "Power BI",
        "Tableau",
        "Google Data Studio",
        "Plotly",
        "Matplotlib",
      ],
    },
    {
      title: "Other Tech Infrastructure",
      description:
        "We have experience working in all of the following tech.",
      skills: ["Snowflake", "AWS", "Azure", "Postgres", "GitHub", "CLI"],
    },
    {
      title: "Additional Expertise",
      description: "We are also proficient in the following areas.",
      skills: ["Website Creation", "Web Scraping","APIs", "XML", "Pandas", "Jira", "Confluence"],
    },
    {
      title: "CRMs",
      description: "We have experience working with several CRMs",
      skills: ["Salesforce", "ZoHo", "e123"],
    },
  ];

  const settings = {
    infinite: true,
    dots: true,
    dotsClass: "slick-dots",
    speed: 700,
    slidesToShow: isSmallScreen ? 1 : 3, // Show 1 slide on small screens, 3 on larger ones
    rows: 1,
    slidesToScroll: 1,
    vertical: false,
    verticalSwiping: true,
  };

  return (
    <Grid container sx={{ backgroundImage: theme.homeGradient2 }}>
      <Box maxWidth="1600px" width="100%" margin="auto" display={"flex"}>
        <Grid container spacing={5} p={5} rowGap={1} mb={5}>
          <Grid item md={12} sm={12} xs={12}>
            <GradientText
              variant="h1"
              fontWeight={600}
              text="Expertise"
              color1="rgba(245,177,97,1)"
              color2="rgba(236,54,110,1)"
            />
            <Typography variant="h4" color="white">
              Discover Integral's extensive expertise in all things
              data-related, spanning ETL, analysis, database design, and more.
            </Typography>
          </Grid>
          <Grid item md={12} xs={12}>
            <Slider {...settings}>
              {sections.map((section, index) => (
                <Grid
                  item
                  xs={12}
                  sm={12}
                  md={12}
                  m={1}
                  mb={2}
                  p={2}
                  key={index}
                >
                  <Box
                    sx={{
                      background: theme.borderGradient, // gradient for the border
                      borderRadius: "10px",
                      p: "2px", // this acts as the border width
                      height: "340px",
                      // display: "flex", // make sure the child box stretches
                    }}
                  >
                    <Box
                      sx={{
                        background: theme.gradient, // gradient for the inner box
                        borderRadius: "10px",
                        width: "100%", // make sure this box fills the parent
                        height: "100%", // make sure this box fills the parent
                      }}
                    >
                      <Box sx={{ p: 2 }}>
                        <Typography
                          variant="h4"
                          color="white"
                          fontWeight={600}
                          gutterBottom
                        >
                          {section.title}
                        </Typography>
                        <Typography variant="h5" color="white" gutterBottom>
                          {section.description}
                        </Typography>
                        <List dense>
                          {section.skills.map((skill, i) => (
                            <ListItem key={i}>
                              <Typography
                                variant="body1"
                                color={colors.greenAccent[500]}
                              >
                                {skill}
                              </Typography>
                            </ListItem>
                          ))}
                        </List>
                      </Box>
                    </Box>
                  </Box>
                </Grid>
              ))}
            </Slider>
          </Grid>
        </Grid>
      </Box>
    </Grid>
  );
}

export default Skills;
