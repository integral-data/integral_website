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
import { Divider } from '@mui/material';

import BackgroundVideo from './videos/video.mp4';
import Image1 from './images/financial_data.svg';
import Image2 from './images/problem.svg';
import ImageCode from './images/code_and_coffee.jpeg';
import ImageNerd from './images/circuit_nerd.jpeg';
import ImageDash from './images/dashboard.jpeg';
import ImageTeam from './images/teamwork.jpeg';

import {CustomGridLeft, CustomGridRight} from './WideTextPlusImage';
import SectionDivider from './SectionDivider';

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

const SPACER_HEIGHT = 50; // Specify your desired constant value here

export default function WhyIntegral() {
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
              Experience the Integral Advantage
            </Typography>
            <Typography
              variant="h6"
              align="center"
              color="text.secondary"
              paragraph
            >
              We empower your business to leverage data and analytics, driving informed decisions and cost-effective solutions.
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
        </Grid>
      </Container>
    </Grid>
    <Box sx={{ height: `${SPACER_HEIGHT}px` }} />  {/* Spacer */}

<CustomGridRight 
    headerText="Seasoned Expertise" 
    subText="Integral's team comprises seasoned professionals, averaging over a decade of data-centric experience to the table."
    imgSrc={ImageCode}
/>

<SectionDivider />

<CustomGridLeft
    headerText="Cost-effective Solutions" 
    subText="An internal analytics team can be a significant expense. By choosing Integral, you save on overheads while increasing your business agility and staying competitive."
    imgSrc={ImageDash}
/>
<SectionDivider />

<CustomGridRight 
    headerText="Uncompromised Quality" 
    subText="Quality is our guiding principle. Our seasoned expertise guarantees top-tier, accurate solutions that make a real difference."
    imgSrc={ImageNerd}
/>
<SectionDivider />

<CustomGridLeft
    headerText="Building Partnerships" 
    subText="We are more than just data experts & programmers. We are your partners, invested in your understanding of your business landscape, facilitating you to make strategic, data-driven decisions."
    imgSrc={ImageTeam}
/>
<SectionDivider />

<CustomGridRight 
    headerText="Flexibility to Meet Your Needs" 
    subText="We cater to projects of any magnitude with adaptable pricing options. Your business needs are our top priority."
    imgSrc={Image2}
/>




</Grid>

</main>
      </Box>
    </>
  );
}