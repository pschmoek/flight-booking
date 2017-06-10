import { Action } from '@ngrx/store';

import { Flight } from '../models/flight';
import { FlightSearchParams } from '../models/flight-search-params';

export const SEARCH_FLIGHTS =           '[Flight] Search Flights';
export const SEARCH_FLIGHTS_SUCCESS =   '[Flight] Search Flights Success';
export const DISPLAY_FLIGHT_DETAILS =   '[Flight] Display Flight Details';

export class SearchFlightsAction implements Action {
  readonly type = SEARCH_FLIGHTS;

  constructor(public payload: FlightSearchParams) { }
}

export class SearchFlightsSuccessAction implements Action {
  readonly type = SEARCH_FLIGHTS_SUCCESS;

  constructor(public payload: Flight[]) { }
}

export class DisplayFlightDetailsAction implements Action {
  readonly type = DISPLAY_FLIGHT_DETAILS;

  constructor(public payload: string) { }
}

export type Actions
  = SearchFlightsAction
  | SearchFlightsSuccessAction
  | DisplayFlightDetailsAction;
