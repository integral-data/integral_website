import React from "react";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Link from "@mui/material/Link";
import { useTheme } from "@mui/material";
import { tokens } from "./theme";

function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary" align="center">
      {"Copyright © "}
      <Link color="inherit" href="https://mui.com/">
        integraldata.io
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

function Footer() {
  const theme = useTheme();
  const colors = tokens(theme);
  return (
    <Box sx={{ background: colors.greenAccent[600], p: 1 }} component="footer">
      <Typography variant="h6" align="center" gutterBottom></Typography>
      <Typography
        variant="subtitle1"
        align="center"
        color="text.secondary"
        component="p"
      >
        Powered By Integral Data
      </Typography>
      <Copyright />
    </Box>
  );
}

export default Footer;
