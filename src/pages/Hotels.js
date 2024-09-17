import React from 'react';
import { useSelector } from 'react-redux';
import { Container, Grid, Typography } from '@mui/material';
import HotelCard from '../components/HotelCard';

function Hotels() {
  const hotels = useSelector((state) => {
    console.log('State:', state);
    return state.hotels.hotels || [];
  });

  console.log('Hotels array:', hotels);

  return (
    <Container sx={{ py: 4 }}>

      {hotels.length === 0 ? (
        <Typography variant="h6" align="center" sx={{ mt: 4 }}>
          No hotels found for the selected destination.
        </Typography>
      ) : (
        <Grid container spacing={4}>
          {hotels.map((hotel) => (
            <Grid item key={hotel.id} xs={12} sm={6} md={4}>
              <HotelCard hotel={hotel} />
            </Grid>
          ))}
        </Grid>
      )}
    </Container>
  );
}

export default Hotels;
