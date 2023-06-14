import React, { useState } from "react";
import LargeVideo from "../../videos/background_space_on_left.mp4";
import SmallVideo from "../../videos/background_space_on_left_tiny.mp4"; // import your smaller video
import { Button } from "../ButtonElements";
import RotatingLogo from "../RotatingLogo";
import { Grid, useTheme, Typography, useMediaQuery } from "@mui/material";
import { ArrowForward, ArrowRight } from "./HeroElements";
import logo from "../../images/integral_transparent_icon.png";
import { tokens } from "../../theme";

const HeroSection = () => {
  const [hover, setHover] = useState(false);
  const theme = useTheme();
  const matches = useMediaQuery(theme => theme.breakpoints.down('sm'));
  const colors = tokens(theme.palette.mode);

  const onHover = () => {
    setHover(!hover);
  };

  return (
    <Grid
      container
      id="home"
      sx={{
        background: "black",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: "0 10px",
        height: "1000px",
        position: "relative",
        zIndex: 1,
      }}
    >
      <Grid
        item
        md={12}
        sx={{
          position: "absolute",
          top: 0,
          right: 0,
          bottom: 0,
          left: 0,
          width: "100%",
          height: "100%",
          overflow: "hidden",
        }}
      >
        <Grid
          item
          md={12}
          component="video"
          autoPlay
          loop
          muted
          src={matches ? SmallVideo : LargeVideo} // smaller video for mobile devices
          type="video/mp4"
          playbackRate={0.1}
          sx={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            filter: "opacity(60%)",
          }}
        />
      </Grid>









      <Grid container maxWidth={1600}>
        <Grid item md={12} zIndex={2}>
          <Typography
            variant="title"
            sx={{
              fontFamily: "Mona Sans",
              fontWeight: "800",
              fontStretch: "110%",
              color: "#fff",
              textShadow: `1px 1px 1px ${colors.greenAccent[500]}`,
            }}
          >
            Integral Data
          </Typography>
        </Grid>
        <Grid item md={10} zIndex={2}>
          <Typography
            variant="h3"
            color="white"
            sx={{
              fontStretch: "110%",
              fontWeight: "400",
              maxWidth: "60%",
              textShadow: `1px 1px 1px ${colors.greenAccent[500]}`,
            }}
          >
            Unleash your business's data potential with our technology-driven
            consulting firm. We specialize in all things data, utilizing
            cutting-edge technology to drive growth.
          </Typography>
        </Grid>
        <Grid
          item
          md={12}
          sx={{
            marginTop: "32px",
            display: "flex",
            flexDirection: "column",
            alignItems: "left",
            paddingLeft: { md: '10%' },
          }}
          zIndex={2}
        >
          <Grid item md={3}>
            <Button
              to="/contactus"
              onMouseEnter={onHover}
              onMouseLeave={onHover}
              primary="true"
              dark="true"
              smooth={true}
              duration={500}
              spy={true}
              exact="true"
              offset={-80}
              sx={{ maxWidth: "200px" }}
            >
              <Typography variant="h4" sx={{ fontWeight: "600" }}>
                Contact Us
              </Typography>
              {hover ? <ArrowForward /> : <ArrowRight />}
            </Button>
          </Grid>
        </Grid>
        <Grid
          item
          md={12}
          zIndex={3}
          sx={{
            height: "350px",
            justifyContent: { xs: "center", md: "flex-end" },
            paddingLeft: { md: '10%' },
          }}
        >
          <RotatingLogo src={logo} />
        </Grid>
      </Grid>
    </Grid>
  );
};

export default HeroSection;
