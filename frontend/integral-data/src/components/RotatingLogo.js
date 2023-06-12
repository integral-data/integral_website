import { styled, keyframes } from "@mui/system";

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

const RoatingLogo = styled("img")(({ theme }) => ({
  animation: `${rotate} 25s linear infinite`,
  maxWidth: "100%",
  maxHeight: "100%",
  scale: 0.1,
}));

export default RoatingLogo;
