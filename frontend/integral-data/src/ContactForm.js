import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import {
  TextField,
  Button,
  Box,
  Container,
  Grid,
  Typography,
} from "@mui/material";
import { Snackbar, Alert } from "@mui/material";
import { useNavigate } from "react-router-dom";
import emailjs from "emailjs-com";
import contact from "./images/contact-us.png";
import Footer from "./components/Footer";
import { IntegralRotatingLogo } from "./components/RotatingLogo";
import Navbar from "./components/Navbar";
import { useTheme } from "@mui/material/styles";
import { tokens } from "./theme";

const ContactUsReact = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [open, setOpen] = React.useState(false);
  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpen(false);
  };
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      user_email: "",
      user_name: "",
      user_message: "",
      user_business: "",
      user_industry: "",
    },
    validationSchema: Yup.object({
      user_name: Yup.string().required("Required"),
      user_email: Yup.string()
        .email("Invalid email address")
        .required("Required"),
      user_message: Yup.string().required("Required"),
      user_business: Yup.string().required("Required"),
      user_industry: Yup.string().required("Required"),
    }),

    onSubmit: async (values, { setSubmitting, resetForm }) => {
      try {
        // Send email
        await emailjs.send(
          "service_y3ejru9",
          "template_fbwz588",
          {
            from_name: values.user_name,
            from_email: values.user_email,
            message: values.user_message,
            business: values.user_business,
            industry: values.user_industry,
          },
          "Ta2CW2Rq6g3FptgvM"
        );
        resetForm();
        setOpen(true);
        navigate("/contact_success");
      } catch (error) {
        console.error(error);
        // show error message
      }
      setSubmitting(false);
    },
  });

  return (
    <>
      <Box
        sx={{
          position: "absolute",
          zIndex: -1,
          minWidth: "100%",
          minHeight: "100vh",
          objectFit: "cover",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          background: theme.gradient,
        }}
      >
        <Navbar />
        <Grid
          container
          xs={12}
          md={12}
          zIndex={1}
          sx={{
            position: "relative",
            height: 400,
            width: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            "&::before": {
              content: '""',
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              backgroundImage: `url(${contact})`,
              backgroundPosition: "center",
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              opacity: 0.2,
            },
          }}
        >
          <Typography variant="h2" color="white" zIndex={2} fontWeight={500}>
            Contact us
          </Typography>
        </Grid>

        <Container maxWidth="lg">
          <Box sx={{ paddingTop: "40px" }}>
            <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
              <Alert
                onClose={handleClose}
                severity="success"
                sx={{ width: "100%" }}
              >
                Message sent successfully - thanks for reaching out!
              </Alert>
            </Snackbar>

            <Grid container spacing={3} justifyContent="center">
              <Grid item xs={12} md={12}>
                <form onSubmit={formik.handleSubmit}>
                  <Grid container sx={{ display: "flex" }}>
                    <Typography
                      variant="body1"
                      align="left"
                      color="text.primary"
                    >
                      Connect with the Integral team to explore how we can drive
                      your business forward. We will get back to you within 2
                      business days.
                    </Typography>
                  </Grid>
                  <Grid container spacing={3} justifyContent="center">
                    <Grid item xs={12}>
                      <Grid container spacing={3}>
                        <Grid item xs={12} sm={6}>
                          <Box mb={2}>
                            <TextField
                              fullWidth
                              id="user_name"
                              name="user_name"
                              label="Name"
                              color="info"
                              value={formik.values.user_name}
                              onChange={formik.handleChange}
                              error={
                                formik.touched.user_name &&
                                Boolean(formik.errors.user_name)
                              }
                              helperText={
                                formik.touched.user_name &&
                                formik.errors.user_name
                              }
                              sx={{
                                marginBottom: "20px",
                                marginTop: "20px",
                                "& .MuiOutlinedInput-root": {
                                  "&.Mui-focused fieldset": {
                                    borderColor: "#50A6E1",
                                  },
                                },
                              }}
                            />
                          </Box>
                        </Grid>
                        <Grid item xs={12} sm={6}>
                          <Box mb={2}>
                            <TextField
                              fullWidth
                              id="user_email"
                              name="user_email"
                              label="Email"
                              color="info"
                              value={formik.values.user_email}
                              onChange={formik.handleChange}
                              error={
                                formik.touched.user_email &&
                                Boolean(formik.errors.user_email)
                              }
                              helperText={
                                formik.touched.user_email &&
                                formik.errors.user_email
                              }
                              sx={{
                                marginBottom: "20px",
                                marginTop: "20px",
                                "& .MuiOutlinedInput-root": {
                                  "&.Mui-focused fieldset": {
                                    borderColor: "#50A6E1",
                                  },
                                },
                              }}
                            />
                          </Box>
                        </Grid>
                      </Grid>
                    </Grid>
                    <Grid item xs={12}>
                      <Typography
                        variant="body1"
                        align="left"
                        color="text.primary"
                      >
                        Tell us a bit about your business and share your goals
                        with us.
                      </Typography>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <Box mb={2}>
                        <TextField
                          fullWidth
                          id="user_business"
                          name="user_business"
                          label="Business Name"
                          color="info"
                          value={formik.values.user_business}
                          onChange={formik.handleChange}
                          error={
                            formik.touched.user_business &&
                            Boolean(formik.errors.user_business)
                          }
                          helperText={
                            formik.touched.user_business &&
                            formik.errors.user_business
                          }
                          sx={{
                            "& .MuiOutlinedInput-root": {
                              "&.Mui-focused fieldset": {
                                borderColor: "#50A6E1",
                              },
                            },
                          }}
                        />
                      </Box>
                    </Grid>

                    <Grid item xs={12} sm={6}>
                      <Box mb={2}>
                        <TextField
                          fullWidth
                          id="user_industry"
                          name="user_industry"
                          label="Industry"
                          color="info"
                          value={formik.values.user_industry}
                          onChange={formik.handleChange}
                          error={
                            formik.touched.user_industry &&
                            Boolean(formik.errors.user_industry)
                          }
                          helperText={
                            formik.touched.user_industry &&
                            formik.errors.user_industry
                          }
                          sx={{
                            "& .MuiOutlinedInput-root": {
                              "&.Mui-focused fieldset": {
                                borderColor: "#50A6E1",
                              },
                            },
                          }}
                        />
                      </Box>
                    </Grid>

                    <Grid item xs={12}>
                      <Box mb={2}>
                        <TextField
                          fullWidth
                          multiline
                          rows={4}
                          id="user_message"
                          name="user_message"
                          label="Message"
                          color="info"
                          value={formik.values.user_message}
                          onChange={formik.handleChange}
                          onFocus={(event) => {
                            event.target.style.borderColor = "white"; // Change border color here
                          }}
                          error={
                            formik.touched.user_message &&
                            Boolean(formik.errors.user_message)
                          }
                          helperText={
                            formik.touched.user_message &&
                            formik.errors.user_message
                          }
                          sx={{
                            marginBottom: "20px",
                            marginTop: "20px",
                            "& .MuiOutlinedInput-root": {
                              "&.Mui-focused fieldset": {
                                borderColor: "#50A6E1",
                              },
                            },
                          }}
                        />
                      </Box>
                    </Grid>
                  </Grid>

                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "left",
                      marginBottom: "2em",
                    }}
                  >
                    <Button
                      type="submit"
                      variant="contained"
                      sx={{
                        backgroundColor: colors.greenAccent[500],
                        marginRight: "1em",
                        borderRadius: "50px",
                        textTransform: "none",
                        color: colors.gray[900],
                        "&:hover": {
                          backgroundColor: "#198754",
                          color: "white",
                        },
                      }}
                    >
                      <Typography variant="h5" sx={{ fontWeight: "500" }}>
                        Submit
                      </Typography>
                    </Button>
                  </Box>
                </form>
                {/* <Box
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    marginTop: "2em",
                  }}
                >
                  <IntegralRotatingLogo size="small" />
                </Box> */}
              </Grid>
            </Grid>

            {/* <Box sx={{ display: "flex", justifyContent: "center", marginTop: "2em" }}>
        <Button
          variant="contained"
          component={Link}
          to="/case_studies"
          sx={{
            backgroundColor: "lightblue",
            marginRight: "1em",
            color: "black",
            borderRadius: "50px",
            "&:hover": {
              backgroundColor: "green",
            },
          }}
        >
          Case Studies
        </Button>
        <Button
          variant="contained"
          component={Link}
          to="/consultants"
          sx={{
            backgroundColor: "lightblue",
            color: "black",
            "&:hover": {
              backgroundColor: "skyblue",
            },
          }}
        >
          Consultants
        </Button>
      </Box> */}
          </Box>
        </Container>
        <Box
          sx={{
            position: "absolute",
            bottom: 0,
            width: "100%",
          }}
        >
          <Footer />
        </Box>
      </Box>
    </>
  );
};

export default ContactUsReact;
