import React from "react";
import { styled, keyframes } from "@mui/system";
import logo from "../images/integral_transparent_icon.png";

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

const RotatingLogo = styled("img")(
  ({ theme, size = "medium", height = "auto", width }) => {
    let logoWidth;
    let logoHeight;

    // Determine the width and height based on the provided size prop
    switch (size) {
      case "small":
        logoWidth = "20%";
        break;
      case "large":
        logoWidth = "90%";
        break;
      case "medium":
      default:
        logoWidth = "50%";
        break;
    }

    // If custom width and height are provided, override the calculated values
    if (width && height) {
      logoWidth = width;
      logoHeight = height;
    }

    return {
      animation: `${rotate} 10s linear infinite`,
      width: logoWidth,
      height: logoHeight,
      scale: 0.1,
    };
  }
);

const IntegralRotatingLogo = ({ size, width, height }) => {
  return <RotatingLogo src={logo} size={size} width={width} height={height} />;
};

export { RotatingLogo, IntegralRotatingLogo };
