import { useFormik } from 'formik';
import * as Yup from 'yup';
import { TextField, Button, Box, Container, Grid } from '@mui/material';

import Typography from '@mui/material/Typography';
import Image2 from './images/problem.svg';


const ContactForm = () => {
  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      message: '',
    },
    validationSchema: Yup.object({
      name: Yup.string()
        .required('Required'),
      email: Yup.string()
        .email('Invalid email address')
        .required('Required'),
      message: Yup.string()
        .required('Required'),
    }),
    onSubmit: async (values, { setSubmitting, resetForm }) => {
      try {
        // use your send email function
        // sendEmail(values);
        // alert(JSON.stringify(values, null, 2));
        // with this
        await fetch('http://localhost:8000/send_email/', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(values),
        });
        resetForm();
      } catch (error) {
        // show error message
      }
      setSubmitting(false);
    },
  });

  return (
    <Container sx={{ paddingTop: '40px' }}>
        <Grid container spacing={3}>
            <Grid item xs={12} md={8}>
                <form onSubmit={formik.handleSubmit}>
                    <Typography variant="h3" component="h2" align="center" gutterBottom>
                        Contact Us
                    </Typography>

                    <Typography variant="subtitle1" gutterBottom>
                        Fill out the form below to get in touch with us. We'll be in touch in the next 1-2 business days.
                    </Typography>
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
                        />
                    </Box>
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
                        />
                    </Box>
                    <Button color="primary" variant="contained" fullWidth type="submit">
                        Submit
                    </Button>
                </form>
            </Grid>
            <Grid item xs={12} md={4}>
                <Box
                    sx={{
                        display: 'flex',
                        alignItems: 'flex-start',
                        justifyContent: 'center',
                        height: '100%',
                        pl: '20px'
                    }}
                >
                    <img
                        style={{
                            width: '100%',
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