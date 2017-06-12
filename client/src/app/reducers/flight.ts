import { Flight } from '../models/flight';
import { FlightSearchParams } from '../models/flight-search-params';
import * as flight from '../actions/flight';

export interface State {
  isLoading: boolean;
  resultsLoaded: boolean;
  flights: Flight[];
  currentParams: FlightSearchParams;
}

export const initialState: State = {
  currentParams: {
    code: '',
    date: '',
    from: '',
    to: ''
  },
  flights: null,
  isLoading: false,
  resultsLoaded: false
}

export function reducer(state = initialState, action: flight.Actions): State {
  switch (action.type) {
    case flight.SEARCH_FLIGHTS: {
      return {
        currentParams: Object.assign({}, action.payload),
        isLoading: true,
        flights: null,
        resultsLoaded: false
      }
    }

    case flight.SEARCH_FLIGHTS_SUCCESS: {
      return {
        currentParams: state.currentParams,
        flights: [...action.payload],
        isLoading: false,
        resultsLoaded: true
      }
    }

    default: {
      return state;
    }
  }
}

export const getFlights = (state: State) => state.flights;
export const getIsLoading = (state: State) => state.isLoading;
export const getCurrentParams = (state: State) => state.currentParams;
