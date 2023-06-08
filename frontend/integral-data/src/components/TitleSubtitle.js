import React from 'react';
import { Typography, Box } from '@mui/material';
import { color_blue } from '../constants';

const TitleSubtitle = ({ title, subtitle, color = color_blue, paddingTop = '2em', paddingBottom = '1em' }) => {
  return (
    <Box 
      sx={{ 
        maxWidth: '600px', 
        margin: '0 auto', 
        padding: `${paddingTop} 2em ${paddingBottom} 2em`, // Padding adjusted here
        '@media (min-width:600px)': {
          padding: `${paddingTop} 0 ${paddingBottom} 0`,
        },
      }}
    >
      <Typography variant="h3" component="h2" align="center" gutterBottom sx={{ color: color }}>
        {title}
      </Typography>
      {subtitle && (
        <Typography variant="subtitle1"  align="center" gutterBottom sx={{ color: color }}>
          {subtitle}
        </Typography>
      )}
    </Box>
  );
}

export default TitleSubtitle;
