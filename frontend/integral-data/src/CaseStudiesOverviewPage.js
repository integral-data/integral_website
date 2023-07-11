import React from "react";
import { Grid, Container, Typography, Box } from "@mui/material";
import CaseStudyCard from "./components/CaseStudyCard";
import { caseStudiesData } from "./data/caseStudiesData";
import GradientText from "./components/GradientText";

export default function CaseStudiesPage() {
  return (
    <Container>


<Box display="flex" flexDirection="column" alignItems="center" mb={4}>
  <GradientText
    variant="h1"
    color1="rgba(245,177,97,1)"
    color2="rgba(236,54,110,1)"
    fontWeight={600}
    text="Case Studies"
  >
  </GradientText>
  <Typography variant="h4" color="white" align="center">
    From Problem to Solution: Highlighting Our Client Projects
  </Typography>
</Box>


      <Grid container spacing={6} mb={3}>
        {caseStudiesData.map((caseStudy) => (
          <Grid item xs={12} sm={6} md={4} key={caseStudy.id}>
            <CaseStudyCard study={caseStudy} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}
