import { ActionReducer } from '@ngrx/store';
import { compose } from '@ngrx/core/compose';
import { combineReducers } from '@ngrx/store';
import { createSelector } from 'reselect';

import * as fromCode from './code';
import * as fromCodeDialog from './code-dialog';
import * as fromFlight from './flight';
import * as fromBooking from './booking';
import * as fromMessage from './message';

export interface State {
  code: fromCode.State;
  codeDialog: fromCodeDialog.State;
  flight: fromFlight.State;
  booking: fromBooking.State;
  message: fromMessage.State;
}

const reducers = {
  code: fromCode.reducer,
  codeDialog: fromCodeDialog.reducer,
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
export const getCodesLoaded = createSelector(getCodeState, fromCode.getCodesLoaded);
export const getCodesLoading = createSelector(getCodeState, fromCode.getCodesLoading);

export const getCodeDialogState = (state: State) => state.codeDialog;
export const isCodeDialogOpen = createSelector(getCodeDialogState, fromCodeDialog.isDialogOpen);

export const getFlightState = (state: State) => state.flight;
export const getFlights = createSelector(getFlightState, fromFlight.getFlights);
export const getIsLoadingFlights = createSelector(getFlightState, fromFlight.getIsLoading);
export const getCurrentFlightSearchParams = createSelector(getFlightState, fromFlight.getCurrentParams);

export const getBookingState = (state: State) => state.booking;
export const getBookingFlight = createSelector(getBookingState, fromBooking.getFlight);
export const getBookings = createSelector(getBookingState, fromBooking.getFlightsBookings);
export const getBookingErrorMessage = createSelector(getBookingState, fromBooking.getErrorMessage);
export const getBookingIsLoading = createSelector(getBookingState, fromBooking.getIsLoading);
export const getBookingIsSaving = createSelector(getBookingState, fromBooking.getIsSaving);

export const getMessageState = (state: State) => state.message;
export const getMessage = createSelector(getMessageState, fromMessage.getMessage);
export const getIsMessageOpen = createSelector(getMessageState, fromMessage.getIsOpen);

