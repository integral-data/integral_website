import React from 'react';
import { Box, Typography, Button, Container, Grid } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { CssBaseline } from '@mui/material';
import { styled, keyframes } from '@mui/system';
import MyImage from './images/integral_transparent_icon.png';
import { color_blue, color_grey } from './constants';

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

const RotatingImage = styled('img')(({ theme }) => ({
  animation: `${rotate} 25s linear infinite`,
  maxWidth: '100%',
  maxHeight: '100%',
}));

function HomePage() {
  const navigate = useNavigate();

  const buttonStyle = {
    backgroundColor: color_blue,
    borderColor: '#000000',
    color: 'white',
    minWidth: '100px',
    '&:hover': {
      backgroundColor: color_grey,
    },
  };

  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth={false} sx={{ paddingTop: '4rem', height: '100vh', position: 'relative' }}>
        <Grid container spacing={2} sx={{ xs: { paddingLeft: '1rem', paddingRight: '1rem' }, sm: { paddingLeft: '4rem', paddingRight: '4rem' }}}>
          <Grid item xs={12} sm={6} sx={{ xs: { textAlign: 'center', width: '90%' }, sm: { textAlign: 'left', width: '80%' } }}>
            <Typography variant="h3" component="h1" textAlign={'center'} gutterBottom >
              Integral Data
            </Typography>
            <Box sx={{ height: '50px' }} />
            <Typography
              variant="h5"
              component="h2"
              gutterBottom
              sx={{
                maxWidth: '750px',
                overflowWrap: 'break-word',
              }}
            >
              Unleash your business's data potential with our technology-driven consulting firm. We specialize in all things data, utilizing cutting-edge technology to drive growth.
            </Typography>
            <Box sx={{ height: '20px' }} />
            <Box sx={{ display: 'flex', justifyContent: 'center', gap: '1em', flexWrap: 'wrap' }}>
              <Button variant="outlined" color="inherit" onClick={() => navigate('/what_we_do')} sx={buttonStyle}>
                What We Do
              </Button>
              <Button variant="outlined" color="inherit" onClick={() => navigate('/why_integral')} sx={buttonStyle}>
                Why Integral?
              </Button>
              <Button variant="outlined" color="inherit" onClick={() => navigate('/contact')} sx={buttonStyle}>
                Contact Us
              </Button>
            </Box>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                height: '80%',
              }}
            >
              <RotatingImage
                src={MyImage}
                alt="Rotating"
              />
            </Box>
          </Grid>
        </Grid>
      </Container>
    </React.Fragment>
  );
}



export default HomePage;
