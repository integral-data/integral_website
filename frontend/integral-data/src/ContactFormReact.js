import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { TextField, Button, Box, Container, Grid } from '@mui/material';
import { Snackbar, Alert } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import TitleSubtitle from './components/TitleSubtitle';
import Image2 from './images/problem.svg';

const ContactUsReact = () => {
  const [open, setOpen] = React.useState(false);
  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setOpen(false);
  };
  const navigate = useNavigate();

//   const SERVICE_ID = "**************";
// const TEMPLATE_ID = "*******";
// const USER_ID = "****************";

  const formik = useFormik({
    initialValues: {
      user_email: '',
      user_name: '',
      user_message: '',
    },
    validationSchema: Yup.object({
      user_name: Yup.string().required('Required'),
      user_email: Yup.string().email('Invalid email address').required('Required'),
      user_message: Yup.string().required('Required'),
    }),
    onSubmit: async (values, { setSubmitting, resetForm }) => {
      try {
        // Simulating email sending
        await new Promise((resolve) => setTimeout(resolve, 500));
        resetForm();
        setOpen(true);
        navigate('/contact_success');
      } catch (error) {
        // show error message
      }
      setSubmitting(false);
    },
  });

  return (
    <Container sx={{ paddingTop: '40px' }}>
      <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
          Message sent successfully - thanks for reaching out!
        </Alert>
      </Snackbar>
      <Grid container spacing={3} justifyContent="center">
        <Grid item xs={12} md={8}>
          <form onSubmit={formik.handleSubmit}>
            <Grid container item justifyContent="center">
              <TitleSubtitle 
                title="Contact Us" 
                subtitle="Fill out the form below to get in touch with us. We will reach out in the next 1-2 business days."
              />
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
                        value={formik.values.user_name}
                        onChange={formik.handleChange}
                        error={formik.touched.user_name && Boolean(formik.errors.user_name)}
                        helperText={formik.touched.user_name && formik.errors.user_name}
                        style={{ marginBottom: '20px', marginTop: '20px' }}
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
                        value={formik.values.user_email}
                        onChange={formik.handleChange}
                        error={formik.touched.user_email && Boolean(formik.errors.user_email)}
                        helperText={formik.touched.user_email && formik.errors.user_email}
                        style={{ marginBottom: '20px', marginTop: '20px' }}
                      />
                    </Box>
                  </Grid>
                </Grid>
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
                    value={formik.values.user_message}
                    onChange={formik.handleChange}
                    error={formik.touched.user_message && Boolean(formik.errors.user_message)}
                    helperText={formik.touched.user_message && formik.errors.user_message}
                    style={{ marginBottom: '20px', marginTop: '20px' }}
                  />
                </Box>
              </Grid>
            </Grid>
            <Button color="primary" variant="contained" fullWidth type="submit">
              Submit
            </Button>
          </form>
        </Grid>
        <Grid item xs={12} md={4}>
          {/* Image container removed */}
        </Grid>
        <Grid item xs={12} md={8}>
          {/* Image moved here */}
          <Box
            sx={{
              display: 'flex',
              alignItems: 'flex-start',
              justifyContent: 'center',
              height: '100%',
              pl: '20px',
            }}
          >
            <img
              style={{
                width: '50%',
                objectFit: 'cover',
              }}
              alt="A brief description"
              src={Image2}
            />
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
};

export default ContactUsReact;
