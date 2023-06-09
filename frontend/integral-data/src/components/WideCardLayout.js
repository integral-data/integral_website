import React from 'react';
import { Grid, Container, Typography, Stack, Box } from '@mui/material';

const CustomGrid = ({ headerText, subText, imgSrc, imgPosition }) => {
  return (
    <Box sx={{ maxWidth: '1200px', margin: '0 auto' }}>
      <Grid item xs={12}>
        <Container maxWidth="lg">
          <Grid container spacing={2} direction={imgPosition === 'right' ? 'row' : 'row-reverse'} alignItems="center">
            <Grid item xs={12} md={6} container justifyContent="center">
              <Typography
                component="h3"
                variant="h4"
                align="center"
                color="text.primary"
                gutterBottom
              >
                {headerText}
              </Typography>
              <Typography
                variant="h7"
                align="center"
                color="text.secondary"
                paragraph
              >
                {subText}
              </Typography>
              <Stack
                sx={{ pt: 4 }}
                direction="row"
                spacing={2}
                justifyContent="center"
              >
              </Stack>
            </Grid>
            <Grid item xs={12} md={6} container justifyContent="center">
              <Box
                component="img"
                sx={{
                  width: { xs: '50%', sm: '40%', md: '60%' },
                  mx: 'auto',
                  maxWidth: '100%',
                  borderRadius: '30%', // Make the image circular
                  objectFit: 'cover',
                }}
                alt="Image description"
                src={imgSrc}
              />
            </Grid>
          </Grid>
        </Container>
      </Grid>
    </Box>
  );
}

export default CustomGrid;
