import React from "react";
import { Typography } from "@mui/material";

const GradientText = ({
  variant,
  text,
  color1 = "white",
  color2 = "white",
  fontWeight,
  shadowColor,
}) => {
  return (
    <>
      <Typography
        variant={variant}
        fontWeight={fontWeight}
        sx={{
          backgroundImage: `linear-gradient(to right, ${color1}, ${color2})`,
          backgroundClip: "text",
          color: "transparent",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
        }}
      >
        {text}
      </Typography>
    </>
  );
};

export default GradientText;
