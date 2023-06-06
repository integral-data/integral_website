import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import CssBaseline from '@mui/material/CssBaseline';
import { createTheme, ThemeProvider, createPalette } from '@mui/material/styles';

import MainPage from './HomePage';
import ContactForm from './ContactForm';
import ExperiencePage from './ExperiencePage';
import ResponsiveAppBar from './NavBar.tsx';
import WhyIntegral from './WhyIntegral';
import Footer from './Footer';

const defaultTheme = createTheme({
    palette: {
      // mode: 'dark', // This will set the overall theme to dark.
      primary: {
        main: '#0a192f', // This is a dark navy color.
      },
      secondary: {
        main: '#00bcd4', // Pick a secondary color.
      },
      background: {
        default: '#0a192f', // This will set the background to dark navy.
      }
    },
  });


function AppRouter() {
    return (
      <Router>
        <CssBaseline />
        <ThemeProvider theme={defaultTheme}>
            <ResponsiveAppBar />
            <Routes>
                <Route exact path="/" element={<MainPage />} />
                <Route path="/contact" element={<ContactForm />} />
                <Route path="/experience" element={<ExperiencePage />} />
                <Route path="/why_integral" element={<WhyIntegral />} />
            </Routes>
        <Footer />
        </ThemeProvider>

    </Router>
    );
  }
  
  export default AppRouter;