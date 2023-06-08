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

import {CustomGridLeft, CustomGridRight, CustomGridLeftWithList, CustomGridRightWithList} from './WideTextPlusImage';
import SectionDivider from './components/SectionDivider';
import ImageDash from './images/dashboard.jpeg';
import ImageCoding from './images/coding.jpeg';


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

export default function SkillsV2() {
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
              What capabilities & experience does Integral have?
            </Typography>
            <Typography
              variant="h6"
              align="center"
              color="text.secondary"
              paragraph
            >
              We've got a wide range of experience across all sections of the tech stack.
            </Typography>
            <Stack
              sx={{ pt: 2 }}
              direction="row"
              spacing={2}
              justifyContent="center"
            >
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

<CustomGridLeftWithList 
    headerText="Languages" 
    subText="We work with a wide variety of programming languages."
    imgSrc={ImageCoding}
    listItems={['Python','JavaScript','React','SQL','VBA']}
/>

<SectionDivider />

<CustomGridRightWithList
    headerText="Visualization Software" 
    subText="We can leverage a variety of tools to visualize your data."
    imgSrc={ImageDash}
    listItems={['Power BI','Tableau','Google Data Studio','Plotly','Matplotlib']}
/>
<SectionDivider />

<CustomGridRight 
    headerText="Quality" 
    subText="Quality is at the forefront of everything we do. We leverage our experience & expertise to make sure we do the job right."
    imgSrc={Image2}
/>
<SectionDivider />

<CustomGridLeft
    headerText="Relationship Building" 
    subText="We aren't just coders. We want to help you understand your business and make sound, data-driven decisions."
    imgSrc={Image2}
/>
<SectionDivider />

<CustomGridRight 
    headerText="Flexibility" 
    subText="We are happy to help with projects of any size & offer flexible pricing options."
    imgSrc={Image2}
/>




</Grid>

</main>
      </Box>
    </>
  );
}