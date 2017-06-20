import * as booking from '../actions/booking';
import { Flight } from '../models/flight';
import { Booking } from '../models/booking';

export interface State {
  isLoading: boolean;
  flight: Flight;
  isModalOpen: boolean;
}

export const initialState: State = {
  flight: null,
  isLoading: false,
  isModalOpen: false
}

export function reducer(state = initialState, action: booking.Actions): State {
  switch (action.type) {
    case booking.LOAD_FLIGHT: {
      return {
        flight: null,
        isLoading: true,
        isModalOpen: false
      }
    }

    case booking.LOAD_FLIGHT_SUCCESS: {
      return {
        flight: action.payload,
        isLoading: false,
        isModalOpen: false
      }
    }

    case booking.ADD_BOOKING_TO_FLIGHT_SUCCESS: {
      const flight = Object.assign(state.flight);
      if (!flight.bookings) {
        flight.bookings = [];
      }

      flight.bookings = [...flight.bookings, action.payload];

      return {
        flight: flight,
        isLoading: false,
        isModalOpen: false
      }
    }

    case booking.LOAD_FLIGHT_FAILURE: {
      return {
        flight: null,
        isLoading: false,
        isModalOpen: state.isModalOpen
      }
    }

    case booking.OPEN_MODAL: {
      return {
        flight: state.flight,
        isLoading: state.isLoading,
        isModalOpen: true
      }
    }

    case booking.CLOSE_MODAL: {
      return {
        flight: state.flight,
        isLoading: state.isLoading,
        isModalOpen: false
      }
    }

    case booking.NEW_BOOKING_ON_SERVER: {
      if (state.flight && state.flight.id === action.payload.flightId) {
        const booking: Booking = action.payload;
        if (!state.flight.bookings.find(b => b.id === booking.id)) {
          state.flight.bookings = [...state.flight.bookings, booking];
          
          return {
            isLoading: state.isLoading,
            isModalOpen: state.isModalOpen,
            flight: state.flight
          }
        }
      } else {
        return state;
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
export const getIsModalOpen = (state: State) => state.isModalOpen;
