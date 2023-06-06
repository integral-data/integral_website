import React from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import BackgroundVideo from './videos/video.mp4';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';

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

function ExperienceCard({ title, listItems }) {
    return (
      <Grid item xs={12} sm={6} md={4}>
        <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
          <CardContent sx={{ flexGrow: 1 }}>
            <Typography gutterBottom variant="h5" component="h2">
              {title}
            </Typography>
            {listItems && Array.isArray(listItems) && (
              <List>
                {listItems.map((item, index) => (
                  <ListItem key={index}>
                    <Typography>{item}</Typography>
                  </ListItem>
                ))}
              </List>
            )}
          </CardContent>
        </Card>
      </Grid>
    );
  }
  

  export default function ExperiencePage() {
    const experiences = [
        { title: 'Languages', listItems: ['Python', 'JavaScript', 'React','SQL'] },
        { title: 'Visualization Software', listItems: ['Tableau', 'Power BI', 'Google Data Studio'] },
        { title: 'Data Warehouses', listItems: ['Snowflake', 'Redshift', 'PostGres','SQLite'] },
        { title: 'Industries', listItems: ['Financial Services', 'Car Dealerships', 'Government Contracts','Human Resources', 'Insurance' ]},
        { title: 'Python Libraries', listItems: ['Pandas', 'Django', 'Flask'] },        
        { title: 'Other Tech', listItems: ['Git', 'Docker', 'Django'] },
        
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
            <Typography variant="h3" align="center" gutterBottom>
                            Integral Data Skillset
                        </Typography>
                        <Typography variant="h6" align="center" gutterBottom>
                            Here is a brief overview of the technlogy we leverage & experience we have.
                        </Typography>

            <Container maxWidth="md">
              <Grid container spacing={4}>
                {experiences.map((experience, index) => (
                  <ExperienceCard key={index} title={experience.title} listItems={experience.listItems} />
                ))}
              </Grid>
            </Container>
          </Box>
        </ThemeProvider>
      );
    }