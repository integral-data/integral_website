import React from "react";
import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  Grid,
  useTheme,
} from "@mui/material";
import { useSpring, animated } from "react-spring";
import { tokens } from "../theme";

const ServiceCard = ({ title, description, image }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [props, set] = useSpring(() => ({ scale: 1 }));

  return (
    <Grid item m={5} md={12} sx={{ display: "flex", justifyContent: "center" }}>
      <animated.div
        style={props}
        onMouseEnter={() => set({ scale: 1.05 })}
        onMouseLeave={() => set({ scale: 1 })}
      >
        <Card
          sx={{
            maxWidth: 345,
            height: 300,
            transition: "0.3s",
            borderRadius: "10px",
            alignSelf: "center",
            boxShadow: "0 8px 40px -12px rgba(0,0,0,0.3)",
            "&:hover": {
              transform: "scale(1.05)",
            },
          }}
        >
          <CardMedia component="img" height="140" image={image} alt="service" />
          <CardContent sx={{ background: colors.primary[600], height: "100%" }}>
            <Typography variant="h5" component="div">
              {title}
            </Typography>
            <Typography variant="body2" color={colors.greenAccent[500]}>
              {description}
            </Typography>
          </CardContent>
        </Card>
      </animated.div>
    </Grid>
  );
};

export default ServiceCard;
