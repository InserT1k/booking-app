import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getDestinationsRequest, getHotelsRequest } from '../redux/actions';
import { Form, Field } from 'react-final-form';
import { useNavigate } from 'react-router-dom';
import {
  Container,
  TextField,
  Button,
  MenuItem,
  Typography,
  Grid,
  Paper,
  Box,
} from '@mui/material';
import { DatePicker, LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import isBefore from 'date-fns/isBefore';

function Main() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const destinations = useSelector((state) => state.hotels.destinations || []);

  useEffect(() => {
    dispatch(getDestinationsRequest());
  }, [dispatch]);

  const onSubmit = (values) => {
    const selectedDestination = destinations.find(
      (destination) => destination.value === values.destination
    );
    const payload = {
      destinationValue: values.destination,
      destinationLabel: selectedDestination.label,
      checkIn: values.checkIn,
      checkOut: values.checkOut,
      adults: values.adults,
      children: values.children,
    };
    dispatch(getHotelsRequest(payload));
    navigate('/hotels');
  };

  const validate = (values) => {
    const errors = {};
    if (!values.destination) {
      errors.destination = 'Required';
    }
    if (!values.checkIn) {
      errors.checkIn = 'Required';
    }
    if (!values.checkOut) {
      errors.checkOut = 'Required';
    } else if (isBefore(values.checkOut, values.checkIn)) {
      errors.checkOut = 'Check-out date must be after check-in date';
    }
    if (!values.adults) {
      errors.adults = 'Required';
    } else if (values.adults <= 0) {
      errors.adults = 'Must be at least 1 adult';
    }
    if (values.children < 0) {
      errors.children = 'Cannot be negative';
    }
    return errors;
  };

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <Container maxWidth="sm">
        <Box sx={{ mt: 8 }}>
          <Paper sx={{ p: 4 }}>
            <Typography variant="h4" align="center" gutterBottom>
              Find Your Hotel
            </Typography>
            <Form
              onSubmit={onSubmit}
              validate={validate}
              render={({ handleSubmit, submitting }) => (
                <form onSubmit={handleSubmit} noValidate>
                  <Field name="destination">
                    {({ input, meta }) => (
                      <TextField
                        {...input}
                        select
                        label="Destination"
                        fullWidth
                        margin="normal"
                        error={meta.error && meta.touched}
                        helperText={meta.touched ? meta.error : undefined}
                      >
                        {destinations.map((destination) => (
                          <MenuItem key={destination.id} value={destination.value}>
                            {destination.label}
                          </MenuItem>
                        ))}
                      </TextField>
                    )}
                  </Field>
                  <Grid container spacing={2}>
                    <Grid item xs={6}>
                      <Field name="checkIn">
                        {({ input, meta }) => (
                          <DatePicker
                            label="Check-in"
                            format="MM/dd/yyyy"
                            value={input.value || null}
                            onChange={(date) => input.onChange(date)}
                            slotProps={{
                              textField: {
                                fullWidth: true,
                                margin: 'normal',
                                error: meta.error && meta.touched,
                                helperText: meta.touched ? meta.error : undefined,
                              },
                            }}
                          />
                        )}
                      </Field>
                    </Grid>
                    <Grid item xs={6}>
                      <Field name="checkOut">
                        {({ input, meta }) => (
                          <DatePicker
                            label="Check-out"
                            format="MM/dd/yyyy"
                            value={input.value || null}
                            onChange={(date) => input.onChange(date)}
                            slotProps={{
                              textField: {
                                fullWidth: true,
                                margin: 'normal',
                                error: meta.error && meta.touched,
                                helperText: meta.touched ? meta.error : undefined,
                              },
                            }}
                          />
                        )}
                      </Field>
                    </Grid>
                    <Grid item xs={6}>
                      <Field name="adults">
                        {({ input, meta }) => (
                          <TextField
                            {...input}
                            type="number"
                            label="Adults"
                            fullWidth
                            margin="normal"
                            inputProps={{ min: 1 }}
                            error={meta.error && meta.touched}
                            helperText={meta.touched ? meta.error : undefined}
                          />
                        )}
                      </Field>
                    </Grid>
                    <Grid item xs={6}>
                      <Field name="children">
                        {({ input, meta }) => (
                          <TextField
                            {...input}
                            type="number"
                            label="Children"
                            fullWidth
                            margin="normal"
                            inputProps={{ min: 0 }}
                            error={meta.error && meta.touched}
                            helperText={meta.touched ? meta.error : undefined}
                          />
                        )}
                      </Field>
                    </Grid>
                  </Grid>
                  <Button
                    type="submit"
                    variant="contained"
                    color="primary"
                    disabled={submitting}
                    fullWidth
                    sx={{ mt: 2 }}
                  >
                    Search
                  </Button>
                </form>
              )}
            />
            <Box sx={{ mt: 4 }}>
              <Typography variant="h5" align="center" gutterBottom>
                Quick and Easy Hotel Search
              </Typography>
              <Typography variant="body1" align="center">
                Use our application to effortlessly find the perfect hotel for your next trip. Just select your destination, specify your travel dates, and indicate the number of guests. Our intuitive interface makes booking hotels simple and enjoyable.
              </Typography>
            </Box>
          </Paper>
        </Box>
      </Container>
    </LocalizationProvider>
  );
}

export default Main;
