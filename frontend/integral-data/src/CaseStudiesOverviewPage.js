import React from 'react';
import { Grid, Container } from '@mui/material';
import { CaseStudyOverview } from './components/CaseStudy';
import { caseStudiesData } from './data/caseStudiesData';
import TitleSubtitle from './components/TitleSubtitle';

export default function CaseStudiesPage() {
  return (
    <Container>
       <TitleSubtitle 
                title="Case Studies" 
                subtitle="From Problem to Solution: Highlighting Our Client Projects"
                color="white"
                  />

      <Grid container spacing={3}>
        {caseStudiesData.map(caseStudy => (
          <Grid item xs={12} sm={6} md={4} key={caseStudy.id}>
            <CaseStudyOverview study={caseStudy} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}