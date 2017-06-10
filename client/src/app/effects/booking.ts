import { Actions, Effect } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/of';

import { BookingService } from '../services/booking.service';
import { FlightService } from '../services/flight.service';
import * as booking from '../actions/booking';
import { Booking } from '../models/booking';

@Injectable()
export class BookingEffects {

  @Effect()
  addBooking$: Observable<Action> = this.actions$
    .ofType(booking.ADD_BOOKING_TO_FLIGHT)
    .switchMap((a: Action) => {
      return this.bookingService.addBooking(a.payload)
        .map((b: Booking) => new booking.AddBookingToFlightSuccessAction(b))
        .catch(e => Observable.of(new booking.AddBookingToFlightFailureAction(e)));
    });

  @Effect()
  loadFlight$: Observable<Action> = this.actions$
    .ofType(booking.LOAD_FLIGHT)
    .switchMap((a: Action) => {
      return this.flightService.getFlightById(a.payload)
        .map(b => new booking.LoadFlightSuccessAction(b))
        .catch(e => Observable.of(new booking.LoadFlightFailureAction(e)));
    });

  constructor(private actions$: Actions, private flightService: FlightService,
    private bookingService: BookingService) { }
}
