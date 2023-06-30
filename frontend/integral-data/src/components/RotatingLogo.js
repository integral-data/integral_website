import React from 'react';
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

const RotatingLogo = styled("img")(({ theme, size = 'medium' }) => {
  let width;
  switch (size) {
    case 'small':
      width = '20%';
      break;
    case 'large':
      width = '90%';
      break;
    case 'medium':
    default:
      width = '50%';
      break;
  }
  return {
    animation: `${rotate} 10s linear infinite`,
    width: width,
    height: 'auto',
    scale: 0.1,
  }
});


const IntegralRotatingLogo = ({ size }) => {
  return <RotatingLogo src={logo} size={size} />;
};

export {RotatingLogo, IntegralRotatingLogo};
