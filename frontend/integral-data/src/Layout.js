import React from "react";
import NavBar from "./NavBar.tsx";

import Footer from "./Footer";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Container from "@mui/material/Container";
import { useTheme } from "@mui/material";

const Layout = ({ children }) => {
  const theme = useTheme();

  return (
    <>
      <NavBar />
      <Box
        sx={{
          position: "relative",
          minHeight: "100vh",
          overflowX: "hidden", // Prevent horizontal scroll
          pt: 8, // Add padding-top
        }}
      >
        <CssBaseline />

        <Box
          sx={{
            position: "fixed",
            zIndex: -1,
            minWidth: "100%",
            minHeight: "100%",
            objectFit: "cover",

            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            background: theme.gradient,
          }}
        />

        <Container maxWidth="lg">
          <main style={{ position: "relative" }}>{children}</main>
        </Container>
      </Box>
      <Footer />
    </>
  );
};

export default Layout;
