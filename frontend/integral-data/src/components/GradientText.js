import React from "react";
import { Typography } from "@mui/material";

const GradientText = ({ variant, text, color1, color2 }) => {
  return (
    <>
      <Typography
        variant={variant}
        sx={{
          color: "#FE6B8B", // fallback color for unsupported browsers
          background: `linear-gradient(45deg, ${color1} 30%, ${color2} 90%)`,
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          "@supports (-webkit-background-clip: text)": {
            color: "transparent",
          },
        }}
      >
        {text}
      </Typography>
    </>
  );
};

export default GradientText;
