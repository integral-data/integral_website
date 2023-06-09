import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { createTheme, ThemeProvider, createPalette } from '@mui/material/styles';

import HomePage from './HomePage';
import ContactForm from './ContactForm';
import ContactSuccess from './ContactSuccess';
import ExperiencePage from './ExperiencePage';
import WhyIntegral from './WhyIntegral';
import WhatWeDo from './WhatWeDo';
import SkillsV2 from './SkillsV2';
import NewPage from './NewPage';
import Layout from './Layout';



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
        <Layout>
                    <Routes>
                        <Route exact path="/" element={<HomePage />} />
                        <Route path="/contact" element={<ContactForm />} />
                        <Route path="/contact_success" element={<ContactSuccess />} />
                        <Route path="/experience" element={<ExperiencePage />} />
                        <Route path="/why_integral" element={<WhyIntegral />} />
                        <Route path="/what_we_do" element={<WhatWeDo />} />
                        <Route path="/skills" element={<SkillsV2 />} />
                        <Route path="/test" element={<NewPage />} />
                        
                    </Routes>
                    </Layout>

      </Router>
    );
}


  
export default AppRouter;
