import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import {
  TextField,
  Button,
  Box,
  Grid,
  Typography,
  useMediaQuery,
} from "@mui/material";
import Paper from '@mui/material/Paper';
import { Snackbar, Alert } from "@mui/material";
import emailjs from "emailjs-com";
// import { tokens } from "../theme";
import { useTheme } from "@mui/material/styles";
import GradientText from "./GradientText";

const ContactComponent = () => {
  const [open, setOpen] = React.useState(false);
  const theme = useTheme();
//   const colors = tokens(theme.palette.mode);
  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpen(false);
  };

  const matches = useMediaQuery(theme.breakpoints.down('sm'));

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
      } catch (error) {
        console.error(error);
      }
      setSubmitting(false);
    },
  });

  return (
    <Grid container sx={{ 
        backgroundImage: theme.homeGradient2, 
        justifyContent: "center", 
        boxSizing: "border-box", 
        alignItems: "center",
        p: matches ? 2 : 2 // Change padding based on screen size
      }}>
      <Grid marginTop={'50px'} marginBottom={'em'} sx={{ 
        boxSizing: "border-box", 
        alignItems: "center",
      }}>
        <Paper 
          elevation={3} 
          sx={{ 
            width: "80%", 
            maxWidth: { xs: '80%', sm: '80%', md: '800px' },
            padding: matches ? 2 : 4, // Change padding based on screen size
            backgroundColor: 'transparent',
            mx: 'auto', 
            mb:'20px'
          }}
        >
            {/* <Box mt={100}>  */}
          <Snackbar open={open} 
                    autoHideDuration={6000} 
                    onClose={handleClose} 
                    anchorOrigin={{ vertical: 'top', horizontal: 'center' }} // Added this line
                >
                
            <Alert
              onClose={handleClose} 
              severity="success"
              sx={{ width: "100%" }}

            >
              Message sent successfully - thanks for reaching out!
            </Alert>
          </Snackbar>
          {/* </Box> */}

          <GradientText
            variant="h1"
            fontWeight={600}
            text="Contact Us"
            color1="rgba(245,177,97,1)"
            color2="rgba(236,54,110,1)"
          ></GradientText>
          <Typography variant="h5" color="white">
            We'd love to hear more about your project. Contact us and we will be in touch soon!
          </Typography>
      
          <form onSubmit={formik.handleSubmit}>
            <Grid container spacing={3} justifyContent="center">
              <Grid item xs={12}>
                
                
                
                
                <Grid container spacing={3}>
                  <Grid item xs={12} sm={6}>
                    
                    <Box > {/* Adjusted marginBottom here */}
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
                            marginBottom: matches ? "10px" : "20px",
                            marginTop: matches ? "10px" : "20px",
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
                    <Box mb={1}> {/* Adjusted marginBottom here */}
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
                            marginBottom: matches ? "10px" : "20px",
                            marginTop: matches ? "0px" : "20px",
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
                <Typography variant="h5" color="white">
                  Tell us a bit about your business and share your goals with us.
                </Typography>
              </Grid>
              <Grid item xs={12} sm={6}>
                <Box mb={1}> {/* Adjusted marginBottom here */}
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
                <Box mb={1}> {/* Adjusted marginBottom here */}
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
                <Box mb={1}> {/* Adjusted marginBottom here */}
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
                    //   marginTop: "20px",
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
                justifyContent: "center", // Changed from "left" to "center"
                marginBottom: "2em",
              }}
            >
              <Button
                color="primary"
                variant="contained"
                type="submit"
                disabled={formik.isSubmitting}
                size="large"
              >
                Send Message
              </Button>
            </Box>
          </form>
        </Paper>
      </Grid>
    </Grid>
  );
};

export default ContactComponent;
