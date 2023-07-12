import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import {  Typography } from "@mui/material";
import { ArrowForward, ArrowRight } from '@mui/icons-material';

const Button = styled(Link)`
  border-radius: 50px;
  background: ${({ primary }) => (primary ? "#01BF71" : "#010606")};
  white-space: nowrap;
  padding: ${({ big }) => (big ? "14px 48px" : "12px 30px")};
  color: ${({ dark }) => (dark ? "#010606" : "#fff")};
  font-family: "Mona Sans";
  font-size: ${({ fontBig }) => (fontBig ? "20px" : "16px")};
  outline: none;
  border: none;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.2s ease-in-out;
  text-decoration: none;
  &:hover {
    transition: all 0.2s ease-in-out;
    background: ${({ primary }) => (primary ? "white" : "green")};
  }
`;

const ButtonIntegral = ({ text, ...props }) => {
  const [hover, setHover] = useState(false);

  const onHover = () => {
    setHover(!hover);
  };

  return (
    <Button
      onMouseEnter={onHover}
      onMouseLeave={onHover}
      primary="true"
      dark="true"
      sx={{ maxWidth: "200px" }}
      {...props}
    >
      <Typography variant="h6" sx={{ fontWeight: "600", paddingRight: "4px" }}>
        {text}
      </Typography>
      {hover ? <ArrowRight /> : <ArrowForward />}
    </Button>
  );
};

export {Button, ButtonIntegral};