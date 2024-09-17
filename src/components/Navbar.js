import React from 'react';
import { AppBar, Toolbar, Typography, Button } from '@mui/material';
import { Link } from 'react-router-dom';
import HotelIcon from '@mui/icons-material/Hotel';

function Navbar() {
  return (
    <AppBar position="fixed" color="secondary">
      <Toolbar>
        <HotelIcon sx={{ mr: 1 }} />
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          Booking App
        </Typography>
        <Button color="inherit" component={Link} to="/">
          Home
        </Button>
        <Button color="inherit" component={Link} to="/about">
          About
        </Button>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;
