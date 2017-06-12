import { ActionReducer } from '@ngrx/store';
import { compose } from '@ngrx/core/compose';
import { combineReducers } from '@ngrx/store';
import { createSelector } from 'reselect';
import { routerReducer, RouterState } from '@ngrx/router-store';

import * as fromCode from './code';
import * as fromFlight from './flight';
import * as fromBooking from './booking';
import * as fromMessage from './message';

export interface State {
  router: RouterState;
  code: fromCode.State;
  flight: fromFlight.State;
  booking: fromBooking.State;
  message: fromMessage.State;
}

const reducers = {
  router: routerReducer,
  code: fromCode.reducer,
  flight: fromFlight.reducer,
  booking: fromBooking.reducer,
  message: fromMessage.reducer
};

const combinedReducers: ActionReducer<State> = combineReducers(reducers);

export function reducer(state: any, action: any) {
  return combinedReducers(state, action);
}

export const getCodeState = (state: State) => state.code;
export const getCodes = createSelector(getCodeState, fromCode.getCodes);
export const getCodesLoading = createSelector(getCodeState, fromCode.getCodesLoading);
export const getCodesModalOpen = createSelector(getCodeState, fromCode.getCodeModalOpen);

export const getFlightState = (state: State) => state.flight;
export const getFlights = createSelector(getFlightState, fromFlight.getFlights);
export const getIsLoadingFlights = createSelector(getFlightState, fromFlight.getIsLoading);
export const getCurrentFlightSearchParams = createSelector(getFlightState, fromFlight.getCurrentParams);

export const getBookingState = (state: State) => state.booking;
export const getBookingFlight = createSelector(getBookingState, fromBooking.getFlight);
export const getBookingFlightCode = createSelector(getBookingState, fromBooking.getFlightsCode);
export const getBookings = createSelector(getBookingState, fromBooking.getFlightsBookings);
export const getBookingIsLoading = createSelector(getBookingState, fromBooking.getIsLoading);
export const getBookingIsModalOpen = createSelector(getBookingState, fromBooking.getIsModalOpen);

export const getMessageState = (state: State) => state.message;
