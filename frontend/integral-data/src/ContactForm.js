import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { TextField, Button, Box, Container, Grid } from '@mui/material';
import { Snackbar, Alert } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import Typography from '@mui/material/Typography';
import TitleSubtitle from './components/TitleSubtitle';
import Image2 from './images/problem.svg';

const ContactForm = () => {
  const [open, setOpen] = React.useState(false);
  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setOpen(false);
  };
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      message: '',
    },
    validationSchema: Yup.object({
      name: Yup.string().required('Required'),
      email: Yup.string().email('Invalid email address').required('Required'),
      message: Yup.string().required('Required'),
    }),
    onSubmit: async (values, { setSubmitting, resetForm }) => {
      try {
        await fetch('http://localhost:8000/send_email/', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(values),
        });
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
    <Container sx={{ paddingTop: '40px' }}       justifyContent="center" // This will center the grid items
    >
      <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
          Message sent successfully - thanks for reaching out!
        </Alert>
      </Snackbar>  
      <Grid container spacing={3} justifyContent="center" // This will center the grid items
>
        <Grid item xs={12} md={8} >
          <form onSubmit={formik.handleSubmit}>

            <TitleSubtitle 
                title="Contact Us" 
                subtitle="Fill out the form below to get in touch with us. We will reach out in the next 1-2 business days."
                  />
            
            
            

<Grid container spacing={3} >
    <Grid item xs={12}>
        <Grid container spacing={3}>
            <Grid item xs={12} sm={6}>
                <Box mb={2}>
                    <TextField
                        fullWidth
                        id="name"
                        name="name"
                        label="Name"
                        value={formik.values.name}
                        onChange={formik.handleChange}
                        error={formik.touched.name && Boolean(formik.errors.name)}
                        helperText={formik.touched.name && formik.errors.name}
                        style={{ marginBottom: '20px', marginTop: '20px' }}
                    />
                </Box>
            </Grid>
            <Grid item xs={12} sm={6}>
                <Box mb={2}>
                    <TextField
                        fullWidth
                        id="email"
                        name="email"
                        label="Email"
                        value={formik.values.email}
                        onChange={formik.handleChange}
                        error={formik.touched.email && Boolean(formik.errors.email)}
                        helperText={formik.touched.email && formik.errors.email}
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
                id="message"
                name="message"
                label="Message"
                value={formik.values.message}
                onChange={formik.handleChange}
                error={formik.touched.message && Boolean(formik.errors.message)}
                helperText={formik.touched.message && formik.errors.message}
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
              alt="Image description"
              src={Image2}
            />
          </Box>
        </Grid>
      </Grid>






      
    </Container>
  );




  
};

export default ContactForm;
