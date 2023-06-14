import { styled, keyframes } from "@mui/system";

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

const RotatingLogo = styled("img")(({ theme, width = '50%', height = '50%' }) => ({
  animation: `${rotate} 10s linear infinite`,
  maxWidth: width,
  maxHeight: height,
  scale: 0.1,
}));

export default RotatingLogo;
