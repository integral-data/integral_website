import { Box, Typography, Button, Container } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { CssBaseline } from '@mui/material';

import VideoBackground from './videos/video.mp4'; // Import your video file

function HomePage() {
    const navigate = useNavigate();

    const buttonStyle = {
      backgroundColor: 'rgba(44,99, 105, 1)', // replace with your desired color and opacity
      borderColor: '#000000', // Hex color for black
      '&:hover': {
        backgroundColor: 'rgba(44,99, 105, 0.5)', // replace with your desired hover color and opacity
      },
    };

    return (
      <Box
        sx={{
          position: 'relative',
          minHeight: '100vh',
          overflowX: 'hidden', // Prevent horizontal scroll
        }}
      >
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
            <source src={VideoBackground} type="video/mp4" />
          </video>
        </Box>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-start',
            justifyContent: 'flex-start',
            position: 'absolute', // Revert to your original 'absolute'
            top: '10%',
            left: '10%',
            color: '#fff', // Text color
          }}
        >
          <Container maxWidth="sm">
            <main>
                <Typography variant="h3" component="h1" gutterBottom>
                    Integral Data
                </Typography>
                <Box sx={{ height: "50px" }} />  {/* Spacer */}
                <Typography variant="h5" component="h2" gutterBottom
                  sx={{
                    maxWidth: '750px', // limit the width to your preference
                    overflowWrap: 'break-word', // break words to prevent overflow
                  }}
                >
                    Unleash your business's data potential with our technology-driven consulting firm. We specialize in all things data, utilizing cutting-edge technology to drive growth. 
                </Typography>
                <Box sx={{ height: "20px" }} />  {/* Spacer */}
                <Box sx={{ display: 'flex', justifyContent: 'left', gap: '1em' }}>
                <Button variant="outlined" color="inherit" onClick={() => navigate('/what_we_do')} sx={buttonStyle}>
                  What We Do
                </Button>
                <Button variant="outlined" color="inherit" onClick={() => navigate('/why_integral')} sx={buttonStyle}>
                  Why Integral?
                </Button>
                <Button variant="outlined" color="inherit" onClick={() => navigate('/contact')} sx={buttonStyle}>
                  Contact Us
                </Button>
                </Box>
            </main>
          </Container>
        </Box>
      </Box>
    );
}

export default HomePage;
