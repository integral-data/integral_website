import React from 'react';
import { Grid, Box, Container, Button } from '@mui/material';
import { Link } from 'react-router-dom';
import Image2 from './images/problem.svg';
import CustomGrid from './components/WideCardLayout';
import SectionDivider from './components/SectionDivider';
import TitleSubtitle from './components/TitleSubtitle';

import ImageCode from './images/code_and_coffee.jpeg';
import ImageNerd from './images/circuit_nerd.jpeg';
import ImageDash from './images/dashboard.jpeg';
import ImageTeam from './images/teamwork.jpeg';


export default function WhatWeDo() {
  return (
    <main>
      <Box sx={{ height: `20px`}} />  {/* Spacer */}
      <Grid container direction="column" spacing={2}>
        <Grid item xs={12}>
          <Container maxWidth="lg">
            <Grid container spacing={2} direction="row">
              <Grid item xs={12} md={12}>
                <TitleSubtitle 
                title="Discover Our Services" 
                subtitle="Drawing from a wealth of expertise across numerous projects, we convert challenges into opportunities."
                  />
                {/* <Box sx={{ display: 'flex', justifyContent: 'center', marginBottom: '2em' }}>
                  <Button variant="contained" component={Link} to="/contact">Contact Us</Button>
                </Box> */}
              </Grid>

              <SectionDivider/>
              <CustomGrid
                  headerText="Data Migrations" 
                  subText="Seamlessly transition your data between systems with our expertise in migrations."
                  imgSrc={ImageCode}
              />
              <SectionDivider/>
              <CustomGrid
                  headerText="BI Dashboards" 
                  subText="Gain deep insights from your data with visually impactful dashboards & insightful metrics."
                  imgSrc={ImageDash}
                  imgPosition='right'
              />
              <SectionDivider/>
              <CustomGrid 
                  headerText="Web Scraping" 
                  subText="Efficiently extract data from websites to unlock valuable information."
                  imgSrc={ImageNerd}
              />
              <SectionDivider/>
              <CustomGrid
                  headerText="Database Creation" 
                  subText="Experience tailored database solutions built from the ground up for your business."
                  imgSrc={ImageTeam}
                  imgPosition='right'
              />
              <SectionDivider/>
            </Grid>
          </Container>
        </Grid>
      </Grid>
    </main>
  );
}
