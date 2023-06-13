import React from 'react';
import {Box, Container, Grid } from '@mui/material';
import { Button } from '@mui/material';
import { Link } from 'react-router-dom';
import Image2 from './images/problem.svg';
import ImageCode from './images/code_and_coffee.jpeg';
import ImageNerd from './images/circuit_nerd.jpeg';
import ImageDash from './images/dashboard.jpeg';
import ImageTeam from './images/teamwork.jpeg';

import CustomGrid from './components/WideCardLayout';
import SectionDivider from './components/SectionDivider';
import TitleSubtitle from './components/TitleSubtitle';

const SPACER_HEIGHT = 20; // Specify your desired constant value here

export default function WhyIntegral() {
  return (
        <main>
          <Box sx={{ height: `1em` }} />  {/* Spacer */}
          <Grid container direction="column" spacing={2}>
            <Grid item xs={12}>
              <Container maxWidth="lg">
                <Grid container spacing={2} direction="row">

                <Grid item xs={12} md={12}>
                <TitleSubtitle 
                title="Integral Skillset" 
                subtitle="Here is a brief overview of the technology we leverage & experience we have."
                color="white"
                  />
              </Grid>

              <Box sx={{ height: `10em` }} />  {/* Spacer */}
                  <CustomGrid 
                  headerText="Seasoned Expertise" 
                  subText="Integral's team comprises seasoned professionals, averaging over a decade of data-centric experience to the table."
                  imgSrc={ImageCode}
                  imgPosition='right'
              />

              <SectionDivider />

              <CustomGrid
                  headerText="Cost-effective Solutions" 
                  subText="An internal analytics team can be a significant expense. By choosing Integral, you save on overheads while increasing your business agility and staying competitive."
                  imgSrc={ImageDash}
              />

              <SectionDivider />

              <CustomGrid 
                  headerText="Uncompromised Quality" 
                  subText="Quality is our guiding principle. Our seasoned expertise guarantees top-tier, accurate solutions that make a real difference."
                  imgSrc={ImageNerd}
                  imgPosition='right'
              />
              <SectionDivider />

              <CustomGrid
                  headerText="Building Partnerships" 
                  subText="We are more than just data experts & programmers. We are your partners, invested in your understanding of your business landscape, facilitating you to make strategic, data-driven decisions."
                  imgSrc={ImageTeam}
              />
              <SectionDivider />

              <CustomGrid 
                  headerText="Flexibility to Meet Your Needs" 
                  subText="We cater to projects of any magnitude with adaptable pricing options. Your business needs are our top priority."
                  imgSrc={Image2}
                  imgPosition='right'
              />
                </Grid>
              </Container>
            </Grid>
            <Box sx={{ height: `${SPACER_HEIGHT}px` }} />  {/* Spacer */}
          </Grid>
        </main>
  );
}
