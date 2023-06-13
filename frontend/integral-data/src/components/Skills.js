import React from "react";
import { Grid, Typography, Box, List, ListItem } from "@mui/material";
import { useTheme } from "@mui/material";
import { tokens } from "../theme";
import GradientText from "./GradientText";
function Skills() {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const sections = [
    {
      title: "Coding Languages",
      description:
        "We work with a wide variety of programming languages and frameworks.",
      skills: ["Python", "JavaScript", "React", "SQL", "VBA"],
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
      title: "CRMs",
      description: "We have experience working with several CRMs",
      skills: ["Salesforce", "ZoHo", "e123"],
    },
    {
      title: "Additional Expertise",
      description: "We are also proficient in the following areas.",
      skills: ["APIs", "XML", "JSON"],
    },
  ];

  return (
    <Grid container sx={{ backgroundImage: theme.gradient }}>
      <Box maxWidth="1600px" width="100%" margin="auto" display={"flex"}>
        <Grid container spacing={5} p={5} rowGap={5} mb={5}>
          <Grid item md={12} sm={12}>
            <GradientText
              variant="h2"
              fontWeight={700}
              text="Expertise"
              color1={colors.greenAccent[500]}
              color2={colors.greenAccent[600]}
            />
          </Grid>
          {sections.map((section, index) => (
            <Grid item xs={12} sm={6} md={3} key={index}>
              <Box
                sx={{
                  background: theme.borderGradient, // gradient for the border
                  borderRadius: "10px",
                  p: "2px", // this acts as the border width
                  height: "100%",
                  display: "flex", // make sure the child box stretches
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
        </Grid>
      </Box>
    </Grid>
  );
}

export default Skills;
