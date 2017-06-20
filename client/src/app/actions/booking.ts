import { Action } from '@ngrx/store';

import { Flight } from '../models/flight';
import { Booking } from '../models/booking';

export const LOAD_FLIGHT =                    '[Booking] Load Flight';
export const LOAD_FLIGHT_SUCCESS =            '[Booking] Load Flight Success';
export const LOAD_FLIGHT_FAILURE =            '[Booking] Load Flight Failure';
export const ADD_BOOKING_TO_FLIGHT =          '[Booking] Add Booking To Flight';
export const ADD_BOOKING_TO_FLIGHT_SUCCESS =  '[Booking] Add Booking To Flight Success';
export const ADD_BOOKING_TO_FLIGHT_FAILURE =  '[Booking] Add Booking To Flight Failure';
export const OPEN_MODAL =                     '[Booking] Open Modal';
export const CLOSE_MODAL =                    '[Booking] Close Modal';
export const NEW_BOOKING_ON_SERVER =          '[Booking] New Booking On Server';

export class LoadFlightAction implements Action {
  readonly type = LOAD_FLIGHT;

  constructor(public payload: string) { }
}

export class LoadFlightSuccessAction implements Action {
  readonly type = LOAD_FLIGHT_SUCCESS;

  constructor(public payload: Flight) { }
}

export class LoadFlightFailureAction implements Action {
  readonly type = LOAD_FLIGHT_FAILURE;

  constructor(public payload: string) { }
}

export class AddBookingToFlightAction implements Action {
  readonly type = ADD_BOOKING_TO_FLIGHT;

  constructor(public payload: Booking) { }
}

export class AddBookingToFlightSuccessAction implements Action {
  readonly type = ADD_BOOKING_TO_FLIGHT_SUCCESS;

  constructor(public payload: Booking) { }
}

export class AddBookingToFlightFailureAction implements Action {
  readonly type = ADD_BOOKING_TO_FLIGHT_FAILURE;

  constructor(public payload: string) { }
}

export class OpenModalAction implements Action {
  readonly type = OPEN_MODAL;
}

export class CloseModalAction implements Action {
  readonly type = CLOSE_MODAL;
}

export class NewBookingOnServerAction implements Action {
  readonly type = NEW_BOOKING_ON_SERVER;

  constructor(public payload: Booking) { }
}

export type Actions
  = LoadFlightAction
  | LoadFlightSuccessAction
  | LoadFlightFailureAction
  | AddBookingToFlightAction
  | AddBookingToFlightSuccessAction
  | AddBookingToFlightFailureAction
  | OpenModalAction
  | CloseModalAction
  | NewBookingOnServerAction;
