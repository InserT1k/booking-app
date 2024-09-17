import {
  GET_HOTELS_SUCCESS,
  GET_DESTINATIONS_SUCCESS,
} from './actions';

const initialState = {
  hotels: [],
  destinations: [],
};

const hotelsReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_HOTELS_SUCCESS:
      console.log('Reducer GET_HOTELS_SUCCESS:', action.hotels);
      return {
        ...state,
        hotels: action.hotels,
      };
    case GET_DESTINATIONS_SUCCESS:
      console.log('Reducer GET_DESTINATIONS_SUCCESS:', action.destinations);
      return {
        ...state,
        destinations: action.destinations,
      };
    default:
      return state;
  }
};

export default hotelsReducer;
