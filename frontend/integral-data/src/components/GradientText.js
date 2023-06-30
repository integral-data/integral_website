import React from "react";
import { Typography } from "@mui/material";

const GradientText = ({
  variant,
  text,
  color1,
  color2,
  fontWeight,
  shadowColor,
}) => {
  return (
    <>
      <Typography
        variant={variant}
        fontWeight={fontWeight}
        sx={{
          color: "#FE6B8B", // fallback color for unsupported browsers
          background: `linear-gradient(45deg, ${color1} 10%, ${color2} 50%)`,
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          "@supports (-webkit-background-clip: text)": {
            color: "transparent",
          },
          textShadow: `1px 1px 1px ${shadowColor ? shadowColor : color2}`,
        }}
      >
        {text}
      </Typography>
    </>
  );
};

export default GradientText;
