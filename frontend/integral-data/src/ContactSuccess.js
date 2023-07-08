import React from "react";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { Link } from "react-router-dom";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";

const ContactSuccess = () => {
  const [open, setOpen] = React.useState(true);

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpen(false);
  };

  return (
    <React.Fragment>
      <Box
        sx={{
          minHeight: "95vh",
          pt: 8,
          pb: 6,
        }}
      >
        <Container maxWidth="xs">
          <Typography
            variant="h2"
            align="center"
            color="text.primary"
            gutterBottom
          >
            Success!
          </Typography>
          <Typography
            variant="h5"
            align="center"
            color="text.secondary"
            paragraph
          >
            Thank you for contacting us. We will reach out to you in 1-2
            business days.
          </Typography>
          <Stack
            sx={{ pt: 4 }}
            direction="row"
            spacing={2}
            justifyContent="center"
          >
            <Button
              variant="contained"
              component={Link}
              to="/"
              sx={{
                backgroundColor: "lightblue",
                marginRight: "1em",
                color: "black",
                "&:hover": {
                  backgroundColor: "skyblue",
                },
              }}
            >
              Back to Home
            </Button>
          </Stack>
        </Container>
      </Box>

      <Snackbar
        open={open}
        autoHideDuration={6000}
        onClose={handleClose}
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
      >
        <MuiAlert
          onClose={handleClose}
          severity="success"
          sx={{ width: "75%", marginTop: "65px" }}
        >
          Form submitted successfully!
        </MuiAlert>
      </Snackbar>
    </React.Fragment>
  );
};

export default ContactSuccess;
