import React from "react";
import { Grid, Typography, Box, Button } from "@mui/material";
import styled from "styled-components";
import video from "./videos/video_404.mp4";

const BackgroundVideo = styled.video`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  object-fit: cover;
  z-index: -1;
  opacity: 0.8;
`;

const Overlay = styled(Box)`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.3); // Adjust the last value for opacity
  z-index: 1;
`;

const NotFoundPage = () => {
  return (
    <Grid
      style={{
        position: "relative",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        maxWidth: "100%", // Add this line
      }}
    >
      <BackgroundVideo autoPlay loop muted>
        <source src={video} type="video/mp4" />
      </BackgroundVideo>
      <Overlay />
      <Typography variant="h1" style={{ zIndex: 2 }}>
        404
      </Typography>
      <Typography variant="h5" mb={2} style={{ zIndex: 2 }}>
        Oops! The page you are looking for does not exist or has been moved.
      </Typography>
      <Button
        href="/"
        style={{
          zIndex: 2,
          background: "white",
          textTransform: "none", // Add this line
        }}
      >
        <Typography
          variant="h5"
          style={{
            zIndex: 2,
            textDecoration: "none",
          }}
        >
          Go back to home page
        </Typography>
      </Button>
    </Grid>
  );
};

export default NotFoundPage;
