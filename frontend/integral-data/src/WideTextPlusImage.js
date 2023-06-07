import React from 'react';
import { Grid, Container, Typography, Stack, Box, List, ListItem, ListItemText } from '@mui/material';

const CustomGridRight = ({ headerText, subText, imgSrc }) => {
    return (
        <Grid item xs={12}>
            <Container maxWidth="lg">
                <Grid container spacing={2} direction="row-reverse">
                    <Grid item xs={12} md={6}>
                        <Typography
                            component="h1"
                            variant="h2"
                            align="center"
                            color="text.primary"
                            gutterBottom
                        >
                            {headerText}
                        </Typography>
                        <Typography
                            variant="h5"
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
                    <Grid item xs={12} md={6}>
                        <Box
                            component="img"
                            sx={{
                                width: { xs: '20%', sm: '40%', md: '60%' },
                                mx: 'auto',
                                maxWidth: '100%',
                                objectFit: 'cover',
                            }}
                            alt="Image description"
                            src={imgSrc}
                        />
                    </Grid>
                </Grid>
            </Container>
        </Grid>
    );
}

const CustomGridLeft = ({ headerText, subText, imgSrc }) => {
  return (
      <Grid item xs={12}>
          <Container maxWidth="lg">
              <Grid container spacing={2}>
                  <Grid item xs={12} md={6}>
                      <Typography
                          component="h1"
                          variant="h2"
                          align="center"
                          color="text.primary"
                          gutterBottom
                      >
                          {headerText}
                      </Typography>
                      <Typography
                          variant="h5"
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
                  <Grid item xs={12} md={6}>
                      <Box
                          component="img"
                          sx={{
                              width: { xs: '20%', sm: '40%', md: '60%' },
                              mx: 'auto',
                              maxWidth: '100%',
                              objectFit: 'cover',
                          }}
                          alt="Image description"
                          src={imgSrc}
                      />
                  </Grid>
              </Grid>
          </Container>
      </Grid>
  );
};



const CustomGridRightWithList = ({ headerText, subText, imgSrc, listItems }) => {
    return (
        <Container maxWidth="lg">
            <Grid container spacing={2} direction="row-reverse" alignItems="center">
                <Grid item xs={12} md={6}>
                    <Typography variant="h2" align="center" color="text.primary" gutterBottom>
                        {headerText}
                    </Typography>
                    <Typography variant="h5" align="center" color="text.secondary" paragraph>
                        {subText}
                    </Typography>
                    <List disablePadding>
                        {listItems.map((point, index) => (
                            <ListItem sx={{ py: 0.5 }} key={index}>
                                <ListItemText primary={point} />
                            </ListItem>
                        ))}
                    </List>
                </Grid>
                <Grid item xs={12} md={6}>
                    <Box component="img" sx={{ width: '60%', mx: 'auto', display: 'block', objectFit: 'cover' }} alt="Image description" src={imgSrc} />
                </Grid>
            </Grid>
        </Container>
    );
}

const CustomGridLeftWithList = ({ headerText, subText, imgSrc, listItems }) => {
    return (
        <Container maxWidth="lg">
            <Grid container spacing={2} alignItems="center">
                <Grid item xs={12} md={6}>
                    <Typography variant="h2" align="center" color="text.primary" gutterBottom>
                        {headerText}
                    </Typography>
                    <Typography variant="h5" align="center" color="text.secondary" paragraph>
                        {subText}
                    </Typography>
                    <List disablePadding>
                        {listItems.map((point, index) => (
                            <ListItem sx={{ py: 0.5 }} key={index}>
                                <ListItemText primary={point} />
                            </ListItem>
                        ))}
                    </List>
                </Grid>
                <Grid item xs={12} md={6}>
                    <Box component="img" sx={{ width: '60%', mx: 'auto', display: 'block', objectFit: 'cover' }} alt="Image description" src={imgSrc} />
                </Grid>
            </Grid>
        </Container>
    );
}

export {CustomGridLeft, CustomGridRight, CustomGridLeftWithList, CustomGridRightWithList};