import { Injectable } from '@angular/core';
import { Effect, Actions } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import { Router } from '@angular/router';

import { FlightService } from '../services/flight.service';
import * as flight from '../actions/flight';

@Injectable()
export class FlightEffects {

  @Effect()
  search$ = this.actions$
    .ofType(flight.SEARCH_FLIGHTS)
    .switchMap(a => {
      const nextSearch$ = this.actions$.ofType(flight.SEARCH_FLIGHTS).skip(1);

      return this.flightService.searchFlights(a.payload)
        .takeUntil(nextSearch$)
        .map(f => new flight.SearchFlightsSuccessAction(f))
        .catch(e => Observable.empty());
    });

  @Effect()
  navigation$ = this.actions$
    .ofType(flight.DISPLAY_FLIGHT_DETAILS)
    .switchMap(a => {
      this.router.navigate(['booking', a.payload]);

      return Observable.empty();
    })

  constructor(private actions$: Actions, private flightService: FlightService,
    private router: Router) { }
}
