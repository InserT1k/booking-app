export const GET_HOTELS_REQUEST = 'GET_HOTELS_REQUEST';
export const GET_HOTELS_SUCCESS = 'GET_HOTELS_SUCCESS';
export const GET_DESTINATIONS_REQUEST = 'GET_DESTINATIONS_REQUEST';
export const GET_DESTINATIONS_SUCCESS = 'GET_DESTINATIONS_SUCCESS';

export const getHotelsRequest = (payload) => ({
  type: GET_HOTELS_REQUEST,
  payload,
});

export const getHotelsSuccess = (hotels) => ({
  type: GET_HOTELS_SUCCESS,
  hotels,
});

export const getDestinationsRequest = () => ({
  type: GET_DESTINATIONS_REQUEST,
});

export const getDestinationsSuccess = (destinations) => ({
  type: GET_DESTINATIONS_SUCCESS,
  destinations,
});
