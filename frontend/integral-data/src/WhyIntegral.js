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
              Why should I partner with Integral?
            </Typography>
            <Typography
              variant="h6"
              align="center"
              color="text.secondary"
              paragraph
            >
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
  {/* <Box
    component="img"
    sx={{
      width: { xs: '20%', sm: '40%', md: '60%' },
      mx: 'auto',
      maxWidth: '100%',
      objectFit: 'cover',
    }}
    alt="Image description"
    src={Image1}
  /> */}
</Grid>

        
        
        </Grid>
      </Container>
    </Grid>
    <Box sx={{ height: "120px" }} />  {/* Spacer */}

    <Grid item xs={12}>
      <Container maxWidth="lg">  {/* Adjusted here */}
        <Grid container spacing={2} direction="row-reverse">
          <Grid item xs={12} md={6}>
            <Typography
              component="h1"
              variant="h2"
              align="center"
              color="text.primary"
              gutterBottom
            >
              Experience
            </Typography>
            <Typography
              variant="h5"
              align="center"
              color="text.secondary"
              paragraph
            >
              Integral consultants have an average of 10+ years of experience working with data.
            </Typography>
            <Stack
              sx={{ pt: 4 }}
              direction="row"
              spacing={2}
              justifyContent="center"
            >
            
            </Stack>
          </Grid>
          <Grid item xs={12} md={6}>
            <Box
              component="img"
              sx={{
                width: { xs: '20%', sm: '40%', md: '60%' },
                mx: 'auto',
                maxWidth: '100%',
                objectFit: 'cover',
              }}
              alt="Image description"
              src={Image2}
            />
          </Grid>
        </Grid>
      </Container>
    </Grid>

    <Box sx={{ height: "60px" }} />  {/* Spacer */}

    <Grid item xs={12}>
      <Container maxWidth="lg">  {/* Adjusted here */}
        <Grid container spacing={2} direction="row-reverse">
        <Grid item xs={12} md={6}>
            <Box
              component="img"
              sx={{
                width: { xs: '20%', sm: '40%', md: '60%' },
                mx: 'auto',
                maxWidth: '100%',
                objectFit: 'cover',
              }}
              alt="Image description"
              src={Image1}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <Typography
              component="h1"
              variant="h2"
              align="center"
              color="text.primary"
              gutterBottom
            >
              Good for Small Business
            </Typography>
            <Typography
              variant="h5"
              align="center"
              color="text.secondary"
              paragraph
            >
              Hiring an internal team to manage analytics can be expensive. Letting Integral handle analytics saves you money and makes your business more nimble.
            </Typography>
            <Stack
              sx={{ pt: 4 }}
              direction="row"
              spacing={2}
              justifyContent="center"
            >
            
            </Stack>
          </Grid>
          
        </Grid>
      </Container>
    </Grid>

    <Box sx={{ height: "60px" }} />  {/* Spacer */}

    <Grid item xs={12}>
      <Container maxWidth="lg">  {/* Adjusted here */}
        <Grid container spacing={2} direction="row-reverse">
          <Grid item xs={12} md={6}>
            <Typography
              component="h1"
              variant="h2"
              align="center"
              color="text.primary"
              gutterBottom
            >
              Quality
            </Typography>
            <Typography
              variant="h5"
              align="center"
              color="text.secondary"
              paragraph
            >
              Quality is at the forefront of everything we do. We leverage our experience & expertise to make sure we do the job right.
            </Typography>
            <Stack
              sx={{ pt: 4 }}
              direction="row"
              spacing={2}
              justifyContent="center"
            >
            
            </Stack>
          </Grid>
          <Grid item xs={12} md={6}>
            <Box
              component="img"
              sx={{
                width: { xs: '20%', sm: '40%', md: '60%' },
                mx: 'auto',
                maxWidth: '100%',
                objectFit: 'cover',
              }}
              alt="Image description"
              src={Image2}
            />
          </Grid>
        </Grid>
      </Container>
    </Grid>



    <Box sx={{ height: "60px" }} />  {/* Spacer */}

    <Grid item xs={12}>
      <Container maxWidth="lg">  {/* Adjusted here */}
        <Grid container spacing={2} direction="row-reverse">
        <Grid item xs={12} md={6}>
            <Box
              component="img"
              sx={{
                width: { xs: '20%', sm: '40%', md: '60%' },
                mx: 'auto',
                maxWidth: '100%',
                objectFit: 'cover',
              }}
              alt="Image description"
              src={Image1}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <Typography
              component="h1"
              variant="h2"
              align="center"
              color="text.primary"
              gutterBottom
            >
              Relationship Building
            </Typography>
            <Typography
              variant="h5"
              align="center"
              color="text.secondary"
              paragraph
            >
              We aren't just coders. We want to help you understand your business and make sound, data-driven decisions.
            </Typography>
            <Stack
              sx={{ pt: 4 }}
              direction="row"
              spacing={2}
              justifyContent="center"
            >
            
            </Stack>
          </Grid>
          
        </Grid>
      </Container>
    </Grid>

    <Box sx={{ height: "60px" }} />  {/* Spacer */}

    <Grid item xs={12}>
      <Container maxWidth="lg">  {/* Adjusted here */}
        <Grid container spacing={2} direction="row-reverse">
          <Grid item xs={12} md={6}>
            <Typography
              component="h1"
              variant="h2"
              align="center"
              color="text.primary"
              gutterBottom
            >
              Flexibility
            </Typography>
            <Typography
              variant="h5"
              align="center"
              color="text.secondary"
              paragraph
            >
              We are happy to help with projects of any size & offer flexible pricing options.
            </Typography>
            <Stack
              sx={{ pt: 4 }}
              direction="row"
              spacing={2}
              justifyContent="center"
            >
            
            </Stack>
          </Grid>
          <Grid item xs={12} md={6}>
            <Box
              component="img"
              sx={{
                width: { xs: '20%', sm: '40%', md: '60%' },
                mx: 'auto',
                maxWidth: '100%',
                objectFit: 'cover',
              }}
              alt="Image description"
              src={Image2}
            />
          </Grid>
        </Grid>
      </Container>
    </Grid>




</Grid>

</main>
      </Box>
    </>
  );
}