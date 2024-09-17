import React from 'react';
import { Container, Typography, Box, Paper } from '@mui/material';

function About() {
  return (
    <Container sx={{ mt: 8 }}>
      <Paper elevation={3} sx={{ p: 4 }}>
        <Box sx={{ textAlign: 'center' }}>
          <Typography variant="h4" gutterBottom>
            About Us
          </Typography>
          <Typography variant="body1" paragraph>
            Welcome to <strong>Booking App</strong>, your one-stop solution for finding and booking the best hotels worldwide. Our platform allows you to quickly and conveniently search for hotels based on your preferred destination, dates, and number of guests.
          </Typography>
          <Typography variant="body1" paragraph>
            We aim to make your travel planning seamless and enjoyable by providing a user-friendly interface and a wide selection of accommodations to suit every budget and preference. Whether youre traveling for business or leisure, alone or with family, weve got you covered.
          </Typography>
          <Typography variant="body1" paragraph>
            Our application is built with modern technologies like <strong>React</strong> and <strong>Redux</strong>, ensuring a fast and responsive experience. We continuously work to enhance our platform, adding new features and improving existing ones to serve you better.
          </Typography>
          <Typography variant="body1" paragraph>
            Thank you for choosing <strong>Booking App</strong>. We are committed to making your hotel booking experience effortless and enjoyable.
          </Typography>
        </Box>
      </Paper>
    </Container>
  );
}

export default About;
