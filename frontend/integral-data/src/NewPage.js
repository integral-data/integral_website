import React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import GradientCard from './components/GradientCard';
import TitleSubtitle from './components/TitleSubtitle';

const NewPage = () => {
  return (
    <>
      <CssBaseline />
      <Box
        sx={{
          minHeight: "calc(100vh - 64px)", // assuming AppBar height is 64px
          background: "linear-gradient(0deg, rgba(6, 11, 40, 0.94) 19.41%, rgba(10, 14, 35, 0.89) 76.65%)",
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'flex-start', // align items to the start of the main axis (vertical)
          padding: '2em' // for some spacing
        }}
      >
        <TitleSubtitle 
          title="Integral Skillset" 
          subtitle="Here is a brief overview of the technology we leverage & experience we have."
        />

        <Grid container spacing={2} justifyContent="center">
          <Grid item xs={12} sm={6} md={4} lg={3}>
            <GradientCard title="Programming Languages" subHeader="We have many languages" listItems={["Python", "JavaScript", "SQL"]} />
          </Grid>
          <Grid item xs={12} sm={6} md={4} lg={3}>
            <GradientCard title="Data Visualization" listItems={["Power BI", "Tableau", "Plotly"]} />
          </Grid>
          <Grid item xs={12} sm={6} md={4} lg={3}>
            <GradientCard title="Other Tech" listItems={["Python", "JavaScript", "SQL"]} />
          </Grid>
        </Grid>
        
      </Box>
    </>
  );
}

export default NewPage;
