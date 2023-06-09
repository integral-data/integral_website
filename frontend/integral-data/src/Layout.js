import React from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Container from "@mui/material/Container";
import { useTheme } from "@mui/material";

const Layout = ({ children, fullWidth }) => {
  const theme = useTheme();

  return (
    <>
      <Box
        sx={{
          position: "relative",
          minHeight: "100vh",
          overflowX: "hidden", // Prevent horizontal scroll
        }}
      >
        <Navbar />
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

        <Container maxWidth={fullWidth ? false : "lg"}>
          <main style={{ position: "relative", marginTop: "80px" }}>
            {children}
          </main>
        </Container>
      </Box>
      <Footer />
    </>
  );
};

export default Layout;
