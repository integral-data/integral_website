import React from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import BackgroundVideo from './videos/background_space_on_left.mp4';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';

import Image1 from './images/nasa-unsplash.jpeg';
import ImageDash from './images/dashboard.jpeg'
import ImageCoding from './images/coding.jpeg'

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

function ExperienceCard({ title, listItems, image }) {
  return (
      <Grid item xs={12} sm={6} md={4}>
          <Card sx={{ 
              height: '100%', 
              display: 'flex', 
              flexDirection: 'column', 
              bgcolor: '#0a192f',
              boxShadow: 3,  // apply shadow
              borderColor: '#808080', // apply border color
              borderWidth: 2, // apply border width
              borderStyle: 'solid' // apply border style
              }}
          >
              <CardContent sx={{ flexGrow: 1 }}>
                  <Typography gutterBottom variant="h5" component="h2" align="center" sx={{color: '#D3D3D3'}}>
                      {title}
                  </Typography>
                  {listItems && Array.isArray(listItems) && (
                      <List>
                          {listItems.map((item, index) => (
                              <ListItem key={index}>
                                  <Typography sx={{color: '#D3D3D3'}}>{item}</Typography>
                              </ListItem>
                          ))}
                      </List>
                  )}
              </CardContent>
              <Box 
                  component="img" 
                  alt="image description" 
                  src={image} 
                  sx={{
                      objectFit: 'cover',
                      height: '150', 
                      width: '100%'
                  }}
              />
          </Card>
      </Grid>
  );
}

  export default function ExperiencePage() {
    const experiences = [
        { title: 'Languages', listItems: ['Python', 'JavaScript', 'React','SQL'], image: ImageCoding },
        { title: 'Visualization Software', listItems: ['Tableau', 'Power BI', 'Google Data Studio'], image: ImageDash },
        { title: 'Data Warehouses', listItems: ['Snowflake', 'Redshift', 'PostGres','SQLite'], image: Image1 },
        { title: 'Industries', listItems: ['Financial Services', 'Car Dealerships', 'Government Contracts','Human Resources', 'Insurance' ], image: Image1},
        { title: 'Python Libraries', listItems: ['Pandas', 'Django', 'Flask'], image: Image1 },        
        { title: 'Other Tech', listItems: ['Git', 'Docker', 'Django'], image: Image1 },
        
      ];
      return (
        <ThemeProvider theme={defaultTheme}>
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
            <Typography
              component="h1"
              variant="h2"
              align="center"
              color="text.primary"
              gutterBottom
            >
              Integral Skillset
            </Typography>
                        <Typography variant="h6" align="center" gutterBottom>
                            Here is a brief overview of the technlogy we leverage & experience we have.
                        </Typography>
                        <Box sx={{ height: "60px" }} />  {/* Spacer */}

            <Container maxWidth="md">
              <Grid container spacing={4}>
                {experiences.map((experience, index) => (
                  <ExperienceCard key={index} title={experience.title} listItems={experience.listItems} image={experience.image} />
                ))}
              </Grid>
            </Container>
          </Box>
        </ThemeProvider>
      );
    }