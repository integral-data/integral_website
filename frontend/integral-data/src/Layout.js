import React from 'react';
import NavBar from './NavBar.tsx';
import Footer from './Footer';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import { color_blue, color_grey } from './constants.js';
import DefaultVideo from './videos/video.mp4';  // Replace this with the path to your default video

const theme = createTheme({
  palette: {
    primary: {
      main: '#0a192f',
    },
    secondary: {
      main: '#00bcd4',
    },
    text: {
      primary:  color_blue,
      secondary: color_grey,
    },
    background: {
      default: "linear-gradient(0deg, rgba(6, 11, 40, 0.94) 19.41%, rgba(10, 14, 35, 0.89) 76.65%)",
    },
  },
  typography: {
    h1: {
      fontSize: '2rem',
    },
    h2: {
      fontSize: '1.5rem',
    },
  },
});

const Layout = ({ children, background = '', backgroundType = 'video', videoSrc = DefaultVideo }) => {
    return (
      <ThemeProvider theme={theme}>
        <NavBar />
        <Box
          sx={{
            position: 'relative',
            minHeight: '100vh',
            overflowX: 'hidden', // Prevent horizontal scroll
            pt: 8, // Add padding-top
          }}
        >
          <CssBaseline />
  
  {backgroundType === 'video' && (
    <Box
      sx={{
        position: 'fixed',
        zIndex: -1,
        minWidth: '100%',
        minHeight: '100%',
        objectFit: 'cover',
        '::after': {
          content: '""',
          position: 'absolute',
          top: 0,
          right: 0,
          bottom: 0,
          left: 0,
          backgroundColor: 'rgba(255, 255, 255, 0.92)', // white with 90% opacity - controls overlay of video
        }
      }}
    >
      <video autoPlay loop muted>
        <source src={videoSrc} type="video/mp4" />
      </video>
    </Box>
  )}
  
  
  
  
          {backgroundType === 'image' && (
            <Box
              sx={{
                position: 'fixed',
                zIndex: -1,
                minWidth: '100%',
                minHeight: '100%',
                objectFit: 'cover',
                backgroundImage: `url(${background})`,
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover',
              }}
            />
          )}
          <Container maxWidth="lg">
            <main style={{ position: 'relative' }}>{children}</main>
          </Container>
        </Box>
        <Footer />
      </ThemeProvider>
    );
  };
  
export default Layout;
