import React from 'react';
import { Card, Typography, Box } from '@mui/material';

const GradientCard = ({ title, subHeader, listItems }) => {
    return (
      <Card
        sx={{
          background: "linear-gradient(to right, #243148, #0f1535)",
          color: "lightgray",
          padding: "2em",
          marginTop: "2em",
          marginLeft: { xs: '10%', md: '10%' }, // Responsive left margin
          marginRight: { xs: '10%', md: '10%' }, // Add right margin for smaller screens
          maxWidth: { xs: '90%', md: '400px' },  // Responsive max-width
          minWidth: { xs: '90%', md: '300px' }, // Minimum width for medium screens and up
          borderRadius: "20px",
        }}
      >
        <Typography variant="h6">{title}</Typography>
        {subHeader && <Typography variant="body2">{subHeader}</Typography>}
        {listItems.map((item, index) => (
          <Box key={index} fontWeight="bold" my={1}>
            {item}
          </Box>
        ))}
      </Card>
    );
}

export default GradientCard;
