import React from 'react';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { Link } from 'react-router-dom';
import BackgroundVideo from './videos/background_space_on_left.mp4';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';

const ContactSuccess = () => {
  const [open, setOpen] = React.useState(true);

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setOpen(false);
  };

  return (
    <React.Fragment>
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
          minHeight: '95vh',
          pt: 8,
          pb: 6,
        }}
      >
        <Container maxWidth="sm">
          <Typography variant="h2" align="center" color="text.primary" gutterBottom>
            Success!
          </Typography>
          <Typography variant="h5" align="center" color="text.secondary" paragraph>
            Thank you for contacting us. We will reach out to you in 1-2 business days.
          </Typography>
          <Stack
            sx={{ pt: 4 }}
            direction="row"
            spacing={2}
            justifyContent="center"
          >
            <Button variant="contained" component={Link} to="/">Back to Home</Button>
          </Stack>
        </Container>
      </Box>

      <Snackbar open={open} autoHideDuration={6000} onClose={handleClose} anchorOrigin={{ vertical: 'top', horizontal: 'center' }}>
        <MuiAlert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
          Form submitted successfully!
        </MuiAlert>
      </Snackbar>

    </React.Fragment>
  );
}

export default ContactSuccess;
