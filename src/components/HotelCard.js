import React from 'react';
import PropTypes from 'prop-types';
import {
  Card,
  CardContent,
  Typography,
  CardActions,
  Button,
  List,
  ListItem,
  ListItemText,
  CardMedia,
} from '@mui/material';

function HotelCard({ hotel }) {
  return (
    <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>

      <CardMedia
        component="img"
        height="140"
        image={hotel.image || 'https://via.placeholder.com/300x140'}
        alt={hotel.name}
      />
      <CardContent sx={{ flexGrow: 1 }}>
        <Typography gutterBottom variant="h5" component="div">
          {hotel.name}
        </Typography>
        <List>
          <ListItem disablePadding>
            <ListItemText primary="Address" secondary={hotel.address} />
          </ListItem>
          <ListItem disablePadding>
            <ListItemText primary="City" secondary={hotel.city} />
          </ListItem>
          {hotel.state && (
            <ListItem disablePadding>
              <ListItemText primary="State" secondary={hotel.state} />
            </ListItem>
          )}
          <ListItem disablePadding>
            <ListItemText primary="Country Code" secondary={hotel.country_code} />
          </ListItem>
          <ListItem disablePadding>
            <ListItemText primary="Rating" secondary={hotel.hotel_rating} />
          </ListItem>
          {hotel.phone_number && (
            <ListItem disablePadding>
              <ListItemText primary="Phone Number" secondary={hotel.phone_number} />
            </ListItem>
          )}
          {hotel.website && (
            <ListItem disablePadding>
              <ListItemText primary="Website" secondary={hotel.website} />
            </ListItem>
          )}
        </List>
      </CardContent>
      <CardActions>
        <Button size="small">Book Now</Button>
      </CardActions>
    </Card>
  );
}

HotelCard.propTypes = {
  hotel: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    address: PropTypes.string,
    city: PropTypes.string,
    state: PropTypes.string,
    country_code: PropTypes.string,
    hotel_rating: PropTypes.number,
    phone_number: PropTypes.string,
    website: PropTypes.string,
    image: PropTypes.string, 
  }).isRequired,
};

export default HotelCard;
