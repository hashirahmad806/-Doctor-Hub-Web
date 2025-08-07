
import React, { useState } from 'react';
import {
  Container,
  Typography,
  TextField,
  Button,
  Box,
  Paper,
  Stack,
  useTheme,
} from '@mui/material';
import { motion } from 'framer-motion';
import SendIcon from '@mui/icons-material/Send';
import EmailIcon from '@mui/icons-material/Email';
import PersonIcon from '@mui/icons-material/Person';
import SubjectIcon from '@mui/icons-material/Subject';
import MessageIcon from '@mui/icons-material/Message';
import emailjs from '@emailjs/browser';

const ContactUs = () => {
  const theme = useTheme();

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .send(
        'service_103',     // Replace with your EmailJS service ID
        'doctor-Auto-Reply',    // Replace with your EmailJS template ID
        formData,
        '9v86N2LdK4ZKWmc-6'      // Replace with your EmailJS public key
      )
      .then(
        (response) => {
          console.log('SUCCESS!', response.status, response.text);
          alert('Message sent successfully!');
          setFormData({ name: '', email: '', subject: '', message: '' });
        },
        (error) => {
          console.log('FAILED...', error);
          alert('Something went wrong. Please try again.');
        }
      );
  };

  return (
    <Container maxWidth="sm" sx={{ py: 6 }}>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <Paper elevation={3} sx={{ p: 4, borderRadius: 3 }}>
          <Typography variant="h4" gutterBottom align="center">
            Contact Us
          </Typography>
          <Typography variant="body1" color="text.secondary" align="center" mb={3}>
            We’d love to hear from you. Please fill out the form below and we’ll get in touch.
          </Typography>

          <Box component="form" onSubmit={handleSubmit} noValidate>
            <Stack spacing={2}>
              <TextField
                name="name"
                label="Full Name"
                fullWidth
                required
                value={formData.name}
                onChange={handleChange}
                InputProps={{
                  startAdornment: <PersonIcon sx={{ mr: 1 }} />,
                }}
              />
              <TextField
                name="email"
                label="Email Address"
                type="email"
                required
                fullWidth
                value={formData.email}
                onChange={handleChange}
                InputProps={{
                  startAdornment: <EmailIcon sx={{ mr: 1 }} />,
                }}
              />
              <TextField
                name="subject"
                label="Subject"
                fullWidth
                value={formData.subject}
                onChange={handleChange}
                InputProps={{
                  startAdornment: <SubjectIcon sx={{ mr: 1 }} />,
                }}
              />
              <TextField
                name="message"
                label="Your Message"
                multiline
                rows={4}
                required
                fullWidth
                value={formData.message}
                onChange={handleChange}
                InputProps={{
                  startAdornment: <MessageIcon sx={{ mr: 1, alignSelf: 'start' }} />,
                }}
              />

              <Button
                type="submit"
                variant="contained"
                endIcon={<SendIcon />}
                sx={{
                  mt: 2,
                  backgroundColor: theme.palette.primary.main,
                  color: '#fff',
                  '&:hover': {
                    backgroundColor: theme.palette.primary.dark,
                  },
                }}
              >
                Send Message
              </Button>
            </Stack>
          </Box>

          {/* Map Section */}
          <Box mt={6}>
            <Typography variant="h6" gutterBottom>
              Our Location
            </Typography>
            <Box
              component="iframe"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3532.135760365244!2d85.32063041538948!3d27.708956632921382!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb190a6e6f7c67%3A0x977bdbf1f9440b61!2sKathmandu%2C%20Nepal!5e0!3m2!1sen!2snp!4v1631592460056!5m2!1sen!2snp"
              width="100%"
              height="300"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Google Map"
            ></Box>
          </Box>
        </Paper>
      </motion.div>
    </Container>
  );
};

export default ContactUs;
