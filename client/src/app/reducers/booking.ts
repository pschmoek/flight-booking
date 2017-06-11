import * as booking from '../actions/booking';
import { Flight } from '../models/flight';
import { Booking } from '../models/booking';

export interface State {
  isLoading: boolean;
  flight: Flight;
}

export const initialState: State = {
  flight: null,
  isLoading: false,
}

export function reducer(state = initialState, action: booking.Actions): State {
  switch (action.type) {
    case booking.LOAD_FLIGHT: {
      return {
        flight: null,
        isLoading: true,
      }
    }

    case booking.LOAD_FLIGHT_SUCCESS: {
      return {
        flight: action.payload,
        isLoading: false,
      }
    }

    case booking.ADD_BOOKING_TO_FLIGHT: {
      return {
        flight: state.flight,
        isLoading: false,
      }
    }

    case booking.ADD_BOOKING_TO_FLIGHT_SUCCESS: {
      if (!state.flight.bookings) {
        state.flight.bookings = [];
      }

      state.flight.bookings.push(action.payload)

      return {
        flight: state.flight,
        isLoading: false,
      }
    }

    case booking.ADD_BOOKING_TO_FLIGHT_FAILURE:
    case booking.LOAD_FLIGHT_FAILURE: {
      return {
        flight: null,
        isLoading: false,
      }
    }

    default: {
      return state;
    }
  }
}

export const getFlight = (state: State) => state.flight;
export const getFlightsBookings = (state: State) => state.flight ? state.flight.bookings : null;
export const getFlightsCode = (state: State) => state.flight ? state.flight.code : null;
export const getIsLoading = (state: State) => state.isLoading;
