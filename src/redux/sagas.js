import { all, takeEvery, call, put } from 'redux-saga/effects';
import axios from 'axios';
import {
  GET_HOTELS_REQUEST,
  getHotelsSuccess,
  GET_DESTINATIONS_REQUEST,
  getDestinationsSuccess,
} from './actions';

function* fetchHotels(action) {
  console.log('Saga fetchHotels called with action:', action);
  try {
    const params = {
      city: action.payload.destinationLabel,
    };
    console.log('Requesting hotels with params:', params);
    const response = yield call(
      axios.get,
      'http://localhost:3001/hotels',
      { params }
    );
    console.log('Response data:', response.data);
    yield put(getHotelsSuccess(response.data));
  } catch (error) {
    console.error('Error fetching hotels:', error);
  }
}

function* fetchDestinations() {
  try {
    console.log('Fetching destinations...');
    const response = yield call(
      axios.get,
      'http://localhost:3001/destination'
    );
    console.log('Destinations fetched:', response.data);
    yield put(getDestinationsSuccess(response.data));
  } catch (error) {
    console.error('Error fetching destinations:', error);
  }
}

export default function* rootSaga() {
  yield all([
    takeEvery(GET_HOTELS_REQUEST, fetchHotels),
    takeEvery(GET_DESTINATIONS_REQUEST, fetchDestinations),
  ]);
}
