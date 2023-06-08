import React from 'react';
import AppBar from '@mui/material/AppBar';
import Button from '@mui/material/Button';
import CameraIcon from '@mui/icons-material/PhotoCamera';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { Link } from 'react-router-dom';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import BackgroundVideo from './videos/video.mp4';

import Image1 from './images/financial_data.svg';
import Image2 from './images/problem.svg';
import ResponsiveAppBar from './NavBar.tsx';
import {CustomGridLeft, CustomGridRight} from './WideTextPlusImage';

const defaultTheme = createTheme({
  palette: {
    primary: {
      main: '#0a192f',
    },
    secondary: {
      main: '#00bcd4',
    },
    background: {
      default: '#0a192f',
    },
  },
});

export default function WhatWeDo() {
  return (
    <>
      <CssBaseline />
      <Box
        sx={{
          position: 'fixed',
          zIndex: -1,
          minWidth: '100%',
          minHeight: '100%',
          objectFit: 'cover',
        }}
      >
        <video autoPlay loop muted>
          <source src={BackgroundVideo} type="video/mp4" />
        </video>
      </Box>
      <Box
        sx={{
          bgcolor: 'rgba(255, 255, 255, 0.9)',
          pt: 8,
          pb: 6,
        }}
      >
<main>

<Grid container direction="column" spacing={2}>
    <Grid item xs={12}>
      <Container maxWidth="lg">  {/* Adjusted here */}
        <Grid container spacing={2} direction="row">
          <Grid item xs={12} md={12}>
            <Typography
              component="h1"
              variant="h2"
              align="center"
              color="text.primary"
              gutterBottom
            >
              Discover Our Services
            </Typography>
            <Typography
              variant="h6"
              align="center"
              color="text.secondary"
              paragraph
            >
              {/* Experience the depth of our expertise through a diverse range of successful projects. */}
              Drawing from a wealth of expertise across numerous projects, we convert challenges into opportunities.
            </Typography>

            
            <Stack
              sx={{ pt: 2 }}
              direction="row"
              spacing={2}
              justifyContent="center"
            >
              <Button variant="contained" component={Link} to="/contact">Contact Us</Button>
            </Stack>
          </Grid>
          
          <Grid item xs={12} md={6} 
  sx={{ 
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center' 
  }}
>
</Grid>

<Box sx={{ height: "100px" }} />  {/* Spacer */}
<CustomGridRight 
    headerText="Data Migrations" 
    subText="Seamlessly transition your data between systems with our expertise in migrations."
    imgSrc={Image2}
/>
<Box sx={{ height: "300px" }} />  {/* Spacer */}
<CustomGridLeft
    headerText="BI Dashboards" 
    subText="Gain deep insights from your data with visually impactful dashboards & insightful metrics."
    imgSrc={Image2}
/>
<Box sx={{ height: "300px" }} />  {/* Spacer */}

<CustomGridRight 
    headerText="Web Scraping" 
    subText="Efficiently extract data from websites to unlock valuable information."
    imgSrc={Image2}
/>
<Box sx={{ height: "300px" }} />  {/* Spacer */}

<CustomGridLeft
    headerText="Database Creation" 
    subText="Experience tailored database solutions built from the ground up for your business."
    imgSrc={Image2}
/>

        </Grid>
      </Container>
    </Grid>
</Grid>

</main>
      </Box>
    </>
  );
}