import * as booking from '../actions/booking';
import { Flight } from '../models/flight';
import { Booking } from '../models/booking';

export interface State {
  isLoading: boolean;
  flight: Flight;
  isSaving: boolean;
  errorMessage: string;
}

export const initialState: State = {
  errorMessage: null,
  flight: null,
  isLoading: false,
  isSaving: false
}

export function reducer(state = initialState, action: booking.Actions): State {
  switch (action.type) {
    case booking.LOAD_FLIGHT: {
      return {
        errorMessage: null,
        flight: null,
        isLoading: true,
        isSaving: false
      }
    }

    case booking.LOAD_FLIGHT_SUCCESS: {
      return {
        errorMessage: null,
        flight: action.payload,
        isLoading: false,
        isSaving: false
      }
    }

    case booking.ADD_BOOKING_TO_FLIGHT: {
      return {
        errorMessage: null,
        flight: state.flight,
        isLoading: false,
        isSaving: true
      }
    }

    case booking.ADD_BOOKING_TO_FLIGHT_SUCCESS: {
      if (!state.flight.bookings) {
        state.flight.bookings = [];
      }

      state.flight.bookings.push(action.payload)

      return {
        errorMessage: null,
        flight: state.flight,
        isLoading: false,
        isSaving: false
      }
    }

    case booking.ADD_BOOKING_TO_FLIGHT_FAILURE:
    case booking.LOAD_FLIGHT_FAILURE: {
      return {
        errorMessage: action.payload,
        flight: null,
        isLoading: false,
        isSaving: false
      }
    }

    default: {
      return state;
    }
  }
}

export const getFlight = (state: State) => state.flight;
export const getIsLoading = (state: State) => state.isLoading;
export const getErrorMessage = (state: State) => state.errorMessage;
export const getIsSaving = (state: State) => state.isSaving;
